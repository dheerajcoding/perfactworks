'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, Globe, Calendar, CheckCircle, Shield, Lock, Clock, Sparkles, ArrowRight } from 'lucide-react'

export default function ContactNew() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    service: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', budget: '', service: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 -z-20" />
      
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-[600px] h-[600px] bg-neon-cyan rounded-full blur-[150px] -z-10"
      />
      
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-neon-purple rounded-full blur-[150px] -z-10"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-dark-700/60 backdrop-blur-xl border border-neon-cyan/30 rounded-full"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-4 h-4 text-neon-cyan" />
            </motion.div>
            <span className="text-sm font-semibold text-neon-cyan uppercase tracking-wider">
              Free Consultation
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Let's Build Something
            <span className="block bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Book a free 30-minute consultation. No commitments, just honest advice on how we can help achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Form - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-dark-800/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 md:p-10 shadow-2xl">
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-8 pb-6 border-b border-gray-700/50">
                {[
                  { icon: Shield, text: 'SSL Secured', color: 'text-green-400' },
                  { icon: Lock, text: 'Data Protected', color: 'text-blue-400' },
                  { icon: CheckCircle, text: '24hr Response', color: 'text-neon-cyan' },
                  { icon: Clock, text: 'No Spam Ever', color: 'text-purple-400' }
                ].map((badge, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 bg-dark-700/60 backdrop-blur-sm border border-gray-700/50 rounded-full"
                  >
                    <badge.icon className={`w-4 h-4 ${badge.color}`} />
                    <span className="text-sm font-semibold text-gray-300">{badge.text}</span>
                  </motion.div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                {/* Company & Budget Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Company/Organization
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-700/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Project Budget
                    </label>
                    <motion.select
                      whileFocus={{ scale: 1.01 }}
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-700/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                    >
                      <option value="">Select budget range</option>
                      <option value="10-25k">$10,000 - $25,000</option>
                      <option value="25-50k">$25,000 - $50,000</option>
                      <option value="50-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                      <option value="undecided">Not sure yet</option>
                    </motion.select>
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Service Interested In *
                  </label>
                  <motion.select
                    whileFocus={{ scale: 1.01 }}
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="web-app">Custom Web Application</option>
                    <option value="saas">SaaS & MVP Development</option>
                    <option value="enterprise">Enterprise Systems (HRMS/ERP/CRM)</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="cloud">Cloud & DevOps</option>
                    <option value="ai">AI & Automation</option>
                    <option value="consulting">Technology Consulting</option>
                    <option value="other">Other</option>
                  </motion.select>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-700/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 transition-all resize-none"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 240, 255, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-900 font-bold rounded-xl text-lg flex items-center justify-center gap-3 shadow-lg shadow-neon-cyan/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {status === 'loading' ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="inline-block text-2xl"
                      >
                        ⟳
                      </motion.span>
                      <span>Sending...</span>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring' }}
                        className="text-2xl"
                      >
                        ✓
                      </motion.span>
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <span>Schedule Free Consultation</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-4 bg-green-500/10 border border-green-500/30 rounded-xl"
                  >
                    <p className="text-green-400 font-semibold">
                      🎉 Thank you! We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Sidebar Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* What Happens Next */}
            <div className="bg-dark-800/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-neon-cyan" />
                What Happens Next?
              </h3>
              <div className="space-y-4">
                {[
                  { step: '1', text: 'We review your requirements', time: 'Within 24 hours' },
                  { step: '2', text: '30-min consultation call', time: 'Schedule at your convenience' },
                  { step: '3', text: 'Detailed proposal & roadmap', time: 'Within 48 hours' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-full flex items-center justify-center font-bold text-dark-900">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{item.text}</p>
                      <p className="text-sm text-gray-400">{item.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-dark-800/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Direct Contact</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'hello@perfactworks.online', href: 'mailto:hello@perfactworks.online' },
                  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                  { icon: Globe, label: 'Website', value: 'perfactworks.online', href: 'https://perfactworks.online' }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="p-3 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-xl group-hover:from-neon-cyan/30 group-hover:to-neon-purple/30 transition-all">
                      <item.icon className="w-5 h-5 text-neon-cyan" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">{item.label}</p>
                      <p className="text-white font-semibold group-hover:text-neon-cyan transition-colors">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-dark-800/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-neon-cyan" />
                Office Hours
              </h3>
              <div className="space-y-3">
                {[
                  { day: 'Mon - Fri', hours: '9:00 AM - 6:00 PM' },
                  { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
                  { day: 'Sunday', hours: 'Closed' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-400">{item.day}</span>
                    <span className="text-white font-semibold">{item.hours}</span>
                  </div>
                ))}
                <p className="text-xs text-gray-500 mt-4">* Pacific Standard Time (PST)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
