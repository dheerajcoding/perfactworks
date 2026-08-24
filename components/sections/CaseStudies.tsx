import { ArrowRight } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'

const caseStudies = [
  {
    title: 'mycashbridge - Fintech Loan & Credit Comparison Platform',
    client: 'Vishal Bora (mycashbridge)',
    category: 'Fintech & Banking Compliance',
    description: 'Engineered a PaisaBazaar-like financial portal enabling customers to compare loans, credit cards, and insurance products with bank-grade encryption, instant eligibility calculation, and seamless KYC verification.',
    problem: 'Required a highly secure, scalable, and fully compliant financial comparison portal handling sensitive user KYC, credit scores, and multi-bank API integrations.',
    solution: 'Built a modular microservices platform with 256-bit data encryption, automated eligibility engines, RBI/banking data security compliance, and sub-second response times.',
    technology: 'Next.js 15, Node.js, PostgreSQL, Redis, Bank API Integrations, OAuth2, AWS KMS',
    result: '100% security & compliance audit pass, instant loan matching under 1.2s, automated multi-bank application processing',
    metrics: [
      { label: 'Security & Compliance', value: '100%' },
      { label: 'Loan Match Speed', value: '<1.2s' },
      { label: 'User Rating', value: '4.9/5' },
    ],
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Fintech Security', 'Bank APIs'],
    image: '/images/service-web-saas.png',
  },
  {
    title: 'Reddington Global Consultancy - Brand Website & Advisory Portal',
    client: 'Jordy (Reddington Global Consultancy)',
    category: 'Brand & Corporate Platform',
    description: 'Designed and engineered an international consulting brand platform with modern responsive storytelling, interactive service roadmaps, dynamic case studies, and automated client inquiry routing.',
    problem: 'Needed a world-class digital brand identity to reflect global advisory expertise and attract high-ticket institutional clients.',
    solution: 'Built a bespoke Next.js platform with ultra-smooth micro-interactions, high-speed Core Web Vitals, and lead qualification funnels.',
    technology: 'Next.js 15, Tailwind CSS, Framer Motion, Vercel Edge, EmailJS',
    result: '+180% inbound advisory inquiries, 98+ PageSpeed score, sub-second global page loads',
    metrics: [
      { label: 'Inquiry Growth', value: '+180%' },
      { label: 'PageSpeed Score', value: '98/100' },
      { label: 'Global Load', value: '<800ms' },
    ],
    tags: ['Next.js 15', 'Tailwind', 'Brand Strategy', 'Framer Motion'],
    image: '/images/hero-tech-3d.png',
  },
  {
    title: 'RGcare Foundation - NGO & Community Impact Platform',
    client: 'Jyotsana Bora (RGcare Foundation)',
    category: 'NGO & Social Impact Web Portal',
    description: 'Developed an NGO foundation website featuring transparent community project tracking, verified campaign transparency, donor engagement, and automated receipt generation.',
    problem: 'Required a credible, transparent, and empathetic digital platform to showcase social initiatives, track field programs, and connect with global donors.',
    solution: 'Created an accessible, mobile-first web portal with live program milestones, secure donation pathways, and social proof impact stories.',
    technology: 'React, Next.js, Cloudinary, Payment Gateways, Node.js',
    result: '300% surge in volunteer registrations, transparent community funding tracking, 100% positive donor trust feedback',
    metrics: [
      { label: 'Volunteer Growth', value: '+300%' },
      { label: 'Donor Trust', value: '100%' },
      { label: 'Mobile Speed', value: '99/100' },
    ],
    tags: ['React', 'Next.js', 'NGO Platform', 'Payment Integrations'],
    image: '/images/service-cloud-platform.jpg',
  },
  {
    title: 'Pooja App - Spiritual Booking & Pandit Scheduling Platform',
    client: 'Ishank (Pooja App)',
    category: 'Mobile App & Spiritual Tech',
    description: 'Built a cross-platform mobile application for scheduling spiritual rituals, pandit bookings, custom pooja packages, and live streaming of religious ceremonies with digital payments.',
    problem: 'Devotees faced challenges finding verified pandits and ordering custom ritual samagri on specific auspicious muhurats.',
    solution: 'Engineered a seamless Flutter/React Native mobile app with pan-India pandit verification, calendar scheduling, push notifications, and payment gateways.',
    technology: 'Flutter, Node.js, Firebase, MongoDB, Razorpay, WebRTC Streaming',
    result: '4.8/5 app store rating, 10,000+ ritual bookings fulfilled, 99.9% booking confirmation uptime',
    metrics: [
      { label: 'Ritual Bookings', value: '10K+' },
      { label: 'App Rating', value: '4.8/5' },
      { label: 'Availability', value: '24/7' },
    ],
    tags: ['Flutter', 'Node.js', 'Mobile App', 'Live Streaming'],
    image: '/images/service-mobile-app.jpg',
  },
  {
    title: 'Human Resource Management System',
    client: 'Global Consultancy',
    category: 'Web Application',
    description: 'Developed a complete HRMS solution managing employee records, attendance, payroll, leave management, and performance tracking for 100+ employees.',
    problem: 'Company struggled with manual HR processes, scattered employee data, and time-consuming payroll calculations.',
    solution: 'Built an integrated HRMS with automated attendance tracking, payroll processing, leave management, and performance evaluation modules.',
    technology: 'Java, Spring Boot, Hibernate, MySQL, Microservices architecture, REST APIs',
    result: '100+ employees managed efficiently, 65% increase in HR efficiency, 99.8% payroll accuracy, automated compliance reporting',
    metrics: [
      { label: 'Active Users', value: '100+' },
      { label: 'Efficiency', value: '+65%' },
      { label: 'Accuracy', value: '99.8%' },
    ],
    tags: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Microservices'],
    image: '/images/imagehrms.png',
  },
  {
    title: 'Lead Management System',
    client: 'Group Inc',
    category: 'Web Application',
    description: 'Created a robust lead tracking and management system with automated workflows, pipeline management, and detailed analytics for improved sales conversion.',
    problem: 'Sales team lost leads due to manual tracking, delayed follow-ups, and lack of visibility into the sales pipeline.',
    solution: 'Implemented an intelligent lead management system with automated lead assignment, follow-up reminders, pipeline visualization, and analytics dashboard.',
    technology: 'Next.js, Node.js, PostgreSQL, Chart.js for analytics, WebSocket for real-time notifications',
    result: '1000+ leads tracked efficiently, 40% increase in conversion rate, response time reduced to under 2 minutes',
    metrics: [
      { label: 'Lead Tracking', value: '1000+' },
      { label: 'Conversion', value: '+40%' },
      { label: 'Response Time', value: '<2min' },
    ],
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Chart.js'],
    image: '/images/imageLEAD.png',
  },
  {
    title: 'CA Portal & Financial Tax Automation System',
    client: 'Anil Choudhary (ARS Financial Enterprises)',
    category: 'Finance & Workflow Automation',
    description: 'Designed a comprehensive CA web platform and tax automation system for quality control, client tax document management, and compliance tracking with automated workflows.',
    metrics: [
      { label: 'Compliance', value: '100%' },
      { label: 'Audit Time', value: '-50%' },
      { label: 'Documentation', value: '500+' },
    ],
    tags: ['Java', 'Spring Boot', 'JPA', 'PostgreSQL', 'Maven'],
    image: '/images/imageqms.png',
  },
  {
    title: 'AI Transcript Analyser',
    client: 'Insurance Quality',
    category: 'AI Application',
    description: 'Built an AI-powered transcript analysis tool that automatically extracts insights, sentiment analysis, key topics, and generates summaries from audio/video transcripts.',
    metrics: [
      { label: 'Accuracy', value: '92%' },
      { label: 'Processing', value: '<30s' },
      { label: 'Languages', value: '5+' },
    ],
    tags: ['Python', 'NLP', 'OpenAI', 'React', 'FastAPI'],
    image: '/images/imagetranscript.png',
  },
  {
    title: 'AI Data Analysis Platform',
    client: 'Insurance Quality',
    category: 'AI Application',
    description: 'Developed an intelligent data analysis platform using machine learning to automate data processing, pattern recognition, predictive analytics, and visualization.',
    metrics: [
      { label: 'Accuracy', value: '89%' },
      { label: 'Data Sets', value: '1000+' },
      { label: 'Insights', value: 'Real-time' },
    ],
    tags: ['Python', 'TensorFlow', 'Pandas', 'React', 'D3.js'],
    image: '/images/imageanalyser.png',
  },
]

export default function CaseStudies() {
  return (
    <Section className="bg-slate-50 bg-white">
      <SectionHeader
        subtitle="Case Studies"
        title="Real Results, Real Impact"
        description="See how we've helped businesses transform their technology and achieve measurable success."
      />
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
        {caseStudies.map((study) => (
          <div
            key={study.title}
            className="glass-card p-6 md:p-8 flex flex-col group cursor-pointer relative overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            {/* Success Badge */}
            <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">
              ✓ Success
            </div>

            {/* Image */}
            <div className="h-48 rounded-xl mb-6 relative overflow-hidden bg-slate-100 bg-white group-hover:scale-[1.02] transition-transform duration-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={study.image}
                alt={study.title}
                loading="lazy"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="text-sm text-primary-500 font-semibold mb-2">
                {study.category}
              </div>
              <h3 className="text-xl font-bold mb-2">{study.title}</h3>
              <p className="text-sm text-slate-500 text-slate-500 mb-3">
                {study.client}
              </p>
              <p className="text-slate-600 text-slate-500 mb-6">
                {study.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {study.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="text-center p-2 glass rounded-lg hover:scale-105 transition-transform duration-200"
                  >
                    <div className="text-lg font-bold gradient-text">
                      {metric.value}
                    </div>
                    <div className="text-xs text-slate-500 text-slate-500">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium rounded-lg glass"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="primary" size="lg" href="/contact">
          Start Your Success Story
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </Section>
  )
}

