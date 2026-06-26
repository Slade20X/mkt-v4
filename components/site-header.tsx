"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { navLinks } from "@/lib/site"
import { CtaButton } from "@/components/cta-button"
import { Logo } from "@/components/logo"

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
    // Jeśli jesteś na innej stronie, przekieruj na główną
    if (pathname !== "/") {
      window.location.href = "/"
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-5",
          scrolled
            ? "border-border bg-background shadow-lg shadow-black/20"
            : "border-transparent bg-transparent"
        )}
      >
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2 rounded-full"
          aria-label="MKT Lab - strona główna"
        >
          <Logo className="h-7 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Główna nawigacja">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <CtaButton href="/kontakt" size="default" withArrow>
            Umów rozmowę
          </CtaButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-border bg-background p-3 shadow-lg shadow-black/20 lg:hidden"
          >
            <nav className="flex flex-col" aria-label="Nawigacja mobilna">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-base font-medium transition-colors",
                    pathname === link.href
                      ? "bg-card text-primary"
                      : "text-foreground/80 hover:bg-card"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-2 p-1">
              <CtaButton href="/kontakt" className="w-full" withArrow>
                Bezpłatna konsultacja
              </CtaButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}