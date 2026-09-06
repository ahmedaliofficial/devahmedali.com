import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'

import stepImage01 from '@/assets/images/gallery/step-image-01.webp'
import stepImage02 from '@/assets/images/gallery/step-image-02.webp'
import stepImage03 from '@/assets/images/gallery/step-image-03.webp'
import stepImage04 from '@/assets/images/gallery/step-image-04.webp'
import vector10 from '@/assets/images/icons/vector-10.png'

export type UsecaseTabType = {
  id: string
  targetId: string
  label: string
  icon: string
  image: StaticImageData
  alt: string
  description: string
  statValue: string
  statLabel: string
  isActive?: boolean
}

const usecaseTabsData: UsecaseTabType[] = [
  {
    id: 'tabs-item-1',
    targetId: '#tabs-1',
    label: 'Professionals',
    icon: 'lucide:briefcase-business',
    image: stepImage01,
    alt: 'Professionals',
    description: 'For people balancing classes, projects, and long study sessions.',
    statValue: '14',
    statLabel: 'Study sessions logged each week',
    isActive: true,
  },
  {
    id: 'tabs-item-2',
    targetId: '#tabs-2',
    label: 'Students',
    icon: 'lucide:graduation-cap',
    image: stepImage02,
    alt: 'Students',
    description: 'For people juggling work, family routines, and personal goals.',
    statValue: '12',
    statLabel: 'Routines completed weekly',
  },
  {
    id: 'tabs-item-3',
    targetId: '#tabs-3',
    label: 'Remote Workers',
    icon: 'lucide:briefcase-business',
    image: stepImage03,
    alt: 'Remote Workers',
    description: 'Focus blocks, breaks, and shutdown routines help keep momentum.',
    statValue: '40',
    statLabel: 'Sessions completed monthly',
  },
  {
    id: 'tabs-item-4',
    targetId: '#tabs-4',
    label: 'Busy Parents',
    icon: 'lucide:users',
    image: stepImage04,
    alt: 'Professionals',
    description: 'For anyone handling long workdays, shifting priorities, and tight deadlines.',
    statValue: '87%',
    statLabel: 'Weekly consistency',
  },
]

const hashtagsData: string[] = ['#fitness enthusiasts', '#creatives', '#entrepreneurs', '#freelancers', '#new habit builders', '#deep-work lovers']

const Work = () => {
  return (
    <section className="relative" id="usecase">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(#e5e7eb 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="relative z-10 container rounded-2xl bg-white object-cover p-8.5 text-center lg:mx-auto lg:p-25" style={{ backgroundImage: `url(${vector10.src})` }}>
        <span className="border-default-200 text-default-800 mb-3.5 inline-block rounded-full border bg-white px-5 py-1.5 text-sm font-medium">Fits every lifestyle</span>

        <h2 className="text-default-900 mb-8 text-2xl leading-[1.1] font-medium tracking-normal md:mb-12.5 md:text-4xl lg:text-5xl">
          Adapted for the way
          <br className="hidden md:block" />
          you live and work
        </h2>

        <nav className="mb-7.5 flex flex-wrap justify-center gap-2.5 md:gap-5" aria-label="Tabs" role="tablist">
          {usecaseTabsData.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`hs-tab-active:border-default-800 hs-tab-active:bg-default-100 hs-tab-active:text-default-900 bg-default-100 border-default-200 text-default-500 hover:bg-default-100 inline-flex items-center gap-x-2.5 rounded-xl border px-5 py-2.5 text-base font-medium transition-all md:text-lg ${tab.isActive ? 'active' : ''}`}
              id={tab.id}
              data-hs-tab={tab.targetId}
              aria-controls={tab.targetId.substring(1)}
              role="tab"
              aria-selected={tab.isActive ? 'true' : undefined}
            >
              <Icon icon={tab.icon} />
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="relative mx-auto mt-8 max-w-5xl">
          {usecaseTabsData.map((tab) => (
            <div key={tab.targetId} id={tab.targetId.substring(1)} role="tabpanel" aria-labelledby={tab.id} className={`transition-all duration-300 ${tab.isActive ? '' : 'hidden'}`}>
              <div className="shadow-default-200/50 relative overflow-hidden rounded-2xl shadow-2xl">
                <Image src={tab.image} className="h-92 w-full object-cover lg:h-138" alt={tab.alt} />
                <div className="bg-default-900/60 absolute right-2 bottom-2 w-70 rounded-3xl border border-white/10 p-3.5 text-left backdrop-blur-md md:right-4 md:bottom-4 md:w-100 md:p-5 lg:right-8 lg:bottom-8 lg:p-7.5">
                  <p className="text-default-300 mb-7.5 text-sm font-medium tracking-normal md:text-lg">{tab.description}</p>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl leading-none font-bold text-white md:text-4xl">{tab.statValue}</h3>
                    <p className="text-default-400 text-sm font-medium tracking-tighter">{tab.statLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-12.5">
          <p className="text-default-800 mb-2.5 text-sm font-medium">And for every kind of daily rhythm</p>
          <div className="flex flex-wrap justify-center gap-2.5 md:gap-6.5">
            {hashtagsData.map((tag, idx) => (
              <span key={idx} className="text-default-900 text-sm font-medium transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
