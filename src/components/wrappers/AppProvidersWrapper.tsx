'use client'

import type { FooterLink } from '@/components/footer/Footer'
import ScrollProgress from '@/components/motion/ScrollProgress'
import { preline } from '@/utils/preline'
import { MotionConfig } from 'motion/react'
import React, { useEffect } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

type AppProvidersWrapperProps = {
  children: React.ReactNode
  /** Resolved in the server layout (the loader reads the filesystem) and handed down to the client footer */
  expertiseLinks?: FooterLink[]
}

const AppProvidersWrapper = ({ children, expertiseLinks }: AppProvidersWrapperProps) => {
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
      <Footer expertiseLinks={expertiseLinks} />
    </MotionConfig>
  )
}

export default AppProvidersWrapper
