'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Code,
  Smartphone,
  Rocket,
  Building2,
  TrendingUp,
  Clapperboard,
} from 'lucide-react'

interface SubService {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  desc: string
  badge?: string
}

const servicesList: SubService[] = [
  {
    name: 'Full-Stack Web Development',
    href: '/services/web-development',
    icon: Code,
    desc: 'Next.js 15, React, Node.js & high-speed cloud platforms.',
    badge: 'Popular',
  },
  {
    name: 'Mobile App Development',
    href: '/services/app-development',
    icon: Smartphone,
    desc: 'Fluid 60 FPS iOS & Android cross-platform apps.',
  },
  {
    name: 'SaaS & MVP Development',
    href: '/services/saas-mvp-development',
    icon: Rocket,
    desc: 'Fast 6–8 week go-to-market MVP builds for founders.',
    badge: 'Fast Track',
  },
  {
    name: 'Custom Enterprise Systems',
    href: '/services/enterprise-systems',
    icon: Building2,
    desc: 'Tailor-made HRMS, ERP, LMS & operational CRM workflows.',
  },
  {
    name: 'Technical SEO & Performance',
    href: '/services/seo-services',
    icon: TrendingUp,
    desc: 'Core Web Vitals 99+, schema engineering & organic growth.',
  },
  {
    name: 'Video Editing & High Motion',
    href: '/services/graphic-motion-design',
    icon: Sparkles,
    desc: '4K video editing, Adobe After Effects high-motion VFX, 3D & UI/UX.',
    badge: 'Creative',
  },
]

const navItems = [
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Process', href: '/process' },
  { name: 'About', href: '/about' },
  { name: 'Students', href: '/students', badge: 'Projects' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)
  const pathname = usePathname()
  const servicesDropdownRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 90) {
        // Scrolling down: hide header
        setHidden(true)
        setServicesOpen(false)
      } else {
        // Scrolling up or top: show header
        setHidden(false)
      }

      setScrolled(currentScrollY > 20)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
    setServicesOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-out ${
        hidden && !isOpen
          ? '-translate-y-full opacity-0 pointer-events-none'
          : 'translate-y-0 opacity-100 pointer-events-auto'
      } ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-primary-100 shadow-[0_4px_20px_-4px_rgba(20,184,166,0.1)] py-2'
          : 'bg-white/90 backdrop-blur-lg border-b border-primary-100/50 py-2.5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          {/* Brand Logo - Bold, Crisp and Perfectly Proportioned */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="PerfactWorks Logo"
              fetchPriority="high"
              style={{
                height: '56px',
                width: 'auto',
              }}
              className="h-10 sm:h-12 md:h-13 lg:h-14 xl:h-[56px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
            />
          </Link>

          {/* Desktop Navigation - Cleanly active at xl (1280px+) */}
          <nav
            className="hidden xl:flex items-center gap-1.5 2xl:gap-3 flex-shrink-0"
            onMouseLeave={() => setHoveredNav(null)}
          >
            {/* Services Dropdown */}
            <div
              ref={servicesDropdownRef}
              className="relative flex-shrink-0"
              onMouseEnter={() => {
                setServicesOpen(true)
                setHoveredNav('services')
              }}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-colors ${
                  pathname.startsWith('/services')
                    ? 'text-primary-700 font-extrabold'
                    : 'text-slate-700 hover:text-primary-600'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                    servicesOpen ? 'rotate-180 text-primary-600' : 'text-slate-400'
                  }`}
                />
              </Link>

              {/* Mega Dropdown Panel */}
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-white rounded-3xl border border-primary-200/80 shadow-2xl p-4 grid grid-cols-1 gap-2 z-50"
                  >
                    <div className="px-3 py-1.5 border-b border-primary-100 flex items-center justify-between text-xs font-bold text-primary-700">
                      <span>Engineering Capabilities</span>
                      <Link
                        href="/services"
                        className="text-primary-600 hover:underline flex items-center gap-1"
                      >
                        All Services <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-1.5 pt-1">
                      {servicesList.map((srv) => {
                        const Icon = srv.icon
                        const isCurrent = pathname === srv.href
                        return (
                          <Link
                            key={srv.href}
                            href={srv.href}
                            className={`flex items-start gap-3.5 p-2.5 rounded-2xl transition-all ${
                              isCurrent
                                ? 'bg-primary-50 text-primary-700 font-bold border border-primary-200'
                                : 'hover:bg-surface-100 text-slate-700'
                            }`}
                          >
                            <div className="p-2 rounded-xl bg-primary-100 text-primary-700 flex-shrink-0 mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0 text-left">
                              <div className="flex items-center gap-2">
                                <p className="text-xs font-bold text-slate-800 truncate">{srv.name}</p>
                                {srv.badge && (
                                  <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-md bg-gradient-to-r from-primary-500 to-tech-500 text-white">
                                    {srv.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{srv.desc}</p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Standard Nav Items with Guaranteed Single-Line Wrapping */}
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoveredNav(item.name)}
                  className={`relative px-3 py-2 rounded-xl text-sm font-bold whitespace-nowrap flex-shrink-0 transition-colors flex items-center ${
                    isActive ? 'text-primary-700 font-extrabold' : 'text-slate-700 hover:text-primary-600'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap">
                    <span className="whitespace-nowrap">{item.name}</span>
                    {item.badge && (
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-gradient-to-r from-primary-500 to-tech-500 text-white shadow-teal-sm whitespace-nowrap">
                        {item.badge}
                      </span>
                    )}
                  </span>
                </Link>
              )
            })}
          </nav>

          {/* Right CTA Section */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Live Availability Badge - Visible on wide screens */}
            <div className="hidden 2xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50/80 border border-primary-200 text-xs font-bold text-primary-800 whitespace-nowrap flex-shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for New Projects</span>
            </div>

            {/* CTA Button */}
            <Link href="/contact" className="hidden sm:inline-block flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(20, 184, 166, 0.3)' }}
                whileTap={{ scale: 0.97 }}
                className="px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-teal-sm hover:from-primary-600 hover:to-primary-700 transition-all whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 flex-shrink-0" />
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </motion.button>
            </Link>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-700 hover:bg-surface-100 border border-primary-100 transition-colors flex-shrink-0"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-white/98 backdrop-blur-2xl border-t border-primary-100 mt-2 px-6 py-5 space-y-4 shadow-xl overflow-y-auto max-h-[85vh]"
          >
            <div className="space-y-1">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-primary-700 mb-2">
                Services
              </p>
              {servicesList.map((srv) => {
                const Icon = srv.icon
                return (
                  <Link
                    key={srv.href}
                    href={srv.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary-50 text-slate-800 text-sm font-semibold transition-colors"
                  >
                    <Icon className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    <span>{srv.name}</span>
                  </Link>
                )
              })}
            </div>

            <div className="pt-2 border-t border-primary-100 space-y-1">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-primary-700 mb-2">
                Company & Academic
              </p>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-primary-50 text-slate-800 text-sm font-semibold transition-colors"
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary-100 text-primary-700">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-primary-100 sm:hidden">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-teal-md">
                  <Sparkles className="w-4 h-4" />
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
