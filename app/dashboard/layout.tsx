"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Globe, DollarSign, LogOut } from "lucide-react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const supabase = createClient()

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        window.location.href = "/"
    }

    const navItems = [
        { label: "Overview", href: "/dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
        { label: "Sites", href: "/dashboard/sites", icon: <Globe className="w-4 h-4" /> },
        { label: "Earnings", href: "/dashboard/earnings", icon: <DollarSign className="w-4 h-4" /> },
    ]

    return (
        <div className="flex h-screen w-full bg-black text-white">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 hidden md:flex flex-col">
                <div className="p-6">
                    <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                        <div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center text-sm">R</div>
                        RentMyHero
                    </Link>
                </div>

                <nav className="flex-1 px-4 py-4 space-y-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${pathname === item.href
                                    ? "bg-white/10 text-white"
                                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            {item.icon}
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start text-zinc-400 hover:text-white hover:bg-white/5 gap-2"
                        onClick={handleSignOut}
                    >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                {children}
            </main>
        </div>
    )
}
