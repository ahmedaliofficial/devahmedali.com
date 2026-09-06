'use client'

import Image from 'next/image'

import cloud01 from '@/assets/images/locations/cloud-01.webp'
import cloud06 from '@/assets/images/locations/cloud-06.webp'
import glob from '@/assets/images/workspace/glob-image.png'
import heroGlobJpg from '@/assets/images/workspace/hero-glob.jpg'

const Stats = () => {
  return (
    <section className="relative overflow-hidden pb-20 md:pb-25 lg:pb-46">
      <div className="container">
        <div className="mb-2 text-center">
          <span className="border-default-200 text-default-800 mb-3.5 inline-block rounded-full border bg-white px-5 py-1.5 text-sm font-medium">Real habits, real numbers</span>
          <h2 className="text-default-900 text-3xl font-medium md:text-4xl lg:text-5xl">
            How people stay
            <br />
            consistent over time
          </h2>
        </div>

        <div className="relative z-20 mb-7.5 flex flex-col items-center justify-center">
          <div className="relative items-center md:inline-flex">
            <h3 className="text-primary-1 ms-8 text-4xl leading-none font-black tracking-normal md:ms-0 md:text-[100px] lg:text-[120px]">
              62,000 <span className="ms-1">+</span>
            </h3>

            <div className="-inset-e-12 mt-1 rounded-2xl bg-white px-2 py-2 whitespace-nowrap shadow-xl md:absolute md:top-20 md:-right-20 md:rotate-8 md:px-5">
              <p className="text-default-800 text-xs font-bold md:text-sm">Check-ins logged last month</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex h-100 flex-col items-center justify-start md:h-138">
          <Image src={glob} alt="Glob" className="hidden w-full object-cover" />

          <div className="bg-body-bg h-full w-full overflow-hidden">
            <div className="mix-blinset-e-darken bg-body-bg relative z-20 h-75 overflow-hidden md:h-125 lg:h-200">
              <video autoPlay loop muted playsInline className="absolute -inset-300 z-[-100] m-auto size-full bg-cover bg-center object-cover" style={{ backgroundImage: `url(${heroGlobJpg.src})` }}>
                <source src="/assets/videos/hero-glob.mp4" type="video/mp4" />
              </video>
            </div>
            <Image src={cloud06} alt="Decoration" className="absolute -inset-s-20 inset-e-0 top-auto bottom-40 z-20 h-40 w-full md:bottom-30 md:h-62.5 lg:bottom-2" />
            <Image src={cloud01} alt="Decoration Image" className="absolute -inset-s-7.5 inset-e-0 top-auto bottom-20 z-20 w-full md:-bottom-25 md:h-112 lg:-bottom-50" />
            <Image src={cloud01} alt="Decoration Image" className="absolute inset-s-auto -inset-e-25 top-auto bottom-3 z-20 h-75 w-full md:-bottom-5 lg:-inset-e-62.5 lg:-bottom-25 lg:h-112" />
          </div>

          <div className="z-40 mx-auto -mt-50 grid grid-cols-2 items-start gap-6 text-center md:-mt-60 md:w-3xl md:grid-cols-3 lg:-mt-0 lg:gap-17.5">
            <div className="flex flex-col items-center">
              <div className="flex items-baseline gap-1">
                <h3 className="text-default-900 text-3xl font-medium tracking-normal md:text-5xl lg:text-7xl">87</h3>
                <span className="text-primary-6 text-3xl font-medium md:text-5xl lg:text-6xl">%</span>
              </div>
              <p className="text-default-800 mt-2 text-sm leading-tight font-semibold md:text-lg">Faster AI execution</p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-default-900 text-3xl font-medium tracking-normal md:text-5xl lg:text-7xl">46</h3>
              <p className="text-default-800 mt-2 text-sm leading-tight font-semibold md:text-lg">Sessions completed on average</p>
            </div>

            <div className="col-span-2 flex flex-col items-center md:col-span-1">
              <div className="flex items-baseline gap-1">
                <h3 className="text-default-900 text-3xl font-medium tracking-normal md:text-5xl lg:text-7xl">32</h3>
                <span className="text-primary-3 text-3xl font-medium md:text-5xl lg:text-6xl">+</span>
              </div>
              <p className="text-default-800 mt-2 text-sm leading-tight font-semibold md:text-lg">Countries with active Habitline users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
