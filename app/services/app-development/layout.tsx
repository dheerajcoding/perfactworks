import type { Metadata } from 'next'
import SeoJsonLd from '@/components/SeoJsonLd'
import { generateBreadcrumbSchema, generateMetadata, generateServiceSchema } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'App Development Services',
  description: 'iOS and Android app development for India and global businesses. Build secure, scalable mobile apps with product strategy, UX, and performance engineering.',
  keywords: ['mobile app development', 'iOS app development', 'Android app development', 'app development company India', 'cross-platform app development'],
  canonical: '/services/app-development',
})

export default function AppDevelopmentLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'App Development', url: '/services/app-development' },
  ])
  const serviceSchema = generateServiceSchema({
    name: 'App Development',
    description: 'iOS and Android app development with product strategy, secure APIs, and scalable mobile architecture.',
    url: 'https://perfactworks.com/services/app-development',
  })

  return (
    <>
      {children}
      <SeoJsonLd data={[breadcrumbSchema, serviceSchema]} />
    </>
  )
}
