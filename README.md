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

Set `draft: true` in the frontmatter to keep a post out of the site. Reading time is calculated automatically. Styling for headings, lists, code blocks and links comes from `src/components/mdx/MdxComponents.tsx`.

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
│  ├─ (pages)/         # work, blog, about, contact, privacy-policy
│  ├─ api/contact/     # contact form endpoint
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

## Known issue

`pnpm lint` currently fails with a plugin error (`eslint-plugin-react` 7.37.5 is not compatible with ESLint 10). This came with the original template and is unrelated to the site code. Both `npx tsc --noEmit` and `pnpm build` type-check cleanly. Upgrading `eslint-config-next` / `eslint-plugin-react` will resolve it.
