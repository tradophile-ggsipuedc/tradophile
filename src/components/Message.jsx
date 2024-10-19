import React from 'react'
import Marquee from 'react-fast-marquee';
import { NavLink } from 'react-router-dom';

function Message() {
  return (
    <>
    <div className='flex p-3 md:p-5 bg-black rounded-b-2xl mx-0 px-5 md:px-16 font-custom2'>
        <span className='text-lg md:text-xl font-semibold text-cyan-400 mx-1 md:mx-2'>Message:</span>
        <Marquee>
            <NavLink to="/financebootcamp" className='text-white font-medium text-base md:text-lg md:mx-32 mx-20' onClick={() => window.scrollTo(0, 0)}>
                Register on the Annual Finance Bootcamp starting from 21st October 2024
            </NavLink>
        </Marquee>
    </div>
      
    </>
  )
}

export default Message
