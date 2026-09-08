import ContactCta from '@/components/ContactCta'
import { mdxComponents } from '@/components/mdx/MdxComponents'
import CaseStudyCard from '@/components/portfolio/CaseStudyCard'
import StatsBand from '@/components/portfolio/StatsBand'
import Accordion from '@/components/ui/Accordion'
import Chip from '@/components/ui/Chip'
import RollUpButton from '@/components/ui/RollUpButton'
import SectionHeading from '@/components/ui/SectionHeading'
import { site, WEBSITE_ID } from '@/content/site'
import { formatPostDate } from '@/lib/blog'
import { expertisePath, getAdjacentExpertise, getAllExpertise, getExpertise, getExpertiseCaseStudies, getExpertiseRelatedPosts, getExpertiseSkillGroups } from '@/lib/expertise'
import { breadcrumbJsonLd, faqPageJsonLd, jsonLd, occupationLocation, personRef } from '@/lib/schema'
import { Icon } from '@iconify/react'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import remarkGfm from 'remark-gfm'

type PageProps = {
  params: Promise<{ slug: string }>
}

/** Every article is known at build time; anything else is a 404, not a runtime render. */
export const dynamicParams = false

export const generateStaticParams = async () => getAllExpertise().map((entry) => ({ slug: entry.slug }))

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { slug } = await params
  const entry = getExpertise(slug)

  if (!entry) return { title: 'Not found', robots: { index: false, follow: false } }

  return {
    // seoTitle carries the role + location; the root template appends " | Ahmed Ali"
    title: entry.seoTitle,
    description: entry.description,
    alternates: { canonical: expertisePath(entry.slug) },
    keywords: [...site.seo.keywords, ...entry.keywords],
    openGraph: {
      type: 'article',
      title: entry.title,
      description: entry.description,
      url: expertisePath(entry.slug),
      publishedTime: entry.published,
      modifiedTime: entry.updated,
      authors: [site.name],
      section: 'Expertise',
      tags: entry.keywords,
    },
    twitter: {
      card: 'summary_large_image',
      title: entry.seoTitle,
      description: entry.description,
    },
  }
}

const remoteMarkets = `Remote for teams in the ${site.remoteMarkets.slice(0, -1).join(', ')} and ${site.remoteMarkets[site.remoteMarkets.length - 1]}`

const Page = async ({ params }: PageProps) => {
  const { slug } = await params
  const entry = getExpertise(slug)

  if (!entry) notFound()

  const studies = getExpertiseCaseStudies(entry)
  const posts = getExpertiseRelatedPosts(entry)
  const groups = getExpertiseSkillGroups(entry)
  const { previous, next } = getAdjacentExpertise(slug)
  const url = `${site.url}${expertisePath(entry.slug)}`

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: entry.title,
    alternativeHeadline: entry.seoTitle,
    description: entry.description,
    // Root OG image on purpose: per-route opengraph-image files are served at hash-suffixed
    // paths (e.g. /opengraph-image-uytwyn) that cannot be referenced from here. Only the root one is stable.
    image: `${site.url}/opengraph-image`,
    datePublished: entry.published,
    dateModified: entry.updated,
    wordCount: entry.content.trim().split(/\s+/).length,
    keywords: entry.keywords.join(', '),
    articleSection: 'Expertise',
    inLanguage: 'en',
    author: personRef(),
    publisher: personRef(),
    isPartOf: { '@id': WEBSITE_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    about: { '@type': 'Occupation', name: entry.role, occupationLocation: occupationLocation() },
    mentions: studies.map((study) => ({ '@type': 'CreativeWork', name: study.hero.title, url: `${site.url}/work/${study.slug}` })),
  }

  const crumbsJsonLd = breadcrumbJsonLd([
    { name: 'Home', path: '' },
    { name: 'Expertise', path: '/expertise' },
    { name: entry.role, path: expertisePath(entry.slug) },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(crumbsJsonLd) }} />
      {entry.faq.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqPageJsonLd(entry.faq)) }} />}

      <article>
        <section className="pt-32.5 pb-12 md:pt-40 md:pb-16 lg:pt-50">
          <div className="container">
            <Link href="/expertise" className="text-default-500 hover:text-default-900 inline-flex items-center gap-1.5 text-sm font-medium transition-colors">
              <Icon icon="lucide:arrow-left" className="size-4" />
              All expertise
            </Link>

            <p className="text-default-500 mt-8 text-sm font-medium tracking-wide uppercase">{entry.eyebrow}</p>
            <h1 className="font-heading text-default-900 mt-3 max-w-4xl text-4xl leading-tight font-medium tracking-tight md:text-6xl lg:text-7xl">{entry.title}</h1>
            <p className="text-default-500 mt-5 max-w-3xl text-lg md:text-xl">{entry.description}</p>

            <div className="text-default-700 mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium">
              <span className="inline-flex items-center gap-2">
                <Icon icon="lucide:map-pin" className="text-default-400 size-4" />
                {site.location.label}
              </span>
              <span className="inline-flex items-center gap-2">
                <Icon icon="lucide:globe" className="text-default-400 size-4" />
                {remoteMarkets}
              </span>
              <span className="inline-flex items-center gap-2">
                <Icon icon="lucide:calendar" className="text-default-400 size-4" />
                Updated <time dateTime={entry.updated}>{formatPostDate(entry.updated)}</time>
              </span>
              <span className="inline-flex items-center gap-2">
                <Icon icon="lucide:clock" className="text-default-400 size-4" />
                {entry.readingTime} min read
              </span>
            </div>

            {entry.stats.length > 0 && (
              <div className="border-default-200 mt-12 border-t pt-10">
                <StatsBand stats={entry.stats} columns={3} />
              </div>
            )}
          </div>
        </section>

        <section className="pb-12 md:pb-20">
          <div className="container">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-8">
                <MDXRemote source={entry.content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
              </div>

              <aside className="lg:col-span-4">
                <div className="border-default-200 rounded-3xl border bg-white p-6 md:p-8 lg:sticky lg:top-32">
                  <h2 className="font-heading text-default-900 text-lg font-semibold">At a glance</h2>
                  <dl className="mt-5 flex flex-col gap-4">
                    <div>
                      <dt className="text-default-500 text-sm">Role</dt>
                      <dd className="text-default-900 font-medium">{entry.role}</dd>
                    </div>
                    <div>
                      <dt className="text-default-500 text-sm">Based in</dt>
                      <dd className="text-default-900 font-medium">
                        {site.location.label} <span className="text-default-500 font-normal">({site.location.utcOffset})</span>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-default-500 text-sm">Works with</dt>
                      <dd className="text-default-900 font-medium">{site.remoteMarkets.join(', ')} and worldwide, remote</dd>
                    </div>
                    <div>
                      <dt className="text-default-500 text-sm">Experience</dt>
                      <dd className="text-default-900 font-medium">{site.experience.label} years across FinTech, AI and SaaS</dd>
                    </div>
                  </dl>

                  {groups.length > 0 && (
                    <div className="border-default-200 mt-6 border-t pt-6">
                      {groups.map((group) => (
                        <div key={group.title} className="mt-4 first:mt-0">
                          <p className="text-default-500 flex items-center gap-2 text-sm">
                            <Icon icon={group.icon} className="size-4" />
                            {group.title}
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {group.items.map((item) => (
                              <Chip key={item}>{item}</Chip>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-8 flex flex-col gap-2">
                    <RollUpButton href={site.socials.calendly} label="Book a 30-minute call" variant="dark" icon="lucide:arrow-right" external />
                    <RollUpButton href="/contact" label="Send a message" variant="outline" />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </article>

      {studies.length > 0 && (
        <section className="py-12 md:py-20">
          <div className="container">
            <SectionHeading align="left" eyebrow="In practice" title="Where this shows up in the work" description="The case studies behind the claims on this page, with the architecture, the trade-offs and the numbers." />
            <div className={`mt-10 grid grid-cols-1 gap-4 ${studies.length > 2 ? 'lg:grid-cols-3' : 'md:grid-cols-2'}`}>
              {studies.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </div>
          </div>
        </section>
      )}

      {posts.length > 0 && (
        <section className="py-12 md:py-20">
          <div className="container">
            <SectionHeading align="left" eyebrow="Writing" title="Notes from the same territory" />
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="border-default-200 group flex flex-col rounded-3xl border bg-white p-6 transition-shadow duration-300 hover:shadow-lg">
                  <div className="text-default-500 flex flex-wrap items-center gap-3 text-sm">
                    <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                    <span aria-hidden="true" className="bg-default-300 size-1 rounded-full" />
                    <span>{post.readingTime} min read</span>
                  </div>
                  <h3 className="font-heading text-default-900 mt-3 text-lg font-semibold md:text-xl">{post.title}</h3>
                  <p className="text-default-500 mt-2.5 text-base">{post.description}</p>
                  <span className="text-default-900 mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium">
                    Read post
                    <Icon icon="lucide:arrow-up-right" className="size-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {entry.faq.length > 0 && (
        <section className="py-12 md:py-20">
          <div className="container">
            <SectionHeading align="left" eyebrow="Common questions" title={`Questions people ask about working with me as a ${entry.role.toLowerCase()}`} />
            <Accordion items={entry.faq} className="mt-10 max-w-3xl" />
          </div>
        </section>
      )}

      {previous && next && (
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Link href={expertisePath(previous.slug)} className="border-default-200 group rounded-3xl border bg-white p-6 transition-shadow duration-300 hover:shadow-lg md:p-8">
                <p className="text-default-500 inline-flex items-center gap-1.5 text-sm font-medium">
                  <Icon icon="lucide:arrow-left" className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                  Previous
                </p>
                <p className="font-heading text-default-900 mt-3 text-xl font-semibold md:text-2xl">{previous.role}</p>
                <p className="text-default-500 mt-2 text-base">{previous.description}</p>
              </Link>
              <Link href={expertisePath(next.slug)} className="border-default-200 group rounded-3xl border bg-white p-6 text-end transition-shadow duration-300 hover:shadow-lg md:p-8">
                <p className="text-default-500 inline-flex items-center gap-1.5 text-sm font-medium">
                  Next
                  <Icon icon="lucide:arrow-right" className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </p>
                <p className="font-heading text-default-900 mt-3 text-xl font-semibold md:text-2xl">{next.role}</p>
                <p className="text-default-500 mt-2 text-base">{next.description}</p>
              </Link>
            </div>
          </div>
        </section>
      )}

      <ContactCta heading={entry.cta.heading} description={entry.cta.description} />
    </>
  )
}

export default Page
