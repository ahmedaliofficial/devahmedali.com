'use client'

import Logo from '@/components/Logo'
import Arrow from '@/components/ui/Arrow'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const items = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuPath, setMenuPath] = useState<string | null>(null)
  const open = menuPath === pathname
  const toggle = useRef<HTMLButtonElement>(null)
  const header = useRef<HTMLElement>(null)

  useEffect(() => {
    const close = () => setMenuPath(null)
    const desktop = window.matchMedia('(min-width: 768px)')
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) close()
    }
    window.addEventListener('popstate', close)
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      window.removeEventListener('popstate', close)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuPath(null)
        toggle.current?.focus()
      }
    }
    const onPointer = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setMenuPath(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  return (
    <header
      ref={header}
      className="site-header"
      onClick={(event) => {
        if ((event.target as Element).closest('a')) setMenuPath(null)
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenuPath(null)
      }}
    >
      <div className="header-shell">
        <div className="header-inner">
          <Logo showMark={false} className="header-brand" />
          <nav aria-label="Main navigation" className="header-desktop-nav">
            {items.map((item) => (
              <Link key={item.href} href={item.href} aria-current={pathname.startsWith(item.href) ? 'page' : undefined} className="header-nav-link">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="header-contact-link header-project-link">
            Start a project <Arrow diagonal />
          </Link>
          <button ref={toggle} type="button" onClick={() => setMenuPath(open ? null : pathname)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" className="header-menu-toggle">
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
        <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!open} className="header-mobile-nav">
          {items.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname.startsWith(item.href) ? 'page' : undefined} className="header-nav-link">
              {item.label}
              <Arrow diagonal />
            </Link>
          ))}
          <Link href="/contact" className="header-contact-link">
            Start a project <Arrow diagonal />
          </Link>
        </nav>
      </div>
    </header>
  )
}
