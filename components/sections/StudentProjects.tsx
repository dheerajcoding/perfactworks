'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GraduationCap,
  FileText,
  Code2,
  Lightbulb,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  BookOpen,
  Award,
  Clock,
  Laptop,
  Flame,
  Layers,
  HelpCircle,
} from 'lucide-react'
import Link from 'next/link'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'

const studentPillars = [
  {
    icon: Code2,
    title: 'Full Source Code & Architecture',
    desc: 'Clean, production-grade MERN, Python, Java, or Next.js code with extensive comments and clean folder structure.',
  },
  {
    icon: FileText,
    title: 'Complete Reports & IEEE Docs',
    desc: 'Ready-to-submit documentation matching your university guidelines, DFD diagrams, ER schemas, and literature surveys.',
  },
  {
    icon: Laptop,
    title: 'Viva & Demo Presentation Prep',
    desc: '1-on-1 mentorship sessions explaining every module, line of code, and algorithm so you ace your final evaluation.',
  },
  {
    icon: ShieldCheck,
    title: '100% Original & Plagiarism Free',
    desc: 'Custom-tailored solutions designed from scratch with unique feature sets to ensure 100% academic originality.',
  },
]

const projectCategories = [
  {
    id: 'ai-web',
    name: 'Web & AI Applications',
    projects: [
      {
        title: 'AI Resume Analyzer & Job Matcher',
        tech: ['Next.js', 'Python FastAPI', 'OpenAI / NLP', 'Tailwind'],
        difficulty: 'Advanced',
        duration: '2-3 Weeks',
        desc: 'Automated resume parser with ATS scoring, skill gap analyzer, and real-time job recommendation engine.',
        badge: 'Trending Final Year',
      },
      {
        title: 'Full-Stack E-Commerce & Multi-Vendor Hub',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe / Razorpay'],
        difficulty: 'Intermediate',
        duration: '2 Weeks',
        desc: 'Modern online marketplace with inventory control, customer cart, live payment gateway, and admin dashboard.',
        badge: 'High Demand',
      },
      {
        title: 'Smart Learning Management System (LMS)',
        tech: ['MERN Stack', 'Socket.io', 'AWS S3', 'Chart.js'],
        difficulty: 'Advanced',
        duration: '3 Weeks',
        desc: 'Interactive education portal with video streaming, automated quizzes, progress tracking, and certificates.',
        badge: 'Comprehensive',
      },
    ],
  },
  {
    id: 'enterprise-mgmt',
    name: 'Enterprise & Systems',
    projects: [
      {
        title: 'Hospital & Patient Care Management',
        tech: ['React', 'Spring Boot / Node', 'PostgreSQL', 'JWT'],
        difficulty: 'Advanced',
        duration: '3 Weeks',
        desc: 'Complete clinic workflow: doctor scheduling, patient electronic health records, pharmacy stock & billing.',
        badge: 'Enterprise Grade',
      },
      {
        title: 'Automated Student & College Portal',
        tech: ['React', 'Express.js', 'MySQL', 'Excel Export'],
        difficulty: 'Beginner',
        duration: '1-2 Weeks',
        desc: 'CRUD portal for student attendance, internal marks, hall tickets, fee management, and faculty allocations.',
        badge: 'College Ready',
      },
      {
        title: 'Real-Time Team Task & Kanban Board',
        tech: ['Next.js', 'Firebase', 'Socket.io', 'Tailwind'],
        difficulty: 'Intermediate',
        duration: '2 Weeks',
        desc: 'Collaborative project management board with drag-and-drop tasks, team chat, deadline reminders, and charts.',
        badge: 'Popular',
      },
    ],
  },
  {
    id: 'cloud-mobile',
    name: 'Mobile & Cloud IoT',
    projects: [
      {
        title: 'Cross-Platform Food Delivery App',
        tech: ['Flutter / React Native', 'Node.js', 'Google Maps API'],
        difficulty: 'Intermediate',
        duration: '3 Weeks',
        desc: 'Interactive food ordering app with live geolocation tracking, driver routing, push alerts, and digital payments.',
        badge: 'Mobile App',
      },
      {
        title: 'Smart IoT Weather & Air Quality Hub',
        tech: ['React', 'IoT APIs', 'Geolocation', 'Chart.js'],
        difficulty: 'Beginner',
        duration: '1-2 Weeks',
        desc: 'Live environmental monitoring dashboard with predictive forecasting, radar maps, and location alerts.',
        badge: 'IoT & Data',
      },
    ],
  },
]

export default function StudentProjects() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <Section className="bg-gradient-to-b from-white via-surface-200/50 to-white py-20 lg:py-28" id="students">
      <SectionHeader
        subtitle="For College & University Students"
        title="Engineering Student Project Mentorship"
        description="We empower students with production-grade project code, complete academic documentation, and 1-on-1 mentorship so you understand every concept and present with confidence."
      />

      {/* Hero 3D Student Showcase Banner */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="glass-card p-8 md:p-12 lg:p-14 relative overflow-hidden border border-primary-200/70 shadow-teal-xl">
          {/* Ambient Glow */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-primary-300 to-tech-300 blur-[100px] pointer-events-none -z-10"
          />

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 shadow-teal-sm">
                <GraduationCap className="w-4 h-4 text-primary-600" />
                <span className="text-xs font-bold text-primary-700 uppercase tracking-wider">
                  Academic Excellence & Real Learning
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
                Master Your Final Year Project with <span className="gradient-text">1-on-1 Mentorship</span>
              </h3>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Struggling with complex code, strict project deadlines, or Viva preparation? We don&apos;t just hand over a zip file—we guide you step-by-step through architecture, database modeling, and report drafting.
              </p>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { text: 'Complete Source Code & DB', icon: Code2 },
                  { text: 'IEEE Format Documentation', icon: FileText },
                  { text: 'Viva Question & Answer Prep', icon: HelpCircle },
                  { text: 'Fast 2-4 Days Delivery Option', icon: Clock },
                ].map(({ text, icon: Icon }) => (
                  <div key={text} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700 bg-white/80 p-2.5 rounded-xl border border-primary-100 shadow-teal-sm">
                    <Icon className="w-4 h-4 text-primary-500 flex-shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              {/* Pricing & CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.04, boxShadow: '0 12px 32px rgba(20, 184, 166, 0.35)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-2xl text-base flex items-center justify-center gap-2 shadow-teal-lg"
                  >
                    <span>Get Project Guidance</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <div className="text-center sm:text-left">
                  <p className="text-xs text-slate-400">Student-Friendly Rates</p>
                  <p className="text-sm font-bold text-slate-800">Starting from ₹1,999</p>
                </div>
              </div>
            </div>

            {/* Right 3D Visual: Student Learning on Laptop with Floating Dashboard */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full max-w-[480px] group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/student-learning-3d.jpg"
                  alt="Student learning coding and technology on laptop"
                  className="w-full h-auto object-contain rounded-3xl drop-shadow-[0_20px_30px_rgba(20,184,166,0.22)] transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating Metric 1 */}
                <motion.div
                  animate={{ y: [6, -6, 6], x: [-2, 2, -2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-3 -left-3 bg-white/95 backdrop-blur-xl border border-primary-200 px-3.5 py-2 rounded-2xl shadow-teal-md flex items-center gap-2"
                >
                  <Award className="w-4 h-4 text-primary-500" />
                  <div>
                    <p className="text-xs font-bold text-slate-800">100% Viva Ready</p>
                    <p className="text-[10px] text-primary-600 font-semibold">Concept Walkthroughs</p>
                  </div>
                </motion.div>

                {/* Floating Metric 2 */}
                <motion.div
                  animate={{ y: [-6, 6, -6], x: [2, -2, 2] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-3 -right-3 bg-white/95 backdrop-blur-xl border border-primary-200 px-3.5 py-2 rounded-2xl shadow-teal-md flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <div>
                    <p className="text-xs font-bold text-slate-800">Full IEEE Documentation</p>
                    <p className="text-[10px] text-slate-500">Diagrams, Schemas & PPT</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars of Student Success */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentPillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(20, 184, 166, 0.18)' }}
                className="glass-card p-6 rounded-2xl border border-primary-100 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-primary-500 to-tech-500 text-white w-fit mb-4 shadow-teal-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">{pillar.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Second 3D Mentorship Ecosystem Feature Grid */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-primary-200/60 bg-gradient-to-br from-white via-surface-100 to-primary-50/30">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* 3D Mentorship Collage Image */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full max-w-[420px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/student-mentorship-grid.jpg"
                  alt="Student project mentorship toolkit with laptop, diploma, mobile, and communication"
                  className="w-full h-auto object-contain rounded-2xl shadow-teal-lg border border-primary-200/50"
                />
              </motion.div>
            </div>

            {/* Features Breakdown */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tech-50 border border-tech-200">
                <BookOpen className="w-3.5 h-3.5 text-tech-600" />
                <span className="text-xs font-bold text-tech-700 uppercase tracking-wider">
                  Complete Project Kit Included
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight">
                Everything You Need for a <span className="gradient-text">Top Grade Submission</span>
              </h3>

              <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  { title: 'Commented Source Code', desc: 'Modular, well-commented code following industrial naming conventions.' },
                  { title: 'Project Report (Word/PDF)', desc: 'Synopsis, Literature Review, System Architecture, and Test Cases.' },
                  { title: 'Editable PPT Slides', desc: 'Modern slide deck with flowcharts for your panel presentation.' },
                  { title: 'Database & Setup Scripts', desc: 'Pre-populated database dumps and 1-click startup guides.' },
                  { title: 'Live Demonstration Walkthrough', desc: 'Video recording / live session demonstrating all user and admin flows.' },
                  { title: 'Revision & Defending Support', desc: 'Instant assistance for examiner suggestions and review feedback.' },
                ].map((item) => (
                  <div key={item.title} className="p-3.5 rounded-xl bg-white border border-primary-100 shadow-teal-sm">
                    <p className="text-xs font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      <span>{item.title}</span>
                    </p>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Popular Project Ideas Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-3">
            Popular Ready-to-Build Academic Projects
          </h3>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Choose from high-demand topics for your B.Tech, BCA, MCA, or Diploma semesters.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {projectCategories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(idx)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeCategory === idx
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-teal-md'
                  : 'bg-white text-slate-600 hover:bg-primary-50 border border-primary-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={projectCategories[activeCategory].id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projectCategories[activeCategory].projects.map((proj) => (
              <div
                key={proj.title}
                className="glass-card p-6 rounded-2xl border border-primary-100 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 shadow-teal-sm hover:shadow-teal-md text-left"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-200">
                      {proj.badge}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-primary-500" />
                      {proj.duration}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-800 mb-2">{proj.title}</h4>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">{proj.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-surface-200 text-slate-700 border border-primary-100/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-between w-full py-2 px-3.5 rounded-xl bg-primary-50 hover:bg-primary-500 text-primary-700 hover:text-white font-semibold text-xs transition-colors duration-300 mt-2"
                >
                  <span>Request Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Banner */}
        <div className="mt-14 text-center">
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 12px 32px rgba(20, 184, 166, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-gradient-to-r from-primary-500 to-tech-500 text-white font-bold rounded-xl text-sm md:text-base inline-flex items-center gap-2 shadow-teal-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss Your Custom College Topic</span>
            </motion.button>
          </Link>
        </div>
      </div>
    </Section>
  )
}
