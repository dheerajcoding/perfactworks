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
        <CaseStudies />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
