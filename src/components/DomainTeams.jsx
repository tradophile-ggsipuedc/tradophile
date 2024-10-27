import React from 'react'
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

// IMAGES IMPORT
import supril from '../assets/members/supril.jpg'
import satyam from '../assets/members/satyam.jpg'
import shruti from '../assets/members/shruti.jpg'
import nitin from '../assets/members/nitin.jpg'
import vaibhav from '../assets/members/vaibhav.jpg'
import kartik from '../assets/members/kartik.jpg'
import jhade from '../assets/members/jhade.jpg'
import vivek from '../assets/members/vivek.jpg'
import sourav from '../assets/members/sourav.jpg'
import yashgupta from '../assets/members/yashgupta.jpg'

function DomainTeams() {

    const teams = [
        {
          teamName: 'Technology & Innovation',
          teamdesc: 'Manages the clubs online platforms and event systems, ensuring smooth operations. Implements innovative technologies to enhance club functionality, improving efficiency with tools like financial apps.',
          leader: {
            name: 'Supril Kumar',
            photo: supril, 
            socialLinks: {
              instagram: 'https://www.instagram.com/_supril_?igsh=aWkxN25wYXh3cnJw',
              linkedin: 'https://www.linkedin.com/in/supril-kumar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
              x: ''
            },
          },
        },
        {
          teamName: 'Stock Market',
          teamdesc: 'Monitors stock trends, organizes mock trading, and educates on investment strategies. Roles include Head of Market Analysis, Analysts, and Trading Specialists. Focuses on financial analysis and trading experiences to deepen members understanding of stock markets.',
          leader: {
            name: 'Satyam Kumar',
            photo: satyam, 
            socialLinks: {
              instagram: 'https://www.instagram.com/imsk_19?igsh=MTF2aXR6eDEwcHNqdw==',
            },
          },
        },

        {
            teamName: 'Entrepreneurship',
            teamdesc: 'Mentors aspiring entrepreneurs through workshops on business development and startups. Organizes pitching sessions and provides resources to foster innovation and equip members with tools to launch successful ventures.',
            leader: {
              name: 'Shruti Mishra',
              photo: shruti, 
              socialLinks: {
                instagram: 'https://www.instagram.com/shrll11?igsh=d3R3cDczejhmYW54&utm_source=qr',
                linkedin: 'https://linkedin.com/in/shruti-mishra-a6403023b',
                x: ''
              },
            },
          },

          {
            teamName: 'General Economics, Taxation & Corporate Law',
            teamdesc: 'Educates on economics, tax regulations, and corporate law. Ensures members understand financial policies and the legal aspects of business, focusing on corporate finance, tax strategies, and economic trends.',
            leader: {
              name: 'Nitin',
              photo: nitin, 
              socialLinks: {
                linkedin: 'https://www.linkedin.com/in/nitin-singh-70268b263',
                x: 'https://x.com/singhnitinx',
              },
            },
          },

          {
            teamName: 'Crypto & Forex',
            teamdesc: 'Provides insights into crypto and Forex markets, guiding on investment strategies and trading techniques. Key roles include Analysts and Trading Specialists. Focuses on blockchain trends, currency movements, and risk management through simulations and education.',
            leader: {
              name: 'Vaibhav Wason',
              photo: vaibhav, 
              socialLinks: {
                instagram: 'https://www.instagram.com/vaibhav_wason_03',
                linkedin: 'www.linkedin.com/in/vaibhav-wason-159743261',
                x: ''
              },
            },
          },

          {
            teamName: 'Public Relations & Outreach',
            teamdesc: "Promotes club activities through posters and digital content, managing the club's brand image. Ensures consistent messaging and fosters relationships with members and the wider community.",
            leader: {
              name: 'Kartik Raturi',
              photo: kartik, 
              socialLinks: {
                instagram: 'https://www.instagram.com/_kartikraturi_?igsh=MTN5dmE4OTVxeWQ0YQ==',
                linkedin: 'https://www.linkedin.com/in/kartikraturi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                x: 'https://x.com/_kartikraturi_?t=p5NKi2YHoqeBr63jDGYvDg&s=09'
              },
            },
          },

          {
            teamName: 'Social Media',
            teamdesc: 'Manages social media presence, promoting club activities and engaging followers. Focuses on strategic content creation to boost visibility, attract new members, and foster community involvement.',
            leader: {
              name: 'Jhade Kartik',
              photo: jhade, 
              socialLinks: {
                instagram: 'https://www.instagram.com/jhade_kartik?igsh=NTRnazFrd2ZoNm9u&utm_source=qr',
                linkedin: '',
                x: ''
              },
            },
          },
          {
            teamName: 'Design',
            teamdesc: 'Creates visual assets like logos, banners, and posters for events and social media, ensuring a consistent and professional club brand. Enhances communication with visually appealing content across platforms.',
            leader: {
              name: 'Vivek Kumar',
              photo: vivek, 
              socialLinks: {
                instagram: 'https://www.instagram.com/vivek_kumar017?igsh=c3FybXJ4dGcxc3V5',
                linkedin: 'https://www.linkedin.com/in/vivek-kumar-7a48ba253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                x: 'https://x.com/VivekKr43880084?t=tRCAfCNnQVRJKCOTyuTlrA&s=09'
              },
            },
          },
          {
            teamName: 'Content',
            teamdesc: 'Creates educational materials like articles, blogs, and presentations. Manages the newsletter, documents club events, and provides insights for members, ensuring timely and informative content distribution.',
            leader: {
              name: 'Sourav Kumar Sethy',
              photo: sourav, 
              socialLinks: {
                instagram: 'https://www.instagram.com/_h.app.y__?igsh=MWxza3EzczZjdHdpdg==',
                linkedin: 'https://www.linkedin.com/in/sourav-sethy-a70a07255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                x: ''
              },
            },
          },
          {
            teamName: 'Event Management',
            teamdesc: 'The backbone of all club events, responsible for planning, organizing, and executing with precision. Ensures smooth operations, maintains discipline, and coordinates with other teams to create impactful and memorable experiences.',
            leader: {
              name: 'Yash Gupta',
              photo: yashgupta, 
              socialLinks: {
                instagram: 'https://www.instagram.com/i_yashg/',
                linkedin: 'https://www.linkedin.com/in/iamyashg',
                x: 'https://x.com/iam_yashg',
              },
            },
          },

      ];

  return (
    <>
    {teams.map((team, index) => (
    <section className='md:px-36 py-8 px-8 font-custom border-t-2 border-white'>

        <div key={index}>
        <h1 className='text-center text-xl md:text-5xl font-bold py-6 pt-2 space-x-1'> 
            <span className='text-white'>{team.teamName} </span> 
            <span className='text-cyan-500'>Team</span>
        </h1>
        <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              
              {/* Card */}
              <div className="relative z-10 w-full bg-gradient-to-r from-cyan-950 to-sky-950 rounded-2xl shadow-md p-3 px-10 transition-transform transform group-hover:scale-100 group-hover:shadow-xl group-hover:shadow-indigo-500/50  hover:bg-gray-800">
                <div className='flex flex-col md:flex-row items-center'>
                    <div className='flex flex-col gap-2 p-4 justify-center md:flex-1'>
                        <h1 className='text-center text-xl text-cyan-400 font-semibold pb-1'>Team Lead</h1>
                        <img src={team.leader.photo} alt="" className='w-36 h-36 rounded-full border border-white mx-auto'/>
                        <h1 className='text-center text-xl md:text-2xl text-white font-semibold pt-4 pb-1'>{team.leader.name} </h1>
                        <div className='flex gap-6 justify-center'>
                        {/* Conditionally render social media links */}
                        {team.leader.socialLinks.instagram && (
                            <a href={team.leader.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className='text-white text-2xl'><FaInstagram /></a>
                        )}
                        {team.leader.socialLinks.linkedin && (
                            <a href={team.leader.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className='text-white text-2xl'><FaLinkedinIn /></a>
                        )}
                        {team.leader.socialLinks.x && (
                            <a href={team.leader.socialLinks.x} target="_blank" rel="noopener noreferrer" className='text-white text-2xl'><FaSquareXTwitter /></a>
                        )}
                        </div>
                    </div>
                    <div className='text-white text-center flex flex-col gap-2 md:flex-1 text-balance pb-3'>
                        <h1 className='text-lg md:text-2xl font-semibold'>Team Description</h1>
                        <h1 className='text-sm md:text-base'>{team.teamdesc} </h1>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </section>
    ))}
        


      
    </>
  )
}

export default DomainTeams