"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "motion/react"
import { CtaButton } from "@/components/cta-button"
import { Icon } from "@/components/icon"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const positions = [
  "Specjalista ds. Marketingu",
  "Specjalista ds. Google Ads",
  "Specjalista ds. Meta Ads",
  "SEO Specialist",
  "Content Creator / Copywriter",
  "Web Developer / Programista",
  "Social Media Manager",
  "Inne",
]

const experience = [
  "Poniżej 1 roku",
  "1-2 lata",
  "3-5 lat",
  "5-10 lat",
  "Powyżej 10 lat",
]

export default function ApplyPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [selectedPosition, setSelectedPosition] = useState("")
  const [selectedExperience, setSelectedExperience] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      position: selectedPosition,
      experience: selectedExperience,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/send-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Wystąpił błąd podczas wysyłania")
      }

      setStatus("success")
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Wystąpił błąd. Spróbuj ponownie później.")
    }
  }

  if (status === "success") {
    return (
      <>
        <SiteHeader />
        <section className="relative overflow-hidden px-4 pt-32 pb-16 sm:px-6 md:pt-40 md:pb-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-40"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-sm bg-primary/15 blur-[140px]"
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 md:p-12">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Icon name="check" className="h-7 w-7" />
              </div>
              <h1 className="text-2xl font-semibold tracking-tight">Dziękujemy za aplikację!</h1>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Odezwiemy się do Ciebie w ciągu 3 dni roboczych. Sprawdź swoją skrzynkę mailową.
              </p>
              <div className="mt-8">
                <CtaButton href="/" size="lg" variant="outline">
                  Wróć na stronę główną
                </CtaButton>
              </div>
            </div>
          </div>
        </section>
        <SiteFooter />
      </>
    )
  }

  return (
    <>
      <SiteHeader />
      <section className="relative overflow-hidden px-4 pt-32 pb-16 sm:px-6 md:pt-40 md:pb-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-sm bg-primary/15 blur-[140px]"
        />

        <div className="relative mx-auto max-w-3xl">
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
              Dołącz do naszego zespołu
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
            >
              Aplikuj do{" "}
              <span className="text-primary text-glow">MKT Lab</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Wypełnij formularz aplikacyjny. Jeśli spełniasz nasze oczekiwania, skontaktujemy się z Tobą.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur md:p-8"
              aria-label="Formularz aplikacyjny"
            >
              {/* Imię i email - 2 kolumny */}
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Imię i nazwisko" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="form-input w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Jan Kowalski"
                  />
                </Field>
                <Field label="Adres e-mail" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="form-input w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="jan@firma.pl"
                  />
                </Field>
              </div>

              {/* Stanowisko - wybierz z listy */}
              <div className="mt-5">
                <Field label="Stanowisko, o które się ubiegasz" htmlFor="position">
                  <select
                    id="position"
                    name="position"
                    required
                    value={selectedPosition}
                    onChange={(e) => setSelectedPosition(e.target.value)}
                    className="form-input w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Wybierz stanowisko...</option>
                    {positions.map((pos) => (
                      <option key={pos} value={pos}>
                        {pos}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Doświadczenie - wybierz z listy */}
              <div className="mt-5">
                <Field label="Twoje doświadczenie zawodowe" htmlFor="experience">
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={selectedExperience}
                    onChange={(e) => setSelectedExperience(e.target.value)}
                    className="form-input w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Wybierz poziom doświadczenia...</option>
                    {experience.map((exp) => (
                      <option key={exp} value={exp}>
                        {exp}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Wiadomość */}
              <div className="mt-5">
                <Field label="Dlaczego chcesz dołączyć do MKT Lab?" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="form-input w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm transition-colors resize-none focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Opowiedz nam o sobie, swoich umiejętnościach i dlaczego chcesz pracować w MKT Lab..."
                  />
                </Field>
              </div>

              {/* Komunikat błędu */}
              {status === "error" && (
                <div className="mt-4 rounded-lg bg-red-500/10 p-3 text-sm text-red-600">
                  {errorMessage}
                </div>
              )}

              {/* Przycisk wysyłki */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
              >
                {status === "submitting" ? "Wysyłanie..." : "Wyślij aplikację"}
                {status !== "submitting" && (
                  <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                )}
              </button>

              <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
                Wysyłając aplikację akceptujesz przetwarzanie danych osobowych w celu rekrutacji.
                Odpowiadamy w ciągu 3 dni roboczych.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
      <SiteFooter />
    </>
  )
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block text-sm font-medium text-foreground">{label}</span>
      {children}
    </label>
  )
}