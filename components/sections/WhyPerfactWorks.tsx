import { Zap, Target, Users, Trophy } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'

const differentiators = [
  {
    icon: Users,
    title: 'Dedicated Team',
    description: 'Work with committed developers who take pride in their craft. We focus on quality over quantity, ensuring every line of code meets high standards and serves your business needs.',
  },
  {
    icon: Target,
    title: 'Custom-Built Solutions',
    description: 'No templates, no cookie-cutter approaches. We build bespoke technology solutions tailored to your unique business challenges, workflows, and growth objectives.',
  },
  {
    icon: Zap,
    title: 'Business-First Development',
    description: 'Every line of code serves a business goal. We focus on metrics that matter: conversion rates, user engagement, operational efficiency, and measurable ROI.',
  },
  {
    icon: Trophy,
    title: 'Honest & Transparent',
    description: 'Clear communication, realistic timelines, and fair pricing. No surprises, no hidden costs. We believe in building trust through transparency and delivering on our commitments.',
  },
]

export default function WhyPerfactWorks() {
  return (
    <Section id="why-perfactworks">
      <SectionHeader
        subtitle="Why Choose Us"
        title="Your Trusted Technology Partner"
        description="We're not just developers—we're strategic partners committed to your success."
      />
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {differentiators.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.title}
              className="glass-card p-6 md:p-8 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 shadow-lg group-hover:shadow-primary-500/30 transition-shadow duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary-500 to-purple-500 transition-all duration-500" />
            </div>
          )
        })}
      </div>
    </Section>
  )
}
