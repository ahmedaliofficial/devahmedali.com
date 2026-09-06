import CaseStudyCard from '@/components/portfolio/CaseStudyCard'
import RollUpButton from '@/components/ui/RollUpButton'
import SectionHeading from '@/components/ui/SectionHeading'
import { getFeaturedCaseStudies } from '@/content/case-studies'

const FeaturedWork = () => {
  const [flagship, ...rest] = getFeaturedCaseStudies()

  return (
    <section id="work" className="scroll-mt-32 py-14 md:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title="Systems I designed and shipped"
          description="Four platforms, each with a different constraint at its centre: throughput, precision, latency or ambiguity. Every case study walks the architecture and the full pipeline, not the feature list."
        />

        <div className="mt-10 flex flex-col gap-4 md:mt-12">
          {flagship && <CaseStudyCard study={flagship} size="large" />}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {rest.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-5">
          <p className="text-default-500 max-w-2xl text-center text-base">
            These four go deep. Behind them sit <span className="text-default-900 font-medium">500+ delivered projects</span>, covering ecommerce and CMS platforms, ERP integrations, AI chatbots and agents, automation and internal tools, across client work and products of my own.
          </p>
          <RollUpButton href="/work" label="See all case studies" variant="outline" icon="lucide:arrow-right" />
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork
