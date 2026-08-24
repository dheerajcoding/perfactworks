import dynamic from 'next/dynamic'
import HeroNew from '@/components/sections/HeroNew'
import Header from '@/components/Header'
import Services from '@/components/sections/Services'
import WhyPerfactWorks from '@/components/sections/WhyPerfactWorks'
import CTABanner from '@/components/sections/CTABanner'
import Footer from '@/components/Footer'

const ScrollProgress = dynamic(() => import('@/components/ScrollProgress'))
const TrustedBy = dynamic(() => import('@/components/sections/TrustedBy'))
const CaseStudies = dynamic(() => import('@/components/sections/CaseStudies'))
const StudentProjects = dynamic(() => import('@/components/sections/StudentProjects'))
const Stats = dynamic(() => import('@/components/sections/Stats'))
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'))

export const revalidate = 3600

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="overflow-hidden bg-white">
        {/* 1. 3D Hero Section */}
        <HeroNew />

        {/* 2. Trusted By Real Clients */}
        <TrustedBy />

        {/* 3. Interactive 3D Services Showcase & Grid */}
        <Services />

        {/* 4. Executive Tech Partnership */}
        <WhyPerfactWorks />

        {/* 5. Real Client Case Studies */}
        <CaseStudies />

        {/* 6. Student Mentorship & Academic Projects */}
        <StudentProjects />

        {/* 7. Verified Metrics & Impact Stats */}
        <Stats />

        {/* 8. Client Testimonials Carousel */}
        <Testimonials />

        {/* 9. Final High-Conversion CTA Banner */}
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
