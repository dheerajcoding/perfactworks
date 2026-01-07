'use client'

import { motion } from 'framer-motion'
import { Building2, Users, GraduationCap, Package, MessageSquare, CheckCircle, ArrowRight, Shield, Workflow } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import CTABanner from '@/components/sections/CTABanner'

const systems = [
  {
    icon: Users,
    name: 'HRMS (Human Resource Management System)',
    description: 'Complete HR automation including employee management, payroll, attendance tracking, performance reviews, leave management, and recruitment workflows.',
    features: [
      'Employee Database & Self-Service Portal',
      'Payroll Processing & Tax Calculations',
      'Attendance & Time Tracking',
      'Performance Management & KPIs',
      'Leave & Expense Management',
      'Recruitment & Onboarding',
    ],
  },
  {
    icon: GraduationCap,
    name: 'LMS (Learning Management System)',
    description: 'Comprehensive learning platforms for training, courses, certifications, and knowledge management with progress tracking and assessments.',
    features: [
      'Course Creation & Management',
      'Video & Content Delivery',
      'Quizzes & Assessments',
      'Progress Tracking & Analytics',
      'Certification & Badges',
      'Discussion Forums & Community',
    ],
  },
  {
    icon: Package,
    name: 'ERP (Enterprise Resource Planning)',
    description: 'Integrated business management covering inventory, procurement, accounting, manufacturing, supply chain, and multi-location operations.',
    features: [
      'Inventory & Warehouse Management',
      'Procurement & Vendor Management',
      'Accounting & Financial Reports',
      'Manufacturing & Production Planning',
      'Supply Chain Management',
      'Multi-Location & Multi-Currency',
    ],
  },
  {
    icon: MessageSquare,
    name: 'CRM (Customer Relationship Management)',
    description: 'Sales automation, lead management, customer service, marketing campaigns, and analytics to grow your customer relationships.',
    features: [
      'Lead & Opportunity Management',
      'Sales Pipeline & Forecasting',
      'Customer Service & Ticketing',
      'Marketing Automation',
      'Email & Communication Tracking',
      'Reports & Sales Analytics',
    ],
  },
]

const benefits = [
  {
    icon: Workflow,
    title: 'Tailored to Your Workflows',
    description: 'Custom-built to match your exact business processes, not forcing you to adapt to generic software.',
  },
  {
    icon: Shield,
    title: 'Secure & Compliant',
    description: 'Enterprise-grade security with role-based access, data encryption, audit logs, and compliance (GDPR, SOC2).',
  },
  {
    icon: Building2,
    title: 'Scalable Architecture',
    description: 'Built to handle growth from 50 to 50,000 users with high availability and performance.',
  },
]

const industries = [
  'Manufacturing & Logistics',
  'Healthcare & Pharmaceuticals',
  'Education & Training',
  'Financial Services',
  'Retail & E-commerce',
  'Professional Services',
]

export default function EnterpriseSystemsPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pt-20">
        {/* Hero Section */}
        <Section className="relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 via-primary-500/10 to-transparent" />
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full mb-6"
            >
              <Building2 className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                Enterprise Systems
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Custom HRMS, LMS, ERP & CRM Development
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 dark:text-slate-400 mb-8"
            >
              Bespoke <strong className="font-semibold text-slate-700 dark:text-slate-300">HRMS, LMS, ERP, and CRM development</strong> for enterprises. 
              We build custom enterprise systems tailored to your unique business processes, workflows, and compliance requirements. 
              No templates, no compromises—just solutions that fit your business perfectly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="primary" size="lg" href="/contact">
                Discuss Your Requirements
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg" href="/case-studies">
                View Case Studies
              </Button>
            </motion.div>
          </div>
        </Section>

        {/* Systems Overview */}
        <Section className="bg-slate-50 dark:bg-slate-900/50">
          <SectionHeader
            subtitle="Enterprise Solutions"
            title="Custom Business Management Systems We Build"
            description="Complete enterprise software development covering HR, learning, operations, and customer management."
          />

          <div className="space-y-8">
            {systems.map((system, index) => {
              const Icon = system.icon
              return (
                <motion.div
                  key={system.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover className="overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500 to-blue-600">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold">{system.name.split('(')[0]}</h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400">{system.description}</p>
                      </div>
                      <div className="md:w-2/3">
                        <div className="grid md:grid-cols-2 gap-3">
                          {system.features.map((feature) => (
                            <div key={feature} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </Section>

        {/* Why Custom Enterprise Systems */}
        <Section>
          <SectionHeader
            subtitle="The Custom Advantage"
            title="Why Choose Custom Over Off-the-Shelf Software?"
            description="Generic software forces your business to adapt. Custom systems adapt to you."
          />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={benefit.title} delay={index * 0.1} hover>
                  <div className="text-center">
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary-500 to-blue-600 mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{benefit.description}</p>
                  </div>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Card>
              <h3 className="text-2xl font-bold mb-4 text-center">Additional Benefits</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Complete ownership—no recurring licensing fees',
                  'Unlimited users and customizations',
                  'Integration with your existing systems',
                  'White-label and rebrand as your own',
                  'On-premise or cloud hosting options',
                  'Lifetime support and updates available',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-400">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Section>

        {/* Industries Served */}
        <Section className="bg-slate-50 dark:bg-slate-900/50">
          <SectionHeader
            subtitle="Industry Expertise"
            title="Industries We Serve with Custom Enterprise Systems"
            description="Deep experience building compliant, industry-specific enterprise software."
          />

          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 glass rounded-lg text-center cursor-pointer"
              >
                <div className="text-4xl mb-2">🏢</div>
                <h4 className="font-bold">{industry}</h4>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Development Process */}
        <Section>
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              subtitle="Our Approach"
              title="How We Build Your Custom Enterprise System"
              description="Comprehensive process from requirements gathering to deployment and training."
            />

            <div className="space-y-4">
              {[
                {
                  phase: 'Requirements & Analysis',
                  description: 'Deep dive into your business processes, pain points, and desired outcomes. Workflow mapping and feature prioritization.',
                },
                {
                  phase: 'System Design & Architecture',
                  description: 'Database design, system architecture, user interface mockups, and technical specifications tailored to your needs.',
                },
                {
                  phase: 'Iterative Development',
                  description: 'Agile development with bi-weekly demos, feedback incorporation, and continuous quality assurance testing.',
                },
                {
                  phase: 'User Training & Documentation',
                  description: 'Comprehensive user manuals, video tutorials, and hands-on training for your team to ensure smooth adoption.',
                },
                {
                  phase: 'Deployment & Handover',
                  description: 'Seamless deployment, data migration from existing systems, and complete source code handover.',
                },
                {
                  phase: 'Ongoing Support & Enhancement',
                  description: 'Post-launch support, bug fixes, feature enhancements, and system evolution as your business grows.',
                },
              ].map((step, index) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card hover>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">{step.phase}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Pricing */}
        <Section className="bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              subtitle="Investment"
              title="Custom Enterprise System Development Pricing"
              description="Transparent, fixed-scope pricing based on your specific requirements and complexity."
            />

            <Card>
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-700">
                  <span className="font-semibold">Small to Medium System</span>
                  <span className="text-2xl font-bold gradient-text">$30,000 - $60,000</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Suitable for: Basic HRMS, small LMS, departmental CRM (10-20 features, 100-500 users)
                </p>

                <div className="flex justify-between items-center py-4 border-b border-slate-200 dark:border-slate-700">
                  <span className="font-semibold">Large Enterprise System</span>
                  <span className="text-2xl font-bold gradient-text">$70,000 - $150,000+</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Suitable for: Comprehensive ERP, full-featured HRMS, advanced CRM (30+ features, 1000+ users, multiple integrations)
                </p>

                <div className="pt-4">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <strong>Project timeline:</strong> 3-6 months depending on scope and complexity
                  </p>
                  <Button variant="primary" href="/contact" className="w-full">
                    Get a Custom Quote
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        <CTABanner />
      </main>
      <Footer />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Custom Enterprise System Development',
            description: 'Bespoke HRMS, LMS, ERP, and CRM development for enterprises. Custom software tailored to your business processes.',
            provider: {
              '@type': 'Organization',
              name: 'PerfactWorks',
              url: 'https://perfactworks.com',
            },
            areaServed: 'Worldwide',
            serviceType: 'Enterprise Software Development',
          }),
        }}
      />
    </>
  )
}
