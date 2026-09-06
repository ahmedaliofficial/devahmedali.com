import PipelineMini from '@/components/portfolio/PipelineMini'
import RollUpButton from '@/components/ui/RollUpButton'
import SectionHeading from '@/components/ui/SectionHeading'
import { trackhrs } from '@/content/case-studies/trackhrs'

const principles = [
  { title: 'Decouple what fails differently', description: 'Ingestion, processing and delivery each break for their own reasons. An event backbone between them means one slow stage never stalls the rest.' },
  { title: 'Make correctness explicit', description: 'Deduplication keys, idempotency and distributed locks are mechanisms, not hopes. If two replicas can process the same event, something must decide which one counts.' },
  { title: 'Design the failure path first', description: 'Retries, circuit breakers and dead-letter queues get designed alongside the happy path, because the happy path is not the one that pages you at 3am.' },
]

const PipelineTeaser = () => (
  <section className="bg-default-900 relative overflow-hidden py-16 md:py-24 lg:py-28">
    <span aria-hidden="true" className="bg-primary/20 absolute top-0 left-1/3 size-112 rounded-full blur-[120px]" />

    <div className="relative container">
      <SectionHeading
        tone="dark"
        eyebrow="How I think about systems"
        title="Every arrow in a diagram is a decision"
        description="Architecture is mostly about choosing what happens when something goes wrong. Here is the shape most of my systems take, and why each stage exists."
      />

      <PipelineMini steps={trackhrs.pipelineMini ?? []} tone="dark" className="mt-12 md:mt-16" />

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
        {principles.map((principle) => (
          <div key={principle.title}>
            <h3 className="font-heading text-lg font-semibold text-white">{principle.title}</h3>
            <p className="mt-2 text-base text-white/60">{principle.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <RollUpButton href="/work/trackhrs" label="See the full architecture" variant="light" icon="lucide:arrow-right" />
      </div>
    </div>
  </section>
)

export default PipelineTeaser
