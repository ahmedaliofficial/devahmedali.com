#!/usr/bin/env node
/**
 * Style gate for src/content/blog/*.mdx.
 *
 * The rules are not arbitrary: each one is a convention every existing post already
 * follows, so a new article that trips a check reads as written by someone else.
 * Em dashes in particular have a commit of their own (c8e562b) removing 103 of them.
 *
 *   node scripts/lint-content.mjs            check every post
 *   node scripts/lint-content.mjs a.mdx b    check named posts only
 */
import fs from 'node:fs'
import path from 'node:path'

const DIR = path.join(process.cwd(), 'src', 'content', 'blog')

const LIMITS = {
  words: [640, 900],
  title: [25, 90],
  seoTitle: [0, 52],
  description: [120, 175],
  tags: [3, 4],
  h2: [3, 5],
}

const inRange = (value, [min, max]) => value >= min && value <= max

/** gray-matter without the dependency: these files all use a simple --- fence. */
const splitFrontmatter = (raw) => {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  return match ? { fm: match[1], body: match[2] } : null
}

const readScalar = (fm, key) => {
  const match = fm.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))
  if (!match) return null
  return match[1].trim().replace(/^['"]|['"]$/g, '')
}

const readTags = (fm) => {
  const match = fm.match(/^tags:\s*\[(.*)\]\s*$/m)
  if (!match) return null
  return match[1]
    .split(',')
    .map((tag) => tag.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean)
}

/** Strip fenced code so code never trips the prose rules. */
const prose = (body) => body.replace(/^```[\s\S]*?^```/gm, '')

const check = (file) => {
  const raw = fs.readFileSync(path.join(DIR, file), 'utf8')
  const parts = splitFrontmatter(raw)
  const errors = []

  if (!parts) return [`${file}: no frontmatter block`]
  const { fm, body } = parts
  const text = prose(body)

  // Frontmatter
  const title = readScalar(fm, 'title')
  const seoTitle = readScalar(fm, 'seoTitle')
  const description = readScalar(fm, 'description')
  const date = readScalar(fm, 'date')
  const tags = readTags(fm)

  if (!title) errors.push('missing title')
  else if (!inRange(title.length, LIMITS.title)) errors.push(`title ${title.length} chars, want ${LIMITS.title.join(' to ')}`)

  if (seoTitle && seoTitle.length > LIMITS.seoTitle[1]) errors.push(`seoTitle ${seoTitle.length} chars, want under ${LIMITS.seoTitle[1]}`)

  if (!description) errors.push('missing description')
  else if (!inRange(description.length, LIMITS.description)) errors.push(`description ${description.length} chars, want ${LIMITS.description.join(' to ')}`)

  if (!date) errors.push('missing date')
  else if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) errors.push(`date "${date}" is not YYYY-MM-DD`)

  if (!tags) errors.push('missing or malformed tags array')
  else if (!inRange(tags.length, LIMITS.tags)) errors.push(`${tags.length} tags, want ${LIMITS.tags.join(' to ')}`)

  // Structure
  const words = body.trim().split(/\s+/).length
  if (!inRange(words, LIMITS.words)) errors.push(`${words} words, want ${LIMITS.words.join(' to ')}`)

  const h2 = (body.match(/^## /gm) ?? []).length
  if (!inRange(h2, LIMITS.h2)) errors.push(`${h2} h2 sections, want ${LIMITS.h2.join(' to ')}`)

  if (/^# /m.test(body)) errors.push('h1 in body: the page already renders one from the title')
  if (/^#{3,} /m.test(body)) errors.push('h3 or deeper: no existing post uses one')
  if (/^> /m.test(text)) errors.push('blockquote: no existing post uses one')
  if (/^(---|\*\*\*)\s*$/m.test(body.replace(/^[\s\S]*?\n/, ''))) errors.push('horizontal rule in body')

  const fences = (body.match(/^```/gm) ?? []).length / 2
  if (fences > 2) errors.push(`${fences} code blocks, want 0 to 2`)

  // Prohibited copy
  if (/[—–]/.test(raw)) errors.push('em dash or en dash: see commit c8e562b')
  if (/!(?![=[])/.test(text)) errors.push('exclamation mark in prose')
  if (/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(raw)) errors.push('emoji')
  if (/^!\[/m.test(body)) errors.push('image: no styling exists for img')

  // "leverag" only as the corporate verb. A hyphen in front makes it the noun,
  // as in "the highest-leverage thing to measure", which is fine and already in use.
  const marketing = text.match(/\b(game.?changer|seamless|cutting.edge|best.in.class|supercharge|revolutionis|unlock the|in today's world|dive in)\b|(?<!-)\bleverag(?:e|es|ing|ed)\b/gi)
  if (marketing) errors.push(`marketing vocabulary: ${[...new Set(marketing.map((m) => m.toLowerCase()))].join(', ')}`)

  const american = text.match(/\b(optimiz|behavior|analyz|organiz|specializ|summariz|realiz|standardiz|prioritiz|center(?:s|ed|ing)?)\b/gi)
  if (american) errors.push(`American spelling: ${[...new Set(american.map((m) => m.toLowerCase()))].join(', ')}`)

  // An article that opens with a heading has no lede.
  if (/^\s*#/.test(body)) errors.push('body opens with a heading, not a lede paragraph')

  return errors.map((error) => `${file}: ${error}`)
}

const requested = process.argv.slice(2).map((arg) => (arg.endsWith('.mdx') ? arg : `${arg}.mdx`))
const files = requested.length > 0 ? requested : fs.readdirSync(DIR).filter((file) => file.endsWith('.mdx'))

/**
 * Cross-links are written while sibling articles are still being drafted, so a typo or a
 * renamed slug produces a 404 that nothing else catches: Next only fails on a bad link at
 * request time, and the listing pages would never surface it.
 */
const slugs = new Set(
  fs
    .readdirSync(DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, '')),
)

const deadLinks = files.flatMap((file) => {
  const raw = fs.readFileSync(path.join(DIR, file), 'utf8')
  return [...raw.matchAll(/\]\(\/blog\/([a-z0-9-]+)\)/g)].filter((match) => !slugs.has(match[1])).map((match) => `${file}: link to /blog/${match[1]}, which does not exist`)
})

const failures = [...files.flatMap(check), ...deadLinks]

if (failures.length > 0) {
  console.error(failures.join('\n'))
  console.error(`\n${failures.length} problem(s) across ${files.length} file(s)`)
  process.exit(1)
}

console.log(`${files.length} file(s) pass`)
