'use client'

import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import Button from './ui/Button'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Process', href: '/process' },
  { name: 'About', href: '/about' },
  { name: 'Students', href: '/students' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastYRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setHidden(y > lastYRef.current && y > 150)
      setScrolled(y > 20)
      lastYRef.current = y
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled
          ? 'bg-dark-800/80 backdrop-blur-xl border-b border-neon-cyan/20 shadow-lg shadow-neon-cyan/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="PerfactWorks Logo"
              fetchPriority="high"
              style={{ height: '120px', width: 'auto' }}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-neon-cyan transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(0,240,255,0.6)]" />
              </Link>
            ))}
          </div>

          {/* CTA & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-900 font-bold rounded-lg shadow-lg shadow-neon-cyan/30 hover:shadow-neon-cyan/50 hover:scale-105 transition-all duration-200"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 z-50"
            >
              <div
                className="absolute inset-0 bg-dark-900/80 backdrop-blur-xl"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative mx-4 mt-20 rounded-2xl bg-dark-800/90 border border-neon-cyan/20 shadow-2xl p-6"
              >
                <div className="space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-2 text-slate-100 hover:text-neon-cyan transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button variant="primary" size="md" href="/contact" className="w-full">
                    Book a Call
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
