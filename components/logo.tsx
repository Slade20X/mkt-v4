import Image from "next/image"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <Image
        src="/logo.webp"
        alt="MKT Lab logo"
        width={36}
        height={36}
        priority
        className="size-9 object-contain"
      />
      <span className="text-lg font-bold tracking-tight text-foreground">
        MKT<span className="text-primary">Lab</span>
      </span>
    </span>
  )
}
