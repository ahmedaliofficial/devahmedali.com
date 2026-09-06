import '@/assets/css/style.css'
import favicon from '@/assets/images/favicon.ico'
import AppProvidersWrapper from '@/components/wrappers/AppProvidersWrapper'
import { DEFAULT_PAGE_TITLE } from '@/config/constants'
import { site } from '@/content/site'
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
  metadataBase: new URL(site.url),
  title: {
    template: `%s | ${site.name}`,
    default: DEFAULT_PAGE_TITLE,
  },
  icons: { icon: favicon.src },
  description: site.seo.description,
  keywords: [...site.seo.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  robots: 'index, follow',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: DEFAULT_PAGE_TITLE,
    description: site.seo.description,
    url: site.url,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_PAGE_TITLE,
    description: site.seo.description,
  },
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
