import ProcessFlow from '@/components/portfolio/ProcessFlow'
import SectionHeading from '@/components/ui/SectionHeading'
import { referenceFlows } from '@/content/reference-flows'
import { Icon } from '@iconify/react'

const accentClasses: Record<string, string> = {
  primary: 'bg-primary/10 text-primary',
  'primary-1': 'bg-primary-1/10 text-primary-1',
  'primary-6': 'bg-primary-6/10 text-primary-6',
  'primary-8': 'bg-primary-8/10 text-primary-8',
}

const ReferenceFlows = () => (
  <section id="approach" className="scroll-mt-32 py-14 md:py-20">
    <div className="container">
      <SectionHeading
        eyebrow="Reference architectures"
        title="How I&apos;d build what you&apos;re asking for"
        description="The four systems clients ask for most often, and the shape each one takes before a single line is written. Yours will differ in the details, but the structure rarely does."
      />

      <div className="mt-10 grid grid-cols-1 gap-4 md:mt-12">
        {referenceFlows.map((flow) => (
          <div key={flow.id} className="border-default-200 rounded-3xl border bg-white p-6 md:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-10">
              <div className="lg:w-80 lg:shrink-0">
                <span className={`inline-grid size-11 place-items-center rounded-full ${accentClasses[flow.accent] ?? accentClasses.primary}`}>
                  <Icon icon={flow.icon} className="size-5" />
                </span>
                <h3 className="font-heading text-default-900 mt-4 text-lg font-semibold md:text-xl">{flow.title}</h3>
                <p className="text-default-500 mt-2 text-sm md:text-base">{flow.description}</p>
              </div>

              <ProcessFlow steps={flow.steps} className="grow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default ReferenceFlows
