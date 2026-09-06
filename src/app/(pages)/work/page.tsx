import ContactCta from '@/components/ContactCta'
import CaseStudyCard from '@/components/portfolio/CaseStudyCard'
import { caseStudies } from '@/content/case-studies'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Case studies in distributed systems, FinTech, real-time AI and SaaS, each one walking the architecture from first constraint to production pipeline.',
  alternates: { canonical: '/work' },
}

const Page = () => {
  const [flagship, ...rest] = caseStudies

  return (
    <>
      <section className="pt-32.5 pb-12 md:pt-40 md:pb-16 lg:pt-50">
        <div className="container">
          <p className="text-default-500 text-sm font-medium tracking-wide uppercase">Case studies</p>
          <h1 className="font-heading text-default-900 mt-3 max-w-4xl text-4xl leading-tight font-medium tracking-tight md:text-6xl lg:text-7xl">Systems I designed and shipped</h1>
          <p className="text-default-500 mt-5 max-w-3xl text-lg md:text-xl">
            Each of these platforms had a different constraint at its centre: throughput, precision, latency or ambiguity. The write-ups follow the architecture rather than the feature list, because the architecture is where the decisions live.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="flex flex-col gap-4">
            {flagship && <CaseStudyCard study={flagship} size="large" />}

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {rest.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  )
}

export default Page
