import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'Custom HRMS LMS ERP CRM Development Services | Enterprise Software Solutions',
  description: 'Bespoke HRMS, LMS, ERP, and CRM development for enterprises. Custom enterprise system development tailored to your business processes, workflows, and requirements.',
  keywords: [
    'HRMS development',
    'LMS development',
    'ERP development',
    'CRM development',
    'custom enterprise software',
    'enterprise system development',
    'business management software',
  ],
  canonical: '/services/enterprise-systems',
})

export default function EnterpriseSystemsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
