import ContactCta from '@/components/ContactCta'
import { DEFAULT_PAGE_TITLE } from '@/config/constants'
import { site } from '@/content/site'
import type { Metadata } from 'next'
import BlogTeaser from './components/BlogTeaser'
import FeaturedWork from './components/FeaturedWork'
import Hero from './components/Hero'
import PipelineTeaser from './components/PipelineTeaser'
import ReferenceFlows from './components/ReferenceFlows'
import Services from './components/Services'
import TechStack from './components/TechStack'

export const metadata: Metadata = {
  title: DEFAULT_PAGE_TITLE,
  description: site.seo.description,
  alternates: { canonical: '/' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: site.roleFull,
  description: site.seo.description,
  url: site.url,
  email: `mailto:${site.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Karachi', addressCountry: 'PK' },
  sameAs: [site.socials.github, site.socials.linkedin, site.socials.trackhrs],
  knowsAbout: ['Distributed Systems', 'System Design', 'Event-Driven Architecture', 'Microservices', 'Apache Kafka', 'Kubernetes', 'AI Engineering', 'RAG Pipelines'],
}

const Page = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Services />
      <ReferenceFlows />
      <FeaturedWork />
      <PipelineTeaser />
      <TechStack />
      <BlogTeaser />
      <ContactCta />
    </>
  )
}

export default Page
