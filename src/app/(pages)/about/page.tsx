import { Metadata } from 'next'
import AboutHero from './components/AboutHero'
import Download from './components/Download'
import Mission from './components/Mission'
import Purpose from './components/Purpose'
import Stats from './components/Stats'
import Team from './components/Team'

export const metadata: Metadata = {
  title: 'About',
}

const Page = () => {
  return (
    <>
      <AboutHero />
      <Mission />
      <Purpose />
      <Stats />
      <Team />
      <Download />
    </>
  )
}

export default Page
