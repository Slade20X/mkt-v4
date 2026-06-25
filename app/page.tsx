import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/sections/hero"
import { TrustStats } from "@/components/sections/trust-stats"
import { Services } from "@/components/sections/services"
import { Process } from "@/components/sections/process"
import { Results } from "@/components/sections/results"
import { WhyUs } from "@/components/sections/why-us"
import { Testimonials } from "@/components/sections/testimonials"
import { Faq } from "@/components/sections/faq"
import { CtaSection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustStats />
        <Services />
        <Process />
        <Results />
        <WhyUs />
        <Testimonials />
        <Faq />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
