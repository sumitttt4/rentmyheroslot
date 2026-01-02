import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "RentMyHeroSlot | Premium Micro-Sponsorships",
  description: "The marketplace for high-value website real estate. Native ad integration for creators and brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen selection:bg-primary/20`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
