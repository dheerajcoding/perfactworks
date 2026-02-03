import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://perfactworks.com/sitemap.xml',
    host: 'https://perfactworks.com',
  }
}
