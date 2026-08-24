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

  const formatBudgetRange = useMemo(() => {
    return (min: number, max: number) => {
      const currency = CURRENCY_CONFIG[formData.currency]
      const convertedMin = Math.round(min * currency.rate)
      const convertedMax = Math.round(max * currency.rate)
      return `${currency.symbol}${convertedMin.toLocaleString()} - ${currency.symbol}${convertedMax.toLocaleString()}`
    }
  }, [formData.currency])

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

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      if (autoReplyTemplateId) {
        await emailjs.send(serviceId, autoReplyTemplateId, templateParams, publicKey)
      }

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', currency: 'INR', budget: '', customBudgetMin: '', customBudgetMax: '', service: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error: any) {
      setStatus('error')
      setErrorMessage(error.text || error.message || 'Failed to send message. Please try again.')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const inputClass = "w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-300"
  const labelClass = "block text-sm font-semibold text-slate-600 mb-2"

  return (
    <section className="relative min-h-screen py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-surface-200 to-surface-300 -z-20" />

      {/* Decorative orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 right-20 w-[500px] h-[500px] bg-primary-200 rounded-full blur-[120px] -z-10"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-tech-200 rounded-full blur-[120px] -z-10"
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
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 bg-white/80 backdrop-blur-xl border border-primary-200/50 rounded-full shadow-teal-sm"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-4 h-4 text-primary-500" />
            </motion.div>
            <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">
              Free Consultation
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-slate-800">Let&apos;s Build Something</span>
            <span className="block gradient-text">Extraordinary</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-4">
            Book a free 30-minute consultation. No commitments, just honest advice on how we can help achieve your goals.
          </p>
          <p className="text-base text-slate-400 max-w-3xl mx-auto">
            Talk to our team about web development, app development, or SEO services.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 mt-6 text-sm"
          >
            <div className="flex items-center gap-2 text-primary-600">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Free consultation</span>
            </div>
            <div className="w-1 h-1 bg-slate-300 rounded-full" />
            <div className="flex items-center gap-2 text-tech-600">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Response within 24 hours</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-8 md:p-10">
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-8 pb-6 border-b border-slate-100">
                {[
                  { icon: Shield, text: 'SSL Secured', color: 'text-primary-500' },
                  { icon: Lock, text: 'Data Protected', color: 'text-tech-500' },
                  { icon: CheckCircle, text: '24hr Response', color: 'text-primary-600' },
                  { icon: Clock, text: 'No Spam Ever', color: 'text-tech-600' }
                ].map((badge, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-50/60 border border-primary-100/50 rounded-full"
                  >
                    <badge.icon className={`w-4 h-4 ${badge.color}`} />
                    <span className="text-sm font-semibold text-slate-600">{badge.text}</span>
                  </motion.div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Contact Number *</label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Organization/Designation</label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Company name"
                    />
                  </div>
                </div>

                {/* Currency & Budget */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className={labelClass}>Currency</label>
                    <motion.select
                      whileFocus={{ scale: 1.01 }}
                      name="currency"
                      value={formData.currency}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      {Object.entries(CURRENCY_CONFIG).map(([code, config]) => (
                        <option key={code} value={code}>
                          {config.symbol} {code}
                        </option>
                      ))}
                    </motion.select>
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>Project Budget</label>
                    <motion.select
                      whileFocus={{ scale: 1.01 }}
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={inputClass}
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

                {/* Custom Budget Range */}
                {formData.budget === 'custom' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    <div>
                      <label className={labelClass}>
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
                        className={inputClass}
                        placeholder="Enter minimum amount"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>
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
                        className={inputClass}
                        placeholder="Enter maximum amount"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Service Selection */}
                <div>
                  <label className={labelClass}>Service Interested In *</label>
                  <motion.select
                    whileFocus={{ scale: 1.01 }}
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className={inputClass}
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
                  <label className={labelClass}>Project Details *</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 16px 48px rgba(20, 184, 166, 0.35)' }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-2xl text-lg flex items-center justify-center gap-3 shadow-teal-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
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
                    className="text-center p-4 bg-primary-50 border border-primary-200 rounded-xl"
                  >
                    <p className="text-primary-700 font-semibold">
                      🎉 Thank you! We&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-4 bg-red-50 border border-red-200 rounded-xl"
                  >
                    <p className="text-red-600 font-semibold">
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
            {/* Consultation Visual Showcase Card */}
            <div className="glass-card p-4 rounded-3xl border border-primary-200/80 shadow-teal-md relative overflow-hidden group">
              <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/contact-consultation.jpg"
                  alt="Live 1-on-1 Technology Consultation"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-2.5 right-2.5 text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-primary-700 border border-primary-200 shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Booking Open
                </span>
              </div>
              <div className="px-1 text-left">
                <h4 className="text-sm font-extrabold text-slate-800 mb-1">
                  1-on-1 Strategy & Architecture Call
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Join a direct 30-minute video session with our senior engineers to review technical specs, budgets, and milestones.
                </p>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary-500" />
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
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center font-bold text-white shadow-teal-sm">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-slate-700 font-semibold">{item.text}</p>
                      <p className="text-sm text-slate-400">{item.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Direct Contact</h3>
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
                    <div className="p-3 bg-gradient-to-br from-primary-50 to-tech-50 rounded-xl group-hover:from-primary-100 group-hover:to-tech-100 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">{item.label}</p>
                      <p className="text-slate-700 font-semibold group-hover:text-primary-600 transition-colors">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary-500" />
                Office Hours
              </h3>
              <div className="space-y-3">
                {[
                  { day: 'Mon - Fri', hours: '9:00 AM - 6:00 PM' },
                  { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
                  { day: 'Sunday', hours: 'Closed' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-slate-400">{item.day}</span>
                    <span className="text-slate-700 font-semibold">{item.hours}</span>
                  </div>
                ))}
                <p className="text-xs text-slate-400 mt-4">* Indian Standard Time (IST)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
