import { adsense } from '@/config/adsense'
import { site } from '@/content/site'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${site.name} handles the information you submit through this website, the cookies it uses, and how advertising on it works.`,
  alternates: { canonical: '/privacy-policy' },
}

const headingClasses = 'font-heading text-default-900 mb-3 text-2xl font-semibold'
const linkClasses = 'text-default-900 font-medium underline decoration-2 underline-offset-4'

const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noreferrer noopener" className={linkClasses}>
    {children}
  </a>
)

const Page = () => (
  <section className="pt-32.5 pb-16 md:pt-40 md:pb-24 lg:pt-50">
    <div className="container">
      <h1 className="font-heading text-default-900 text-4xl leading-tight font-medium tracking-tight md:text-5xl">Privacy Policy</h1>
      <p className="text-default-500 mt-4 text-lg">Last updated: 11 September 2026</p>

      <div className="text-default-600 mt-10 flex max-w-3xl flex-col gap-8 text-base md:text-lg">
        <div>
          <h2 className={headingClasses}>The short version</h2>
          {adsense.enabled ? (
            <p>
              This is a personal portfolio site run by {site.name}. It has no user accounts. It receives personal information in two ways: what you choose to type into the contact form, and the cookies and device data that advertising partners (Google AdSense) use to serve and
              measure ads. This page explains both, and what you can do about each.
            </p>
          ) : (
            <p>This is a personal portfolio site run by {site.name}. It has no user accounts, no advertising and no tracking cookies. The only personal information it receives is what you choose to type into the contact form.</p>
          )}
        </div>

        <div>
          <h2 className={headingClasses}>Who is responsible</h2>
          <p>
            The site at {site.url.replace('https://', '')} is operated by {site.name}. For anything in this policy, email{' '}
            <a href={`mailto:${site.email}`} className={linkClasses}>
              {site.email}
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className={headingClasses}>What the contact form collects</h2>
          <p>When you send a message through the contact form, it collects:</p>
          <ul className="mt-3 flex list-disc flex-col gap-2 ps-6">
            <li>Your name</li>
            <li>Your email address</li>
            <li>The subject and body of your message</li>
          </ul>
          <p className="mt-3">These are used for one thing only: replying to you. They are delivered to my inbox by an email service provider (Resend) and are not added to any mailing list, sold, or shared with anyone else.</p>
        </div>

        <div>
          <h2 className={headingClasses}>How long it is kept</h2>
          <p>Messages stay in my email account as part of normal correspondence. If you would like a message deleted, email me at {site.email} and I will remove it.</p>
        </div>

        <div>
          <h2 className={headingClasses}>Cookies</h2>
          <p>A cookie is a small text file a website stores in your browser. This site sets no cookies of its own for tracking or analytics. Cookies you may encounter here come from:</p>
          <ul className="mt-3 flex list-disc flex-col gap-2 ps-6">
            {adsense.enabled && <li>Advertising partners. Google and its partners use cookies and similar technologies (such as web beacons and device identifiers) to serve and measure ads. The next section explains this in detail.</li>}
            <li>Hosting and security. The infrastructure that serves the site, including the Cloudflare content delivery network, may set cookies needed to protect the site from abuse and keep it available. These do not identify you to me.</li>
          </ul>
          <p className="mt-3">You can delete or block cookies in your browser settings. The site keeps working if you do.</p>
        </div>

        {adsense.enabled && (
          <>
            <div>
              <h2 className={headingClasses}>Advertising (Google AdSense)</h2>
              <p>This site displays advertising served by Google AdSense. Ads are labelled as ads and are kept visually separate from my own content. The following disclosures are made in line with Google&apos;s requirements for publishers:</p>
              <ul className="mt-3 flex list-disc flex-col gap-2 ps-6">
                <li>Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or to other websites.</li>
                <li>Google&apos;s use of advertising cookies enables it and its partners to serve ads to you based on your visit to this site and/or other sites on the internet.</li>
                <li>Google may also use the data it collects to measure how ads perform and to detect invalid traffic and abuse.</li>
                <li>I do not receive your personal information from Google. I only see aggregated reporting such as how many ads were shown.</li>
              </ul>
              <p className="mt-3">
                For a full account of how Google handles this data, read <ExternalLink href="https://policies.google.com/technologies/partner-sites">How Google uses information from sites or apps that use our services</ExternalLink> and{' '}
                <ExternalLink href="https://policies.google.com/technologies/ads">Google&apos;s advertising technologies page</ExternalLink>.
              </p>
            </div>

            <div>
              <h2 className={headingClasses}>Your choices about ads</h2>
              <ul className="mt-3 flex list-disc flex-col gap-2 ps-6">
                <li>
                  You can opt out of personalised advertising from Google at <ExternalLink href="https://www.google.com/settings/ads">Google Ads Settings</ExternalLink>.
                </li>
                <li>
                  You can opt out of some third-party vendors&apos; use of cookies for personalised advertising at <ExternalLink href="https://www.aboutads.info/choices">www.aboutads.info/choices</ExternalLink> or{' '}
                  <ExternalLink href="https://www.youronlinechoices.com">www.youronlinechoices.com</ExternalLink> (Europe).
                </li>
                <li>Blocking or deleting cookies in your browser also limits ad personalisation. You will still see ads, but they will not be based on your browsing.</li>
              </ul>
            </div>

            <div>
              <h2 className={headingClasses}>Consent in the EEA, UK and Switzerland</h2>
              <p>
                If you visit from the European Economic Area, the United Kingdom or Switzerland, you will see a consent message before any advertising cookies are set. It is provided by Google&apos;s certified consent management platform, which follows the IAB Transparency and
                Consent Framework, and it lets you accept, reject or fine-tune the purposes your data is used for. If you decline, you are shown non-personalised ads only, which rely on the context of the page rather than on your browsing history.
              </p>
              <p className="mt-3">You can change or withdraw your choice at any time using the Privacy settings link in the footer of every page.</p>
            </div>
          </>
        )}

        <div>
          <h2 className={headingClasses}>Analytics</h2>
          <p>This site does not currently run any analytics or visitor-tracking scripts. If that changes, this policy will be updated first and the new provider named here.</p>
        </div>

        <div>
          <h2 className={headingClasses}>Server logs and third-party services</h2>
          <p>
            The site is served from a hosting provider through Cloudflare, which together process standard request logs (such as IP address, browser type and the pages requested) for security, abuse prevention and reliability. Contact form messages are delivered by Resend.
            {adsense.enabled ? ' Advertising is served by Google.' : ''} None of these providers is used by me to build a profile of you.
          </p>
        </div>

        <div>
          <h2 className={headingClasses}>Children</h2>
          <p>This site is written for working engineers and the people who hire them. It is not directed at children under 13 (or the age of digital consent where you live), and I do not knowingly collect personal information from them.</p>
        </div>

        <div>
          <h2 className={headingClasses}>Links to other sites</h2>
          <p>Pages here link out to places like GitHub, LinkedIn and the products described in the case studies. Once you follow one of those links, that site&apos;s own privacy policy applies, not this one.</p>
        </div>

        <div>
          <h2 className={headingClasses}>Your rights</h2>
          <p>
            You can ask what information I hold about you, ask for it to be corrected, ask for it to be deleted, or object to how it is used. Email {site.email} and I will action it. If you are in the EEA or UK and are unhappy with how I have handled your data, you also have the
            right to complain to your local data protection authority.
          </p>
        </div>

        <div>
          <h2 className={headingClasses}>Changes to this policy</h2>
          <p>When this policy changes, the date at the top is updated. Anything that materially changes what is collected, such as adding analytics or a new advertising partner, will be spelled out here rather than buried.</p>
        </div>

        <div>
          <h2 className={headingClasses}>Contact</h2>
          <p>
            Questions about this policy can go to{' '}
            <a href={`mailto:${site.email}`} className={linkClasses}>
              {site.email}
            </a>
            . The{' '}
            <Link href="/terms" className={linkClasses}>
              Terms of Use
            </Link>{' '}
            cover the rest of how the site may be used.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Page
