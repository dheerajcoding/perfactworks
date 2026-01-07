import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'SaaS MVP Development Services | Launch Your Startup in 6-8 Weeks',
  description: 'Rapid MVP development for startups. Launch your SaaS product in 6-8 weeks with scalable architecture, modern tech stack, and go-to-market support. Expert startup technology consulting.',
  keywords: [
    'MVP development for startups',
    'SaaS development services',
    'rapid MVP development',
    'startup technology consulting',
    'scalable SaaS architecture',
    'product-market fit development',
  ],
  canonical: '/services/saas-mvp-development',
})

export default function SaaSMVPLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
