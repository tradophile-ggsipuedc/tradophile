import React from 'react'
import UpcomingEvents from './UpcomingEvents'
import PastEvents from './PastEvents'

function Events() {
  return (
    <>
    <div className='p-12 pb-6 mt-8 font-custom'>
        <h1 className='text-center text-4xl md:text-6xl font-bold py-8 md:py-12 space-x-3'> 
            <span className='text-white tracking-widest'>Our</span> 
            <span className='text-cyan-500 tracking-widest'>Events</span>
        </h1>
         {/* LINE   */}
         <hr className='border-t-2 border-white mx-3 md:mx-16' />
    </div>
     <UpcomingEvents/>
     <PastEvents/>
    </>
  )
}

export default Events
