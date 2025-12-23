# PerfactWorks - Premium Technology Consultancy Website

> **Engineering Perfection in Every Solution**

A world-class, premium technology consultancy website built with Next.js 14, React, TypeScript, and Tailwind CSS. Features stunning animations, dark mode, glassmorphism effects, and a fully responsive design.

![PerfactWorks](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

### Design & UX
- **Dark-First Design** with seamless light mode toggle
- **Glassmorphism Effects** for modern, premium aesthetics
- **Smooth Animations** powered by Framer Motion
- **Micro-Interactions** for enhanced user engagement
- **Mobile-First** fully responsive design
- **Accessibility Compliant** (WCAG standards)

### Sections
- **Hero Section** - Bold headline with animated CTAs
- **Trusted By** - Client/partner logos showcase
- **Services** - Comprehensive service offerings with icons
- **Why PerfactWorks** - Key differentiators and value propositions
- **Case Studies** - Real projects with metrics and impact
- **Process** - 4-step methodology (Discover → Design → Build → Scale)
- **Tech Stack** - Modern tools and technologies
- **Testimonials** - Carousel with client feedback
- **About** - Founder story, mission, and vision
- **Stats** - Projects, ROI, experience metrics
- **Blog Preview** - Latest insights and articles
- **CTA Banner** - Conversion-focused call-to-action
- **Contact** - Form with validation + office information
- **Footer** - Complete sitemap and social links

### Technical
- **Next.js 14** with App Router for optimal performance
- **Server Components** for faster initial loads
- **TypeScript** for type safety and better DX
- **Tailwind CSS** for rapid, utility-first styling
- **Framer Motion** for smooth, performant animations
- **React Intersection Observer** for scroll animations
- **SEO Optimized** with comprehensive meta tags
- **Performance Optimized** targeting Lighthouse 95+

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd prftwk
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

The page will auto-reload when you make changes.

## 📦 Build for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm run start
```

## 🛠️ Tech Stack

### Core
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[PostCSS](https://postcss.org/)** - CSS transformations

### Animation
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library
- **[React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)** - Scroll animations

### Icons
- **[Lucide React](https://lucide.dev/)** - Beautiful, consistent icons

### Development
- **[ESLint](https://eslint.org/)** - Code linting
- **[TypeScript ESLint](https://typescript-eslint.io/)** - TypeScript linting

## 📁 Project Structure

```
prftwk/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx            # Root layout with metadata and theme provider
│   └── page.tsx              # Homepage with all sections
├── components/
│   ├── ui/
│   │   ├── Button.tsx        # Reusable button component
│   │   ├── Card.tsx          # Animated card component
│   │   ├── Section.tsx       # Section wrapper
│   │   └── SectionHeader.tsx # Section headers with animations
│   ├── sections/
│   │   ├── Hero.tsx          # Hero section
│   │   ├── TrustedBy.tsx     # Client logos
│   │   ├── Services.tsx      # Services grid
│   │   ├── WhyPerfactWorks.tsx # Differentiators
│   │   ├── CaseStudies.tsx   # Project showcases
│   │   ├── Process.tsx       # 4-step process
│   │   ├── TechStack.tsx     # Technologies
│   │   ├── Testimonials.tsx  # Client testimonials
│   │   ├── About.tsx         # About section
│   │   ├── Stats.tsx         # Key metrics
│   │   ├── BlogPreview.tsx   # Blog posts
│   │   ├── CTABanner.tsx     # Call-to-action
│   │   └── Contact.tsx       # Contact form
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Site footer
│   ├── ThemeProvider.tsx     # Theme context provider
│   └── ThemeToggle.tsx       # Dark/light mode toggle
├── public/                   # Static assets
├── .github/
│   └── copilot-instructions.md # Copilot configuration
├── .gitignore
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── postcss.config.js         # PostCSS configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (`#0ea5e9` to `#0284c7`)
- **Secondary**: Purple gradient (`#a855f7` to `#9333ea`)
- **Background**: White (light) / Slate 900 (dark)
- **Text**: Slate 900 (light) / Slate 50 (dark)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, 2xl-7xl
- **Body**: Regular, base-xl

### Components
- **Glass Cards**: `backdrop-blur-lg` with opacity
- **Gradients**: Blue-purple combinations
- **Shadows**: Elevation-based shadow system
- **Rounded Corners**: 2xl for cards, xl for buttons

## 🔧 Customization

### Changing Colors
Edit [tailwind.config.ts](tailwind.config.ts):
```typescript
colors: {
  primary: {
    500: '#0ea5e9', // Your primary color
  },
}
```

### Adding New Sections
1. Create a new component in `components/sections/`
2. Import and add it to [app/page.tsx](app/page.tsx)
3. Follow the existing section structure

### Modifying Content
All content is in the component files. Simply edit the text, metrics, or data arrays in each section component.

## 📈 SEO Configuration

SEO metadata is configured in [app/layout.tsx](app/layout.tsx):
- **Title**: PerfactWorks | Engineering Perfection in Every Solution
- **Description**: Premium global technology consultancy
- **Keywords**: Technology consulting, AI solutions, web development, etc.
- **Open Graph**: Configured for social media sharing
- **Twitter Card**: Large image card format

To customize, edit the `metadata` export in `app/layout.tsx`.

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms
- **Netlify**: Connect your Git repository
- **AWS Amplify**: Use the Amplify Console
- **Self-hosted**: Run `npm run build` and serve the `.next` directory

## ⚡ Performance

This website is optimized for:
- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Excellent scores
- **Bundle Size**: Optimized with code splitting
- **Image Optimization**: Next.js Image component
- **Font Loading**: Automatic font optimization

## 🤝 Contributing

This is a production website for PerfactWorks. For inquiries or customization requests:
- Email: hello@perfactworks.online
- Website: https://perfactworks.online

## 📝 License

© 2024 PerfactWorks. All rights reserved.

---

**Built with ❤️ by PerfactWorks**

*Engineering Perfection in Every Solution*
