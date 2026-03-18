'use client'

import { ArrowRight, Sparkles, Zap, Globe, Code } from 'lucide-react'
import Link from 'next/link'

export default function HeroNew() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 -z-20" />

      {/* Subtle static grid – CSS only, no JS */}
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,240,255,0.2) 1px,transparent 1px),
                            linear-gradient(90deg,rgba(0,240,255,0.2) 1px,transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs — CSS animation, no JS */}
      <div className="hero-orb-cyan absolute top-20 right-20 w-[400px] h-[400px] rounded-full -z-10" />
      <div className="hero-orb-purple absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full -z-10" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-dark-700/60 backdrop-blur-sm border border-neon-cyan/30 rounded-full hero-fade-in">
            <Sparkles className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm font-semibold text-neon-cyan uppercase tracking-wider">
              Trusted • Reliable • Quality-Driven
            </span>
          </div>

          {/* Headline — visible immediately for best LCP */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight hero-fade-in hero-fade-in-delay-1">
            We Build High-Performance Digital Products.
          </h1>

          {/* Feature tags */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 text-gray-400 hero-fade-in hero-fade-in-delay-2">
            {[
              { icon: Code, text: 'Web Applications' },
              { icon: Globe, text: 'Professional Websites' },
              { icon: Zap, text: 'Custom Solutions' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-base md:text-lg font-medium hover:text-neon-cyan transition-colors duration-200">
                <Icon className="w-5 h-5" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 hero-fade-in hero-fade-in-delay-2">
            PerfactWorks is a premium web development, app development, and SEO services partner for India and global businesses.
            We design, build, and optimize digital products that load fast, rank higher, and convert more customers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center hero-fade-in hero-fade-in-delay-3">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-900 font-bold rounded-lg text-lg flex items-center gap-2 shadow-lg shadow-neon-cyan/40 hover:shadow-neon-cyan/70 hover:scale-105 transition-all duration-200"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/services"
              className="px-8 py-4 bg-transparent border-2 border-gray-600 text-white font-bold rounded-lg text-lg hover:border-neon-cyan hover:scale-105 transition-all duration-200"
            >
              Explore Our Capabilities
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
