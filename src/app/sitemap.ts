import { caseStudies } from '@/content/case-studies'
import { site } from '@/content/site'
import { getAllPosts } from '@/lib/blog'
import type { MetadataRoute } from 'next'

// Real per-page content dates, not the build/request timestamp. Bump the relevant
// constant by hand whenever that page's actual content changes.
const HOME_UPDATED = '2026-09-07'
const SERVICES_UPDATED = '2026-09-07'
const WORK_INDEX_UPDATED = '2026-09-07'
const ABOUT_UPDATED = '2026-09-07'
const CONTACT_UPDATED = '2026-09-07'
const PRIVACY_POLICY_UPDATED = '2026-09-06'
const CASE_STUDIES_UPDATED = '2026-09-07'

const sitemap = (): MetadataRoute.Sitemap => {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: HOME_UPDATED, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/services`, lastModified: SERVICES_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${site.url}/work`, lastModified: WORK_INDEX_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${site.url}/about`, lastModified: ABOUT_UPDATED, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${site.url}/blog`, lastModified: getAllPosts()[0]?.date ?? HOME_UPDATED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${site.url}/contact`, lastModified: CONTACT_UPDATED, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${site.url}/privacy-policy`, lastModified: PRIVACY_POLICY_UPDATED, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const workRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${site.url}/work/${study.slug}`,
    lastModified: CASE_STUDIES_UPDATED,
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
