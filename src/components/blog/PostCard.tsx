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
    <Link href={`/blog/${post.slug}`} className={`studio-post-card studio-post-card-${variant}`}>
      <div className="studio-post-meta">
        <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        <span aria-hidden="true">·</span>
        <span>{post.readingTime} min read</span>
      </div>

      <Heading className="studio-post-title">{post.title}</Heading>
      <p className="studio-post-description">{post.description}</p>

      {variant === 'index' && (
        <div className="studio-post-tags">
          {post.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}

      <span className="studio-post-read">
        Read article
        <Arrow diagonal />
      </span>
    </Link>
  )
}

export default PostCard
