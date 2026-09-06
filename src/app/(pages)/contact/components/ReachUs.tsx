import { Icon } from '@iconify/react'

type ReachUsCardType = {
  icon: string
  iconBgClass: string
  title: string
  email: string
}

const reachUsData: ReachUsCardType[] = [
  {
    icon: 'lucide:headset',
    iconBgClass: 'bg-primary-3',
    title: 'Support Email',
    email: 'support@habitline.app',
  },
  {
    icon: 'lucide:handshake',
    iconBgClass: 'bg-primary-8',
    title: 'Business / Partnerships',
    email: 'hello@habitline.app',
  },
]

const ReachUs = () => {
  return (
    <section className="py-20 md:py-25 lg:py-50">
      <div className="container">
        <div className="mb-8 text-center md:mb-12.5">
          <h3 className="text-4xl font-medium lg:text-5xl">Reach us directly</h3>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7.5 lg:w-3xl">
          {reachUsData.map((item, idx) => (
            <div key={idx} className="group flex flex-col justify-end gap-y-3.5 rounded-2xl bg-white p-3.5 text-center shadow-lg md:gap-y-10 md:p-5 md:text-start lg:gap-y-12.5 lg:p-7.5">
              <div className={`mx-auto flex size-10 items-center justify-center rounded-full md:mx-0 md:size-12.5 ${item.iconBgClass}`}>
                <Icon icon={item.icon} className="text-xl text-white" />
              </div>
              <div>
                <h4 className="text-default-900 mb-2.5 text-xl font-medium md:mb-5 md:text-2xl">{item.title}</h4>
                <a href={`mailto:${item.email}`} className="hover:text-default-800 decoration-2 underline-offset-4 hover:underline">
                  {item.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReachUs
