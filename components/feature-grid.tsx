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
        <section id="features" className="py-24 px-4 w-full max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">The Native Advantage.</h2>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">Why brands pay more for integrated slots versus traditional ad walls.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((f, i) => (
                    <div key={i} className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all duration-500 hover:bg-zinc-900/60">
                        <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/10">
                            {f.icon}
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-white">{f.title}</h3>
                        <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
