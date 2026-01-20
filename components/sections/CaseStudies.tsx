'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Card from '../ui/Card'
import Button from '../ui/Button'

const caseStudies = [
  {
    title: 'Learning Management System (LMS)',
    client: 'Connxn',
    category: 'Web Application',
    description: 'Built a comprehensive LMS platform with course management, video lectures, assignments, and progress tracking, actively used by 300+ students and instructors.',
    problem: 'Educational institution needed a centralized platform to manage courses, track student progress, and facilitate online learning.',
    solution: 'Developed a full-featured LMS with course management, video lectures, assignments, quizzes, and real-time progress tracking.',
    technology: 'React, Node.js, MongoDB, AWS S3 for video storage, Socket.io for real-time updates',
    result: '300+ active users, 50+ courses launched, 4.7/5 satisfaction rating, 65% reduction in administrative time',
    metrics: [
      { label: 'Active Users', value: '300+' },
      { label: 'Courses', value: '50+' },
      { label: 'Satisfaction', value: '4.7/5' },
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
    image: '/images/imagelms.png',
  },
  {
    title: 'Human Resource Management System',
    client: 'Global Consultancy',
    category: 'Web Application',
    description: 'Developed a complete HRMS solution managing employee records, attendance, payroll, leave management, and performance tracking for 100+ employees.',
    problem: 'Company struggled with manual HR processes, scattered employee data, and time-consuming payroll calculations.',
    solution: 'Built an integrated HRMS with automated attendance tracking, payroll processing, leave management, and performance evaluation modules.',
    technology: 'Java, Spring Boot, Hibernate, MySQL, Microservices architecture, REST APIs',
    result: '100+ employees managed efficiently, 65% increase in HR efficiency, 99.8% payroll accuracy, automated compliance reporting',
    metrics: [
      { label: 'Active Users', value: '100+' },
      { label: 'Efficiency', value: '+65%' },
      { label: 'Accuracy', value: '99.8%' },
    ],
    tags: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Microservices'],
    image: '/images/imagehrms.png',
  },
  {
    title: 'Lead Management System',
    client: 'Group Inc',
    category: 'Web Application',
    description: 'Created a robust lead tracking and management system with automated workflows, pipeline management, and detailed analytics for improved sales conversion.',
    problem: 'Sales team lost leads due to manual tracking, delayed follow-ups, and lack of visibility into the sales pipeline.',
    solution: 'Implemented an intelligent lead management system with automated lead assignment, follow-up reminders, pipeline visualization, and analytics dashboard.',
    technology: 'Next.js, Node.js, PostgreSQL, Chart.js for analytics, WebSocket for real-time notifications',
    result: '1000+ leads tracked efficiently, 40% increase in conversion rate, response time reduced to under 2 minutes',
    metrics: [
      { label: 'Lead Tracking', value: '1000+' },
      { label: 'Conversion', value: '+40%' },
      { label: 'Response Time', value: '<2min' },
    ],
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Chart.js'],
    image: '/images/imageLEAD.png',
  },
  {
    title: 'Quality Management System (QMS)',
    client: 'ARS',
    category: 'Web Application',
    description: 'Designed a comprehensive QMS for quality control, audit management, compliance tracking, and document management with automated workflows.',
    metrics: [
      { label: 'Compliance', value: '100%' },
      { label: 'Audit Time', value: '-50%' },
      { label: 'Documentation', value: '500+' },
    ],
    tags: ['Java', 'Spring Boot', 'JPA', 'PostgreSQL', 'Maven'],
    image: '/images/imageqms.png',
  },
  {
    title: 'AI Transcript Analyser',
    client: 'Insurance Quality',
    category: 'AI Application',
    description: 'Built an AI-powered transcript analysis tool that automatically extracts insights, sentiment analysis, key topics, and generates summaries from audio/video transcripts.',
    metrics: [
      { label: 'Accuracy', value: '92%' },
      { label: 'Processing', value: '<30s' },
      { label: 'Languages', value: '5+' },
    ],
    tags: ['Python', 'NLP', 'OpenAI', 'React', 'FastAPI'],
    image: '/images/imagetranscript.png',
  },
  {
    title: 'AI Data Analysis Platform',
    client: 'Insurance Quality',
    category: 'AI Application',
    description: 'Developed an intelligent data analysis platform using machine learning to automate data processing, pattern recognition, predictive analytics, and visualization.',
    metrics: [
      { label: 'Accuracy', value: '89%' },
      { label: 'Data Sets', value: '1000+' },
      { label: 'Insights', value: 'Real-time' },
    ],
    tags: ['Python', 'TensorFlow', 'Pandas', 'React', 'D3.js'],
    image: '/images/imageanalyser.png',
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

            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="h-48 rounded-xl mb-6 relative overflow-hidden bg-slate-100 dark:bg-slate-800"
            >
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
