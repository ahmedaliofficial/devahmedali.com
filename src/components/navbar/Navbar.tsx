'use client'

import appStoreIcon from '@/assets/images/icons/app-store.svg'
import playStoreIcon from '@/assets/images/icons/play-store.svg'
import logo from '@/assets/images/logo.svg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Features', href: '/home#features' },
  { label: 'Usecase', href: '/home#usecase' },
  { label: 'Metrics', href: '/home#metrics' },
  { label: 'Smart Assist', href: '/home#smart-assist' },
]

const dropdownItems: NavItem[] = [
  { label: 'Home', href: '/home' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
  { label: 'Waitlist', href: '/waitlist' },
  { label: 'Download', href: '/download' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
]

const Navbar = () => {
  const pathname = usePathname()
  const [currentHash, setCurrentHash] = useState('')

  useEffect(() => {
    setCurrentHash(window.location.hash)
    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const closeMenu = () => {
    const overlay = document.getElementById('mobile-menu')
    if (overlay && (window as any).HSOverlay) {
      ;(window as any).HSOverlay.close(overlay)
    }
  }

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0)
    }
    setCurrentHash(window.location.hash)
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

  useEffect(() => {
    const normalizedPathname = pathname === '/' ? '/home' : pathname
    if (normalizedPathname !== '/home') return

    const handleScrollSpy = () => {
      const sections = ['features', 'usecase', 'metrics', 'smart-assist']
      const scrollPosition = window.scrollY + window.innerHeight / 3

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setCurrentHash('#smart-assist')
        return
      }

      if (window.scrollY < 100) {
        setCurrentHash('')
        return
      }

      let currentActive = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const bottom = top + el.offsetHeight
          if (scrollPosition >= top && scrollPosition < bottom) {
            currentActive = `#${id}`
          }
        }
      }

      if (currentActive) {
        setCurrentHash(currentActive)
      }
    }

    window.addEventListener('scroll', handleScrollSpy)
    handleScrollSpy()
    return () => window.removeEventListener('scroll', handleScrollSpy)
  }, [pathname])

  const checkActive = (href: string) => {
    const [basePath, hash] = href.split('#')
    const normalizedPathname = pathname === '/' ? '/home' : pathname
    const normalizedBasePath = basePath === '/' ? '/home' : basePath

    if (normalizedPathname !== normalizedBasePath) return false
    if (hash) {
      return currentHash === `#${hash}`
    }
    return !currentHash
  }

  return (
    <header>
      <div className="nav-sticky navbar fixed inset-x-0 top-0 z-120 w-full">
        <div className="container py-3.5 md:py-5 lg:py-7.5">
          <div className="flex w-full items-center justify-between rounded-lg bg-white md:rounded-2xl lg:justify-center lg:bg-transparent">
            <div className="flex min-w-[175px] rounded-[20px] bg-white px-3 py-1.5 md:py-4 lg:p-4 lg:shadow-lg">
              <Link href="/" onClick={() => setCurrentHash('')}>
                <Image src={logo} alt="" className="h-7.5 md:h-8" />
              </Link>
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
                          onClick={() => {
                            const hash = item.href.split('#')[1]
                            setCurrentHash(hash ? `#${hash}` : '')
                          }}
                          className={`flex items-center justify-center rounded-2xl px-7 py-4 text-sm font-medium transition-all ${isActive ? 'bg-default-200 text-default-800' : 'text-default-700 hover:bg-default-200 hover:text-default-800'}`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}

                  <li className="hs-dropdown relative inline-flex [--trigger:hover]">
                    <button
                      id="hs-dropdown-hover-event"
                      type="button"
                      className="hs-dropdown-toggle hover:bg-default-200 hover:text-default-800 flex items-center justify-center gap-1 rounded-2xl px-7 py-4 text-sm transition-all focus:outline-hidden disabled:pointer-events-none disabled:opacity-50"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Dropdown"
                    >
                      Pages
                      <Icon icon="lucide:chevron-down" className="size-4" />
                    </button>

                    <div
                      className="hs-dropdown-menu duration hs-dropdown-open:opacity-100 mt-2 hidden min-w-44 rounded-xl bg-white opacity-0 transition-[opacity,margin] before:absolute before:inset-s-0 before:-top-4 before:h-4 before:w-full after:absolute after:inset-s-0 after:-bottom-4 after:h-4 after:w-full"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="hs-dropdown-hover-event"
                    >
                      <div className="space-y-0.5 p-2.5">
                        {dropdownItems.map((item, index) => {
                          const isActive = checkActive(item.href)
                          return (
                            <Link
                              key={index}
                              href={item.href}
                              onClick={() => {
                                const hash = item.href.split('#')[1]
                                setCurrentHash(hash ? `#${hash}` : '')
                              }}
                              className={`flex items-center gap-x-3.5 rounded-lg px-2.5 py-1.5 text-sm transition-all ${isActive ? 'bg-default-200 text-default-800 font-medium' : 'text-default-600 hover:text-default-800 hover:bg-default-200'}`}
                            >
                              {item.label}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden h-2.5 w-full transition-all duration-500 ease-in-out in-[.nav-sticky-on]:w-2.5 lg:flex"></div>

            <div className="flex items-center gap-1.25 rounded-[20px] bg-white p-1.5 shadow-lg lg:shadow-lg">
              <a href="https://www.apple.com/in/app-store/" target="_blank" aria-label="App Store" className="bg-default-200 group relative flex size-8.75 items-center justify-center overflow-hidden rounded-lg transition-all duration-300 md:h-12.5 md:w-12.5 md:rounded-2xl">
                <div className="relative flex items-center justify-center overflow-hidden">
                  <Image src={appStoreIcon} alt="Icon" className="size-4.5 transition-transform duration-300 group-hover:-translate-y-6 md:size-6" />
                  <Image src={appStoreIcon} alt="Icon" className="absolute size-4.5 translate-y-6 transition-transform duration-300 group-hover:translate-y-0 md:size-6" />
                </div>
              </a>

              <a
                href="https://play.google.com/store/games?device=windows"
                target="_blank"
                aria-label="App Store"
                className="bg-default-200 group relative flex size-8.75 items-center justify-center overflow-hidden rounded-lg transition-all duration-300 md:h-12.5 md:w-12.5 md:rounded-2xl"
              >
                <div className="relative flex items-center justify-center overflow-hidden">
                  <Image src={playStoreIcon} alt="Icon" className="size-4.5 transition-transform duration-300 group-hover:-translate-y-6 md:size-6" />
                  <Image src={playStoreIcon} alt="Icon" className="absolute size-4.5 translate-y-6 transition-transform duration-300 group-hover:translate-y-0 md:size-6" />
                </div>
              </a>

              <div className="flex items-center lg:hidden">
                <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="mobile-menu"
                  data-hs-overlay="#mobile-menu"
                  className="bg-default-200 flex size-8.75 items-center justify-center overflow-hidden rounded-lg transition-all duration-300 md:h-12.5 md:w-12.5 md:rounded-2xl"
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
        className="hs-overlay hs-overlay-open:translate-y-0 md:hs-overlay-open:top-24 hs-overlay-open:top-18 hs-overlay-open:opacity-100 fixed inset-x-0 top-0 z-110 mx-4 hidden h-50 -translate-y-full transform overflow-hidden rounded-lg bg-white opacity-0 shadow-xl transition-all duration-300 [--body-scroll:true] md:mx-5"
        role="dialog"
        tabIndex={-1}
        aria-labelledby="mobile-menu-label"
      >
        <div className="flex max-h-50 flex-col overflow-y-auto p-3">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => {
                const hash = item.href.split('#')[1]
                setCurrentHash(hash ? `#${hash}` : '')
                closeMenu()
              }}
              className="group text-default-600 hover:text-primary flex items-center p-1.5 text-base font-medium transition-all"
            >
              {item.label}
            </Link>
          ))}

          <div className="hs-accordion">
            <button type="button" className="hs-accordion-toggle group text-default-600 hover:text-primary flex items-center p-1.5 text-base font-medium transition-all" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
              Pages
              <Icon icon="tabler:chevron-down" className="ms-4" />
            </button>

            <div className="hs-accordion-content hidden w-full overflow-hidden ps-5 pb-4 transition-[height]">
              {dropdownItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => {
                    const hash = item.href.split('#')[1]
                    setCurrentHash(hash ? `#${hash}` : '')
                    closeMenu()
                  }}
                  className="text-default-600 hover:text-default-800 hover:bg-default-200 flex items-center gap-x-3.5 rounded-lg px-2.5 py-1.5 text-base focus:outline-hidden"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
