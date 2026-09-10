import '@/assets/css/style.css'
import favicon from '@/assets/images/favicon.ico'
import AppProvidersWrapper from '@/components/wrappers/AppProvidersWrapper'
import { adsense } from '@/config/adsense'
import { DEFAULT_PAGE_TITLE } from '@/config/constants'
import { site } from '@/content/site'
import { jsonLd, siteGraphJsonLd } from '@/lib/schema'
import type { Metadata, Viewport } from 'next'
import { Google_Sans_Flex, Stack_Sans_Headline } from 'next/font/google'

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
  // Search Console token. Read at build time; undefined simply omits the meta tag.
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
}

export const viewport: Viewport = {
  themeColor: '#f7f7f7',
}

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <head>
        {/* AdSense wants its loader as a literal <script async src> between <head> and </head> on
            every page; that tag is what the site-verification crawler looks for. next/script cannot
            provide it here: in the App Router `beforeInteractive` only emits a <link rel="preload">
            plus a self.__next_s queue entry, and the real tag is created client-side. React hoists
            async scripts into <head> and renders them once, so a plain element is the right tool.
            The same loader also serves Google's certified consent message for EEA/UK/Swiss visitors
            once it is published in AdSense → Privacy & messaging. */}
        {adsense.enabled && <script async src={adsense.scriptSrc} crossOrigin="anonymous" />}
      </head>
      <body className={`bg-body-bg ${googleSansFlex.variable} ${stackSansHeadline.variable}`} suppressHydrationWarning>
        {/* WebSite + Person graph, emitted once. Page schemas reference these nodes by @id. */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(siteGraphJsonLd()) }} />
        <AppProvidersWrapper>{children}</AppProvidersWrapper>
      </body>
    </html>
  )
}

export default RootLayout
