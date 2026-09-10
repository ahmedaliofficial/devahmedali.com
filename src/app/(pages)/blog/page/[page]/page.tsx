import BlogListing from '@/components/blog/BlogListing'
import { getAllPosts, getPageCount, getPostsPage } from '@/lib/blog'
import { breadcrumbJsonLd, jsonLd } from '@/lib/schema'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type PageProps = {
  params: Promise<{ page: string }>
}

export const dynamicParams = false

/** Page 1 is served by /blog itself, so this route starts at 2. */
export const generateStaticParams = async () => {
  const pageCount = getPageCount(getAllPosts().length)
  return Array.from({ length: Math.max(0, pageCount - 1) }, (_, index) => ({ page: String(index + 2) }))
}

const parsePage = (value: string): number | null => {
  if (!/^\d+$/.test(value)) return null
  const page = Number(value)
  const pageCount = getPageCount(getAllPosts().length)
  return page >= 2 && page <= pageCount ? page : null
}

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const page = parsePage((await params).page)
  if (page === null) return { title: 'Page not found', robots: { index: false, follow: false } }

  return {
    title: `Engineering Blog, page ${page}`,
    description: `Page ${page} of notes on distributed systems, event-driven architecture and production AI.`,
    alternates: { canonical: `/blog/page/${page}` },
    // Paginated pages are indexable but should never outrank /blog for the blog's own terms.
    robots: { index: true, follow: true },
  }
}

const Page = async ({ params }: PageProps) => {
  const page = parsePage((await params).page)
  if (page === null) notFound()

  const posts = getAllPosts()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbJsonLd([
              { name: 'Home', path: '' },
              { name: 'Blog', path: '/blog' },
              { name: `Page ${page}`, path: `/blog/page/${page}` },
            ]),
          ),
        }}
      />

      <BlogListing eyebrow={`Writing, page ${page}`} title="Notes on building systems" description="Mostly the things I wish someone had told me before the incident, not after. Distributed systems, event pipelines and AI that has to survive real users." posts={getPostsPage(page, posts)} currentPage={page} pageCount={getPageCount(posts.length)} basePath="/blog" />
    </>
  )
}

export default Page
