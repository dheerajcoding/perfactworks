'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Card from '../ui/Card'
import Button from '../ui/Button'

const caseStudies = [
  {
    title: 'FinTech SaaS Platform',
    client: 'PayFlow Technologies',
    category: 'SaaS Development',
    description: 'Built a comprehensive financial management platform serving 10,000+ businesses with real-time analytics and automated reporting.',
    metrics: [
      { label: 'User Growth', value: '300%' },
      { label: 'Processing Speed', value: '2.5s' },
      { label: 'Uptime', value: '99.9%' },
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    image: 'gradient-from-blue-500-to-cyan-500',
  },
  {
    title: 'AI-Powered Healthcare App',
    client: 'MediCare Solutions',
    category: 'AI & Mobile',
    description: 'Developed an AI-driven diagnostic assistant with ML models achieving 94% accuracy, serving 50,000+ patients monthly.',
    metrics: [
      { label: 'Accuracy', value: '94%' },
      { label: 'Response Time', value: '<3s' },
      { label: 'Patient Satisfaction', value: '4.8/5' },
    ],
    tags: ['Python', 'TensorFlow', 'React Native', 'HIPAA'],
    image: 'gradient-from-purple-500-to-pink-500',
  },
  {
    title: 'E-Commerce Transformation',
    client: 'RetailHub Global',
    category: 'Web Development',
    description: 'Redesigned and scaled an e-commerce platform handling $5M+ in monthly transactions with 60% faster load times.',
    metrics: [
      { label: 'Revenue Increase', value: '+125%' },
      { label: 'Page Load', value: '-60%' },
      { label: 'Conversion', value: '+45%' },
    ],
    tags: ['Next.js', 'Shopify', 'Stripe', 'Vercel'],
    image: 'gradient-from-orange-500-to-red-500',
  },
]

export default function CaseStudies() {
  return (
    <Section className="bg-slate-50 dark:bg-slate-900/50">
      <SectionHeader
        subtitle="Case Studies"
        title="Real Results, Real Impact"
        description="See how we've helped businesses transform their technology and achieve measurable success."
      />
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
        {caseStudies.map((study, index) => (
          <Card key={study.title} delay={index * 0.1} className="flex flex-col group cursor-pointer relative overflow-hidden">
            {/* Success Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="absolute top-4 right-4 z-10 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg"
            >
              ✓ Success
            </motion.div>

            {/* Image Placeholder */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`h-48 rounded-xl bg-gradient-to-br ${study.image} mb-6 flex items-center justify-center relative overflow-hidden`}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-white/10"
              />
              <TrendingUp className="w-16 h-16 text-white/50 relative z-10" />
            </motion.div>

            {/* Content */}
            <div className="flex-1">
              <div className="text-sm text-primary-500 font-semibold mb-2">
                {study.category}
              </div>
              <h3 className="text-xl font-bold mb-2">{study.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                {study.client}
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {study.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {study.metrics.map((metric, idx) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 + idx * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="text-center p-2 glass rounded-lg"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 + idx * 0.1, type: "spring" }}
                      className="text-lg font-bold gradient-text"
                    >
                      {metric.value}
                    </motion.div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag, idx) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 + idx * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-2 py-1 text-xs font-medium rounded-lg glass cursor-pointer"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="primary" size="lg" href="/contact">
          Start Your Success Story
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </Section>
  )
}
