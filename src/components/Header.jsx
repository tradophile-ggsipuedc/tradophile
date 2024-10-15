import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import tradophilelogo from '../assets/logos/tradophilelogo.jpg'
import { LuMenuSquare } from "react-icons/lu";
import { FaRegWindowClose } from "react-icons/fa";

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      // Add event listener for scroll
      window.addEventListener('scroll', handleScroll);
  
      // Clean up event listener on unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);
     // Toggle the menu visibility on button click
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

  return (
    <header>
        <nav className={`fixed z-50 bg-black top-0 left-0 w-full transition-all duration-500 ease-in-out ${scrolled ? 'h-20' : 'h-28'}  p-1 pb-0`}>
            <div className='flex justify-between items-center font-custom'>
                <NavLink to="/"><img src={tradophilelogo} alt="" className={`mx-6 flex items-center justify-center rounded-full transition-all duration-500 ease-in-out ${scrolled ? 'h-16 w-16' : 'h-24 w-24'}`} /></NavLink>

                {/* WIDE SCREEN NAV toS */}
                <div className='hidden md:flex md:space-x-12 mx-16 lg:text-xl md:text-lg text-white font-semibold px-5'>
                    <NavLink to="/" className={(e)=>{return e.isActive?"text-cyan-400 underline underline-offset-8": " hover:underline underline-offset-8"}} onClick={() => window.scrollTo(0, 0)}>Home</NavLink>

                    <NavLink to="/about" className={(e)=>{return e.isActive?"text-cyan-400 underline underline-offset-8": " hover:underline underline-offset-8"}} onClick={() => window.scrollTo(0, 0)}>About</NavLink>

                    <NavLink to="/events" className={(e)=>{return e.isActive?"text-cyan-400 underline underline-offset-8": " hover:underline underline-offset-8"}} onClick={() => window.scrollTo(0, 0)}>Events</NavLink>

                    <NavLink to="/blogs" className={(e)=>{return e.isActive?"text-cyan-400 underline underline-offset-8": " hover:underline underline-offset-8"}} onClick={() => window.scrollTo(0, 0)}>Blogs</NavLink>

                    <NavLink to="/team" className={(e)=>{return e.isActive?"text-cyan-400 underline underline-offset-8": " hover:underline underline-offset-8"}} onClick={() => window.scrollTo(0, 0)}>Team</NavLink>

                    <NavLink to="/contact" className={(e)=>{return e.isActive?"text-cyan-400 underline underline-offset-8": " hover:underline underline-offset-8"}} onClick={() => window.scrollTo(0, 0)}>Contacts</NavLink>

                </div>
                {/* MOBILE SCREEN NAV LINKS */}
                <div className="md:hidden flex items-center mx-6">
                    <button onClick={toggleMenu} className='text-white text-3xl'>
                    {menuOpen ? (
                          // Show "X" icon when the menu is open
                          <FaRegWindowClose />
                      ) : (
                          // Show hamburger icon when the menu is closed
                          <LuMenuSquare />
                      )}
                    </button>
                </div>              
            </div>

            {/* Mobile Menu Links */}
            <div className={`md:hidden bg-black text-white font-semibold text-center font-custom ${menuOpen ? 'block' : 'hidden'}`}>
                <ul className="space-y-4 p-5 pt-0 w-full">
                <li><NavLink to="/" className={(e)=>{return e.isActive?"text-cyan-400 underline underline-offset-8": "block hover:underline underline-offset-8"}}  onClick={() => {setMenuOpen(false); window.scrollTo(0, 0);}}>Home</NavLink></li>

                <li><NavLink to="/about" className={(e)=>{return e.isActive?"text-cyan-400 underline underline-offset-8": "block hover:underline underline-offset-8"}} onClick={() => {setMenuOpen(false); window.scrollTo(0, 0);}}>About</NavLink></li>

                <li><NavLink to="/events" className={(e)=>{return e.isActive?"text-cyan-400 underline underline-offset-8": "block hover:underline underline-offset-8"}} onClick={() => {setMenuOpen(false); window.scrollTo(0, 0);}}>Events</NavLink></li>

                <li><NavLink to="/blogs" className={(e)=>{return e.isActive?"text-cyan-400 underline underline-offset-8": "block hover:underline underline-offset-8"}} onClick={() => {setMenuOpen(false); window.scrollTo(0, 0);}}>Blogs</NavLink></li>

                <li><NavLink to="/team" className={(e)=>{return e.isActive?"text-cyan-400 underline underline-offset-8": "block hover:underline underline-offset-8"}} onClick={() => {setMenuOpen(false); window.scrollTo(0, 0);}}>Team</NavLink></li>

                <li><NavLink to="/contact" className={(e)=>{return e.isActive?"text-cyan-400 underline underline-offset-8": "block hover:underline underline-offset-8"}} onClick={() => {setMenuOpen(false); window.scrollTo(0, 0);}}>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
        
    </header>

  )
}

export default Header
