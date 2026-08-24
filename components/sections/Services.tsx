'use client'

import { useState } from 'react'
import {
  Code,
  Smartphone,
  Rocket,
  Brain,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
  BarChart3,
  Flame,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'

const showcaseServices = [
  {
    id: 'web-apps',
    icon: Code,
    category: 'Full-Stack Web Development',
    title: 'Modern Web Apps & Cloud Systems',
    tagline: 'Lightning-fast React, Next.js & Node.js platforms engineered for scale.',
    image: '/images/service-cloud-platform.jpg',
    stats: [
      { label: 'Core Web Vitals', value: '99/100' },
      { label: 'API Response', value: '< 85ms' },
      { label: 'Architecture', value: 'Serverless' },
    ],
    features: [
      'Next.js 15 & React 19 SSR / SSG Architecture',
      'Ultra-secure REST & GraphQL Backend APIs',
      'High-throughput PostgreSQL & MongoDB clusters',
      'Continuous Cloud CI/CD & DevOps Automation',
    ],
    problem: 'Slow loading speeds, high bounce rates, and outdated legacy code.',
    solution: 'Engineered from scratch for sub-second page loads and seamless user conversion.',
    badges: [
      { text: 'React 19 & Next.js', icon: Zap, position: 'top-left' },
      { text: 'Sub-second Latency', icon: Flame, position: 'bottom-right' },
    ],
    href: '/services/web-development',
    accentColor: 'from-teal-500 to-cyan-500',
    glowColor: 'rgba(20, 184, 166, 0.35)',
  },
  {
    id: 'mobile-apps',
    icon: Smartphone,
    category: 'Mobile App Development',
    title: 'Native & Cross-Platform Mobile Apps',
    tagline: 'Smooth 60 FPS iOS & Android applications with offline-first sync.',
    image: '/images/service-mobile-app.jpg',
    stats: [
      { label: 'Framerate', value: '60 FPS' },
      { label: 'Store Approval', value: '100%' },
      { label: 'Platforms', value: 'iOS + Android' },
    ],
    features: [
      'Cross-platform Flutter & React Native development',
      'Native Swift & Kotlin high-performance modules',
      'Push notifications, in-app billing & biometrics',
      'Complete Apple App Store & Google Play launch support',
    ],
    problem: 'Laggy hybrid apps with high uninstall rates and poor user retention.',
    solution: 'Polished native feel, instant launch times, and silky-smooth micro-interactions.',
    badges: [
      { text: 'iOS & Android Ready', icon: Smartphone, position: 'top-left' },
      { text: 'Offline-First Cache', icon: ShieldCheck, position: 'bottom-right' },
    ],
    href: '/services/app-development',
    accentColor: 'from-blue-500 to-teal-500',
    glowColor: 'rgba(14, 165, 233, 0.35)',
  },
  {
    id: 'saas-mvp',
    icon: Rocket,
    category: 'SaaS & MVP Engineering',
    title: 'Rapid Startup MVP & Scalable SaaS',
    tagline: 'Go from concept to production-ready market launch in 4 to 6 weeks.',
    image: '/images/service-web-saas.png',
    stats: [
      { label: 'Delivery Time', value: '4-6 Wks' },
      { label: 'Multi-Tenant', value: 'Included' },
      { label: 'Stripe / Billing', value: 'Ready' },
    ],
    features: [
      'Multi-tenant database schema & role-based access',
      'Stripe & Razorpay automated subscription billing',
      'User onboarding, analytics tracking & admin dashboards',
      'Investor-ready tech documentation and clean codebase',
    ],
    problem: 'Burning runway with slow development and over-engineered tech stacks.',
    solution: 'Lean, robust, modular architecture that validates fast and scales effortlessly.',
    badges: [
      { text: '4-Week Delivery', icon: Rocket, position: 'top-left' },
      { text: 'Stripe Subscriptions', icon: CheckCircle2, position: 'bottom-right' },
    ],
    href: '/services/saas-mvp-development',
    accentColor: 'from-cyan-500 to-blue-600',
    glowColor: 'rgba(6, 182, 212, 0.35)',
  },
  {
    id: 'enterprise-systems',
    icon: Brain,
    category: 'Custom Business Systems',
    title: 'Enterprise HRMS, ERP & CRM Portals',
    tagline: 'Custom internal tools that eliminate manual busywork and streamline operations.',
    image: '/images/service-enterprise-systems.png',
    stats: [
      { label: 'Efficiency Gain', value: '+45%' },
      { label: 'Data Security', value: 'SOC-2 Ready' },
      { label: 'Role Access', value: 'Granular' },
    ],
    features: [
      'Automated payroll, attendance & employee lifecycles',
      'Custom CRM pipelines with lead tracking & notifications',
      'Interactive executive dashboards with real-time analytics',
      'Role-based granular permissions & audit logging',
    ],
    problem: 'Disjointed spreadsheets and costly generic SaaS that cannot fit your workflow.',
    solution: 'Tailor-made internal software matching your exact operational requirements.',
    badges: [
      { text: 'Custom Workflows', icon: Layers, position: 'top-left' },
      { text: 'Realtime Analytics', icon: BarChart3, position: 'bottom-right' },
    ],
    href: '/services/enterprise-systems',
    accentColor: 'from-teal-600 to-emerald-500',
    glowColor: 'rgba(13, 148, 136, 0.35)',
  },
  {
    id: 'seo-growth',
    icon: Sparkles,
    category: 'SEO & Organic Growth',
    title: 'Technical SEO & Lead Generation',
    tagline: 'Dominate Google search results and turn organic visitors into qualified leads.',
    image: '/images/hero-tech-3d.png',
    stats: [
      { label: 'Organic Traffic', value: '+300%' },
      { label: 'Google Rank', value: 'Top 3' },
      { label: 'Schema Markup', value: 'Rich Snippets' },
    ],
    features: [
      'Comprehensive on-page & technical SEO audits',
      'Schema.org structured JSON-LD semantic data',
      'Core Web Vitals acceleration for 95+ Mobile scores',
      'High-intent keyword architecture & content strategy',
    ],
    problem: 'Spending money on ads with low ROI or being invisible on Google searches.',
    solution: 'Organic search dominance that generates inbound leads without ad spend.',
    badges: [
      { text: 'Zero Ad-Spend Leads', icon: Sparkles, position: 'top-left' },
      { text: 'Core Web Vitals 95+', icon: Cpu, position: 'bottom-right' },
    ],
    href: '/services/seo-services',
    accentColor: 'from-emerald-500 to-teal-500',
    glowColor: 'rgba(16, 185, 129, 0.35)',
  },
  {
    id: 'graphic-motion',
    icon: Sparkles,
    category: 'Video Editing & Motion Design',
    title: '4K Video Editing, Adobe High-Motion & 3D Design',
    tagline: 'Broadcast-quality video editing, Adobe After Effects high-motion graphics, and high-conversion UI/UX.',
    image: '/images/service-graphic-motion.jpg',
    stats: [
      { label: 'Video Suite', value: 'Premiere & AE' },
      { label: 'Resolution', value: '4K HDR' },
      { label: 'Motion Frame', value: '60 FPS' },
    ],
    features: [
      '4K video editing, color grading & dynamic pacing in Premiere Pro & DaVinci',
      'Adobe After Effects high-motion graphics, 3D camera tracking & kinetic typography',
      'Interactive Figma UI/UX design systems & high-conversion prototypes',
      'Ultra-light 60 FPS Lottie / Rive web animations & 3D product visuals',
    ],
    problem: 'Boring low-retention videos, static templates, and lack of visual impact.',
    solution: 'Cinematic video pacing, high-motion Adobe VFX, and polished brand design that converts.',
    badges: [
      { text: 'Premiere & AE VFX', icon: Sparkles, position: 'top-left' },
      { text: '4K & 60 FPS Motion', icon: Flame, position: 'bottom-right' },
    ],
    href: '/services/graphic-motion-design',
    accentColor: 'from-cyan-500 to-primary-600',
    glowColor: 'rgba(14, 165, 233, 0.35)',
  },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  const current = showcaseServices[activeTab]

  return (
    <Section className="bg-gradient-to-b from-white via-surface-200/50 to-white py-20 lg:py-28" id="services">
      <SectionHeader
        subtitle="Interactive Technology Showcase"
        title="Explore What We Engineer"
        description="Experience our high-performance digital services in detail. Select a capability to view its full visual ecosystem, performance metrics, and deliverables."
      />

      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Interactive Tab Selector Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12 p-2 bg-white/80 backdrop-blur-xl border border-primary-100 rounded-2xl md:rounded-full shadow-teal-sm"
        >
          {showcaseServices.map((service, idx) => {
            const Icon = service.icon
            const isSelected = activeTab === idx
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(idx)}
                className={`relative px-4 py-2.5 md:px-5 md:py-3 rounded-xl md:rounded-full text-xs md:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                  isSelected
                    ? 'text-white shadow-teal-md'
                    : 'text-slate-600 hover:text-primary-600 hover:bg-primary-50/70'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeServiceTab"
                    className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl md:rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-primary-500'}`} />
                <span>{service.category}</span>
              </button>
            )
          })}
        </motion.div>

        {/* Master Showcase: Animated Visual & Detailed Info Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -25, scale: 0.98 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="glass-card p-6 md:p-10 lg:p-12 relative overflow-hidden border border-primary-200/70 shadow-teal-xl"
          >
            {/* Ambient Animated Radial Light */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.35, 0.6, 0.35],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ backgroundColor: current.glowColor }}
              className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full blur-[100px] pointer-events-none -z-10"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              style={{ backgroundColor: current.glowColor }}
              className="absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full blur-[90px] pointer-events-none -z-10"
            />

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Details Column */}
              <div className="lg:col-span-6 space-y-6 text-left">
                {/* Category Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-200 shadow-teal-sm">
                  <current.icon className="w-4 h-4 text-primary-600" />
                  <span className="text-xs font-bold text-primary-700 uppercase tracking-wider">
                    {current.category}
                  </span>
                </div>

                {/* Main Heading */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight">
                  {current.title}
                </h3>

                {/* Subtitle */}
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  {current.tagline}
                </p>

                {/* Performance Stats Counters */}
                <div className="grid grid-cols-3 gap-3 pt-2 pb-2">
                  {current.stats.map((st) => (
                    <div
                      key={st.label}
                      className="bg-white/80 backdrop-blur-md p-3.5 rounded-2xl border border-primary-100/80 shadow-teal-sm text-center"
                    >
                      <p className="text-lg md:text-xl font-extrabold gradient-text">{st.value}</p>
                      <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-tight mt-0.5">
                        {st.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 bg-surface-100/80 p-4 rounded-2xl border border-primary-100/60">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Key Deliverables & Tech Specs
                  </p>
                  {current.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-xs md:text-sm text-slate-700">
                      <div className="p-1 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Problem & Solution Callout */}
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/60 text-slate-700">
                    <p className="font-bold text-amber-800 mb-1 flex items-center gap-1.5">
                      <span>⚠</span> Problem Addressed
                    </p>
                    <p className="text-slate-600">{current.problem}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-primary-50/70 border border-primary-200/60 text-slate-700">
                    <p className="font-bold text-primary-800 mb-1 flex items-center gap-1.5">
                      <span>✓</span> The Outcome
                    </p>
                    <p className="text-slate-600">{current.solution}</p>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link href="/contact" className="flex-1 sm:flex-initial">
                    <motion.button
                      whileHover={{ scale: 1.04, boxShadow: '0 12px 32px rgba(20, 184, 166, 0.35)' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl text-sm md:text-base flex items-center justify-center gap-2 shadow-teal-md transition-all"
                    >
                      <span>Schedule Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                  <Link href={current.href} className="flex-1 sm:flex-initial">
                    <motion.button
                      whileHover={{ scale: 1.04, backgroundColor: 'rgba(20, 184, 166, 0.08)' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto px-6 py-3.5 bg-white border border-primary-200 text-primary-700 font-bold rounded-xl text-sm md:text-base hover:border-primary-400 transition-all flex items-center justify-center"
                    >
                      View Deep Dive
                    </motion.button>
                  </Link>
                </div>
              </div>

              {/* Right Showcase: Large 3D Visual with Floating Badges & Motion */}
              <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] lg:min-h-[460px]">
                {/* Visual Backdrop Frame */}
                <motion.div
                  initial={{ rotate: -2, scale: 0.95 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full max-w-[500px] flex items-center justify-center"
                >
                  {/* Floating 3D Artwork */}
                  <motion.div
                    animate={{
                      y: [-10, 10, -10],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="relative w-full"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={current.image}
                      alt={current.title}
                      fetchPriority="high"
                      className="w-full h-auto max-h-[440px] object-contain drop-shadow-[0_25px_35px_rgba(20,184,166,0.25)] rounded-2xl"
                    />

                    {/* Floating Top Badge */}
                    {(() => {
                      const BadgeIcon1 = current.badges[0].icon
                      return (
                        <motion.div
                          animate={{
                            y: [5, -8, 5],
                            x: [-3, 3, -3],
                          }}
                          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                          className="absolute -top-3 left-2 bg-white/95 backdrop-blur-xl border border-primary-200 px-3.5 py-2 rounded-2xl shadow-teal-md flex items-center gap-2"
                        >
                          <BadgeIcon1 className="w-4 h-4 text-primary-500" />
                          <span className="text-xs font-bold text-slate-800">{current.badges[0].text}</span>
                        </motion.div>
                      )
                    })()}

                    {/* Floating Bottom Badge */}
                    {(() => {
                      const BadgeIcon2 = current.badges[1].icon
                      return (
                        <motion.div
                          animate={{
                            y: [-6, 8, -6],
                            x: [3, -3, 3],
                          }}
                          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                          className="absolute -bottom-3 right-2 bg-white/95 backdrop-blur-xl border border-primary-200 px-3.5 py-2 rounded-2xl shadow-teal-md flex items-center gap-2"
                        >
                          <BadgeIcon2 className="w-4 h-4 text-primary-500" />
                          <span className="text-xs font-bold text-slate-800">{current.badges[1].text}</span>
                        </motion.div>
                      )
                    })()}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All Services 3D Visual Cards Grid */}
        <div className="mt-16 pt-12 border-t border-primary-100/60">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-primary-700 uppercase tracking-widest bg-primary-50 px-3 py-1 rounded-full border border-primary-200/60">
              Complete Service Portfolio
            </span>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mt-2">
              Explore All <span className="gradient-text">Engineering Disciplines</span>
            </h4>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcaseServices.map((srv, idx) => (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px -12px rgba(20, 184, 166, 0.22)' }}
                onClick={() => {
                  setActiveTab(idx)
                  const el = document.getElementById('services-showcase')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`glass-card p-5 rounded-3xl border text-left flex flex-col justify-between cursor-pointer group transition-all duration-300 ${
                  activeTab === idx
                    ? 'border-primary-400 ring-2 ring-primary-300 shadow-teal-md bg-white'
                    : 'border-primary-100/80 hover:border-primary-300'
                }`}
              >
                <div>
                  {/* Card 3D Image Preview */}
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-primary-50/50 to-surface-200/50 flex items-center justify-center p-2 border border-primary-100/60 group-hover:border-primary-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-2.5 right-2.5 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-primary-700 border border-primary-200/80 shadow-sm">
                      {srv.category}
                    </span>
                  </div>

                  <h5 className="text-base font-bold text-slate-800 group-hover:text-primary-600 transition-colors mb-1.5 line-clamp-1">
                    {srv.title}
                  </h5>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                    {srv.tagline}
                  </p>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-3 border-t border-primary-100/60 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-primary-600">
                    <span>{srv.stats[0].label}:</span>
                    <span className="font-extrabold text-slate-800">{srv.stats[0].value}</span>
                  </div>
                  <Link
                    href={srv.href}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors group-hover:translate-x-0.5"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
