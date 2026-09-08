import { PERSON_ID, site, WEBSITE_ID } from '@/content/site'
import { getAllExpertise } from '@/lib/expertise'

/** Serialise for dangerouslySetInnerHTML. Escaping "<" means a literal "</script>" inside
 *  content (FAQ answers come from MDX frontmatter) can never close the tag early. */
export const jsonLd = (value: unknown): string => JSON.stringify(value).replace(/</g, '\\u003c')

/** Reference to the Person node the root layout emits once. name/url are repeated so validators
 *  that do not merge @id across <script> blocks still see a named author. */
export const personRef = () => ({ '@type': 'Person', '@id': PERSON_ID, name: site.name, url: site.url })

const postalAddress = () => ({
  '@type': 'PostalAddress',
  addressLocality: site.location.city,
  addressRegion: site.location.region,
  addressCountry: site.location.countryCode,
})

export const occupationLocation = () => [
  { '@type': 'City', name: site.location.city },
  { '@type': 'Country', name: site.location.country },
]

const knowsAbout = ['Software Architecture', 'Distributed Systems', 'System Design', 'Event-Driven Architecture', 'Microservices', 'Apache Kafka', 'Kubernetes', 'NestJS', 'Golang', 'Next.js', 'AI Engineering', 'RAG Pipelines', 'LangGraph', 'Model Context Protocol']

/** WebSite + Person graph rendered once in the root layout. Every other schema on the site
 *  points at PERSON_ID / WEBSITE_ID rather than repeating these nodes. */
export const siteGraphJsonLd = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: site.url,
      name: site.name,
      description: site.seo.description,
      inLanguage: 'en',
      publisher: { '@id': PERSON_ID },
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: site.name,
      url: site.url,
      image: `${site.url}/opengraph-image`,
      jobTitle: site.roleFull,
      description: site.seo.description,
      email: `mailto:${site.email}`,
      sameAs: [site.socials.github, site.socials.linkedin],
      address: postalAddress(),
      homeLocation: { '@type': 'Place', name: site.location.label, address: postalAddress() },
      nationality: { '@type': 'Country', name: site.location.country },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Virtual University of Pakistan' },
      knowsLanguage: ['en', 'ur'],
      knowsAbout,
      hasOccupation: getAllExpertise()
        .filter((entry) => entry.kind === 'role')
        .map((entry) => ({
          '@type': 'Occupation',
          name: entry.role,
          description: entry.description,
          url: `${site.url}/expertise/${entry.slug}`,
          skills: entry.keywords.join(', '),
          occupationLocation: occupationLocation(),
        })),
    },
  ],
})

export const faqPageJsonLd = (items: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
})

/** `path` is site-relative ("" for home, "/expertise", "/expertise/software-architect") */
export const breadcrumbJsonLd = (crumbs: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: `${site.url}${crumb.path}`,
  })),
})
