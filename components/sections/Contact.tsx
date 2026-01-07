'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Shield, Lock, CheckCircle } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import Card from '../ui/Card'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', service: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <Section className="bg-slate-50 dark:bg-slate-900/50" id="contact">
      <SectionHeader
        subtitle="Start Your Project"
        title="Book a Free Consultation—No Strings Attached"
        description="Let's discuss your project requirements, timeline, and how we can help you achieve your business goals. Typical response time: Within 24 hours."
      />
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <Card hover={false}>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'hello@perfactworks.online',
                  href: 'mailto:hello@perfactworks.online',
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+1 (555) 123-4567',
                  href: 'tel:+15551234567',
                },
                {
                  icon: MapPin,
                  label: 'Office',
                  value: 'San Francisco, CA, USA',
                  href: '#',
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {item.label}
                      </div>
                      <div className="font-semibold group-hover:text-primary-500 transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </Card>

          <Card hover={false}>
            <h3 className="text-xl font-bold mb-4">Office Hours</h3>
            <div className="space-y-2 text-slate-600 dark:text-slate-400">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-semibold">9:00 AM - 6:00 PM PST</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-semibold">10:00 AM - 4:00 PM PST</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-semibold">Closed</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <Card hover={false}>
          {/* Trust Signals */}
          <div className="flex flex-wrap gap-3 mb-6 pb-6 border-b border-slate-200 dark:border-slate-700">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-3 py-2 glass rounded-full"
            >
              <Shield className="w-4 h-4 text-green-500" />
              <span className="text-xs font-semibold">No Spam—Ever</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-3 py-2 glass rounded-full"
            >
              <Lock className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-semibold">Your Data is Private</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-3 py-2 glass rounded-full"
            >
              <CheckCircle className="w-4 h-4 text-primary-500" />
              <span className="text-xs font-semibold">24hr Response Time</span>
            </motion.div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">What Happens Next?</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-primary-500 font-bold">1.</span>
                <span>We'll review your requirements within 24 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 font-bold">2.</span>
                <span>Schedule a free 30-min consultation call</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 font-bold">3.</span>
                <span>Receive a detailed proposal with timeline & pricing</span>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-slate-800"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-slate-800"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-slate-800"
                placeholder="Your Company Name"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-semibold mb-2">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-slate-800"
              >
                <option value="">Select a service</option>
                <option value="web-development">Custom Web Application Development</option>
                <option value="saas-mvp">SaaS & MVP Development</option>
                <option value="enterprise">Custom Enterprise Systems (HRMS/LMS/ERP/CRM)</option>
                <option value="cloud-devops">Cloud Deployment & DevOps</option>
                <option value="ai-automation">AI & Business Automation</option>
                <option value="consulting">Technology Consulting</option>
                <option value="other">Other</option>
                <option value="consulting">Technology Consulting</option>
                <option value="ai">AI & Automation</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile Development</option>
                <option value="cloud">Cloud & DevOps</option>
                <option value="security">Cybersecurity</option>
                <option value="saas">SaaS Development</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-slate-800 resize-none"
                placeholder="Tell us about your project, goals, and timeline..."
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full relative overflow-hidden"
            >
              {status === 'loading' ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="inline-block"
                  >
                    ⟳
                  </motion.span>
                  <span className="ml-2">Sending...</span>
                </>
              ) : status === 'success' ? (
                <>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                  >
                    ✓
                  </motion.span>
                  <span className="ml-2">Message Sent!</span>
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </Button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-green-600 dark:text-green-400"
              >
                Thanks! We'll get back to you within 24 hours.
              </motion.p>
            )}
          </form>
        </Card>
      </div>

      {/* Newsletter */}
      <Card hover={false} className="mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Get the latest insights, case studies, and tech trends delivered to your inbox.
            </p>
          </div>
          <form className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-64 px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-slate-800"
            />
            <Button type="submit" variant="primary" size="md">
              Subscribe
            </Button>
          </form>
        </div>
      </Card>
    </Section>
  )
}
