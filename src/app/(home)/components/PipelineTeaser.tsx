import RollUpButton from '@/components/ui/RollUpButton'
import SectionHeading from '@/components/ui/SectionHeading'
import { impactStats } from '@/content/skills'

const principles = [
  { title: 'Decouple what fails differently', description: 'Ingestion, processing and delivery each break for their own reasons. An event backbone between them means one slow stage never stalls the rest.' },
  { title: 'Make correctness explicit', description: 'Deduplication keys, idempotency and distributed locks are mechanisms, not hopes. If two replicas can process the same event, something must decide which one counts.' },
  { title: 'Design the failure path first', description: 'Retries, circuit breakers and dead-letter queues get designed alongside the happy path, because the happy path is not the one that pages you at 3am.' },
]

const PipelineTeaser = () => (
  <section className="bg-default-900 relative overflow-hidden py-14 md:py-20">
    <span aria-hidden="true" className="bg-primary/20 absolute top-0 left-1/3 size-112 rounded-full blur-[120px]" />

    <div className="relative container">
      <SectionHeading
        tone="dark"
        eyebrow="How I think about systems"
        title="Every arrow in a diagram is a decision"
        description="Architecture is mostly about choosing what happens when something goes wrong. Three rules shape almost everything I build."
      />

      <div className="mt-10 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-3 md:gap-10">
        {principles.map((principle) => (
          <div key={principle.title}>
            <h3 className="font-heading text-lg font-semibold text-white">{principle.title}</h3>
            <p className="mt-2 text-base text-white/60">{principle.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t border-white/10 pt-8">
        <p className="text-sm font-medium tracking-wide text-white/50 uppercase">What that has produced</p>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-3xl leading-none font-semibold text-white md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-white">{stat.label}</p>
              <p className="mt-0.5 text-sm text-white/50">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <RollUpButton href="/work/trackhrs" label="See the full architecture" variant="light" icon="lucide:arrow-right" />
      </div>
    </div>
  </section>
)

export default PipelineTeaser
