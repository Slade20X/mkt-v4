'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Automatyczne przewijanie co 5 sekund
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [isPaused])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Opinie klientów"
          title="Co mówią nasi klienci"
          description="Mierzymy nasz sukces przez pryzmat wzrostu marek, które wspieramy."
        />

        <div className="mt-14">
          <Reveal>
            <div className="relative flex flex-col items-center">
              {/* Główny kontener opinii */}
              <div 
                className="w-full max-w-2xl"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
              >
                <figure className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 md:p-8">
                  {/* Gwiazdki */}
                  <div className="flex justify-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Treść opinii */}
                  <blockquote className="mt-5 text-center text-pretty text-base leading-relaxed text-foreground/90 md:text-lg">
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </blockquote>

                  {/* Autor */}
                  <figcaption className="mt-6 flex items-center justify-center gap-3 border-t border-border pt-6">
                    <Image
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      width={44}
                      height={44}
                      className="size-11 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold">{currentTestimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{currentTestimonial.company}</p>
                    </div>
                  </figcaption>
                </figure>
              </div>

              {/* Wskaźnik strony */}
              <div className="mt-6 flex items-center justify-center gap-3">
                <button
                  onClick={prevSlide}
                  className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-label="Poprzednia opinia"
                >
                  <ChevronLeft className="size-5" />
                </button>

                <div className="flex gap-1.5">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'w-6 bg-primary'
                          : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                      aria-label={`Przejdź do opinii ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-label="Następna opinia"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>

              {/* Wskaźnik autoprzewijania */}
              <div className="mt-3 flex items-center gap-2">
                <div className="h-0.5 w-16 overflow-hidden rounded-full bg-muted-foreground/20">
                  <div 
                    className="h-full bg-primary transition-all duration-1000 ease-linear"
                    style={{ 
                      width: isPaused ? '100%' : '0%',
                      transitionDuration: isPaused ? '0s' : '5s'
                    }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">
                  {isPaused ? '⏸' : '▶'}
                </span>
              </div>
            </div>
          </Reveal>
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