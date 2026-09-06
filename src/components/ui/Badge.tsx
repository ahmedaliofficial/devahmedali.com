type BadgeProps = {
  children: React.ReactNode
  /** 'light' sits on the page background, 'glass' on dark/photo sections */
  variant?: 'light' | 'glass' | 'dark'
  icon?: React.ReactNode
  className?: string
}

const variants = {
  light: 'border-default-200 bg-white text-default-800',
  glass: 'border-white/15 bg-white/10 text-white backdrop-blur-md',
  dark: 'border-white/10 bg-white/5 text-white',
}

const Badge = ({ children, variant = 'light', icon, className = '' }: BadgeProps) => (
  <span className={`inline-flex items-center gap-2 rounded-full border px-5 py-1.5 text-sm font-medium ${variants[variant]} ${className}`}>
    {icon}
    {children}
  </span>
)

export default Badge
