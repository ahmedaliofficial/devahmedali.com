import type { ArchitectureLayer } from '@/content/case-studies/types'
import { Icon } from '@iconify/react'

type ArchitectureDiagramProps = {
  layers: ArchitectureLayer[]
  className?: string
}

/** High-level architecture as stacked layers with flow connectors between them.
 *  Built in HTML/CSS rather than an image so it stays legible and responsive. */
const ArchitectureDiagram = ({ layers, className = '' }: ArchitectureDiagramProps) => (
  <div className={`bg-default-900 relative overflow-hidden rounded-3xl p-5 md:p-8 ${className}`}>
    <span aria-hidden="true" className="bg-primary/15 absolute -top-24 left-1/3 size-96 rounded-full blur-[120px]" />

    <div className="relative flex flex-col">
      {layers.map((layer, index) => (
        <div key={layer.title}>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm md:p-6">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-heading text-base font-semibold text-white">{layer.title}</h3>
              {layer.caption && <p className="text-sm text-white/50">{layer.caption}</p>}
            </div>

            <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {layer.nodes.map((node) => (
                <div key={node.name} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5">
                  {node.icon && (
                    <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-white/10 text-white">
                      <Icon icon={node.icon} className="size-4" />
                    </span>
                  )}
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium text-white">{node.name}</span>
                    {node.tech && <span className="block truncate font-mono text-xs text-white/45">{node.tech}</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {index < layers.length - 1 && (
            <div aria-hidden="true" className="flex flex-col items-center py-2.5">
              <span className="h-5 w-px bg-white/20" />
              <Icon icon="lucide:chevron-down" className="-mt-1.5 size-4 text-white/30" />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)

export default ArchitectureDiagram
