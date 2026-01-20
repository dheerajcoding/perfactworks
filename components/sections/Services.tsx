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
    description: 'Custom web application development using modern technologies like MERN stack, Node.js, React, and Next.js. We build reliable, scalable web applications tailored to your business needs.',
    problem: 'Struggling with outdated web infrastructure or need a custom solution',
    delivery: 'Modern, responsive web applications with clean code & scalable architecture',
    outcome: 'Faster time-to-market, improved user experience, reduced maintenance costs',
    features: ['React & Next.js Apps', 'Node.js Backend APIs', 'Database Design', 'E-commerce Platforms'],
    href: '/services/web-development',
  },
  {
    icon: Rocket,
    title: 'SaaS & MVP Development',
    description: 'Launch your startup MVP efficiently with our agile development approach. We help startups build their first product with clean code, smart architecture, and room to grow.',
    problem: 'Need to validate your idea quickly without burning through your budget',
    delivery: 'Production-ready MVP in 6-8 weeks with essential features & scalability',
    outcome: 'Faster validation, investor-ready product, foundation for growth',
    features: ['MVP Development', 'SaaS Architecture', 'Product Strategy', 'Scalable Design'],
    href: '/services/saas-mvp-development',
  },
  {
    icon: Brain,
    title: 'Custom Business Systems',
    description: 'Custom HRMS, LMS, and CRM development for growing businesses. We build tailored systems that match your workflow and help you scale efficiently.',
    problem: 'Manual processes or generic software that doesn\'t fit your workflow',
    delivery: 'Tailored HRMS, CRM, or LMS systems built specifically for your operations',
    outcome: 'Increased efficiency, better data insights, streamlined operations',
    features: ['Custom HRMS Development', 'LMS Platforms', 'Business Systems', 'CRM Solutions'],
    href: '/services/enterprise-systems',
  },
  {
    icon: Cloud,
    title: 'Cloud Deployment & DevOps',
    description: 'Deploy your application with confidence on AWS, Azure, or GCP. We set up reliable cloud infrastructure with automated deployments and proper monitoring.',
    problem: 'Complex deployment processes or unreliable infrastructure',
    delivery: 'Automated CI/CD pipelines, cloud infrastructure, monitoring & scalability',
    outcome: 'Zero-downtime deployments, cost optimization, improved reliability',
    features: ['Cloud Deployment', 'CI/CD Pipelines', 'Docker Containers', 'Automated Workflows'],
    href: '/services/cloud-devops',
  },
  {
    icon: Brain,
    title: 'AI & Business Automation',
    description: 'Integrate AI capabilities to streamline your business processes. We implement practical automation solutions and AI features that solve real business challenges.',
    problem: 'Repetitive tasks consuming valuable time and resources',
    delivery: 'AI-powered automation, intelligent workflows, and smart integrations',
    outcome: 'Reduced operational costs, faster processing, data-driven decisions',
    features: ['Process Automation', 'AI Integration', 'Smart Features', 'Workflow Optimization'],
    href: '/services/ai-automation',
  },
  {
    icon: Shield,
    title: 'Technology Consulting',
    description: 'Get expert guidance on your technology decisions. We help you choose the right tools, plan your architecture, and make smart technical choices for your business.',
    problem: 'Uncertain about tech stack or architecture for your project',
    delivery: 'Strategic technology roadmap, architecture design, best practices',
    outcome: 'Confident decisions, reduced technical debt, long-term scalability',
    features: ['Tech Stack Selection', 'Architecture Planning', 'Technical Guidance', 'Best Practices'],
    href: '/services',
  },
]

export default function Services() {
  return (
    <Section className="bg-slate-50 dark:bg-slate-900/50" id="services">
      <SectionHeader
        subtitle="Our Services"
        title="Web Applications & Custom Solutions"
        description="We specialize in building professional websites, web applications, and custom software solutions—our core expertise and main focus."
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
                
                {/* Problem/Delivery/Outcome */}
                <motion.div
                  className="space-y-3 mb-4 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-bold text-red-500 mt-0.5">⚠</span>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Problem</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{service.problem}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-bold text-blue-500 mt-0.5">📦</span>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">What We Deliver</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{service.delivery}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-bold text-green-500 mt-0.5">✓</span>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Business Outcome</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{service.outcome}</p>
                    </div>
                  </div>
                </motion.div>
                
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
