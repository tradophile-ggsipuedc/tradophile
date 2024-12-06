
import React from 'react'
import { NavLink } from 'react-router-dom'

function Newsletter() {
    return (
        <>
        <div className='md:p-12 p-8 bg-gradient-to-r from-sky-950 via-cyan-800 to-sky-950 pt-24 md:pt-32 font-custom'>
            <h1 className='text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white font-black tracking-widest'>Newsletter</h1>
        </div>
    
        <section className='relative w-full h-full bg-mobile-bg md:bg-wide-bg bg-cover bg-no-repeat bg-rounded-b-2xl bg-fixed font-custom pb-10 px-2'>
        <div class="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-xs">
        </div>
            <div class="relative z-10 flex flex-col justify-center items-center space-y-2">
    
                <div className='container mx-auto p-5 sm:p-8 md:p-10 lg:p-20 font-custom2 text-balance'>
                    <h1 className='text-xl md:text-2xl lg:text-4xl font-bold text-center my-5 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent '>Stay Ahead in The Finance & Investment World – Subscribe Our Exclusive Newsletter!</h1>
    
                    <h2 className='text-white  md:text-2xl font-bold text-center my-4'>Unlock fresh insights, expert articles, <br /> and the latest trends shaping the world of Finance & Investments!</h2>
                    
                <div className='flex justify-center items-center flex-col md:flex-row gap-8 mx-5 my-10'>
                    {/* Glowing card1 */}
                    <NavLink to={"https://tradophileggsipuedc.substack.com/"} target='_blank'>
                    <div className="relative group">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                    
                        {/* Card Interior */}
                        <div className="relative z-10 w-60 md:w-96 h-36 bg-gradient-to-r from-cyan-950 to-sky-950 rounded-2xl shadow-md p-3 transition-transform transform group-hover:scale-100 group-hover:shadow-xl group-hover:shadow-indigo-500/50 flex justify-center items-center flex-col hover:bg-gray-800 ">
                            <h1 className='text-center text-2xl md:text-3xl text-white font-semibold pt-4 pb-2'>Visit on </h1>
                            <h1 className='text-center text-xl md:text-3xl text-cyan-400 font-bold pb-3'>SUBSTACK</h1>
                        </div>
                    </div>  
                    </NavLink>
                </div>
            </div>
            </div>
        </section>
        </>
      )
}

export default Newsletter
