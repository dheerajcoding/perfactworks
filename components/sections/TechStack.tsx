'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'

const technologies = [
  // Frontend
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Vue', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', category: 'Backend' },
  { name: 'Java', category: 'Backend' },
  { name: 'Spring Boot', category: 'Backend' },
  { name: 'Hibernate', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Django', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'Microservices', category: 'Backend' },
  { name: 'REST API', category: 'Backend' },
  
  // Database
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  { name: 'Elasticsearch', category: 'Database' },
  { name: 'JPA', category: 'Database' },
  
  // Cloud
  { name: 'AWS', category: 'Cloud' },
  { name: 'Azure', category: 'Cloud' },
  { name: 'GCP', category: 'Cloud' },
  { name: 'Docker', category: 'Cloud' },
  { name: 'Kubernetes', category: 'Cloud' },
  { name: 'Maven', category: 'Cloud' },
  { name: 'Gradle', category: 'Cloud' },
  
  // AI/ML
  { name: 'TensorFlow', category: 'AI/ML' },
  { name: 'PyTorch', category: 'AI/ML' },
  { name: 'OpenAI', category: 'AI/ML' },
  { name: 'LangChain', category: 'AI/ML' },
]

const categories = ['Frontend', 'Backend', 'Database', 'Cloud', 'AI/ML']

export default function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Section className="bg-slate-50 dark:bg-slate-900/50">
      <SectionHeader
        subtitle="Technology Stack"
        title="Built With Modern Tools"
        description="We leverage the latest technologies to build fast, secure, and scalable solutions."
      />
      <div ref={ref} className="space-y-8">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-slate-700 dark:text-slate-300">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {technologies
                .filter(tech => tech.category === category)
                .map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 glass rounded-lg text-sm font-medium cursor-default"
                  >
                    {tech.name}
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
