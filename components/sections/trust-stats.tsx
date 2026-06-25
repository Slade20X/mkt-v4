'use client'

import { useState, useEffect, useRef } from 'react'

const trust = [
  { value: '109+', label: 'Klientów', target: 109, suffix: '+' },
  { value: '1M+', label: 'Dochodu klientów', target: 1000000, suffix: 'M+' },
  { value: '95%', label: 'Retencji klientów', target: 95, suffix: '%' },
  { value: '5+', label: 'Krajów', target: 5, suffix: '+' },
]

function AnimatedCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / 1500, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(easeOut * target)
      
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, target])

  const formatValue = (value: number) => {
    if (target >= 1000000) {
      return (value / 1000000).toFixed(1)
    }
    return value.toString()
  }

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="text-2xl font-semibold text-foreground tabular-nums">
        {isVisible ? formatValue(count) : '0'}{suffix}
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  )
}

export function TrustStats() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
        {trust.map((t) => (
          <AnimatedCounter
            key={t.label}
            target={t.target}
            suffix={t.suffix}
            label={t.label}
          />
        ))}
      </div>
    </section>
  )
}