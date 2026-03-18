'use client'

import { ArrowRight, Sparkles, Clock, Users, Shield } from 'lucide-react'
import Link from 'next/link'
import Section from '../ui/Section'
import Button from '../ui/Button'

const trustItems = [
  { icon: Clock, text: '48h Response' },
  { icon: Users, text: '30+ Projects' },
  { icon: Shield, text: '100% Secure' },
]

export default function CTABanner() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl">
        {/* Static gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-purple-600 to-pink-600" />

        {/* Subtle static orbs — no JS */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative px-8 py-16 md:px-16 md:py-24 text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Limited Slots Available - Free Consultation</span>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {trustItems.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-200"
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-semibold">{text}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to Build Something Extraordinary?
          </h2>

          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
            Let&apos;s transform your vision into a market-leading digital solution
          </p>

          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-white/90 font-bold px-8 py-4 text-lg shadow-2xl hover:scale-105 transition-all duration-200"
            >
              Schedule Free Consultation
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </Link>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm">
            {['No Commitment Required', 'NDA Protected', 'Expert Tech Team'].map((text) => (
              <span key={text} className="flex items-center gap-2 font-semibold">
                <span className="text-green-300">✓</span>
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
