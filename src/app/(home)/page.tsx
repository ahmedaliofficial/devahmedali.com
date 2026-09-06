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
  // absolute bypasses the root `%s | Ahmed Ali` template, which would otherwise
  // double the suffix since DEFAULT_PAGE_TITLE already ends with "| Ahmed Ali"
  title: { absolute: DEFAULT_PAGE_TITLE },
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
  sameAs: [site.socials.github, site.socials.linkedin],
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
