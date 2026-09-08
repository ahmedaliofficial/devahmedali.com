import { getCaseStudy, type CaseStudy } from '@/content/case-studies'
import type { CaseStudyStat } from '@/content/case-studies/types'
import { skillGroups, type SkillGroup } from '@/content/skills'
import { getAllPosts, readingTime, type PostMeta } from '@/lib/blog'
import matter from 'gray-matter'
import fs from 'node:fs'
import path from 'node:path'

/** `role` pages describe a job title; `technology` pages describe a stack Ahmed is hired for. */
export type ExpertiseKind = 'role' | 'technology'

export type ExpertiseFaq = { question: string; answer: string }

export type ExpertiseMeta = {
  slug: string
  /** H1. Sentence-case, carries the keyword and the angle of the article. */
  title: string
  /** <title> tag. The root template appends " | Ahmed Ali", so keep it under ~48 characters. */
  seoTitle: string
  /** Meta description, OG description and the hero lead. Under 155 characters. */
  description: string
  /** Occupation name, hub card title, prev/next label, OG eyebrow. e.g. "Software Architect" */
  role: string
  kind: ExpertiseKind
  eyebrow: string
  /** Iconify id for the hub card */
  icon: string
  order: number
  /** ISO dates. `updated` drives sitemap lastModified, Article.dateModified and the visible "Updated" line. */
  published: string
  updated: string
  keywords: string[]
  /** Three numbers rendered with <StatsBand columns={3}>, chosen per article so the pages differ. */
  stats: CaseStudyStat[]
  /** Case-study slugs; validated at load so a typo fails the build instead of dropping a card. */
  caseStudies: string[]
  /** Titles from skills.ts `skillGroups`; validated at load. */
  skillGroups: string[]
  /** Blog tags used to rank related posts */
  blogTags: string[]
  /** Explicit related post slugs, shown before tag matches */
  relatedPosts: string[]
  faq: ExpertiseFaq[]
  cta: { heading: string; description: string }
  readingTime: number
}

export type Expertise = ExpertiseMeta & { content: string }

const EXPERTISE_DIR = path.join(process.cwd(), 'src', 'content', 'expertise')

const strings = (value: unknown): string[] => (Array.isArray(value) ? value.map(String) : [])

const isRecord = (value: unknown): value is Record<string, unknown> => !!value && typeof value === 'object'

const parseFaq = (value: unknown): ExpertiseFaq[] => (Array.isArray(value) ? value.filter((item): item is Record<string, unknown> => isRecord(item) && 'question' in item && 'answer' in item).map((item) => ({ question: String(item.question), answer: String(item.answer) })) : [])

const parseStats = (value: unknown): CaseStudyStat[] =>
  Array.isArray(value)
    ? value.filter((item): item is Record<string, unknown> => isRecord(item) && 'value' in item && 'label' in item).map((item) => ({ value: String(item.value), label: String(item.label), description: item.description ? String(item.description) : undefined }))
    : []

/** gray-matter hands back a Date for unquoted YAML dates and a string for quoted ones; new Date() takes both. */
const isoDate = (value: unknown, fallback: string): string => (value ? new Date(String(value)).toISOString() : fallback)

const parseFile = (filename: string): Expertise | null => {
  const slug = filename.replace(/\.mdx?$/, '')
  const raw = fs.readFileSync(path.join(EXPERTISE_DIR, filename), 'utf8')
  const { data, content } = matter(raw)

  if (data.draft) return null

  const kind = data.kind === 'technology' ? 'technology' : data.kind === 'role' || data.kind === undefined ? 'role' : null
  if (!kind) throw new Error(`expertise/${filename}: kind must be "role" or "technology", got "${String(data.kind)}"`)

  const caseStudySlugs = strings(data.caseStudies)
  const unknownStudies = caseStudySlugs.filter((candidate) => !getCaseStudy(candidate))
  if (unknownStudies.length > 0) throw new Error(`expertise/${filename}: unknown case study slug(s): ${unknownStudies.join(', ')}`)

  const groupTitles = strings(data.skillGroups)
  const unknownGroups = groupTitles.filter((title) => !skillGroups.some((group) => group.title === title))
  if (unknownGroups.length > 0) throw new Error(`expertise/${filename}: unknown skill group(s): ${unknownGroups.join(', ')}`)

  const updated = isoDate(data.updated, new Date().toISOString())
  const cta = isRecord(data.cta) ? data.cta : {}

  return {
    slug,
    title: String(data.title ?? slug),
    seoTitle: String(data.seoTitle ?? data.title ?? slug),
    description: String(data.description ?? ''),
    role: String(data.role ?? data.title ?? slug),
    kind,
    eyebrow: String(data.eyebrow ?? 'Expertise'),
    icon: String(data.icon ?? 'lucide:briefcase'),
    order: Number(data.order ?? 99),
    published: isoDate(data.published, updated),
    updated,
    keywords: strings(data.keywords),
    stats: parseStats(data.stats),
    caseStudies: caseStudySlugs,
    skillGroups: groupTitles,
    blogTags: strings(data.blogTags),
    relatedPosts: strings(data.relatedPosts),
    faq: parseFaq(data.faq),
    cta: {
      heading: String(cta.heading ?? 'Have a system to build?'),
      description: String(cta.description ?? "Tell me what you're building and where it is getting difficult, and I'll tell you how I'd approach it."),
    },
    readingTime: readingTime(content),
    content,
  }
}

export const getAllExpertise = (): ExpertiseMeta[] => {
  if (!fs.existsSync(EXPERTISE_DIR)) return []

  return fs
    .readdirSync(EXPERTISE_DIR)
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map(parseFile)
    .filter((entry): entry is Expertise => entry !== null)
    .sort((a, b) => a.order - b.order)
    .map(({ content: _content, ...meta }) => meta)
}

export const getExpertise = (slug: string): Expertise | null => {
  const candidates = [`${slug}.mdx`, `${slug}.md`]
  const filename = candidates.find((file) => fs.existsSync(path.join(EXPERTISE_DIR, file)))
  if (!filename) return null

  return parseFile(filename)
}

/** Previous/next at the foot of an article, wrapping around the ordered list */
export const getAdjacentExpertise = (slug: string) => {
  const all = getAllExpertise()
  const index = all.findIndex((entry) => entry.slug === slug)
  if (index === -1) return { previous: undefined, next: undefined }

  return {
    previous: all[(index - 1 + all.length) % all.length],
    next: all[(index + 1) % all.length],
  }
}

export const expertisePath = (slug: string) => `/expertise/${slug}`

export const getExpertiseCaseStudies = (entry: Pick<ExpertiseMeta, 'caseStudies'>): CaseStudy[] => entry.caseStudies.map(getCaseStudy).filter((study): study is CaseStudy => study !== undefined)

export const getExpertiseSkillGroups = (entry: Pick<ExpertiseMeta, 'skillGroups'>): SkillGroup[] => entry.skillGroups.map((title) => skillGroups.find((group) => group.title === title)).filter((group): group is SkillGroup => group !== undefined)

/** Explicit relatedPosts first, then posts ranked by tag overlap, newest first on ties */
export const getExpertiseRelatedPosts = (entry: Pick<ExpertiseMeta, 'blogTags' | 'relatedPosts'>, limit = 3): PostMeta[] => {
  const posts = getAllPosts()
  const explicit = entry.relatedPosts.map((slug) => posts.find((post) => post.slug === slug)).filter((post): post is PostMeta => post !== undefined)

  const scored = posts
    .filter((post) => !explicit.includes(post))
    .map((post) => ({ post, score: post.tags.filter((tag) => entry.blogTags.includes(tag)).length }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || new Date(b.post.date).getTime() - new Date(a.post.date).getTime())
    .map(({ post }) => post)

  return [...explicit, ...scored].slice(0, limit)
}
