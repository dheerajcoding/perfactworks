'use client'

import { motion } from 'framer-motion'
import { Search, Palette, Wrench, Rocket, ArrowRight } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Card from '../ui/Card'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discover',
    description: 'We dive deep into your business goals, challenges, and technical requirements to craft a tailored strategy.',
    deliverables: ['Discovery Workshop', 'Technical Audit', 'Project Roadmap', 'Cost Estimation'],
  },
  {
    icon: Palette,
    number: '02',
    title: 'Design',
    description: 'Our designers create intuitive, beautiful interfaces while architects plan scalable, secure systems.',
    deliverables: ['UI/UX Design', 'System Architecture', 'Database Design', 'API Specifications'],
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Build',
    description: 'Agile development with weekly sprints, continuous integration, and regular demos to ensure alignment.',
    deliverables: ['Clean Code', 'Automated Tests', 'Documentation', 'Security Hardening'],
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Scale',
    description: 'Launch confidently with our support. We monitor, optimize, and iterate based on real-world performance.',
    deliverables: ['Deployment', 'Monitoring Setup', 'Performance Tuning', 'Ongoing Support'],
  },
]

export default function Process() {
  return (
    <Section>
      <SectionHeader
        subtitle="Our Process"
        title="From Vision to Reality"
        description="A proven methodology that ensures quality, speed, and transparency at every stage."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative group"
            >
              {/* Animated Arrow Connector */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
                  className="hidden lg:block absolute top-1/2 -right-4 z-10"
                >
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6 text-primary-500" />
                  </motion.div>
                </motion.div>
              )}

              <Card hover={false} className="h-full hover:scale-105 transition-transform duration-300">
                {/* Pulsing Background */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl -z-10"
                />

                <div className="text-6xl font-bold gradient-text opacity-20 mb-4">
                  {step.number}
                </div>
                <div className="mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 relative"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-xl bg-primary-500/30 blur-md"
                    />
                    <Icon className="w-6 h-6 text-white relative z-10" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {step.description}
                </p>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Deliverables:
                  </div>
                  {step.deliverables.map((item, idx) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 + idx * 0.1 }}
                      className="flex items-center text-sm text-slate-600 dark:text-slate-400"
                    >
                      <motion.span
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, delay: idx * 0.3, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"
                      />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
