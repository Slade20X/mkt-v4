import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { services } from "@/lib/content"
import { Icon } from "@/components/icon"
import { SectionHeading } from "@/components/section-heading"
import { Reveal, RevealGroup } from "@/components/reveal"

export function Services() {
  return (
    <section id="uslugi" className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Usługi"
          title="Wszystko, czego potrzebujesz, by rosnąć"
          description="Łączymy płatne kampanie, SEO i nowoczesne strony w jedną maszynę wzrostu, nastawioną na sprzedaż i realny zwrot z inwestycji."
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.slug}>
              <Link
                href={service.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl border border-border bg-background text-primary transition-colors group-hover:border-primary/40">
                    <Icon name={service.icon} className="size-6" />
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {service.short}
                </p>
                <span className="mt-6 text-sm font-medium text-primary">
                  Dowiedz się więcej
                </span>
              </Link>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
