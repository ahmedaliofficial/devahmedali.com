import PostCard from '@/components/blog/PostCard'
import ContactCta from '@/components/ContactCta'
import { mdxComponents } from '@/components/mdx/MdxComponents'
import SectionHeading from '@/components/ui/SectionHeading'
import { site, WEBSITE_ID } from '@/content/site'
import { formatPostDate, getAllPosts, getPost, getRelatedPosts, tagToSlug } from '@/lib/blog'
import { jsonLd, personRef } from '@/lib/schema'
import { Icon } from '@iconify/react'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import remarkGfm from 'remark-gfm'

type PageProps = {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = async () => getAllPosts().map((post) => ({ slug: post.slug }))

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) return { title: 'Post not found', robots: { index: false, follow: false } }

  const seoTitle = post.seoTitle ?? post.title

  return {
    title: seoTitle,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    keywords: [...site.seo.keywords, ...post.tags],
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [site.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: post.description,
    },
  }
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) notFound()

  const relatedPosts = getRelatedPosts(post)

  const postJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    // Root OG image on purpose: per-route opengraph-image files are served at hash-suffixed
    // paths (e.g. /opengraph-image-uytwyn) that cannot be referenced from here. Only the root one is stable.
    image: `${site.url}/opengraph-image`,
    datePublished: post.date,
    dateModified: post.updated,
    keywords: post.tags.join(', '),
    author: personRef(),
    publisher: personRef(),
    isPartOf: { '@id': WEBSITE_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${site.url}/blog/${post.slug}` },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${site.url}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${site.url}/blog/${post.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(postJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbJsonLd) }} />

      <article className="pt-32.5 pb-16 md:pt-40 md:pb-24 lg:pt-50">
        <div className="container">
          <Link href="/blog" className="text-default-500 hover:text-default-900 inline-flex items-center gap-1.5 text-sm font-medium transition-colors">
            <Icon icon="lucide:arrow-left" className="size-4" />
            All posts
          </Link>

          <header className="mt-8 max-w-3xl">
            <div className="text-default-500 flex flex-wrap items-center gap-3 text-sm">
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              <span aria-hidden="true" className="bg-default-300 size-1 rounded-full" />
              <span>{post.readingTime} min read</span>
            </div>

            <h1 className="font-heading text-default-900 mt-4 text-3xl leading-tight font-medium tracking-tight md:text-5xl lg:text-6xl">{post.title}</h1>
            <p className="text-default-500 mt-5 text-lg md:text-xl">{post.description}</p>

            {/* Tags link to their hub rather than sitting inert, so every article has an
                outbound link into its own topic cluster. */}
            <div className="mt-6 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <Link key={tag} href={`/blog/tag/${tagToSlug(tag)}`} className="bg-default-100 text-default-700 hover:bg-default-200 hover:text-default-900 inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium transition-colors">
                  {tag}
                </Link>
              ))}
            </div>
          </header>

          <div className="border-default-200 mt-10 max-w-3xl border-t pt-4">
            <MDXRemote source={post.content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </div>

          <div className="border-default-200 mt-12 flex max-w-3xl items-center gap-4 border-t pt-8">
            <span className="font-heading bg-default-900 grid size-12 shrink-0 place-items-center rounded-full text-sm font-semibold text-white">{site.initials}</span>
            <div>
              <p className="font-heading text-default-900 text-base font-semibold">{site.name}</p>
              <p className="text-default-500 text-sm">{site.roleFull}</p>
            </div>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="pb-12 md:pb-20">
          <div className="container">
            <SectionHeading align="left" eyebrow="Keep reading" title="Notes from the same territory" />
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              {relatedPosts.map((related) => (
                <PostCard key={related.slug} post={related} variant="related" />
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCta heading="Working on something similar?" description="If you're wrestling with a pipeline, a scaling problem or an AI system that needs to survive production, I'm happy to talk it through." />
    </>
  )
}

export default Page
