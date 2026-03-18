import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`glass-card p-6 md:p-8 ${hover ? 'hover:-translate-y-1 hover:shadow-xl transition-all duration-300' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
