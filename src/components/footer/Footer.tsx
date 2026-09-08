import Logo from '@/components/Logo'
import { caseStudies } from '@/content/case-studies'
import { site, socialLinks } from '@/content/site'
import { Icon } from '@iconify/react'
import Link from 'next/link'

export type FooterLink = {
  label: string
  href: string
  external?: boolean
}

const linkClasses = 'text-default-600 hover:text-default-900 text-base transition-colors decoration-2 underline-offset-4 hover:underline md:text-lg'

const exploreLinks: FooterLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const elsewhereLinks: FooterLink[] = [
  { label: 'GitHub', href: site.socials.github, external: true },
  { label: 'LinkedIn', href: site.socials.linkedin, external: true },
  { label: 'TrackHRS', href: site.socials.trackhrs, external: true },
  { label: 'Privacy Policy', href: '/privacy-policy' },
]

type FooterProps = {
  /** Role article links, resolved server-side and passed through AppProvidersWrapper */
  expertiseLinks?: FooterLink[]
}

const Footer = ({ expertiseLinks = [] }: FooterProps) => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-body-bg pt-20 pb-5 lg:pb-7.5">
      <div className="container">
        <div className="grid grid-cols-1 justify-between gap-7.5 md:grid-cols-2 md:gap-12.5 lg:grid-cols-5 lg:gap-16">
          <div className="md:col-span-2">
            <div className="mb-8 inline-block">
              <Logo />
            </div>

            <div className="lg:max-w-md">
              <h2 className="mb-2.5 text-xl font-medium md:text-2xl">Have a system to build?</h2>
              <p className="text-default-500 mb-5 text-lg">{site.availability}. Tell me what you&apos;re building and I&apos;ll tell you how I&apos;d architect it.</p>

              <a href={`mailto:${site.email}`} className="bg-default-900 group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-medium text-white transition-all hover:scale-95">
                {site.email}
                <Icon icon="lucide:arrow-up-right" className="size-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-default-900 mb-5 text-base font-medium lg:mb-7.5">Explore</h2>
            <div className="flex flex-col justify-end gap-2">
              {exploreLinks.map((item, index) => (
                <Link key={index} href={item.href} className={linkClasses}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {expertiseLinks.length > 0 && (
            <div>
              <h2 className="text-default-900 mb-5 text-base font-medium lg:mb-7.5">Expertise</h2>
              <div className="flex flex-col gap-2">
                {expertiseLinks.map((item) => (
                  <Link key={item.href} href={item.href} className={linkClasses}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-default-900 mb-5 text-base font-medium lg:mb-7.5">Case studies</h2>
            <div className="flex flex-col gap-2">
              {caseStudies.map((study) => (
                <Link key={study.slug} href={`/work/${study.slug}`} className={linkClasses}>
                  {study.hero.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-default-200 mt-6 grid grid-cols-1 gap-5 border-t pt-5 md:mt-8 md:pt-7.5 lg:mt-16">
          <div className="flex flex-col items-center justify-start gap-5 md:flex-row md:justify-between md:gap-6">
            <p className="text-default-600 text-base md:text-lg">
              © {year} {site.name}. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-start gap-x-5 gap-y-2 md:justify-end">
              {elsewhereLinks.map((item, index) =>
                item.external ? (
                  <a key={index} href={item.href} target="_blank" rel="noreferrer" className="text-default-600 hover:text-default-900 text-sm transition-colors">
                    {item.label}
                  </a>
                ) : (
                  <Link key={index} href={item.href} className="text-default-600 hover:text-default-900 text-sm transition-colors">
                    {item.label}
                  </Link>
                )
              )}

              <div className="flex items-center gap-2.5">
                {socialLinks.map((item, index) => (
                  <a key={index} href={item.href} target={item.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer" aria-label={item.label} className="group bg-default-200 inline-flex size-9 items-center justify-center overflow-hidden rounded-full">
                    <div className="relative size-4 overflow-hidden">
                      <Icon icon={item.icon} className="text-default-800 absolute inset-0 size-4 h-full w-full transition-transform duration-300 group-hover:-translate-y-[200%]" />
                      <Icon icon={item.icon} className="text-default-800 absolute inset-0 size-4 h-full w-full translate-y-[200%] transition-transform duration-300 group-hover:translate-y-0" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
