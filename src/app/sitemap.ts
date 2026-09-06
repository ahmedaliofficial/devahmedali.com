import { caseStudies } from '@/content/case-studies'
import { site } from '@/content/site'
import { getAllPosts } from '@/lib/blog'
import type { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/work`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${site.url}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${site.url}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const workRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${site.url}/work/${study.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...workRoutes, ...postRoutes]
}

export default sitemap
