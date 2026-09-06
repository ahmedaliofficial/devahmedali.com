import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

import icon30 from '@/assets/images/icons/icon-30.svg'
import icon32 from '@/assets/images/icons/icon-32.svg'
import dashboard04 from '@/assets/images/workspace/dashboard-04.svg'
import dashboard05 from '@/assets/images/workspace/dashboard-05.svg'
import dashboard06 from '@/assets/images/workspace/dashboard-06.svg'
import dashboard07 from '@/assets/images/workspace/dashboard-07.png'
import suggestionImage from '@/assets/images/workspace/suggestion-image.webp'

const SmartAssist = () => {
  return (
    <section className="pb-25 lg:pb-50" id="smart-assist">
      <div className="container">
        <div className="mb-20 grid grid-cols-1 items-center gap-7.5 md:grid-cols-2">
          <div>
            <span className="border-default-200 text-default-800 mb-2.5 inline-block rounded-full border bg-white px-5 py-1.5 text-sm font-medium">Smarter habits, less thinking</span>
            <h3 className="text-default-900 mb-2.5 text-3xl leading-tight font-medium tracking-tight md:text-4xl lg:text-5xl">
              AI suggestions that
              <br className="hidden md:block" />
              adjust to your day
            </h3>
            <p className="text-default-500 mb-6 max-w-lg text-base leading-normal md:text-lg md:leading-relaxed">Habitline learns your patterns and offers small, useful suggestions that help you stay consistent without guessing what to do next.</p>
            <div>
              <Link href="" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-black px-8.5 text-white shadow-xl transition-all duration-300 hover:scale-95">
                <span className="relative inline-flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-full">
                  <span className="flex h-14 items-center gap-3">
                    <span className="font-medium">See how suggestions work</span>
                  </span>
                  <span className="absolute top-full flex h-14 items-center gap-3">
                    <span className="font-medium">See how suggestions work</span>
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="group relative mx-auto flex h-100 w-full items-center justify-center overflow-hidden rounded-2xl shadow-2xl md:aspect-video lg:aspect-[4/3] lg:h-142 lg:max-w-4xl" style={{ backgroundImage: `url(${suggestionImage.src})` }}>
            <div className="absolute top-10 -right-16 transition-transform duration-700 ease-out md:top-20">
              <Image src={dashboard07} alt="Smartphone Mockup" className="h-auto -rotate-20 lg:w-xs" />
            </div>

            <div className="absolute top-12 left-6 z-30 hidden flex-col gap-4 md:top-20 md:left-12 lg:flex">
              <div className="animate-float">
                <Image src={dashboard06} alt="Suggestion 01" className="w-48 md:w-64" />
              </div>
              <div className="animate-float">
                <Image src={dashboard05} alt="Suggestion 02" className="ms-2 w-48 md:ms-4 md:w-64" />
              </div>
              <div className="animate-float">
                <Image src={dashboard04} alt="Suggestion 03" className="w-48 md:w-64" />
              </div>
            </div>

            <div className="animate-pulse-slow absolute bottom-20 left-40 z-30 hidden lg:block">
              <div>
                <Image src={icon30} alt="AI Icon" className="size-18 rounded-2xl shadow-inner" />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-2.5 md:gap-7.5 lg:grid-cols-4">
          <div className="group flex flex-col justify-end gap-y-6.5 rounded-2xl bg-white p-3.5 md:gap-y-10 md:p-5 lg:gap-y-17.5 lg:p-7.5">
            <div className="bg-primary-3 flex size-12.5 items-center justify-center rounded-full">
              <Icon icon="lucide:bell-dot" className="text-xl text-white" />
            </div>
            <div>
              <h4 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl">Reminder Timing</h4>
              <p className="text-default-700 text-sm leading-normal md:text-lg">Suggests the best time to remind you.</p>
            </div>
          </div>

          <div className="group flex flex-col justify-end gap-y-6.5 rounded-2xl bg-white p-3.5 md:gap-y-10 md:p-5 lg:gap-y-17.5 lg:p-7.5">
            <div className="bg-primary-7 flex size-12.5 items-center justify-center rounded-full">
              <Image src={icon32} alt="" />
            </div>
            <div>
              <h4 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl">Habit Priorities</h4>
              <p className="text-default-700 text-sm leading-normal md:text-lg">Reorders habits on busy days.</p>
            </div>
          </div>

          <div className="group flex flex-col justify-end gap-y-6.5 rounded-2xl bg-white p-3.5 md:gap-y-10 md:p-5 lg:gap-y-17.5 lg:p-7.5">
            <div className="bg-primary-6 flex size-12.5 items-center justify-center rounded-full">
              <Icon icon="lucide:eye" className="text-xl text-white" />
            </div>
            <div>
              <h4 className="text-default-900 mb-2.5 text-xl font-medium md:text-2xl">Routine Insights</h4>
              <p className="text-default-700 text-sm leading-normal md:text-lg">Highlights what’s working and what’s slipping.</p>
            </div>
          </div>

          <div className="group flex flex-col justify-end gap-y-6.5 rounded-2xl bg-white p-3.5 md:gap-y-10 md:p-5 lg:gap-y-17.5 lg:p-7.5">
            <div className="bg-primary-2 flex size-12.5 items-center justify-center rounded-full">
              <Icon icon="lucide:lightbulb" className="text-xl text-white" />
            </div>
            <div>
              <h4 className="text-default-900 mb-2.5 text-xl font-medium md:text-[21px]">Recovery suggestion</h4>
              <p className="text-default-700 text-sm leading-normal md:text-lg">Helps you recover when you miss a day.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SmartAssist
