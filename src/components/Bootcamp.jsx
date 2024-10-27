import React, {useState} from 'react'
import { MdLogin } from "react-icons/md";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaRegGrinStars } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Bootcamp() {

    const [openIndex, setOpenIndex] = useState(null);

    const items = [
      { title: '⁠What topics are covered in the Bootcamp?', content: 'The bootcamp covers four domains- ⁠Stock Market, Crypto & Forex, General Economics, Taxation & Corporate Law, Entrepreneurial Finance' },
      { title: 'Who can attend and how do I register?', content: 'The bootcamp is open to all college students. Register via Unstop and attend as many sessions as you like.' },
      { title: 'What’s the session schedule?', content: 'Sessions run from 6 PM to 10 PM over five days, with each domain having its own 30 min to 1-hour session' },
      { title: 'Is there an assessment and certificate?', content: 'Yes! There’s a Menti Quiz on the last day. You’ll also receive an E-Certificate!' },
    ];
  
    const handleToggle = (index) => {
      setOpenIndex(openIndex === index ? null : index); // Toggle accordion
    };

  return (
    <>
    <div className='md:p-12 p-8 bg-gradient-to-r from-sky-950 via-cyan-800 to-sky-950 pt-24 md:pt-32 font-custom'>
        <h1 className='text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white font-black tracking-widest'>THE ANNUAL FINANCE BOOTCAMP</h1>
    </div>

    <section className='relative w-full h-full bg-mobile-bg md:bg-wide-bg bg-cover bg-no-repeat bg-rounded-b-2xl bg-fixed font-custom pb-10 px-2'>
    <div class="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-xs">
    </div>
        <div class="relative z-10 flex flex-col justify-center items-center space-y-2">

            <div className='container mx-auto p-5 sm:p-8 md:p-10 lg:p-20 font-custom2 text-balance'>
                <h1 className='text-xl md:text-2xl lg:text-4xl font-bold text-center my-5 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent'>Get Ready to elevate your finance game as Tradophile!</h1>

                <h2 className='text-white  md:text-2xl font-bold text-center'>The Finance & Investment Society of GGSIPU, EDC presents its <br /><span className='bg-gradient-to-r from-cyan-500 to-blue-500  bg-clip-text text-transparent '>Annual Finance Bootcamp</span> , an intensive program to elevate your finance game!</h2>

                <p className='text-white  md:text-2xl font-bold text-center my-5 md:my-10'>
                Through hands-on workshops and expert mentorship, you’ll gain critical financial skills that will prepare you for real-world challenges in finance, investment, and entrepreneurship.
                </p>
                
                <div className='flex justify-center items-center my-10'>
                    <NavLink to="https://shorturl.at/vevla" target='_blank' className='flex gap-2 items-center bg-gradient-to-r from-blue-800 to-indigo-900 py-4 md:py-5 px-8 md:px-12 font-bold text-xl md:text-4xl rounded-full focus:ring-4 focus:ring-cyan-500 transition ease-in-out bg-blue-500 hover:-translate-y-2 hover:scale-110 hover:bg-indigo-500 duration-300'>

                    <h1 className=''>Register</h1>
                    <span className='text-2xl md:text-4xl md:ms-1 text-white'><MdLogin /></span>
                        
                    </NavLink>

                </div>

            <div className='flex justify-center items-center flex-col md:flex-row gap-8 mx-5 my-10'>
                {/* Glowing card1 */}
                <div className="relative group">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                
                    {/* Card Interior */}
                    <div className="relative z-10 w-60 md:w-96 h-36 bg-gradient-to-r from-cyan-950 to-sky-950 rounded-2xl shadow-md p-3 transition-transform transform group-hover:scale-100 group-hover:shadow-xl group-hover:shadow-indigo-500/50 flex justify-center items-center flex-col hover:bg-gray-800 ">
                        <h1 className='text-center text-2xl md:text-3xl text-white font-semibold pt-4 pb-2'>Date</h1>
                        <h1 className='text-center text-xl md:text-3xl text-cyan-400 font-bold pb-3'>21st – 25th October 2024</h1>
                    </div>
                </div>  

                {/* Glowing card2 */}
                <div className="relative group">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                
                    {/* Card Interior */}
                    <div className="relative z-10 w-60 md:w-96 h-36 bg-gradient-to-r from-cyan-950 to-sky-950 rounded-2xl shadow-md p-3 transition-transform transform group-hover:scale-100 group-hover:shadow-xl group-hover:shadow-indigo-500/50 flex justify-center items-center flex-col hover:bg-gray-800 ">
                        <h1 className='text-center text-2xl md:text-3xl text-white font-semibold pt-4 pb-2'>Mode</h1>
                        <h1 className='text-center text-xl md:text-3xl text-cyan-400 font-bold pb-3'>Online</h1>
                    </div>
                </div>
            </div>

            <p className='text-white  md:text-2xl font-bold text-center my-5 md:my-10'>
            This <span className='bg-gradient-to-r from-cyan-500 to-blue-500  bg-clip-text text-transparent '>FREE Bootcamp</span>  allows participants to explore specialized domains, helping you turn theory into practice and equipping you with the knowledge you need for a successful career in finance
            </p>

               {/* LINE   */}
            <hr className='border-t-2 border-white mx-5 md:mx-10 py-1 ' />

            <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-center my-5 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mt-10 md:mt-32'>BENEFITS</h1>

            <div className='flex justify-center items-center flex-row gap-4 md:gap-8 mx-5 my-10'>
                {/* Glowing card1 */}
                <div className="relative group">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                
                    {/* Card Interior */}
                    <div className="relative z-10 w-40 sm:w-48 md:w-96 h-36 bg-gradient-to-r from-cyan-950 to-sky-950 rounded-2xl shadow-md p-3 transition-transform transform group-hover:scale-100 group-hover:shadow-xl group-hover:shadow-indigo-500/50 flex justify-center items-center flex-col hover:bg-gray-800 ">

                        <h1 className='text-6xl mb-2'><LiaCertificateSolid /></h1>
                        <h1 className='text-center text-xl md:text-3xl text-cyan-400 font-bold pb-3'>E-Certificates</h1>
                    </div>
                </div>  

                {/* Glowing card2 */}
                <div className="relative group">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                
                    {/* Card Interior */}
                    <div className="relative z-10 w-40 sm:w-48 md:w-96 h-36 bg-gradient-to-r from-cyan-950 to-sky-950 rounded-2xl shadow-md p-3 transition-transform transform group-hover:scale-100 group-hover:shadow-xl group-hover:shadow-indigo-500/50 flex justify-center items-center flex-col hover:bg-gray-800 ">

                        <h1 className='text-5xl my-2'><FaRegGrinStars /></h1>
                      
                        <h1 className='text-center text-xl md:text-3xl text-cyan-400 font-bold pb-3'>Other Exciting Surprises</h1>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 h-auto'>
            
            <div className='flex flex-col p-5 md:p-8 my-5 mx-5 md:mx-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl text-balance'>
                <h1 className='text-lg md:text-xl font-semibold mb-2'>⁠Enhanced Financial Literacy:</h1>
                <p className='text-sm md:text-lg font-normal'>Gain deep insights into finance and learn how to apply these skills in personal and professional settings.</p>
            </div>

            <div className='flex flex-col p-5 md:p-8 my-5 mx-5 md:mx-10 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl text-balance'>
                <h1 className='text-lg md:text-xl font-semibold mb-2'>Practical Skill Development:</h1>
                <p className='text-sm md:text-lg font-normal'>Develop hands-on abilities in financial analysis, risk management, and investment strategies.</p>
            </div>

            <div className='flex flex-col p-5 md:p-8 my-5 mx-5 md:mx-10 bg-gradient-to-l from-emerald-500 to-emerald-900 rounded-2xl text-balance'>
                <h1 className='text-lg md:text-xl font-semibold mb-2'>Networking:</h1>
                <p className='text-sm md:text-lg font-normal'>Connect with finance enthusiasts and industry professionals to expand your career opportunities.</p>
            </div>

            <div className='flex flex-col p-5 md:p-8 my-5 mx-5 md:mx-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl text-balance'>
                <h1 className='text-lg md:text-xl font-semibold mb-2'>Career Boost:</h1>
                <p className='text-sm md:text-lg font-normal'>Make your profile stand out in the finance sector by adding this bootcamp certification to your resume and LinkedIn.</p>
            </div>
            </div>

            <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-center my-5 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mt-10 md:mt-32'>Who can Attend</h1>
            <p className='text-white  md:text-2xl font-bold text-center my-5 md:my-10'>
            Open to all college students passionate about finance, investment, and entrepreneurship. This is your opportunity to gain practical insights, grow your knowledge, and add significant value to your professional journey!</p>

             {/* LINE   */}
             <hr className='border-t-2 border-white mx-5 md:mx-10 py-1' />

             <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-center my-5 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mt-10 md:mt-32'>FAQs</h1>

             <div className="w-full md:w-3/4 text-base md:text-xl mx-auto mt-10 space-y-4">
            {items.map((item, index) => (
                <div key={index} className="bg-[#131313] rounded-lg shadow-md">
                {/* Accordion Header */}
                <button
                    onClick={() => handleToggle(index)}
                    className="w-full bg-[#131313] hover:bg-[#2d2d2d] text-gray-200 px-4 py-3 text-left focus:outline-none flex justify-between items-center rounded-md"
                >
                    <span className={`${openIndex === index ? 'text-cyan-400' : ''}`}>{item.title}</span>
                    <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                    <FaChevronDown />
                    </span>
                </button>

                {/* Accordion Content */}
                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-40 bg-[#1b1b1b]' : 'max-h-0'
                    }`}
                >
                    <div className="p-4 text-sm md:text-lg">
                    {item.content}
                    </div>
                </div>
                </div>
            ))}
            </div>





            </div>
        </div>
    </section>
    </>
  )
}

export default Bootcamp
