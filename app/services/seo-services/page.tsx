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
        <Section className="relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/10 via-emerald-500/10 to-transparent" />
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 rounded-full mb-6"
            >
              <TrendingUp className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                SEO Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Technical SEO & Performance Growth
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 dark:text-slate-400 mb-8"
            >
              Improve rankings, speed, and conversions with a performance-first SEO strategy. We help India and global businesses
              fix indexability issues, build authority, and grow qualified organic traffic.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
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
        </Section>

        <Section className="bg-slate-50 dark:bg-slate-900/50">
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
                      <p className="text-slate-600 dark:text-slate-400">{pillar.description}</p>
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

        <Section className="bg-slate-50 dark:bg-slate-900/50">
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
