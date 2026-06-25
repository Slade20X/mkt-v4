import { benefits } from "@/lib/content"
import { Icon } from "@/components/icon"
import { SectionHeading } from "@/components/section-heading"
import { Reveal, RevealGroup } from "@/components/reveal"

export function WhyUs() {
  return (
    <section className="border-y border-border bg-card/20 px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Dlaczego MKT Lab"
          title="Partner, który traktuje Twój budżet jak własny"
          description="Stawiamy na transparentność, dane i realne wyniki. Bez pustych obietnic i marketingowego żargonu."
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Reveal key={benefit.title}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-background/50 p-7 transition-colors duration-300 hover:border-primary/40">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon name={benefit.icon} className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
