import { Brain, Code, Smartphone, Shield, Rocket, ArrowRight } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'

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
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'iOS and Android app development with product strategy, robust APIs, and performance-first engineering for global scale.',
    problem: 'Need a reliable mobile product that performs and scales',
    delivery: 'Native and cross-platform apps with secure backend integration',
    outcome: 'Higher user retention, faster releases, and measurable growth',
    features: ['iOS & Android Apps', 'Cross-Platform Builds', 'Secure APIs', 'App Store Launch'],
    href: '/services/app-development',
  },
  {
    icon: Brain,
    title: 'SEO Services',
    description: 'Technical SEO and performance optimization that improves Core Web Vitals, rankings, and qualified organic traffic.',
    problem: 'Low organic visibility despite strong products',
    delivery: 'Technical audits, on-page optimization, and speed improvements',
    outcome: 'Higher rankings, better conversion rates, and more qualified leads',
    features: ['Technical SEO', 'On-Page Optimization', 'Core Web Vitals', 'Content Strategy'],
    href: '/services/seo-services',
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
        {services.map((service) => {
          const Icon = service.icon
          return (
            <div
              key={service.title}
              className="glass-card p-6 md:p-8 group cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full relative overflow-hidden flex flex-col"
            >
              {/* Hover gradient layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-purple-500/0 group-hover:from-primary-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none" />

              {/* Icon */}
              <div className="mb-4 relative z-10">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 shadow-lg group-hover:shadow-primary-500/30 transition-shadow duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors duration-200 relative z-10">
                {service.title}
              </h3>

              <div className="space-y-3 mb-4 relative z-10 flex-1">
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
              </div>

              <a
                href={service.href}
                className="inline-flex items-center text-primary-500 hover:text-primary-400 font-semibold text-sm mt-auto relative z-10 group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-200" />
              </a>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full pointer-events-none" />
            </div>
          )
        })}
      </div>
    </Section>
  )
}
