import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, BarChart3, Globe } from "lucide-react"

export default function DashboardPage() {
    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-zinc-400 mt-1">Manage your sites and track earnings.</p>
                </div>
                <Button className="bg-white text-black hover:bg-zinc-200">
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Site
                </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-zinc-900/50 border-white/10">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-400">Total Earnings</CardTitle>
                        <span className="text-xl font-bold">$0.00</span>
                    </CardHeader>
                    <CardContent>
                        <p className="text-xs text-zinc-500">+0% from last month</p>
                    </CardContent>
                </Card>
                <Card className="bg-zinc-900/50 border-white/10">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-400">Active Slots</CardTitle>
                        <Globe className="h-4 w-4 text-zinc-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">0</div>
                        <p className="text-xs text-zinc-500">Across 0 sites</p>
                    </CardContent>
                </Card>
                <Card className="bg-zinc-900/50 border-white/10">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-400">Impressions</CardTitle>
                        <BarChart3 className="h-4 w-4 text-zinc-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">0</div>
                        <p className="text-xs text-zinc-500">Last 30 days</p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activity / Empty State */}
            <div className="text-center py-20 border border-dashed border-white/10 rounded-xl bg-white/5">
                <h3 className="text-xl font-semibold mb-2">No active sites yet</h3>
                <p className="text-zinc-400 max-w-md mx-auto mb-6">
                    Connect your website to start monetizing your header space.
                </p>
                <Button variant="outline" className="border-white/10 hover:bg-white/5">
                    Connect Website
                </Button>
            </div>
        </div>
    )
}
