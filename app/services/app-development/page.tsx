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
                <AppWindow className="w-4 h-4 text-primary-600" />
                <span className="text-xs sm:text-sm font-bold text-primary-700 uppercase tracking-wider">
                  Mobile App Development
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-6 leading-tight"
              >
                Native & Cross-Platform <span className="gradient-text">iOS & Android Apps</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed"
              >
                Build fluid, high-conversion mobile applications with 60 FPS performance, offline-first sync, and bank-grade data security. We deliver scalable mobile apps from MVP to enterprise platforms.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
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
                    src="/images/service-mobile-app.jpg"
                    alt="Mobile App Development 3D Ecosystem"
                    className="w-full h-auto rounded-3xl object-contain drop-shadow-[0_20px_40px_rgba(20,184,166,0.25)] border border-primary-200/60"
                  />

                  {/* Floating Badge 1 */}
                  <div className="absolute -top-3 left-2 bg-white/95 backdrop-blur-xl border border-primary-200 px-3.5 py-2 rounded-2xl shadow-teal-md flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-800">Flutter & React Native</span>
                  </div>

                  {/* Floating Badge 2 */}
                  <div className="absolute -bottom-3 right-2 bg-white/95 backdrop-blur-xl border border-primary-200 px-3.5 py-2 rounded-2xl shadow-teal-md flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-800">60 FPS Smooth UX</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Section>

        <Section className="bg-slate-50 bg-white">
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
                      <p className="text-slate-600 text-slate-500">{item.description}</p>
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

        <Section className="bg-slate-50 bg-white">
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
