import TechMarquee from '@/components/portfolio/TechMarquee'
import Chip from '@/components/ui/Chip'
import SectionHeading from '@/components/ui/SectionHeading'
import { skillGroups } from '@/content/skills'
import { Icon } from '@iconify/react'

const TechStack = () => (
  <section id="stack" className="scroll-mt-32 py-16 md:py-24">
    <div className="container">
      <SectionHeading eyebrow="Toolkit" title="The stack I reach for" description="Chosen per problem rather than per fashion — but these are the tools I've taken to production often enough to know their failure modes." />
    </div>

    <TechMarquee className="mt-12 md:mt-16" />

    <div className="container">
      <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="border-default-200 rounded-2xl border bg-white p-6">
            <div className="flex items-center gap-2.5">
              <span className="bg-default-100 text-default-700 grid size-9 place-items-center rounded-full">
                <Icon icon={group.icon} className="size-4.5" />
              </span>
              <h3 className="font-heading text-default-900 text-base font-semibold">{group.title}</h3>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default TechStack
