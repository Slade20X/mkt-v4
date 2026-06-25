import type { Metadata } from "next"
import { services } from "@/lib/content"
import { ServiceDetail } from "@/components/service-detail"

const service = services.find((s) => s.slug === "google-ads")!

export const metadata: Metadata = {
  title: "Google Ads Gdańsk — kampanie reklamowe w Google",
  description:
    "Prowadzenie kampanii Google Ads (Search, Performance Max, YouTube) dla firm z Gdańska i całej Polski. Więcej zapytań i sprzedaży przy niższym koszcie konwersji.",
  alternates: { canonical: "/google-ads" },
}

export default function GoogleAdsPage() {
  return (
    <ServiceDetail
      service={service}
      intro="Kampanie Google Ads docierają do klientów dokładnie w momencie, gdy szukają Twoich produktów lub usług. To najszybszy sposób na pozyskanie wartościowego ruchu i zapytań."
    />
  )
}
