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

                {/* Render cards dynamically */}
            <div className="flex flex-col md:flex-row items-center justify-center my-5">
                <div className="w-5/6 ">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl shadow-xl p-4 transition-transform transform hover:scale-110 delay-100 duration-500 md:flex md:flex-row flex-col gap-5 mx-1 md:mx-8">

                        <NavLink to="/financebootcamp" onClick={() => window.scrollTo(0, 0)}>
                        <img src={bootcampmobile} alt="" className='md:hidden border-2 border-white rounded-lg' />
                        <img src={bootcampwide} alt="" className='hidden md:block border-2 border-white rounded-2xl' />
                        </NavLink>
                    </div>
                </div>
            </div>
            <NavLink to="/financebootcamp" className="text-xl md:text-4xl text-white font-bold text-center hover:text-cyan-400 mb-10">Click here for more info</NavLink>
    </div>

    </section>

      
    </>
  )
}

export default UpcomingEvents
