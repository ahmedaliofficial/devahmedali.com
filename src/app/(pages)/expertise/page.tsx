import ContactCta from '@/components/ContactCta'
import StatsBand from '@/components/portfolio/StatsBand'
import RollUpButton from '@/components/ui/RollUpButton'
import SectionHeading from '@/components/ui/SectionHeading'
import { PERSON_ID, site, WEBSITE_ID } from '@/content/site'
import { headlineStats } from '@/content/skills'
import { expertisePath, getAllExpertise, type ExpertiseMeta } from '@/lib/expertise'
import { breadcrumbJsonLd, jsonLd } from '@/lib/schema'
import { Icon } from '@iconify/react'
import type { Metadata } from 'next'
import Link from 'next/link'

const EXPERTISE_DESCRIPTION = 'Software architect and engineer in Karachi, Pakistan, remote for US, UK and EU teams. One article per role: architecture, backend, full stack, AI and leadership.'

export const metadata: Metadata = {
  title: 'Expertise: Architect & Engineer in Pakistan',
  description: EXPERTISE_DESCRIPTION,
  alternates: { canonical: '/expertise' },
  keywords: [...site.seo.keywords, ...getAllExpertise().flatMap((entry) => entry.keywords)],
  openGraph: {
    type: 'website',
    title: 'Expertise, role by role',
    description: EXPERTISE_DESCRIPTION,
    url: '/expertise',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expertise, role by role',
    description: EXPERTISE_DESCRIPTION,
  },
}

const overlap = [
  {
    icon: 'lucide:map-pin',
    title: `Based in ${site.location.label}`,
    description: `${site.location.utcOffset}. My working day runs late enough to meet the UK and US East Coast live, and the rest happens asynchronously.`,
  },
  {
    icon: 'lucide:clock',
    title: 'Overlap that actually works',
    description: 'The whole UK working day. The US East Coast morning. Most of the European day. Enough live time for decisions, and written work for the rest.',
  },
  {
    icon: 'lucide:file-text',
    title: 'Written by default',
    description: 'Design documents, decision records, recorded walkthroughs and asynchronous review. Distributed teams get better documentation out of me than co-located ones ever did.',
  },
]

const ExpertiseCard = ({ entry }: { entry: ExpertiseMeta }) => (
  <Link href={expertisePath(entry.slug)} className="border-default-200 group flex flex-col rounded-3xl border bg-white p-6 transition-shadow duration-300 hover:shadow-lg md:p-8">
    <span className="bg-default-100 text-default-700 mb-5 inline-grid size-11 place-items-center rounded-full">
      <Icon icon={entry.icon} className="size-5" />
    </span>
    <p className="text-default-500 text-sm font-medium tracking-wide uppercase">{entry.eyebrow}</p>
    <h3 className="font-heading text-default-900 mt-2 text-xl font-semibold md:text-2xl">{entry.role}</h3>
    <p className="text-default-500 mt-2.5 text-base">{entry.description}</p>
    <span className="text-default-900 mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium">
      Read the article
      <span className="text-default-400 font-normal">· {entry.readingTime} min</span>
      <Icon icon="lucide:arrow-up-right" className="size-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </span>
  </Link>
)

const Page = () => {
  const entries = getAllExpertise()
  const roles = entries.filter((entry) => entry.kind === 'role')
  const technologies = entries.filter((entry) => entry.kind === 'technology')

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${site.url}/expertise`,
    name: 'Expertise, role by role',
    description: EXPERTISE_DESCRIPTION,
    url: `${site.url}/expertise`,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': PERSON_ID },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: entries.map((entry, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: entry.role,
        url: `${site.url}${expertisePath(entry.slug)}`,
      })),
    },
  }

  const crumbsJsonLd = breadcrumbJsonLd([
    { name: 'Home', path: '' },
    { name: 'Expertise', path: '/expertise' },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(collectionJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(crumbsJsonLd) }} />

      <section className="pt-32.5 pb-12 md:pt-40 md:pb-16 lg:pt-50">
        <div className="container">
          <p className="text-default-500 text-sm font-medium tracking-wide uppercase">Expertise</p>
          <h1 className="font-heading text-default-900 mt-3 max-w-4xl text-4xl leading-tight font-medium tracking-tight md:text-6xl lg:text-7xl">What I do, role by role</h1>
          <p className="text-default-500 mt-5 max-w-3xl text-lg md:text-xl">
            One article for each role I work in, written about the work itself: the decisions, the systems and the numbers behind them. I&apos;m a software architect and engineer based in {site.location.label}, working remotely with teams in the{' '}
            {site.remoteMarkets.slice(0, -1).join(', ')} and {site.remoteMarkets[site.remoteMarkets.length - 1]}.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <RollUpButton href="/work" label="See the case studies" variant="dark" icon="lucide:arrow-right" />
            <RollUpButton href="/contact" label="Start a conversation" variant="outline" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container">
          <SectionHeading align="left" eyebrow="Roles" title="Seven roles, one engineer" description="The same systems, described from the seat I was sitting in when I built them. Start with the one closest to what you need." />
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((entry) => (
              <ExpertiseCard key={entry.slug} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      {technologies.length > 0 && (
        <section className="py-12 md:py-20">
          <div className="container">
            <SectionHeading align="left" eyebrow="Technologies" title="The stacks behind the roles" description="Deeper notes on the three technologies I am most often brought in for, and when each is the right choice." />
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              {technologies.map((entry) => (
                <ExpertiseCard key={entry.slug} entry={entry} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="remote" className="scroll-mt-32 py-12 md:py-20">
        <div className="container">
          <SectionHeading align="left" eyebrow="Working together" title="Based in Karachi, working with teams everywhere" description="Most of my work is for companies in the United States, the United Kingdom and Europe. Here is how the time difference actually plays out." />
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {overlap.map((item) => (
              <div key={item.title} className="border-default-200 rounded-3xl border bg-white p-6 md:p-8">
                <span className="bg-default-100 text-default-700 mb-5 inline-grid size-11 place-items-center rounded-full">
                  <Icon icon={item.icon} className="size-5" />
                </span>
                <h3 className="font-heading text-default-900 text-lg font-semibold md:text-xl">{item.title}</h3>
                <p className="text-default-500 mt-2.5 text-base">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-default-500 mt-8 max-w-3xl text-base md:text-lg">
            Engagements range from a single consultation call to an architecture audit, a scoped delivery, or joining a team long term as an architect or engineering lead. The{' '}
            <Link href="/services" className="text-default-900 font-medium underline decoration-2 underline-offset-4 transition-opacity hover:opacity-70">
              services page
            </Link>{' '}
            describes each model.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container">
          <div className="border-default-200 border-t pt-10">
            <StatsBand stats={headlineStats} columns={4} />
          </div>
        </div>
      </section>

      <ContactCta heading="Not sure which role you need?" description="Describe the system and the problem. I'll tell you which hat I'd wear and what I'd do first." />
    </>
  )
}

export default Page
