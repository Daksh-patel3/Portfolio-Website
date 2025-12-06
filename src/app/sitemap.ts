import { MetadataRoute } from 'next'
import { navLinks, siteConfig } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url || 'https://dakshpatel.dev'
  
  const routes = navLinks.map((link) => ({
    url: `${baseUrl}${link.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: link.href === '/' ? 1 : 0.8,
  }))

  return routes
}

