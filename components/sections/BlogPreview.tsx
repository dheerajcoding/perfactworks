'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, TrendingUp, Bookmark, Clock } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Card from '../ui/Card'
import Button from '../ui/Button'

const blogPosts = [
  {
    title: 'Building Scalable SaaS Architecture in 2024',
    excerpt: 'Key principles and patterns for creating multi-tenant SaaS applications that scale effortlessly.',
    category: 'Architecture',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    gradient: 'from-blue-500 to-cyan-500',
    trending: true,
  },
  {
    title: 'AI Integration Best Practices for Startups',
    excerpt: 'How to leverage AI/ML effectively without breaking the bank or compromising user privacy.',
    category: 'AI/ML',
    date: 'Dec 10, 2024',
    readTime: '6 min read',
    gradient: 'from-purple-500 to-pink-500',
    trending: false,
  },
  {
    title: 'The Future of Web Development: Server Components',
    excerpt: 'Deep dive into React Server Components and how they are changing the web development landscape.',
    category: 'Web Dev',
    date: 'Dec 5, 2024',
    readTime: '10 min read',
    gradient: 'from-orange-500 to-red-500',
    trending: true,
  },
]

export default function BlogPreview() {
  return (
    <Section className="bg-slate-50 dark:bg-slate-900/50">
      <SectionHeader
        subtitle="Insights & Articles"
        title="Latest from Our Blog"
        description="Expert insights, technical deep-dives, and industry trends from our team."
      />
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card hover className="h-full relative group overflow-hidden">
              {/* Trending Badge */}
              {post.trending && (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded-full"
                >
                  <motion.div
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <TrendingUp className="w-3 h-3" />
                  </motion.div>
                  Trending
                </motion.div>
              )}

              {/* Image with Hover Zoom */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={`h-40 rounded-xl bg-gradient-to-br ${post.gradient} mb-6 flex items-center justify-center relative overflow-hidden`}
              >
                <Calendar className="w-12 h-12 text-white/50 relative z-10" />
                {/* Shimmer Effect */}
                <motion.div
                  animate={{ x: [-100, 200] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
                
                {/* Bookmark Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="absolute top-3 left-3 p-2 rounded-full bg-white/20 backdrop-blur-sm cursor-pointer"
                >
                  <Bookmark className="w-4 h-4 text-white" />
                </motion.div>
              </motion.div>

              <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-full glass">
                {post.category}
              </div>
              <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary-500 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              {/* Hover Arrow */}
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                className="absolute bottom-4 right-4"
              >
                <ArrowRight className="w-5 h-5 text-primary-500" />
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="text-center">
        <Button variant="outline" size="lg" href="/contact">
          View All Articles
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </Section>
  )
}
