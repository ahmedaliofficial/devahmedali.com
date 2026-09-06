import TechMarquee from '@/components/portfolio/TechMarquee'
import SectionHeading from '@/components/ui/SectionHeading'
import { skillGroups } from '@/content/skills'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const TechStack = () => (
  <section id="stack" className="scroll-mt-32 py-14 md:py-20">
    <div className="container">
      <SectionHeading eyebrow="Toolkit" title="The stack I reach for" description="Chosen per problem rather than per fashion — these are the tools I've taken to production often enough to know their failure modes." />
    </div>

    <TechMarquee className="mt-10 md:mt-12" />

    <div className="container">
      <div className="border-default-200 mt-10 flex flex-col items-center gap-3 border-t pt-8">
        <p className="text-default-500 max-w-4xl text-center text-sm md:text-base">{skillGroups.map((group) => group.title).join(' · ')}</p>
        <Link href="/about#toolkit" className="text-default-900 inline-flex items-center gap-1.5 text-sm font-medium underline decoration-2 underline-offset-4 transition-opacity hover:opacity-70">
          See the full toolkit
          <Icon icon="lucide:arrow-right" className="size-4" />
        </Link>
      </div>
    </div>
  </section>
)

export default TechStack
