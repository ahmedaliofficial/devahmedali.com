type ChipProps = {
  children: React.ReactNode
  tone?: 'light' | 'dark' | 'outline'
  className?: string
}

const tones = {
  light: 'bg-default-100 text-default-700',
  dark: 'bg-white/10 text-white/90',
  outline: 'border border-default-200 text-default-600',
}

const Chip = ({ children, tone = 'light', className = '' }: ChipProps) => <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${tones[tone]} ${className}`}>{children}</span>

export default Chip
