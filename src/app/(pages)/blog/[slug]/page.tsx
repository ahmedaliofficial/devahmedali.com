import ContactCta from '@/components/ContactCta'
import { mdxComponents } from '@/components/mdx/MdxComponents'
import Chip from '@/components/ui/Chip'
import { site } from '@/content/site'
import { formatPostDate, getAllPosts, getPost } from '@/lib/blog'
import { Icon } from '@iconify/react'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type PageProps = {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = async () => getAllPosts().map((post) => ({ slug: post.slug }))

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) return { title: 'Post not found' }

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [site.name],
      tags: post.tags,
    },
  }
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags.join(', '),
    author: { '@type': 'Person', name: site.name, url: site.url },
    publisher: { '@type': 'Person', name: site.name, url: site.url },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

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

            <div className="mt-6 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </div>
          </header>

          <div className="border-default-200 mt-10 max-w-3xl border-t pt-4">
            <MDXRemote source={post.content} components={mdxComponents} />
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

      <ContactCta heading="Working on something similar?" description="If you're wrestling with a pipeline, a scaling problem or an AI system that needs to survive production, I'm happy to talk it through." />
    </>
  )
}

export default Page
