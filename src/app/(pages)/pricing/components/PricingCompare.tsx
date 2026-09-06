import { Icon } from '@iconify/react'

type CompareRowType = {
  feature: string
  free: boolean
  pro: boolean
  premium: boolean
  bgClass?: string
}

const pricingCompareData: CompareRowType[] = [
  {
    feature: 'Habit tracking',
    free: true,
    pro: true,
    premium: true,
    bgClass: 'bg-default-100',
  },
  {
    feature: 'Daily reminders',
    free: true,
    pro: true,
    premium: true,
  },
  {
    feature: 'Focus & time blocks',
    free: false,
    pro: true,
    premium: true,
    bgClass: 'bg-default-100',
  },
  {
    feature: 'Custom reminders',
    free: false,
    pro: true,
    premium: true,
  },
  {
    feature: 'Priority support',
    free: false,
    pro: false,
    premium: true,
    bgClass: 'bg-default-100',
  },
]

const PricingCompare = () => {
  return (
    <section className="py-20 md:py-25 lg:py-50">
      <div className="container">
        <div>
          <table className="w-full text-start">
            <thead className="bg-default-200 mb-10!">
              <tr>
                <th className="text-default-900 rounded-s-lg px-2 py-2.5 text-start text-sm font-medium md:p-5 md:text-xl lg:text-2xl">Features</th>
                <th className="px-2 py-2.5 text-center md:p-5">
                  <div className="text-default-900 text-sm font-medium md:text-xl lg:text-2xl">Free plan</div>
                  <div className="text-default-600 mt-1 text-xs font-medium md:text-lg">$0</div>
                </th>
                <th className="px-2 py-2.5 text-center md:p-5">
                  <div className="text-default-900 text-sm font-medium md:text-xl lg:text-2xl">Pro plan</div>
                  <div className="text-default-600 mt-1 text-xs font-medium md:text-lg">$20/month</div>
                </th>
                <th className="rounded-r-2xl px-2 py-2.5 text-center md:p-5">
                  <div className="text-default-900 text-sm font-medium md:text-xl lg:text-2xl">Premium plan</div>
                  <div className="text-default-600 mt-1 text-xs font-medium md:text-lg">$150/month</div>
                </th>
              </tr>
            </thead>

            <tbody className="text-xs md:text-base lg:text-lg">
              {pricingCompareData.map((row, idx) => (
                <tr key={idx} className={row.bgClass || ''}>
                  <td className="text-default-700 rounded-s-lg p-2.5 font-medium md:px-5 md:py-4">{row.feature}</td>
                  <td className="text-center">{row.free ? <Icon icon="lucide:circle-check" className="text-primary-5/50 inline-block size-3.75 md:size-6" /> : <Icon icon="lucide:circle-x" className="text-default-400 inline-block size-3.75 md:size-6" />}</td>
                  <td className="text-center">{row.pro ? <Icon icon="lucide:circle-check" className="text-primary-5/50 inline-block size-3.75 md:size-6" /> : <Icon icon="lucide:circle-x" className="text-default-400 inline-block size-3.75 md:size-6" />}</td>
                  <td className="rounded-e-lg text-center">{row.premium ? <Icon icon="lucide:circle-check" className="text-primary-5/50 inline-block size-3.75 md:size-6" /> : <Icon icon="lucide:circle-x" className="text-default-400 inline-block size-3.75 md:size-6" />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default PricingCompare
