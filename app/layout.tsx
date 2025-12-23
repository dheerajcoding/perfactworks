import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PerfactWorks | Engineering Perfection in Every Solution',
  description: 'Premium global technology consultancy for startups, founders, and enterprises. Expert solutions in AI, web development, cloud, cybersecurity, and SaaS development.',
  keywords: 'technology consulting, AI solutions, web development, mobile app development, cloud services, DevOps, cybersecurity, SaaS development, MVP development, digital transformation',
  authors: [{ name: 'PerfactWorks' }],
  creator: 'PerfactWorks',
  publisher: 'PerfactWorks',
  metadataBase: new URL('https://perfactworks.online'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PerfactWorks | Engineering Perfection in Every Solution',
    description: 'Premium global technology consultancy for startups, founders, and enterprises.',
    url: 'https://perfactworks.online',
    siteName: 'PerfactWorks',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PerfactWorks - Engineering Perfection in Every Solution',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PerfactWorks | Engineering Perfection in Every Solution',
    description: 'Premium global technology consultancy for startups, founders, and enterprises.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
