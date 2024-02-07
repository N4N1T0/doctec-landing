'use client'

import React from 'react'
import anime from 'animejs';

const Courtain = () => {
  const createAnimeCourtain = () => {
    anime
      .timeline({
        easing: 'easeInExpo',
      })
      .add({
        targets: '#web',
        translateY: [50, 0],
        opacity: 1,
        duration: 300,
      })
      .add({
        targets: '#marketing',
        translateY: [50, 0],
        opacity: 1,
        duration: 300,
      })
      .add({
        targets: '#branding',
        translateY: [50, 0],
        opacity: 1,
        duration: 300,
      })
      .add({
        targets: '#software',
        translateY: [50, 0],
        opacity: 1,
        duration: 300,
      })
      .add({
        targets: '#social',
        translateY: [50, 0],
        opacity: 1,
        duration: 300,
      })
      .add({
        targets: ['#web', '#marketing', '#branding', '#software, #social'],
        translateY: -70,
        opacity: 0,
        duration: 300,
        delay: 700,
      })
      .add({
        targets: '#courtin',
        scaleY: [1, 0],
        duration: 600,
      })
  }

  React.useEffect(() => {
    createAnimeCourtain()
  }, [])

  return (
    <div
      className='fixed bg-secondary h-screen inset-0 z-50 origin-bottom text-center grid content-center'
      id='courtin'>
      <div className='w-full flex-col md:flex-row flex justify-between items-center px-10 overflow-hidden'>
        <span
          className='uppercase text-background text-5xl opacity-0'
          id='web'>Web Dev</span>
        <span
          className='uppercase text-background text-5xl opacity-0'
          id='marketing'>Marketing</span>
        <span
          className='uppercase text-background text-5xl opacity-0'
          id='branding'>Branding</span>
        <span
          className='uppercase text-background text-5xl opacity-0'
          id='software'>Software</span>
        <span
          className='uppercase text-background text-5xl opacity-0'
          id='social'>Social</span>
      </div>
    </div>
  )
}

export default Courtain