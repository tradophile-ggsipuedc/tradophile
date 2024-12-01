import React from 'react'
import { NavLink } from 'react-router-dom';
import bootcampwide from '../assets/imgs/bootcampwide.png'
import bootcampmobile from '../assets/imgs/bootcampmobile.jpg'

function UpcomingEvents() {
  return (
    <>
     <div className='md:p-12 p-8 bg-gradient-to-r from-sky-950 via-cyan-800 to-sky-950 font-custom'>
        <h1 className='text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white font-black tracking-widest'>Upcoming Events</h1>
    </div>

     <section className='bg-mobile-bg md:bg-wide-bg relative pt-10 md:pt-16 w-full h-full bg-cover bg-no-repeat bg-rounded-b-2xl bg-fixed font-custom pb-10'>
    <div class="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
    <div class="relative z-10 flex flex-col justify-center items-center space-y-2">
    
    <div className='flex flex-col md:flex-row gap-5'>
    <h1 className='text-xl md:text-2xl lg:text-4xl font-bold text-center my-5 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent'> <span className='text-white'>Coming Soon:</span>  Finance Magazine, Newsletter, Finance Blogs</h1>
    </div>

    </div>

    </section>

      
    </>
  )
}

export default UpcomingEvents
