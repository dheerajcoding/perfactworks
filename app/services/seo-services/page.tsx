'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Search, Zap, ShieldCheck, CheckCircle, ArrowRight, BarChart3 } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import CTABanner from '@/components/sections/CTABanner'

const seoPillars = [
  {
    icon: Search,
    title: 'Technical SEO',
    description: 'Site architecture, indexability, structured data, and crawl optimization that search engines trust.',
  },
  {
    icon: Zap,
    title: 'Performance & Core Web Vitals',
    description: 'LCP, CLS, and INP improvements that boost rankings and conversion rates.',
  },
  {
    icon: BarChart3,
    title: 'Content & On-Page Optimization',
    description: 'Keyword research, intent mapping, and content improvements that capture qualified demand.',
  },
  {
    icon: ShieldCheck,
    title: 'SEO Governance & Monitoring',
    description: 'Ongoing tracking, reporting, and fixes to keep rankings stable across markets.',
  },
]

const deliverables = [
  'Full technical audit and fixes roadmap',
  'Schema markup and metadata optimization',
  'Internal linking strategy for service pages',
  'Site speed upgrades and image optimization',
  'Ranking and conversion tracking dashboards',
  'SEO-ready content briefs for growth teams',
]

export default function SeoServicesPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pt-20">
        <Section className="relative pt-6 pb-12">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-50/40 via-surface-100/50 to-white" />

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
            {/* Left Content */}
            <div className="lg:col-span-6 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200/80 rounded-full mb-6 shadow-teal-sm"
              >
                <TrendingUp className="w-4 h-4 text-primary-600" />
                <span className="text-xs sm:text-sm font-bold text-primary-700 uppercase tracking-wider">
                  Technical SEO & Performance
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-6 leading-tight"
              >
                Technical SEO & <span className="gradient-text">Organic Search Growth</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed"
              >
                Dominate high-intent search queries with programmatic SEO, 99+ Core Web Vitals optimization, automated schema markup, and high-authority search indexation for sustainable revenue growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button variant="primary" size="lg" href="/contact">
                  Request SEO Audit
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="secondary" size="lg" href="/case-studies">
                  View Results
                </Button>
              </motion.div>
            </div>

            {/* Right 3D Visual with Floating Badges */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-[500px]"
              >
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/hero-tech-3d.png"
                    alt="Search Engine Optimization & Cloud Architecture 3D illustration"
                    className="w-full h-auto rounded-3xl object-contain drop-shadow-[0_20px_40px_rgba(20,184,166,0.25)]"
                  />

                  {/* Floating Badge 1 */}
                  <div className="absolute -top-3 left-2 bg-white/95 backdrop-blur-xl border border-primary-200 px-3.5 py-2 rounded-2xl shadow-teal-md flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-800">100/100 Core Web Vitals</span>
                  </div>

                  {/* Floating Badge 2 */}
                  <div className="absolute -bottom-3 right-2 bg-white/95 backdrop-blur-xl border border-primary-200 px-3.5 py-2 rounded-2xl shadow-teal-md flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-800">Rank #1 Strategy</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Section>

        <Section className="bg-slate-50 bg-white">
          <SectionHeader
            subtitle="Core SEO Pillars"
            title="Everything Search Engines Need to Trust You"
            description="We blend engineering, content, and analytics to build sustainable SEO growth."
          />
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {seoPillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <Card key={pillar.title} delay={index * 0.1} hover>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-primary-500 to-emerald-600">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                      <p className="text-slate-600 text-slate-500">{pillar.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </Section>

        <Section>
          <SectionHeader
            subtitle="Deliverables"
            title="What You Get with PerfactWorks SEO"
            description="Actionable improvements and long-term visibility that compound over time."
          />
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {deliverables.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 glass rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section className="bg-slate-50 bg-white">
          <SectionHeader
            subtitle="Related Services"
            title="Combine SEO with Product Growth"
            description="Improve visibility while building scalable products with the right stack."
          />
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="secondary" size="lg" href="/services/web-development">
              Web Development
            </Button>
            <Button variant="secondary" size="lg" href="/services/app-development">
              App Development
            </Button>
            <Button variant="secondary" size="lg" href="/services/saas-mvp-development">
              SaaS MVP Development
            </Button>
          </div>
        </Section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
