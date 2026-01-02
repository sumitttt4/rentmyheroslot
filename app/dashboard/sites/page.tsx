import { Button } from "@/components/ui/button"

export default function SitesPage() {
    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold tracking-tight">My Sites</h1>
                <Button className="bg-white text-black hover:bg-zinc-200">
                    Add Site
                </Button>
            </div>
            <div className="text-center py-20 border border-dashed border-white/10 rounded-xl bg-white/5">
                <p className="text-zinc-400">You haven't added any websites yet.</p>
            </div>
        </div>
    )
}
