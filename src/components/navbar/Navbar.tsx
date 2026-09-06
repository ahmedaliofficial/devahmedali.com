'use client'

import Logo from '@/components/Logo'
import { site } from '@/content/site'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

const Navbar = () => {
  const pathname = usePathname()

  const closeMenu = () => {
    const overlay = document.getElementById('mobile-menu')
    if (overlay && (window as any).HSOverlay) {
      ;(window as any).HSOverlay.close(overlay)
    }
  }

  useEffect(() => {
    closeMenu()
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      const stickyNav = document.querySelector('.nav-sticky')
      if (stickyNav) {
        const scTop = window.pageYOffset || document.documentElement.scrollTop
        if (scTop >= 100) {
          stickyNav.classList.add('nav-sticky-on')
        } else {
          stickyNav.classList.remove('nav-sticky-on')
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const checkActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header>
      <div className="nav-sticky navbar fixed inset-x-0 top-0 z-120 w-full">
        <div className="container py-3.5 md:py-5 lg:py-7.5">
          {/* .container drops its padding at lg, so the pills would otherwise sit flush
              against the viewport edges between 1024px and the 1200px max-width. */}
          <div className="flex w-full items-center justify-between rounded-lg bg-white px-3 py-2 md:rounded-2xl lg:justify-center lg:bg-transparent lg:mx-6 lg:px-0 lg:py-0 xl:mx-0">
            <div className="flex rounded-[20px] bg-white lg:min-w-43.75 lg:p-3 lg:shadow-lg">
              <Logo />
            </div>

            <div className="hidden h-2.5 w-full transition-all duration-500 ease-in-out in-[.nav-sticky-on]:w-2.5 lg:flex"></div>

            <div className="flex items-center justify-between">
              <div className="hidden rounded-[20px] bg-white p-1.5 whitespace-nowrap lg:block lg:shadow-lg">
                <ul id="navbar" className="flex items-center">
                  {navItems.map((item, index) => {
                    const isActive = checkActive(item.href)
                    return (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className={`flex items-center justify-center rounded-2xl px-7 py-4 text-sm font-medium transition-all ${isActive ? 'bg-default-200 text-default-800' : 'text-default-700 hover:bg-default-200 hover:text-default-800'}`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            <div className="hidden h-2.5 w-full transition-all duration-500 ease-in-out in-[.nav-sticky-on]:w-2.5 lg:flex"></div>

            <div className="flex items-center gap-1.25 rounded-[20px] bg-white lg:p-1.5 lg:shadow-lg">
              <Link href="/contact?intent=hire" className="text-default-800 hover:bg-default-200 hidden rounded-2xl px-5 py-4 text-sm font-medium whitespace-nowrap transition-all lg:block">
                Hire me
              </Link>

              <a href={site.socials.calendly} target="_blank" rel="noreferrer" className="bg-default-900 group relative hidden overflow-hidden rounded-2xl px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:scale-95 lg:block">
                <span className="relative block h-5 overflow-hidden whitespace-nowrap">
                  <span className="block transition-transform duration-300 group-hover:-translate-y-full">Get a consultation</span>
                  <span className="absolute inset-x-0 top-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">Get a consultation</span>
                </span>
              </a>

              <div className="flex items-center lg:hidden">
                <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="mobile-menu"
                  data-hs-overlay="#mobile-menu"
                  aria-label="Open menu"
                  className="bg-default-200 flex size-9.5 items-center justify-center overflow-hidden rounded-lg transition-all duration-300 md:h-12.5 md:w-12.5 md:rounded-2xl"
                >
                  <Icon icon="tabler:align-right" className="size-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className="hs-overlay hs-overlay-open:translate-y-0 md:hs-overlay-open:top-24 hs-overlay-open:top-18 hs-overlay-open:opacity-100 fixed inset-x-0 top-0 z-110 mx-4 hidden -translate-y-full transform overflow-hidden rounded-2xl bg-white opacity-0 shadow-xl transition-all duration-300 [--body-scroll:true] md:mx-5"
        role="dialog"
        tabIndex={-1}
        aria-labelledby="mobile-menu-label"
      >
        <div className="flex flex-col p-4">
          {navItems.map((item, index) => {
            const isActive = checkActive(item.href)
            return (
              <Link
                key={index}
                href={item.href}
                onClick={closeMenu}
                className={`flex items-center rounded-lg px-3 py-2.5 text-base font-medium transition-all ${isActive ? 'bg-default-200 text-default-900' : 'text-default-600 hover:bg-default-100 hover:text-default-900'}`}
              >
                {item.label}
              </Link>
            )
          })}

          <div className="border-default-200 mt-3 flex flex-col gap-2 border-t pt-3">
            <div className="flex items-center gap-2">
              <a href={site.socials.calendly} target="_blank" rel="noreferrer" onClick={closeMenu} className="bg-default-900 grow rounded-full px-5 py-3 text-center text-sm font-medium text-white transition-all hover:scale-95">
                Get a consultation
              </a>
              <Link href="/contact?intent=hire" onClick={closeMenu} className="border-default-300 text-default-900 shrink-0 rounded-full border px-5 py-3 text-sm font-medium transition-all hover:scale-95">
                Hire me
              </Link>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <a href={site.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="bg-default-200 text-default-800 inline-flex size-9 items-center justify-center rounded-full">
                <Icon icon="tabler:brand-github" className="size-4.5" />
              </a>
              <a href={site.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="bg-default-200 text-default-800 inline-flex size-9 items-center justify-center rounded-full">
                <Icon icon="tabler:brand-linkedin" className="size-4.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
