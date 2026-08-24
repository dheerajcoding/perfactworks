'use client'

import { ArrowRight, Sparkles, Zap, Globe, Code, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroNew() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-24">
      {/* Premium light gradient background */}
      <div className="absolute inset-0 bg-gradient-hero -z-20" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 -z-15 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(20,184,166,0.6) 1px,transparent 1px),
                            linear-gradient(90deg,rgba(20,184,166,0.6) 1px,transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating ambient orbs */}
      <div className="hero-orb-teal absolute top-10 right-10 w-[550px] h-[550px] rounded-full -z-10" />
      <div className="hero-orb-cyan absolute bottom-10 left-10 w-[600px] h-[600px] rounded-full -z-10" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 text-left">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] text-slate-800"
            >
              We Build <span className="gradient-text">High-Performance</span> Digital Products.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mb-8 leading-relaxed"
            >
              PerfactWorks is a premium web development, mobile app, and SEO partner. We design, build, and optimize software that loads ultra-fast, scales smoothly, and generates quality leads.
            </motion.p>

            {/* Feature Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 sm:gap-6 mb-10"
            >
              {[
                { icon: Code, text: 'Custom Web Apps' },
                { icon: Globe, text: 'Enterprise Websites' },
                { icon: Zap, text: 'Next-Gen SEO' },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm md:text-base font-semibold text-slate-700 bg-white/70 backdrop-blur-md px-3.5 py-2 rounded-xl border border-primary-100 shadow-teal-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary-500" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 16px 48px rgba(20, 184, 166, 0.35)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-2xl text-base md:text-lg flex items-center justify-center gap-2 shadow-teal-lg transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.04, backgroundColor: 'rgba(20, 184, 166, 0.08)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-md border-2 border-primary-200 text-primary-700 font-bold rounded-2xl text-base md:text-lg hover:border-primary-400 transition-all duration-300 flex items-center justify-center"
                >
                  Explore Services
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: 3D Illustration Graphic with Interactive Floating Motion */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Glow behind the graphic */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] rounded-full bg-gradient-to-tr from-primary-300 to-tech-300 blur-[80px] -z-10"
            />

            {/* Main 3D Artwork */}
            <motion.div
              animate={{ y: [-12, 12, -12] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-[540px] group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-tech-3d.png"
                alt="Web and App Technology Ecosystem"
                fetchPriority="high"
                className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(20,184,166,0.22)] transition-transform duration-500 group-hover:scale-105"
              />

              {/* Floating Mini Badge 1 */}
              <motion.div
                animate={{ y: [6, -8, 6], x: [-3, 3, -3] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 sm:top-2 sm:left-2 bg-white/90 backdrop-blur-xl border border-primary-200 px-4 py-2.5 rounded-2xl shadow-teal-md flex items-center gap-2.5"
              >
                <div className="w-3 h-3 rounded-full bg-primary-500 animate-ping" />
                <div>
                  <p className="text-xs font-bold text-slate-800">99.9% Uptime</p>
                  <p className="text-[10px] text-slate-400">Cloud & Fast APIs</p>
                </div>
              </motion.div>

              {/* Floating Mini Badge 2 */}
              <motion.div
                animate={{ y: [-8, 8, -8], x: [3, -3, 3] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-2 sm:bottom-4 sm:right-2 bg-white/90 backdrop-blur-xl border border-primary-200 px-4 py-2.5 rounded-2xl shadow-teal-md flex items-center gap-2.5"
              >
                <ShieldCheck className="w-5 h-5 text-primary-500" />
                <div>
                  <p className="text-xs font-bold text-slate-800">SEO & Core Vitals</p>
                  <p className="text-[10px] text-primary-600 font-semibold">Rank #1 Optimized</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
