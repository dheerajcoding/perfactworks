'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, Globe, Calendar, CheckCircle, Shield, Lock, Clock, Sparkles, ArrowRight } from 'lucide-react'
import emailjs from '@emailjs/browser'

// Currency conversion rates (base: INR)
const CURRENCY_CONFIG = {
  INR: { symbol: '₹', rate: 1, name: 'Indian Rupee' },
  USD: { symbol: '$', rate: 0.012, name: 'US Dollar' },
  EUR: { symbol: '€', rate: 0.011, name: 'Euro' },
  GBP: { symbol: '£', rate: 0.0095, name: 'British Pound' },
  AUD: { symbol: 'A$', rate: 0.018, name: 'Australian Dollar' },
  CAD: { symbol: 'C$', rate: 0.016, name: 'Canadian Dollar' },
}

type CurrencyCode = keyof typeof CURRENCY_CONFIG

// Budget ranges in INR
const BUDGET_RANGES_INR = [
  { id: '1k-2k', min: 1000, max: 2000 },
  { id: '2k-5k', min: 2000, max: 5000 },
  { id: '5k-15k', min: 5000, max: 15000 },
  { id: '15k-30k', min: 15000, max: 30000 },
  { id: '30k-50k', min: 30000, max: 50000 },
  { id: '50k-80k', min: 50000, max: 80000 },
  { id: 'custom', min: 0, max: 0, isCustom: true },
]

export default function ContactNew() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    currency: 'INR' as CurrencyCode,
    budget: '',
    customBudgetMin: '',
    customBudgetMax: '',
    service: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Convert INR amounts to selected currency
  const formatBudgetRange = useMemo(() => {
    return (min: number, max: number) => {
      const currency = CURRENCY_CONFIG[formData.currency]
      const convertedMin = Math.round(min * currency.rate)
      const convertedMax = Math.round(max * currency.rate)
      return `${currency.symbol}${convertedMin.toLocaleString()} - ${currency.symbol}${convertedMax.toLocaleString()}`
    }
  }, [formData.currency])

  // Get converted budget ranges based on selected currency
  const budgetRanges = useMemo(() => {
    return BUDGET_RANGES_INR.map(range => {
      if (range.isCustom) {
        return { ...range, label: 'Custom Range' }
      }
      return {
        ...range,
        label: formatBudgetRange(range.min, range.max)
      }
    })
  }, [formatBudgetRange])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      // EmailJS configuration from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const autoReplyTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_AUTOREPLY_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.')
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        currency: formData.currency,
        budget: formData.budget === 'custom' 
          ? `Custom: ${CURRENCY_CONFIG[formData.currency].symbol}${formData.customBudgetMin} - ${CURRENCY_CONFIG[formData.currency].symbol}${formData.customBudgetMax}`
          : (budgetRanges.find(r => r.id === formData.budget)?.label || 'Not specified'),
        service: formData.service,
        message: formData.message,
        to_name: 'PerfactWorks Team',
      }

      // Send admin notification email
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      // Send auto-reply to customer if template ID is configured
      if (autoReplyTemplateId) {
        await emailjs.send(
          serviceId,
          autoReplyTemplateId,
          templateParams,
          publicKey
        )
      }

      console.log('Emails sent successfully')
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', currency: 'INR', budget: '', customBudgetMin: '', customBudgetMax: '', service: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error: any) {
      console.error('Email send failed:', error)
      setStatus('error')
      setErrorMessage(error.text || error.message || 'Failed to send message. Please try again.')
      setTimeout(() => setStatus('idle'), 5000)
    }
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
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            Book a free 30-minute consultation. No commitments, just honest advice on how we can help achieve your goals.
          </p>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            Talk to our team about web development, app development, or SEO services. We work with India and global clients to deliver
            performance-first digital products and measurable growth.
          </p>
          
          {/* Conversion Boost Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 text-sm md:text-base"
          >
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Free consultation</span>
            </div>
            <div className="w-1 h-1 bg-gray-500 rounded-full" />
            <div className="flex items-center gap-2 text-neon-cyan">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Response within 24 hours</span>
            </div>
          </motion.div>
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
                      placeholder=""
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
                      placeholder=""
                    />
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Contact Number *
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Organization/Designation
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-700/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                      placeholder=""
                    />
                  </div>
                </div>

                {/* Currency & Budget Row */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Currency
                    </label>
                    <motion.select
                      whileFocus={{ scale: 1.01 }}
                      name="currency"
                      value={formData.currency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-700/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                    >
                      {Object.entries(CURRENCY_CONFIG).map(([code, config]) => (
                        <option key={code} value={code}>
                          {config.symbol} {code}
                        </option>
                      ))}
                    </motion.select>
                  </div>
                  <div className="md:col-span-2">
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
                      {budgetRanges.map((range) => (
                        <option key={range.id} value={range.id}>
                          {range.label}
                        </option>
                      ))}
                    </motion.select>
                  </div>
                </div>

                {/* Custom Budget Range - Shows only when "Custom Range" is selected */}
                {formData.budget === 'custom' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Minimum Budget ({CURRENCY_CONFIG[formData.currency].symbol}) *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="number"
                        name="customBudgetMin"
                        value={formData.customBudgetMin}
                        onChange={handleChange}
                        required
                        min="0"
                        className="w-full px-4 py-3 bg-dark-700/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                        placeholder="Enter minimum amount"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Maximum Budget ({CURRENCY_CONFIG[formData.currency].symbol}) *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="number"
                        name="customBudgetMax"
                        value={formData.customBudgetMax}
                        onChange={handleChange}
                        required
                        min="0"
                        className="w-full px-4 py-3 bg-dark-700/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                        placeholder="Enter maximum amount"
                      />
                    </div>
                  </motion.div>
                )}

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
                    <option value="student-project">Student Project</option>
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
                    placeholder=""
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

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-4 bg-red-500/10 border border-red-500/30 rounded-xl"
                  >
                    <p className="text-red-400 font-semibold">
                      ❌ {errorMessage}
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
                  { icon: Mail, label: 'Email', value: 'worksperfact@gmail.com', href: 'mailto:worksperfact@gmail.com' },
                  { icon: Phone, label: 'Phone', value: '+91 92114 65772', href: 'tel:+919211465772' },
                  { icon: Phone, label: 'Phone', value: '+91 99996 31770', href: 'tel:+919999631770' },
                  { icon: Globe, label: 'Website', value: 'perfactworks.com', href: 'https://perfactworks.com' }
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
