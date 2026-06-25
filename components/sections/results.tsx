import { ArrowRight, TrendingUp } from "lucide-react"
import { caseStudies } from "@/lib/content"
import { SectionHeading } from "@/components/section-heading"
import { Reveal, RevealGroup } from "@/components/reveal"

export function Results() {
  return (
    <section className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Wyniki"
          title="Liczby, które robią różnicę"
          description="Realne efekty naszych kampanii. Przykładowe rezultaty osiągnięte dla klientów z różnych branż."
        />

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3">
          {caseStudies.map((cs) => (
            <Reveal key={cs.industry}>
              <article className="group flex h-full flex-col rounded-3xl border border-border bg-card/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                    {cs.industry}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-primary">
                    <TrendingUp className="size-4" />
                    {cs.growth}
                  </span>
                </div>

                <p className="mt-6 text-sm text-muted-foreground">{cs.metric}</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">Przed</span>
                    <span className="text-2xl font-bold tracking-tight text-foreground/50">
                      {cs.before}
                    </span>
                  </div>
                  <ArrowRight className="size-5 text-primary" />
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">Po</span>
                    <span className="text-3xl font-bold tracking-tight text-primary text-glow">
                      {cs.after}
                    </span>
                  </div>
                </div>

                <p className="mt-6 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {cs.description}
                </p>
              </article>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
