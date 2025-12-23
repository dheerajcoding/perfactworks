'use client'

import Contact from '@/components/sections/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  )
}
