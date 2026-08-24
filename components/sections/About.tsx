'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Users, Award, CheckCircle, Sparkles, Rocket, Eye, Gem, ShieldCheck, HeartHandshake } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Card from '../ui/Card'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Section className="bg-white py-16" id="about">
      <SectionHeader
        subtitle="Who We Are"
        title="Passionate Innovators, Designers & Engineers"
        description="PerfactWorks empowers startups, fintechs, and enterprises to build high-performance web applications, mobile platforms, and automated business systems."
      />

      <div ref={ref} className="max-w-7xl mx-auto space-y-16">
        {/* Office Architecture Showcase Centerpiece */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden shadow-teal-xl border border-primary-200/80 group"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about-office.jpg"
            alt="PerfactWorks Innovation Center - Our Mission, Vision and Values"
            className="w-full h-auto max-h-[580px] object-cover transition-transform duration-700 group-hover:scale-[1.01]"
          />

          {/* Floating Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

          {/* Bottom Floating Stats Strip */}
          <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white/95 backdrop-blur-xl border border-primary-200/80 rounded-2xl p-4 md:p-6 shadow-2xl flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary-500 text-white shadow-teal-sm">
                <Rocket className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Our Mission</p>
                <p className="text-sm md:text-base font-extrabold text-slate-800">Deliver innovative digital solutions that drive growth.</p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-tech-500 text-white shadow-teal-sm">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Our Vision</p>
                <p className="text-sm md:text-base font-extrabold text-slate-800">Global excellence in modern digital engineering.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500 text-white shadow-teal-sm">
                <Gem className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Our Values</p>
                <p className="text-sm md:text-base font-extrabold text-slate-800">Integrity, collaboration & client-first focus.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Detailed Story & Value Pillars Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Story Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 text-left space-y-4"
          >
            <span className="text-xs font-bold text-primary-700 uppercase tracking-widest bg-primary-50 px-3 py-1 rounded-full border border-primary-200">
              Our Journey
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
              Engineering with Purpose: From <span className="gradient-text">Concept to Real Impact</span>
            </h3>

            <p className="text-slate-600 leading-relaxed">
              <strong>PERFACTWORKS</strong> was founded with a singular purpose: to build reliable, high-performance software that solves actual operational bottlenecks and accelerates commercial growth.
            </p>

            <p className="text-slate-600 leading-relaxed">
              From high-security fintech platforms like <em>mycashbridge</em> to corporate consulting portals like <em>Reddington Global</em>, non-profit foundations like <em>RGcare Foundation</em>, and consumer mobile apps like <em>Pooja App</em>, we take full end-to-end ownership of every architecture we ship.
            </p>

            {/* Achievement Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { label: 'Bank-Grade Security', color: 'from-teal-500 to-cyan-500' },
                { label: '100% Code Ownership', color: 'from-emerald-500 to-teal-500' },
                { label: 'Verified Client Trust', color: 'from-cyan-500 to-blue-500' },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className={`flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r ${badge.color} text-white text-xs font-bold rounded-xl shadow-teal-sm`}
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right 3 Pillars Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid gap-4"
          >
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description: 'To deliver innovative solutions that drive exponential business growth and create lasting digital value.',
                color: 'from-primary-500 to-teal-600',
              },
              {
                icon: Users,
                title: 'Our Team',
                description: 'A tight-knit collective of senior full-stack architects, mobile engineers, and UI/UX designers committed to clean code.',
                color: 'from-cyan-500 to-blue-600',
              },
              {
                icon: Award,
                title: 'Our Values',
                description: 'Integrity, transparent communication, rapid iteration, and a relentless client-first mindset in every sprint.',
                color: 'from-emerald-500 to-teal-600',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.12, duration: 0.4 }}
                  whileHover={{ y: -4, boxShadow: '0 16px 32px -8px rgba(20, 184, 166, 0.18)' }}
                  className="glass-card p-5 rounded-2xl border border-primary-100/80 flex items-start gap-4 text-left group transition-all"
                >
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-teal-sm flex-shrink-0 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-base mb-1 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
