'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Star, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from "@/components/section-heading"

const testimonials = [
  {
    quote:
      'Współpraca z MKT Lab to była świetna decyzja. W ciągu kilku miesięcy udało się znacząco zwiększyć sprzedaż i poprawić ROAS.',
    name: 'Anna W.',
    company: 'CEO',
    avatar: '/person.jpg',
  },
  {
    quote:
      'Pełen profesjonalizm i świetne podejście do klienta. MKT Lab zajęło się naszymi kampaniami Google Ads i Meta Ads, dzięki czemu liczba klientów wzrosła.',
    name: 'Robert C.',
    company: 'CEO',
    avatar: '/person.jpg',
  },
  {
    quote:
      'Bardzo dobra komunikacja, regularne raporty i przede wszystkim realne wyniki.',
    name: 'Marcin R.',
    company: 'Founder',
    avatar: '/person.jpg',
  },
]

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Opinie klientów"
          title="Co mówią nasi klienci"
          description="Mierzymy nasz sukces przez pryzmat wzrostu marek, które wspieramy."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/40">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-pretty leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="size-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.company}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Link do opinii Google z oceną */}
        <div className="mt-12">
          <Reveal delay={3}>
            <div className="flex flex-col items-center gap-3">
              {/* Ocena Google */}
              <div className="flex items-center gap-2 rounded-full bg-secondary/30 px-4 py-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
                <span className="text-sm font-semibold">5.0</span>
                <span className="text-sm text-muted-foreground">(36 opinii)</span>
              </div>

              <Link
                href="https://g.page/r/Cb6c3wMpLcWcEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Zobacz nasze wszystkie opinie na{' '}
                <span className="relative font-semibold text-primary after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary after:transition-all after:duration-300 group-hover:after:h-[3px]">
                  Google
                </span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}