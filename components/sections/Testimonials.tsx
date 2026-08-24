'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'

const testimonials = [
  {
    quote: "PerfactWorks built our financial portal 'mycashbridge' (similar to PaisaBazaar) with end-to-end encryption, strict KYC compliance, and automated loan comparison algorithms. The security architecture and smooth UI have earned our users' and banking partners' absolute trust.",
    author: "Vishal Bora",
    role: "Founder & CEO",
    company: "mycashbridge Financial Services",
    rating: 5,
  },
  {
    quote: "The brand website crafted by PerfactWorks for Reddington Global Consultancy perfectly captures our premium international advisory standards. The sleek motion design, ultra-fast load times, and structured presentation elevated our client conversions immediately.",
    author: "Jordy",
    role: "Managing Director",
    company: "Reddington Global Consultancy",
    rating: 5,
  },
  {
    quote: "PerfactWorks built our NGO foundation website for RGcare Foundation with empathy, beautiful donor interfaces, and transparent community project tracking. It has helped us connect with donors worldwide and amplify our social mission.",
    author: "Jyotsana Bora",
    role: "Trustee & Founder",
    company: "RGcare Foundation",
    rating: 5,
  },
  {
    quote: "PerfactWorks built our CA firm website and automated our client tax filing workflows seamlessly. The attention to detail, fast communication, and clean architecture saved our practice countless hours every month.",
    author: "Anil Choudhary",
    role: "Chartered Accountant",
    company: "ARS Financial Enterprises",
    rating: 5,
  },
  {
    quote: "They developed a custom business workflow automation system for our operations. The automated pipelines eliminated manual bottlenecks and gave us real-time visibility across our team's work.",
    author: "Giriraj Saboo",
    role: "Founder & Director",
    company: "SAS Aarthik Samadhan LLP",
    rating: 5,
  },
  {
    quote: "Working with PerfactWorks for our client Stellard was an outstanding experience. They built a scalable, high-performance web platform on a tight deadline with zero compromises on quality.",
    author: "INDIFONE Team",
    role: "Project Lead for Stellard",
    company: "INDIFONE",
    rating: 5,
  },
  {
    quote: "PerfactWorks engineered our 'Pooja App' for spiritual rituals, online puja booking, and pandit scheduling with a smooth mobile interface, instant booking notifications, and reliable payment integration. The launch was flawless!",
    author: "Ishank",
    role: "Founder & Product Creator",
    company: "Pooja Mobile App",
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <Section className="bg-surface-200/30">
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
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -top-20 -left-20 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.12, 0.06, 0.12],
            }}
            transition={{ duration: 18, repeat: Infinity }}
            className="absolute -bottom-20 -right-20 w-64 h-64 bg-tech-400/20 rounded-full blur-3xl"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{
                opacity: 0,
                x: 200,
                rotateY: 45,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                x: 0,
                rotateY: 0,
                scale: 1
              }}
              exit={{
                opacity: 0,
                x: -200,
                rotateY: -45,
                scale: 0.9
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 120
              }}
              className="glass-card p-8 md:p-12 relative overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white to-tech-50/50 bg-[length:200%_200%]"
              />

              {/* Verified Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1.5 bg-primary-50 border border-primary-200 rounded-full z-10"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-primary-500 text-xs font-bold"
                >
                  ✓
                </motion.span>
                <span className="text-xs font-semibold text-primary-600">Verified Client</span>
              </motion.div>

              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <Quote className="w-12 h-12 text-primary-400 mb-6 relative" />
              </motion.div>

              {/* Quote Text */}
              <motion.p
                className="text-xl md:text-2xl mb-8 text-slate-700 leading-relaxed relative z-10"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  &ldquo;
                </motion.span>
                {testimonials[current].quote.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: 0.4 + (i * 0.025),
                    }}
                    className="inline-block mr-[0.3em]"
                  >
                    {word}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + (testimonials[current].quote.split(' ').length * 0.025) }}
                >
                  &rdquo;
                </motion.span>
              </motion.p>

              {/* Author */}
              <div className="flex items-center gap-4 relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xl font-bold shadow-teal-md"
                >
                  {testimonials[current].author.split(' ').map(n => n[0]).join('')}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="font-bold text-slate-800">
                    {testimonials[current].author}
                  </div>
                  <div className="text-sm text-slate-500">
                    {testimonials[current].role} • {testimonials[current].company}
                  </div>
                </motion.div>
              </div>

              {/* Star Rating */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex gap-1 mt-6 relative z-10"
              >
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.8 + (i * 0.08),
                      type: "spring",
                      stiffness: 200
                    }}
                    className="text-amber-400 text-2xl"
                  >
                    ★
                  </motion.span>
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
              className="p-3 rounded-full bg-white border border-primary-100 shadow-teal-sm hover:shadow-teal-md hover:border-primary-200 transition-all duration-300 text-primary-600"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrent(index)}
                  whileHover={{ scale: 1.2 }}
                  className={`h-2.5 rounded-full transition-all duration-400 ${
                    index === current
                      ? 'w-8 bg-gradient-to-r from-primary-500 to-tech-500'
                      : 'w-2.5 bg-primary-200 hover:bg-primary-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white border border-primary-100 shadow-teal-sm hover:shadow-teal-md hover:border-primary-200 transition-all duration-300 text-primary-600"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </Section>
  )
}
