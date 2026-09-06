import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
}

const Page = () => {
  return (
    <>
      <section className="pt-34 md:pt-42 md:pb-10 lg:pt-50">
        <div className="container">
          <div className="space-y-5 text-center">
            <h3 className="text-4xl font-medium md:text-5xl lg:text-[90px]">Privacy Policy</h3>
            <div className="text-sm md:text-lg">Last updated: 10 Jan 2026</div>
          </div>

          <div className="py-12 md:py-18 lg:py-25">
            <div className="mx-auto max-w-4xl">
              <div className="text-default-800 space-y-5 md:space-y-10">
                <div>
                  <h2 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl lg:text-4xl">Collecting Personal Information</h2>

                  <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">
                    Habitline collects limited personal information to provide a smooth, personalized habit-tracking experience. This includes details you share when creating an account and data generated while using the app. We collect only what is necessary to improve
                    functionality, insights, and overall usability.
                  </p>
                </div>

                <ul className="text-default-600 marker:text-default-600 list-disc space-y-2.5 ps-6 lg:space-y-4">
                  <li>Account details such as name and email address</li>

                  <li>Habits, routines, streaks, and completion activity</li>

                  <li>App usage data to improve performance and features</li>

                  <li>Device and technical information for stability and security</li>
                </ul>

                <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">We use this information solely to operate and enhance Habitline. Your data is never collected for unnecessary or unrelated purposes.</p>

                <div>
                  <h3 className="text-default-900 mb-2.5 text-xl font-semibold md:text-2xl lg:text-4xl">Sharing Personal Information</h3>

                  <p className="text-default-600 text-base leading-relaxed md:text-lg">
                    Data is shared strictly when necessary to operate the platform responsibly and securely—such as with trusted service providers who help with hosting, analytics, or customer support. These partners are required to follow strict confidentiality and security
                    standards. We may also disclose information when required by law or to protect the safety, rights, and integrity of our users and the Habitline platform. Outside of these limited and essential situations, your personal data remains private and fully under your
                    control.
                  </p>
                </div>

                <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">Habitline respects your privacy and does not sell or misuse your personal data. Information is shared only when required to operate the service responsibly and securely.</p>

                <ol className="text-default-600 marker:text-default-600 list-decimal space-y-4 ps-6 marker:font-semibold">
                  <li>With trusted service providers for hosting, analytics, and customer support</li>

                  <li>To comply with legal requirements or lawful requests</li>

                  <li>To protect the rights, safety, or security of users and the platform</li>

                  <li>During business operations such as service improvements or maintenance</li>
                </ol>

                <p className="text-default-600 text-base leading-normal md:text-lg md:leading-relaxed">
                  All shared data is handled securely and only for purposes aligned with Habitline’s core services. We continuously review our practices to ensure your information remains protected and confidential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
