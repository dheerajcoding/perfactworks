'use client'

import { Zap, Target, Users, Trophy, ShieldCheck, CheckCircle2, HeartHandshake, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'

const differentiators = [
  {
    icon: Users,
    title: 'Direct Engineering Partnership',
    description: 'Work directly with expert senior developers who take full ownership of your product from architecture to deployment.',
  },
  {
    icon: Target,
    title: 'Tailor-Made Clean Code',
    description: 'No bloated templates or generic low-code shortcuts. Every system is built bespoke for your operational workflows and speed.',
  },
  {
    icon: Zap,
    title: 'Speed & Conversion Focused',
    description: 'We optimize for real business impact: lightning-fast Core Web Vitals, high lead conversion rates, and scalable infrastructure.',
  },
  {
    icon: Trophy,
    title: 'Transparent & Trust-Driven',
    description: 'Clear milestone agreements, weekly sprint demos, realistic timelines, and 100% pricing transparency with zero hidden fees.',
  },
]

export default function WhyPerfactWorks() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <Section className="bg-gradient-to-b from-white via-surface-200/40 to-white py-20 lg:py-28" id="why-perfactworks">
      <SectionHeader
        subtitle="Strategic Technology Partnership"
        title="We Build Trust Through Measurable Results"
        description="We don&apos;t just write code—we act as your dedicated engineering arm, ensuring your business scales reliably and securely."
      />

      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Main Partnership Showcase Card */}
        <div className="glass-card p-8 md:p-12 lg:p-14 rounded-3xl border border-primary-200/70 shadow-teal-xl relative overflow-hidden mb-16">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-200/40 to-tech-200/40 blur-3xl pointer-events-none -z-10" />

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Image Showcase with Floating Motion */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-[520px] group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/partnership-trust.jpg"
                  alt="Business partnership and technology contract agreement"
                  className="w-full h-auto object-cover rounded-3xl shadow-teal-lg border border-primary-200/80 transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Floating Trust Badge 1 */}
                <motion.div
                  animate={{ y: [5, -7, 5], x: [-2, 2, -2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-3 -left-3 bg-white/95 backdrop-blur-xl border border-primary-200 px-4 py-2.5 rounded-2xl shadow-teal-md flex items-center gap-2.5"
                >
                  <HeartHandshake className="w-4 h-4 text-primary-500" />
                  <div>
                    <p className="text-xs font-bold text-slate-800">100% Commitment</p>
                    <p className="text-[10px] text-primary-600 font-semibold">Direct Founder Access</p>
                  </div>
                </motion.div>

                {/* Floating Trust Badge 2 */}
                <motion.div
                  animate={{ y: [-6, 6, -6], x: [2, -2, 2] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-3 -right-3 bg-white/95 backdrop-blur-xl border border-primary-200 px-4 py-2.5 rounded-2xl shadow-teal-md flex items-center gap-2.5"
                >
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  <div>
                    <p className="text-xs font-bold text-slate-800">NDA & IP Protected</p>
                    <p className="text-[10px] text-slate-500">100% Code Ownership</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Information & Pillars */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-200 shadow-teal-sm">
                <ShieldCheck className="w-4 h-4 text-primary-600" />
                <span className="text-xs font-bold text-primary-700 uppercase tracking-wider">
                  Reliable • Scalable • Transparent
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight">
                Your Dedicated Tech Partner for <span className="gradient-text">Long-Term Growth</span>
              </h3>

              <p className="text-base text-slate-600 leading-relaxed">
                Whether you&apos;re an enterprise modernizing internal systems or a founder launching a breakthrough startup, we align with your commercial goals to deliver software that drives actual revenue.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Direct communication via dedicated Slack / WhatsApp channels',
                  'Bi-weekly staging demos with live deployable progress',
                  'Rigorous security audits, data encryption & compliance',
                  'Post-launch SLA support, maintenance & scaling assistance',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.04, boxShadow: '0 12px 32px rgba(20, 184, 166, 0.35)' }}
                    whileTap={{ scale: 0.98 }}
                    className="px-7 py-3.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl text-sm md:text-base flex items-center gap-2 shadow-teal-md"
                  >
                    <span>Partner With Us Today</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(20, 184, 166, 0.18)' }}
                className="glass-card p-6 rounded-3xl border border-primary-100/80 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-primary-500 to-tech-500 text-white w-fit mb-4 shadow-teal-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-800 mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
