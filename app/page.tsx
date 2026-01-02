"use client"

import { useState } from "react"
import { FeatureGrid } from "@/components/feature-grid"
import { ProcessGrid } from "@/components/process-grid"
import { FaqAccordions } from "@/components/faq-accordions"
import { WaitlistModal } from "@/components/waitlist-modal"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { NativePill } from "@/components/native-pill"
import { ActivityTicker } from "@/components/activity-ticker"
import { FounderBadge } from "@/components/founder-badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


export default function LandingPage() {
  const [brandName, setBrandName] = useState("")
  const [label, setLabel] = useState("Sponsored")

  return (
    <div className="min-h-screen w-full relative">
      {/* Dark Dot Matrix */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: '#0a0a0a',
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
            radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
          `,
          backgroundSize: '10px 10px',
          imageRendering: 'pixelated',
        }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center overflow-hidden font-sans text-white selection:bg-white/20">

        {/* 1. Interactive Hero Section */}
        <header className="w-full max-w-7xl mx-auto px-4 pt-24 pb-32 flex flex-col items-center text-center z-10 relative">

          {/* Task 1: The Interactive Hero Pill */}
          <motion.div
            layout
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <NativePill
              text={brandName ? `${label}: ${brandName}` : "RentMyHeroSlot is live. Join the new era of ads."}
              link="#"
              variant="glass" // Premium glassmorphism
              theme={{ primaryColor: "#ffffff" }}
              className="shadow-[0_0_50px_-10px_rgba(255,255,255,0.2)]" // Subtle glow
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent max-w-4xl"
          >
            Own the High-Intent Real Estate.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            Stop wasting budget on sidebars. Get featured in the <span className="text-white font-medium">&quot;Announcement Pills&quot;</span> of the world&rsquo;s most trusted tools.
          </motion.p>

          {/* Interactive Previewer Input */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-lg relative mb-12 group"
          >
            {/* Subtle white glow behind */}
            <div className="absolute -inset-0.5 bg-white/10 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000" />

            <div className="relative flex items-center w-full h-14 rounded-2xl border border-white/10 bg-black shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all focus-within:border-white/20 overflow-hidden">

              {/* Label Dropdown Badge */}
              <div className="flex-shrink-0 pl-2">
                <Select value={label} onValueChange={setLabel}>
                  <SelectTrigger className="h-10 w-[140px] border border-white/10 bg-zinc-900 hover:bg-zinc-800 transition-colors rounded-xl text-white font-medium pl-3 focus:ring-0 focus:ring-offset-0 shadow-sm">
                    <SelectValue placeholder="Label" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-white/10 text-white min-w-[150px]">
                    <SelectItem value="Sponsored" className="focus:bg-zinc-900 cursor-pointer">Sponsored</SelectItem>
                    <SelectItem value="Partnered with" className="focus:bg-zinc-900 cursor-pointer">Partnered with</SelectItem>
                    <SelectItem value="Backed by" className="focus:bg-zinc-900 cursor-pointer">Backed by</SelectItem>
                    <SelectItem value="Featured in" className="focus:bg-zinc-900 cursor-pointer">Featured in</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Text Input */}
              <div className="flex-1 flex items-center pr-2 pl-3">
                <Input
                  placeholder="Type your brand name..."
                  className="flex-1 h-14 border-none bg-transparent p-0 text-white placeholder:text-muted-foreground focus-visible:ring-0 text-base font-normal tracking-wide"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                />
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center"
          >
            <WaitlistModal type="advertiser">
              <Button size="lg" className="h-14 px-8 text-base bg-white text-black hover:bg-white/90 rounded-full font-bold shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] transition-all hover:scale-105">
                Browse Premium Slots
              </Button>
            </WaitlistModal>
            <WaitlistModal type="creator">
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/20 bg-transparent text-white hover:bg-white/10 rounded-full hover:scale-105 transition-all">
                List Your Website
              </Button>
            </WaitlistModal>
          </motion.div>

          {/* Task 3: Scarcity & Trust Logic */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <FounderBadge />
          </motion.div>

        </header>

        {/* 2. Feature Section */}
        <FeatureGrid />

        {/* 3. Process Section */}
        <ProcessGrid />

        {/* 5. FAQ Section */}
        <FaqAccordions />

        {/* 6. Footer */}
        <footer className="w-full border-t border-white/10 bg-black py-12 px-4 pb-32">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-2 text-white">RentMyHeroSlot</h4>
              <p className="text-sm text-muted-foreground">The premium marketplace for micro-sponsorships.</p>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} RentMyHeroSlot Inc.
            </div>
          </div>
        </footer>

        {/* Task 2: The Activity Ticker */}
        <ActivityTicker />
      </div>
    </div>

  )
}
