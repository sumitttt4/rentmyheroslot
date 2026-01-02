-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. PROFILES (Extends Supabase Auth)
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  email text not null,
  role text check (role in ('creator', 'advertiser', 'admin')) default 'creator',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. SITES (The Inventory)
create table public.sites (
  id uuid default uuid_generate_v4() primary key,
  owner_id uuid references public.profiles(id) on delete cascade not null,
  domain text not null,
  status text check (status in ('unverified', 'verified', 'rejected')) default 'unverified',
  verification_token text default uuid_generate_v4(),
  traffic_stats jsonb default '{}'::jsonb, -- e.g. { "monthly_visitors": 50000, "top_geo": "US" }
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. SLOTS (The Product)
create table public.slots (
  id uuid default uuid_generate_v4() primary key,
  site_id uuid references public.sites(id) on delete cascade not null,
  name text not null, -- e.g. "Sticky Header", "Newsletter Top"
  description text,
  price_weekly numeric not null,
  is_available boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. BOOKINGS (The Transaction)
create table public.bookings (
  id uuid default uuid_generate_v4() primary key,
  slot_id uuid references public.slots(id) on delete set null,
  advertiser_id uuid references public.profiles(id) on delete cascade not null,
  status text check (status in ('pending', 'active', 'completed', 'cancelled')) default 'pending',
  content jsonb not null, -- e.g. { "text": "Ad Copy", "link": "https://...", "image": "..." }
  start_date timestamp with time zone not null,
  end_date timestamp with time zone not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 5. ANALYTICS (Daily stats per slot)
create table public.analytics_daily (
  id uuid default uuid_generate_v4() primary key,
  slot_id uuid references public.slots(id) on delete cascade not null,
  date date default current_date not null,
  impressions integer default 0,
  clicks integer default 0,
  unique (slot_id, date) -- One record per slot per day
);

-- 6. TRANSACTIONS (Money & Payouts)
create table public.transactions (
  id uuid default uuid_generate_v4() primary key,
  booking_id uuid references public.bookings(id) on delete set null,
  amount numeric not null, -- Total charged
  platform_fee numeric not null, -- Our cut
  stripe_payment_id text,
  payout_status text check (payout_status in ('pending', 'paid', 'failed')) default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 7. NOTIFICATIONS (Engagement)
create table public.notifications (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  type text check (type in ('booking_request', 'payment_success', 'slot_approved', 'general')) not null,
  message text not null,
  data jsonb default '{}'::jsonb,
  is_read boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS POLICIES (Row Level Security)
alter table public.profiles enable row level security;
alter table public.sites enable row level security;
alter table public.slots enable row level security;
alter table public.bookings enable row level security;
alter table public.analytics_daily enable row level security;
alter table public.transactions enable row level security;
alter table public.notifications enable row level security;

-- Profiles: Public read, Self update
create policy "Public profiles are viewable by everyone." on public.profiles for select using (true);
create policy "Users can insert their own profile." on public.profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile." on public.profiles for update using (auth.uid() = id);

-- Sites: Public read (for verified), Owner write
create policy "Sites are viewable by everyone." on public.sites for select using (true);
create policy "Users can insert their own sites." on public.sites for insert with check (auth.uid() = owner_id);
create policy "Users can update own sites." on public.sites for update using (auth.uid() = owner_id);

-- Slots: Public read, Owner write (via Site)
create policy "Slots are viewable by everyone." on public.slots for select using (true);
create policy "Site owners can insert slots." on public.slots for insert with check (
  exists ( select 1 from public.sites where id = site_id and owner_id = auth.uid() )
);

-- TRIGGER: Create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, role)
  values (new.id, new.email, 'creator'); -- Default to creator, user can pick later
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
