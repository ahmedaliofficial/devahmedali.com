import BlogListing from '@/components/blog/BlogListing'
import { site } from '@/content/site'
import { getAllTags, getPageCount, getPostsByTag, getPostsPage, getTagBySlug } from '@/lib/blog'
import { breadcrumbJsonLd, jsonLd, personRef } from '@/lib/schema'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type PageProps = {
  params: Promise<{ tag: string }>
}

export const dynamicParams = false

export const generateStaticParams = async () => getAllTags().map((entry) => ({ tag: entry.slug }))

const describe = (tag: string, count: number): string => `${count} ${count === 1 ? 'article' : 'articles'} on ${tag}, written from production systems rather than documentation.`

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const entry = getTagBySlug((await params).tag)
  if (!entry) return { title: 'Topic not found', robots: { index: false, follow: false } }

  return {
    title: `${entry.tag} articles`,
    description: describe(entry.tag, entry.count),
    alternates: { canonical: `/blog/tag/${entry.slug}` },
    openGraph: {
      type: 'website',
      title: `${entry.tag} articles`,
      description: describe(entry.tag, entry.count),
      url: `/blog/tag/${entry.slug}`,
    },
  }
}

const Page = async ({ params }: PageProps) => {
  const entry = getTagBySlug((await params).tag)
  if (!entry) notFound()

  const posts = getPostsByTag(entry.tag)
  const basePath = `/blog/tag/${entry.slug}`

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${entry.tag} articles`,
    description: describe(entry.tag, entry.count),
    url: `${site.url}${basePath}`,
    author: personRef(),
    isPartOf: { '@type': 'Blog', name: 'Notes on building systems', url: `${site.url}/blog` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: post.title,
        url: `${site.url}/blog/${post.slug}`,
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(collectionJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbJsonLd([
              { name: 'Home', path: '' },
              { name: 'Blog', path: '/blog' },
              { name: entry.tag, path: basePath },
            ]),
          ),
        }}
      />

      <BlogListing eyebrow="Topic" title={entry.tag} description={describe(entry.tag, entry.count)} posts={getPostsPage(1, posts)} currentPage={1} pageCount={getPageCount(posts.length)} basePath={basePath} activeTagSlug={entry.slug} />
    </>
  )
}

export default Page
