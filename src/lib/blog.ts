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
