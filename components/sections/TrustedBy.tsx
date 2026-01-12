'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import Section from '../ui/Section'

const clients = [
  { name: 'Reddington Group Inc', logo: 'RG', color: 'from-blue-400 to-cyan-500' },
  { name: 'ARS Financial Enterprises', logo: 'ARS', color: 'from-purple-400 to-pink-500' },
  { name: 'Indifone', logo: 'I', color: 'from-green-400 to-emerald-500' },
  { name: 'Educational Institution', logo: 'EI', color: 'from-orange-400 to-red-500' },
  { name: 'Corporate Organization', logo: 'CO', color: 'from-indigo-400 to-blue-500' },
  { name: 'Sales Organization', logo: 'SO', color: 'from-pink-400 to-rose-500' },
]

export default function TrustedBy() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [particles, setParticles] = useState<Array<{ left: string; top: string }>>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }))
    );
  }, []);

  return (
    <Section className="py-12 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      {/* Animated Background Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary-500/20 rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <motion.p 
          className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-8"
          initial={{ opacity: 0, letterSpacing: '0.05em' }}
          animate={inView ? { 
            opacity: 1, 
            letterSpacing: '0.15em',
          } : { 
            opacity: 0,
            letterSpacing: '0.05em'
          }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          TRUSTED BY LEADING COMPANIES
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0, rotateY: -180 }}
              animate={inView ? { 
                opacity: 1, 
                scale: 1, 
                rotateY: 0 
              } : { 
                opacity: 0, 
                scale: 0, 
                rotateY: -180 
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.2, 
                y: -10,
                rotateZ: 5,
                transition: { duration: 0.3 }
              }}
              className="flex items-center justify-center group cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
                className="relative w-24 h-24 rounded-2xl glass flex items-center justify-center text-2xl font-bold overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Animated Gradient Background */}
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-20 group-hover:opacity-40 transition-opacity bg-[length:200%_200%]`}
                />

                {/* Orbiting Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary-500 rounded-full transform -translate-x-1/2" />
                </motion.div>

                {/* Shimmer Effect */}
                <motion.div
                  animate={{
                    x: [-100, 200],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
                
                {/* Pulsing Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-br ${client.color} rounded-2xl blur-xl`}
                />

                {/* Logo Text */}
                <motion.span 
                  className="relative z-10 bg-gradient-to-br bg-clip-text text-transparent font-extrabold"
                  style={{
                    backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                  }}
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(59, 130, 246, 0.3)',
                      '0 0 20px rgba(147, 51, 234, 0.5)',
                      '0 0 10px rgba(59, 130, 246, 0.3)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  <span className="gradient-text">{client.logo}</span>
                </motion.span>

                {/* Corner Accents */}
                {[0, 1, 2, 3].map((corner) => (
                  <motion.div
                    key={corner}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.15 + corner * 0.05 }}
                    className="absolute w-2 h-2 border-t-2 border-l-2 border-primary-500"
                    style={{
                      top: corner < 2 ? 0 : 'auto',
                      bottom: corner >= 2 ? 0 : 'auto',
                      left: corner % 2 === 0 ? 0 : 'auto',
                      right: corner % 2 === 1 ? 0 : 'auto',
                      transform: `rotate(${corner * 90}deg)`,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
