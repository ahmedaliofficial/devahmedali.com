import '@/assets/css/style.css'
import favicon from '@/assets/images/favicon.ico'
import AppProvidersWrapper from '@/components/wrappers/AppProvidersWrapper'
import { DEFAULT_PAGE_TITLE } from '@/config/constants'
import type { Metadata } from 'next'
import { Google_Sans_Flex, Stack_Sans_Headline } from 'next/font/google'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

const googleSansFlex = Google_Sans_Flex({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
})

const stackSansHeadline = Stack_Sans_Headline({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${DEFAULT_PAGE_TITLE}`,
    default: DEFAULT_PAGE_TITLE,
  },
  icons: { icon: favicon.src },
  description: 'Habitline is a modern and fully responsive mobile app and SaaS landing page template built with Tailwind CSS 4. Perfect for AI startups, productivity apps, software products, digital platforms, and modern web applications.',
  keywords: ['mobile app template', 'saas landing page', 'tailwind css template', 'ai startup website', 'app landing page', 'productivity app template', 'software website template', 'startup landing page', 'web app template', 'saas html template'],
  authors: [{ name: 'Unifato' }],
  robots: 'index, follow',
}

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={`bg-body-bg ${googleSansFlex.variable} ${stackSansHeadline.variable}`} suppressHydrationWarning>
        <AppProvidersWrapper>{children}</AppProvidersWrapper>
      </body>
    </html>
  )
}

export default RootLayout
