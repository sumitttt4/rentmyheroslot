"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Copy, Plus, Terminal } from "lucide-react"
import { useState } from "react"
import { NativePill } from "@/components/native-pill"

export default function DashboardPage() {
    const [domain, setDomain] = useState("safeagree.tech")
    const [price, setPrice] = useState("150")
    const [primaryColor, setPrimaryColor] = useState("#ffffff")

    // Mock generic script
    const scriptCode = `<script src="https://cdn.rentmyheroslot.com/sdk.js" data-id="slot_12345" async></script>`

    return (
        <div className="min-h-screen bg-background p-4 md:p-8">
            <div className="max-w-5xl mx-auto space-y-8">
                <header className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Creator Console</h1>
                        <p className="text-muted-foreground">Setup your slots and integrate.</p>
                    </div>
                    <Button variant="outline">Documentation</Button>
                </header>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Configuration */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Configure Slot</CardTitle>
                            <CardDescription>Define the parameters for your hero placement.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label>Website Domain</Label>
                                <Input value={domain} onChange={e => setDomain(e.target.value)} placeholder="example.com" />
                            </div>
                            <div className="space-y-2">
                                <Label>Weekly Price ($)</Label>
                                <Input
                                    type="number"
                                    value={price}
                                    onChange={e => setPrice(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Accent Color</Label>
                                <p className="text-xs text-muted-foreground mb-2">Matches your site&apos;s primary button or link color.</p>
                                <div className="flex gap-2">
                                    {["#ffffff", "#3b82f6", "#22c55e", "#ef4444", "#f59e0b"].map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setPrimaryColor(color)}
                                            className={`w-8 h-8 rounded-full border border-border transition-transform hover:scale-110 ${primaryColor === color ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''}`}
                                            style={{ backgroundColor: color }}
                                            aria-label={`Select color ${color}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full"><Plus className="w-4 h-4 mr-2" /> Save Configuration</Button>
                        </CardFooter>
                    </Card>

                    {/* Preview & Integrate */}
                    <div className="space-y-6">
                        <Card className="bg-muted/20 border-dashed relative overflow-hidden">
                            <div className="absolute inset-0 bg-grid-pattern mask-image-gradient" />
                            <CardHeader>
                                <CardTitle className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Live Preview</CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center py-12 relative z-10">
                                <NativePill
                                    text="Sponsored: The Privacy First Cloud"
                                    link="#"
                                    theme={{ primaryColor }}
                                    variant="pill"
                                />
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    Integration <Badge variant="secondary" className="font-mono text-xs">v1.0</Badge>
                                </CardTitle>
                                <CardDescription>Add this to your site&apos;s &lt;head&gt; or body.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-black/90 p-4 rounded-md font-mono text-xs text-green-400 relative overflow-x-auto border border-border/50">
                                    {scriptCode}
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="absolute top-1 right-1 h-6 w-6 text-muted-foreground hover:text-white"
                                        onClick={() => navigator.clipboard.writeText(scriptCode)}
                                    >
                                        <Copy className="w-3 h-3" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <Separator />

                <section>
                    <h3 className="text-lg font-semibold mb-4">Active Deployments</h3>
                    <div className="rounded-lg border bg-card p-8 text-center text-muted-foreground flex flex-col items-center justify-center gap-2">
                        <Terminal className="w-8 h-8 opacity-20" />
                        <p>No active slots found. Complete integration to verify.</p>
                    </div>
                </section>
            </div>
        </div>
    )
}
