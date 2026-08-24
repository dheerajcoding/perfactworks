'use client'

import CaseStudies from '@/components/sections/CaseStudies'
import Testimonials from '@/components/sections/Testimonials'
import CTABanner from '@/components/sections/CTABanner'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pt-28">
        <section className="container mx-auto px-6 pt-4 pb-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold text-primary-700 uppercase tracking-widest bg-primary-50 px-3.5 py-1.5 rounded-full border border-primary-200 shadow-teal-sm inline-block mb-3">
              Proven Track Record
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
              Client Deliverables & <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Real-world results from fintech portals, brand websites, workflow automations, and enterprise platforms delivered with zero compromises.
            </p>
          </div>
        </section>
        <CaseStudies />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
