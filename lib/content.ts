export const stats = [
  { value: "106+", label: "Zadowolonych klientów" },
  { value: "1.1M+ zł", label: "Dochodu Klientów" },
  { value: "95%", label: "Retencji" },
  { value: "5+", label: "Krajów" },
]

export type Service = {
  slug: string
  title: string
  short: string
  description: string
  icon: string
  href: string
  features: string[]
}

export const services: Service[] = [
  {
    slug: "google-ads",
    title: "Google Ads",
    short: "Kampanie w wyszukiwarce, które generują realne zapytania i sprzedaż.",
    description:
      "Tworzymy i optymalizujemy kampanie Google Ads (Search, Performance Max, Display, YouTube), które docierają do klientów w momencie zakupowej decyzji.",
    icon: "Search",
    href: "/google-ads",
    features: [
      "Kampanie Search i Performance Max",
      "Optymalizacja stawek i konwersji",
      "Remarketing i kampanie YouTube",
      "Pełna analityka i raportowanie",
    ],
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    short: "Reklamy na Facebooku i Instagramie skalujące sprzedaż w e-commerce.",
    description:
      "Budujemy lejki sprzedażowe na Facebooku i Instagramie — od kreacji, przez targetowanie, po skalowanie najlepiej konwertujących zestawów reklam.",
    icon: "Megaphone",
    href: "/meta-ads",
    features: [
      "Kampanie sprzedażowe i leadowe",
      "Testy kreacji i grup odbiorców",
      "Konfiguracja Pixela i CAPI",
      "Skalowanie ROAS",
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    short: "Pozycjonowanie, które buduje stały, organiczny ruch i sprzedaż.",
    description:
      "Kompleksowe SEO: audyt techniczny, optymalizacja on-site, content i link building. Budujemy widoczność, która pracuje na Ciebie przez lata.",
    icon: "TrendingUp",
    href: "/seo",
    features: [
      "Audyt techniczny i strategia",
      "Optymalizacja on-site i Core Web Vitals",
      "Content marketing i blog",
      "Link building i SEO lokalne",
    ],
  },
  {
    slug: "strony-www",
    title: "Strony WWW",
    short: "Nowoczesne, szybkie strony i sklepy gotowe na konwersję.",
    description:
      "Projektujemy i wdrażamy strony oraz sklepy internetowe zoptymalizowane pod prędkość, SEO i sprzedaż — w technologii Next.js i nowoczesnym CMS.",
    icon: "Globe",
    href: "/strony-www",
    features: [
      "Strony firmowe i sklepy e-commerce",
      "Wydajność i Core Web Vitals",
      "SEO-friendly architektura",
      "Integracje i analityka",
    ],
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    short: "Strony docelowe maksymalizujące konwersję z kampanii.",
    description:
      "Tworzymy landing page'e dopasowane do kampanii reklamowych, zaprojektowane wokół jednego celu — maksymalnej konwersji.",
    icon: "MousePointerClick",
    href: "/uslugi",
    features: [
      "Projekt zorientowany na konwersję",
      "Testy A/B",
      "Szybkie ładowanie",
      "Integracja z kampaniami",
    ],
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    short: "Pełnolejkowa strategia oparta na danych i mierzalnych wynikach.",
    description:
      "Łączymy kanały płatne, analitykę i CRO w jedną maszynę wzrostu. Każda decyzja oparta jest na danych i rozliczana realnym wynikiem.",
    icon: "Target",
    href: "/uslugi",
    features: [
      "Strategia full-funnel",
      "Analityka i atrybucja",
      "CRO i optymalizacja",
      "Skalowanie budżetów",
    ],
  },
]

export const allServices = [
  "Performance Marketing",
  "Google Ads",
  "Meta Ads",
  "SEO",
  "Strony internetowe",
  "Landing Pages",
  "Audyty marketingowe",
  "Analityka",
  "CRO",
  "Remarketing",
]

export const processSteps = [
  {
    step: "01",
    title: "Analiza",
    description:
      "Audytujemy Twój biznes, konkurencję i dotychczasowe działania. Definiujemy cele i kluczowe wskaźniki sukcesu.",
  },
  {
    step: "02",
    title: "Strategia",
    description:
      "Przygotowujemy strategię full-funnel z doborem kanałów, budżetów i komunikacji dopasowanej do Twoich odbiorców.",
  },
  {
    step: "03",
    title: "Wdrożenie",
    description:
      "Uruchamiamy kampanie, strony i analitykę. Konfigurujemy pomiar konwersji i raportowanie w czasie rzeczywistym.",
  },
  {
    step: "04",
    title: "Skalowanie",
    description:
      "Optymalizujemy wyniki i skalujemy to, co działa najlepiej — zwiększając sprzedaż przy zachowaniu rentowności.",
  },
]

export const caseStudies = [
  {
    industry: "E-commerce / Moda",
    metric: "ROAS",
    before: "2.1x",
    after: "6.8x",
    growth: "+224%",
    description: "Skalowanie kampanii Meta Ads i Google Performance Max.",
  },
  {
    industry: "Usługi B2B",
    metric: "Leady / mies.",
    before: "18",
    after: "112",
    growth: "+522%",
    description: "Kampanie Google Ads Search + landing page i CRO.",
  },
  {
    industry: "Lokalny biznes",
    metric: "Ruch organiczny",
    before: "1.2k",
    after: "9.4k",
    growth: "+683%",
    description: "Pozycjonowanie lokalne i content marketing.",
  },
]

export const benefits = [
  {
    title: "Transparentne raportowanie",
    description:
      "Dostęp do dashboardów na żywo. Widzisz dokładnie, na co idzie każda złotówka i jakie generuje wyniki.",
    icon: "BarChart3",
  },
  {
    title: "Decyzje oparte na danych",
    description:
      "Nie zgadujemy. Każda optymalizacja wynika z analizy danych i testów, nie z przeczucia.",
    icon: "LineChart",
  },
  {
    title: "Szybka komunikacja",
    description:
      "Stały kontakt z dedykowanym specjalistą. Odpowiadamy szybko i mówimy ludzkim językiem.",
    icon: "MessageSquare",
  },
  {
    title: "Nastawienie na wynik",
    description:
      "Rozliczamy się z efektów — sprzedaży, leadów i ROAS, a nie z liczby kliknięć.",
    icon: "Target",
  },
  {
    title: "Marketing full-funnel",
    description:
      "Łączymy reklamy, SEO, stronę i analitykę w spójną całość, która realnie zwiększa przychody.",
    icon: "Layers",
  },
  {
    title: "Działamy w całej Polsce",
    description:
      "Pracujemy zdalnie z klientami z całego kraju. Lokalizacja nie jest przeszkodą we współpracy.",
    icon: "MapPin",
  },
]

export const testimonials = [
  {
    quote:
      "Po trzech miesiącach współpracy ROAS wzrósł z 2x do prawie 7x. Wreszcie marketing, który realnie zarabia.",
    author: "Marta Kowalska",
    role: "Właścicielka, sklep e-commerce",
  },
  {
    quote:
      "MKT Lab postawiło nam kampanie Google Ads i nową stronę. Liczba zapytań wzrosła kilkukrotnie w dwa miesiące.",
    author: "Piotr Nowak",
    role: "CEO, firma usługowa B2B",
  },
  {
    quote:
      "Transparentność i komunikacja na najwyższym poziomie. W końcu rozumiem, za co płacę i jakie mam efekty.",
    author: "Anna Wiśniewska",
    role: "Marketing Manager, startup SaaS",
  },
  {
    quote:
      "Pozycjonowanie lokalne dosłownie zalało nas telefonami. Polecam każdemu lokalnemu biznesowi.",
    author: "Tomasz Lewandowski",
    role: "Właściciel, biznes lokalny",
  },
]

export const faqItems = [
  {
    question: "Ile kosztują usługi MKT Lab?",
    answer:
      "Nasze pakiety zaczynają się od 3 900 zł/mies. (START), 7 900 zł/mies. (GROWTH) i 14 900 zł/mies. (PRO). Dla większych firm przygotowujemy indywidualną wycenę w pakiecie ENTERPRISE. Każdy pakiet można modyfikować pod potrzeby klienta. Zapraszamy na bezpłatną konsultację!",
  },
  {
    question: "Jakie usługi oferuje MKT Lab?",
    answer:
      "Oferujemy kompleksowe usługi marketingowe: Performance Marketing (kampanie Google Ads, Facebook Ads), SEO (pozycjonowanie stron), Social Media (Facebook, Instagram, LinkedIn, TikTok) oraz Branding (strategia marki, identyfikacja wizualna). Działamy w Gdańsku i zdalnie w całej Polsce.",
  },
  {
    question: "Jak długo trwa wdrożenie kampanii?",
    answer:
      "Pierwsze efekty są widoczne już po 2-4 tygodniach od rozpoczęcia kampanii. Pełna optymalizacja i wdrożenie strategii trwa około 3 miesięcy. Każdy projekt jest inny - dostosowujemy tempo do Twoich potrzeb i budżetu.",
  },
  {
    question: "Czy oferujecie bezpłatną konsultację?",
    answer:
      "Tak! Oferujemy bezpłatną konsultację, podczas której poznamy Twoją firmę, przeanalizujemy obecną sytuację marketingową i zaproponujemy pierwsze kroki. To doskonała okazja, aby sprawdzić, czy możemy Ci pomóc.",
  },
  {
    question: "Czy tworzycie strony internetowe?",
    answer:
      "Tak. Projektujemy i wdrażamy nowoczesne, szybkie strony firmowe, landing page'e oraz sklepy internetowe zoptymalizowane pod SEO i konwersję, m.in. w technologii Next.js.",
  },
]
