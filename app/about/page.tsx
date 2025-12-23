'use client'

import About from '@/components/sections/About'
import Stats from '@/components/sections/Stats'
import Testimonials from '@/components/sections/Testimonials'
import CTABanner from '@/components/sections/CTABanner'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pt-20">
        <About />
        <Stats />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
