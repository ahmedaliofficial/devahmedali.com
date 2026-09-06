import ContactCta from '@/components/ContactCta'
import { DEFAULT_PAGE_TITLE } from '@/config/constants'
import { site } from '@/content/site'
import type { Metadata } from 'next'
import BlogTeaser from './components/BlogTeaser'
import FeaturedWork from './components/FeaturedWork'
import Hero from './components/Hero'
import PipelineTeaser from './components/PipelineTeaser'
import Services from './components/Services'
import TechStack from './components/TechStack'
import TrustBar from './components/TrustBar'

export const metadata: Metadata = {
  title: DEFAULT_PAGE_TITLE,
  description: site.seo.description,
  alternates: { canonical: '/' },
}

const Page = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <FeaturedWork />
      <PipelineTeaser />
      <TechStack />
      <BlogTeaser />
      <ContactCta />
    </>
  )
}

export default Page
