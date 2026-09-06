import { Metadata } from 'next'
import ContactFaq from './components/ContactFaq'
import ContactForm from './components/ContactForm'
import ReachUs from './components/ReachUs'

export const metadata: Metadata = {
  title: 'Contact',
}

const Page = () => {
  return (
    <>
      <ContactForm />
      <ReachUs />
      <ContactFaq />
    </>
  )
}

export default Page
