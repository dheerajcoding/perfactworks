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
        <section className="container mx-auto px-6 pt-6 pb-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Delivery Process</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              A proven, transparent framework for strategy, design, development, QA, and performance optimization.
            </p>
          </div>
        </section>
        <Process />
        <Stats />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
