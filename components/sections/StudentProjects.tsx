'use client'

import { motion } from 'framer-motion'
import { GraduationCap, FileText, Code, Lightbulb, MessageCircle, CheckCircle } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Card from '../ui/Card'
import Button from '../ui/Button'

const studentProjects = [
  {
    title: 'E-Commerce Website',
    description: 'Full-featured online store with product management, cart, and payment integration',
    tech: ['React', 'Node.js', 'MongoDB', 'Payment Gateway'],
    difficulty: 'Intermediate',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Student Management System',
    description: 'Complete CRUD application for managing student records, attendance, and grades',
    tech: ['React', 'Express', 'MySQL', 'REST API'],
    difficulty: 'Beginner',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Social networking platform with posts, comments, likes, and user profiles',
    tech: ['Next.js', 'Firebase', 'Tailwind CSS'],
    difficulty: 'Intermediate',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Task Management App',
    description: 'Project management tool with tasks, deadlines, teams, and real-time updates',
    tech: ['MERN Stack', 'Socket.io', 'JWT Auth'],
    difficulty: 'Advanced',
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Online Learning Platform',
    description: 'LMS with courses, video lectures, quizzes, and student progress tracking',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    difficulty: 'Advanced',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Weather Dashboard',
    description: 'Weather application with API integration, location services, and forecasts',
    tech: ['React', 'Weather API', 'Charts', 'Geolocation'],
    difficulty: 'Beginner',
    color: 'from-cyan-500 to-blue-500',
  },
]

const services = [
  {
    icon: Code,
    title: 'Complete Project Development',
    description: 'We build your entire college project from scratch with clean, well-documented code that meets academic standards.',
  },
  {
    icon: FileText,
    title: 'Documentation & Reports',
    description: 'Get complete project reports, documentation, and presentations formatted according to your college requirements.',
  },
  {
    icon: Lightbulb,
    title: 'Project Ideas & Guidance',
    description: 'Stuck choosing a project? We help you select the perfect project idea that matches your skills and interests.',
  },
  {
    icon: MessageCircle,
    title: 'Technical Support',
    description: 'Get expert help debugging code, understanding concepts, and implementing features for your projects.',
  },
]

export default function StudentProjects() {
  return (
    <Section className="bg-gradient-to-br from-primary-50 via-purple-50 to-slate-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900" id="students">
      <SectionHeader
        subtitle="For Students"
        title="College Projects Made Easy"
        description="We help students succeed with quality projects, complete documentation, and expert guidance—all according to your college requirements."
      />

      {/* Services for Students */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card hover className="h-full text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary-500 to-purple-600 text-white mx-auto mb-4"
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Popular Student Projects */}
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Popular Project Ideas</h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Ready-to-build projects perfect for your final year, semester project, or internship requirements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card hover className="h-full relative overflow-hidden group">
                {/* Difficulty Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    project.difficulty === 'Beginner' 
                      ? 'bg-green-500/20 text-green-600 border border-green-500/30'
                      : project.difficulty === 'Intermediate'
                      ? 'bg-yellow-500/20 text-yellow-600 border border-yellow-500/30'
                      : 'bg-red-500/20 text-red-600 border border-red-500/30'
                  }`}>
                    {project.difficulty}
                  </span>
                </div>

                {/* Background Gradient */}
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="w-5 h-5 text-primary-500" />
                    <h4 className="text-lg font-bold group-hover:text-primary-500 transition-colors">
                      {project.title}
                    </h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* What You Get */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8 md:p-12"
      >
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">What You Get</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              We provide everything you need to submit a complete, professional project that meets all your college requirements.
            </p>
            <div className="space-y-3">
              {[
                'Complete source code with comments',
                'Project report in your college format',
                'PowerPoint presentation',
                'Database schema and setup guide',
                'Installation and user manual',
                'Abstract, synopsis, and documentation',
                'Unlimited revisions until approved',
                'Technical support after delivery',
              ].map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <div className="glass-card p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-primary-500" />
                  <div>
                    <div className="font-bold text-lg">College-Ready Projects</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Formatted to your requirements
                    </div>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-primary-500/0 via-primary-500/50 to-primary-500/0" />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Code Quality</span>
                    <span className="font-bold text-green-500">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Documentation</span>
                    <span className="font-bold text-green-500">Complete</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Support</span>
                    <span className="font-bold text-green-500">Lifetime</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Background decoration */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-full blur-3xl"
            />
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <Button href="/contact" size="lg" className="group">
            Get Your Project Help
            <MessageCircle className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
          </Button>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
            Contact us with your requirements • Fast turnaround • Student-friendly pricing
          </p>
        </motion.div>
      </motion.div>
    </Section>
  )
}
