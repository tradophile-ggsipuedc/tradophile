import React from 'react'
import logonobg from '../assets/logos/tradophilenobg.png'
import About from './About'
import Events from './Events'

import bgvid from '../assets/imgs/bgvid.mp4'

function Home() {
  return (
    <>
    {/* WIDE SCREEN SECTION */}
    <section 
    className='relative mt-20 py-28 w-full max-h-min bg-cover bg-no-repeat bg-fixed'>

        <div className='absolute inset-0'>
        <video src={bgvid} autoPlay loop muted className='bg-fixed h-full object-cover'/>
        </div>




       
    <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-xs h-full ">
    </div>
    <div className="relative z-10 flex flex-col justify-center items-center space-y-4 px-4 overflow-hidden">
        <h1 className="text-white text-center font-custom text-2xl sm:text-3xl md:text-4xl md:tracking-wider">
            The Finance & Investment Society of GGSIPU EDC
        </h1>
        <div className="flex flex-col justify-center items-center w-full lg:px-20">
            <img src={logonobg} alt="Tradophile Logo" className="w-60 sm:w-60 md:w-96 lg:w-96 h-auto my-6" />
              
            <h2 className="text-sm sm:text-base text-center md:text-xl font-normal text-balance text-white font-custom">
                Empowering students to navigate the complex world of finance. We provide the knowledge, skills, and hands-on experience to make informed financial decisions and build a successful future.
            </h2>
        </div>
        </div>
    </section>


   

    <About/>
    <Events/>
      
    </>
  )
}

export default Home
