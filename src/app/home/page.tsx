import { Metadata } from 'next'
import About from './components/About'
import Download from './components/Download'
import Faq from './components/Faq'
import Features from './components/Features'
import Feedback from './components/Feedback'
import Hero from './components/Hero'
import SmartAssist from './components/SmartAssist'
import Stats from './components/Stats'
import StorySlider from './components/StorySlider'
import Users from './components/Users'
import Work from './components/Work'

export const metadata: Metadata = {
  title: 'Home',
}

const Page = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Work />
      <Users />
      <Stats />
      <SmartAssist />
      <StorySlider />
      <Feedback />
      <Faq />
      <Download />
    </>
  )
}

export default Page
