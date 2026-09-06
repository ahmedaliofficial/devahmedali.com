import RollUpButton from '@/components/ui/RollUpButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
}

const NotFound = () => (
  <section className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
    <p className="text-default-400 font-heading text-sm font-medium tracking-wide uppercase">404</p>
    <h1 className="font-heading text-default-900 mt-3 text-3xl font-medium tracking-tight md:text-5xl">That page does not exist</h1>
    <p className="text-default-500 mt-4 max-w-md text-base md:text-lg">The link might be old, or the page moved. Here are a few places that definitely exist.</p>

    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
      <RollUpButton href="/" label="Back to home" variant="dark" icon="lucide:arrow-right" />
      <RollUpButton href="/work" label="See the work" variant="outline" />
      <RollUpButton href="/contact" label="Get in touch" variant="outline" />
    </div>
  </section>
)

export default NotFound
