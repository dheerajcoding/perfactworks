'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, Sparkles, CheckCircle2, ShieldCheck, ArrowUpRight, Lock, HeartHandshake } from 'lucide-react'
import Section from '../ui/Section'

const realClients = [
  {
    name: 'Vishal Bora (mycashbridge)',
    project: 'Financial Comparison & Loan Portal (PaisaBazaar-like)',
    category: 'Fintech & Banking Security',
    logo: 'MCB',
    color: 'from-blue-600 to-teal-500',
    tag: 'Full Security & Compliances',
    compliance: 'Bank-Grade SSL • KYC',
  },
  {
    name: 'Jordy (Reddington Global Consultancy)',
    project: 'Global Brand Website & Corporate Advisory Portal',
    category: 'Brand & Consulting',
    logo: 'RGC',
    color: 'from-teal-500 to-cyan-500',
    tag: 'Corporate Brand Platform',
    compliance: 'High-Impact Branding',
  },
  {
    name: 'Jyotsana Bora (RGcare Foundation)',
    project: 'NGO Foundation & Community Impact Web Portal',
    category: 'NGO & Social Impact',
    logo: 'RGC',
    color: 'from-emerald-500 to-teal-500',
    tag: 'NGO Web Platform',
    compliance: 'Non-Profit Verified',
  },
  {
    name: 'Anil Choudhary (ARS Financial Enterprises)',
    project: 'CA Website & Financial Tax Automation System',
    category: 'Finance & CA Portal',
    logo: 'ARS',
    color: 'from-cyan-500 to-blue-500',
    tag: 'CA Web & Automations',
    compliance: 'Automated Tax Workflow',
  },
  {
    name: 'Giriraj Saboo (SAS Aarthik Samadhan LLP)',
    project: 'Business Workflow Automation & Financial Systems',
    category: 'Operations & Financial Tech',
    logo: 'SAS',
    color: 'from-blue-500 to-teal-500',
    tag: 'Workflow Automation',
    compliance: 'Automated Pipelines',
  },
  {
    name: 'INDIFONE (Client Stellard)',
    project: 'Telecom & Web Platform for Client Stellard',
    category: 'Enterprise Platform',
    logo: 'ST',
    color: 'from-primary-500 to-tech-500',
    tag: 'Client Stellard Web',
    compliance: 'Enterprise Scale',
  },
  {
    name: 'Ishank (Pooja App)',
    project: 'Pooja Mobile App (Rituals, Pandit Booking & Spiritual Services)',
    category: 'Mobile App & Spiritual Tech',
    logo: 'PA',
    color: 'from-amber-500 to-primary-500',
    tag: 'Pooja App for Ishank',
    compliance: 'iOS & Android Shipped',
  },
]

export default function TrustedBy() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })

  return (
    <Section className="py-16 bg-gradient-to-b from-white via-surface-200/50 to-white">
      <div ref={ref} className="text-center max-w-7xl mx-auto">
        {/* Top Trust Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
          <p className="text-xs md:text-sm font-bold text-primary-700 uppercase tracking-widest">
            Delivered Results & Real Client Impact
          </p>
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 mb-10"
        >
          Trusted by <span className="gradient-text">Brands, Fintechs & Foundations</span>
        </motion.h3>

        {/* Real Clients Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {realClients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * i }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(20, 184, 166, 0.2)' }}
              className="glass-card p-5 rounded-3xl border border-primary-100/80 text-left flex flex-col justify-between relative overflow-hidden group transition-all duration-300"
            >
              {/* Corner Ambient Glow */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${client.color} opacity-10 group-hover:opacity-20 rounded-bl-full transition-opacity duration-400 pointer-events-none`} />

              <div>
                {/* Header with Monogram Logo and Tag */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary-50 to-tech-50 border border-primary-200/80 flex items-center justify-center shadow-teal-sm group-hover:scale-105 transition-transform">
                    <span className="gradient-text font-black text-xs">{client.logo}</span>
                  </div>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-primary-50 text-primary-700 border border-primary-200/60 truncate max-w-[140px]">
                    {client.category}
                  </span>
                </div>

                {/* Client Name */}
                <h4 className="text-sm font-bold text-slate-800 group-hover:text-primary-600 transition-colors mb-1 line-clamp-1">
                  {client.name}
                </h4>

                {/* Project Scope */}
                <p className="text-xs font-semibold text-slate-500 mb-3 leading-relaxed line-clamp-2">
                  {client.project}
                </p>
              </div>

              {/* Bottom Verified Badge */}
              <div className="pt-2.5 border-t border-primary-100/60 flex items-center justify-between text-[11px] font-semibold text-slate-600">
                <span className="flex items-center gap-1 text-primary-600">
                  <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                  <span className="text-[10px] font-bold">{client.compliance}</span>
                </span>
                <span className="text-[9px] text-slate-400 font-mono">Shipped</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
