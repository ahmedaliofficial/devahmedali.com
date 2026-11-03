import Pagination from '@/components/blog/Pagination'
import PostCard from '@/components/blog/PostCard'
import TagNav from '@/components/blog/TagNav'
import ContactCta from '@/components/ContactCta'
import type { PostMeta } from '@/lib/blog'

type BlogListingProps = {
  eyebrow: string
  title: string
  description: string
  /** Already sliced to the current page by the route. */
  posts: PostMeta[]
  currentPage: number
  pageCount: number
  basePath: string
  activeTagSlug?: string
}

/**
 * The shared body of /blog, /blog/page/[page], /blog/tag/[tag] and its pages.
 * Keeping one renderer means the four routes cannot drift apart.
 */
const BlogListing = ({ eyebrow, title, description, posts, currentPage, pageCount, basePath, activeTagSlug }: BlogListingProps) => (
  <>
    <section className="page-intro container">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="max-w-4xl tracking-tight">{title}</h1>
      <p>{description}</p>
    </section>

    <section className="pb-16 md:pb-24">
      <div className="container">
        <details className="mb-8 border-y border-[#e4e7ee] py-4" open={Boolean(activeTagSlug)}>
          <summary className="cursor-pointer text-sm font-medium text-[#17202e]">Browse by topic</summary>
          <TagNav activeSlug={activeTagSlug} className="mt-5" />
        </details>

        {posts.length === 0 ? (
          <p className="text-default-500 text-lg">No posts published yet. The first ones are on their way.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>

            <Pagination currentPage={currentPage} pageCount={pageCount} basePath={basePath} />
          </>
        )}
      </div>
    </section>

    <ContactCta />
  </>
)

export default BlogListing
