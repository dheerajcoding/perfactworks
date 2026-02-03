'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Users, Award, CheckCircle, Star } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Card from '../ui/Card'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Section className="bg-slate-50 dark:bg-slate-900/50" id="about">
      <SectionHeader
        subtitle="About PerfactWorks"
        title="Your Trusted Partner for Web, App & SEO Growth"
        description="PerfactWorks helps India and global businesses build high-performance web apps, mobile products, and SEO-ready digital platforms that convert."
      />
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-2xl font-bold">Our Story: From Idea to Impact</h3>
          </div>

          <p className="text-slate-600 dark:text-slate-400 mb-4">
            <strong>PERFACTWORKS</strong> was founded to deliver <strong>reliable web development, app development, and SEO services</strong>
            for growth-focused teams. We partner with startups, SMEs, and enterprises across India and worldwide to build products that perform.
          </p>
          
          {/* Mission-Driven Paragraph */}
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 border-l-4 border-primary-500 p-4 rounded-r-lg mb-4">
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              <strong>Our Mission:</strong> Engineering scalable, performance-first software with measurable business outcomes.
              We design systems that grow with your traffic, revenue, and operational needs.
            </p>
          </div>
          
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            We've delivered MVPs, enterprise systems, and conversion-focused websites that improve time-to-market and reduce technical debt.
            Our approach blends product strategy, engineering excellence, and SEO-friendly architecture to help you win in competitive markets.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            What sets us apart? <strong>We care about your success</strong>. You work with dedicated specialists who obsess over quality, speed,
            and measurable outcomes—from Core Web Vitals to revenue-driving features.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            If you need a dependable tech partner for web apps, mobile apps, or SEO-led growth, PerfactWorks is ready to help.
          </p>

          {/* Achievement Badges */}
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'ISO 9001 Certified', color: 'from-blue-500 to-cyan-500' },
              { label: 'Top Rated Agency', color: 'from-green-500 to-emerald-500' },
              { label: 'Verified Reviews', color: 'from-purple-500 to-pink-500' },
            ].map((badge, idx) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 0.6 + idx * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${badge.color} text-white text-sm font-semibold rounded-lg shadow-lg`}
              >
                <CheckCircle className="w-4 h-4" />
                {badge.label}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          className="grid gap-6"
        >
          {[
            {
              icon: Target,
              title: 'Our Mission',
              description: 'To empower businesses with technology that drives growth, innovation, and lasting impact.',
            },
            {
              icon: Users,
              title: 'Our Team',
              description: 'Skilled developers committed to delivering quality work and building lasting client relationships.',
            },
            {
              icon: Award,
              title: 'Our Values',
              description: 'Excellence, transparency, and client success are at the heart of everything we do.',
            },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <Card hover={false} className="relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                  {/* Animated Background Glow */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl blur-2xl -z-10"
                  />

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 relative">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="p-3 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 relative"
                      >
                        {/* Icon Glow */}
                        <motion.div
                          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.5, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-primary-500/50 rounded-xl blur-lg"
                        />
                        <Icon className="w-6 h-6 text-white relative z-10" />
                      </motion.div>
                      
                      {/* Check Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
                        className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <CheckCircle className="w-3 h-3 text-white" />
                      </motion.div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 group-hover:text-primary-500 transition-colors">{item.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100%' } : { width: 0 }}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500"
                  />
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </Section>
  )
}
