import React from 'react'
import DomainTeams from '../components/DomainTeams'
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

// IMAGES IMPORT
import vanshsethi from '../assets/members/vanshsethi.jpg';
import yashrajvaid from '../assets/members/yashvaid.jpg';
import shashwat from '../assets/members/shashwat.jpg';
import dhairya from '../assets/members/dhairya.jpg';
import kartikay from '../assets/members/kartikay.jpg';

function Team() {

    const teamMembers = [
        {
          name: 'Vansh Sethi',
          post: 'Chair',
          photo: vanshsethi,
          social: {
            instagram: 'https://www.instagram.com/vansh6803?igsh=MWE3YjVjZmY4anBq',
            linkedin: '',
            x: 'https://x.com/VanshSethitwts',
          },
        },
        {
          name: 'Yash Raj Vaid',
          post: 'Vice Chair',
          photo: yashrajvaid,
          social: {
            instagram: 'https://www.instagram.com/yashrajvaid7?igsh=ZGc4Y3pvcDdwYzZr',
            linkedin: 'https://www.linkedin.com/in/yash-raj-vaid-291a47212',
            x: 'https://x.com/YashRajVaid2?t=650Pwj82a3u8xfEIlPDm1A&s=09',
          },
        },
        {
          name: 'Shashwat Tiwari',
          post: 'General Secretary',
          photo: shashwat,
          social: {
            instagram: 'https://www.instagram.com/shashwat._.14/',
            linkedin: 'https://www.linkedin.com/in/shashwat-tiwari-868b42204/',
            x: 'https://x.com/ShashwatT51185',
          },
        },
        {
          name: 'Dhairya Gupta',
          post: 'Joint Secretary',
          photo: dhairya,
          social: {
            instagram: "https://www.instagram.com/not-found",
          },
        },
        {
          name: 'Kartikay',
          post: 'Treasurer',
          photo: kartikay,
          social: {
            instagram: "https://www.linkedin.com/in/kartikay-s-4b2aba25b/",
            x: 'https://x.com/KartikAloneWolf',
          },
        },
      ];

  return (
    <>
      <div className='md:p-12 p-10 bg-gradient-to-r from-sky-950 via-cyan-800 to-sky-950 pt-40 md:pt-44 font-custom'>
         <h1 className='text-center text-4xl md:text-6xl text-white font-black tracking-widest'>Our Team</h1>
     </div>
      <div className='bg-black px-2 pb-20 font-custom'>
          <h1 className='text-center text-4xl md:text-5xl font-bold py-8 md:py-12 space-x-4'> 
            <span className='text-white'>Office</span> 
            <span className='text-cyan-500'>Bearers</span>
          </h1>
          <div className='flex gap-8 flex-wrap justify-center items-center'>
          {teamMembers.map((member, index) => (
            <div key={index} className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              
              {/* Card */}
              <div className="relative z-10 w-60 h-80 bg-gradient-to-r from-cyan-950 to-sky-950 rounded-2xl shadow-md p-3 transition-transform transform group-hover:scale-100 group-hover:shadow-xl group-hover:shadow-indigo-500/50 flex justify-center items-center flex-col hover:bg-gray-800">
                <img src={member.photo} alt={member.name} className='h-36 w-36 rounded-full border border-white' />
                <h1 className='text-center text-2xl text-white font-normal pt-4 pb-1'>{member.name}</h1>
                <h1 className='text-center text-xl text-cyan-400 font-semibold pb-3'>{member.post}</h1>
                <div className='flex gap-6'>
                {/* Conditionally render social media links */}
                {member.social.instagram && (
                    <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className='text-white text-2xl'>
                    <FaInstagram />
                    </a>
                )}
                {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className='text-white text-2xl'>
                    <FaLinkedinIn />
                    </a>
                )}
                {member.social.x && (
                    <a href={member.social.x} target="_blank" rel="noopener noreferrer" className='text-white text-2xl'>
                    <FaSquareXTwitter />
                    </a>
                )}
                </div>
              </div>
            </div>
          ))}
        </div>
        </div> 
        
        <DomainTeams/>

        

    </>
  )
}

export default Team;
