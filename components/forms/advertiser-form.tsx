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
import { Slider } from "@/components/ui/slider"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const advertiserSchema = z.object({
    companyName: z.string().min(2, "Company name is required"),
    websiteUrl: z.string().url("Please enter a valid URL"),
    workEmail: z.string().email("Please enter a valid work email"),
    targetNiche: z.string().min(1, "Please select a target niche"),
    monthlyBudget: z.number().min(500, "Minimum budget is $500/week"),
    campaignGoal: z.enum(["awareness", "conversion"], {
        errorMap: () => ({ message: "Please select a campaign goal" }),
    }),
})

type AdvertiserFormValues = z.infer<typeof advertiserSchema>

interface AdvertiserFormProps {
    onSuccess: () => void
}

export function AdvertiserForm({ onSuccess }: AdvertiserFormProps) {
    const [loading, setLoading] = useState(false)

    const form = useForm<AdvertiserFormValues>({
        resolver: zodResolver(advertiserSchema),
        defaultValues: {
            companyName: "",
            websiteUrl: "",
            workEmail: "",
            targetNiche: "",
            monthlyBudget: 500,
            campaignGoal: "conversion",
        },
    })

    const onSubmit: SubmitHandler<AdvertiserFormValues> = (data) => {
        setLoading(true)
        // Simulate API call
        console.log("Advertiser Data:", data)
        setTimeout(() => {
            setLoading(false)
            onSuccess()
        }, 2000)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-left">
                <FormField<AdvertiserFormValues>
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Acme Inc." {...field} value={field.value as string} className="bg-white/5 border-white/10" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField<AdvertiserFormValues>
                    control={form.control}
                    name="websiteUrl"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Website URL</FormLabel>
                            <FormControl>
                                <Input placeholder="https://acme.com" {...field} value={field.value as string} className="bg-white/5 border-white/10" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField<AdvertiserFormValues>
                    control={form.control}
                    name="workEmail"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Work Email</FormLabel>
                            <FormControl>
                                <Input placeholder="marketing@acme.com" {...field} value={field.value as string} className="bg-white/5 border-white/10" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField<AdvertiserFormValues>
                        control={form.control}
                        name="targetNiche"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Target Niche</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value as string}>
                                    <FormControl>
                                        <SelectTrigger className="bg-white/5 border-white/10">
                                            <SelectValue placeholder="Select niche" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-black border-white/10 text-white">
                                        <SelectItem value="saas">SaaS & B2B</SelectItem>
                                        <SelectItem value="dev">Developer Tools</SelectItem>
                                        <SelectItem value="design">Design & Creative</SelectItem>
                                        <SelectItem value="marketing">Marketing & SEO</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField<AdvertiserFormValues>
                        control={form.control}
                        name="campaignGoal"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Primary Goal</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        value={field.value as string}
                                        className="flex space-x-4 pt-2"
                                    >
                                        <FormItem className="flex items-center space-x-2 space-y-0 text-white/80">
                                            <FormControl>
                                                <RadioGroupItem value="conversion" className="border-white/50 text-white" />
                                            </FormControl>
                                            <FormLabel className="font-normal cursor-pointer">
                                                Conversion
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-2 space-y-0 text-white/80">
                                            <FormControl>
                                                <RadioGroupItem value="awareness" className="border-white/50 text-white" />
                                            </FormControl>
                                            <FormLabel className="font-normal cursor-pointer">
                                                Awareness
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField<AdvertiserFormValues>
                    control={form.control}
                    name="monthlyBudget"
                    render={({ field }) => (
                        <FormItem>
                            <div className="flex justify-between items-center">
                                <FormLabel>Weekly Budget Cap</FormLabel>
                                <span className="text-sm text-green-400 font-medium">${field.value}</span>
                            </div>
                            <FormControl>
                                <Slider
                                    min={500}
                                    max={10000}
                                    step={500}
                                    value={[field.value as number]}
                                    onValueChange={(vals) => field.onChange(vals[0])}
                                    className="py-4"
                                />
                            </FormControl>
                            <FormDescription>
                                Minimum commitment required for premium slots.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" disabled={loading} className="w-full bg-white text-black hover:bg-white/90 font-bold h-11 mt-2">
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {loading ? "Securing Slot..." : "Review Available Slots"}
                </Button>
            </form>
        </Form>
    )
}
