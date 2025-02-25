import React from 'react'
import { Link } from 'react-router-dom';

import { TbHandClick } from "react-icons/tb";
import webinar from "../assets/webinar/webinar1.jpg"

function UpcomingEvents() {
  return (
    <>
      <div className='md:p-12 p-8 bg-gradient-to-r from-sky-950 via-cyan-800 to-sky-950 font-custom'>
        <h1 className='text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white font-black tracking-widest'>Upcoming Events</h1>
      </div>

      <section className='bg-mobile-bg md:bg-wide-bg relative pt-10 md:pt-16 w-full h-full bg-cover bg-no-repeat bg-rounded-b-2xl bg-fixed font-custom pb-10'>
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
        <div className="relative z-10 flex flex-col justify-center items-center space-y-2">

          <h1 className='text-xl md:text-2xl lg:text-4xl font-bold text-center my-5 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent'> <span className='text-white'>28th Feb 2025:</span>  Finance Webinar CFA & Co-Founder of Tradomate.One</h1>
          
          
          <div className='grid grid-cols-1 md:grid-cols-2 mx-5 sm:mx-10 md:mx-24 gap-5'>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl shadow-xl p-6 transition-transform transform hover:scale-110 delay-100 duration-500 lg:flex lg:flex-row flex-col gap-5 mx-1 md:mx-8">
              <img src={webinar} alt="" className="w-full object-cover rounded-lg border-2 border-white mb-1 lg:mb-0" />
            </div>

            <div className='flex flex-col items-center mx-auto my-12'>
              <div>

                <div className='my-5 md:my-12'>
                  <h1 className='text-cyan-500 font-custom2 font-bold text-base sm:text-lg md:text-2xl text-center text-balance'>Webinar Registration: From College to Trading Desk – The Smart Way to Enter the Markets</h1>


                </div>
                <div className='relative group mb-5 md:my-10'>
                  <Link to="https://forms.gle/Y3gAj9hC6MoeQ8nXA" target='_blank'>

                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                    {/* Card */}
                    <div className="relative z-10 w-full h-16 md:h-28 bg-gradient-to-r from-cyan-950 to-sky-950 rounded-2xl shadow-md p-3 transition-transform transform group-hover:scale-100 group-hover:shadow-xl group-hover:shadow-indigo-500/50 flex justify-center items-center flex-col hover:bg-gray-800">
                      <div className='flex gap-3 items-center'>
                        <h1 className='text-white text-lg md:text-3xl font-bold'><TbHandClick /></h1>
                        <h1 className='text-center text-base md:text-2xl text-white font-bold'>  Register Now</h1>
                      </div>
                        <h1 className='text-center text-sm sm:text-lg md:text-xl text-cyan-400 font-semibold'>Secure your spot</h1>
                    </div>
                  </Link>
                </div>

                <h1 className='text-cyan-100 font-custom font-semibold text-xs sm:text-sm md:text-lg text-center text-balance mb-3'>💡 What’s in it for you? <br />
                ✔️ Learn Pro & AI-driven Trading Strategies 📈 <br />
                ✔️ Master the Stock Market in 2025 🚀 <br />
                ✔️ Explore Tradomate One - A Game-Changer Platform 🔥</h1>

                <h1 className='text-orange-500 font-custom2 font-bold text-base sm:text-lg md:text-2xl text-center text-balance'>Important: <span className='text-cyan-100 font-custom font-normal text-xs sm:text-sm md:text-base text-center text-pretty mb-3'>  To confirm your registration, sign up on Tradomate One <Link to="https://tradomate.one/" target='_blank' className='text-cyan-500 font-semibold'>https://tradomate.one/</Link>  & provide the email ID used for signup. Also, upload a screenshot of your dashboard as proof. </span></h1>


              </div>
            </div>

          </div>

        </div>

      </section>


    </>
  )
}

export default UpcomingEvents
