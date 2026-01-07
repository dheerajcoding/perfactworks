import { Metadata } from 'next'

// Base URL for the site
export const SITE_URL = 'https://perfactworks.online'
export const SITE_NAME = 'PerfactWorks'
export const SITE_DESCRIPTION = 'Premium technology consulting services for startups and enterprises. Full-stack development, SaaS MVP, custom enterprise systems, cloud deployment, and AI automation.'

// Primary target keywords
export const PRIMARY_KEYWORDS = [
  'technology consulting services',
  'freelance software development company',
  'custom web application development',
  'MVP development for startups',
  'HRMS LMS ERP development',
]

// Organization schema for E-E-A-T
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: SITE_DESCRIPTION,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'India',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Business Inquiries',
      email: 'hello@perfactworks.online',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://linkedin.com/company/perfactworks',
      'https://github.com/perfactworks',
      'https://twitter.com/perfactworks',
    ],
    foundingDate: '2023',
    founders: [
      {
        '@type': 'Person',
        name: 'PerfactWorks Founder',
        jobTitle: 'Chief Technology Officer',
      },
    ],
    areaServed: [
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: '20.5937',
          longitude: '78.9629',
        },
        geoRadius: '5000000',
      },
      'Worldwide',
    ],
  }
}

// Service schema for service pages
export function generateServiceSchema(service: {
  name: string
  description: string
  url: string
  provider?: string
  areaServed?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: service.provider || SITE_NAME,
      url: SITE_URL,
    },
    areaServed: service.areaServed || 'Worldwide',
    url: service.url,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.name,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
          },
        },
      ],
    },
  }
}

// FAQ schema
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Breadcrumb schema
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}

// Generate optimized metadata for pages
export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/og-image.jpg',
  type = 'website',
}: {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  type?: 'website' | 'article'
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`
  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL
  const allKeywords = [...PRIMARY_KEYWORDS, ...keywords].join(', ')

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
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
  }
}

// Generate LocalBusiness schema for contact pages
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: '+91-XXX-XXX-XXXX',
    email: 'hello@perfactworks.online',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '20.5937',
      longitude: '78.9629',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '50',
    },
  }
}

// Article schema for blog posts
export function generateArticleSchema(article: {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  author: string
  url: string
  image: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  }
}
