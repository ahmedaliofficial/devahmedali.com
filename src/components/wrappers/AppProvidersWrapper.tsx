'use client'

import { MotionConfig } from 'motion/react'
import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

const AppProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    // reducedMotion="user" drops every transform and layout animation site-wide when the
    // visitor asks the OS for less motion, leaving only the fades.
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </MotionConfig>
  )
}

export default AppProvidersWrapper
