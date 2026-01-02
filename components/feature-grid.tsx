import { Zap, ShieldCheck, ArrowUpRight, MousePointerClick, LayoutTemplate, Layers } from "lucide-react"

export function FeatureGrid() {
    const features = [
        {
            icon: <LayoutTemplate className="w-5 h-5 text-blue-400" />,
            title: "Design-Engineered Components",
            desc: "Our script automatically detects and inherits the host site’s fonts, colors, and border-radii for a 100% native feel."
        },
        {
            icon: <MousePointerClick className="w-5 h-5 text-purple-400" />,
            title: "Zero Banner Blindness",
            desc: "By placing ads in the 'Announcement Pill' (above H1) or 'Trust-Line' (below CTA), you hit the user's primary eye-path."
        },
        {
            icon: <ShieldCheck className="w-5 h-5 text-green-400" />,
            title: "Ad-Blocker Resistant",
            desc: "Injected as native DOM elements rather than iframe banners, making them significantly harder for filters to block."
        },
        {
            icon: <Layers className="w-5 h-5 text-yellow-400" />,
            title: "Contextual Relevance",
            desc: "We match brands to specific niches (e.g., Privacy tools on Privacy sites), ensuring your message reaches the right mindset."
        }
    ]

    return (
        <section className="py-24 px-4 w-full max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">The Native Advantage.</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Why brands pay more for integrated slots versus traditional ad walls.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((f, i) => (
                    <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors backdrop-blur-sm group">
                        <div className="mb-4 p-3 bg-white/5 w-fit rounded-lg group-hover:scale-110 transition-transform duration-300">
                            {f.icon}
                        </div>
                        <h3 className="font-semibold text-xl mb-2 text-foreground">{f.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
