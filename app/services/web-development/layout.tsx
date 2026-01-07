import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'Custom Web Application Development Services | Full-Stack MERN Development',
  description: 'Professional custom web application development using MERN stack, Node.js, React, and Next.js. Enterprise-grade full-stack development for startups and businesses. Scalable, secure, and high-performance web applications.',
  keywords: [
    'custom web application development',
    'MERN stack development',
    'Node.js development services',
    'React development company',
    'Next.js development',
    'full-stack web development',
    'enterprise web applications',
  ],
  canonical: '/services/web-development',
})

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
