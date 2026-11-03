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
  <div className="studio-writing">
    <section className="studio-writing-intro container">
      <p className="studio-page-kicker">
        <span aria-hidden="true" /> {eyebrow}
      </p>
      <div className="studio-writing-heading">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="studio-writing-edition">
        <span>THE FIELD NOTES</span>
        <span>Ideas, decisions & lessons from the work.</span>
      </div>
    </section>

    <section className="studio-writing-index">
      <div className="container">
        <details className="studio-writing-topics" open={Boolean(activeTagSlug)}>
          <summary>
            Browse by topic <span aria-hidden="true">+</span>
          </summary>
          <TagNav activeSlug={activeTagSlug} className="studio-writing-topic-links" />
        </details>

        {posts.length === 0 ? (
          <p className="text-default-500 text-lg">No posts published yet. The first ones are on their way.</p>
        ) : (
          <>
            <div className="studio-writing-grid">
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
  </div>
)

export default BlogListing
