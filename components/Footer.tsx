'use client'

import { MessageSquare, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Sparkles, ShieldCheck, Heart, Send, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

const footerLinks = {
  Services: [
    { name: 'Full-Stack Web Apps', href: '/services/web-development' },
    { name: 'Mobile App Development', href: '/services/app-development' },
    { name: 'SaaS MVP Development', href: '/services/saas-mvp-development' },
    { name: 'Custom Enterprise Systems', href: '/services/enterprise-systems' },
    { name: 'Technical SEO & Speed', href: '/services/seo-services' },
    { name: 'Graphic Design & Motion', href: '/services/graphic-motion-design' },
  ],
  Solutions: [
    { name: 'Fintech & Loan Portals', href: '/case-studies' },
    { name: 'CA & Tax Automation', href: '/case-studies' },
    { name: 'Corporate Brand Websites', href: '/case-studies' },
    { name: 'NGO & Community Tech', href: '/case-studies' },
    { name: 'Student Mentorship & IEEE', href: '/students' },
  ],
  Company: [
    { name: 'About PerfactWorks', href: '/about' },
    { name: 'Client Case Studies', href: '/case-studies' },
    { name: 'Development Process', href: '/process' },
    { name: 'Book Consultation', href: '/contact' },
    { name: 'Academic Projects', href: '/students' },
  ],
}

const socials = [
  { icon: Mail, href: 'mailto:worksperfact@gmail.com', label: 'Email', name: 'Email' },
  { icon: Phone, href: 'tel:+919211465772', label: 'Phone', name: 'Call Us' },
  { icon: MessageSquare, href: 'https://wa.me/919211465772', label: 'WhatsApp', name: 'WhatsApp' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', name: 'LinkedIn' },
]

export default function Footer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <footer ref={ref} className="relative bg-gradient-to-b from-white via-surface-100 to-surface-200 border-t border-primary-200/70 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-tech-200/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container-custom pt-16 pb-12">
        {/* Top Newsletter / Quick Consultation Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 md:p-8 rounded-3xl border border-primary-200/80 shadow-teal-lg mb-16 relative overflow-hidden"
        >
          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 text-left space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-xs font-bold text-primary-700">
                <Sparkles className="w-3.5 h-3.5 text-primary-500" />
                <span>Stay Ahead in Tech</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800">
                Subscribe for Tech Insights & Architecture Case Studies
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Get monthly deep dives on modern full-stack architectures, high-conversion design patterns, and startup tech strategies.
              </p>
            </div>

            <div className="md:col-span-5">
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  placeholder="Enter your work email..."
                  className="w-full sm:flex-1 px-4 py-3 bg-white border border-primary-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/40 shadow-sm"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-1.5 shadow-teal-sm hover:from-primary-600 hover:to-primary-700 transition-all flex-shrink-0"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Links & Brand Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-primary-100/80">
          {/* Brand & Direct Connect Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 text-left space-y-4"
          >
            <Link href="/" className="inline-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="PerfactWorks Logo"
                loading="lazy"
                style={{ height: '92px', width: 'auto' }}
                className="h-16 sm:h-20 md:h-[92px] w-auto object-contain drop-shadow-sm"
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              Engineering perfection into every product. We partner with founders, fintechs, and enterprises to build scalable web applications, mobile platforms, and automated business workflows.
            </p>

            {/* Direct Contact Details */}
            <div className="space-y-2 pt-1 text-xs sm:text-sm text-slate-600 font-medium">
              <a href="mailto:worksperfact@gmail.com" className="flex items-center gap-2 hover:text-primary-600 transition-colors">
                <Mail className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <span>worksperfact@gmail.com</span>
              </a>
              <a href="tel:+919211465772" className="flex items-center gap-2 hover:text-primary-600 transition-colors">
                <Phone className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <span>+91 92114 65772 / +91 99996 31770</span>
              </a>
            </div>

            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Systems Operational • 99.9% Uptime</span>
            </div>
          </motion.div>

          {/* Navigation Columns */}
          {Object.entries(footerLinks).map(([category, links], catI) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (catI + 1) }}
              className="lg:col-span-2 text-left"
            >
              <h4 className="font-extrabold text-slate-800 mb-4 text-xs uppercase tracking-wider text-primary-700">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-600 hover:text-primary-600 transition-colors text-xs sm:text-sm flex items-center gap-1 group font-medium"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social Connect & Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2 text-left space-y-4"
          >
            <h4 className="font-extrabold text-slate-800 mb-4 text-xs uppercase tracking-wider text-primary-700">
              Connect With Us
            </h4>

            <div className="grid grid-cols-2 gap-2">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -2 }}
                  className="p-2.5 rounded-xl bg-white border border-primary-100/80 hover:border-primary-300 text-slate-700 hover:text-primary-600 text-xs font-semibold flex items-center gap-2 shadow-teal-sm transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-primary-500" />
                  <span className="truncate">{social.name}</span>
                </motion.a>
              ))}
            </div>

            <div className="p-3 bg-primary-50/70 border border-primary-200/60 rounded-2xl text-[11px] text-slate-600 space-y-1">
              <div className="flex items-center gap-1 font-bold text-primary-800">
                <ShieldCheck className="w-3.5 h-3.5 text-primary-600" />
                <span>NDA & IP Protected</span>
              </div>
              <p className="text-[10px] text-slate-500">
                100% code ownership and full repository handover on delivery.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar: Copyright, Made with Love & Legal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500"
        >
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} PERFACTWORKS. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-1 font-medium text-slate-600">
            <span>Built with precision for High-Impact Businesses</span>
          </div>

          <div className="flex gap-5 font-medium">
            <Link href="/contact" className="hover:text-primary-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-primary-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-primary-600 transition-colors">
              Security
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
