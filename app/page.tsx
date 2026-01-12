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
      
      {/* Enhanced SEO Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://perfactworks.com/#organization',
                name: 'PerfactWorks',
                url: 'https://perfactworks.com',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://perfactworks.com/logo.png',
                },
                description: 'Professional web applications, custom websites, and software solutions for businesses. Specializing in modern web development with quality, reliability, and trusted service.',
                foundingDate: '2023',
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'IN',
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  contactType: 'Business Inquiries',
                  email: 'worksperfact@gmail.com',
                  availableLanguage: ['English'],
                },
                sameAs: [
                  'https://linkedin.com/company/perfactworks',
                  'https://github.com/perfactworks',
                ],
              },
              {
                '@type': 'WebSite',
                '@id': 'https://perfactworks.com/#website',
                url: 'https://perfactworks.com',
                name: 'PerfactWorks',
                publisher: {
                  '@id': 'https://perfactworks.com/#organization',
                },
                potentialAction: {
                  '@type': 'SearchAction',
                  target: 'https://perfactworks.com/?s={search_term_string}',
                  'query-input': 'required name=search_term_string',
                },
              },
              {
                '@type': 'WebPage',
                '@id': 'https://perfactworks.com/#webpage',
                url: 'https://perfactworks.com',
                name: 'PerfactWorks | Trusted Technology Partner & Custom Software Development',
                description: 'Quality technology services for growing businesses. Reliable custom web application development, SaaS MVP, business systems, and trusted solutions.',
                isPartOf: {
                  '@id': 'https://perfactworks.com/#website',
                },
                about: {
                  '@id': 'https://perfactworks.com/#organization',
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
