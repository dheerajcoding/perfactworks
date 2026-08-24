'use client'

import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import TechStack from '@/components/sections/TechStack'
import FAQ from '@/components/sections/FAQ'
import CTABanner from '@/components/sections/CTABanner'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pt-28">
        <section className="container mx-auto px-6 pt-4 pb-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold text-primary-700 uppercase tracking-widest bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-200 shadow-teal-sm inline-block mb-3">
              Full-Stack Engineering & Consulting
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
              Web, App & <span className="gradient-text">Cloud Engineering Services</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Full-stack software engineering for high-growth businesses—web development, mobile applications, SaaS MVPs, and custom enterprise systems built to scale.
            </p>
          </div>
        </section>
        <Services />
        <Process />
        <TechStack />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
