import type { Metadata } from "next"
import { services } from "@/lib/content"
import { ServiceDetail } from "@/components/service-detail"

const service = services.find((s) => s.slug === "meta-ads")!

export const metadata: Metadata = {
  title: "Meta Ads Gdańsk — reklamy na Facebooku i Instagramie",
  description:
    "Skuteczne kampanie Meta Ads (Facebook, Instagram) dla e-commerce i firm usługowych. Budujemy lejki sprzedażowe i skalujemy ROAS w całej Polsce.",
  alternates: { canonical: "/meta-ads" },
}

export default function MetaAdsPage() {
  return (
    <ServiceDetail
      service={service}
      intro="Reklamy na Facebooku i Instagramie pozwalają dotrzeć do precyzyjnie dobranych odbiorców i budować popyt na Twoje produkty — od pierwszego kontaktu aż po sprzedaż."
    />
  )
}
