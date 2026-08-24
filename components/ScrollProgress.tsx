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
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-tech-500 origin-left z-[60]"
      style={{ transform: 'scaleX(0)', transition: 'transform 0.1s ease-out' }}
    />
  )
}
