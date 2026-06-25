"use client"

import { motion } from "motion/react"
import { CtaButton } from "@/components/cta-button"

export default function PrivacyPolicy() {
  return (
    <section className="relative overflow-hidden px-4 pt-32 pb-16 sm:px-6 md:pt-40 md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-sm bg-primary/15 blur-[140px]"
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-medium text-foreground/80"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Ochrona danych
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Polityka{" "}
            <span className="text-primary text-glow">Prywatności</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Dbamy o Twoją prywatność. Poniżej znajdziesz informacje o tym, jakie dane zbieramy i jak je chronimy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <CtaButton href="/kontakt" size="lg" withArrow>
              Kontakt w sprawie danych
            </CtaButton>
            <CtaButton href="/" size="lg" variant="outline">
              Strona główna
            </CtaButton>
          </motion.div>
        </div>

        {/* Treść polityki prywatności */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 space-y-8 text-left"
        >
          <div className="rounded-2xl border border-border bg-card/30 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-semibold">1. Administrator danych</h2>
            <p className="text-muted-foreground">
              Administratorem Twoich danych osobowych jest MKT Lab z siedzibą w Gdańsku.
              Możesz skontaktować się z nami pod adresem: mktlab.biuro@gmail.com
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card/30 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-semibold">2. Jakie dane zbieramy?</h2>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Imię i nazwisko</li>
              <li>Adres e-mail</li>
              <li>Numer telefonu</li>
              <li>Nazwa firmy</li>
              <li>Dane dotyczące korzystania ze strony (pliki cookies)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card/30 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-semibold">3. Cel zbierania danych</h2>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Świadczenie usług marketingowych</li>
              <li>Kontakt w sprawie oferty</li>
              <li>Realizacja zamówień</li>
              <li>Marketing i analiza statystyczna</li>
              <li>Dostosowanie treści do Twoich preferencji</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card/30 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-semibold">4. Podstawa prawna</h2>
            <p className="text-muted-foreground">
              Twoje dane przetwarzamy zgodnie z RODO (Rozporządzenie UE 2016/679).
              Podstawą przetwarzania jest Twoja zgoda oraz nasz prawnie uzasadniony interes.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card/30 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-semibold">5. Twoje prawa</h2>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Prawo dostępu do swoich danych</li>
              <li>Prawo do sprostowania danych</li>
              <li>Prawo do usunięcia danych</li>
              <li>Prawo do ograniczenia przetwarzania</li>
              <li>Prawo do przenoszenia danych</li>
              <li>Prawo do cofnięcia zgody w dowolnym momencie</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card/30 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-semibold">6. Pliki cookies</h2>
            <p className="text-muted-foreground">
              Nasza strona używa plików cookies w celu zapewnienia lepszego doświadczenia.
              Możesz zarządzać ustawieniami cookies w swojej przeglądarce.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card/30 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-semibold">7. Kontakt</h2>
            <p className="text-muted-foreground">
              W sprawach związanych z ochroną danych osobowych skontaktuj się z nami:
              <br />
              <span className="font-medium">E-mail:</span> mktlab.biuro@gmail.com
              <br />
              <span className="font-medium">Telefon:</span> +48 883 758 310
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card/30 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-semibold">8. Aktualizacja polityki</h2>
            <p className="text-muted-foreground">
              Polityka prywatności jest regularnie aktualizowana. Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}