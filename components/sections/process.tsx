'use client'

import { Search, PenTool, Rocket, TrendingUp, ArrowRight } from 'lucide-react'
import { Reveal, RevealGroup } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { cn } from '@/lib/utils'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Audyt',
    description:
      'Dogłębna analiza rynku, konkurencji i potencjału Twojej marki.',
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-500',
    borderColor: 'group-hover:border-blue-500/50',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Strategia',
    description:
      'Mapa drogowa oparta na danych i celach biznesowych.',
    color: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-500',
    borderColor: 'group-hover:border-purple-500/50',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Wdrożenie',
    description:
      'Realizacja kampanii z ciągłą optymalizacją.',
    color: 'from-orange-500/20 to-amber-500/20',
    iconColor: 'text-orange-500',
    borderColor: 'group-hover:border-orange-500/50',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Skalowanie',
    description:
      'Ekspansja na kolejne kanały i rynki.',
    color: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-500',
    borderColor: 'group-hover:border-emerald-500/50',
  },
]

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden">
      {/* Tło z gradientem */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Proces"
          title="Jak wspólnie pracujemy"
          description="Sprawdzony proces, który gwarantuje rezultaty"
        />

        <div className="relative mt-16">
          {/* Linia łącząca - wyśrodkowana */}
          <div className="absolute left-[10%] right-[10%] top-9 hidden h-0.5 bg-gradient-to-r from-transparent via-border/50 to-transparent lg:block" />
          
          {/* Druga linia z efektem świecenia */}
          <div className="absolute left-[10%] right-[10%] top-9 hidden h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-sm lg:block" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i} className="group relative">
                {/* Kropka na linii - desktop */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[calc(100%+8px)] top-9 hidden size-3 rounded-full border-2 border-primary/30 bg-background lg:block">
                    <div className="absolute inset-0.5 rounded-full bg-primary/20" />
                  </div>
                )}

                <div className="relative">
                  {/* Ikona z animacją */}
                  <div className="relative inline-block">
                    {/* Efekt glow */}
                    <div className={cn(
                      'absolute -inset-2 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100',
                      step.color
                    )} />
                    
                    {/* Sam kontener ikony */}
                    <div className={cn(
                      'relative z-10 flex size-14 items-center justify-center rounded-2xl border border-border bg-card transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl',
                      step.borderColor,
                      `group-hover:bg-gradient-to-br ${step.color}`
                    )}>
                      <step.icon className={cn('size-6 transition-colors duration-300', step.iconColor)} />
                    </div>
                  </div>

                  {/* Numer i tytuł */}
                  <div className="mt-5 flex items-center gap-3">
                    <span className="text-sm font-bold tabular-nums text-primary/50 transition-colors duration-300 group-hover:text-primary">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
                      {step.title}
                    </h3>
                  </div>

                  {/* Opis */}
                  <p className="mt-2 text-pretty leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                    {step.description}
                  </p>

                  {/* Dekoracyjna linia pod spodem */}
                  <div className={cn(
                    'mt-4 h-0.5 w-12 rounded-full bg-primary/10 transition-all duration-500 group-hover:w-20',
                    `group-hover:bg-${step.iconColor.split('-')[1]}-500/50`
                  )} />
                </div>

                {/* Strzałka między krokami - mobilne */}
                {i < steps.length - 1 && (
                  <div className="mt-4 flex justify-center lg:hidden">
                    <ArrowRight className="size-5 text-muted-foreground/30" />
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA na dole */}

      </div>
    </section>
  )
}