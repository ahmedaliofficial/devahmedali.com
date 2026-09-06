import { Metadata } from 'next'
import Faq from './components/Faq'

export const metadata: Metadata = {
  title: 'Faqs',
}

const Page = () => {
  return (
    <>
      <Faq />
    </>
  )
}

export default Page
