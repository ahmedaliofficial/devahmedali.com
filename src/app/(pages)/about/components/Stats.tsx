import Image from 'next/image'

import cloud01 from '@/assets/images/locations/cloud-01.webp'
import cloud05 from '@/assets/images/locations/cloud-05.webp'
import globImage from '@/assets/images/locations/glob-image.png'

type StatItemType = {
  value: string
  suffix?: string
  title: string
  description: string
  colorClass: string
  colSpanClass?: string
}

const statsData: StatItemType[] = [
  {
    value: '87',
    suffix: '%',
    title: 'Average monthly consistency',
    description: 'Users stay on track most of the month.',
    colorClass: 'text-primary-8',
  },
  {
    value: '87',
    title: 'Sessions completed on average',
    description: 'Regular habits are completed each month.',
    colorClass: 'text-primary-1',
  },
  {
    value: '32 +',
    title: 'Countries with active Habitline users',
    description: 'People are using Habitline around the world.',
    colorClass: 'text-primary text-nowrap',
    colSpanClass: 'md:col-span-1 col-span-2',
  },
]

const Stats = () => {
  return (
    <section className="pb-20 md:pb-25 lg:pb-50">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-7.5 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-y-5 lg:gap-y-12.5">
            <div className="space-y-4">
              <span className="border-default-200 text-default-800 inline-block rounded-full border bg-white px-5 py-1 text-sm font-medium md:py-1.5">Habitline in numbers</span>
              <h2 className="text-default-900 text-3xl leading-tight font-medium tracking-tight md:text-4xl lg:text-[50px]">
                Real habits, real
                <br className="hidden lg:block" />
                consistency
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-7.5 lg:grid-cols-1 lg:gap-10">
              {statsData.map((stat, idx) => (
                <div key={idx} className={`items-center gap-5 lg:flex lg:gap-7.5 ${stat.colSpanClass || ''}`}>
                  <div className="mb-2 min-w-25 text-center lg:mb-0 lg:text-start">
                    <span className={`text-2xl font-bold lg:text-4xl ${stat.colorClass}`}>{stat.value}</span>
                    {stat.suffix && <span className={`text-2xl font-bold lg:text-4xl ${stat.colorClass}`}>{stat.suffix}</span>}
                  </div>
                  <div className="bg-default-300 hidden h-16 w-px lg:block"></div>
                  <div className="text-center md:text-start">
                    <p className="text-default-900 mb-1.5 font-medium md:text-lg">{stat.title}</p>
                    <p className="text-default-500 text-sm">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-default-200 relative flex flex-col items-center justify-between overflow-hidden rounded-2xl md:min-h-125 lg:min-h-150">
            <div className="z-10 pt-12.5 pb-12.5 text-center lg:pb-8">
              <h3 className="text-primary-1 mb-3.75 text-4xl font-bold drop-shadow-[0_10px_15px_rgba(249,115,22,0.3)] md:text-5xl lg:text-[90px]">62,000+</h3>
              <span className="border-default-200 text-default-800 inline-block rounded-full border bg-white px-5 py-1 text-sm font-medium md:py-1.5">check-ins logged last month</span>
            </div>

            <div className="relative flex h-full w-full items-end">
              <Image src={globImage} alt="Globe" className="w-full object-cover" />

              <Image src={cloud01} className="absolute inset-e-0 -bottom-58 -left-50 z-20 w-full" alt="Clouds" />

              <Image src={cloud05} className="absolute -right-60 -bottom-45 z-20 w-full" alt="Clouds" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
