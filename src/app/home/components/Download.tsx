import Image from 'next/image'
import Link from 'next/link'

import appStoreLight from '@/assets/images/icons/app-store-light.svg'
import icon39 from '@/assets/images/icons/icon-39.svg'
import playStore from '@/assets/images/icons/play-store.svg'
import cloud01 from '@/assets/images/locations/cloud-01.webp'
import cloud04 from '@/assets/images/locations/cloud-04.webp'
import mobileImage from '@/assets/images/workspace/mobile-image.png'

const Download = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-8 lg:pt-30">
      <div className="relative z-10 container">
        <div className="grid grid-cols-1 items-center gap-7.5 md:grid-cols-3 md:gap-0">
          <div className="order-1 flex flex-col items-center text-center md:me-10 md:text-left lg:items-start">
            <h3 className="text-default-900 text-2xl font-medium tracking-tight lg:text-4xl">Build better habits with less effort</h3>

            <p className="text-default-600 mt-2.5 text-lg lg:mt-5">Track what matters, stay organized, and improve at your own pace.</p>

            <div className="relative z-40 mt-3.5 flex flex-col gap-4 lg:mt-8">
              <Link href="" className="group relative inline-flex overflow-hidden rounded-full bg-black px-3.5 text-white shadow-xl transition-all duration-300 hover:scale-95 lg:px-8.5">
                <span className="relative flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-full">
                  <span className="flex h-14 items-center gap-3">
                    <Image src={appStoreLight} className="size-5" alt="" />
                    <span className="text-sm lg:text-base">Download for iPhone</span>
                  </span>
                  <span className="absolute top-full flex h-14 items-center gap-3">
                    <Image src={appStoreLight} className="size-5" alt="" />
                    <span className="text-sm lg:text-base">Download for iPhone</span>
                  </span>
                </span>
              </Link>

              <Link href="" className="group bg-default-200 relative inline-flex overflow-hidden rounded-full px-3.5 text-black transition-all duration-300 hover:scale-95 lg:px-8.5">
                <span className="relative flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-full">
                  <span className="flex h-14 items-center gap-2.5">
                    <Image src={playStore} className="size-5" alt="" />
                    <span className="text-sm lg:text-base">Get it on Android</span>
                  </span>
                  <span className="absolute top-full flex h-14 items-center gap-2.5">
                    <Image src={playStore} className="size-5" alt="" />
                    <span className="text-sm lg:text-base">Get it on Android</span>
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="order-3 flex justify-center md:order-2">
            <Image src={mobileImage} alt="App Dashboard" className="relative z-10 w-full md:h-80 md:max-w-56 lg:h-156 lg:max-w-114" />
          </div>

          <div className="order-2 flex flex-col items-center md:order-3 md:ms-10 lg:items-end">
            <div className="text-center md:text-start lg:max-w-xl">
              <h3 className="text-default-900 mb-5 text-2xl font-medium tracking-tight lg:text-4xl">Scan the QR code to download the app</h3>

              <div className="relative z-30 inline-block rounded-2xl bg-white p-2 shadow-2xl">
                <div className="bg-default-200 flex items-center justify-center rounded-2xl p-2">
                  <Image src={icon39} alt="QR Code" className="size-36 lg:size-46" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-body-bg absolute top-auto -bottom-18 left-0 z-20 h-30 w-full blur-[20px] md:h-40 md:blur-[35px] lg:-bottom-30 lg:h-55"></div>
      </div>

      <Image src={cloud04} alt="" className="pointer-events-none absolute -bottom-12.5 -left-25 -z-20 h-72.5 w-218" />

      <Image src={cloud01} alt="" className="pointer-events-none absolute inset-e-25 -bottom-25 -z-6 h-72.5 w-224 -translate-x-1/2 lg:z-10" />

      <Image src={cloud04} alt="" className="pointer-events-none absolute inset-e-0 top-auto -bottom-50 z-0 h-87.5 w-full" />
    </section>
  )
}

export default Download
