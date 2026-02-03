import type { Metadata } from 'next'
import SeoJsonLd from '@/components/SeoJsonLd'
import { generateBreadcrumbSchema, generateMetadata, generateServiceSchema } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Enterprise Systems Development',
  description: 'Custom HRMS, LMS, ERP, and CRM development tailored to your workflows with secure, scalable enterprise architecture.',
  keywords: [
    'HRMS development',
    'LMS development',
    'ERP development',
    'CRM development',
    'custom enterprise software',
    'enterprise system development',
  ],
  canonical: '/services/enterprise-systems',
})

export default function EnterpriseSystemsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Enterprise Systems', url: '/services/enterprise-systems' },
  ])
  const serviceSchema = generateServiceSchema({
    name: 'Enterprise Systems Development',
    description: 'Custom HRMS, LMS, ERP, and CRM platforms that automate operations and scale with your organization.',
    url: 'https://perfactworks.com/services/enterprise-systems',
  })

  return (
    <>
      {children}
      <SeoJsonLd data={[breadcrumbSchema, serviceSchema]} />
    </>
  )
}
