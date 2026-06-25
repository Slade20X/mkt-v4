import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"
import { Eyebrow } from "@/components/section-heading"

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  showCtas = true,
}: {
  eyebrow: string
  title: string
  description: string
  breadcrumb?: { label: string; href: string }[]
  showCtas?: boolean
}) {
  return (
    <section className="relative overflow-hidden px-4 pt-36 pb-16 sm:px-6 md:pt-44 md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-4xl text-center">
        {breadcrumb && breadcrumb.length > 0 && (
        <Reveal>
          <nav
            aria-label="Ścieżka nawigacji"
            className="mb-6 flex items-center justify-center gap-1.5 text-xs text-muted-foreground"
          >
            {breadcrumb.map((item, i) => (
              <span key={item.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="size-3" />}
                {i === breadcrumb.length - 1 ? (
                  <span className="text-foreground">{item.label}</span>
                ) : (
                  <Link href={item.href} className="transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        </Reveal>
        )}
        <Reveal delay={1}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={2}>
          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={3}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </Reveal>
        {showCtas && (
          <Reveal delay={4}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CtaButton href="/kontakt" size="lg" withArrow>
                Bezpłatna konsultacja
              </CtaButton>
              <CtaButton href="/uslugi" size="lg" variant="outline">
                Zobacz ofertę
              </CtaButton>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
