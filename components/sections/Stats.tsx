'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Users, Code, Award, Sparkles } from 'lucide-react'
import { useEffect, useRef } from 'react'
import Section from '../ui/Section'

const stats = [
  {
    icon: Code,
    value: '50',
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Successfully completed and deployed',
  },
  {
    icon: TrendingUp,
    value: '300',
    suffix: '%',
    label: 'Average ROI',
    description: 'Return on investment for our clients',
  },
  {
    icon: Users,
    value: '5',
    suffix: '+',
    label: 'Years Experience',
    description: 'Building enterprise solutions',
  },
  {
    icon: Award,
    value: '98',
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Would recommend us to others',
  },
]

function AnimatedCounter({ value, suffix, inView }: { value: string; suffix: string; inView: boolean }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const nodeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (inView) {
      const controls = animate(count, parseInt(value), {
        duration: 2.5,
        ease: 'easeOut',
      })
      return controls.stop
    }
  }, [count, value, inView])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = latest.toString()
      }
    })
    return unsubscribe
  }, [rounded])

  return (
    <>
      <span ref={nodeRef}>0</span>
      <span>{suffix}</span>
    </>
  )
}

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600 -z-10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 -z-10" />

      <div ref={ref} className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Our track record of delivering exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center text-white relative group"
              >
                {/* Pulsing Background */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl"
                />

                <div className="relative">
                  <div className="mb-4 flex justify-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm relative overflow-hidden"
                    >
                      {/* Icon Glow Effect */}
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-white/30 rounded-2xl blur-lg"
                      />
                      <Icon className="w-8 h-8 relative z-10" />
                      
                      {/* Sparkle Effect */}
                      <motion.div
                        animate={{ rotate: [0, 180, 360] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-1 -right-1 text-yellow-300"
                      >
                        <Sparkles className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Animated Counter */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ type: 'spring', delay: index * 0.1 + 0.3 }}
                    className="text-4xl md:text-5xl font-bold mb-2"
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
                  </motion.div>
                  
                  <div className="text-xl font-semibold mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-white/80">
                    {stat.description}
                  </div>

                  {/* Progress Bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                    className="mt-4 h-1 bg-white/50 rounded-full mx-auto max-w-[80%]"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
