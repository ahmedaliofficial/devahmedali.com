import { site } from '@/content/site'
import type { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    // AdSense's crawler has to be able to read every page it serves ads on;
    // a blocked crawler is one of Google's listed reasons for a failed site review.
    {
      userAgent: 'Mediapartners-Google',
      allow: '/',
    },
  ],
  sitemap: `${site.url}/sitemap.xml`,
})

export default robots
