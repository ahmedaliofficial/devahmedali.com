import Badge from './Badge'

type SectionHeadingProps = {
  eyebrow?: string
  title: React.ReactNode
  description?: string
  align?: 'center' | 'left'
  tone?: 'light' | 'dark'
  className?: string
}

const SectionHeading = ({ eyebrow, title, description, align = 'center', tone = 'light', className = '' }: SectionHeadingProps) => {
  const isDark = tone === 'dark'

  return (
    <div className={`flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-start'} ${className}`}>
      {eyebrow && <Badge variant={isDark ? 'dark' : 'light'}>{eyebrow}</Badge>}

      <h2 className={`mt-5 text-3xl leading-tight font-medium tracking-tight md:text-4xl lg:text-5xl ${isDark ? 'text-white' : 'text-default-900'}`}>{title}</h2>

      {description && <p className={`mt-4 max-w-2xl text-base md:text-lg ${isDark ? 'text-white/70' : 'text-default-500'}`}>{description}</p>}
    </div>
  )
}

export default SectionHeading
