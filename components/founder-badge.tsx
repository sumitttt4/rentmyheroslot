export function FounderBadge() {
    return (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-900/20 border border-green-500/20 text-xs font-semibold text-green-400 mt-6">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            ONLY 42 FOUNDER SLOTS REMAINING
        </div>
    )
}
