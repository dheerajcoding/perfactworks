'use client'

import { ArrowRight, Sparkles, Clock, Users, Shield, Calendar, Video, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Section from '../ui/Section'

export default function CTABanner() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <Section className="py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-3xl border border-primary-400/40 shadow-2xl"
      >
        {/* Teal gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-tech-800" />

        {/* Decorative Glowing Orbs */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-10 -left-10 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.1, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-10 -right-10 w-96 h-96 bg-tech-400/20 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative p-8 md:p-12 lg:p-16 text-white">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-left space-y-6">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full border border-white/20 shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span className="text-xs sm:text-sm font-bold tracking-wide">
                  Limited Slots Available • Free Consultation
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight"
              >
                Ready to Start Your Next <span className="text-teal-200">Digital Project?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl"
              >
                Book a direct 30-minute consultation with our senior engineers. We&apos;ll analyze your requirements, review technical architecture, and provide a clear milestone roadmap.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 16px 40px rgba(0, 0, 0, 0.3)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto bg-white text-primary-700 hover:bg-white/95 font-black px-8 py-4 text-base shadow-2xl rounded-2xl transition-all duration-300 flex items-center justify-center gap-2.5"
                  >
                    <span>Start Your Project Today</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link href="/case-studies">
                  <motion.button
                    whileHover={{ scale: 1.04, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto bg-white/10 border border-white/30 text-white font-bold px-6 py-4 text-base rounded-2xl backdrop-blur-md transition-all flex items-center justify-center"
                  >
                    Explore Case Studies
                  </motion.button>
                </Link>
              </motion.div>

              {/* Trust Checkpoints */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-wrap gap-4 text-xs sm:text-sm pt-2"
              >
                {['Zero Commitment Required', '100% NDA Protected', 'Direct Senior Devs'].map((text) => (
                  <span key={text} className="flex items-center gap-1.5 font-semibold text-teal-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                    <span>{text}</span>
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right Consultation Image Column */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-full max-w-[440px] group"
              >
                {/* Floating Image Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/30 bg-white/10 backdrop-blur-md p-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/contact-consultation.jpg"
                    alt="Schedule a technology consultation and start your project"
                    className="w-full h-auto rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Floating Live Badge 1 */}
                <motion.div
                  animate={{ y: [4, -6, 4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-3 -left-3 bg-white/95 backdrop-blur-xl border border-primary-200 text-slate-800 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2"
                >
                  <Video className="w-4 h-4 text-primary-600" />
                  <div>
                    <p className="text-[11px] font-extrabold text-slate-800 leading-tight">1-on-1 Video Session</p>
                    <p className="text-[9px] text-primary-600 font-bold">Google Meet / Zoom</p>
                  </div>
                </motion.div>

                {/* Floating Live Badge 2 */}
                <motion.div
                  animate={{ y: [-5, 6, -5] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-3 -right-3 bg-white/95 backdrop-blur-xl border border-primary-200 text-slate-800 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2"
                >
                  <Clock className="w-4 h-4 text-emerald-500" />
                  <div>
                    <p className="text-[11px] font-extrabold text-slate-800 leading-tight">Fast Turnaround</p>
                    <p className="text-[9px] text-slate-500 font-medium">Roadmap in 24 Hours</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
