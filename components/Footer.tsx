'use client'

import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const footerLinks = {
  Services: [
    { name: 'Technology Consulting', href: '/services' },
    { name: 'AI & Automation', href: '/services' },
    { name: 'Web Development', href: '/services' },
    { name: 'Mobile Development', href: '/services' },
    { name: 'Cloud & DevOps', href: '/services' },
    { name: 'Cybersecurity', href: '/services' },
  ],
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Our Process', href: '/process' },
    { name: 'Blog', href: '/' },
    { name: 'Careers', href: '/contact' },
  ],
  Resources: [
    { name: 'Documentation', href: '/' },
    { name: 'API Reference', href: '/' },
    { name: 'Support Center', href: '/contact' },
    { name: 'Privacy Policy', href: '/' },
    { name: 'Terms of Service', href: '/' },
  ],
}

const socials = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:worksperfact@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-custom py-12 md:py-16">
        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block text-2xl font-bold gradient-text mb-4">
              PERFACTWORKS
            </a>
            <p className="text-slate-400 mb-6 max-w-md">
              Engineering Perfection in Every Solution. Your trusted technology partner for
              building scalable, secure, and innovative digital products.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} PERFACTWORKS. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
