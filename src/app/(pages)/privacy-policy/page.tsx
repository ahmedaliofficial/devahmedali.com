import { site } from '@/content/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${site.name} handles the information you submit through this website.`,
  alternates: { canonical: '/privacy-policy' },
}

const Page = () => (
  <section className="pt-32.5 pb-16 md:pt-40 md:pb-24 lg:pt-50">
    <div className="container">
      <h1 className="font-heading text-default-900 text-4xl leading-tight font-medium tracking-tight md:text-5xl">Privacy Policy</h1>
      <p className="text-default-500 mt-4 text-lg">Last updated: September 2026</p>

      <div className="text-default-600 mt-10 flex max-w-3xl flex-col gap-8 text-base md:text-lg">
        <div>
          <h2 className="font-heading text-default-900 mb-3 text-2xl font-semibold">The short version</h2>
          <p>This is a personal portfolio site. It has no accounts, no advertising and no tracking cookies. The only personal information it ever receives is what you choose to type into the contact form.</p>
        </div>

        <div>
          <h2 className="font-heading text-default-900 mb-3 text-2xl font-semibold">What the contact form collects</h2>
          <p>When you send a message through the contact form, it collects:</p>
          <ul className="mt-3 flex list-disc flex-col gap-2 ps-6">
            <li>Your name</li>
            <li>Your email address</li>
            <li>The subject and body of your message</li>
          </ul>
          <p className="mt-3">These are used for one thing only: replying to you. They are delivered to my inbox by an email service provider and are not added to any mailing list, sold, or shared with third parties.</p>
        </div>

        <div>
          <h2 className="font-heading text-default-900 mb-3 text-2xl font-semibold">How long it is kept</h2>
          <p>Messages stay in my email account as part of normal correspondence. If you would like a message deleted, email me at {site.email} and I will remove it.</p>
        </div>

        <div>
          <h2 className="font-heading text-default-900 mb-3 text-2xl font-semibold">Third-party services</h2>
          <p>
            The site is served through a hosting provider, which processes standard server request logs (such as IP address and browser type) for security and reliability. Contact form messages are delivered through an email service provider. Neither is used to build a profile of
            you.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-default-900 mb-3 text-2xl font-semibold">Links to other sites</h2>
          <p>Pages here link out to places like GitHub, LinkedIn and the products described in the case studies. Once you follow one of those links, that site&apos;s own privacy policy applies, not this one.</p>
        </div>

        <div>
          <h2 className="font-heading text-default-900 mb-3 text-2xl font-semibold">Your rights</h2>
          <p>You can ask what information I hold about you, ask for it to be corrected, or ask for it to be deleted. Email {site.email} and I will action it.</p>
        </div>

        <div>
          <h2 className="font-heading text-default-900 mb-3 text-2xl font-semibold">Contact</h2>
          <p>
            Questions about this policy can go to{' '}
            <a href={`mailto:${site.email}`} className="text-default-900 font-medium underline decoration-2 underline-offset-4">
              {site.email}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Page
