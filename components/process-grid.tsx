import { Badge } from "@/components/ui/badge"

export function ProcessGrid() {
    return (
        <section id="how-it-works" className="py-24 px-4 w-full bg-white/5 border-y border-white/5 scroll-mt-24">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">How It Works</h2>
                    <p className="text-lg text-muted-foreground">The dual-sided marketplace workflow.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 md:gap-24 relative">
                    {/* Divider Line for Desktop */}
                    <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

                    {/* Brands Side */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 mb-8">
                            <Badge variant="outline" className="text-white border-white/20 px-3 py-1">For Brands</Badge>
                            <h3 className="text-2xl font-bold">The Buyers</h3>
                        </div>

                        <Step number="1" title="Find Your Niche" desc="Browse a curated database of tools with verified traffic." />
                        <Step number="2" title="Craft Your Message" desc="Enter your brand name and copy. No design skills needed." />
                        <Step number="3" title="Secure the Spot" desc="Pay upfront into escrow. Your ad goes live once approved." />
                    </div>

                    {/* Creators Side */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 mb-8 md:justify-end">
                            <h3 className="text-2xl font-bold">The Sellers</h3>
                            <Badge variant="outline" className="text-white border-white/20 px-3 py-1">For Creators</Badge>
                        </div>

                        <Step number="1" title="Paste the Script" desc="Add a one-line tag to your site to unlock your Hero Slot." align="right" />
                        <Step number="2" title="Set Your Price" desc="You control your weekly and monthly rates for every slot." align="right" />
                        <Step number="3" title="Approve & Earn" desc="Review brands, select your label, and get paid." align="right" />
                    </div>
                </div>
            </div>
        </section>
    )
}

function Step({ number, title, desc, align = "left" }: { number: string, title: string, desc: string, align?: "left" | "right" }) {
    return (
        <div className={`flex flex-col gap-2 ${align === "right" ? "md:items-end md:text-right" : ""}`}>
            <div className="text-4xl font-mono font-bold text-white/10 mb-2">0{number}</div>
            <h4 className="text-lg font-semibold">{title}</h4>
            <p className="text-muted-foreground leading-relaxed max-w-sm">{desc}</p>
        </div>
    )
}
