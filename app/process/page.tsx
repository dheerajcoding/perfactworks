'use client'

import Process from '@/components/sections/Process'
import Stats from '@/components/sections/Stats'
import CTABanner from '@/components/sections/CTABanner'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pt-20">
        <Process />
        <Stats />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
