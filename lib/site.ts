export const siteConfig = {
  name: "MKT Lab",
  url: "https://mktlab.pl",
  title: "MKT Lab - Agencja Marketingowa, Strony WWW, Kampanie Reklamowe",
  description:
    "MKT Lab - agencja marketingowa w Gdańsku. Zwiększamy sprzedaż i ROAS. Działamy zdalnie w całej Polsce. Specjalizujemy się w Performance Marketingu, SEO.",
  email: "mktlab.biuro@gmail.com",
  phone: "+48 883 758 310",
  phoneDisplay: "883 758 310",
  location: "Gdańsk, Polska",
  keywords: [
    "agencja marketingowa gdansk",
    "seo gdansk",
    "google ads gdansk",
    "meta ads gdansk",
    "strony internetowe gdansk",
    "performance marketing polska",
    "kampanie reklamowe",
    "pozycjonowanie stron",
    "marketing internetowy",
    "mkt agencja marketingowa",
    "mkt lab agencja marketingowa",
  ],
  ogImage: "/og-image.png",
}

export const navLinks = [
  { label: "Strona główna", href: "/" },
  { label: "Usługi", href: "/uslugi" },
  { label: "Google Ads", href: "/google-ads" },
  { label: "Meta Ads", href: "/meta-ads" },
  { label: "SEO", href: "/seo" },
  { label: "Strony WWW", href: "/strony-www" },
  { label: "Kontakt", href: "/kontakt" },
]

export type SiteConfig = typeof siteConfig
