import type { Metadata } from 'next'
import SeoJsonLd from '@/components/SeoJsonLd'
import { generateBreadcrumbSchema, generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'About PerfactWorks',
  description: 'Learn how PerfactWorks partners with India and global businesses to build high-performance web apps, mobile products, and scalable digital platforms.',
  keywords: ['about PerfactWorks', 'technology partner India', 'global software agency', 'web and app development team'],
  canonical: '/about',
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ])

  return (
    <>
      {children}
      <SeoJsonLd data={breadcrumbSchema} />
    </>
  )
}
