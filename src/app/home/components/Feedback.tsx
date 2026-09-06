import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import avatar01 from '@/assets/images/team/avatar-01.webp'
import avatar02 from '@/assets/images/team/avatar-02.webp'
import avatar03 from '@/assets/images/team/avatar-03.webp'
import avatar04 from '@/assets/images/team/avatar-04.webp'
import avatar05 from '@/assets/images/team/avatar-05.webp'
import avatar06 from '@/assets/images/team/avatar-06.webp'
import avatar07 from '@/assets/images/team/avatar-07.webp'
import avatar08 from '@/assets/images/team/avatar-08.webp'
import avatar09 from '@/assets/images/team/avatar-09.webp'

export type FeedbackItemType = {
  quote: string
  avatar: StaticImageData
  name: string
  role: string
}

const feedbacksColumnsData: FeedbackItemType[][] = [
  [
    {
      quote: 'Habitline made my mornings feel manageable again.',
      avatar: avatar04,
      name: 'Maya Zong',
      role: 'Student',
    },
    {
      quote: 'The weekly insights are what sold me. They show exactly where I fall off and help me adjust without feeling guilty or overwhelmed.',
      avatar: avatar05,
      name: 'Aaron Chope',
      role: 'Product Designer',
    },
    {
      quote: 'I actually stick to my routines now. Small steps finally add up',
      avatar: avatar06,
      name: 'Hannah Kang',
      role: 'Nurse',
    },
  ],
  [
    {
      quote: 'I used to ignore reminders from other apps, but these feel calm and well-timed. It’s like the app knows when I’m actually able to do something.',
      avatar: avatar07,
      name: 'Daniel',
      role: 'Remote Engineer',
    },
    {
      quote: 'Focus blocks changed the way I work. I get more done in two hours now than what used to take half a day.',
      avatar: avatar08,
      name: 'Maya Zong',
      role: 'Student',
    },
    {
      quote: 'The gentle reminders help me stay consistent without feeling pressured.',
      avatar: avatar02,
      name: 'Riya Patel',
      role: 'Marketing Associate',
    },
  ],
  [
    {
      quote: 'It’s the first habit app that doesn’t overwhelm me.',
      avatar: avatar09,
      name: 'Sofia',
      role: 'Fitness Enthusiast',
    },
    {
      quote: 'Habitline keeps me grounded. Even on hectic days.',
      avatar: avatar01,
      name: 'Arjun Mehta',
      role: 'Software Developer',
    },
    {
      quote: 'I’ve finally stopped procrastinating. Habitline helped me break my goals into steps I can manage. I complete tasks in half the time I used to.',
      avatar: avatar03,
      name: 'Meera Shah',
      role: 'Content Writer',
    },
  ],
]

const Feedback = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-40">
      <div className="container">
        <div className="relative overflow-hidden lg:max-h-180">
          <div className="grid grid-cols-2 gap-3.5 md:gap-5 lg:grid-cols-3 lg:gap-7.5">
            {feedbacksColumnsData.map((column, colIdx) => (
              <div key={colIdx} className="space-y-3.5 md:space-y-5 lg:space-y-7.5">
                {column.map((item, itemIdx) => (
                  <div key={itemIdx} className="bg-default-200 flex flex-col justify-between rounded-2xl p-2.5 md:p-7.5">
                    <p className="text-default-800 mb-3.5 text-sm leading-snug font-medium md:mb-7.5 md:text-lg">{item.quote}</p>
                    <div className="flex items-center justify-between">
                      <div className="items-center gap-2.5 md:flex">
                        <Image src={item.avatar} className="size-7.5 rounded-full object-cover md:size-12" alt={item.name} />
                        <div className="mt-1.25 md:mt-0">
                          <h3 className="text-default-900 text-sm leading-none font-medium md:text-lg">{item.name}</h3>
                          <p className="text-default-500 mt-1 text-xs md:text-sm">{item.role}</p>
                        </div>
                      </div>
                      <Link href="" target="_blank" className="group inline-flex size-5.5 items-center justify-center overflow-hidden rounded-full bg-white md:size-10">
                        <span className="relative size-4 overflow-hidden">
                          <Icon icon="tabler:brand-x-filled" className="text-default-800 absolute inset-0 size-4 h-full w-full transition-transform duration-300 group-hover:-translate-y-[200%]" />
                          <Icon icon="tabler:brand-x-filled" className="text-default-800 absolute inset-0 size-4 h-full w-full translate-y-[200%] transition-transform duration-300 group-hover:translate-y-0" />
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feedback
