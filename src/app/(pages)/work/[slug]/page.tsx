import ContactCta from '@/components/ContactCta'
import ArchitectureDiagram from '@/components/portfolio/ArchitectureDiagram'
import { ProjectVisual } from '@/components/portfolio/CaseStudyCard'
import Pipeline from '@/components/portfolio/Pipeline'
import ProductGallery from '@/components/portfolio/ProductGallery'
import ServiceMap from '@/components/portfolio/ServiceMap'
import Arrow from '@/components/ui/Arrow'
import Chip from '@/components/ui/Chip'
import { caseStudies, getAdjacentCaseStudies, getCaseStudy } from '@/content/case-studies'
import { projectPresentation } from '@/content/portfolio'
import { site, WEBSITE_ID } from '@/content/site'
import { jsonLd, personRef } from '@/lib/schema'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type PageProps = { params: Promise<{ slug: string }> }
export const generateStaticParams = async () => caseStudies.map((study) => ({ slug: study.slug }))
export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return { title: 'Case study not found', robots: { index: false, follow: false } }
  return {
    title: study.meta.title,
    description: study.meta.description,
    alternates: { canonical: '/work/' + study.slug },
    openGraph: { type: 'article', title: study.meta.title, description: study.meta.description, url: '/work/' + study.slug },
    twitter: { card: 'summary_large_image', title: study.meta.title, description: study.meta.description },
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()
  const p = projectPresentation[slug]
  const { next } = getAdjacentCaseStudies(slug)
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: study.hero.title,
    headline: study.meta.title,
    description: study.meta.description,
    image: site.url + (p?.image || '/opengraph-image'),
    url: site.url + '/work/' + slug,
    creator: personRef(),
    isPartOf: { '@id': WEBSITE_ID },
    keywords: study.stack.join(', '),
  }
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Work', item: site.url + '/work' },
      { '@type': 'ListItem', position: 3, name: study.hero.title, item: site.url + '/work/' + slug },
    ],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }} />
      <section className="page-intro container">
        <Link href="/work" className="text-link mb-8">
          <span aria-hidden="true">←</span> All work
        </Link>
        <p className="eyebrow">{p?.category ?? study.hero.eyebrow}</p>
        <h1>
          {study.hero.title}
          <span className="text-primary">.</span>
        </h1>
        <p>{p?.description ?? study.hero.subtitle}</p>
        <div className="case-hero" style={{ background: p?.color }}>
          <ProjectVisual slug={slug} preload />
        </div>
        <p className="case-caption">{p?.caption}</p>
        <div className="case-meta">
          <div>
            <p>My role</p>
            {study.hero.role}
          </div>
          {study.hero.period && (
            <div>
              <p>Timeline</p>
              {study.hero.period}
            </div>
          )}
          <div>
            <p>Focus</p>
            {p?.outcome}
          </div>
          {study.hero.links?.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="text-link md:ml-auto">
              {link.label}
              <Arrow diagonal />
            </a>
          ))}
        </div>
      </section>
      <div className="container">
        <section className="case-overview">
          <div>
            <p className="eyebrow mb-4">The project</p>
            <h2>{study.overview.heading}</h2>
          </div>
          <div>
            {study.overview.paragraphs.slice(0, 2).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
        <div className="case-outcomes">
          {study.stats.slice(0, 3).map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        {slug === 'trackhrs' && <ProductGallery />}
        {slug === 'trackhrs' && (
          <section className="product-story">
            <div className="product-story-image">
              <Image src="/images/work/trackhrs-mobile-mockup.webp" alt="Source-based TrackHRS mobile mockup showing Home and Projects screens on two phones" width={1536} height={1024} sizes="(max-width: 767px) 100vw, 60vw" />
            </div>
            <div className="product-story-copy">
              <p className="eyebrow">Beyond the desk</p>
              <h2>
                Your workspace.
                <br />
                Wherever work happens.
              </h2>
              <p>The mobile app brings tasks, projects, conversations and attendance into a focused companion experience.</p>
              <ul>
                <li>Know what needs your attention today</li>
                <li>Follow projects and team conversations</li>
                <li>Review your attendance on the move</li>
              </ul>
              <p className="case-caption">Mobile UI mockup based on the implemented app. Illustrative data; mobile release is in development.</p>
            </div>
          </section>
        )}
        {slug === 'agentx' && (
          <section className="product-story">
            <div className="product-story-image">
              <Image src="/images/work/agentx-workflow-mockup.webp" alt="AgentX product mockup showing editable source code and a mobile application preview" width={1536} height={1024} sizes="(max-width: 767px) 100vw, 60vw" />
            </div>
            <div className="product-story-copy">
              <p className="eyebrow">From prompt to product</p>
              <h2>
                Build with AI.
                <br />
                Stay in control.
              </h2>
              <p>Start with an idea or a design. Work alongside coordinated agents, inspect the code, and see the product taking shape.</p>
              <ul>
                <li>Plan and build with specialised agents</li>
                <li>Edit real code and revisit previous versions</li>
                <li>Preview websites and mobile applications</li>
              </ul>
              <p className="case-caption">Mockups based on product documentation, adapted to AgentX branding. Demo content shown.</p>
            </div>
          </section>
        )}
        {slug === 'hysab-kytab' && (
          <section className="pb-16">
            <p className="eyebrow">The product experience</p>
            <h2 className="mt-4 text-3xl font-medium md:text-4xl">Making everyday money clearer.</h2>
            <div className="official-feature-grid">
              {[
                { image: '/images/work/hysab-pfm.webp', title: 'Understand your spending', description: 'A personal-finance overview with balances, spending categories and financial statements.' },
                { image: '/images/work/hysab-insights.webp', title: 'See the bigger picture', description: 'Useful insights that help customers make sense of their financial activity.' },
                { image: '/images/work/hysab-savings.webp', title: 'Build towards a goal', description: 'Savings targets and clear progress to help customers plan what comes next.' },
              ].map((feature) => (
                <div className="official-feature" key={feature.title}>
                  <Image src={feature.image} alt={feature.title + ' in the official Hysab Kytab product interface'} width={800} height={950} sizes="(max-width: 767px) 100vw, 33vw" />
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
            <p className="case-caption">
              Product imagery from{' '}
              <a href="https://www.hysabkytab.com/" target="_blank" rel="noreferrer" className="underline underline-offset-4">
                Hysab Kytab’s official website
              </a>
              . Interface design shown for product context; my role was backend engineering.
            </p>
          </section>
        )}
        <section className="pb-16">
          <p className="eyebrow">What I helped solve</p>
          <div className="mt-7 grid gap-8 md:grid-cols-3">
            {study.problems.map((problem, i) => (
              <div key={problem.title} className="border-default-200 border-t pt-5">
                <span className="text-primary text-xs">0{i + 1}</span>
                <h2 className="mt-4 text-xl font-medium">{problem.title}</h2>
                <p className="text-default-500 mt-3 text-sm leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </section>
        <details className="technical-details">
          <summary>
            Go deeper into the engineering<span>Architecture, tools, key decisions and delivery details.</span>
          </summary>
          {study.architecture && (
            <section className="technical-block">
              <h3>{study.architecture.heading}</h3>
              <p>{study.architecture.intro}</p>
              <ArchitectureDiagram layers={study.architecture.layers} />
            </section>
          )}
          <section className="technical-block">
            <h3>The toolkit</h3>
            <div className="flex flex-wrap gap-2">
              {study.stack.map((tech) => (
                <Chip key={tech}>{tech}</Chip>
              ))}
            </div>
          </section>
          {study.serviceComponents && (
            <section className="technical-block">
              <h3>How the platform fits together</h3>
              <ServiceMap components={study.serviceComponents} />
            </section>
          )}
          <section className="technical-block">
            <h3>{study.pipeline.heading}</h3>
            <p>{study.pipeline.intro}</p>
            <Pipeline steps={study.pipeline.steps} />
          </section>
          {study.techDecisions && (
            <section className="technical-block">
              <h3>Key technical decisions</h3>
              <div className="divide-default-200 divide-y">
                {study.techDecisions.map((decision) => (
                  <div key={decision.area} className="grid gap-3 py-5 md:grid-cols-3">
                    <p className="text-default-900 text-sm font-medium">
                      {decision.area}: {decision.choice}
                    </p>
                    <p className="text-default-500 text-sm leading-relaxed md:col-span-2">{decision.rationale}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          <section className="technical-block">
            <h3>What the work delivered</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {study.achievements.map((item) => (
                <div key={item.title}>
                  <h4 className="text-base font-medium">{item.title}</h4>
                  <p className="text-default-500 mt-2 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
          <div className="grid gap-10 py-6 md:grid-cols-2">
            {[
              ['Scaling & availability', study.scalability],
              ['Security & reliability', study.security],
            ].map(
              ([title, list]) =>
                Array.isArray(list) && (
                  <section key={String(title)}>
                    <h3 className="text-xl font-medium">{title}</h3>
                    <ul className="text-default-500 mt-4 list-disc space-y-3 pl-4 text-sm leading-relaxed">
                      {list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                )
            )}
          </div>
        </details>
        {next && (
          <Link href={'/work/' + next.slug} className="border-default-200 mb-16 flex items-center justify-between gap-4 rounded-xl border p-7 transition-colors hover:bg-white">
            <div>
              <p className="eyebrow">Next project</p>
              <h2 className="mt-2 text-2xl font-medium">{next.hero.title}</h2>
            </div>
            <Arrow diagonal />
          </Link>
        )}
      </div>
      <ContactCta heading="Building something like this?" description="Let’s talk about your idea, the problem you’re solving, and how I can help." />
    </>
  )
}
