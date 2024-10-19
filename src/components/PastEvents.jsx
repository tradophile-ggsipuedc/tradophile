import React from 'react'
import orientationwide from '../assets/imgs/orientationwide.png'
import orientationmobile from '../assets/imgs/orientationportrait.png'

function PastEvents() {
  return (
    <>
     <div className='md:p-12 p-8 bg-gradient-to-r from-sky-950 via-cyan-800 to-sky-950 font-custom'>
        <h1 className='text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white font-black tracking-widest'>Past Events</h1>
    </div>
    <section className='bg-mobile-bg md:bg-wide-bg relative pt-10 md:pt-16 w-full h-full bg-cover bg-no-repeat bg-rounded-b-2xl bg-fixed font-custom'>
    <div class="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
    <div class="relative z-10 flex flex-col justify-center items-center space-y-2">

                {/* Render cards dynamically */}
            <div className="flex flex-col md:flex-row items-center justify-center mb-16 md:mb-24 mt-5">
                <div className="w-5/6 ">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl shadow-xl p-4 transition-transform transform hover:scale-110 delay-100 duration-500 md:flex md:flex-row flex-col gap-5 mx-1 md:mx-8">
                        <img src={orientationmobile} alt="" className='md:hidden border-2 border-white rounded-lg' />
                        <img src={orientationwide} alt="" className='hidden md:block border-2 border-white rounded-2xl' />    
                    </div>
                </div>
            </div>
    </div>

    </section>
      
    </>
  )
}

export default PastEvents
