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
    <section className="pt-32.5 pb-10 md:pt-40 md:pb-12 lg:pt-50">
      <div className="container">
        <p className="text-default-500 text-sm font-medium tracking-wide uppercase">{eyebrow}</p>
        <h1 className="font-heading text-default-900 mt-3 max-w-4xl text-4xl leading-tight font-medium tracking-tight md:text-6xl lg:text-7xl">{title}</h1>
        <p className="text-default-500 mt-5 max-w-3xl text-lg md:text-xl">{description}</p>
      </div>
    </section>

    <section className="pb-16 md:pb-24">
      <div className="container">
        <TagNav activeSlug={activeTagSlug} className="mb-10" />

        {posts.length === 0 ? (
          <p className="text-default-500 text-lg">No posts published yet. The first ones are on their way.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
