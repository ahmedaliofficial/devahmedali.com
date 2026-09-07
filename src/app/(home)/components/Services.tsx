import { StaggerGroup, StaggerItem } from '@/components/motion/Stagger'
import SpotlightCard from '@/components/ui/aceternity/SpotlightCard'
import RollUpButton from '@/components/ui/RollUpButton'
import SectionHeading from '@/components/ui/SectionHeading'
import { serviceAreas } from '@/content/services'
import { Icon } from '@iconify/react'

const accentClasses: Record<string, string> = {
  primary: 'bg-primary/10 text-primary',
  'primary-1': 'bg-primary-1/10 text-primary-1',
  'primary-2': 'bg-primary-2/10 text-primary-2',
  'primary-4': 'bg-primary-4/10 text-primary-4',
  'primary-6': 'bg-primary-6/10 text-primary-6',
  'primary-8': 'bg-primary-8/10 text-primary-8',
}

const dotClasses: Record<string, string> = {
  primary: 'bg-primary',
  'primary-1': 'bg-primary-1',
  'primary-2': 'bg-primary-2',
  'primary-4': 'bg-primary-4',
  'primary-6': 'bg-primary-6',
  'primary-8': 'bg-primary-8',
}

/** The cursor-following wash needs a literal colour, so the accent tokens are restated
 *  here as rgba rather than read from CSS variables at runtime. */
const spotlightColors: Record<string, string> = {
  primary: 'rgba(0, 34, 255, 0.10)',
  'primary-1': 'rgba(255, 76, 0, 0.10)',
  'primary-2': 'rgba(18, 167, 10, 0.10)',
  'primary-4': 'rgba(255, 0, 161, 0.10)',
  'primary-6': 'rgba(144, 0, 255, 0.10)',
  'primary-8': 'rgba(2, 131, 167, 0.12)',
}

const Services = () => (
  <section id="services" className="scroll-mt-32 py-14 md:py-20">
    <div className="container">
      <SectionHeading eyebrow="What I do" title="Four things I build, end to end" description="From the product your customers use down to the pipelines and infrastructure underneath it, designed, built and taken to production." />

      <StaggerGroup className="mt-10 grid grid-cols-1 gap-4 md:mt-12 lg:grid-cols-2">
        {serviceAreas.map((area) => (
          <StaggerItem key={area.number} className="h-full">
            <SpotlightCard color={spotlightColors[area.accent] ?? spotlightColors.primary} className="border-default-200 group h-full overflow-hidden rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-9">
              <span aria-hidden="true" className="font-heading text-default-100 absolute top-5 right-7 text-6xl leading-none font-semibold transition-transform duration-500 select-none group-hover:scale-110 md:text-7xl">
                {area.number}
              </span>

              <div className="relative">
                <span className={`inline-grid size-12 place-items-center rounded-full transition-transform duration-300 group-hover:scale-110 ${accentClasses[area.accent] ?? accentClasses.primary}`}>
                  <Icon icon={area.icon} className="size-6" />
                </span>

                <h3 className="font-heading text-default-900 mt-5 text-xl font-semibold md:text-2xl">{area.title}</h3>
                <p className="text-default-500 mt-2.5 max-w-md text-base">{area.description}</p>

                <ul className="border-default-200 mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 border-t pt-6 sm:grid-cols-2">
                  {area.services.map((service) => (
                    <li key={service} className="text-default-700 flex items-start gap-2.5 text-sm">
                      <span aria-hidden="true" className={`mt-1.5 size-1.5 shrink-0 rounded-full ${dotClasses[area.accent] ?? dotClasses.primary}`} />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <div className="mt-10 flex justify-center">
        <RollUpButton href="/services" label="Explore all services" variant="outline" icon="lucide:arrow-right" />
      </div>
    </div>
  </section>
)

export default Services
