import ContactCta from '@/components/ContactCta'
import ArchitectureDiagram from '@/components/portfolio/ArchitectureDiagram'
import Pipeline from '@/components/portfolio/Pipeline'
import ServiceMap from '@/components/portfolio/ServiceMap'
import StatsBand from '@/components/portfolio/StatsBand'
import Chip from '@/components/ui/Chip'
import SectionHeading from '@/components/ui/SectionHeading'
import { caseStudies, getAdjacentCaseStudies, getCaseStudy } from '@/content/case-studies'
import { site } from '@/content/site'
import { Icon } from '@iconify/react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type PageProps = {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = async () => caseStudies.map((study) => ({ slug: study.slug }))

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { slug } = await params
  const study = getCaseStudy(slug)

  if (!study) return { title: 'Case study not found' }

  return {
    title: study.meta.title,
    description: study.meta.description,
    alternates: { canonical: `/work/${study.slug}` },
    keywords: [...site.seo.keywords, ...study.stack],
    openGraph: {
      type: 'article',
      title: study.meta.title,
      description: study.meta.description,
      url: `/work/${study.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: study.meta.title,
      description: study.meta.description,
    },
  }
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params
  const study = getCaseStudy(slug)

  if (!study) notFound()

  const { previous, next } = getAdjacentCaseStudies(slug)

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Work', item: `${site.url}/work` },
      { '@type': 'ListItem', position: 3, name: study.hero.title, item: `${site.url}/work/${study.slug}` },
    ],
  }

  const creativeWorkJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: study.hero.title,
    headline: study.meta.title,
    description: study.meta.description,
    image: `${site.url}/opengraph-image`,
    url: `${site.url}/work/${study.slug}`,
    creator: { '@type': 'Person', name: site.name, url: site.url },
    keywords: study.stack.join(', '),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }} />

      {/* Hero */}
      <section className="pt-32.5 pb-12 md:pt-40 md:pb-16 lg:pt-50">
        <div className="container">
          <Link href="/work" className="text-default-500 hover:text-default-900 inline-flex items-center gap-1.5 text-sm font-medium transition-colors">
            <Icon icon="lucide:arrow-left" className="size-4" />
            All case studies
          </Link>

          <p className="text-default-500 mt-8 text-sm font-medium tracking-wide uppercase">{study.hero.eyebrow}</p>
          <h1 className="font-heading text-default-900 mt-3 text-4xl leading-tight font-medium tracking-tight md:text-6xl lg:text-7xl">{study.hero.title}</h1>
          <p className="text-default-500 mt-5 max-w-3xl text-lg md:text-xl">{study.hero.subtitle}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="text-default-700 inline-flex items-center gap-2 text-sm font-medium">
              <Icon icon="lucide:user" className="text-default-400 size-4" />
              {study.hero.role}
            </span>
            {study.hero.period && (
              <span className="text-default-700 inline-flex items-center gap-2 text-sm font-medium">
                <Icon icon="lucide:calendar" className="text-default-400 size-4" />
                {study.hero.period}
              </span>
            )}
            {study.hero.links?.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="text-default-900 inline-flex items-center gap-1.5 text-sm font-medium underline decoration-2 underline-offset-4 transition-opacity hover:opacity-70">
                <Icon icon={link.icon} className="size-4" />
                {link.label}
              </a>
            ))}
          </div>

          <div className="border-default-200 mt-10 border-t pt-10">
            <StatsBand stats={study.stats} columns={3} />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="font-heading text-default-900 text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl">{study.overview.heading}</h2>
              <div className="mt-6 flex flex-col gap-4">
                {study.overview.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-default-500 text-base md:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border-default-200 rounded-2xl border bg-white p-6 md:p-8">
                <h3 className="font-heading text-default-900 text-base font-semibold">Stack</h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {study.stack.map((tech) => (
                    <Chip key={tech}>{tech}</Chip>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-12 md:py-16">
        <div className="container">
          <SectionHeading align="left" eyebrow="The problem" title="What made this hard" />

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {study.problems.map((problem) => (
              <div key={problem.title} className="border-default-200 rounded-2xl border bg-white p-6">
                {problem.icon && (
                  <span className="bg-default-100 text-default-700 mb-4 inline-grid size-10 place-items-center rounded-full">
                    <Icon icon={problem.icon} className="size-5" />
                  </span>
                )}
                <h3 className="font-heading text-default-900 text-lg font-semibold">{problem.title}</h3>
                <p className="text-default-500 mt-2 text-base">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture diagram */}
      {study.architecture && (
        <section className="py-12 md:py-16">
          <div className="container">
            <SectionHeading align="left" eyebrow="System design" title={study.architecture.heading} description={study.architecture.intro} />
            <ArchitectureDiagram layers={study.architecture.layers} className="mt-10" />
          </div>
        </section>
      )}

      {/* Service map */}
      {study.serviceComponents && study.serviceComponents.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container">
            <SectionHeading align="left" eyebrow="Service map" title={`${study.serviceComponents.length} product components`} description="Each service owns one domain and can be deployed, scaled and owned independently." />
            <ServiceMap components={study.serviceComponents} className="mt-10" />
          </div>
        </section>
      )}

      {/* Pipeline */}
      <section className="py-12 md:py-20">
        <div className="container">
          <SectionHeading align="left" eyebrow="Architecture" title={study.pipeline.heading} description={study.pipeline.intro} />
          <Pipeline steps={study.pipeline.steps} className="mt-12 md:mt-16" />
        </div>
      </section>

      {/* Technology decisions */}
      {study.techDecisions && study.techDecisions.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container">
            <SectionHeading align="left" eyebrow="Decisions" title="Why these tools, and not others" />

            <div className="border-default-200 mt-10 flex flex-col divide-y divide-default-200 overflow-hidden rounded-2xl border bg-white">
              {study.techDecisions.map((decision) => (
                <div key={decision.area} className="grid grid-cols-1 gap-3 p-6 md:grid-cols-12 md:gap-6 md:p-8">
                  <p className="text-default-500 text-sm font-medium tracking-wide uppercase md:col-span-3">{decision.area}</p>
                  <p className="font-heading text-default-900 text-base font-semibold md:col-span-3">{decision.choice}</p>
                  <p className="text-default-500 text-base md:col-span-6">{decision.rationale}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Achievements */}
      <section className="py-12 md:py-16">
        <div className="container">
          <SectionHeading align="left" eyebrow="Outcome" title="What it delivered" />

          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
            {study.achievements.map((achievement) => (
              <div key={achievement.title} className="flex items-start gap-3.5">
                <Icon icon={achievement.icon ?? 'lucide:circle-check'} className="text-primary mt-0.5 size-5 shrink-0" />
                <div>
                  <h3 className="font-heading text-default-900 text-base font-semibold md:text-lg">{achievement.title}</h3>
                  <p className="text-default-500 mt-1 text-base">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scalability & security */}
      {(study.scalability || study.security) && (
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {study.scalability && (
                <div className="border-default-200 rounded-3xl border bg-white p-6 md:p-8">
                  <h3 className="font-heading text-default-900 flex items-center gap-2.5 text-xl font-semibold">
                    <Icon icon="lucide:trending-up" className="text-primary size-5" />
                    Scaling &amp; availability
                  </h3>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {study.scalability.map((item) => (
                      <li key={item} className="text-default-600 flex items-start gap-2.5 text-base">
                        <Icon icon="lucide:circle-check" className="text-default-400 mt-1 size-4 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {study.security && (
                <div className="border-default-200 rounded-3xl border bg-white p-6 md:p-8">
                  <h3 className="font-heading text-default-900 flex items-center gap-2.5 text-xl font-semibold">
                    <Icon icon="lucide:shield-check" className="text-primary size-5" />
                    Security &amp; reliability
                  </h3>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {study.security.map((item) => (
                      <li key={item} className="text-default-600 flex items-start gap-2.5 text-base">
                        <Icon icon="lucide:circle-check" className="text-default-400 mt-1 size-4 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Prev / next */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="border-default-200 grid grid-cols-1 gap-4 border-t pt-10 md:grid-cols-2">
            {previous && (
              <Link href={`/work/${previous.slug}`} className="border-default-200 group rounded-2xl border bg-white p-6 transition-shadow hover:shadow-md">
                <span className="text-default-500 inline-flex items-center gap-1.5 text-sm">
                  <Icon icon="lucide:arrow-left" className="size-4" />
                  Previous
                </span>
                <p className="font-heading text-default-900 mt-2 text-xl font-semibold">{previous.hero.title}</p>
              </Link>
            )}
            {next && (
              <Link href={`/work/${next.slug}`} className="border-default-200 group rounded-2xl border bg-white p-6 text-end transition-shadow hover:shadow-md md:col-start-2">
                <span className="text-default-500 inline-flex items-center gap-1.5 text-sm">
                  Next
                  <Icon icon="lucide:arrow-right" className="size-4" />
                </span>
                <p className="font-heading text-default-900 mt-2 text-xl font-semibold">{next.hero.title}</p>
              </Link>
            )}
          </div>
        </div>
      </section>

      <ContactCta heading="Building something like this?" description="If any of the problems above look familiar, I can help, whether that's a full architecture or a second opinion on the one you have." />
    </>
  )
}

export default Page
