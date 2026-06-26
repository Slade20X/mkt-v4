import type { Metadata } from "next"
import { services } from "@/lib/content"
import { ServiceDetail } from "@/components/service-detail"

const service = services.find((s) => s.slug === "strony-www")!

export const metadata: Metadata = {
  title: "Strony internetowe Gdańsk - nowoczesne strony i sklepy WWW",
  description:
    "Projektujemy szybkie, nowoczesne strony internetowe i sklepy e-commerce zoptymalizowane pod SEO i konwersję. Technologia Next.js, Gdańsk i cała Polska.",
  alternates: { canonical: "/strony-www" },
}

export default function StronyWwwPage() {
  return (
    <ServiceDetail
      service={service}
      intro="Strona internetowa to fundament Twojej obecności online. Tworzymy witryny, które ładują się błyskawicznie, dobrze pozycjonują się w Google i skutecznie zamieniają odwiedzających w klientów."
    />
  )
}
