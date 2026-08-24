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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-semibold rounded-full bg-primary-50 border border-primary-100">
          <span className="gradient-text">{subtitle}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance text-slate-800">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-slate-500 text-balance">
          {description}
        </p>
      )}
    </div>
  )
}
