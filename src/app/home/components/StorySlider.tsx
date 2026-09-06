'use client'

import { Icon } from '@iconify/react'
import lightGallery from 'lightgallery'
import lgVideo from 'lightgallery/plugins/video'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useRef } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import avatar04 from '@/assets/images/team/avatar-04.webp'
import avatar05 from '@/assets/images/team/avatar-05.webp'
import avatar07 from '@/assets/images/team/avatar-07.webp'
import avatar08 from '@/assets/images/team/avatar-08.webp'
import avatar09 from '@/assets/images/team/avatar-09.webp'

import poster01 from '@/assets/images/event/story-slider-01_poster.jpg'
import poster02 from '@/assets/images/event/story-slider-02_poster.jpg'
import poster03 from '@/assets/images/event/story-slider-03_poster.jpg'

export type StorySlideType = {
  videoSrc: string
  poster: StaticImageData
  bgGradientClass: string
  avatar: StaticImageData
  name: string
  role: string
  youtubeUrl: string
}

const storySlidesData: StorySlideType[] = [
  {
    videoSrc: '/assets/videos/story-slider-01.mp4',
    poster: poster01,
    bgGradientClass: 'absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40',
    avatar: avatar09,
    name: 'Marcus Reed',
    role: 'Fitness Instructor',
    youtubeUrl: 'https://www.youtube.com/embed/elgqxmdVms8?si=yYfzbunShGP15tde',
  },
  {
    videoSrc: '/assets/videos/story-slider-02.mp4',
    poster: poster02,
    bgGradientClass: 'absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent',
    avatar: avatar08,
    name: 'Aisha Khan',
    role: 'Digital Marketer',
    youtubeUrl: 'https://www.youtube.com/embed/elgqxmdVms8?si=yYfzbunShGP15tde',
  },
  {
    videoSrc: '/assets/videos/story-slider-03.mp4',
    poster: poster03,
    bgGradientClass: 'absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent',
    avatar: avatar07,
    name: 'Daniel',
    role: 'Remote Engineer',
    youtubeUrl: 'https://www.youtube.com/embed/elgqxmdVms8?si=yYfzbunShGP15tde',
  },
  {
    videoSrc: '/assets/videos/story-slider-04.mp4',
    poster: poster01,
    bgGradientClass: 'absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent',
    avatar: avatar04,
    name: 'Olivia Park',
    role: 'Project Manager',
    youtubeUrl: 'https://www.youtube.com/embed/elgqxmdVms8?si=yYfzbunShGP15tde',
  },
  {
    videoSrc: '/assets/videos/story-slider-05.mp4',
    poster: poster02,
    bgGradientClass: 'absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent',
    avatar: avatar05,
    name: 'Ryan Cooper',
    role: 'Software Developer',
    youtubeUrl: 'https://www.youtube.com/embed/elgqxmdVms8?si=yYfzbunShGP15tde',
  },
]

const StorySlider = () => {
  const lgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let lgInstance: any
    if (lgRef.current) {
      lgInstance = lightGallery(lgRef.current, {
        selector: '[data-toggle="video"]',
        plugins: [lgVideo],
        download: false,
        youTubePlayerParams: {
          modestbranding: 1,
          showinfo: 0,
          rel: 0,
        },
      })
    }
    return () => {
      if (lgInstance) {
        lgInstance.destroy()
      }
    }
  }, [])

  return (
    <section className="relative overflow-hidden pb-25 text-white">
      <div className="container" ref={lgRef}>
        <div className="mx-auto mb-8 text-center md:mb-12.5">
          <span className="inline-block px-5 py-1.5 text-sm font-medium bg-white border border-default-200 text-default-800 rounded-full mb-2.5">A closer look</span>

          <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold tracking-normal mb-2.5">
            How people use
            <br />
            Habitline every day
          </h2>

          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-2 rounded-full text-sm md:gap-2.5">
            <span className="text-lg font-semibold text-default-800">4.5/5.0</span>

            <div className="flex items-center gap-2">
              <Icon icon="tabler:star-filled" className="size-4 text-primary-1" />
              <Icon icon="tabler:star-filled" className="size-4 text-primary-1" />
              <Icon icon="tabler:star-filled" className="size-4 text-primary-1" />
              <Icon icon="tabler:star-filled" className="size-4 text-primary-1" />
              <Icon icon="tabler:star-filled" className="size-4 text-primary-1" />
            </div>

            <span className="md:text-lg text-base text-default-600">(Trusted by 1582+ users)</span>
          </div>
        </div>

        <div className="relative">
          <div className="swiper storySwiper overflow-visible">
            <Swiper
              modules={[Navigation]}
              loop={true}
              speed={700}
              spaceBetween={15}
              slidesPerView={1}
              centeredSlides={true}
              navigation={{
                nextEl: '.story-next',
                prevEl: '.story-prev',
              }}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {storySlidesData.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="group relative overflow-hidden rounded-2xl mx-auto max-w-84">
                    <video autoPlay muted loop playsInline className="h-106 w-full object-cover" poster={slide.poster.src}>
                      <source src={slide.videoSrc} type="video/mp4" />
                    </video>

                    <div className={slide.bgGradientClass}></div>

                    <div className="absolute top-5 left-5 z-20 flex items-center gap-3">
                      <Image src={slide.avatar} alt="" className="min-w-10 min-h-10 max-w-10 max-h-10 shrink-0 rounded-full object-cover border border-white/20" />
                      <div className="text-start">
                        <h3 className="text-sm leading-none font-semibold text-white">{slide.name}</h3>
                        <p className="mt-1 text-sm text-white/70">{slide.role}</p>
                      </div>
                    </div>

                    <div className="absolute right-5 bottom-5 z-20">
                      <a href={slide.youtubeUrl} data-toggle="video" className="flex items-center gap-2 rounded-sm bg-white/20 px-2 py-1 text-default-950 backdrop-blur-md transition duration-300 hover:bg-white/30">
                        <span className="flex items-center justify-center">
                          <Icon icon="tabler:player-play-filled" className="size-3.5" />
                        </span>
                        <span className="text-sm font-medium">Play</span>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button className="story-prev absolute left-1/2 -translate-x-12 md:left-80 md:translate-x-0 lg:left-140 -bottom-18 z-20 flex size-10 items-center justify-center rounded-full bg-default-200 hover:bg-primary-2">
            <Icon icon="lucide:chevron-left" className="text-default-800 size-6" />
          </button>

          <button className="story-next absolute left-1/2 translate-x-2 md:left-auto md:right-80 md:translate-x-0 lg:right-138 -bottom-18 z-20 flex size-10 items-center justify-center rounded-full bg-default-200 hover:bg-primary-2">
            <Icon icon="lucide:chevron-right" className="text-default-800 size-6" />
          </button>

          <div className="absolute inset-y-0 -left-20 w-37.5 bg-body-bg blur-[20px] z-20 pointer-events-none md:block hidden"></div>
          <div className="absolute inset-y-0 -right-20 w-37.5 bg-body-bg blur-[30px] z-20 pointer-events-none md:block hidden"></div>
        </div>
      </div>
    </section>
  )
}

export default StorySlider
