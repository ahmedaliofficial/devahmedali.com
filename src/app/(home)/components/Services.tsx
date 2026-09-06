import SectionHeading from '@/components/ui/SectionHeading'
import { services } from '@/content/services'
import { Icon } from '@iconify/react'

const accentClasses: Record<string, string> = {
  primary: 'bg-primary/10 text-primary',
  'primary-1': 'bg-primary-1/10 text-primary-1',
  'primary-2': 'bg-primary-2/10 text-primary-2',
  'primary-4': 'bg-primary-4/10 text-primary-4',
  'primary-6': 'bg-primary-6/10 text-primary-6',
  'primary-8': 'bg-primary-8/10 text-primary-8',
}

const Services = () => (
  <section id="services" className="scroll-mt-32 py-16 md:py-24">
    <div className="container">
      <SectionHeading eyebrow="What I do" title="From the first diagram to live traffic" description="Most of my work starts with a system that has outgrown its original design — or one that hasn't been designed yet. Here is where I'm most useful." />

      <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="border-default-200 flex flex-col rounded-3xl border bg-white p-6 transition-shadow duration-300 hover:shadow-lg md:p-8">
            <span className={`mb-5 inline-grid size-12 place-items-center rounded-full ${accentClasses[service.accent] ?? accentClasses.primary}`}>
              <Icon icon={service.icon} className="size-6" />
            </span>

            <h3 className="font-heading text-default-900 text-xl font-semibold">{service.title}</h3>
            <p className="text-default-500 mt-2.5 grow text-base">{service.description}</p>

            <ul className="mt-5 flex flex-col gap-2">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="text-default-600 flex items-start gap-2 text-sm">
                  <Icon icon="lucide:circle-check" className="text-default-400 mt-0.5 size-4 shrink-0" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Services
