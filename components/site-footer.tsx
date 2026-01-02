export function SiteFooter() {
    return (
        <footer className="w-full border-t border-white/5 bg-black py-16 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="space-y-1">
                    <h3 className="text-base font-bold text-white tracking-tight">RentMyHeroSlot</h3>
                    <p className="text-sm text-zinc-500">The premium marketplace for micro-sponsorships.</p>
                </div>

                <div className="text-sm text-zinc-600 font-medium">
                    © 2026 RentMyHeroSlot Inc.
                </div>
            </div>

            {/* The 'N' badge from the screenshot - Bottom Left Fixed or Absolute */}
            <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 border border-white/10 text-white font-mono text-xs hover:scale-110 transition-transform cursor-default">
                N
            </div>
        </footer>
    )
}
