'use client'

import { Icon } from '@iconify/react'
import { useState } from 'react'

export type AccordionItem = {
  question: string
  answer: string
}

type AccordionProps = {
  items: AccordionItem[]
  /** Index open on first render; -1 for all closed */
  defaultOpen?: number
  className?: string
}

const Accordion = ({ items, defaultOpen = 0, className = '' }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={index} className="border-default-200 overflow-hidden rounded-2xl border bg-white">
            <button type="button" onClick={() => setOpenIndex(isOpen ? -1 : index)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start md:px-6 md:py-5">
              <span className="text-default-900 text-base font-medium md:text-lg">{item.question}</span>
              <Icon icon="lucide:plus" className={`text-default-500 size-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
            </button>

            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <p className="text-default-500 px-5 pb-5 text-base md:px-6 md:pb-6">{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
