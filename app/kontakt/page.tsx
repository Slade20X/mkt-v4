import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact-form"
import { Reveal } from "@/components/reveal"
import { Icon } from "@/components/icon"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Kontakt - Bezpłatna konsultacja marketingowa",
  description:
    "Skontaktuj się z MKT Lab. Umów bezpłatną konsultację marketingową. Agencja marketingowa w Gdańsku, działamy zdalnie w całej Polsce.",
  alternates: { canonical: "/kontakt" },
}

const contactItems = [
  { icon: "mail", label: "E-mail", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: "phone", label: "Telefon", value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}` },
  { icon: "map-pin", label: "Lokalizacja", value: siteConfig.location, href: null },
] as const

export default function KontaktPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Kontakt"
        title="Porozmawiajmy o wzroście Twojego biznesu"
        description="Umów bezpłatną konsultację. Przeanalizujemy Twoją sytuację i pokażemy, gdzie tkwi największy potencjał wzrostu sprzedaży."
        showCtas={false}
      />

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="flex flex-col gap-6">
              <div className="space-y-5">
                {contactItems.map((item) => {
                  const content = (
                    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-accent/40">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                        <Icon name={item.icon} className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        <div className="mt-0.5 font-medium text-foreground">{item.value}</div>
                      </div>
                    </div>
                  )
                  return item.href ? (
                    <a key={item.label} href={item.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  )
                })}
              </div>

              <div className="rounded-2xl border border-border bg-secondary/30 p-6">
                <h3 className="font-semibold tracking-tight">Czego możesz się spodziewać?</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {[
                    "Odpowiedź w ciągu 24 godzin roboczych",
                    "Bezpłatny wstępny audyt Twoich działań",
                    "Konkretna propozycja strategii bez zobowiązań",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2.5">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                Wolisz napisać bezpośrednio?{" "}
                <Link href={`mailto:${siteConfig.email}`} className="text-accent underline-offset-4 hover:underline">
                  {siteConfig.email}
                </Link>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
