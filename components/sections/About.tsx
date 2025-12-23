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
    <Section className="bg-slate-50 dark:bg-slate-900/50">
      <SectionHeader
        subtitle="About Us"
        title="Engineering Excellence, Global Impact"
        description="PerfactWorks was founded on a simple belief: technology should empower businesses, not complicate them."
      />
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full"
            >
              <Star className="w-3 h-3" fill="currentColor" />
              Est. 2019
            </motion.div>
          </div>

          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Founded in 2019 by a team of ex-FAANG engineers, PerfactWorks emerged from a shared
            vision: to bring Silicon Valley-grade engineering to businesses worldwide.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            We've worked with startups securing Series A funding, enterprises undergoing digital
            transformation, and everything in between. Our approach combines technical excellence
            with business acumen to deliver solutions that truly move the needle.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Today, we're a distributed team of 20+ engineers, designers, and strategists serving
            clients across North America, Europe, and Asia.
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
              description: 'Senior engineers with 7+ years average experience from top tech companies and startups.',
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
