import BlogListing from '@/components/blog/BlogListing'
import { site } from '@/content/site'
import { getAllPosts, getPageCount, getPostsPage } from '@/lib/blog'
import { breadcrumbJsonLd, jsonLd, personRef } from '@/lib/schema'
import type { Metadata } from 'next'

const BLOG_DESCRIPTION = 'Notes on distributed systems, event-driven architecture and production AI, written from the incidents rather than the documentation.'

export const metadata: Metadata = {
  title: 'Engineering Blog: Distributed Systems & AI',
  description: BLOG_DESCRIPTION,
  alternates: { canonical: '/blog' },
}

const Page = () => {
  const posts = getAllPosts()
  const pageCount = getPageCount(posts.length)

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Notes on building systems',
    url: `${site.url}/blog`,
    author: personRef(),
    // Every post, not just page one: this is the machine-readable index of the whole blog.
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `${site.url}/blog/${post.slug}`,
      datePublished: post.date,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(blogJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbJsonLd([
              { name: 'Home', path: '' },
              { name: 'Blog', path: '/blog' },
            ]),
          ),
        }}
      />

      <BlogListing eyebrow="Writing" title="Notes on building systems" description="Mostly the things I wish someone had told me before the incident, not after. Distributed systems, event pipelines and AI that has to survive real users." posts={getPostsPage(1, posts)} currentPage={1} pageCount={pageCount} basePath="/blog" />
    </>
  )
}

export default Page
