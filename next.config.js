/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  swcMinify: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
