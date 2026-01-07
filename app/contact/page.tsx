'use client'

import ContactNew from '@/components/sections/ContactNew'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <div className="bg-dark-900 min-h-screen">
      <Header />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <ContactNew />
      </motion.main>
      <Footer />
    </div>
  )
}
