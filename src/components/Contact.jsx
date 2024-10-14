import React from 'react'
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";


function Contact() {
  return (
    <>
    <div className='md:p-12 p-10 bg-gradient-to-r from-sky-950 via-cyan-800 to-sky-950 pt-40 md:pt-44 font-custom'>
         <h1 className='text-center text-4xl md:text-6xl text-white font-black tracking-widest'>Reach Us</h1>
     </div>
     <div className='flex justify-center items-center p-5 md:py-14 font-custom'>
       <h1 className='text-white text-lg  font-semibold md:text-4xl text-center tracking-wide'> The Finance and Investment Society of GGSIPU EDC</h1>
     </div>

    <div className='lg:px-36 md:px-16 md:py-10 p-8 font-custom'>
     <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              
              {/* Card */}
              <div className="relative z-10 w-full bg-gradient-to-r from-cyan-950 to-sky-950 rounded-2xl shadow-md p-3 px-10 transition-transform transform group-hover:scale-100 group-hover:shadow-xl group-hover:shadow-indigo-500/50 flex justify-center items-center flex-col hover:bg-gray-800">
                <h1 className='text-center text-2xl md:text-4xl text-cyan-500 font-semibold pt-2 md:pt-4 pb-1 text-nowrap'>Connect with Us</h1>
                <div className='flex gap-8 my-4 mb-8'>
                    <a href="https://www.instagram.com/tradophile.ggsipuedc/" target="_blank" rel="noopener noreferrer" className='text-white text-2xl md:text-4xl'>
                        <FaInstagram />
                    </a>
                    <a href="https://www.instagram.com/tradophile.ggsipuedc/" target="_blank" rel="noopener noreferrer" className='text-white text-2xl md:text-4xl'>
                        <FaLinkedinIn />
                    </a>
                </div>

                 {/* LINE   */}
                <div className='border-t-2 border-white w-full'></div>

                <h1 className='text-center text-2xl md:text-4xl text-cyan-500 font-semibold pt-4 pb-1'>Mail us at</h1>
                <div className='flex gap-3 items-center mt-4 mb-8'>
                <h1 className='text-white text-xl md:text-4xl'><SiGmail /> </h1>
                <h1 className='md:text-xl text-xs sm:text-base'>@tradophile.ggsipuedc@gmail.com</h1>
                </div>

                 {/* LINE   */}
                 <div className='border-t-2 border-white w-full'></div>
                 <div className='flex flex-col gap-3 mt-4 mb-8 items-center'>
                 <h1 className='text-center text-base sm:text-xl text-nowrap md:text-4xl text-cyan-500 font-semibold pt-4 pb-1'>Join our Whatsapp Community</h1>
                 <a href="https://chat.whatsapp.com/FvzxzEkB8Y822xD8mktogM" target="_blank" rel="noopener noreferrer" className='text-white text-2xl md:text-4xl'><SiWhatsapp /></a>

                </div>
                 
              </div>
            </div>
    </div>
     
   </>
  )
}

export default Contact
