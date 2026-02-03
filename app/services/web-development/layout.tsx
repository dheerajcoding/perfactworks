import type { Metadata } from 'next'
import SeoJsonLd from '@/components/SeoJsonLd'
import { generateBreadcrumbSchema, generateMetadata, generateServiceSchema } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Web Development Services',
  description: 'Custom web application development for India and global businesses. Fast, secure, and scalable web platforms built with Next.js, React, and Node.js.',
  keywords: [
    'custom web application development',
    'Next.js development company',
    'React development agency',
    'Node.js backend development',
    'enterprise web applications',
  ],
  canonical: '/services/web-development',
})

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Web Development', url: '/services/web-development' },
  ])
  const serviceSchema = generateServiceSchema({
    name: 'Web Development',
    description: 'Custom web application development with performance-first architecture, SEO-ready builds, and enterprise-grade security.',
    url: 'https://perfactworks.com/services/web-development',
  })

  return (
    <>
      {children}
      <SeoJsonLd data={[breadcrumbSchema, serviceSchema]} />
    </>
  )
}
