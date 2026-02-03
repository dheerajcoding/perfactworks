import type { Metadata } from 'next'
import SeoJsonLd from '@/components/SeoJsonLd'
import { generateBreadcrumbSchema, generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Our Process',
  description: 'Discover the PerfactWorks delivery process: strategy, design, development, QA, and performance optimization for web and mobile products.',
  keywords: ['software development process', 'product delivery framework', 'agile development workflow', 'quality assurance process'],
  canonical: '/process',
})

export default function ProcessLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Process', url: '/process' },
  ])

  return (
    <>
      {children}
      <SeoJsonLd data={breadcrumbSchema} />
    </>
  )
}
