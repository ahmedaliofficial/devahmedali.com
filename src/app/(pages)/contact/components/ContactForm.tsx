'use client'

import Arrow from '@/components/ui/Arrow'
import { clientServices, getClientService } from '@/content/client-services'
import { site } from '@/content/site'
import Link from 'next/link'
import { useEffect, useRef, useState, type FormEvent } from 'react'

type FormState = 'idle' | 'sending' | 'sent' | 'error'

const inputClasses = 'w-full rounded-xl border border-default-200 bg-[#f8f9fc] px-4 py-3 text-base text-default-900 placeholder:text-default-500 transition-colors focus:border-primary focus:outline-2 focus:outline-offset-2 focus:outline-primary disabled:opacity-70'
const labelClasses = 'mb-2 block text-sm font-medium text-default-800'

const createEmailHref = (formData: FormData) => {
  const subject = String(formData.get('subject') || 'New project enquiry')
  const body = `Name: ${String(formData.get('name') || '')}\nEmail: ${String(formData.get('email') || '')}\n\n${String(formData.get('message') || '')}`
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function ContactForm({ initialService }: { initialService?: string }) {
  const [state, setState] = useState<FormState>('idle')
  const [error, setError] = useState('')
  const [emailHref, setEmailHref] = useState(`mailto:${site.email}`)
  const feedbackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (state === 'sent' || state === 'error') feedbackRef.current?.focus()
  }, [state])

  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    setEmailHref(createEmailHref(new FormData(event.currentTarget)))
    if (state === 'error') setError('Your changes have not been sent. Try again or send the updated message by email.')
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (state === 'sending') return

    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    setEmailHref(createEmailHref(formData))
    setState('sending')
    setError('')

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 15000)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      })
      const data = await response.json().catch(() => ({}))
      if (response.ok && data.ok === true) {
        setState('sent')
      } else {
        setError(data.fallback ? 'Your message has not been sent. Please send it by email using the link below.' : typeof data.error === 'string' ? data.error : 'Your message could not be sent. Please try again or send it by email.')
        setState('error')
      }
    } catch {
      setError('We could not confirm delivery. Your message is still here. Please try again or send it by email.')
      setState('error')
    } finally {
      clearTimeout(timeout)
    }
  }

  if (state === 'sent') {
    return (
      <div ref={feedbackRef} tabIndex={-1} role="status" className="rounded-2xl bg-[#edf7f2] p-6 focus:outline-none">
        <span aria-hidden="true" className="mb-5 grid size-10 place-items-center rounded-full bg-[#25816a] text-white">
          ✓
        </span>
        <h3 className="text-2xl font-medium">Your message is on its way.</h3>
        <p className="text-default-600 mt-3 text-base leading-relaxed">Thanks for telling me about your project. I&apos;ll get back to you personally.</p>
        <Link href="/work" className="text-primary mt-6 inline-flex items-center gap-3 text-sm font-semibold underline-offset-4 hover:underline">
          Explore my work <span aria-hidden="true">↗</span>
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} onChange={handleChange} aria-busy={state === 'sending'}>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" aria-label="Leave this field empty" className="pointer-events-none absolute h-0 w-0 opacity-0" />
      <fieldset disabled={state === 'sending'} className="flex min-w-0 flex-col gap-5">
        <legend className="sr-only">Your contact details and project</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClasses}>
              Your name <span className="text-primary">*</span>
            </label>
            <input id="name" name="name" autoComplete="name" type="text" required maxLength={100} placeholder="Alex Taylor" className={inputClasses} />
          </div>
          <div>
            <label htmlFor="email" className={labelClasses}>
              Email address <span className="text-primary">*</span>
            </label>
            <input id="email" name="email" autoComplete="email" type="email" required maxLength={200} placeholder="alex@company.com" className={inputClasses} />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className={labelClasses}>
            What can I help with? <span className="text-default-500 font-normal">(optional)</span>
          </label>
          <select key={initialService || 'general'} id="subject" name="subject" defaultValue={getClientService(initialService)?.enquirySubject || ''} className={`${inputClasses} pr-10`}>
            <option value="">Choose a starting point</option>
            {clientServices.map((service) => (
              <option key={service.slug} value={service.enquirySubject}>
                {service.title}
              </option>
            ))}
            <option value="Project discussion">I’m not sure yet / something else</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className={labelClasses}>
            Tell me a little more <span className="text-primary">*</span>
          </label>
          <textarea id="message" name="message" required rows={5} maxLength={5000} placeholder="What would you like to build or improve? Share any goals, timeline or links that would help." aria-describedby="message-help" className={`${inputClasses} resize-y`} />
          <p id="message-help" className="text-default-500 mt-2 text-xs leading-relaxed">
            No technical brief needed. Just tell me what you have in mind.
          </p>
        </div>
      </fieldset>
      {state === 'error' && (
        <div ref={feedbackRef} role="alert" tabIndex={-1} className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 focus:outline-none">
          <p className="text-default-800 text-sm leading-relaxed">{error}</p>
          <a href={emailHref} className="text-primary mt-3 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4">
            Send this message by email <span aria-hidden="true">↗</span>
          </a>
          <p className="text-default-600 mt-1 text-xs leading-relaxed">Opens your email app with your current details and message filled in.</p>
        </div>
      )}
      <button type="submit" disabled={state === 'sending'} className="button-primary service-form-submit">
        <span aria-live="polite">{state === 'sending' ? 'Sending your message…' : 'Send project enquiry'}</span>
        {state === 'sending' ? <span aria-hidden="true">…</span> : <Arrow diagonal />}
      </button>
      <p className="text-default-500 mt-4 text-xs leading-relaxed">
        Your details are used to respond to your enquiry.{' '}
        <Link href="/privacy-policy" className="hover:text-default-900 underline underline-offset-2">
          Privacy policy
        </Link>
      </p>
    </form>
  )
}
