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
      <main className="overflow-hidden pt-20">
        <section className="container mx-auto px-6 pt-6 pb-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Real-world results from web apps, SaaS MVPs, and enterprise systems delivered for India and global clients.
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
