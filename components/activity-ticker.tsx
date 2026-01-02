"use client"

import { motion } from "framer-motion"

const activities = [
    { name: "Alex", text: "SaaS Platform joined waitlist", time: "2m ago" },
    { name: "Sarah", text: "DevTool Startup joined waitlist", time: "5m ago" },
    { name: "Mike", text: "Marketing Agency joined waitlist", time: "12m ago" },
    { name: "Emily", text: "Travel Blog verified traffic", time: "18m ago" },
    { name: "David", text: "Hosting Provider booked a slot", time: "1h ago" },
    { name: "Lisa", text: "Data API joined waitlist", time: "2h ago" },
]

export function ActivityTicker() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-t border-white/10 py-3 overflow-hidden pointer-events-none">
            <div className="max-w-7xl mx-auto relative flex items-center">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

                <motion.div
                    className="flex items-center gap-12 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                >
                    {[...activities, ...activities].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                            <img
                                src={`https://api.dicebear.com/9.x/notionists/svg?seed=${item.name}&backgroundColor=c0aede,ffdfbf,b3e5fc`}
                                alt="avatar"
                                className="w-8 h-8 rounded-full border border-white/10 bg-white/5"
                            />
                            <span className="text-white/80 font-medium">{item.text}</span>
                            <span className="text-xs opacity-50">{item.time}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
