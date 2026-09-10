import { getAllTags } from '@/lib/blog'
import Link from 'next/link'

type TagNavProps = {
  /** Slug of the tag currently being viewed, or undefined on the unfiltered listing. */
  activeSlug?: string
  className?: string
}

const baseClasses = 'rounded-full border px-4 py-2 text-sm font-medium transition-colors'

/**
 * Server-rendered tag links rather than a client-side filter, so every tag hub is a real
 * crawlable URL and each cluster of articles gets a landing page that links to all of it.
 */
const TagNav = ({ activeSlug, className = '' }: TagNavProps) => {
  const tags = getAllTags()

  if (tags.length === 0) return null

  return (
    <nav aria-label="Filter posts by topic" className={`flex flex-wrap gap-2 ${className}`}>
      <Link href="/blog" className={`${baseClasses} ${activeSlug === undefined ? 'border-default-900 bg-default-900 text-white' : 'border-default-200 text-default-600 hover:border-default-400 hover:text-default-900 bg-white'}`} aria-current={activeSlug === undefined ? 'page' : undefined}>
        All posts
      </Link>

      {tags.map((entry) => {
        const isActive = entry.slug === activeSlug
        return (
          <Link key={entry.slug} href={`/blog/tag/${entry.slug}`} className={`${baseClasses} ${isActive ? 'border-default-900 bg-default-900 text-white' : 'border-default-200 text-default-600 hover:border-default-400 hover:text-default-900 bg-white'}`} aria-current={isActive ? 'page' : undefined}>
            {entry.tag}
            <span className={`ms-1.5 ${isActive ? 'text-white/60' : 'text-default-400'}`}>{entry.count}</span>
          </Link>
        )
      })}
    </nav>
  )
}

export default TagNav
