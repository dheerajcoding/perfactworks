'use client'

import { motion } from 'framer-motion'
import { Zap, Target, Users, Trophy, CheckCircle } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Card from '../ui/Card'

const differentiators = [
  {
    icon: Users,
    title: 'Dedicated Team',
    description: 'Work with committed developers who take pride in their craft. We focus on quality over quantity, ensuring every line of code meets high standards and serves your business needs.',
  },
  {
    icon: Target,
    title: 'Custom-Built Solutions',
    description: 'No templates, no cookie-cutter approaches. We build bespoke technology solutions tailored to your unique business challenges, workflows, and growth objectives.',
  },
  {
    icon: Zap,
    title: 'Business-First Development',
    description: 'Every line of code serves a business goal. We focus on metrics that matter: conversion rates, user engagement, operational efficiency, and measurable ROI.',
  },
  {
    icon: Trophy,
    title: 'Honest & Transparent',
    description: 'Clear communication, realistic timelines, and fair pricing. No surprises, no hidden costs. We believe in building trust through transparency and delivering on our commitments.',
  },
]

export default function WhyPerfactWorks() {
  return (
    <Section id="why-perfactworks">
      <SectionHeader
        subtitle="Why Choose Us"
        title="Your Trusted Technology Partner"
        description="We're not just developers—we're strategic partners committed to your success."
      />
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {differentiators.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? -15 : 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                delay: index * 0.15,
                duration: 0.7,
                ease: [0.6, 0.05, 0.01, 0.9],
              }}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              <Card hover className="h-full relative overflow-hidden group">
                {/* Animated Liquid Background */}
                <motion.div
                  animate={{ 
                    background: [
                      'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
                      'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
                      'radial-gradient(circle at 50% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
                      'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
                    ],
                    scale: [1, 1.2, 1.1, 1],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 -z-10"
                />

                <div className="flex items-start gap-4 relative z-10">
                  <div className="flex-shrink-0 relative">
                    <motion.div
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.15,
                      }}
                      transition={{ duration: 0.5 }}
                      className="p-3 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 relative"
                    >
                      {/* Pulsing Glow */}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.8, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-primary-500/50 rounded-xl blur-xl"
                      />
                      
                      {/* Rotating Ring */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-[-4px] border-2 border-primary-400/30 rounded-xl"
                      />
                      
                      <Icon className="w-6 h-6 text-white relative z-10" />
                    </motion.div>
                    
                    {/* Animated Check Badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.4, type: 'spring', stiffness: 200 }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <CheckCircle className="w-3 h-3 text-white" />
                    </motion.div>
                  </div>
                  
                  <div className="flex-1">
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.2 }}
                      className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                      className="text-slate-600 dark:text-slate-400"
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.5, duration: 1 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-primary-500"
                  style={{
                    backgroundSize: '200% 100%',
                  }}
                >
                  <motion.div
                    animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="w-full h-full"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
                      backgroundSize: '50% 100%',
                    }}
                  />
                </motion.div>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
