# Ahmed Ali Portfolio

Personal portfolio and case-study site for Ahmed Ali, Software Architect & Engineering Lead (distributed systems, AI platforms, full-stack delivery).

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4.

## Running it

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
```

## Where the content lives

All copy is data, not markup. You edit content files, never components.

| What | File |
|---|---|
| Name, role, tagline, email, socials, SEO defaults | `src/content/site.ts` |
| Services on the homepage | `src/content/services.ts` |
| Tech stack, marquee logos, headline stats | `src/content/skills.ts` |
| Case studies | `src/content/case-studies/*.ts` |
| Blog posts | `src/content/blog/*.mdx` |

### Adding a case study

1. Create `src/content/case-studies/my-project.ts` and export a `CaseStudy` object. Copy an existing file as a starting point: `omnivision.ts` is the smallest, `trackhrs.ts` shows every optional section.
2. Register it in `src/content/case-studies/index.ts` (add the import and put it in the `caseStudies` array).
3. Set `order` to control where it appears and `featured: true` to show it on the homepage.

The page at `/work/[slug]` builds itself from that object. Optional sections (`serviceComponents`, `techDecisions`, `scalability`, `security`, `pipelineMini`) render only when present, so a smaller project can omit them.

The shape is defined in `src/content/case-studies/types.ts`, and TypeScript will tell you if something is missing.

### Adding a blog post

Drop a `.mdx` file into `src/content/blog/`. The filename becomes the URL slug.

```mdx
---
title: 'Your title'
description: 'One or two sentences shown in listings and search results.'
date: '2026-09-20'
tags: ['Kafka', 'Architecture']
---

Your content here.
```

Set `draft: true` in the frontmatter to keep a post out of the site, including the sitemap and every listing. `seoTitle` overrides the `<title>` tag when the headline is too long for a search result, and `updated` sets `dateModified` when you revise a post. Reading time is calculated automatically. Styling for headings, lists, code blocks and links comes from `src/components/mdx/MdxComponents.tsx`.

Nothing needs registering. A new file appears in the listing, the sitemap, its own OG image, the `Blog` JSON-LD, the tag hubs for its tags, and the homepage teaser if it qualifies.

**Tags are functional, not decorative.** Each one gets a hub at `/blog/tag/<slug>`, and related posts under an article are ranked by tag overlap. Reusing an existing tag string puts a post into that cluster; a new tag creates a new hub. `src/content/expertise/*.mdx` also match blog posts by tag through their `blogTags` field.

**Listing routes.** `/blog` shows the newest 12 with pagination at `/blog/page/[page]`, and each tag hub paginates the same way. Page 1 is always the base path, never `/page/1`, so there is one canonical URL per page.

### Blog house style

Run `pnpm lint:content` before committing an article. It enforces the conventions the whole corpus follows, so a new post does not read as though someone else wrote it:

- 640 to 900 words, three to five `##` sections, no `#` (the page renders the title as the h1) and no `###`
- no em dashes, which have [their own commit](https://github.com/ahmedaliofficial/devahmedali.com/commit/c8e562b) removing 103 of them, plus no exclamation marks, blockquotes, emoji or images
- British spelling, and no marketing vocabulary
- frontmatter within the limits that keep OG images from clipping: title under 90 characters, `seoTitle` under 52, description 120 to 175
- cross-links must point at slugs that exist

All 59 posts pass, including the nine that predate the linter, which is what makes it a description of the existing style rather than a new one imposed on top.

### Adding an expertise article

The `/expertise` section is one article per role (software architect, backend engineer, and so on), written for role + location searches. Drop a `.mdx` file into `src/content/expertise/`; the filename becomes the URL slug and the hub, sitemap and Person `hasOccupation` schema all pick it up automatically. These pages are deliberately not in the navbar or footer: they exist for search traffic and are reached from the sitemap, the About page and each other.

```mdx
---
title: 'Backend engineering for event-driven, high-throughput systems'   # H1
seoTitle: 'Backend Engineer in Karachi, Pakistan'                          # <title>, keep under ~48 chars
description: 'Under 155 characters. Used for meta, OG and the hero lead.'
role: 'Backend Engineer'      # card title, Occupation name, prev/next label
kind: role                    # role | technology
eyebrow: 'Expertise · Backend'
icon: 'lucide:server'
order: 3
published: '2026-09-08'
updated: '2026-09-08'         # bump by hand when the content changes; drives sitemap + dateModified
keywords: ['backend engineer Pakistan', 'remote backend engineer']
stats:                        # exactly three, rendered as a StatsBand
  - { value: '100K+', label: 'Events per day', description: 'Kafka in production' }
caseStudies: ['hysab-kytab']  # slugs from src/content/case-studies; a typo fails the build
skillGroups: ['Backend & APIs']  # titles from src/content/skills.ts; a typo fails the build
blogTags: ['Kafka']           # related posts are ranked by tag overlap
relatedPosts: []              # optional explicit post slugs, shown first
faq:
  - question: '...'
    answer: >-
      Multi-sentence answers use a folded scalar like this one.
cta: { heading: '...', description: '...' }
---

Body in MDX. Start headings at `##`; the page owns the `<h1>`.
```

Copy rules for these articles: no em dashes, British spelling, every number traceable to a case study or `skills.ts`, and the role plus "Karachi, Pakistan" named once in the opening paragraph rather than repeated. Do not add per-city variants of a page; that is a doorway page.

## Contact form

Submissions POST to `src/app/api/contact/route.ts`, which sends mail through [Resend](https://resend.com).

Copy `.env.example` to `.env.local` and fill in:

- `RESEND_API_KEY`: from your Resend dashboard
- `CONTACT_TO_EMAIL`: where messages are delivered
- `CONTACT_FROM_EMAIL`: must be a domain verified in Resend

**Without a key the site still works.** The API returns a 503 and the form shows a direct `mailto:` link instead, so nothing breaks before you configure it.

The form includes a honeypot field and server-side validation (required fields, email format, 5000-character message cap).

## Structure

```
src/
├─ app/
│  ├─ (home)/          # homepage + its sections
│  ├─ (pages)/         # work, blog, about, contact, privacy-policy, terms
│  ├─ api/contact/     # contact form endpoint
│  ├─ ads.txt/         # AdSense ads.txt, served only when NEXT_PUBLIC_ADSENSE_CLIENT is set
│  ├─ sitemap.ts, robots.ts, opengraph-image.tsx
│  └─ layout.tsx       # fonts, global metadata
├─ components/
│  ├─ ui/              # Badge, Chip, RollUpButton, SectionHeading, Accordion
│  ├─ portfolio/       # Pipeline, ServiceMap, StatsBand, TerminalCard, CaseStudyCard…
│  ├─ mdx/             # MDX element styling
│  ├─ navbar/, footer/, Logo.tsx, ContactCta.tsx
├─ content/            # all site copy (see table above)
├─ lib/blog.ts         # MDX frontmatter reading, sorting, reading time
└─ assets/css/         # _config.css holds the design tokens
```

## Design tokens

Tailwind v4 is configured in CSS, not a JS config. Colors, fonts and spacing live in `src/assets/css/_config.css` under `@theme`. Change `--color-primary` there and it updates everywhere.

Fonts: **Stack Sans Headline** for headings, **Google Sans Flex** for body.

## SEO

`sitemap.xml` and `robots.txt` generate from the case-study registry and blog files automatically, so new content appears without touching them. Social preview images render via `next/og`. Set the production domain in `src/content/site.ts` (`url`).

Structured data: the root layout emits one JSON-LD graph (`WebSite` + `Person`, built in `src/lib/schema.ts`) and every page references those nodes by `@id` instead of repeating them. The `Person` node carries `address` (Karachi, Pakistan) and one `Occupation` per role article.

Location rule: `site.location` exists for structured data and the `/expertise` pages only. The hero, About, footer, contact panel and root OG image deliberately stay "remote, worldwide"; do not render the location there.

Search Console: set `GOOGLE_SITE_VERIFICATION` at build time (see `.env.example`; in Docker it is a build arg) and the verification meta tag is emitted. Left empty, no tag is rendered.

## Known issue

`pnpm lint` currently fails with a plugin error (`eslint-plugin-react` 7.37.5 is not compatible with ESLint 10). This came with the original template and is unrelated to the site code. Both `npx tsc --noEmit` and `pnpm build` type-check cleanly. Upgrading `eslint-config-next` / `eslint-plugin-react` will resolve it.

## Google AdSense

The site is AdSense-ready but ships with ads **off**. Everything hangs off one variable:

```
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
```

Take the id from AdSense → Account → Settings → Account information, put it in `.env`, and rebuild. It has to be present at **build** time (pages are prerendered), so a runtime-only env var does nothing. `docker-compose.yml` forwards it from `.env` as a build arg because `.dockerignore` excludes `.env` from the image build.

With the id set, `src/config/adsense.ts` flips the whole site into its advertising state:

- `src/app/layout.tsx` injects the AdSense loader into `<head>` of every page. That is the snippet Google's site verification looks for.
- `/ads.txt` is served by `src/app/ads.txt/route.ts` with the matching `google.com, pub-…, DIRECT, f08c47fec0942fa0` line.
- `/privacy-policy` and `/terms` switch to their advertising wording: cookie disclosure, Google's required AdSense statements, opt-out links, and the EEA/UK/Switzerland consent section.
- The footer shows a **Privacy settings** link that reopens Google's consent message so visitors can change their choice.

Without the id none of that renders, and the privacy policy truthfully says the site has no advertising.

Things that live in the AdSense dashboard, not in this repo:

1. **Privacy & messaging → European regulations**: create and publish the GDPR message. Google requires a certified consent management platform for EEA/UK/Swiss visitors, and this built-in one is certified. The site does not ship its own cookie banner for that reason.
2. **Ads → By site → Auto ads**: turn on once the site is approved. The head script is all Auto ads need, so no ad-unit components are required.
3. **Sites → Add site**: `devahmedali.com`, then request review. `robots.txt` already lets `Mediapartners-Google` crawl everything.
