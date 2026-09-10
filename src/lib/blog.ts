import matter from 'gray-matter'
import fs from 'node:fs'
import path from 'node:path'

export type PostMeta = {
  slug: string
  title: string
  /** Shorter title for the <title> tag and SERP display; falls back to `title` when the H1-style title already fits. */
  seoTitle?: string
  description: string
  date: string
  /** ISO date of the last substantive edit; drives dateModified and og:modified_time. Defaults to `date`. */
  updated: string
  tags: string[]
  readingTime: number
}

export type Post = PostMeta & {
  content: string
}

const POSTS_DIR = path.join(process.cwd(), 'src', 'content', 'blog')

/** Minutes at 200 words per minute, never less than one. Shared with the expertise loader. */
export const readingTime = (content: string): number => {
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}

const parseFile = (filename: string): Post | null => {
  const slug = filename.replace(/\.mdx?$/, '')
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf8')
  const { data, content } = matter(raw)

  if (data.draft) return null

  const date = data.date ? new Date(data.date).toISOString() : new Date().toISOString()

  return {
    slug,
    title: String(data.title ?? slug),
    seoTitle: data.seoTitle ? String(data.seoTitle) : undefined,
    description: String(data.description ?? ''),
    date,
    updated: data.updated ? new Date(data.updated).toISOString() : date,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readingTime: readingTime(content),
    content,
  }
}

export const getAllPosts = (): PostMeta[] => {
  if (!fs.existsSync(POSTS_DIR)) return []

  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map(parseFile)
    .filter((post): post is Post => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(({ content: _content, ...meta }) => meta)
}

export const getPost = (slug: string): Post | null => {
  const candidates = [`${slug}.mdx`, `${slug}.md`]
  const filename = candidates.find((file) => fs.existsSync(path.join(POSTS_DIR, file)))
  if (!filename) return null

  return parseFile(filename)
}

export const formatPostDate = (date: string): string =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

/** Posts per page on /blog and /blog/page/[page]. */
export const POSTS_PER_PAGE = 12

/** "Distributed Systems" -> "distributed-systems". Tags are display strings; this is their URL form. */
export const tagToSlug = (tag: string): string =>
  tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

export type TagSummary = {
  tag: string
  slug: string
  count: number
}

/** Every tag in use, most-used first, alphabetical on ties. */
export const getAllTags = (): TagSummary[] => {
  const counts = new Map<string, number>()

  for (const post of getAllPosts()) {
    for (const tag of post.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1)
    }
  }

  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, slug: tagToSlug(tag), count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag))
}

/** Resolves a URL slug back to the display tag. Null when no post uses it. */
export const getTagBySlug = (slug: string): TagSummary | null => getAllTags().find((entry) => entry.slug === slug) ?? null

export const getPostsByTag = (tag: string): PostMeta[] => getAllPosts().filter((post) => post.tags.includes(tag))

/**
 * Posts sharing the most tags with this one, newest first on ties. Mirrors
 * getExpertiseRelatedPosts in lib/expertise.ts, minus the explicit-slug list:
 * blog posts have no relatedPosts frontmatter field, so overlap is the only signal.
 */
export const getRelatedPosts = (post: Pick<PostMeta, 'slug' | 'tags'>, limit = 3): PostMeta[] =>
  getAllPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => ({ candidate, score: candidate.tags.filter((tag) => post.tags.includes(tag)).length }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || new Date(b.candidate.date).getTime() - new Date(a.candidate.date).getTime())
    .slice(0, limit)
    .map(({ candidate }) => candidate)

export const getPageCount = (total: number): number => Math.max(1, Math.ceil(total / POSTS_PER_PAGE))

/** 1-indexed. Page 1 is served by /blog, pages 2+ by /blog/page/[page]. */
export const getPostsPage = (page: number, posts: PostMeta[] = getAllPosts()): PostMeta[] => posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)
