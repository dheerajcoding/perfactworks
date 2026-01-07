'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Globe, Code } from 'lucide-react'
import { useEffect, useState } from 'react'
import Button from '../ui/Button'

export default function HeroNew() {
  const [mounted, setMounted] = useState(false)
  const [text, setText] = useState('')
  const fullText = 'We Engineer Digital Excellence.'
  
  useEffect(() => {
    setMounted(true)
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" suppressHydrationWarning>
      {/* Dark Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 -z-20" />
      
      {/* Animated Grid */}
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 240, 255, 0.2) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 240, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          animation: 'grid-flow 20s linear infinite',
        }}
        suppressHydrationWarning
      />

      {/* Neon Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [-20, 20, -20],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-20 w-[500px] h-[500px] bg-neon-cyan rounded-full blur-[150px] opacity-30 -z-10"
        suppressHydrationWarning
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
          x: [20, -20, 20],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-neon-purple rounded-full blur-[150px] opacity-30 -z-10"
        suppressHydrationWarning
      />

      {/* 3D Tech Visual */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-5 opacity-10" suppressHydrationWarning>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="w-[800px] h-[800px] relative"
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-2 h-2 bg-neon-cyan rounded-full"
              style={{
                transform: `rotate(${i * 45}deg) translateX(300px)`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-dark-700/60 backdrop-blur-xl border border-neon-cyan/30 rounded-full"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-4 h-4 text-neon-cyan" />
            </motion.div>
            <span className="text-sm font-semibold text-neon-cyan uppercase tracking-wider">
              Global Technology & Consulting
            </span>
          </motion.div>

          {/* Typing Animation Headline */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight"
            suppressHydrationWarning
          >
            {mounted ? (
              <>
                {text}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-neon-cyan"
                >
                  |
                </motion.span>
              </>
            ) : (
              <span className="opacity-0">{fullText}</span>
            )}
          </motion.h1>

          {/* Subheading with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 text-gray-400"
          >
            {[
              { icon: Code, text: 'Custom Software' },
              { icon: Globe, text: 'Scalable Systems' },
              { icon: Zap, text: 'Digital Transformation' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, color: '#00f0ff' }}
                className="flex items-center gap-2 text-base md:text-lg font-medium"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 240, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-900 font-bold rounded-lg text-lg flex items-center gap-2 shadow-lg shadow-neon-cyan/50 hover:shadow-neon-cyan/70 transition-shadow"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, borderColor: '#00f0ff' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-gray-600 text-white font-bold rounded-lg text-lg hover:border-neon-cyan transition-colors backdrop-blur-sm"
            >
              Explore Our Capabilities
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 3, duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-neon-cyan rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS for Grid Animation */}
      <style jsx>{`
        @keyframes grid-flow {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 60px 60px;
          }
        }
      `}</style>
    </section>
  )
}
