import Chip from '@/components/ui/Chip'
import { formatPostDate, type PostMeta } from '@/lib/blog'
import { Icon } from '@iconify/react'
import Link from 'next/link'

type PostCardProps = {
  post: PostMeta
  /**
   * `index` is the listing card: an h2, with tag chips.
   * `related` is the compact card used under an article and in the same-tag rails: an h3, no chips.
   * The heading level matters, so the level is tied to the variant rather than left to the caller.
   */
  variant?: 'index' | 'related'
}

const PostCard = ({ post, variant = 'index' }: PostCardProps) => {
  const Heading = variant === 'index' ? 'h2' : 'h3'

  return (
    <Link href={`/blog/${post.slug}`} className="border-default-200 group flex flex-col rounded-3xl border bg-white p-6 transition-shadow duration-300 hover:shadow-lg md:p-8">
      <div className="text-default-500 flex flex-wrap items-center gap-3 text-sm">
        <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        <span aria-hidden="true" className="bg-default-300 size-1 rounded-full" />
        <span>{post.readingTime} min read</span>
      </div>

      <Heading className={`font-heading text-default-900 mt-3 font-semibold ${variant === 'index' ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}>{post.title}</Heading>
      <p className="text-default-500 mt-2.5 text-base">{post.description}</p>

      {variant === 'index' && (
        <div className="mt-5 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
      )}

      <span className="text-default-900 mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium">
        Read post
        <Icon icon="lucide:arrow-up-right" className="size-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  )
}

export default PostCard
