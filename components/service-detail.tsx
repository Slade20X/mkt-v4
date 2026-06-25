import Link from "next/link"
import { Check, ArrowUpRight } from "lucide-react"
import { type Service, services, processSteps } from "@/lib/content"
import { Icon } from "@/components/icon"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { CtaSection } from "@/components/cta-section"
import { Reveal, RevealGroup } from "@/components/reveal"

export function ServiceDetail({
  service,
  intro,
}: {
  service: Service
  intro: string
}) {
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <PageShell>
      <PageHero
        eyebrow={service.title}
        title={service.title}
        description={service.short}
        breadcrumb={[
          { label: "Strona główna", href: "/" },
          { label: "Usługi", href: "/uslugi" },
          { label: service.title, href: service.href },
        ]}
      />

      <section className="px-4 pb-8 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Na czym to polega"
                title={`${service.title} nastawione na wynik`}
              />
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                {intro}
              </p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <ul className="grid gap-3">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card/40 p-5"
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Proces"
            title="Jak wygląda współpraca"
          />
          <RevealGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <Reveal key={step.step}>
                <div className="h-full rounded-3xl border border-border bg-card/30 p-7">
                  <span className="text-4xl font-bold text-primary/30">
                    {step.step}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="border-t border-border bg-card/20 px-4 py-20 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Zobacz też" title="Pozostałe usługi" />
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <Reveal key={s.slug}>
                <Link
                  href={s.href}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-background/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-2xl border border-border bg-card text-primary">
                      <Icon name={s.icon} className="size-5" />
                    </span>
                    <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.short}
                  </p>
                </Link>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaSection />
    </PageShell>
  )
}
