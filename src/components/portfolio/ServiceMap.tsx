import Chip from '@/components/ui/Chip'
import type { ServiceComponent } from '@/content/case-studies/types'
import { Icon } from '@iconify/react'

type ServiceMapProps = {
  components: ServiceComponent[]
  className?: string
}

/** Accent rotation reuses the palette already defined in assets/css/_config.css */
const accents = ['bg-primary/10 text-primary', 'bg-primary-1/10 text-primary-1', 'bg-primary-2/10 text-primary-2', 'bg-primary-6/10 text-primary-6', 'bg-primary-8/10 text-primary-8', 'bg-primary-4/10 text-primary-4']

const ServiceMap = ({ components, className = '' }: ServiceMapProps) => (
  <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
    {components.map((component, index) => (
      <div key={component.name} className="border-default-200 flex flex-col rounded-2xl border bg-white p-5 transition-shadow duration-300 hover:shadow-md">
        <span className={`mb-4 inline-grid size-10 place-items-center rounded-full ${accents[index % accents.length]}`}>
          <Icon icon={component.icon} className="size-5" />
        </span>

        <h3 className="text-default-900 font-mono text-sm font-semibold">{component.name}</h3>
        <p className="text-default-500 mt-1.5 grow text-sm leading-relaxed">{component.role}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {component.tech.map((tech) => (
            <Chip key={tech} tone="outline">
              {tech}
            </Chip>
          ))}
        </div>
      </div>
    ))}
  </div>
)

export default ServiceMap
