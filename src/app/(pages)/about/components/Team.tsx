import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import teamImage01 from '@/assets/images/team/team-image-01.webp'

type TeamMemberType = {
  name: string
  role: string
  image: StaticImageData | string
  twitterUrl: string
  imgClass?: string
  overlayClass?: string
  titleClass?: string
}

const teamData: TeamMemberType[] = [
  {
    name: 'Riya Patel',
    role: 'Lead Designer',
    image: teamImage01,
    twitterUrl: 'https://x.com',
    titleClass: 'text-default-900 mb-2',
  },
  {
    name: 'Ethan Walker',
    role: 'Creative Director',
    image: 'https://cdn.prod.website-files.com/692fd4f000a6f446ca91cb33/693bfbeaa0a9ea44852138b3_team-image-02.webp',
    twitterUrl: 'https://x.com',
    titleClass: 'text-gray-900',
  },
  {
    name: 'Logan Reed',
    role: 'Frontend Engineer',
    image: 'https://cdn.prod.website-files.com/692fd4f000a6f446ca91cb33/693bfbeb774ae48530ed4c5e_team-image-03.webp',
    twitterUrl: 'https://x.com',
    titleClass: 'text-gray-900',
  },
  {
    name: 'Harper Collins',
    role: 'Content & Brand Specialist',
    image: 'https://cdn.prod.website-files.com/692fd4f000a6f446ca91cb33/693bfbeb2350fda6bb729017_team-image-04.webp',
    twitterUrl: 'https://x.com',
    imgClass: 'mx-auto',
    overlayClass: 'mx-auto',
    titleClass: 'text-gray-900',
  },
  {
    name: 'Noah Brooks',
    role: 'Project Lead',
    image: 'https://cdn.prod.website-files.com/692fd4f000a6f446ca91cb33/693bfbec7839cc0d1b9aed75_team-image-05.webp',
    twitterUrl: 'https://x.com',
    titleClass: 'text-gray-900',
  },
  {
    name: 'Sophie Carter',
    role: 'Product Strategist',
    image: 'https://cdn.prod.website-files.com/692fd4f000a6f446ca91cb33/693bfbedfb99dbe8b71eca8e_team-image-06.webp',
    twitterUrl: 'https://x.com',
    titleClass: 'text-gray-900',
  },
]

const Team = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div
          className="rounded-3xl bg-white p-7.5 lg:p-25"
          style={{
            backgroundImage: 'radial-gradient(#e5e7eb 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
          }}
        >
          <div className="absolute inset-0 opacity-20"></div>

          <div className="relative z-10">
            <div className="mb-8 space-y-4 text-center md:mb-12 lg:mb-16">
              <span className="border-default-200 text-default-800 inline-block rounded-full border bg-white px-5 py-1 text-sm font-medium md:py-1.5">Our Team</span>
              <h2 className="text-default-900 text-2xl font-medium md:text-4xl lg:text-[50px]">
                The people who
                <br className="hidden md:block" />
                drive the work
              </h2>
            </div>

            <div className="mx-auto grid grid-cols-2 gap-5 md:grid-cols-3 lg:max-w-6xl lg:gap-12.5">
              {teamData.map((member, idx) => (
                <div key={idx} className="group mx-auto text-center">
                  <div className="relative mx-auto overflow-hidden">
                    {typeof member.image === 'string' ? (
                      <img src={member.image} alt={member.name} className={`mb-2.5 size-38 rounded-2xl object-cover md:size-52.5 lg:mb-5 lg:size-37.5 ${member.imgClass || ''}`} />
                    ) : (
                      <Image src={member.image} alt={member.name} className={`mb-2.5 size-38 rounded-2xl object-cover md:size-52.5 lg:mb-5 lg:size-37.5 ${member.imgClass || ''}`} />
                    )}
                    <div className={`absolute inset-0 size-37.5 rounded-2xl bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${member.overlayClass || ''}`}>
                      <Link href={member.twitterUrl} target="_blank" className="absolute inset-s-1/2 bottom-5 flex size-9 -translate-1/2 translate-y-12 items-center justify-center rounded-full bg-white transition-transform duration-500 group-hover:translate-y-0">
                        <Icon icon="tabler:brand-x-filled" className="text-default-800 size-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className={`font-bold md:text-xl ${member.titleClass || ''}`}>{member.name}</h3>
                    <p className="text-default-500 text-sm md:text-lg">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-md space-y-5 text-center md:mt-12 lg:mt-19">
              <h3 className="text-default-900 text-xl leading-snug font-medium md:text-2xl">Be part of shaping systems that keep teams aligned and productive.</h3>
              <Link href="" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-black px-3.5 text-white shadow-xl! transition-all duration-300 hover:scale-95 md:px-8.5">
                <div className="relative inline-flex flex-col items-center text-nowrap transition-transform duration-300 group-hover:-translate-y-full">
                  <div className="flex h-10.5 items-center gap-3 md:h-14">
                    <span className="font-medium">Contact us</span>
                  </div>
                  <div className="absolute top-full flex h-10.5 items-center gap-3 md:h-14">
                    <span className="font-medium">Contact us</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
