'use client'

import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

import about01 from '@/assets/images/about/about-01.webp'
import about02 from '@/assets/images/about/about-02.webp'
import about03 from '@/assets/images/about/about-03.webp'
import about04 from '@/assets/images/about/about-04.webp'
import phoneImage from '@/assets/images/event/phone-image.png'
import marquee01 from '@/assets/images/gallery/marquee-image-01.webp'
import marquee02 from '@/assets/images/gallery/marquee-image-02.webp'
import marquee03 from '@/assets/images/gallery/marquee-image-03.webp'
import marquee04 from '@/assets/images/gallery/marquee-image-04.webp'
import marquee05 from '@/assets/images/gallery/marquee-image-05.webp'
import marquee06 from '@/assets/images/gallery/marquee-image-06.webp'
import marquee07 from '@/assets/images/gallery/marquee-image-07.webp'
import marquee08 from '@/assets/images/gallery/marquee-image-08.webp'
import appStoreLightIcon from '@/assets/images/icons/app-store-light.svg'
import icon11 from '@/assets/images/icons/icon-11.svg'
import icon12 from '@/assets/images/icons/icon-12.svg'
import icon13 from '@/assets/images/icons/icon-13.svg'
import icon14 from '@/assets/images/icons/icon-14.svg'
import icon15 from '@/assets/images/icons/icon-15.svg'
import icon16 from '@/assets/images/icons/icon-16.svg'
import icon17 from '@/assets/images/icons/icon-17.svg'
import icon18 from '@/assets/images/icons/icon-18.svg'
import icon19 from '@/assets/images/icons/icon-19.svg'
import playStoreIcon from '@/assets/images/icons/play-store.svg'
import cloud01 from '@/assets/images/locations/cloud-01.webp'
import cloud02 from '@/assets/images/locations/cloud-02.webp'
import cloud04 from '@/assets/images/locations/cloud-04.webp'

export type AboutImage = {
  image: StaticImageData
  animationClass: string
}

export type MarqueeItem = {
  bgColorClass: string
  icon: StaticImageData
  iconInvert: boolean
  label: string
  image: StaticImageData
}

const aboutImages: AboutImage[] = [
  { image: about01, animationClass: 'animate-imageSwap' },
  { image: about02, animationClass: 'animate-imageSwap2' },
  { image: about03, animationClass: 'animate-imageSwap3' },
  { image: about04, animationClass: 'animate-imageSwap4' },
]

const hashtags: string[] = ['#Founders', '#Students', '#BusyParents', '#RemoteTeams']

const marqueeItems: MarqueeItem[] = [
  { bgColorClass: 'bg-primary-8', icon: icon11, iconInvert: false, label: 'Phone off by 10:30', image: marquee01 },
  { bgColorClass: 'bg-primary-1', icon: icon12, iconInvert: true, label: 'Morning walk', image: marquee02 },
  { bgColorClass: 'bg-primary-2', icon: icon13, iconInvert: true, label: 'Focus session', image: marquee03 },
  { bgColorClass: 'bg-primary-3', icon: icon14, iconInvert: true, label: 'Stretch for 5 minutes', image: marquee04 },
  { bgColorClass: 'bg-primary-7', icon: icon15, iconInvert: true, label: 'Clean workspace', image: marquee05 },
  { bgColorClass: 'bg-primary-6', icon: icon16, iconInvert: true, label: 'Meditate', image: marquee06 },
  { bgColorClass: 'bg-primary-5', icon: icon17, iconInvert: true, label: 'Track water', image: marquee07 },
  { bgColorClass: 'bg-primary-4', icon: icon18, iconInvert: true, label: 'Write journal', image: marquee08 },
]

const About = () => {
  return (
    <section className="relative pb-20 text-center lg:pt-6 lg:pb-50">
      <div className="container">
        <div className="md:mb-15">
          <h2 className="mx-auto mb-10 max-w-5xl text-center text-3xl leading-tight font-medium tracking-tight text-black md:text-5xl">
            Build steady daily{' '}
            <span className="relative inline-flex h-6.5 w-12.5 overflow-hidden rounded-full align-middle md:h-11 md:w-22.5">
              {aboutImages.map((img, idx) => (
                <Image key={idx} src={img.image} className={`absolute inset-0 h-full w-full object-cover ${img.animationClass}`} alt="" />
              ))}
            </span>{' '}
            habits with a layout
            <br className="hidden lg:block" />
            that keeps your mornings, evenings,&nbsp;
            <span className="mx-1 inline-flex align-middle">
              <Image src={icon19} alt="Icon" className="size-7.5 md:size-15" />
            </span>{' '}
            and focus hours simple to follow.
          </h2>

          <p className="text-default-500 mb-3.5 text-base font-medium md:text-xl lg:text-2xl">Used by people to improve their routines.</p>

          <div className="flex flex-wrap justify-center gap-3.5">
            {hashtags.map((tag, idx) => (
              <span key={idx} className="bg-default-200 text-default-800 rounded-full px-3.5 py-2 text-sm font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex w-full flex-col items-center overflow-hidden py-12 md:py-24">
          <div className="bg-body-bg pointer-events-none absolute inset-y-0 -left-20 z-20 hidden w-37.5 blur-[20px] md:block"></div>
          <div className="bg-body-bg pointer-events-none absolute inset-y-0 -right-20 z-20 hidden w-37.5 blur-[30px] md:block"></div>

          <div className="mt-10 overflow-hidden py-6 md:mt-20">
            <div className="animate-marquee-left flex w-max gap-5">
              <div className="flex items-center gap-5">
                {marqueeItems.map((item, idx) => (
                  <Fragment key={idx}>
                    <div className="inline-flex size-32.5 flex-col items-center justify-center gap-5 rounded-3xl bg-white p-5 shadow-xl md:size-37.5">
                      <div className={`flex size-7.5 shrink-0 items-center justify-center rounded-full md:size-12.5 ${item.bgColorClass}`}>
                        <Image src={item.icon} className={`size-3.5 md:size-6 ${item.iconInvert ? 'invert' : ''}`} alt="" />
                      </div>
                      <span className="text-default-800 text-center text-sm font-medium md:text-base">{item.label}</span>
                    </div>
                    <Image src={item.image} className="size-32.5 rounded-3xl object-cover shadow-lg md:size-37.5" alt="" />
                  </Fragment>
                ))}
              </div>

              <div className="flex items-center gap-5">
                {marqueeItems.map((item, idx) => (
                  <Fragment key={idx}>
                    <div className="inline-flex size-32.5 flex-col items-center justify-center gap-5 rounded-3xl bg-white p-5 shadow-xl md:size-37.5">
                      <div className={`flex size-7.5 shrink-0 items-center justify-center rounded-full md:size-12.5 ${item.bgColorClass}`}>
                        <Image src={item.icon} className={`size-3.5 md:size-6 ${item.iconInvert ? 'invert' : ''}`} alt="" />
                      </div>
                      <span className="text-default-800 text-center text-sm font-medium md:text-base">{item.label}</span>
                    </div>
                    <Image src={item.image} className="size-32.5 rounded-3xl object-cover shadow-lg md:size-37.5" alt="" />
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden pb-6 md:mb-20">
            <div className="animate-marquee-right flex w-max gap-5">
              <div className="flex items-center gap-5">
                {marqueeItems.map((item, idx) => (
                  <Fragment key={idx}>
                    <div className="inline-flex size-32.5 flex-col items-center justify-center gap-5 rounded-3xl bg-white p-5 shadow-xl md:size-37.5">
                      <div className={`flex size-7.5 shrink-0 items-center justify-center rounded-full md:size-12.5 ${item.bgColorClass}`}>
                        <Image src={item.icon} className={`size-3.5 md:size-6 ${item.iconInvert ? 'invert' : ''}`} alt="" />
                      </div>
                      <span className="text-default-800 text-center text-sm font-medium md:text-base">{item.label}</span>
                    </div>
                    <Image src={item.image} className="size-32.5 rounded-3xl object-cover shadow-lg md:size-37.5" alt="" />
                  </Fragment>
                ))}
              </div>

              <div className="flex items-center gap-5">
                {marqueeItems.map((item, idx) => (
                  <Fragment key={idx}>
                    <div className="inline-flex size-32.5 flex-col items-center justify-center gap-5 rounded-3xl bg-white p-5 shadow-xl md:size-37.5">
                      <div className={`flex size-7.5 shrink-0 items-center justify-center rounded-full md:size-12.5 ${item.bgColorClass}`}>
                        <Image src={item.icon} className={`size-3.5 md:size-6 ${item.iconInvert ? 'invert' : ''}`} alt="" />
                      </div>
                      <span className="text-default-800 text-center text-sm font-medium md:text-base">{item.label}</span>
                    </div>
                    <Image src={item.image} className="size-32.5 rounded-3xl object-cover shadow-lg md:size-37.5" alt="" />
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center">
            <Image src={phoneImage} className="h-88 w-42 md:h-175 md:w-85" alt="App Interface" />
          </div>
        </div>

        <div className="mx-auto mt-4 flex flex-col items-center gap-y-5 px-6 md:mt-12">
          <div className="border-default-200 flex items-center gap-2 rounded-full border bg-white px-2.5 py-2 md:px-5">
            <Icon icon="tabler:star-filled" className="text-primary-1 size-3.5" />
            <p className="text-default-500 text-sm font-medium">
              <span className="font-medium text-black">4.7 rating</span> (based on 125 reviews)
            </p>
          </div>

          <p className="text-default-700 mb-2.5 w-xs text-base leading-normal md:w-xl md:text-lg">Stay consistent with a system that fits into real life. Simple cards, clear routines, and gentle nudges help you build progress that lasts.</p>

          <div className="flex w-full flex-col justify-center gap-5 md:flex-row">
            <Link href="" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-black px-8.5 text-white shadow-xl! transition-all duration-300 hover:scale-95">
              <div className="relative inline-flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-full">
                <div className="flex h-14 items-center gap-3">
                  <Image src={appStoreLightIcon} className="h-5 w-5" alt="" />
                  <span className="font-normal">Download for iPhone</span>
                </div>
                <div className="absolute top-full flex h-14 items-center gap-3">
                  <Image src={appStoreLightIcon} className="h-5 w-5" alt="" />
                  <span className="font-normal">Download for iPhone</span>
                </div>
              </div>
            </Link>

            <Link href="" className="group bg-default-200 relative inline-flex items-center justify-center overflow-hidden rounded-full px-8.5 text-black transition-all duration-300 hover:scale-95">
              <div className="relative flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-full">
                <div className="flex h-14 items-center gap-2.5">
                  <Image src={playStoreIcon} className="h-5 w-5" alt="" />
                  <span className="font-normal">Get it on Android</span>
                </div>
                <div className="absolute top-full flex h-14 items-center gap-2.5">
                  <Image src={playStoreIcon} className="h-5 w-5" alt="" />
                  <span className="font-normal">Get it on Android</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative hidden lg:block">
        <Image src={cloud04} loading="lazy" alt="Decoration Image" className="absolute inset-s-0 inset-e-0 -bottom-100 -z-5 h-148 w-full object-cover" />
        <Image src={cloud02} loading="lazy" alt="Decoration Image" className="absolute inset-e-0 -bottom-38 -z-5 h-75" />
        <Image src={cloud01} loading="lazy" alt="Decoration Image" className="absolute inset-s-0 -bottom-48 -z-5 h-75" />
      </div>
    </section>
  )
}

export default About
