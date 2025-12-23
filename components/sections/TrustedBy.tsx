'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Section from '../ui/Section'

const clients = [
  { name: 'TechCorp', logo: 'TC' },
  { name: 'Innovate Inc', logo: 'II' },
  { name: 'Digital Solutions', logo: 'DS' },
  { name: 'CloudFirst', logo: 'CF' },
  { name: 'AI Ventures', logo: 'AV' },
  { name: 'StartupHub', logo: 'SH' },
]

export default function TrustedBy() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Section className="py-12 bg-slate-50 dark:bg-slate-900/50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-8">
          TRUSTED BY LEADING COMPANIES
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center justify-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
                className="relative w-20 h-20 rounded-xl glass flex items-center justify-center text-2xl font-bold gradient-text overflow-hidden"
              >
                {/* Shimmer effect */}
                <motion.div
                  animate={{
                    x: [-100, 200],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
                <span className="relative z-10">{client.logo}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
