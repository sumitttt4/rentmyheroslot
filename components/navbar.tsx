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
                    ? "bg-black/50 backdrop-blur-xl border-white/10 py-4"
                    : "bg-transparent border-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                        R
                    </div>
                    <span className="font-bold text-lg tracking-tight">RentMyHeroSlot</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <Link href="#" className="hover:text-white transition-colors">Features</Link>
                    <Link href="#" className="hover:text-white transition-colors">How it works</Link>
                    <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="hidden md:block text-sm font-medium hover:text-white transition-colors">
                        Access Dashboard
                    </Link>
                    <WaitlistModal type="creator">
                        <Button size="sm" className="bg-white text-black hover:bg-white/90 rounded-full px-6">
                            Get Started
                        </Button>
                    </WaitlistModal>
                </div>
            </div>
        </motion.nav>
    )
}
