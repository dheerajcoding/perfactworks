import type { Metadata } from 'next'
import SeoJsonLd from '@/components/SeoJsonLd'
import { generateBreadcrumbSchema, generateMetadata, generateServiceSchema } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'SEO Services',
  description: 'Technical SEO and performance-led optimization for India and global businesses. Improve Core Web Vitals, rankings, and qualified organic traffic.',
  keywords: ['SEO services', 'technical SEO', 'on-page SEO', 'Core Web Vitals optimization', 'SEO company India'],
  canonical: '/services/seo-services',
})

export default function SeoServicesLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'SEO Services', url: '/services/seo-services' },
  ])
  const serviceSchema = generateServiceSchema({
    name: 'SEO Services',
    description: 'Technical SEO, on-page optimization, and performance engineering to grow qualified organic traffic.',
    url: 'https://perfactworks.com/services/seo-services',
  })

  return (
    <>
      {children}
      <SeoJsonLd data={[breadcrumbSchema, serviceSchema]} />
    </>
  )
}
