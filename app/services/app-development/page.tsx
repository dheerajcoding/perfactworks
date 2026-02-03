'use client'

import { motion } from 'framer-motion'
import { Smartphone, Zap, Shield, Rocket, CheckCircle, ArrowRight, AppWindow } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import CTABanner from '@/components/sections/CTABanner'

const capabilities = [
  {
    icon: Smartphone,
    title: 'iOS & Android App Development',
    description: 'Native and cross-platform apps built for performance, reliability, and smooth user experiences.',
  },
  {
    icon: Shield,
    title: 'Secure Mobile Architecture',
    description: 'End-to-end security with API hardening, authentication, encryption, and compliance-ready practices.',
  },
  {
    icon: Rocket,
    title: 'Scalable Backend Integration',
    description: 'Cloud-ready APIs and infrastructure that scale with user growth and traffic spikes.',
  },
  {
    icon: Zap,
    title: 'App Store Launch Support',
    description: 'Release planning, store optimization, and post-launch monitoring to maximize adoption.',
  },
]

const appTechStack = [
  'React Native & Expo',
  'Flutter & Dart',
  'Swift (iOS)',
  'Kotlin (Android)',
  'Node.js & NestJS APIs',
  'Firebase & Supabase',
]

const outcomes = [
  'Higher retention through UX-driven flows',
  'Faster release cycles with agile delivery',
  'Stable performance on low-bandwidth networks',
  'Analytics-first tracking for growth teams',
]

export default function AppDevelopmentPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pt-20">
        <Section className="relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/10 via-primary-500/10 to-transparent" />
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full mb-6"
            >
              <AppWindow className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                Mobile App Development
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              App Development for iOS & Android
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 dark:text-slate-400 mb-8"
            >
              Build mobile products that perform. We design and develop secure, scalable apps for India and global businesses—
              from MVP launch to enterprise-grade platforms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="primary" size="lg" href="/contact">
                Start Your App
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg" href="/case-studies">
                View Case Studies
              </Button>
            </motion.div>
          </div>
        </Section>

        <Section className="bg-slate-50 dark:bg-slate-900/50">
          <SectionHeader
            subtitle="What We Deliver"
            title="Mobile Apps That Drive Growth"
            description="Strategy-led app development that combines product thinking, UX, and high-performance engineering."
          />
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {capabilities.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={item.title} delay={index * 0.1} hover>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </Section>

        <Section>
          <SectionHeader
            subtitle="Technology Stack"
            title="Modern Mobile Tech for Fast Delivery"
            description="We choose the best stack for your roadmap, timeline, and performance goals."
          />
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {appTechStack.map((tech) => (
              <div key={tech} className="flex items-center gap-3 p-4 glass rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section className="bg-slate-50 dark:bg-slate-900/50">
          <SectionHeader
            subtitle="Business Outcomes"
            title="Apps Optimized for Retention & Revenue"
            description="We focus on outcomes that matter: acquisition, activation, and long-term engagement."
          />
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {outcomes.map((item, index) => (
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

        <Section>
          <SectionHeader
            subtitle="Related Services"
            title="Build a Full Growth Stack"
            description="Combine mobile with web platforms, SEO, and rapid MVP delivery."
          />
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="secondary" size="lg" href="/services/web-development">
              Web Development
            </Button>
            <Button variant="secondary" size="lg" href="/services/seo-services">
              SEO Services
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
