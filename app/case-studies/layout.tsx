import type { Metadata } from 'next'
import SeoJsonLd from '@/components/SeoJsonLd'
import { generateBreadcrumbSchema, generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Case Studies',
  description: 'Explore PerfactWorks case studies showcasing web apps, SaaS MVPs, and enterprise systems delivered for India and global clients.',
  keywords: ['software development case studies', 'web app portfolio', 'SaaS MVP results', 'enterprise systems projects'],
  canonical: '/case-studies',
})

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Case Studies', url: '/case-studies' },
  ])

  return (
    <>
      {children}
      <SeoJsonLd data={breadcrumbSchema} />
    </>
  )
}
