'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Users, Code, Award, Sparkles } from 'lucide-react'
import { useEffect, useRef } from 'react'
import Section from '../ui/Section'

const stats = [
  {
    icon: Code,
    value: '30',
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Successfully completed and deployed',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    value: '300',
    suffix: '%',
    label: 'Average ROI',
    description: 'Return on investment for our clients',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    value: '3',
    suffix: '+',
    label: 'Years Experience',
    description: 'Building enterprise solutions',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Award,
    value: '98',
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Would recommend us to others',
    color: 'from-orange-500 to-red-500',
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
            const gradientColors: Record<string, string> = {
              blue: 'from-blue-400/20 via-blue-500/20 to-cyan-400/20',
              green: 'from-green-400/20 via-emerald-500/20 to-teal-400/20',
              purple: 'from-purple-400/20 via-violet-500/20 to-pink-400/20',
              orange: 'from-orange-400/20 via-amber-500/20 to-yellow-400/20',
            }
            const glowColors: Record<string, string> = {
              blue: 'shadow-blue-500/50',
              green: 'shadow-green-500/50',
              purple: 'shadow-purple-500/50',
              orange: 'shadow-orange-500/50',
            }
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -90 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                style={{ perspective: "1000px" }}
                className="text-center text-white relative group"
              >
                {/* 3D Card Container */}
                <motion.div
                  className="relative p-6 rounded-3xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Animated Gradient Background */}
                  <motion.div
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className={`absolute inset-0 bg-gradient-to-br ${gradientColors[stat.color]} bg-[length:200%_200%]`}
                  />
                  
                  {/* Pulsing Glow */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1], 
                      opacity: [0.2, 0.4, 0.2] 
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    className={`absolute inset-0 rounded-3xl blur-2xl ${glowColors[stat.color]}`}
                    style={{ boxShadow: `0 0 60px currentColor` }}
                  />

                  {/* Orbiting Particles */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/40 rounded-full"
                        style={{
                          top: '50%',
                          left: '50%',
                          transformOrigin: `${40 + i * 20}px 0`,
                        }}
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                    ))}
                  </motion.div>

                  <div className="relative z-10">
                    {/* Icon with Floating Animation */}
                    <div className="mb-4 flex justify-center">
                      <motion.div
                        animate={{ 
                          y: [0, -10, 0],
                          rotateZ: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        whileHover={{ 
                          rotate: 360, 
                          scale: 1.3,
                          transition: { duration: 0.6 }
                        }}
                        className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm relative overflow-hidden shadow-2xl"
                      >
                        {/* Icon Inner Glow */}
                        <motion.div
                          animate={{ 
                            scale: [1, 1.5, 1], 
                            opacity: [0.4, 0.7, 0.4] 
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-white/30 rounded-2xl blur-xl"
                        />
                        <Icon className="w-8 h-8 relative z-10" />
                        
                        {/* Rotating Sparkle Ring */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0"
                        >
                          {[0, 90, 180, 270].map((angle) => (
                            <motion.div
                              key={angle}
                              className="absolute text-yellow-300"
                              style={{
                                top: '50%',
                                left: '50%',
                                transformOrigin: '0 0',
                                transform: `rotate(${angle}deg) translateX(24px)`,
                              }}
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                delay: angle / 360
                              }}
                            >
                              <Sparkles className="w-3 h-3" />
                            </motion.div>
                          ))}
                        </motion.div>
                      </motion.div>
                    </div>
                    
                    {/* Animated Counter with Glow */}
                    <motion.div
                      initial={{ scale: 0, rotateY: 180 }}
                      animate={inView ? { scale: 1, rotateY: 0 } : { scale: 0, rotateY: 180 }}
                      transition={{ 
                        type: 'spring', 
                        delay: index * 0.15 + 0.4,
                        stiffness: 200
                      }}
                      className="text-4xl md:text-5xl font-bold mb-2 relative"
                    >
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 blur-lg bg-white/50"
                      />
                      <span className="relative z-10">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
                      </span>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.15 + 0.6 }}
                      className="text-xl font-semibold mb-2"
                    >
                      {stat.label}
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.15 + 0.7 }}
                      className="text-sm text-white/80"
                    >
                      {stat.description}
                    </motion.div>

                    {/* Animated Progress Bar with Moving Highlight */}
                    <div className="mt-4 relative h-1 bg-white/20 rounded-full mx-auto max-w-[80%] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: '100%' } : { width: 0 }}
                        transition={{ duration: 1.5, delay: index * 0.15 + 0.8 }}
                        className="h-full bg-white/50 rounded-full relative"
                      >
                        <motion.div
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            repeatDelay: 1,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white to-transparent"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
