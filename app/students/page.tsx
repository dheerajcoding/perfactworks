'use client'

import { motion } from 'framer-motion'
import {
  GraduationCap,
  FileText,
  Code2,
  Lightbulb,
  MessageSquare,
  CheckCircle2,
  Laptop,
  Database,
  Globe,
  Smartphone,
  Users,
  Award,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  BookOpen,
  HelpCircle,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/ui/Section'
import StudentProjects from '@/components/sections/StudentProjects'
import FAQ from '@/components/sections/FAQ'
import CTABanner from '@/components/sections/CTABanner'
import Link from 'next/link'

export default function StudentsPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="overflow-hidden pt-20">
        {/* Student Hero Header */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-hero pt-12 pb-16">
          {/* Subtle grid */}
          <div
            className="absolute inset-0 -z-15 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(20,184,166,0.6) 1px,transparent 1px),
                                linear-gradient(90deg,rgba(20,184,166,0.6) 1px,transparent 1px)`,
              backgroundSize: '80px 80px',
            }}
          />

          {/* Glowing orbs */}
          <div className="hero-orb-teal absolute top-10 right-10 w-[500px] h-[500px] rounded-full -z-10" />
          <div className="hero-orb-cyan absolute bottom-10 left-10 w-[600px] h-[600px] rounded-full -z-10" />

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Copy */}
              <div className="lg:col-span-7 text-left space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-primary-200/60 shadow-teal-sm">
                  <GraduationCap className="w-4 h-4 text-primary-600" />
                  <span className="text-xs md:text-sm font-semibold text-primary-700 uppercase tracking-wider">
                    Engineering Project Mentorship & Guidance
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-800 leading-[1.15]">
                  Build Outstanding <span className="gradient-text">College Projects</span> with Real-World Code.
                </h1>

                <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Get full source code, IEEE standard reports, database architecture, and 1-on-1 Viva coaching. We ensure you understand every algorithm so you graduate with high marks and practical skills.
                </p>

                {/* Pricing & Key Metric Chips */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <div className="bg-primary-50/80 border border-primary-200/80 px-4 py-2.5 rounded-2xl">
                    <p className="text-xs text-primary-700 font-semibold">Student-Friendly Plans</p>
                    <p className="text-lg font-bold text-slate-800">Starting at ₹1,999</p>
                  </div>
                  <div className="bg-tech-50/80 border border-tech-200/80 px-4 py-2.5 rounded-2xl">
                    <p className="text-xs text-tech-700 font-semibold">Fast Turnaround</p>
                    <p className="text-lg font-bold text-slate-800">2-4 Days Delivery</p>
                  </div>
                  <div className="bg-emerald-50/80 border border-emerald-200/80 px-4 py-2.5 rounded-2xl">
                    <p className="text-xs text-emerald-700 font-semibold">Academic Integrity</p>
                    <p className="text-lg font-bold text-slate-800">100% Original Code</p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.04, boxShadow: '0 12px 32px rgba(20, 184, 166, 0.35)' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-2xl text-base flex items-center justify-center gap-2 shadow-teal-lg"
                    >
                      <span>Request Project Assistance</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                  <a href="#student-details" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-7 py-4 bg-white/90 border border-primary-200 text-primary-700 font-bold rounded-2xl text-base hover:bg-primary-50/60 transition-all flex items-center justify-center">
                      View Project Packages
                    </button>
                  </a>
                </div>
              </div>

              {/* Right 3D Visual */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-full max-w-[480px] group"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/student-learning-3d.jpg"
                    alt="Student coding and learning with 3D progress dashboard"
                    className="w-full h-auto object-contain rounded-3xl drop-shadow-[0_25px_35px_rgba(20,184,166,0.25)] transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Floating badge */}
                  <motion.div
                    animate={{ y: [6, -6, 6] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-3 left-2 bg-white/95 backdrop-blur-xl border border-primary-200 px-3.5 py-2 rounded-2xl shadow-teal-md flex items-center gap-2"
                  >
                    <Award className="w-4 h-4 text-primary-500" />
                    <span className="text-xs font-bold text-slate-800">100% Viva Ready</span>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Student Projects & Mentorship Section */}
        <div id="student-details">
          <StudentProjects />
        </div>

        {/* Academic Ethics & Learning Guarantee */}
        <Section className="bg-surface-200/40">
          <div className="max-w-5xl mx-auto glass-card p-8 md:p-12 rounded-3xl border border-primary-200/60 text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary-100 rounded-2xl text-primary-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800">Our Academic Learning Guarantee</h3>
                <p className="text-xs sm:text-sm text-slate-500">Committed to true conceptual understanding and student success.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-2xl border border-primary-100 shadow-teal-sm">
                <h4 className="font-bold text-sm text-slate-800 mb-2">1. Concept Walkthroughs</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We schedule 1-on-1 screen-sharing sessions to walk you through the codebase line by line so you can answer any examiner question.
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-primary-100 shadow-teal-sm">
                <h4 className="font-bold text-sm text-slate-800 mb-2">2. University Formatting</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Reports and presentations are tailored to your department&apos;s specific submission requirements (IEEE, ACM, or university templates).
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-primary-100 shadow-teal-sm">
                <h4 className="font-bold text-sm text-slate-800 mb-2">3. Ongoing Revision Support</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  If your guide or evaluator requests changes to the architecture, we help you adapt and refine the code and documentation.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <FAQ />

        {/* Bottom CTA Banner */}
        <CTABanner />
      </main>

      <Footer />
    </div>
  )
}
