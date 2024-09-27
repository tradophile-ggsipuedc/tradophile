import React from 'react'
import homebg from '../assets/imgs/6256878.jpg'
import mobilebg from '../assets/imgs/tradingbgmbilescreen.jpg'
import logonobg from '../assets/logos/tradophilenobg.png'
import About from './About'
import Events from './Events'

function Home() {
  return (
    <>
    {/* WIDE SCREEN SECTION */}
    <section 
    style={{ backgroundImage: `url(${homebg})` }} 
    className='relative mt-20 pt-28 w-full h-screen bg-cover bg-no-repeat bg-fixed hidden md:block'>
    <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>
    <div className="relative z-10 flex flex-col justify-center items-center space-y-4 px-4">
        <h1 className="text-white text-center font-custom text-2xl md:text-3xl lg:text-4xl">
            The Finance & Investment Society of GGSIPU EDC
        </h1>
        <div className="flex flex-col md:flex-row justify-evenly gap-6 items-center w-full lg:px-20">
            <div className="flex flex-col gap-4 text-center mt-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent tracking-widest font-tradophile">TRADOPHILE</h1>
                <h2 className="text-sm sm:text-base md:text-xl font-normal text-white font-custom">
                    Empowering students to navigate the complex world of finance. We provide the knowledge, skills, and hands-on experience to make informed financial decisions and build a successful future.
                </h2>
            </div>
                <img src={logonobg} alt="Tradophile Logo" className="w-48 sm:w-60 md:w-80 lg:w-96 h-auto" />
            </div>
        </div>
    </section>


    {/* MOBILE SCREEN SECTION */}
    <section style={{ backgroundImage: `url(${mobilebg})` }} className='relative mt-12 pt-28 w-full h-screen bg-cover bg-no-repeat bg-rounded-b-2xl bg-fixed md:hidden'>
    <div class="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>
    <div class="relative z-10 flex flex-col justify-center items-center space-y-2">
        <h1 class="text-white text-xl text-center font-custom">The Finance & Investment Society of GGSIPU EDC</h1>
        <div class="flex flex-col gap-4 items-center">
        <img src={logonobg} alt="" class="h-56 w-56"/>
            <div class="flex flex-col mx-10 gap-2 text-center">
                <h1 class="text-4xl font-black bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent tracking-widest font-tradophile">TRADOPHILE</h1>
                <h2 class="text-sm font-medium text-white text-balance font-custom">Empowering students to navigate the complex world of finance. We provide the knowledge, skills, and hands-on experience to make informed financial decisions and build a successful future.</h2>
            </div>
        </div>
    </div>
    </section>

    <About/>
    <Events/>
      
    </>
  )
}

export default Home
