import { Metadata } from 'next'
import PricingCompare from './components/PricingCompare'
import PricingFaq from './components/PricingFaq'
import PricingPlans from './components/PricingPlans'

export const metadata: Metadata = {
  title: 'Pricing',
}

const Page = () => {
  return (
    <>
      <PricingPlans />
      <PricingCompare />
      <PricingFaq />
    </>
  )
}

export default Page
