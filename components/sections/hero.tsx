"use client"

import { motion } from "motion/react"
import { CtaButton } from "@/components/cta-button"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-32 pb-16 sm:px-6 md:pt-40 md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]"
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-sm border border-border bg-card/50 px-3 py-1 text-xs font-medium text-foreground/80"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Agencja marketingowa · Gdańsk · Cała Polska
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Marketing, który
generuje{" "}
            <span className="text-primary text-glow">realny wzrost.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Pomagamy ambitnym markom zwiększać sprzedaż dzięki strategii, kreacji i skutecznym kampaniom.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <CtaButton href="/kontakt" size="lg" withArrow>
              Umów rozmowę
            </CtaButton>
            <CtaButton href="/uslugi" size="lg" variant="outline">
              Zobacz ofertę
            </CtaButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
}