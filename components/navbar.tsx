"use client"

import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { WaitlistModal } from "@/components/waitlist-modal"
import { cn } from "@/lib/utils"

export function Navbar() {
    const { scrollY } = useScroll()
    const [scrolled, setScrolled] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50)
    })

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-black/80 backdrop-blur-md border-white/5 py-3"
                    : "bg-transparent border-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between relative">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group z-10">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center font-bold text-white group-hover:bg-white group-hover:text-black transition-colors">
                        R
                    </div>
                    <span className="font-semibold text-lg tracking-tight text-white group-hover:opacity-100 transition-opacity">RentMyHeroSlot</span>
                </Link>

                {/* Centered Nav Actions */}
                <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <WaitlistModal type="creator">
                        <button className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                            Rent Website Space
                        </button>
                    </WaitlistModal>

                    <WaitlistModal type="advertiser">
                        <button className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                            Buy Hero Ad Space
                        </button>
                    </WaitlistModal>

                    <Link href="#how-it-works">
                        <Button size="sm" className="bg-zinc-950 text-white border border-white/20 hover:bg-zinc-900 rounded-full px-5 h-9 font-medium ring-2 ring-blue-600 ring-offset-2 ring-offset-black transition-all shadow-[0_0_10px_rgba(37,99,235,0.2)]">
                            How It Works
                        </Button>
                    </Link>
                </div>

                {/* Right Actions (Login) */}
                <div className="flex items-center gap-4 z-10">
                    <Link
                        href="/login"
                        className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                    >
                        Log in
                    </Link>
                </div>
            </div>
        </motion.nav>
    )
}
