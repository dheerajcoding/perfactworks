'use client'

import { motion } from 'framer-motion'
import { Rocket, Zap, Users, TrendingUp, CheckCircle, ArrowRight, Target, Clock, DollarSign } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import CTABanner from '@/components/sections/CTABanner'

const mvpFeatures = [
  {
    icon: Clock,
    title: 'Launch in 6-8 Weeks',
    description: 'Rapid MVP development methodology that gets your product to market faster without compromising quality.',
  },
  {
    icon: Target,
    title: 'Product-Market Fit Focus',
    description: 'We help validate your idea with real users, gather feedback, and iterate quickly based on data.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Architecture',
    description: 'Built to scale from MVP to enterprise. Infrastructure that grows with your user base and revenue.',
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective Development',
    description: 'Fixed-scope pricing starting from $15,000. Transparent costs with no hidden fees or surprises.',
  },
]

const timeline = [
  {
    week: 'Week 1-2',
    title: 'Discovery & Planning',
    tasks: [
      'Requirement analysis & feature prioritization',
      'User story mapping & wireframes',
      'Technical architecture design',
      'Project roadmap & timeline',
    ],
  },
  {
    week: 'Week 3-5',
    title: 'Design & Development Sprint',
    tasks: [
      'UX/UI design for core features',
      'Frontend & backend development',
      'API integrations',
      'Weekly demo & feedback sessions',
    ],
  },
  {
    week: 'Week 6-7',
    title: 'Testing & Refinement',
    tasks: [
      'Quality assurance testing',
      'Performance optimization',
      'Security hardening',
      'User acceptance testing',
    ],
  },
  {
    week: 'Week 8',
    title: 'Launch & Support',
    tasks: [
      'Cloud deployment (AWS/Azure/GCP)',
      'Monitoring & analytics setup',
      'Launch strategy execution',
      'Post-launch support & maintenance',
    ],
  },
]

const saasCapabilities = [
  'Multi-Tenant Architecture',
  'Subscription & Billing Integration (Stripe)',
  'User Authentication & Authorization',
  'Role-Based Access Control (RBAC)',
  'Admin Dashboard & Analytics',
  'Email Notifications & Workflows',
  'API Development & Documentation',
  'Mobile-Responsive Design',
]

const successMetrics = [
  {
    icon: Users,
    metric: '30+',
    label: 'MVPs Launched',
    description: 'Successful startups we\'ve helped bring to market',
  },
  {
    icon: TrendingUp,
    metric: '75%',
    label: 'Funding Success',
    description: 'Of our MVP clients secured seed funding',
  },
  {
    icon: Zap,
    metric: '6-8',
    label: 'Week Timeline',
    description: 'Average time from kickoff to launch',
  },
]

export default function SaaSMVPPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pt-20">
        {/* Hero Section */}
        <Section className="relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/10 via-primary-500/10 to-transparent" />
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full mb-6"
            >
              <Rocket className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                SaaS & MVP Development
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Launch Your SaaS MVP in 6-8 Weeks
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 dark:text-slate-400 mb-8"
            >
              Expert <strong className="font-semibold text-slate-700 dark:text-slate-300">MVP development for startups</strong> and entrepreneurs. 
              We build scalable SaaS products with rapid prototyping, product-market fit validation, and go-to-market support. 
              Turn your idea into a funded startup.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button variant="primary" size="lg" href="/contact">
                Start Your MVP
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg" href="/case-studies">
                See Success Stories
              </Button>
            </motion.div>

            {/* Success Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {successMetrics.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="text-center">
                    <Icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                    <div className="text-4xl font-bold gradient-text mb-2">{item.metric}</div>
                    <div className="font-semibold mb-1">{item.label}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{item.description}</div>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </Section>

        {/* Why MVP First */}
        <Section className="bg-slate-50 dark:bg-slate-900/50">
          <SectionHeader
            subtitle="The MVP Advantage"
            title="Why Start with an MVP for Your SaaS Product?"
            description="A Minimum Viable Product validates your idea with real users before investing heavily in full development."
          />

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {mvpFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} delay={index * 0.1} hover>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-purple-500 to-primary-600">
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
        </Section>

        {/* 8-Week Timeline */}
        <Section>
          <SectionHeader
            subtitle="Our Process"
            title="Your 6-8 Week Journey from Idea to Launch"
            description="Structured, transparent development process with clear milestones and weekly progress updates."
          />

          <div className="space-y-6 max-w-4xl mx-auto">
            {timeline.map((phase, index) => (
              <motion.div
                key={phase.week}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4">
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-primary-500 text-white rounded-full font-bold text-sm mb-2">
                        {phase.week}
                      </div>
                      <h3 className="text-xl font-bold">{phase.title}</h3>
                    </div>
                    <div className="md:w-3/4">
                      <ul className="space-y-2">
                        {phase.tasks.map((task) => (
                          <li key={task} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-600 dark:text-slate-400">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* SaaS Capabilities */}
        <Section className="bg-slate-50 dark:bg-slate-900/50">
          <SectionHeader
            subtitle="Core Features"
            title="Essential SaaS Features We Build Into Every MVP"
            description="Production-ready SaaS architecture with authentication, payments, and multi-tenancy from day one."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {saasCapabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 glass rounded-lg flex items-center gap-3 cursor-pointer"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="font-medium text-sm">{capability}</span>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Pricing & Packages */}
        <Section>
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              subtitle="Transparent Pricing"
              title="MVP Development Packages"
              description="Fixed-scope pricing with clear deliverables. No hidden costs or hourly rate surprises."
            />

            <div className="space-y-6">
              {[
                {
                  name: 'Starter MVP',
                  price: '$15,000 - $25,000',
                  description: 'Perfect for validating your core idea with essential features.',
                  features: [
                    '3-5 core features',
                    'User authentication',
                    'Basic admin panel',
                    'Responsive web app',
                    'Cloud deployment',
                    '30 days post-launch support',
                  ],
                },
                {
                  name: 'Growth MVP',
                  price: '$30,000 - $50,000',
                  description: 'Comprehensive MVP with advanced features and integrations.',
                  features: [
                    '6-10 core features',
                    'Payment integration (Stripe)',
                    'Advanced admin dashboard',
                    'API development',
                    'Third-party integrations',
                    '60 days post-launch support',
                  ],
                },
              ].map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover className="border-2 border-transparent hover:border-primary-500">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                        <p className="text-slate-600 dark:text-slate-400">{plan.description}</p>
                      </div>
                      <div className="text-3xl font-bold gradient-text mt-4 md:mt-0">{plan.price}</div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Why Choose PerfactWorks */}
        <Section className="bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              subtitle="Why PerfactWorks"
              title="We've Helped 30+ Startups Launch Successfully"
              description="Partner with a team that understands both product development and startup dynamics."
            />

            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                'Experienced in building venture-backed startups',
                'Focus on features that drive user acquisition',
                'Help with product strategy and roadmap',
                'Guidance on tech stack and architecture',
                'Support with investor pitches and demos',
                'Post-launch iteration and scaling',
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 glass rounded-lg"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
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
            name: 'SaaS MVP Development',
            description: 'Rapid MVP development services for startups. Launch your SaaS product in 6-8 weeks with scalable architecture and go-to-market support.',
            provider: {
              '@type': 'Organization',
              name: 'PerfactWorks',
              url: 'https://perfactworks.online',
            },
            areaServed: 'Worldwide',
            serviceType: 'MVP Development',
          }),
        }}
      />
    </>
  )
}
