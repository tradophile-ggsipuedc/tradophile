import React from 'react'
import DomainTeams from '../pages/DomainTeams'
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

// IMAGES IMPORT
import vaibhav from '../assets/members/vaibhav.jpg';
import ishank from '../assets/members/ishank.jpg';
import rachit from '../assets/members/rachit.jpg';
import roshan from '../assets/members/rosha.jpg';
import abhinav from '../assets/members/abhinav.jpg';
import mukul from '../assets/members/mukul.jpg';

function Team() {

    const teamMembers = [
        {
          name: 'Vaibhav Wason',
          post: 'Chair',
          photo: vaibhav,
          social: {
            instagram: '',
            linkedin: 'https://www.linkedin.com/in/vaibhav-wason-159743261?utm_source=share_via&utm_content=profile&utm_medium=member_android',
            x: '',
          },
        },
        {
          name: 'Ishank Rajput',
          post: 'Vice Chair',
          photo: ishank,
          social: {
            instagram: '',
            linkedin: '',
            x: '',
          },
        },
        {
          name: 'Rachit Sanjeev Soni',
          post: 'General Secretary',
          photo: rachit,
          social: {
            instagram: 'https://www.instagram.com/rchit_2208?igsh=MW14MXMwMXFieWFkZw==',
            linkedin: 'https://www.linkedin.com/in/rachit-sanjeev-soni-405994283',
            x: 'https://x.com/twitty2208',
          },
        },
        {
          name: 'Roshan Kumar',
          post: 'Web Chair',
          photo: roshan,
          social: {
            linkedin: 'https://www.linkedin.com/in/roshan-kumar-96b82237a?utm_source=share_via&utm_content=profile&utm_medium=member_android',
          },
        },
        {
          name: 'Mukul Joshi',
          post: 'Treasurer',
          photo: mukul,
          social: {
            instagram: '',
            x: '',
          },
        },
        {
          name: 'Abhinav Singh',
          post: 'Media Head',
          photo: abhinav,
          social: {
            instagram: 'https://www.instagram.com/im.abhinxv?igsh=YnJucjA1bHh5Y2t4',
            linkedin: 'https://www.linkedin.com/in/abhinav-singh-0b5ba3381?utm_source=share_via&utm_content=profile&utm_medium=member_android',
          },
        },
      ];

  return (
    <>
      <div className='md:p-12 p-10 bg-gradient-to-r from-sky-950 via-cyan-800 to-sky-950 pt-24 md:pt-32 font-custom'>
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
