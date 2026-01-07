'use client'

import { motion } from 'framer-motion'
import { Brain, Code, Cloud, Shield, Rocket, ArrowRight } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Card from '../ui/Card'

const services = [
  {
    icon: Code,
    title: 'Full-Stack Web Development',
    description: 'Enterprise-grade custom web application development using MERN stack, Node.js, React, and Next.js. We build high-performance, scalable web applications tailored to your business needs.',
    features: ['React & Next.js Apps', 'Node.js Backend APIs', 'Database Design', 'E-commerce Platforms'],
    href: '/services/web-development',
  },
  {
    icon: Rocket,
    title: 'SaaS & MVP Development',
    description: 'Launch your startup MVP in 6-8 weeks with our rapid prototyping methodology. We specialize in MVP development for startups with scalable SaaS architecture and go-to-market support.',
    features: ['MVP in 6-8 Weeks', 'SaaS Architecture', 'Product Strategy', 'Scalable Infrastructure'],
    href: '/services/saas-mvp-development',
  },
  {
    icon: Brain,
    title: 'Custom Enterprise Systems',
    description: 'Bespoke HRMS, LMS, ERP, and CRM development for enterprises. Transform your business processes with custom-built systems designed for your specific workflows and requirements.',
    features: ['Custom HRMS Development', 'LMS Platforms', 'ERP Systems', 'CRM Solutions'],
    href: '/services/enterprise-systems',
  },
  {
    icon: Cloud,
    title: 'Cloud Deployment & DevOps',
    description: 'Scale effortlessly with robust cloud infrastructure on AWS, Azure, or GCP. Expert DevOps services with CI/CD pipelines, container orchestration, and infrastructure as code.',
    features: ['AWS/Azure/GCP Deployment', 'CI/CD Pipelines', 'Docker & Kubernetes', 'Infrastructure as Code'],
    href: '/services/cloud-devops',
  },
  {
    icon: Brain,
    title: 'AI & Business Automation',
    description: 'Leverage cutting-edge AI and machine learning to automate business processes, gain insights, and drive innovation. Custom AI solutions for real business problems.',
    features: ['Process Automation', 'ML Model Development', 'NLP Solutions', 'Predictive Analytics'],
    href: '/services/ai-automation',
  },
  {
    icon: Shield,
    title: 'Technology Consulting',
    description: 'Strategic technology consulting services to align technology with your business objectives. Expert guidance on tech stack selection, architecture review, and digital transformation.',
    features: ['Tech Stack Selection', 'Architecture Review', 'Digital Transformation', 'CTO Advisory'],
    href: '/services',
  },
]

export default function Services() {
  return (
    <Section className="bg-slate-50 dark:bg-slate-900/50" id="services">
      <SectionHeader
        subtitle="Our Services"
        title="Technology Solutions That Drive Growth"
        description="From MVP to enterprise—we build scalable software solutions tailored to your business needs."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.6, 0.05, 0.01, 0.9],
              }}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              <Card 
                delay={0} 
                className="group cursor-pointer hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-purple-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:via-purple-500/10 group-hover:to-primary-500/10 transition-all duration-500"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                
                {/* Floating Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -10, 10, 0],
                    y: -5,
                    transition: { duration: 0.4 }
                  }}
                  className="mb-4 relative z-10"
                >
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 shadow-lg group-hover:shadow-2xl transition-all duration-300 relative">
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(139, 92, 246, 0.5)',
                          '0 0 40px rgba(139, 92, 246, 0.8)',
                          '0 0 20px rgba(139, 92, 246, 0.5)',
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="absolute inset-0 rounded-xl"
                    />
                    <Icon className="w-6 h-6 text-white relative z-10" />
                  </div>
                </motion.div>
                
                {/* Animated Title */}
                <motion.h3 
                  className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {service.title}
                </motion.h3>
                
                {/* Description with Reveal */}
                <motion.p 
                  className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {service.description}
                </motion.p>
                
                {/* Animated Link */}
                <motion.a
                  href={service.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-primary-500 hover:text-primary-600 font-semibold text-sm group-hover:underline mt-auto relative z-10"
                >
                  Learn More
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.div>
                </motion.a>
                
                {/* Corner Accent */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/20 to-transparent rounded-bl-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                />
              </Card>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
