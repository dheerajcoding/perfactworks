'use client'

import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const progress = scrollHeight > clientHeight
        ? scrollTop / (scrollHeight - clientHeight)
        : 0
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`
      }
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-primary-500 origin-left z-50"
      style={{ transform: 'scaleX(0)' }}
    />
  )
}
