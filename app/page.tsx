import dynamic from 'next/dynamic'
import HeroNew from '@/components/sections/HeroNew'
import Header from '@/components/Header'
import Services from '@/components/sections/Services'
import WhyPerfactWorks from '@/components/sections/WhyPerfactWorks'
import CTABanner from '@/components/sections/CTABanner'
import Footer from '@/components/Footer'

// Non-critical client-only component — loaded after page renders
const ScrollProgress = dynamic(() => import('@/components/ScrollProgress'))

// Below-the-fold sections: lazy-loaded to keep initial bundle small
const TrustedBy = dynamic(() => import('@/components/sections/TrustedBy'))
const Stats = dynamic(() => import('@/components/sections/Stats'))
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'))

export const revalidate = 3600 // ISR: revalidate page every hour

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="overflow-hidden bg-dark-900">
        <HeroNew />
        <TrustedBy />
        <Services />
        <WhyPerfactWorks />
        <Stats />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
