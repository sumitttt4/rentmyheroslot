"use client"

import { useState } from "react"
import { createClient } from "@/utils/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Mail } from "lucide-react"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const supabase = createClient()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            const { error } = await supabase.auth.signInWithOtp({
                email,
                options: {
                    emailRedirectTo: `${window.location.origin}/auth/callback`,
                },
            })

            if (error) {
                throw error
            }

            setSubmitted(true)
        } catch (err: any) {
            setError(err.message || "Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    if (submitted) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-black p-4">
                <Card className="w-full max-w-md border-white/10 bg-zinc-900/50 text-white backdrop-blur-xl">
                    <CardHeader className="text-center">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                            <Mail className="h-6 w-6 text-green-500" />
                        </div>
                        <CardTitle className="text-xl">Check your email</CardTitle>
                        <CardDescription className="text-zinc-400">
                            We've sent a magic link to <span className="text-white font-medium">{email}</span>. Click it to sign in.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button
                            variant="outline"
                            className="w-full border-white/10 text-white hover:bg-white/5"
                            onClick={() => setSubmitted(false)}
                        >
                            Back to Login
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        )
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-black p-4">
            {/* Background Effect */}
            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, #222222 0.5px, transparent 1px)`,
                    backgroundSize: '10px 10px',
                }}
            />

            <Card className="relative z-10 w-full max-w-md border-white/10 bg-zinc-900/50 text-white backdrop-blur-xl transition-all duration-500 hover:border-white/20">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-2xl font-bold tracking-tight">Welcome back</CardTitle>
                    <CardDescription className="text-zinc-400">
                        Enter your email to sign in to your account.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-zinc-300">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border-white/10 bg-black/50 text-white placeholder:text-zinc-600 focus-visible:ring-indigo-500"
                            />
                        </div>
                        {error && (
                            <div className="rounded-md bg-red-500/10 p-3 text-sm text-red-500 border border-red-500/20">
                                {error}
                            </div>
                        )}
                        <Button
                            type="submit"
                            className="w-full bg-white text-black hover:bg-zinc-200 font-semibold h-10"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Sending Magic Link...
                                </>
                            ) : (
                                "Sign In via Magic Link"
                            )}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center border-t border-white/5 pt-6">
                    <p className="text-xs text-zinc-500">
                        By clicking continue, you agree to our Terms of Service.
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
