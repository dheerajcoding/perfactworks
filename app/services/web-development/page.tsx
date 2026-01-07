'use client'

import { motion } from 'framer-motion'
import { Code, Zap, Shield, Rocket, CheckCircle, ArrowRight, Globe, Database, Server } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import CTABanner from '@/components/sections/CTABanner'

const technologies = [
  { name: 'React & Next.js', category: 'Frontend' },
  { name: 'Node.js & Express', category: 'Backend' },
  { name: 'MongoDB & PostgreSQL', category: 'Database' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'REST & GraphQL APIs', category: 'API' },
]

const features = [
  {
    icon: Zap,
    title: 'High-Performance Architecture',
    description: 'Blazing-fast web applications optimized for Core Web Vitals, SEO, and exceptional user experience.',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Built-in security best practices including authentication, authorization, data encryption, and OWASP compliance.',
  },
  {
    icon: Rocket,
    title: 'Scalable Infrastructure',
    description: 'Cloud-native architecture designed to scale from hundreds to millions of users without performance degradation.',
  },
  {
    icon: Globe,
    title: 'API-First Development',
    description: 'RESTful and GraphQL APIs enabling seamless integrations with third-party services and future mobile apps.',
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your business requirements, target audience, and technical needs to create a comprehensive project roadmap.',
  },
  {
    step: '02',
    title: 'UX/UI Design',
    description: 'Modern, intuitive interface design focused on user experience, conversion optimization, and brand consistency.',
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'Agile development with weekly sprints, continuous testing, code reviews, and daily progress updates.',
  },
  {
    step: '04',
    title: 'Deployment & Support',
    description: 'Cloud deployment with CI/CD pipelines, monitoring, and ongoing maintenance to ensure reliability.',
  },
]

const useCases = [
  'E-commerce & Marketplace Platforms',
  'SaaS Web Applications',
  'Customer Portals & Dashboards',
  'Content Management Systems',
  'Booking & Reservation Systems',
  'Social Networking Platforms',
  'Real-time Collaboration Tools',
  'Data Visualization Dashboards',
]

export default function WebDevelopmentPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pt-20">
        {/* Hero Section */}
        <Section className="relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/10 via-purple-500/10 to-transparent" />
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 rounded-full mb-6"
            >
              <Code className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                Full-Stack Web Development
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Custom Web Application Development Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 dark:text-slate-400 mb-8"
            >
              Enterprise-grade <strong className="font-semibold text-slate-700 dark:text-slate-300">custom web application development</strong> using modern MERN stack, Node.js, React, and Next.js. 
              We build scalable, secure, and high-performance web applications that drive business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="primary" size="lg" href="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg" href="/case-studies">
                View Portfolio
              </Button>
            </motion.div>
          </div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 glass rounded-lg text-sm"
              >
                <span className="text-xs text-primary-500 font-semibold">{tech.category}</span>
                <span className="mx-2">•</span>
                <span className="font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* What We Deliver */}
        <Section className="bg-slate-50 dark:bg-slate-900/50">
          <SectionHeader
            subtitle="Comprehensive Solutions"
            title="What We Deliver in Our Web Development Services"
            description="End-to-end custom web application development from concept to deployment and beyond."
          />

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} delay={index * 0.1} hover>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Use Cases */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Perfect For These Use Cases</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 glass rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="font-medium">{useCase}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Development Process */}
        <Section>
          <SectionHeader
            subtitle="Our Process"
            title="How We Build Your Custom Web Application"
            description="Transparent, collaborative development process with clear milestones and regular communication."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className="text-5xl font-bold text-primary-500/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Tech Stack Details */}
        <Section className="bg-slate-50 dark:bg-slate-900/50">
          <SectionHeader
            subtitle="Technology Stack"
            title="Modern Technologies for Scalable Web Applications"
            description="We leverage industry-leading technologies to build robust, maintainable, and future-proof applications."
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card delay={0} hover>
              <div className="text-center">
                <Globe className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">Frontend Excellence</h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Framer Motion</li>
                  <li>Progressive Web Apps</li>
                </ul>
              </div>
            </Card>

            <Card delay={0.1} hover>
              <div className="text-center">
                <Server className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">Backend Power</h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>Node.js & Express</li>
                  <li>REST & GraphQL APIs</li>
                  <li>Authentication & Authorization</li>
                  <li>Microservices</li>
                  <li>Real-time with WebSockets</li>
                </ul>
              </div>
            </Card>

            <Card delay={0.2} hover>
              <div className="text-center">
                <Database className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">Data & Infrastructure</h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>MongoDB & PostgreSQL</li>
                  <li>Redis Caching</li>
                  <li>AWS/Azure/GCP</li>
                  <li>Docker & Kubernetes</li>
                  <li>CI/CD Pipelines</li>
                </ul>
              </div>
            </Card>
          </div>
        </Section>

        {/* Why Choose Us */}
        <Section>
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              subtitle="Why PerfactWorks"
              title="Expert Full-Stack Development Team"
              description="Partner with experienced developers who understand both technology and business."
            />

            <div className="space-y-4">
              {[
                {
                  title: 'Proven Full-Stack Expertise',
                  description: 'Experienced developers with deep knowledge building scalable web applications for startups and enterprises.',
                },
                {
                  title: 'Business-Focused Development',
                  description: 'We prioritize features that drive user engagement, conversion, and revenue—not just technical perfection.',
                },
                {
                  title: 'Transparent Pricing & Timelines',
                  description: 'Fixed-scope projects with clear deliverables, milestones, and pricing. No hidden costs or surprises.',
                },
                {
                  title: 'Ongoing Support & Maintenance',
                  description: 'Post-launch support, bug fixes, feature enhancements, and scaling assistance to ensure long-term success.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover>
                    <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 pl-7">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <CTABanner />
      </main>
      <Footer />

      {/* Service Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Custom Web Application Development',
            description: 'Professional full-stack web development services using MERN stack, Node.js, React, and Next.js for startups and enterprises.',
            provider: {
              '@type': 'Organization',
              name: 'PerfactWorks',
              url: 'https://perfactworks.com',
            },
            areaServed: 'Worldwide',
            serviceType: 'Web Development',
          }),
        }}
      />
    </>
  )
}
