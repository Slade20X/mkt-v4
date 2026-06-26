import type { Metadata } from "next"
import { stats } from "@/lib/content"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { WhyUs } from "@/components/sections/why-us"
import { CtaSection } from "@/components/cta-section"
import { Reveal, RevealGroup } from "@/components/reveal"

export const metadata: Metadata = {
  title: "O nas - agencja marketingowa MKT Lab z Gdańska",
  description:
    "Poznaj MKT Lab - agencję marketingową z Gdańska. Zespół specjalistów od performance marketingu, SEO i stron WWW, który skupia się na realnych wynikach.",
  alternates: { canonical: "/o-nas" },
}

const values = [
  {
    title: "Wyniki ponad wszystko",
    text: "Nie sprzedajemy raportów z kliknięć. Rozliczamy się ze sprzedaży, leadów i zwrotu z inwestycji.",
  },
  {
    title: "Pełna transparentność",
    text: "Masz dostęp do kont reklamowych i dashboardów. Zawsze wiesz, na co idzie Twój budżet.",
  },
  {
    title: "Partnerskie podejście",
    text: "Traktujemy Twój biznes jak własny. Doradzamy szczerze, nawet gdy oznacza to mniejszy budżet.",
  },
]

export default function ONasPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="O nas"
        title="Jesteśmy laboratorium wzrostu"
        description="MKT Lab to agencja marketingowa z Gdańska, która łączy kreatywność z twardymi danymi. Pomagamy firmom z całej Polski skalować sprzedaż dzięki skutecznym kampaniom, SEO i nowoczesnym stronom."
        breadcrumb={[
          { label: "Strona główna", href: "/" },
          { label: "O nas", href: "/o-nas" },
        ]}
      />

      <section className="px-4 pb-8 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <RevealGroup className="grid grid-cols-2 divide-x divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card/30 lg:grid-cols-4 lg:divide-y-0">
            {stats.map((stat) => (
              <Reveal key={stat.label}>
                <div className="flex flex-col items-center justify-center gap-2 px-4 py-10 text-center">
                  <span className="text-3xl font-bold tracking-tight text-primary text-glow sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Nasze wartości"
            title="W co wierzymy"
          />
          <RevealGroup className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title}>
                <div className="h-full rounded-3xl border border-border bg-card/40 p-7">
                  <span className="text-4xl font-bold text-primary/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold">{value.title}</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      <WhyUs />
      <CtaSection />
    </PageShell>
  )
}
