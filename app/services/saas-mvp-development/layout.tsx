import type { Metadata } from 'next'
import SeoJsonLd from '@/components/SeoJsonLd'
import { generateBreadcrumbSchema, generateMetadata, generateServiceSchema } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'SaaS MVP Development Services',
  description: 'Launch your SaaS MVP in 6-8 weeks with a scalable architecture, product strategy, and investor-ready build from PerfactWorks.',
  keywords: [
    'MVP development for startups',
    'SaaS development services',
    'rapid MVP development',
    'startup technology consulting',
    'scalable SaaS architecture',
  ],
  canonical: '/services/saas-mvp-development',
})

export default function SaaSMVPLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'SaaS MVP Development', url: '/services/saas-mvp-development' },
  ])
  const serviceSchema = generateServiceSchema({
    name: 'SaaS MVP Development',
    description: 'Rapid SaaS MVP development with product-market fit validation, scalable architecture, and go-to-market support.',
    url: 'https://perfactworks.com/services/saas-mvp-development',
  })

  return (
    <>
      {children}
      <SeoJsonLd data={[breadcrumbSchema, serviceSchema]} />
    </>
  )
}
