'use client'

import HeroNew from '@/components/sections/HeroNew'
import Services from '@/components/sections/Services'
import WhyPerfactWorks from '@/components/sections/WhyPerfactWorks'
import TrustedBy from '@/components/sections/TrustedBy'
import Stats from '@/components/sections/Stats'
import Testimonials from '@/components/sections/Testimonials'
import CTABanner from '@/components/sections/CTABanner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ScrollProgress from '@/components/ScrollProgress'
import { motion } from 'framer-motion'

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
                description: 'Premium technology consulting services for startups and enterprises. Expert custom web application development, SaaS MVP, HRMS/LMS/ERP systems, cloud deployment, and AI automation.',
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
                name: 'PerfactWorks | Technology Consulting & Custom Software Development',
                description: 'Premium technology consulting services for startups and enterprises. Expert custom web application development, SaaS MVP, HRMS/LMS/ERP systems.',
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
