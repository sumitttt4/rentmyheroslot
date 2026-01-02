
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2 } from "lucide-react"
import { useState } from "react"

// Zod 3+ Schema
const creatorSchema = z.object({
    siteName: z.string().min(2, "Site name is required"),
    domainUrl: z.string().url("Please enter a valid URL"),
    monthlyVisitors: z.string().min(1, "Please select traffic range"),
    category: z.string().min(1, "Please select a category"),
    audienceGeo: z.string().min(1, "Please select top audience geo"),
    weeklyRate: z.coerce.number().min(50, "Minimum rate is $50/week"),
    trafficVerified: z.boolean().default(false),
})

type CreatorFormValues = z.infer<typeof creatorSchema>

interface CreatorFormProps {
    onSuccess: () => void
}

export function CreatorForm({ onSuccess }: CreatorFormProps) {
    const [loading, setLoading] = useState(false)

    const form = useForm<CreatorFormValues>({
        resolver: zodResolver(creatorSchema),
        defaultValues: {
            siteName: "",
            domainUrl: "",
            monthlyVisitors: "",
            category: "",
            audienceGeo: "",
            weeklyRate: 150,
            trafficVerified: false,
        },
    })

    // Explicitly type the handler
    const onSubmit: SubmitHandler<CreatorFormValues> = (data) => {
        setLoading(true)
        // Simulate API call
        console.log("Creator Data:", data)
        setTimeout(() => {
            setLoading(false)
            onSuccess()
        }, 2000)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-left">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField<CreatorFormValues>
                        control={form.control}
                        name="siteName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Site Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="TechDaily" {...field} value={field.value as string} className="bg-white/5 border-white/10" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField<CreatorFormValues>
                        control={form.control}
                        name="domainUrl"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Domain URL</FormLabel>
                                <FormControl>
                                    <Input placeholder="https://techdaily.com" {...field} value={field.value as string} className="bg-white/5 border-white/10" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField<CreatorFormValues>
                        control={form.control}
                        name="monthlyVisitors"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Monthly Visitors</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value as string}>
                                    <FormControl>
                                        <SelectTrigger className="bg-white/5 border-white/10">
                                            <SelectValue placeholder="Select range" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-black border-white/10 text-white">
                                        <SelectItem value="micro">5k - 25k (Micro)</SelectItem>
                                        <SelectItem value="growing">25k - 100k (Growing)</SelectItem>
                                        <SelectItem value="established">100k - 500k (Established)</SelectItem>
                                        <SelectItem value="unicorn">500k+ (Unicorn)</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField<CreatorFormValues>
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Category</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value as string}>
                                    <FormControl>
                                        <SelectTrigger className="bg-white/5 border-white/10">
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-black border-white/10 text-white">
                                        <SelectItem value="tech">Technology & Dev</SelectItem>
                                        <SelectItem value="design">Design & UI</SelectItem>
                                        <SelectItem value="marketing">Marketing & Business</SelectItem>
                                        <SelectItem value="lifestyle">Lifestyle & Travel</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField<CreatorFormValues>
                    control={form.control}
                    name="audienceGeo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Top Audience Geo</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value as string}>
                                <FormControl>
                                    <SelectTrigger className="bg-white/5 border-white/10">
                                        <SelectValue placeholder="Select primary country" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-black border-white/10 text-white">
                                    <SelectItem value="us">United States</SelectItem>
                                    <SelectItem value="eu">Europe</SelectItem>
                                    <SelectItem value="uk">United Kingdom</SelectItem>
                                    <SelectItem value="apac">Asia Pacific</SelectItem>
                                    <SelectItem value="global">Global / Remote</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField<CreatorFormValues>
                    control={form.control}
                    name="weeklyRate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Desired Weekly Rate ($)</FormLabel>
                            <FormControl>
                                <Input type="number" {...field} value={field.value as number} className="bg-white/5 border-white/10" />
                            </FormControl>
                            <FormDescription>
                                We typically sell slots at a 20% premium over standard CPM.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField<CreatorFormValues>
                    control={form.control}
                    name="trafficVerified"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-white/10 p-4 bg-white/5">
                            <FormControl>
                                <Checkbox
                                    checked={field.value as boolean}
                                    onCheckedChange={field.onChange}
                                    className="border-white/50 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>
                                    Verify Traffic Automatically
                                </FormLabel>
                                <FormDescription>
                                    Connect Google Analytics to get "Verified" badge and 2x higher sell-through.
                                </FormDescription>
                            </div>
                        </FormItem>
                    )}
                />

                <Button type="submit" disabled={loading} className="w-full bg-white text-black hover:bg-white/90 font-bold h-11 mt-4">
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {loading ? "Submitting..." : "List My Website"}
                </Button>
            </form>
        </Form>
    )
}

