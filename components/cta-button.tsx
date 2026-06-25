import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

const base =
  "group inline-flex items-center justify-center gap-2 rounded-sm text-sm font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"

const sizes = {
  default: "h-12 px-6",
  lg: "h-14 px-8 text-base",
}

const variants = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_0_0_0_var(--primary)] hover:shadow-[0_8px_40px_-8px_var(--primary)] hover:brightness-110",
  outline:
    "border border-border bg-card/40 text-foreground backdrop-blur hover:border-primary/60 hover:bg-card",
  ghost: "text-foreground/80 hover:text-foreground",
}

export function CtaButton({
  href,
  children,
  variant = "primary",
  size = "default",
  className,
  withArrow = false,
}: {
  href: string
  children: ReactNode
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  className?: string
  withArrow?: boolean
}) {
  return (
    <Link
      href={href}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      {children}
      {withArrow && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  )
}
