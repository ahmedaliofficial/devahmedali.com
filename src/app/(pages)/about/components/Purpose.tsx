import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

import aboutImage02 from '@/assets/images/about/about-image-02.webp'
import icon30 from '@/assets/images/icons/icon-30.svg'
import dashboard01 from '@/assets/images/workspace/dashboard-01.svg'
import dashboard04 from '@/assets/images/workspace/dashboard-04.svg'
import dashboard05 from '@/assets/images/workspace/dashboard-05.svg'
import dashboard06 from '@/assets/images/workspace/dashboard-06.svg'

const purposePointsData: string[] = ['Real life is unpredictable', 'Progress shouldn’t feel overwhelming', 'Motivation isn’t enough']

const Purpose = () => {
  return (
    <section className="py-20 md:py-25 lg:py-50">
      <div className="container">
        <div className="grid items-center gap-7.5 md:grid-cols-2 lg:gap-15">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <Image src={aboutImage02} alt="" className="h-100 w-full object-cover md:h-125" />

              <div className="absolute inset-0 bg-black/15"></div>

              <div className="absolute lg:inset-s-10.5 inset-s-4 lg:top-24 md:top-36 top-20 flex flex-col lg:gap-y-4 gap-y-1">
                <Image src={dashboard06} alt="" className="md:w-58 w-46" />
                <Image src={dashboard05} alt="" className="md:w-58 w-46" />
                <Image src={dashboard04} alt="" className="md:w-58 w-46" />
                <Image src={icon30} alt="" className="mx-auto size-18.75" />
              </div>
              <Image src={dashboard01} alt="" className="absolute lg:h-37 md:h-28 h-20 lg:top-11.5 top-4 lg:inset-e-15 inset-e-4" />
            </div>
          </div>

          <div className="space-y-3.5 lg:space-y-5">
            <span className="border-default-200 text-default-800 inline-block rounded-full border bg-white px-5 py-1 text-sm font-medium md:py-1.5">Why Habitline Exists</span>

            <h2 className="text-default-900 mb-3.5 text-2xl leading-tight font-medium tracking-tight md:text-4xl lg:text-[50px]">Building habits shouldn’t feel overwhelming</h2>

            <p className="text-default-600 mb-3.75 leading-tight md:mb-6 lg:w-md lg:text-lg">Most tools expect perfect streaks, fixed schedules, and unlimited motivation. But real life isn’t that consistent. Days get busy. Plans shift. People forget.</p>

            <div className="mb-5 space-y-2 lg:mb-12.5">
              {purposePointsData.map((point, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div>
                    <Icon icon="lucide:circle-check" className="text-primary-2 mt-1" />
                  </div>

                  <p className="text-default-800 text-lg font-medium">{point}</p>
                </div>
              ))}
            </div>

            <Link href="" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-black px-3.5 text-white shadow-xl! transition-all duration-300 hover:scale-95 md:px-8.5">
              <div className="relative inline-flex flex-col items-center text-nowrap transition-transform duration-300 group-hover:-translate-y-full">
                <div className="flex h-10.5 items-center gap-3 md:h-14">
                  <span className="text-sm font-medium md:text-base">Open the features</span>
                </div>
                <div className="absolute top-full flex h-10.5 items-center gap-3 md:h-14">
                  <span className="text-sm font-medium md:text-base">Open the features</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Purpose
