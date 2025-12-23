'use client'

import Hero from '@/components/sections/Hero'
import TrustedBy from '@/components/sections/TrustedBy'
import WhyPerfactWorks from '@/components/sections/WhyPerfactWorks'
import Stats from '@/components/sections/Stats'
import Testimonials from '@/components/sections/Testimonials'
import BlogPreview from '@/components/sections/BlogPreview'
import CTABanner from '@/components/sections/CTABanner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <TrustedBy />
        <WhyPerfactWorks />
        <Stats />
        <Testimonials />
        <BlogPreview />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
