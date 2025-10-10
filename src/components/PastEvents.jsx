import React from 'react'

import OrientationCarousel from './OrientationCarousel'
import BootcampCarousel from './BootcampCarousel'
import TradomateCarousel from './TradomateCarousel'

function PastEvents() {
  return (
    <>
     <div className='md:p-12 p-8 bg-gradient-to-r from-sky-950 via-cyan-800 to-sky-950 font-custom'>
        <h1 className='text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white font-black tracking-widest'>Past Events</h1>
    </div>
    <section className='bg-mobile-bg md:bg-wide-bg relative pt-10 md:pt-16 w-full h-full bg-cover bg-no-repeat bg-rounded-b-2xl bg-fixed font-custom'>
    <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
    <div className="relative z-10 flex flex-col justify-center items-center space-y-2 mb-5">
      
      <div className='flex flex-col md:flex-row md:space-x-8 items-center justify-center mb-5 text-2xl sm:text-3xl md:text-4xl font-bold '>
      <h1 className='font-custom2 text-cyan-500'>Annual Finance Bootcamp</h1>
      <h1 className='font-custom2 text-white'>21st - 25th Oct. 2024</h1>
      </div>
      <BootcampCarousel/>

      <div className='flex flex-col md:flex-row md:space-x-8 items-center justify-center text-2xl sm:text-3xl md:text-5xl font-bold mb-5'>
      <h1 className='font-custom2 text-cyan-500'>Club Orientation</h1>
      <h1 className='font-custom2 text-white'>27th Sept. 2024</h1>
      </div>

      <OrientationCarousel/>

      <div className='flex flex-col md:flex-row md:space-x-8 items-center justify-center mb-5 text-2xl sm:text-3xl md:text-4xl font-bold '>
      <h1 className='font-custom2 text-cyan-500'>Tradomate.One Webinar</h1>
      <h1 className='font-custom2 text-white'>28th February 2025</h1>
      </div>
      
      <TradomateCarousel/>
            
    </div>

    </section>
      
    </>
  )
}

export default PastEvents
