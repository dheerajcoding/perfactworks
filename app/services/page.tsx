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
        <section className="container mx-auto px-6 pt-6 pb-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Web, App & SEO Services
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Full-stack delivery for India and global businesses—web development, mobile app development, and technical SEO built to convert.
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
