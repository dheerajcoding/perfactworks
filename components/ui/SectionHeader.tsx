interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}>
      {subtitle && (
        <div className="inline-block px-4 py-1 mb-4 text-sm font-semibold rounded-full glass">
          <span className="gradient-text">{subtitle}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 text-balance">
          {description}
        </p>
      )}
    </div>
  )
}
