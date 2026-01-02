import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqAccordions() {
    return (
        <section className="py-32 px-4 w-full max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center text-white">Common Questions</h2>
            <Accordion type="single" collapsible className="w-full space-y-0">
                <AccordionItem value="item-1" className="border-b border-white/10 px-0">
                    <AccordionTrigger className="hover:no-underline hover:text-white py-6 text-base font-medium text-zinc-200">
                        Is there a set-up fee?
                    </AccordionTrigger>
                    <AccordionContent className="text-zinc-400 pb-6 text-base leading-relaxed">
                        Zero setup fees. We only earn when you earn. Listing your site is completely free, and we take a flat 20% commission on successful bookings only.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b border-white/10 px-0">
                    <AccordionTrigger className="hover:no-underline hover:text-white py-6 text-base font-medium text-zinc-200">
                        How do I know the traffic is real?
                    </AccordionTrigger>
                    <AccordionContent className="text-zinc-400 pb-6 text-base leading-relaxed">
                        We verify every impression with our own pixel. We filter out bots and provide you with a transparent report of real human views, so you pay only for genuine reach.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b border-white/10 px-0">
                    <AccordionTrigger className="hover:no-underline hover:text-white py-6 text-base font-medium text-zinc-200">
                        Can I choose the label?
                    </AccordionTrigger>
                    <AccordionContent className="text-zinc-400 pb-6 text-base leading-relaxed">
                        Yes. You maintain full creative control. Choose labels like "Partnered with" or "Sponsored by" to ensure the integration feels natural and respects your audience.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-b border-white/10 px-0 border-none">
                    <AccordionTrigger className="hover:no-underline hover:text-white py-6 text-base font-medium text-zinc-200">
                        What happens if I reject a brand?
                    </AccordionTrigger>
                    <AccordionContent className="text-zinc-400 pb-6 text-base leading-relaxed">
                        You have 100% control. Reject any brand that doesn't fit your vibe. No questions asked. Your slots remain open for other advertisers who align better with your mission.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    )
}
