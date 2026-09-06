import TechMarquee from '@/components/portfolio/TechMarquee'
import SectionHeading from '@/components/ui/SectionHeading'
import { skillGroups } from '@/content/skills'

const TechStack = () => (
  <section id="stack" className="scroll-mt-32 py-14 md:py-20">
    <div className="container">
      <SectionHeading eyebrow="Toolkit" title="The stack I reach for" description="Chosen per problem rather than per fashion — these are the tools I've taken to production often enough to know their failure modes." />
    </div>

    <TechMarquee className="mt-10 md:mt-12" />

    <div className="container">
      <div className="border-default-200 mt-10 grid grid-cols-1 gap-x-10 gap-y-8 border-t pt-8 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-default-900 text-sm font-semibold tracking-wide uppercase">{group.title}</h3>
            <p className="text-default-500 mt-2.5 text-sm leading-relaxed">{group.items.join(' · ')}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default TechStack
