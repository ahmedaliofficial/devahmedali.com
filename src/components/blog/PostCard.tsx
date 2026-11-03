import Arrow from '@/components/ui/Arrow'
import { formatPostDate, type PostMeta } from '@/lib/blog'
import Link from 'next/link'

type PostCardProps = {
  post: PostMeta
  /** Listing cards use h2; related cards under an article use h3. */
  variant?: 'index' | 'related'
}

const PostCard = ({ post, variant = 'index' }: PostCardProps) => {
  const Heading = variant === 'index' ? 'h2' : 'h3'

  return (
    <Link href={`/blog/${post.slug}`} className="group hover:border-primary/40 flex h-full flex-col rounded-xl border border-[#e4e7ee] bg-white p-6 transition-colors md:p-8">
      <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#727a87]">
        <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        <span aria-hidden="true">·</span>
        <span>{post.readingTime} min read</span>
      </div>

      <Heading className={`group-hover:text-primary mt-5 leading-snug font-medium tracking-tight text-[#17202e] transition-colors ${variant === 'index' ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}>{post.title}</Heading>
      <p className="mt-3 text-sm leading-relaxed text-[#677081]">{post.description}</p>

      {variant === 'index' && (
        <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-[#727a87]">
          {post.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}

      <span className="mt-auto flex items-center justify-between gap-3 pt-7 text-xs font-medium text-[#17202e]">
        Read article
        <Arrow diagonal className="!size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  )
}

export default PostCard
