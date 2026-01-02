"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import { AdvertiserForm } from "@/components/forms/advertiser-form"
import { CreatorForm } from "@/components/forms/creator-form"

interface WaitlistModalProps {
    children: React.ReactNode
    type: "creator" | "advertiser"
}

export function WaitlistModal({ children, type }: WaitlistModalProps) {
    const [open, setOpen] = useState(false)

    const handleSuccess = () => {
        setOpen(false)
        // Could trigger a toast here
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] bg-black border-white/10 text-white overflow-y-auto max-h-[90vh]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">
                        {type === "creator" ? "List Your Website" : "Secure Your Slot"}
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                        {type === "creator"
                            ? "Join the network of high-quality publishers."
                            : "Apply for early access to premium inventory."}
                    </DialogDescription>
                </DialogHeader>

                <div className="py-4">
                    {type === "advertiser" ? (
                        <AdvertiserForm onSuccess={handleSuccess} />
                    ) : (
                        <CreatorForm onSuccess={handleSuccess} />
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}
