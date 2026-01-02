"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { NativePill } from "@/components/native-pill"
import { Sparkles, RefreshCcw } from "lucide-react"

export function BrandLivePreview() {
    const [brandName, setBrandName] = useState("Your Brand")
    const [url, setUrl] = useState("https://your-site.com")
    const [isAnimating, setIsAnimating] = useState(false)

    const handleSimulate = () => {
        setIsAnimating(true)
        setTimeout(() => setIsAnimating(false), 800)
    }

    return (
        <div className="w-full max-w-2xl mx-auto backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {/* Mock Browser Toolbar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <div className="flex-1 ml-4 bg-black/50 rounded-md px-3 py-1.5 text-xs text-muted-foreground flex items-center justify-between font-mono">
                    <span>{url}</span>
                    <RefreshCcw className={`w-3 h-3 ${isAnimating ? "animate-spin" : ""}`} />
                </div>
            </div>

            {/* Mock Website Header Area */}
            <div className="p-8 md:p-12 flex flex-col items-center justify-center min-h-[300px] relative">
                {/* Background Grid for context */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />

                <div className="z-10 w-full flex flex-col items-center gap-8">

                    {/* The Ad Rendering */}
                    <motion.div
                        key={brandName} // Re-animate on change
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <NativePill
                            text={`Sponsored: ${brandName}`}
                            link="#"
                            variant="glass"
                            theme={{ primaryColor: "#ffffff" }} // Default to white for the dark preview
                            className="shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]"
                        />
                    </motion.div>

                    {/* Inputs for User Interaction */}
                    <div className="w-full max-w-sm space-y-4 bg-black/80 p-5 rounded-xl border border-white/10 mt-8 backdrop-blur-md">
                        <div className="grid gap-2">
                            <Label htmlFor="brand" className="text-xs text-muted-foreground">Brand Name / Message</Label>
                            <Input
                                id="brand"
                                value={brandName}
                                onChange={(e) => setBrandName(e.target.value)}
                                className="bg-white/5 border-white/10 text-white h-9 focus-visible:ring-1 focus-visible:ring-white/30"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="url" className="text-xs text-muted-foreground">Destination URL</Label>
                            <Input
                                id="url"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                className="bg-white/5 border-white/10 text-white h-9 focus-visible:ring-1 focus-visible:ring-white/30 font-mono text-xs"
                            />
                        </div>
                        <Button
                            onClick={handleSimulate}
                            size="sm"
                            className="w-full bg-white text-black hover:bg-white/90"
                        >
                            <Sparkles className="w-3.5 h-3.5 mr-2" />
                            Render Live Preview
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
