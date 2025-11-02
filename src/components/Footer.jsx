import React from 'react'
import { NavLink } from 'react-router-dom';
import tradophilelogo from '../assets/logos/tradophile-logo.png'
import ipulogo from '../assets/logos/ipulogo.png'
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import Marquee from 'react-fast-marquee';

function Footer() {
  return (
    <>
    <div className='bg-black py-4 md:py-10 md:pb-2 font-custom'>
         {/* LINE   */}
     <hr className='border-t-2 border-white mx-5 md:mx-16 py-1 md:py-2' />
        <div className='flex justify-between items-center mx-4 md:mx-8'>
            <div className='flex gap-4 items-center'>
                <img src={tradophilelogo} alt="" className='h-24 md:h-36'/>
                <h1 className='text-white text-sm md:text-2xl font-bold font-tradophile hidden md:block'>TRADOPHILE</h1>
            </div>
            <div className='flex gap-4 items-center'>
                <h1 className='text-white text-sm md:text-2xl hidden md:block font-bold'>GGSIPU EDC</h1>
                <img src={ipulogo} alt="" className='w-20 h-22 md:w-32 md:h-28' />
            </div>
        </div>
        <div className='flex flex-rows-2 md:flex-col lg:flex-row lg:gap-44 xl:gap-56 justify-evenly md:justify-center gap-5 mx-4 md:mx-12 my-4'>
            <div className='flex flex-col md:flex-row items-center gap-1 md:gap-12 justify-center'>
                <h1 className='text-cyan-400 text-lg md:text-xl font-semibold'>Links</h1>
                <NavLink to="/" className="text-white text-base md:text-lg font-normal hover:underline underline-offset-8" onClick={() => window.scrollTo(0, 0)} >Home</NavLink>
                <NavLink to="/blogs" className="text-white text-base md:text-lg font-normal hover:underline underline-offset-8" onClick={() => window.scrollTo(0, 0)}>Blogs</NavLink>
                <NavLink to="/team" className="text-white text-base md:text-lg font-normal hover:underline underline-offset-8" onClick={() => window.scrollTo(0, 0)}>Team</NavLink>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-1 md:gap-12 justify-center'>
                <h1 className='text-cyan-400 text-lg md:text-xl font-semibold'>Contacts</h1>
                <a href="https://www.instagram.com/tradophile.ggsipuedc/" target="_blank" rel="noopener noreferrer" className='text-white text-2xl md:text-4xl'><FaInstagram /></a>
                <a href="https://www.instagram.com/tradophile.ggsipuedc/" target="_blank" rel="noopener noreferrer" className='text-white text-2xl md:text-4xl'><FaLinkedinIn /></a>
                <a href="https://chat.whatsapp.com/FvzxzEkB8Y822xD8mktogM" target="_blank" rel="noopener noreferrer" className='text-white text-2xl md:text-4xl'><SiWhatsapp /></a>
            </div>
        </div>
        <div className='mx-5 md:mx-32'>
        <Marquee>
            <h1 className='text-white md:text-lg text-sm text-center mx-24 md:mx-60 pb-2'>Website developed and maintained by <span className='text-cyan-400 font-medium'>Technology & Innovation Team Tradophile</span> </h1>
        </Marquee>
        </div>

        {/* LINE   */}
     <hr className='border-t-2 border-white mx-5 md:mx-16 py-1 ' />

     <div className='p-1'>
        <h1 className='text-white md:text-sm text-xs text-center'>© TRADOPHILE GGSIPU EDC 2025 All Rights Reserved</h1>
     </div>
    </div>
    </>
  )
}

export default Footer
