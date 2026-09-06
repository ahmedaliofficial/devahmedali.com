import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import aboutImage01 from '@/assets/images/about/about-image-01.webp'
import aboutImage from '@/assets/images/about/about-image.webp'
import phoneImage from '@/assets/images/event/phone-image.png'
import cloud01 from '@/assets/images/locations/cloud-01.webp'
import cloud04 from '@/assets/images/locations/cloud-04.webp'
import avatar01 from '@/assets/images/team/avatar-01.webp'
import avatar02 from '@/assets/images/team/avatar-02.webp'
import avatar03 from '@/assets/images/team/avatar-03.webp'

import client01 from '@/assets/images/client/client-01.svg'
import client02 from '@/assets/images/client/client-02.svg'
import client03 from '@/assets/images/client/client-03.svg'
import client04 from '@/assets/images/client/client-04.svg'
import client05 from '@/assets/images/client/client-05.svg'
import client06 from '@/assets/images/client/client-06.svg'

const avatarImagesData: StaticImageData[] = [avatar01, avatar02, avatar03]

const clientLogosData: StaticImageData[] = [client01, client02, client03, client04, client05, client06]

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden pt-34 pb-15 md:pt-40 md:pb-25 lg:py-50">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-60">
        <Image src={cloud04} alt="" className="absolute top-10 left-[-5%] w-1/3 blur-sm" />
        <Image src={cloud01} alt="" className="absolute bottom-20 left-0 w-1/4" />
        <Image src={cloud04} alt="" className="absolute right-0 bottom-[-10%] w-full opacity-40" />
      </div>

      <div className="relative z-10 container mx-auto mb-15 lg:mb-32">
        <div className="mb-8 max-w-md lg:mb-20 lg:max-w-xl">
          <span className="border-default-200 text-default-800 mb-2 inline-block rounded-full border bg-white px-5 py-1 text-sm font-medium md:py-1.5 lg:mb-0">About the App</span>

          <h1 className="text-default-900 text-4xl font-medium tracking-tight md:text-[50px] lg:text-[90px]">A simpler way to build habits</h1>

          <div className="mt-2.5 flex flex-col items-start gap-5 md:mt-5 lg:mt-12 lg:flex-row lg:items-center lg:gap-7.5">
            <Link href="" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-black px-3.5 text-white shadow-xl! transition-all duration-300 hover:scale-95 lg:px-8.5">
              <div className="relative inline-flex flex-col items-center text-nowrap transition-transform duration-300 group-hover:-translate-y-full">
                <div className="flex h-10.5 items-center gap-3 lg:h-14">
                  <span className="text-sm font-medium lg:text-base">Download the app</span>
                </div>
                <div className="absolute top-full flex h-10.5 items-center gap-3 lg:h-14">
                  <span className="text-sm font-medium lg:text-base">Download the app</span>
                </div>
              </div>
            </Link>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-2.5">
                {avatarImagesData.map((avatar, idx) => (
                  <Image key={idx} className="border-default-800 size-10 rounded-full border-2  shadow-sm" src={avatar} alt="" />
                ))}
                <div className="border-default-800 bg-default-50 text-default-800 inline-flex size-10 items-center justify-center rounded-full border-2 text-[8px] font-bold shadow-sm">You?</div>
              </div>

              <div className="flex flex-col">
                <div className="flex gap-1.5">
                  <Icon icon="tabler:star-filled" className="text-primary-1 size-4" />
                  <Icon icon="tabler:star-filled" className="text-primary-1 size-4" />
                  <Icon icon="tabler:star-filled" className="text-primary-1 size-4" />
                  <Icon icon="tabler:star-filled" className="text-primary-1 size-4" />
                  <Icon icon="tabler:star-filled" className="text-primary-1 size-4" />
                </div>
                <p className="text-default-600 text-lg font-medium text-nowrap">Trusted by worldwide</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 items-end gap-5 md:grid-cols-12 lg:gap-7.5">
            <div className="md:col-span-7">
              <div className="overflow-hidden rounded-2xl lg:rounded-3xl">
                <Image src={aboutImage} alt="Community" className="h-60 w-full object-cover lg:h-105" />
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative flex h-86 items-end justify-center overflow-visible rounded-4xl bg-gradient-to-b from-sky-500 to-cyan-100 md:h-60 lg:h-105">
                <Image src={aboutImage01} alt="" className="absolute inset-0 h-full w-full rounded-2xl object-cover lg:rounded-3xl" />

                <div className="absolute lg:-top-[370px] lg:bottom-4 bottom-2 z-20">
                  <Image src={phoneImage} alt="Phone" className="lg:w-85 lg:h-175 md:w-68 md:h-140 w-[155.8px] h-[320px] rounded-2xl drop-shadow-[0_40px_60px_rgba(0,0,0,0.25)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="text-center">
          <span className="text-default-800 mb-5 block text-base lg:mb-7.5 lg:text-xl">Trusted worldwide</span>
        </div>

        <div className="relative overflow-hidden">
          <div className="from-body-bg pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r to-transparent"></div>

          <div className="from-body-bg pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l to-transparent"></div>

          <div className="animate-marquee flex gap-12.5 lg:gap-16">
            <div className="flex items-center gap-12.5 lg:gap-16">
              {clientLogosData.map((logo, idx) => (
                <Image key={idx} src={logo} alt="Client Logo" className="h-6 w-auto object-contain" />
              ))}
            </div>

            <div className="flex items-center gap-12.5 lg:gap-16">
              {clientLogosData.map((logo, idx) => (
                <Image key={idx} src={logo} alt="Client Logo" className="h-6 w-auto object-contain" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
