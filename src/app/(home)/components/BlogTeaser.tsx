import Chip from '@/components/ui/Chip'
import RollUpButton from '@/components/ui/RollUpButton'
import SectionHeading from '@/components/ui/SectionHeading'
import { formatPostDate, getAllPosts } from '@/lib/blog'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const BlogTeaser = () => {
  const posts = getAllPosts().slice(0, 2)

  if (posts.length === 0) return null

  return (
    <section id="writing" className="scroll-mt-32 py-16 md:py-24">
      <div className="container">
        <SectionHeading eyebrow="Writing" title="Notes on building systems" description="Mostly the things I wish someone had told me before the incident, not after." />

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="border-default-200 group flex flex-col rounded-3xl border bg-white p-6 transition-shadow duration-300 hover:shadow-lg md:p-8">
              <div className="text-default-500 flex items-center gap-3 text-sm">
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                <span aria-hidden="true" className="bg-default-300 size-1 rounded-full" />
                <span>{post.readingTime} min read</span>
              </div>

              <h3 className="font-heading text-default-900 mt-3 text-xl font-semibold md:text-2xl">{post.title}</h3>
              <p className="text-default-500 mt-2.5 grow text-base">{post.description}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>

              <span className="text-default-900 mt-6 inline-flex items-center gap-2 text-sm font-medium">
                Read post
                <Icon icon="lucide:arrow-up-right" className="size-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <RollUpButton href="/blog" label="Read the blog" variant="outline" icon="lucide:arrow-right" />
        </div>
      </div>
    </section>
  )
}

export default BlogTeaser
