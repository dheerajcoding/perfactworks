'use client'

import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Sparkles, Clock, Users, Shield } from 'lucide-react'
import Section from '../ui/Section'
import Button from '../ui/Button'

export default function CTABanner() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isHovering, setIsHovering] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const springY = useSpring(y, { stiffness: 300, damping: 30 })

  const [particles, setParticles] = useState<Array<{ left: string; top: string; duration: number; delay: number }>>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 15 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 4 + Math.random() * 4,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <Section>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
        transition={{ duration: 0.8, type: "spring" }}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden rounded-3xl"
        style={{ perspective: "1000px" }}
      >
        {/* Dynamic Gradient Background */}
        <motion.div 
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-br from-primary-500 via-purple-600 to-pink-600 bg-[length:200%_200%]"
        />
        
        {/* Parallax Grid */}
        <motion.div 
          style={{
            x: springX,
            y: springY,
          }}
        />
        
        {/* Animated Orbs with 3D effect */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.1, 0.3],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Content */}
        <div className="relative px-8 py-16 md:px-16 md:py-24 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
            animate={inView ? { opacity: 1, scale: 1, rotateX: 0 } : { opacity: 0, scale: 0.5, rotateX: -90 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            <span className="text-sm font-semibold">Limited Slots Available - Free Consultation</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 border-2 border-white/30 rounded-full"
            />
          </motion.div>

          {/* Urgency & Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { icon: Clock, text: '48h Response', delay: 0.3 },
              { icon: Users, text: '30+ Projects', delay: 0.4 },
              { icon: Shield, text: '100% Secure', delay: 0.5 },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30, rotateY: -90 }}
                animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -30, rotateY: -90 }}
                transition={{ delay: item.delay, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 relative overflow-hidden"
              >
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_200%]"
                />
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <item.icon className="w-5 h-5" />
                </motion.div>
                <span className="text-sm font-semibold relative z-10">{item.text}</span>
              </motion.div>
            ))}
          </div>
          
          {/* Main Title with Letter Animation */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
          >
            {"Ready to Build Something Extraordinary?".split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={inView ? { 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0 
                } : { 
                  opacity: 0, 
                  y: 50, 
                  rotateX: -90 
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + (i * 0.02),
                  type: "spring",
                  stiffness: 100
                }}
                className="inline-block"
                style={{ transformOrigin: "bottom" }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto"
          >
            Let's transform your vision into a market-leading digital solution
          </motion.p>

          {/* Magnetic CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6, delay: 1.7, type: "spring", stiffness: 200 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="inline-block"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              {/* Button Glow */}
              <motion.div
                animate={{
                  scale: isHovering ? [1, 1.5, 1] : 1,
                  opacity: isHovering ? [0.5, 1, 0.5] : 0,
                }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute inset-0 bg-white rounded-full blur-2xl"
              />
              
              <Button 
                size="lg" 
                className="relative bg-white text-primary-600 hover:bg-white/90 font-bold px-8 py-4 text-lg group shadow-2xl"
              >
                <span className="relative z-10">Schedule Free Consultation</span>
                <motion.div
                  animate={{ x: isHovering ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block ml-2"
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
                
                {/* Button Shine Effect */}
                <motion.div
                  animate={{
                    x: isHovering ? ['-200%', '200%'] : '-200%',
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: isHovering ? Infinity : 0,
                    repeatDelay: 0.5,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-200 to-transparent skew-x-12"
                  style={{ width: '50%' }}
                />
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Signals with Stagger */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.9 }}
            className="mt-10 flex flex-wrap justify-center gap-6 text-sm"
          >
            {[
              '✓ No Commitment Required',
              '✓ NDA Protected',
              '✓ Expert Tech Team',
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 1.9 + (i * 0.1) }}
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-2"
              >
                <motion.span
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                >
                  ✓
                </motion.span>
                <span className="font-semibold">{text.replace('✓ ', '')}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </Section>
  )
}
