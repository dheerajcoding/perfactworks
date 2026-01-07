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
      <main className="overflow-hidden pt-20">
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
