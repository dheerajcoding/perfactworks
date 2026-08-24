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
      <main className="overflow-hidden pt-20 bg-white">
        <section className="container mx-auto px-6 pt-6 pb-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
              About <span className="gradient-text">PerfactWorks</span>
            </h1>
            <p className="text-lg text-slate-500">
              A performance-first technology partner helping India and global teams ship reliable web apps, mobile products, and SEO-ready platforms.
            </p>
          </div>
        </section>
        <About />
        <Stats />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
