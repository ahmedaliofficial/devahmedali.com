'use client'

import ScrollProgress from '@/components/motion/ScrollProgress'
import { preline } from '@/utils/preline'
import { MotionConfig } from 'motion/react'
import React, { useEffect } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

const AppProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    preline.init()
  }, [])

  return (
    // reducedMotion="user" drops every transform and layout animation site-wide when the
    // visitor asks the OS for less motion, leaving only the fades.
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Navbar />
      {children}
      <Footer />
    </MotionConfig>
  )
}

export default AppProvidersWrapper
