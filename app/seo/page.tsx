import type { Metadata } from "next"
import { services } from "@/lib/content"
import { ServiceDetail } from "@/components/service-detail"

const service = services.find((s) => s.slug === "seo")!

export const metadata: Metadata = {
  title: "SEO Gdańsk — pozycjonowanie stron internetowych",
  description:
    "Profesjonalne pozycjonowanie stron (SEO) w Gdańsku i całej Polsce. Audyt techniczny, content i link building, które budują stały ruch organiczny i sprzedaż.",
  alternates: { canonical: "/seo" },
}

export default function SeoPage() {
  return (
    <ServiceDetail
      service={service}
      intro="SEO to inwestycja, która z czasem obniża koszt pozyskania klienta. Budujemy widoczność w Google, która generuje ruch i zapytania niezależnie od budżetu reklamowego."
    />
  )
}
