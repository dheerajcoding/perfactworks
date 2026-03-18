'use client'

import { useEffect, useRef, useState } from 'react'
import { TrendingUp, Users, Code, Award } from 'lucide-react'
import Section from '../ui/Section'

const stats = [
  {
    icon: Code,
    value: 15,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Successfully completed and deployed',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    value: 100,
    suffix: '%',
    label: 'Quality Focused',
    description: 'Committed to excellence in every project',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    value: 10,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Building lasting partnerships',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Award,
    value: 95,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Would recommend us to others',
    color: 'from-orange-500 to-red-500',
  },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const start = performance.now()
          const tick = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600 -z-10" />
      <div className="relative">
        <div className="text-center mb-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Our track record of delivering exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="text-center text-white group"
              >
                <div className="relative p-6 rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20`} />
                  <div className="relative z-10">
                    <div className="mb-4 flex justify-center">
                      <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">
                      <Counter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-lg font-bold mb-1">{stat.label}</div>
                    <div className="text-sm text-white/80">{stat.description}</div>
                    <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white/50 rounded-full w-full" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
