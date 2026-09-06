import CaseStudyCard from '@/components/portfolio/CaseStudyCard'
import RollUpButton from '@/components/ui/RollUpButton'
import SectionHeading from '@/components/ui/SectionHeading'
import { getFeaturedCaseStudies } from '@/content/case-studies'

const FeaturedWork = () => {
  const [flagship, ...rest] = getFeaturedCaseStudies()

  return (
    <section id="work" className="scroll-mt-32 py-16 md:py-24">
      <div className="container">
        <SectionHeading eyebrow="Selected work" title="Systems I designed and shipped" description="Four platforms, each with a different constraint at its centre — throughput, precision, latency or ambiguity. Every case study walks the full pipeline." />

        <div className="mt-12 flex flex-col gap-4 md:mt-16">
          {flagship && <CaseStudyCard study={flagship} size="large" />}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {rest.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <RollUpButton href="/work" label="See all case studies" variant="outline" icon="lucide:arrow-right" />
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork
