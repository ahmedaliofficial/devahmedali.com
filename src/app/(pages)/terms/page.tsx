import { adsense } from '@/config/adsense'
import { site } from '@/content/site'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: `The terms that apply when you read, share or reuse anything on ${site.name}'s website.`,
  alternates: { canonical: '/terms' },
}

const headingClasses = 'font-heading text-default-900 mb-3 text-2xl font-semibold'
const linkClasses = 'text-default-900 font-medium underline decoration-2 underline-offset-4'

const Page = () => (
  <section className="pt-32.5 pb-16 md:pt-40 md:pb-24 lg:pt-50">
    <div className="container">
      <h1 className="font-heading text-default-900 text-4xl leading-tight font-medium tracking-tight md:text-5xl">Terms of Use</h1>
      <p className="text-default-500 mt-4 text-lg">Last updated: 11 September 2026</p>

      <div className="text-default-600 mt-10 flex max-w-3xl flex-col gap-8 text-base md:text-lg">
        <div>
          <h2 className={headingClasses}>About these terms</h2>
          <p>
            These terms apply to your use of {site.url.replace('https://', '')} (the site), which is run by {site.name}. By using the site you agree to them. If you do not agree, the polite thing to do is to stop reading here, though I would rather you stayed.
          </p>
        </div>

        <div>
          <h2 className={headingClasses}>What the site is for</h2>
          <p>The site presents my professional work, the services I offer and my writing on software architecture. Nothing on it is a contract, a quote or a binding offer. Any engagement is agreed separately and in writing.</p>
        </div>

        <div>
          <h2 className={headingClasses}>Content and intellectual property</h2>
          <p>Unless stated otherwise, the text, diagrams, images and code samples on this site are mine. You are welcome to:</p>
          <ul className="mt-3 flex list-disc flex-col gap-2 ps-6">
            <li>Read and share links to any page.</li>
            <li>Quote short excerpts with attribution and a link back to the original.</li>
            <li>Use the code snippets in blog posts in your own projects, without warranty of any kind.</li>
          </ul>
          <p className="mt-3">You may not republish whole articles or case studies, sell them, or present any of this material as your own.</p>
        </div>

        <div>
          <h2 className={headingClasses}>Case studies and third-party names</h2>
          <p>
            Case studies describe systems I designed or worked on. Product names, company names and logos belong to their respective owners, and their appearance here does not imply endorsement. Details are described at a level that respects the confidentiality owed to those
            clients and employers, and figures are as measured or reported at the time.
          </p>
        </div>

        <div>
          <h2 className={headingClasses}>Not professional advice</h2>
          <p>
            Articles and case studies are general engineering commentary drawn from my own experience. They are not advice for your specific system, and I cannot know your constraints from here. Test before you ship, and get advice tailored to your situation where the stakes
            demand it.
          </p>
        </div>

        <div>
          <h2 className={headingClasses}>Advertising and links to other sites</h2>
          {adsense.enabled ? (
            <p>
              The site displays advertising served by Google AdSense. Ads are labelled as such, and I do not select or endorse individual advertisers or the products they promote. How advertising uses your data is covered in the{' '}
              <Link href="/privacy-policy" className={linkClasses}>
                Privacy Policy
              </Link>
              . Links to other websites are provided for convenience; I am not responsible for their content, availability or policies.
            </p>
          ) : (
            <p>Links to other websites are provided for convenience; I am not responsible for their content, availability or policies.</p>
          )}
        </div>

        <div>
          <h2 className={headingClasses}>Acceptable use</h2>
          <p>Please do not:</p>
          <ul className="mt-3 flex list-disc flex-col gap-2 ps-6">
            <li>Use the contact form to send spam, unlawful content or automated submissions.</li>
            <li>Attempt to disrupt the site, probe it for vulnerabilities without permission, or scrape it at a volume that affects other visitors.</li>
            {adsense.enabled && <li>Interfere with the advertising served on the site, including artificially generating clicks or impressions.</li>}
          </ul>
        </div>

        <div>
          <h2 className={headingClasses}>Availability and warranties</h2>
          <p>
            The site is provided as is. I aim to keep it available and its content accurate, but I do not guarantee either. To the extent permitted by law, I am not liable for any loss or damage arising from your use of the site or from reliance on anything published on
            it.
          </p>
        </div>

        <div>
          <h2 className={headingClasses}>Changes</h2>
          <p>I may update these terms from time to time. The date at the top reflects the current version, and continued use of the site after a change means you accept the updated terms.</p>
        </div>

        <div>
          <h2 className={headingClasses}>Contact</h2>
          <p>
            Questions about these terms can go to{' '}
            <a href={`mailto:${site.email}`} className={linkClasses}>
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
