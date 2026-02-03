import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import ParticleBackground from '@/components/ParticleBackground'
import SeoJsonLd from '@/components/SeoJsonLd'
import { generateOrganizationSchema, generateWebsiteSchema, generateCoreServiceSchemas, SITE_NAME } from '@/lib/seo'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'PerfactWorks | Web, App & SEO Development Company',
  description: 'PerfactWorks is a premium technology partner delivering web development, app development, and SEO services for India and global businesses. Build faster, scale smarter, and grow revenue with performance-first engineering.',
  keywords: 'web development company, app development company, SEO services, custom software development, SaaS MVP development, technology consulting, India software agency, global software partner',
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  metadataBase: new URL('https://perfactworks.com'),
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PerfactWorks | Web, App & SEO Development Company',
    description: 'Premium web development, app development, and SEO services for India and global businesses. Build scalable digital products with PerfactWorks.',
    url: 'https://perfactworks.com',
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PerfactWorks - Web, App & SEO Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PerfactWorks | Web, App & SEO Development Company',
    description: 'Premium web development, app development, and SEO services for India and global businesses.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateOrganizationSchema()
  const websiteSchema = generateWebsiteSchema()
  const serviceSchemas = generateCoreServiceSchemas()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider>
          <ParticleBackground />
          <SeoJsonLd data={[organizationSchema, websiteSchema, ...serviceSchemas]} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
