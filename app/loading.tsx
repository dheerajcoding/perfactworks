// Loading component
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-900">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-neon-cyan/30 border-t-neon-cyan rounded-full animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-neon-cyan/20 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  )
}
