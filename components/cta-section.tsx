import { CtaButton } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"
import { siteConfig } from "@/lib/site"

export function CtaSection({
  title = "Gotowy zwiększyć sprzedaż?",
  description = "Umów bezpłatną konsultację. Przeanalizujemy Twój biznes i pokażemy, gdzie tkwi potencjał na wzrost.",
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="px-4 py-20 sm:px-6 md:py-28">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-60"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-sm bg-primary/20 blur-[100px]"
        />
        <div className="relative flex flex-col items-center gap-6">
          <Reveal>
            <h2 className="max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <CtaButton href="/kontakt" size="lg" withArrow>
                Umów bezpłatną konsultację
              </CtaButton>
              <CtaButton
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                size="lg"
                variant="outline"
              >
                {siteConfig.phone}
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
