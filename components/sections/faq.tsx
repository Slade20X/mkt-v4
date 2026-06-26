import { faqItems } from "@/lib/content"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export function Faq() {
  return (
    <section className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Najczęściej zadawane pytania"
          description="Masz inne pytanie? Napisz do nas - odpowiemy w ciągu jednego dnia roboczego."
        />

        <Reveal delay={1} className="mt-12">
          <Accordion className="rounded-3xl border border-border bg-card/40 px-6">
            {faqItems.map((item, i) => (
              <AccordionItem key={item.question} value={`item-${i}`}>
                <AccordionTrigger className="py-5 text-base font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
