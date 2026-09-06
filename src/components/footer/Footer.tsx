import logo from '@/assets/images/logo.svg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

export type FooterLink = {
  label: string
  link: string
  className: string
}

export type SocialLink = {
  link: string
  icon: string
}

const pageLinks: FooterLink[] = [
  { label: 'Home', link: '/', className: 'mmd:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'About', link: '/about', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'Pricing', link: '/pricing', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'Contact', link: '/contact', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'Waitlist', link: '/waitlist', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
]

const otherLinks: FooterLink[] = [
  { label: 'Download', link: '/download', className: ' :text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'FAQs', link: '/faqs', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
  { label: 'Privacy Policy', link: '/privacy-policy', className: 'md:text-lg text-base text-default-600 hover:text-default-900 hover:underline underline-offset-4 decoration-2 transition-colors' },
]

const socialLinks: SocialLink[] = [
  { link: '', icon: 'tabler:brand-instagram' },
  { link: '', icon: 'tabler:brand-x-filled' },
  { link: '', icon: 'tabler:brand-linkedin-filled' },
  { link: '', icon: 'tabler:brand-facebook-filled' },
]

const Footer = () => {
  return (
    <footer className="bg-body-bg pt-20 pb-5 lg:pb-7.5">
      <div className="container">
        <div className="grid grid-cols-1 justify-between gap-7.5 md:grid-cols-4 md:gap-12.5 lg:gap-32">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-10 inline-block">
              <Image src={logo} alt="Habitline Logo" height={44} className="h-11" />
            </Link>

            <div className="lg:max-w-md">
              <h2 className="mb-2.5 text-xl font-medium md:text-2xl">Stay on top of your habits</h2>
              <p className="text-default-500 mb-5 text-lg">No spam. Just simple advice for staying consistent.</p>

              <form className="flex flex-col items-start gap-4 lg:flex-row lg:items-center">
                <input type="email" placeholder="Enter your email" required className="border-default-200 bg-default-200 text-default-900 placeholder:text-default-400 rounded-full border px-5 py-3 text-base transition-all focus:outline-none lg:w-lg!" />
                <button type="submit" className="bg-default-900 w-full rounded-full px-8 py-3.5 font-medium whitespace-nowrap text-white transition-all hover:scale-95 md:w-auto">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div>
            <h3 className="text-default-900 mb-5 text-base font-medium lg:mb-7.5">Pages links</h3>
            <div className="flex flex-col justify-end gap-2">
              {pageLinks.map((item, index) => (
                <Link key={index} href={item.link} className={item.className}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-default-900 mb-5 text-base font-medium lg:mb-7.5">Other links</h3>
            {otherLinks.map((item, index) => (
              <Link key={index} href={item.link} className={item.className}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-default-200 mt-6 flex flex-col items-center justify-start gap-5 border-t pt-5 md:mt-8 md:flex-row md:justify-between md:gap-6 md:pt-7.5 lg:mt-16">
          <p className="text-default-600 text-base md:text-lg">
            Develop by{' '}
            <a href="https://unifato.com/" target="_blank" className="text-default-900 font-medium hover:underline">
              Unifato
            </a>
          </p>

          <div className="flex items-center justify-start gap-2.5 md:justify-end">
            {socialLinks.map((item, index) => (
              <Link key={index} href={item.link} target="_blank" className="group bg-default-200 inline-flex size-9 items-center justify-center overflow-hidden rounded-full">
                <div className="relative size-4 overflow-hidden">
                  <Icon icon={item.icon} className="text-default-800 absolute inset-0 size-4 h-full w-full transition-transform duration-300 group-hover:-translate-y-[200%]" />
                  <Icon icon={item.icon} className="text-default-800 absolute inset-0 size-4 h-full w-full translate-y-[200%] transition-transform duration-300 group-hover:translate-y-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
