export type TerminalLine = {
  prompt?: string
  text: string
  tone?: 'ok' | 'info' | 'dim' | 'warn'
}

type TerminalCardProps = {
  title?: string
  lines: TerminalLine[]
  className?: string
}

const toneClasses = {
  ok: 'text-emerald-400',
  info: 'text-sky-300',
  warn: 'text-amber-300',
  dim: 'text-default-400',
}

/** Code-built hero visual, replacing the template's app screenshots. */
const TerminalCard = ({ title = 'ahmed@prod: activity-pipeline', lines, className = '' }: TerminalCardProps) => (
  <div className={`bg-default-900 overflow-hidden rounded-2xl border border-white/10 shadow-2xl ${className}`}>
    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
      <span aria-hidden="true" className="flex gap-1.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
      </span>
      <span className="text-default-400 ms-2 truncate font-mono text-xs">{title}</span>
    </div>

    <div className="overflow-x-auto p-4 md:p-5">
      <pre className="font-mono text-xs leading-relaxed md:text-sm">
        <code>
          {lines.map((line, index) => (
            <span key={index} className="block whitespace-pre">
              {line.prompt && <span className="text-primary-2">{line.prompt} </span>}
              <span className={toneClasses[line.tone ?? 'dim']}>{line.text}</span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  </div>
)

export default TerminalCard
