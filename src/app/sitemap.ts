import { caseStudies } from '@/content/case-studies'
import { site } from '@/content/site'
import { getAllPosts, getAllTags, getPageCount, getPostsByTag } from '@/lib/blog'
import { getAllExpertise } from '@/lib/expertise'
import type { MetadataRoute } from 'next'

// Real per-page content dates, not the build/request timestamp. Bump the relevant
// constant by hand whenever that page's actual content changes.
const HOME_UPDATED = '2026-09-08'
const SERVICES_UPDATED = '2026-09-07'
const WORK_INDEX_UPDATED = '2026-09-07'
const ABOUT_UPDATED = '2026-09-08'
const CONTACT_UPDATED = '2026-09-07'
const PRIVACY_POLICY_UPDATED = '2026-09-11'
const TERMS_UPDATED = '2026-09-11'
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
    { url: `${site.url}/terms`, lastModified: TERMS_UPDATED, changeFrequency: 'yearly', priority: 0.2 },
  ]

  // Expertise hub + role articles come straight from the MDX registry, so a new article is
  // in the sitemap the moment its file exists. `updated` is the frontmatter date, not build time.
  const expertise = getAllExpertise()
  const expertiseRoutes: MetadataRoute.Sitemap = [
    {
      url: `${site.url}/expertise`,
      lastModified: expertise.reduce((latest, entry) => (entry.updated > latest ? entry.updated : latest), expertise[0]?.updated ?? HOME_UPDATED),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...expertise.map((entry) => ({
      url: `${site.url}/expertise/${entry.slug}`,
      lastModified: entry.updated,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]

  const workRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${site.url}/work/${study.slug}`,
    lastModified: CASE_STUDIES_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const posts = getAllPosts()

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.updated),
    changeFrequency: 'yearly',
    priority: 0.7,
  }))

  // Pagination pages start at 2; page 1 is /blog, already in staticRoutes.
  const newestPostDate = posts[0]?.date ?? HOME_UPDATED
  const blogPageRoutes: MetadataRoute.Sitemap = Array.from({ length: Math.max(0, getPageCount(posts.length) - 1) }, (_, index) => ({
    url: `${site.url}/blog/page/${index + 2}`,
    lastModified: newestPostDate,
    changeFrequency: 'weekly' as const,
    priority: 0.3,
  }))

  // One hub per tag, plus its own pagination. These are the topic-cluster landing pages.
  const tagRoutes: MetadataRoute.Sitemap = getAllTags().flatMap((entry) => {
    const tagPosts = getPostsByTag(entry.tag)
    const lastModified = tagPosts[0]?.date ?? newestPostDate

    return [
      { url: `${site.url}/blog/tag/${entry.slug}`, lastModified, changeFrequency: 'weekly' as const, priority: 0.6 },
      ...Array.from({ length: Math.max(0, getPageCount(entry.count) - 1) }, (_, index) => ({
        url: `${site.url}/blog/tag/${entry.slug}/page/${index + 2}`,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: 0.3,
      })),
    ]
  })

  return [...staticRoutes, ...expertiseRoutes, ...workRoutes, ...postRoutes, ...tagRoutes, ...blogPageRoutes]
}

export default sitemap
