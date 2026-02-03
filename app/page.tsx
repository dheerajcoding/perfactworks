'use client'

import dynamic from 'next/dynamic'
import HeroNew from '@/components/sections/HeroNew'
import Header from '@/components/Header'
import ScrollProgress from '@/components/ScrollProgress'
import { motion } from 'framer-motion'

// Dynamically import below-the-fold components
const Services = dynamic(() => import('@/components/sections/Services'), { ssr: true })
const WhyPerfactWorks = dynamic(() => import('@/components/sections/WhyPerfactWorks'), { ssr: true })
const TrustedBy = dynamic(() => import('@/components/sections/TrustedBy'), { ssr: true })
const Stats = dynamic(() => import('@/components/sections/Stats'), { ssr: true })
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), { ssr: true })
const CTABanner = dynamic(() => import('@/components/sections/CTABanner'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <motion.main 
        className="overflow-hidden bg-dark-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroNew />
        <TrustedBy />
        <Services />
        <WhyPerfactWorks />
        <Stats />
        <Testimonials />
        <CTABanner />
      </motion.main>
      <Footer />
    </>
  )
}
