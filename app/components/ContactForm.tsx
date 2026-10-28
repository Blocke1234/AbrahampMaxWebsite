'use client'

import { useState } from 'react'

type State = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<State>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('sending')
    setError('')

    const form = new FormData(e.currentTarget)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.get('name'),
          email: form.get('email'),
          message: form.get('message'),
          company: form.get('company'), // honeypot
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Try again.')
        setState('error')
        return
      }
      setState('sent')
    } catch {
      setError('Network error. Try again.')
      setState('error')
    }
  }

  if (state === 'sent') {
    return (
      <p className="text-bone-dim leading-relaxed">
        Got it. I read every one of these myself — you&rsquo;ll hear back, usually same day.
        Check your inbox for a confirmation.
      </p>
    )
  }

  const field =
    'w-full bg-transparent border border-line px-4 py-3 text-bone placeholder:text-bone-faint focus:border-gold focus:outline-none transition-colors duration-300'

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-4">
      <input type="text" name="name" required placeholder="Your name" className={field} />
      <input type="email" name="email" required placeholder="Your email" className={field} />
      <textarea name="message" required rows={4} placeholder="What&rsquo;s the question?" className={field} />

      {/* Honeypot — hidden from people, irresistible to bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <button
        type="submit"
        disabled={state === 'sending'}
        className="inline-flex items-center justify-center border border-gold/60 text-gold hover:border-gold-bright hover:text-gold-bright disabled:opacity-50 px-8 py-4 text-sm font-semibold uppercase tracking-kicker transition-colors duration-500"
      >
        {state === 'sending' ? 'Sending…' : 'Send it'}
      </button>

      {error && <p className="text-sm text-bone-dim">{error}</p>}
    </form>
  )
}
