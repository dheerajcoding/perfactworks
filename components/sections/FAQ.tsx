'use client'

import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'

const faqs = [
  {
    question: 'What technology consulting services does PerfactWorks offer?',
    answer:
      'PerfactWorks provides comprehensive technology consulting including full-stack web development (MERN stack, Node.js, React), SaaS and MVP development, custom enterprise systems (HRMS, LMS, ERP, CRM), cloud deployment and DevOps (AWS, Azure, GCP), and AI automation solutions. We serve startups, scale-ups, and enterprises globally.',
  },
  {
    question: 'How long does it take to build an MVP or SaaS product?',
    answer:
      'Our rapid MVP development process typically delivers a functional product in 6-8 weeks. This includes product strategy, UX design, development, testing, and deployment. Timeline depends on complexity, features, and integrations required. We provide detailed project timelines during the consultation phase.',
  },
  {
    question: 'What is the cost of custom web application development?',
    answer:
      'Project costs vary based on scope, complexity, and requirements. Simple MVPs start from $15,000-$25,000. Custom enterprise systems (HRMS, ERP, CRM) range from $30,000-$100,000+. We provide transparent, fixed-scope pricing after understanding your requirements. Book a free consultation for a detailed estimate.',
  },
  {
    question: 'Do you provide ongoing support after project delivery?',
    answer:
      'Yes, we offer comprehensive post-launch support including bug fixes, feature enhancements, performance monitoring, security updates, and scaling assistance. We provide monthly retainer packages for ongoing maintenance and development, ensuring your system evolves with your business.',
  },
  {
    question: 'What makes PerfactWorks different from other freelance developers?',
    answer:
      'Unlike typical freelancers, PerfactWorks is a premium consultancy with founder-led expertise. You work directly with experienced engineers, not juniors. We deliver custom-built solutions (no templates), follow a business-first approach focusing on ROI, and provide transparent pricing with clear timelines. We\'re your long-term technology partner.',
  },
  {
    question: 'Can you help with cloud deployment and DevOps?',
    answer:
      'Absolutely. We provide expert cloud deployment services on AWS, Azure, and GCP. Our DevOps capabilities include CI/CD pipeline setup, Docker containerization, Kubernetes orchestration, infrastructure as code (Terraform), automated testing, monitoring, and scaling. We ensure your applications are production-ready and highly available.',
  },
  {
    question: 'Do you work with startups or only enterprises?',
    answer:
      'We work with both startups and enterprises. For startups, we specialize in rapid MVP development, product-market fit validation, and scalable architecture. For enterprises, we build custom HRMS, LMS, ERP, and CRM systems. Our approach adapts to your stage—whether you\'re a pre-seed startup or a multinational corporation.',
  },
  {
    question: 'What industries do you serve?',
    answer:
      'We serve diverse industries including fintech, healthcare, education (EdTech), e-commerce, logistics, manufacturing, real estate, and SaaS startups. Our technology expertise allows us to quickly understand industry-specific challenges and deliver compliant, scalable solutions across sectors.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section className="bg-slate-50 dark:bg-slate-900/50">
      <SectionHeader
        subtitle="Frequently Asked Questions"
        title="Everything You Need to Know About Our Services"
        description="Common questions about our technology consulting, custom software development, and MVP services."
      />
      
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="mb-4"
          >
            <motion.button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-6 glass-card hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-400" />
                  )}
                </motion.div>
              </div>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </Section>
  )
}
