import { site } from '@/content/site'
import { NextResponse } from 'next/server'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_MESSAGE_LENGTH = 5000

type ContactPayload = {
  name?: unknown
  email?: unknown
  subject?: unknown
  message?: unknown
  company?: unknown
}

const asString = (value: unknown): string => (typeof value === 'string' ? value.trim() : '')

const escapeHtml = (value: string): string => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export const POST = async (request: Request) => {
  let payload: ContactPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  // Honeypot: a real person never fills this in. Return 200 so bots learn nothing.
  if (asString(payload.company)) {
    return NextResponse.json({ ok: true })
  }

  const name = asString(payload.name)
  const email = asString(payload.email)
  const subject = asString(payload.subject) || 'New message from your portfolio'
  const message = asString(payload.message)

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email and message are all required.' }, { status: 400 })
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: 'That email address does not look right.' }, { status: 400 })
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ error: `Please keep the message under ${MAX_MESSAGE_LENGTH} characters.` }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL ?? site.email
  const from = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev'

  // Without a key configured the site still works — the client falls back to a mailto link.
  if (!apiKey) {
    return NextResponse.json({ error: 'Email delivery is not configured yet.', fallback: true }, { status: 503 })
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        html: `
          <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <hr />
          <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
        `,
      }),
    })

    if (!response.ok) {
      return NextResponse.json({ error: 'The email service rejected the message.', fallback: true }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Could not reach the email service.', fallback: true }, { status: 502 })
  }
}
