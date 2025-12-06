/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Disable Next.js development indicators
  devIndicators: {
    position: 'bottom-right',
  },
}

module.exports = nextConfig

