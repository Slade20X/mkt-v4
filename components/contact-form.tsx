"use client"

import type React from "react"
import { useState } from "react"
import { Reveal } from "@/components/reveal"
import { Icon } from "@/components/icon"

const services = ["Google Ads", "Meta Ads", "SEO", "Strona WWW", "Kompleksowy marketing", "Inne"]
const budgets = ["do 5 000 zł / mies.", "5 000 – 15 000 zł / mies.", "15 000 – 30 000 zł / mies.", "powyżej 30 000 zł / mies."]

// Funkcja do wysyłania zdarzenia do Meta Pixel i CAPI
async function sendMetaEvent(eventData: {
  eventName: string
  data?: Record<string, any>
  emails?: string[]
  phones?: string[]
}) {
  try {
    // 1. Wyślij przez Pixel (przeglądarka)
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', eventData.eventName, eventData.data || {})
      console.log(`✅ Meta Pixel: ${eventData.eventName} wysłany`)
    } else {
      console.warn('⚠️ Meta Pixel nie jest zainicjalizowany')
    }

    // 2. Wyślij przez CAPI (serwer) - tylko jeśli mamy email lub telefon
    if (eventData.emails?.length || eventData.phones?.length) {
      const response = await fetch('/api/fb-events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventName: eventData.eventName,
          data: eventData.data || {},
          emails: eventData.emails || [],
          phones: eventData.phones || [],
          url: window.location.href,
        }),
      })

      if (!response.ok) {
        console.error('❌ Błąd CAPI:', await response.text())
      } else {
        console.log(`✅ Meta CAPI: ${eventData.eventName} wysłany`)
      }
    }
  } catch (error) {
    console.error('❌ Błąd wysyłki do Meta:', error)
  }
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [service, setService] = useState("")
  const [budget, setBudget] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

    const data = {
      name,
      email,
      company,
      phone,
      service: service,
      budget: budget,
      message,
    }

    try {
      // 1. Wyślij email
      const response = await fetch("/api/send-email", {
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

      // 2. Po pomyślnej wysyłce - wyślij zdarzenie do Meta
      await sendMetaEvent({
        eventName: 'Lead',
        data: {
          content_name: 'Formularz kontaktowy',
          content_category: service || 'Nieokreślone',
          value: budget || 'Nieokreślony',
          currency: 'PLN',
          company: company || 'Nie podano',
        },
        emails: [email], // Do CAPI
        phones: phone ? [phone] : [], // Do CAPI
      })

      setStatus("success")
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Wystąpił błąd. Spróbuj ponownie później.")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center md:p-12">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Icon name="check" className="h-7 w-7" />
        </div>
        <h3 className="text-2xl font-semibold tracking-tight">Dziękujemy za wiadomość!</h3>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          Odezwiemy się do Ciebie w ciągu 24 godzin roboczych z propozycją bezpłatnej konsultacji i wstępnym audytem.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur md:p-8"
      aria-label="Formularz kontaktowy"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Imię i nazwisko" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="form-input"
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
            className="form-input"
            placeholder="jan@firma.pl"
          />
        </Field>
        <Field label="Firma" htmlFor="company">
          <input 
            id="company" 
            name="company" 
            type="text"
            autoComplete="organization" 
            className="form-input" 
            placeholder="Nazwa firmy" 
          />
        </Field>
        <Field label="Telefon" htmlFor="phone">
          <input 
            id="phone" 
            name="phone" 
            type="tel" 
            autoComplete="tel" 
            className="form-input" 
            placeholder="+48 600 000 000" 
          />
        </Field>
      </div>

      <fieldset className="mt-6">
        <legend className="mb-3 text-sm font-medium text-foreground">Czym jesteś zainteresowany?</legend>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <Chip key={s} active={service === s} onClick={() => setService(s)}>
              {s}
            </Chip>
          ))}
        </div>
        <input type="hidden" name="service" value={service} />
      </fieldset>

      <fieldset className="mt-6">
        <legend className="mb-3 text-sm font-medium text-foreground">Miesięczny budżet mediowy</legend>
        <div className="flex flex-wrap gap-2">
          {budgets.map((b) => (
            <Chip key={b} active={budget === b} onClick={() => setBudget(b)}>
              {b}
            </Chip>
          ))}
        </div>
        <input type="hidden" name="budget" value={budget} />
      </fieldset>

      <div className="mt-6">
        <Field label="Wiadomość" htmlFor="message">
          <textarea
            id="message"
            name="message"
            rows={4}
            className="form-input resize-none"
            placeholder="Opowiedz nam krótko o swoim biznesie i celach..."
          />
        </Field>
      </div>

      {status === "error" && (
        <div className="mt-4 rounded-lg bg-red-500/10 p-3 text-sm text-red-600">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 disabled:opacity-60"
      >
        {status === "submitting" ? "Wysyłanie..." : "Wyślij zapytanie"}
        {status !== "submitting" && (
          <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        )}
      </button>
      <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
        Wysyłając formularz akceptujesz przetwarzanie danych w celu kontaktu. Odpowiadamy w ciągu 24 godzin roboczych.
      </p>
    </form>
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

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        "rounded-md border px-4 py-2 text-sm transition-colors " +
        (active
          ? "border-accent bg-accent/15 text-accent"
          : "border-border bg-secondary/40 text-muted-foreground hover:border-foreground/30 hover:text-foreground")
      }
    >
      {children}
    </button>
  )
}