'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'

const testimonials = [
  {
    quote: "PerfactWorks transformed our startup idea into a production-ready SaaS platform in just 8 weeks. Their expertise in modern architecture and attention to detail is unmatched.",
    author: "Sarah Chen",
    role: "CEO, CloudStream",
    company: "CloudStream Technologies",
    rating: 5,
  },
  {
    quote: "Working with PerfactWorks felt like having an in-house CTO and development team. They understood our business goals and delivered solutions that drove real revenue growth.",
    author: "Michael Rodriguez",
    role: "Founder, FinanceHub",
    company: "FinanceHub Inc",
    rating: 5,
  },
  {
    quote: "The AI-powered features they built increased our user engagement by 200%. Their technical knowledge and strategic thinking are exceptional.",
    author: "Emily Watson",
    role: "CTO, HealthTech Solutions",
    company: "HealthTech Solutions",
    rating: 5,
  },
  {
    quote: "From architecture to deployment, everything was handled professionally. The code quality and documentation they delivered exceeded our expectations.",
    author: "David Kim",
    role: "VP Engineering, RetailCo",
    company: "RetailCo Global",
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <Section>
      <SectionHeader
        subtitle="Testimonials"
        title="What Our Clients Say"
        description="Don't just take our word for it. Hear from the founders and leaders who've partnered with us."
      />
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 md:p-12 relative overflow-hidden"
            >
              {/* Verified Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute top-6 right-6 flex items-center gap-1 px-3 py-1 bg-green-500/20 border border-green-500 rounded-full"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-green-500 text-xs font-bold"
                >
                  ✓
                </motion.span>
                <span className="text-xs font-semibold text-green-500">Verified Client</span>
              </motion.div>

              <Quote className="w-12 h-12 text-primary-500 mb-6" />
              <p className="text-xl md:text-2xl mb-8 text-slate-700 dark:text-slate-300 leading-relaxed">
                "{testimonials[current].quote}"
              </p>
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full animate-pulse" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold m-0.5">
                    {testimonials[current].author.split(' ').map(n => n[0]).join('')}
                  </div>
                </motion.div>
                <div>
                  <div className="font-bold text-lg">{testimonials[current].author}</div>
                  <div className="text-slate-600 dark:text-slate-400">
                    {testimonials[current].role}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-500">
                    {testimonials[current].company}
                  </div>
                </div>
              </div>
              <div className="flex gap-1 mt-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    className="text-yellow-500 text-xl cursor-pointer"
                  >
                    ★
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 glass rounded-full hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === current
                      ? 'w-8 bg-gradient-to-r from-primary-500 to-purple-600'
                      : 'w-2 bg-slate-300 dark:bg-slate-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 glass rounded-full hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </Section>
  )
}
