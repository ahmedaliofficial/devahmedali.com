import ContactCta from '@/components/ContactCta'
import Chip from '@/components/ui/Chip'
import { formatPostDate, getAllPosts } from '@/lib/blog'
import { Icon } from '@iconify/react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Notes on distributed systems, event-driven architecture and production AI, written from the incidents rather than the documentation.',
  alternates: { canonical: '/blog' },
}

const Page = () => {
  const posts = getAllPosts()

  return (
    <>
      <section className="pt-32.5 pb-12 md:pt-40 md:pb-16 lg:pt-50">
        <div className="container">
          <p className="text-default-500 text-sm font-medium tracking-wide uppercase">Writing</p>
          <h1 className="font-heading text-default-900 mt-3 max-w-4xl text-4xl leading-tight font-medium tracking-tight md:text-6xl lg:text-7xl">Notes on building systems</h1>
          <p className="text-default-500 mt-5 max-w-3xl text-lg md:text-xl">Mostly the things I wish someone had told me before the incident, not after. Distributed systems, event pipelines and AI that has to survive real users.</p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container">
          {posts.length === 0 ? (
            <p className="text-default-500 text-lg">No posts published yet. The first ones are on their way.</p>
          ) : (
            <div className="flex flex-col gap-4">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="border-default-200 group rounded-3xl border bg-white p-6 transition-shadow duration-300 hover:shadow-lg md:p-8">
                  <div className="text-default-500 flex flex-wrap items-center gap-3 text-sm">
                    <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                    <span aria-hidden="true" className="bg-default-300 size-1 rounded-full" />
                    <span>{post.readingTime} min read</span>
                  </div>

                  <h2 className="font-heading text-default-900 mt-3 text-2xl font-semibold md:text-3xl">{post.title}</h2>
                  <p className="text-default-500 mt-2.5 max-w-3xl text-base md:text-lg">{post.description}</p>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <Chip key={tag}>{tag}</Chip>
                      ))}
                    </div>

                    <span className="text-default-900 inline-flex items-center gap-2 text-sm font-medium">
                      Read post
                      <Icon icon="lucide:arrow-up-right" className="size-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <ContactCta />
    </>
  )
}

export default Page
