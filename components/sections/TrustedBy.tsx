'use client'

import Section from '../ui/Section'

const clients = [
  { name: 'Reddington Group Inc', logo: 'RG', color: 'from-blue-400 to-cyan-500' },
  { name: 'ARS Financial Enterprises', logo: 'ARS', color: 'from-purple-400 to-pink-500' },
  { name: 'Indifone', logo: 'I', color: 'from-green-400 to-emerald-500' },
  { name: 'Educational Institution', logo: 'EI', color: 'from-orange-400 to-red-500' },
  { name: 'Corporate Organization', logo: 'CO', color: 'from-indigo-400 to-blue-500' },
  { name: 'Sales Organization', logo: 'SO', color: 'from-pink-400 to-rose-500' },
]

export default function TrustedBy() {
  return (
    <Section className="py-12 bg-slate-50 dark:bg-slate-900/50">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
          <p className="text-lg font-bold text-primary-600 dark:text-primary-400">
            Trusted by 50+ Clients
          </p>
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
        </div>

        <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-8 tracking-[0.15em]">
          TRUSTED BY LEADING COMPANIES
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center group"
            >
              <div className={`w-24 h-24 rounded-2xl glass flex items-center justify-center text-2xl font-bold relative overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
                <span className="relative z-10 gradient-text font-extrabold">{client.logo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

