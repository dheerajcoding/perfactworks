import type { Metadata } from 'next'
import SeoJsonLd from '@/components/SeoJsonLd'
import { generateBreadcrumbSchema, generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Services',
  description: 'Explore PerfactWorks services: web development, app development, SEO services, SaaS MVPs, and custom enterprise systems for India and global businesses.',
  keywords: ['web development services', 'app development services', 'SEO services company', 'SaaS MVP development', 'custom software services'],
  canonical: '/services',
})

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ])

  return (
    <>
      {children}
      <SeoJsonLd data={breadcrumbSchema} />
    </>
  )
}
