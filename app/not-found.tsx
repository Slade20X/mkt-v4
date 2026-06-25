// app/not-found.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Home, Search, Mail, ArrowLeft, Sparkles } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Tło z gradientem i efektami */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
        <div className="absolute -top-40 -right-40 size-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 size-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-60" />

      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center">
        {/* Animowane logo/ikona */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-full bg-primary/20 blur-2xl" />
          <div className="relative flex size-24 items-center justify-center rounded-full bg-card border-2 border-primary/30 shadow-2xl">
            <span className="text-5xl font-bold text-primary">404</span>
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur"
        >
          <Sparkles className="size-3.5 text-primary" />
          <span>Strona nie została znaleziona</span>
        </motion.div>

        {/* Główny tytuł */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
        >
          Ups! <span className="text-primary">Zgubiliśmy się</span>
        </motion.h1>

        {/* Opis */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          Przepraszamy, ale strona jest w trackie serwisu lub wpisałeś nieprawidłowy adres URL.
        </motion.p>

        {/* Przyciski akcji */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_32px_-4px_rgba(16,185,129,0.6)]"
          >
            <Home className="size-4 transition-transform group-hover:scale-110" />
            Wróć do strony głównej
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            Wróć do poprzedniej strony
          </button>
        </motion.div>

        {/* Link do kontaktu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-4" />
            <span>Masz problem? Skontaktuj się z nami</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Sugestie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="text-sm text-muted-foreground">Możesz też:</span>
          <Link
            href="/#services"
            className="rounded-full bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            Nasze usługi
          </Link>
          <Link
            href="/#case-studies"
            className="rounded-full bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            Realizacje
          </Link>
          <Link
            href="/#pricing"
            className="rounded-full bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            Cennik
          </Link>
          <Link
            href="/#about"
            className="rounded-full bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            O nas
          </Link>
        </motion.div>

        {/* Dekoracyjny numer 404 w tle */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center select-none">
          <span className="text-[20rem] font-black leading-none text-primary/5 blur-sm">
            404
          </span>
        </div>

        {/* Stopka z małym żartem */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-8 text-xs text-muted-foreground/50"
        >
          Nie martw się, nawet najlepsi się gubią 😉
        </motion.p>
      </div>
    </div>
  )
}