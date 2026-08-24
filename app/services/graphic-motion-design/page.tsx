'use client'

import { motion } from 'framer-motion'
import { Sparkles, CheckCircle, ArrowRight, Palette, Film, Layers, Box, Cpu, Flame, CheckCircle2, Video, Clapperboard, MonitorPlay, Zap } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import CTABanner from '@/components/sections/CTABanner'
import Link from 'next/link'

const creativeTools = [
  { name: 'Adobe Premiere Pro', category: 'Video Editing' },
  { name: 'Adobe After Effects', category: 'High Motion & VFX' },
  { name: 'Figma & FigJam', category: 'UI/UX Design' },
  { name: 'DaVinci Resolve', category: 'Color Grading' },
  { name: 'Spline & Blender 3D', category: '3D Modeling' },
  { name: 'Lottie & Rive', category: 'Web Animation' },
]

const features = [
  {
    icon: Clapperboard,
    title: 'Professional Video Editing & Post-Production',
    description: 'Dynamic 4K video editing, color grading in DaVinci Resolve, sound engineering, kinetic captions, and high-impact pacing for promotional ads, product videos, and YouTube/social reels.',
  },
  {
    icon: Film,
    title: 'Adobe High-Motion Graphics & VFX',
    description: 'Cinematic title sequences, kinetic typography, 3D camera tracking, particle VFX, and explosive logo reveals crafted in Adobe After Effects with custom easing curves.',
  },
  {
    icon: Palette,
    title: 'Brand Identity & Visual Systems',
    description: 'Distinctive brand guidelines, vectorized logos, typography scales, corporate color palettes, and investor pitch decks that command authority.',
  },
  {
    icon: Zap,
    title: '60 FPS Lottie & UI Motion',
    description: 'Ultra-lightweight Lottie, JSON, and Rive animations that integrate directly into React, Next.js, Flutter, and mobile apps for silky 60 FPS user interactions.',
  },
]

const designProcess = [
  {
    step: '01',
    title: 'Scripting, Storyboarding & Moodboard',
    description: 'We outline the creative narrative, visual moodboard, pacing, and brand aesthetic direction.',
  },
  {
    step: '02',
    title: 'Production & Video Assembly',
    description: 'Cutting footage in Adobe Premiere Pro, selecting royalty-free audio tracks, and pacing sequences.',
  },
  {
    step: '03',
    title: 'After Effects Motion & VFX',
    description: 'Adding 3D camera animations, kinetic typography, glowing particles, and seamless motion graphics.',
  },
  {
    step: '04',
    title: 'Color Grade, Master Sound & Export',
    description: 'Full 4K HDR master export, platform-optimized cuts (16:9, 9:16, 1:1), and web-ready code snippets.',
  },
]

const useCases = [
  'Promotional Product Video Ads & Commercials',
  'Adobe High-Motion Logo & Title Reveals',
  'Instagram Reels, YouTube Shorts & TikTok Edits',
  'SaaS Explainer & Product Walkthrough Videos',
  'Figma UI/UX Design & Interactive Prototypes',
  'Lottie / Rive 60 FPS Web Micro-Animations',
  '3D Product Modeling & Spline Web Renders',
  'Complete Brand Identity & Investor Pitch Decks',
]

export default function GraphicMotionDesignPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="overflow-hidden pt-28">
        {/* 2-Column Hero Section with 3D Graphic & Motion Artwork */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-hero pt-8 pb-16">
          {/* Subtle grid */}
          <div
            className="absolute inset-0 -z-15 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(20,184,166,0.6) 1px,transparent 1px),
                                linear-gradient(90deg,rgba(20,184,166,0.6) 1px,transparent 1px)`,
              backgroundSize: '80px 80px',
            }}
          />

          {/* Glowing orbs */}
          <div className="hero-orb-teal absolute top-10 right-10 w-[500px] h-[500px] rounded-full -z-10" />
          <div className="hero-orb-cyan absolute bottom-10 left-10 w-[600px] h-[600px] rounded-full -z-10" />

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Copy */}
              <div className="lg:col-span-7 text-left space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-primary-200/60 shadow-teal-sm">
                  <Sparkles className="w-4 h-4 text-primary-600" />
                  <span className="text-xs md:text-sm font-semibold text-primary-700 uppercase tracking-wider">
                    Creative Video & Motion Studio
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-800 leading-[1.15]">
                  Video Editing, <span className="gradient-text">Adobe High-Motion</span> & Graphic Design
                </h1>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                  Transform your brand with dynamic 4K video editing, cinematic Adobe After Effects high-motion graphics, Figma UI/UX design, and photorealistic 3D visuals.
                </p>

                {/* Badges / Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-2 max-w-lg">
                  <div className="glass-card p-3 rounded-2xl border border-primary-100 text-center">
                    <p className="text-xl md:text-2xl font-black text-slate-800">4K HDR</p>
                    <p className="text-xs font-semibold text-slate-500">Video Editing</p>
                  </div>
                  <div className="glass-card p-3 rounded-2xl border border-primary-100 text-center">
                    <p className="text-xl md:text-2xl font-black text-slate-800">After Effects</p>
                    <p className="text-xs font-semibold text-slate-500">High Motion VFX</p>
                  </div>
                  <div className="glass-card p-3 rounded-2xl border border-primary-100 text-center">
                    <p className="text-xl md:text-2xl font-black text-slate-800">60 FPS</p>
                    <p className="text-xs font-semibold text-slate-500">Lottie & Web UI</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/contact">
                    <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold rounded-2xl shadow-teal-md hover:shadow-teal-lg transition-all flex items-center gap-2">
                      <MonitorPlay className="w-5 h-5" />
                      <span>Start Video & Motion Project</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                  <Link href="/case-studies">
                    <button className="px-8 py-4 bg-white/80 hover:bg-white text-slate-700 font-bold rounded-2xl border border-primary-200/60 shadow-teal-sm transition-all">
                      View Motion Reel
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right 3D Visual Centerpiece */}
              <div className="lg:col-span-5 relative">
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative group"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-teal-xl border-2 border-primary-200/80 bg-white/50 backdrop-blur-md p-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/service-graphic-motion.jpg"
                      alt="Video Editing and Adobe High Motion Graphics Suite"
                      fetchPriority="high"
                      className="w-full h-auto rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Floating Badges */}
                  <motion.div
                    animate={{ y: [4, -6, 4] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-xl border border-primary-200 text-slate-800 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5"
                  >
                    <div className="p-2 rounded-xl bg-primary-100 text-primary-700">
                      <Clapperboard className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-slate-800">Premiere & After Effects</p>
                      <p className="text-[10px] text-primary-600 font-bold">4K Video & Motion VFX</p>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [-5, 6, -5] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                    className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-xl border border-primary-200 text-slate-800 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5"
                  >
                    <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-slate-800">60 FPS Lottie & 3D</p>
                      <p className="text-[10px] text-slate-500 font-medium">Kinetic Micro-Animations</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Tooling Grid */}
        <Section className="bg-surface-100/50">
          <SectionHeader
            subtitle="Creative Tooling"
            title="Industry-Standard Video, Motion & 3D Stack"
            description="We use professional Adobe creative suites, DaVinci Resolve, and 3D pipelines to engineer broadcast-quality videos and visuals."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {creativeTools.map((tech) => (
              <Card key={tech.name} className="text-center p-4 glass-card">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-primary-50 to-tech-50 text-primary-700 w-fit mx-auto mb-3">
                  <Palette className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-800 text-sm">{tech.name}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{tech.category}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* Core Capabilities */}
        <Section>
          <SectionHeader
            subtitle="Capabilities"
            title="Comprehensive Video Editing & Motion Services"
            description="Everything your brand needs to produce cinematic promotional videos, viral reels, and interactive UI animations."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <Card key={idx} className="glass-card p-6 text-left flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-primary-500 to-tech-500 text-white flex-shrink-0 shadow-teal-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </Section>

        {/* Process Section */}
        <Section className="bg-surface-100/50">
          <SectionHeader
            subtitle="Production Process"
            title="From Raw Footage to Cinematic Delivery"
            description="A high-velocity video editing and motion graphics workflow with precision color grading and sound design."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designProcess.map((step, idx) => (
              <div key={idx} className="glass-card p-6 text-left rounded-3xl border border-primary-100">
                <div className="w-12 h-12 rounded-2xl bg-primary-100 text-primary-700 flex items-center justify-center font-black text-lg mb-4">
                  {step.step}
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-2">{step.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Deliverables Checklist */}
        <Section>
          <SectionHeader
            subtitle="Deliverables"
            title="Video & Motion Assets We Deliver"
            description="Broadcast-ready 4K video masters, social aspect ratios (9:16, 16:9, 1:1), and web animation code."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-primary-100 shadow-teal-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm font-semibold text-slate-700 text-left">{useCase}</span>
              </div>
            ))}
          </div>
        </Section>

        <CTABanner />
      </main>

      <Footer />
    </div>
  )
}
