export type ClientService = {
  slug: string
  number: string
  title: string
  shortTitle: string
  outcome: string
  summary: string
  forWho: string
  deliverables: string[]
  relatedWork?: { label: string; href: string; note?: string }
  enquirySubject: string
}

/** Buyer-facing offers shared by services, the homepage and the enquiry form. */
export const clientServices: ClientService[] = [
  {
    slug: 'saas-mvp',
    number: '01',
    title: 'SaaS platforms & MVPs',
    shortTitle: 'SaaS & MVPs',
    outcome: 'Take your idea from a sketch to a product people can use.',
    summary: 'Start with the features that matter. I connect the customer experience, business logic and infrastructure into a focused first release, with room for what comes next.',
    forWho: 'Founders launching a product or businesses building their own platform.',
    deliverables: ['A focused first release with clear priorities', 'Customer and admin workflows, accounts and billing', 'Testing, deployment and a practical handover'],
    relatedWork: { label: 'Explore TrackHRS', href: '/work/trackhrs' },
    enquirySubject: 'SaaS platform or MVP',
  },
  {
    slug: 'ai-agents',
    number: '02',
    title: 'AI assistants & agents',
    shortTitle: 'AI assistants & agents',
    outcome: 'Give your customers and team useful AI, built around their work.',
    summary: 'An assistant should do more than answer a prompt. I build AI experiences that use your knowledge, connect to your tools and help people complete a specific task, with clear review and fallback paths.',
    forWho: 'Teams with a clear use case for knowledge search, assistance or agent workflows.',
    deliverables: ['Assistants grounded in your documents and knowledge', 'Agents connected to relevant business tools', 'Evaluation, human review and fallback behaviour'],
    relatedWork: { label: 'Explore AgentX', href: '/work/agentx' },
    enquirySubject: 'AI assistants and agents',
  },
  {
    slug: 'workflow-automation',
    number: '03',
    title: 'Workflow automation & integrations',
    shortTitle: 'Automation & integrations',
    outcome: 'Connect your tools and take repetitive work off your team’s plate.',
    summary: 'When the same information moves between spreadsheets, messages and apps, there is usually a better flow. I connect the systems you already use and make the important steps easier to follow.',
    forWho: 'Businesses coordinating customer, finance or operational work across several tools.',
    deliverables: ['CRM, application and API connections', 'Event-driven workflows and webhook integrations', 'Monitoring, retries and documented handover'],
    relatedWork: { label: 'See connected workflows in TrackHRS', href: '/work/trackhrs' },
    enquirySubject: 'Workflow automation and integrations',
  },
  {
    slug: 'websites',
    number: '04',
    title: 'Websites & landing pages',
    shortTitle: 'Websites & landing pages',
    outcome: 'Make your business easy to understand and easy to contact.',
    summary: 'A clear story, a considered design and a straightforward next step. I build responsive websites that explain your offer and give potential customers a simple path to an enquiry or booking.',
    forWho: 'Service businesses, independent professionals and products preparing to launch.',
    deliverables: ['Responsive website design and development', 'Editable content and search-friendly page structure', 'Enquiry forms, bookings and analytics connections'],
    enquirySubject: 'Website or landing page',
  },
  {
    slug: 'ecommerce',
    number: '05',
    title: 'Ecommerce & payments',
    shortTitle: 'Ecommerce & payments',
    outcome: 'Make buying easier, from the first product view to the final payment.',
    summary: 'Build a buying experience that fits your business. I work on storefronts, checkout and the systems behind each order, including payments and the connections your team needs to run the operation.',
    forWho: 'Businesses selling products, subscriptions or services online.',
    deliverables: ['Storefront and checkout experiences', 'Payment-provider and subscription integrations', 'Order, inventory and admin workflows'],
    enquirySubject: 'Ecommerce and payments',
  },
  {
    slug: 'mobile-apps',
    number: '06',
    title: 'Mobile applications',
    shortTitle: 'Mobile applications',
    outcome: 'Put the right product experience in your users’ hands.',
    summary: 'Bring your key workflows to mobile with an experience designed for the device. I connect the app to your product’s APIs and plan for the permissions, synchronisation and release steps it needs.',
    forWho: 'Products extending beyond the browser and teams working on the move.',
    deliverables: ['Mobile interfaces for core product workflows', 'Shared APIs and synchronisation where needed', 'Device testing and release preparation'],
    relatedWork: { label: 'See the TrackHRS app direction', href: '/work/trackhrs', note: 'TrackHRS mobile visuals are development mockups; the mobile app is in development.' },
    enquirySubject: 'Mobile application',
  },
  {
    slug: 'desktop-apps',
    number: '07',
    title: 'Desktop applications',
    shortTitle: 'Desktop applications',
    outcome: 'Give your team a focused app that fits the way they work.',
    summary: 'Some work needs a home on the desktop. I build dedicated applications for useful daily workflows, with the system integrations and connections your product needs.',
    forWho: 'Businesses building desktop tools, trackers or companions to an existing platform.',
    deliverables: ['A desktop experience for your core workflow', 'APIs, synchronisation and offline behaviour where scoped', 'Packaging, update planning and handover'],
    relatedWork: { label: 'See the TrackHRS desktop tracker', href: '/work/trackhrs' },
    enquirySubject: 'Desktop application',
  },
  {
    slug: 'product-rescue',
    number: '08',
    title: 'Product rescue & scaling',
    shortTitle: 'Product rescue & scaling',
    outcome: 'Get an existing product stable, clearer and ready for its next step.',
    summary: 'A slow product, a fragile prototype or a difficult codebase needs a clear diagnosis before more features. I review what you have, prioritise the changes and help your team deliver them.',
    forWho: 'Teams inheriting a product or outgrowing their first version.',
    deliverables: ['Code and architecture review with prioritised fixes', 'Performance, reliability and deployment improvements', 'Technical direction and practical team support'],
    relatedWork: { label: 'Explore my backend work at Hysab Kytab', href: '/work/hysab-kytab' },
    enquirySubject: 'Product rescue and scaling',
  },
]

/** Reject unknown or repeated query parameters instead of trusting URL text. */
export const getClientService = (slug: string | string[] | undefined) => (typeof slug === 'string' ? clientServices.find((service) => service.slug === slug) : undefined)
