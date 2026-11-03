'use client'

import { useEffect, useRef, useState } from 'react'

type DemoState = 'idle' | 'enquiry' | 'routing' | 'complete'

const steps = ['New enquiry', 'Sort & route', 'Ready to follow up']

function StepIcon({ step, complete }: { step: number; complete: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {complete || step === 2 ? (
        <path d="m5 12 4 4L19 6" />
      ) : step === 0 ? (
        <>
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="m4 7 8 6 8-6" />
        </>
      ) : (
        <>
          <path d="M6 4v9a5 5 0 0 0 5 5h7M6 8h12m-3-3 3 3-3 3m0 4 3 3-3 3" />
          <circle cx="6" cy="4" r="1" />
        </>
      )}
    </svg>
  )
}

export default function HeroAutomationDemo() {
  const [state, setState] = useState<DemoState>('idle')
  const [runCount, setRunCount] = useState(0)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const running = state === 'enquiry' || state === 'routing'
  const complete = state === 'complete'
  const currentStep = state === 'idle' ? -1 : state === 'enquiry' ? 0 : state === 'routing' ? 1 : 2

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finishWithoutMotion = () => {
      if (!preference.matches) return
      timers.current.forEach(clearTimeout)
      timers.current = []
      setState((current) => (current === 'enquiry' || current === 'routing' ? 'complete' : current))
    }
    preference.addEventListener('change', finishWithoutMotion)
    return () => {
      timers.current.forEach(clearTimeout)
      preference.removeEventListener('change', finishWithoutMotion)
    }
  }, [])

  const runDemo = () => {
    if (running) return
    setRunCount((count) => count + 1)
    timers.current.forEach(clearTimeout)
    timers.current = []
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setState('complete')
      return
    }
    setState('enquiry')
    timers.current = [
      setTimeout(() => setState('routing'), 750),
      setTimeout(() => {
        setState('complete')
        timers.current = []
      }, 1550),
    ]
  }

  return (
    <section className="automation-demo" aria-label="Try an illustrative enquiry workflow">
      <div className="automation-demo-heading">
        <p>A smoother handoff</p>
        <span>Preview</span>
      </div>
      <ol className="automation-demo-flow" aria-label="Enquiry workflow">
        {steps.map((step, index) => {
          const done = complete || index < currentStep
          const active = running && index === currentStep
          const nodeState = done ? 'complete' : active ? 'active' : 'waiting'
          return (
            <li key={step} className="automation-demo-node" data-state={nodeState}>
              <span className="automation-demo-icon">
                <StepIcon step={index} complete={done} />
              </span>
              <span className="automation-demo-label">{step}</span>
              <span className="automation-demo-sr-only">{done ? ' — complete' : active ? ' — in progress' : ' — waiting'}</span>
            </li>
          )
        })}
      </ol>
      <div className="automation-demo-sample" data-complete={complete}>
        <p className="automation-demo-sample-label">{complete ? 'Sample follow-up · not sent' : state === 'routing' ? 'Matched to website enquiries' : 'Sample enquiry'}</p>
        <p className="automation-demo-sample-message">{complete ? '“Thanks for getting in touch. What are your goals and timeline?”' : '“I’m launching a business and need a new website.”'}</p>
      </div>
      <div className="automation-demo-actions">
        <button type="button" className="automation-demo-run" onClick={runDemo} disabled={running}>
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
            {complete ? <path d="M4 7a6 6 0 1 1 0 6M4 3v4h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /> : <path d="m7 4 8 6-8 6V4Z" fill="currentColor" />}
          </svg>
          {running ? 'Running…' : complete ? 'Replay demo' : 'Run demo'}
        </button>
        <p className="automation-demo-progress" aria-hidden="true">
          {complete ? 'Ready for your review.' : running ? `Step ${currentStep + 1} of 3` : 'See the handoff in action.'}
        </p>
      </div>
      <p className="automation-demo-disclosure">Illustrative workflow · sample data</p>
      <p className="automation-demo-sr-only" role="status" aria-atomic="true">
        {complete ? `Demo run ${runCount} complete. A sample follow-up draft is ready for review. Nothing has been sent.` : ''}
      </p>
    </section>
  )
}
