"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export interface NativePillProps {
  text: string
  link: string
  /**
   * configuration for the native look and feel.
   * In a real scenario, this comes from the database based on the host site.
   */
  theme?: {
    primaryColor?: string // hex
    textColor?: string // hex
    backgroundColor?: string // hex
    borderRadius?: string // css value
    fontFamily?: string
  }
  variant?: "pill" | "glass" | "outline" | "ghost"
  icon?: React.ReactNode
  className?: string
}

export function NativePill({
  text,
  link,
  theme,
  variant = "pill",
  icon,
  className
}: NativePillProps) {

  // Default styles if no theme provided
  const styles: React.CSSProperties = {
    fontFamily: theme?.fontFamily,
    borderRadius: theme?.borderRadius,
  }

  // Helper to determine exact styles based on variant + custom theme colors
  // If theme colors are present, they override class-based colors.
  const customColors = theme?.primaryColor ? {
    "--pill-primary": theme.primaryColor,
    "--pill-text": theme.textColor || "#ffffff",
    "--pill-bg": theme.backgroundColor || theme.primaryColor,
  } as React.CSSProperties : {}

  return (
    <Link href={link} className={cn("inline-block group no-underline", className)}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{ ...styles, ...customColors }}
        className={cn(
          "relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 overflow-hidden",
          // Base Variants using Tailwind/CSS vars
          variant === "pill" && "rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
          variant === "glass" && "rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-sm",
          variant === "outline" && "rounded-full border border-border bg-background hover:bg-accent hover:text-accent-foreground",
          variant === "ghost" && "rounded-md hover:bg-accent hover:text-accent-foreground",

          // If custom colors are used, we apply them via style attribute mostly, 
          // but we can use specific utility hooks if needed. 
          // For this MVP, we will rely on style injection for the 'custom' feel if theme is passed.
          theme?.primaryColor && variant === "pill" && "bg-[var(--pill-primary)] text-[var(--pill-text)] hover:opacity-90",
        )}
      >
        {/* Optional: Add a subtle shine effect for 'premium' feel */}
        {variant === "glass" && (
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        )}

        {icon && icon}
        <span>{text}</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 opacity-70" />
      </motion.div>
    </Link>
  )
}
