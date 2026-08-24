'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Users, Code2, Award, Sparkles, CheckCircle2 } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'

const stats = [
  {
    icon: Code2,
    value: 15,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'High-performance web apps & mobile solutions',
    accent: 'from-primary-500 to-tech-500',
    percent: 85,
  },
  {
    icon: TrendingUp,
    value: 100,
    suffix: '%',
    label: 'Quality & Reliability',
    description: 'Committed to clean architecture and zero debt',
    accent: 'from-emerald-500 to-teal-500',
    percent: 100,
  },
  {
    icon: Users,
    value: 10,
    suffix: '+',
    label: 'Happy Global Clients',
    description: 'Long-term partnerships across India & worldwide',
    accent: 'from-tech-500 to-blue-600',
    percent: 90,
  },
  {
    icon: Award,
    value: 95,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Verified positive feedback & referrals',
    accent: 'from-amber-500 to-primary-500',
    percent: 95,
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
          const duration = 2000
          const start = performance.now()
          const tick = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.2 }
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
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <Section className="bg-gradient-to-b from-white via-surface-200/40 to-white py-20" id="stats">
      <SectionHeader
        subtitle="Proven Track Record"
        title="Numbers That Speak for Themselves"
        description="Our commitment to speed, security, and performance reflected in measurable results."
      />

      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(20, 184, 166, 0.2)' }}
                className="glass-card p-6 md:p-7 rounded-3xl border border-primary-100/80 shadow-teal-sm text-left flex flex-col justify-between relative overflow-hidden group transition-all duration-300"
              >
                {/* Ambient Card Glow on Hover */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.accent} opacity-5 group-hover:opacity-15 rounded-bl-full transition-opacity duration-500 pointer-events-none`} />

                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className={`p-3.5 rounded-2xl bg-gradient-to-br ${stat.accent} text-white shadow-teal-sm`}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-200">
                      Verified
                    </span>
                  </div>

                  {/* Counter Value */}
                  <div className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-2 tracking-tight">
                    <span className="gradient-text">
                      <Counter target={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>

                  {/* Label */}
                  <h4 className="text-base font-bold text-slate-800 mb-1.5">{stat.label}</h4>

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">{stat.description}</p>
                </div>

                {/* Progress Bar Fill */}
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={inView ? { width: `${stat.percent}%` } : {}}
                    transition={{ duration: 1.5, delay: 0.4 + i * 0.15, ease: 'easeOut' }}
                    className={`h-full rounded-full bg-gradient-to-r ${stat.accent}`}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
