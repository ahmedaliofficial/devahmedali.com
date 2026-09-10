import BlogListing from '@/components/blog/BlogListing'
import { getAllTags, getPageCount, getPostsByTag, getPostsPage, getTagBySlug, type TagSummary } from '@/lib/blog'
import { breadcrumbJsonLd, jsonLd } from '@/lib/schema'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type PageProps = {
  params: Promise<{ tag: string; page: string }>
}

export const dynamicParams = false

/** Page 1 of each tag is served by /blog/tag/[tag], so this route starts at 2. */
export const generateStaticParams = async () =>
  getAllTags().flatMap((entry) => {
    const pageCount = getPageCount(entry.count)
    return Array.from({ length: Math.max(0, pageCount - 1) }, (_, index) => ({ tag: entry.slug, page: String(index + 2) }))
  })

const resolve = async (params: PageProps['params']): Promise<{ entry: TagSummary; page: number } | null> => {
  const { tag, page: rawPage } = await params
  const entry = getTagBySlug(tag)
  if (!entry || !/^\d+$/.test(rawPage)) return null

  const page = Number(rawPage)
  const pageCount = getPageCount(entry.count)
  return page >= 2 && page <= pageCount ? { entry, page } : null
}

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const resolved = await resolve(params)
  if (!resolved) return { title: 'Page not found', robots: { index: false, follow: false } }

  const { entry, page } = resolved
  return {
    title: `${entry.tag} articles, page ${page}`,
    description: `Page ${page} of articles on ${entry.tag}.`,
    alternates: { canonical: `/blog/tag/${entry.slug}/page/${page}` },
  }
}

const Page = async ({ params }: PageProps) => {
  const resolved = await resolve(params)
  if (!resolved) notFound()

  const { entry, page } = resolved
  const posts = getPostsByTag(entry.tag)
  const basePath = `/blog/tag/${entry.slug}`

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbJsonLd([
              { name: 'Home', path: '' },
              { name: 'Blog', path: '/blog' },
              { name: entry.tag, path: basePath },
              { name: `Page ${page}`, path: `${basePath}/page/${page}` },
            ]),
          ),
        }}
      />

      <BlogListing eyebrow={`Topic, page ${page}`} title={entry.tag} description={`Page ${page} of articles on ${entry.tag}.`} posts={getPostsPage(page, posts)} currentPage={page} pageCount={getPageCount(posts.length)} basePath={basePath} activeTagSlug={entry.slug} />
    </>
  )
}

export default Page
