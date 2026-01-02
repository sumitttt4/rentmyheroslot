import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqAccordions() {
    return (
        <section className="py-24 px-4 w-full max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Common Questions</h2>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is there a set-up fee?</AccordionTrigger>
                    <AccordionContent>
                        No, we only take a 20% commission when a successful booking occurs. Creating an account and listing your site is completely free.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>How do I know the traffic is real?</AccordionTrigger>
                    <AccordionContent>
                        We verify site traffic using a script-based pixel during onboarding and provide live analytics for every active slot. You get proof of every impression.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Can I choose the label?</AccordionTrigger>
                    <AccordionContent>
                        Yes! Creators can choose labels like "Sponsored," "Backed by," or "Partnered with" to match their brand voice and maintain trust.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>What happens if I reject a brand?</AccordionTrigger>
                    <AccordionContent>
                        Nothing bad! You have 100% veto power. If you reject a brand, their funds are returned to them or credited for another campaign.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    )
}
