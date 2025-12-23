'use client'

import { motion } from 'framer-motion'
import { Brain, Code, Cloud, Shield, Rocket, Smartphone } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Card from '../ui/Card'

const services = [
  {
    icon: Brain,
    title: 'AI & Automation Solutions',
    description: 'Leverage cutting-edge AI and machine learning to automate processes, gain insights, and drive innovation.',
    features: ['ML Model Development', 'Process Automation', 'NLP Solutions', 'Predictive Analytics'],
  },
  {
    icon: Code,
    title: 'Web & Mobile Development',
    description: 'Build stunning, high-performance applications with modern frameworks and best practices.',
    features: ['React/Next.js Apps', 'Native Mobile Apps', 'Progressive Web Apps', 'E-commerce Platforms'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Scale effortlessly with robust cloud infrastructure and streamlined deployment pipelines.',
    features: ['AWS/Azure/GCP', 'CI/CD Pipelines', 'Container Orchestration', 'Infrastructure as Code'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with comprehensive security audits and implementations.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance (GDPR, SOC2)', 'Threat Monitoring'],
  },
  {
    icon: Rocket,
    title: 'SaaS & MVP Development',
    description: 'Launch faster with battle-tested architectures and rapid prototyping methodologies.',
    features: ['MVP in 6-8 Weeks', 'SaaS Architecture', 'Product Strategy', 'Go-to-Market Support'],
  },
  {
    icon: Smartphone,
    title: 'Technology Consulting',
    description: 'Strategic guidance to align technology with your business objectives and growth plans.',
    features: ['Tech Stack Selection', 'Architecture Review', 'Digital Transformation', 'CTO Advisory'],
  },
]

export default function Services() {
  return (
    <Section className="bg-slate-50 dark:bg-slate-900/50">
      <SectionHeader
        subtitle="Our Services"
        title="Comprehensive Technology Solutions"
        description="From concept to deployment, we deliver end-to-end technology solutions that drive real business results."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <Card key={service.title} delay={index * 0.1} className="group cursor-pointer">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </motion.div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <motion.li
                    key={feature}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-sm text-slate-600 dark:text-slate-400"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
