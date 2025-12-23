'use client'

import { motion } from 'framer-motion'
import { Zap, Target, Users, Trophy, CheckCircle } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Card from '../ui/Card'

const differentiators = [
  {
    icon: Zap,
    title: 'Lightning-Fast Delivery',
    description: 'We ship production-ready code in weeks, not months. Our agile approach ensures rapid iteration and continuous deployment.',
  },
  {
    icon: Target,
    title: 'Results-Driven Approach',
    description: 'Every line of code serves a business goal. We focus on metrics that matter: conversion rates, user engagement, and ROI.',
  },
  {
    icon: Users,
    title: 'Senior-Level Expertise',
    description: 'Work directly with seasoned engineers and architects. No juniors, no outsourcing—just world-class talent.',
  },
  {
    icon: Trophy,
    title: 'Proven Track Record',
    description: '50+ successful projects, 98% client satisfaction, and partnerships with industry leaders across 5 continents.',
  },
]

export default function WhyPerfactWorks() {
  return (
    <Section>
      <SectionHeader
        subtitle="Why Choose Us"
        title="What Sets PerfactWorks Apart"
        description="We're not just another development shop. We're your strategic technology partner committed to your success."
      />
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {differentiators.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full relative overflow-hidden group">
                {/* Background Glow Effect */}
                <motion.div
                  animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full blur-3xl -z-10"
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
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-primary-500/50 rounded-xl blur-md"
                      />
                      <Icon className="w-6 h-6 text-white relative z-10" />
                    </motion.div>
                    
                    {/* Check Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                      className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                    >
                      <CheckCircle className="w-3 h-3 text-white" />
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Progress Indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500"
                />
              </Card>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
