import type { Metadata } from 'next'
import SeoJsonLd from '@/components/SeoJsonLd'
import { generateBreadcrumbSchema, generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Student Projects',
  description: 'Student project showcases and academic builds by PerfactWorks, including documentation-ready software solutions.',
  keywords: ['student projects', 'college project help', 'final year projects', 'project documentation'],
  canonical: '/students',
})

export default function StudentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Students', url: '/students' },
  ])

  return (
    <>
      {children}
      <SeoJsonLd data={breadcrumbSchema} />
    </>
  )
}
