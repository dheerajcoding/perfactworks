import type { Metadata } from 'next'
import SeoJsonLd from '@/components/SeoJsonLd'
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Contact PerfactWorks',
  description: 'Talk to PerfactWorks about web development, app development, or SEO services. Free consultation for India and global projects.',
  keywords: ['contact PerfactWorks', 'web development consultation', 'app development inquiry', 'SEO services inquiry'],
  canonical: '/contact',
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ])
  const localBusinessSchema = generateLocalBusinessSchema()

  return (
    <>
      {children}
      <SeoJsonLd data={[breadcrumbSchema, localBusinessSchema]} />
    </>
  )
}
