'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'

const testimonials = [
  {
    quote: "PerfactWorks delivered quality work and stayed committed to our project from start to finish. They were responsive, professional, and delivered exactly what we needed.",
    author: "Sarah Chen",
    role: "CEO, CloudStream",
    company: "CloudStream Technologies",
    rating: 5,
  },
  {
    quote: "Working with PerfactWorks was a great experience. They took time to understand our requirements and built a solid solution that works reliably for our business.",
    author: "Michael Rodriguez",
    role: "Founder, FinanceHub",
    company: "FinanceHub Inc",
    rating: 5,
  },
  {
    quote: "The team was professional, communicative, and delivered quality code. They built features that our users love and provided excellent support throughout the project.",
    author: "Emily Watson",
    role: "CTO, HealthTech Solutions",
    company: "HealthTech Solutions",
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
        subtitle="Client Success"
        title="Trusted by Startups & Enterprises"
        description="See what our clients say about working with us"
      />
      <div className="max-w-4xl mx-auto">
        <div className="relative" style={{ perspective: "2000px" }}>
          {/* Floating Background Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-20 -left-20 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.1, 0.2],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ 
                opacity: 0, 
                x: 300, 
                rotateY: 90,
                scale: 0.8 
              }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                rotateY: 0,
                scale: 1 
              }}
              exit={{ 
                opacity: 0, 
                x: -300, 
                rotateY: -90,
                scale: 0.8 
              }}
              transition={{ 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              className="glass-card p-8 md:p-12 relative overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-purple-500/5 to-pink-500/5 bg-[length:200%_200%]"
              />

              {/* Verified Badge with Pulse */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="absolute top-6 right-6 flex items-center gap-1 px-3 py-1 bg-green-500/20 border border-green-500 rounded-full z-10"
              >
                <motion.span
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 360, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-green-500 text-xs font-bold"
                >
                  ✓
                </motion.span>
                <span className="text-xs font-semibold text-green-500">Verified Client</span>
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 border-2 border-green-500 rounded-full"
                />
              </motion.div>

              {/* Animated Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -90, y: -50 }}
                animate={{ scale: 1, rotate: 0, y: 0 }}
                transition={{ 
                  delay: 0.2, 
                  type: "spring",
                  stiffness: 150 
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <Quote className="w-12 h-12 text-primary-500 mb-6 relative" />
                <motion.div
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-primary-500/30 blur-xl rounded-full"
                />
              </motion.div>
              
              {/* Quote Text with Character Reveal */}
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-slate-700 dark:text-slate-300 leading-relaxed relative z-10"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  "
                </motion.span>
                {testimonials[current].quote.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.4 + (i * 0.03),
                    }}
                    className="inline-block mr-[0.3em]"
                  >
                    {word}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + (testimonials[current].quote.split(' ').length * 0.03) }}
                >
                  "
                </motion.span>
              </motion.p>
              <div className="flex items-center gap-4 relative z-10">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.6, 
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold relative overflow-hidden shadow-2xl"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-white/30 rounded-full"
                  />
                  <span className="relative z-10">
                    {testimonials[current].author.split(' ').map(n => n[0]).join('')}
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.div 
                    className="font-bold text-slate-900 dark:text-white"
                    whileHover={{ x: 5 }}
                  >
                    {testimonials[current].author}
                  </motion.div>
                  <motion.div 
                    className="text-sm text-slate-600 dark:text-slate-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    {testimonials[current].role} • {testimonials[current].company}
                  </motion.div>
                </motion.div>
              </div>

              {/* Star Rating with Sequential Animation */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex gap-1 mt-6 relative z-10"
              >
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.9 + (i * 0.1),
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.3, 
                      rotate: 360,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.span
                      animate={{
                        textShadow: [
                          '0 0 5px rgba(251, 191, 36, 0.5)',
                          '0 0 20px rgba(251, 191, 36, 0.8)',
                          '0 0 5px rgba(251, 191, 36, 0.5)',
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      className="text-yellow-400 text-2xl"
                    >
                      ★
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
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
