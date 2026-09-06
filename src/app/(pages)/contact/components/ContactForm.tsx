'use client'

import { site } from '@/content/site'
import { Icon } from '@iconify/react'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

type FormState = 'idle' | 'sending' | 'sent' | 'error'

/** Presets driven by the ?intent= param on the "Get a consultation" / "Hire me" CTAs. */
const intents: Record<string, { subject: string; placeholder: string }> = {
  consultation: {
    subject: 'Consultation request',
    placeholder: 'What are you building, and where is it getting difficult? A couple of sentences is plenty to start.',
  },
  hire: {
    subject: 'Role enquiry',
    placeholder: 'Tell me about the role or the team — what you are building and what you need someone to own.',
  },
  audit: {
    subject: 'Architecture / code audit',
    placeholder: 'What does the system look like today, and what is prompting the review?',
  },
}

const inputClasses = 'border-default-200 bg-default-100 text-default-900 placeholder:text-default-400 focus:border-default-400 w-full rounded-2xl border px-4 py-3 text-base transition-all focus:outline-none'

const ContactForm = () => {
  const [state, setState] = useState<FormState>('idle')
  const [error, setError] = useState('')
  const searchParams = useSearchParams()
  const intent = intents[searchParams.get('intent') ?? '']

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setState('sending')
    setError('')

    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok) {
        setState('sent')
        return
      }

      setState('error')
      setError(data.error ?? 'Something went wrong sending your message.')
    } catch {
      setState('error')
      setError('Could not reach the server.')
    }
  }

  if (state === 'sent') {
    return (
      <div className="flex flex-col items-start">
        <span className="bg-primary-2/10 text-primary-2 mb-5 inline-grid size-12 place-items-center rounded-full">
          <Icon icon="lucide:check" className="size-6" />
        </span>
        <h2 className="font-heading text-default-900 text-2xl font-semibold">Message sent</h2>
        <p className="text-default-500 mt-2.5 text-base">Thanks for reaching out — I&apos;ll get back to you within a day or so. If it&apos;s urgent, email me directly at {site.email}.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Honeypot — hidden from people, tempting to bots */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="pointer-events-none absolute h-0 w-0 opacity-0" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-default-700 mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input id="name" name="name" type="text" required maxLength={100} placeholder="Your name" className={inputClasses} />
        </div>

        <div>
          <label htmlFor="email" className="text-default-700 mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input id="email" name="email" type="email" required maxLength={200} placeholder="you@company.com" className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="text-default-700 mb-1.5 block text-sm font-medium">
          Subject
        </label>
        <input id="subject" name="subject" type="text" maxLength={200} defaultValue={intent?.subject ?? ''} placeholder="What's this about?" className={inputClasses} />
      </div>

      <div>
        <label htmlFor="message" className="text-default-700 mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea id="message" name="message" required rows={6} maxLength={5000} placeholder={intent?.placeholder ?? "Tell me what you're building, and where it's getting hard."} className={`${inputClasses} resize-y`} />
      </div>

      {state === 'error' && (
        <div className="border-default-200 bg-default-100 rounded-2xl border p-4">
          <p className="text-default-700 text-sm">{error}</p>
          <p className="text-default-500 mt-1 text-sm">
            You can always email me directly at{' '}
            <a href={`mailto:${site.email}`} className="text-default-900 font-medium underline decoration-2 underline-offset-4">
              {site.email}
            </a>
            .
          </p>
        </div>
      )}

      <button type="submit" disabled={state === 'sending'} className="bg-default-900 mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full px-8 py-3.5 text-sm font-medium text-white transition-all hover:scale-95 disabled:cursor-not-allowed disabled:opacity-60">
        {state === 'sending' ? (
          <>
            <Icon icon="lucide:loader-circle" className="size-4.5 animate-spin" />
            Sending
          </>
        ) : (
          <>
            Send message
            <Icon icon="lucide:arrow-right" className="size-4.5" />
          </>
        )}
      </button>
    </form>
  )
}

export default ContactForm
