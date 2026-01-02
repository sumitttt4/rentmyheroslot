"use client"

import { useState } from "react"
import { FeatureGrid } from "@/components/feature-grid"
import { ProcessGrid } from "@/components/process-grid"
import { FaqAccordions } from "@/components/faq-accordions"
import { SiteFooter } from "@/components/site-footer"
import { WaitlistModal } from "@/components/waitlist-modal"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { NativePill } from "@/components/native-pill"
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
        <header className="w-full max-w-4xl mx-auto px-4 pt-40 pb-24 flex flex-col items-center text-center z-10 relative">

          {/* Status Pill */}
          <motion.div
            layout
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <NativePill
              text={brandName ? `${label}: ${brandName}` : "RentMyHeroSlot is now in public beta."}
              link="#"
              variant="pill"
              theme={{
                primaryColor: "#ffffff",
                textColor: "#000000"
              }}
              className="shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)] font-semibold"
            />
          </motion.div>

          {/* H1 Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-10 text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
          >
            The Marketplace for <br className="hidden md:block" />
            <span className="text-white/80">Premium Header Slots.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed font-normal"
          >
            Directly book prime announcement space on the world&rsquo;s best SaaS tools and newsletters. No auctions, just results.
          </motion.p>

          {/* Interactive Previewer Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-16 w-full max-w-2xl"
          >
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {/* Label Dropdown */}
              <Select value={label} onValueChange={setLabel}>
                <SelectTrigger className="h-14 w-full sm:w-[180px] border border-white/10 bg-zinc-900/80 hover:bg-zinc-800 transition-colors rounded-xl text-white font-medium px-4 focus:ring-0 focus:ring-offset-0 focus:border-white/20">
                  <SelectValue placeholder="Select label" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-white/10 text-white">
                  <SelectItem value="Sponsored" className="focus:bg-white/10 cursor-pointer">Sponsored</SelectItem>
                  <SelectItem value="Partnered with" className="focus:bg-white/10 cursor-pointer">Partnered with</SelectItem>
                  <SelectItem value="Backed by" className="focus:bg-white/10 cursor-pointer">Backed by</SelectItem>
                  <SelectItem value="Featured in" className="focus:bg-white/10 cursor-pointer">Featured in</SelectItem>
                </SelectContent>
              </Select>

              {/* Brand Name Input */}
              <div className="flex-1 relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-white/5 to-white/10 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition duration-500" />
                <Input
                  placeholder="Enter your brand name..."
                  className="relative h-14 w-full border border-white/10 bg-zinc-900/80 rounded-xl text-white placeholder:text-zinc-500 focus-visible:ring-0 focus-visible:border-white/20 text-base px-4"
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
            className="mt-12 flex flex-col sm:flex-row gap-3 w-full justify-center items-center"
          >
            <WaitlistModal type="advertiser">
              <Button size="lg" className="h-12 px-6 text-sm font-semibold bg-white text-black hover:bg-zinc-100 rounded-2xl shadow-md transition-all">
                Browse Premium Slots
              </Button>
            </WaitlistModal>
            <WaitlistModal type="creator">
              <Button size="lg" className="h-12 px-6 text-sm font-semibold bg-zinc-900 text-white border border-white/10 hover:bg-zinc-800 rounded-2xl transition-all">
                List Your Website
              </Button>
            </WaitlistModal>
          </motion.div>

          {/* Founder Slots Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
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
        {/* 6. Footer */}
        <SiteFooter />


      </div>
    </div>

  )
}
