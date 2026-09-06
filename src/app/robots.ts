import { site } from '@/content/site'
import type { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
    disallow: '/api/',
  },
  sitemap: `${site.url}/sitemap.xml`,
})

export default robots
