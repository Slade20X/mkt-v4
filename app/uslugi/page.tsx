import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"
import { services, allServices } from "@/lib/content"
import { Icon } from "@/components/icon"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Process } from "@/components/sections/process"
import { CtaSection } from "@/components/cta-section"
import { Reveal, RevealGroup } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Usługi marketingowe — Performance, Google Ads, Meta Ads, SEO",
  description:
    "Pełna oferta agencji MKT Lab: Performance Marketing, Google Ads, Meta Ads, SEO, strony WWW, landing pages, audyty, analityka, CRO i remarketing.",
  alternates: { canonical: "/uslugi" },
}

export default function UslugiPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Oferta"
        title="Kompleksowy marketing dla Twojego biznesu"
        description="Od strategii i kampanii reklamowych, przez SEO, po nowoczesne strony WWW. Dobieramy usługi tak, by realnie zwiększać Twoją sprzedaż."
        breadcrumb={[
          { label: "Strona główna", href: "/" },
          { label: "Usługi", href: "/uslugi" },
        ]}
      />

      <section className="px-4 pb-8 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Reveal key={service.slug}>
                <Link
                  href={service.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl border border-border bg-background text-primary">
                      <Icon name={service.icon} className="size-6" />
                    </span>
                    <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <h2 className="mt-6 text-xl font-semibold tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {service.short}
                  </p>
                </Link>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Pełny zakres"
            title="Wszystkie usługi w jednym miejscu"
            description="Niezależnie od etapu, na jakim jest Twój biznes, mamy kompetencje, by pomóc Ci rosnąć."
          />
          <RevealGroup className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
            {allServices.map((item) => (
              <Reveal key={item}>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card/30 px-5 py-4">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Process />
      <CtaSection />
    </PageShell>
  )
}
