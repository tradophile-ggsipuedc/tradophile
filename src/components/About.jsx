import React from 'react'
import aboutbg from '../assets/imgs/aboutbg.png'
import cardimg1 from '../assets/aboutus/card1.jpg'
import cardimg2 from '../assets/aboutus/card2.jpg'
import cardimg3 from '../assets/aboutus/card3.jpg'
import cardimg4 from '../assets/aboutus/card4.jpg'


function About() {

    const cardData = [
        {
            image: cardimg1,
            title: 'Building Financial Literacy',
            description: 'The Finance & Investment Society, GGSIPU EDC, is committed to promoting financial literacy and investment awareness. Members gain foundational knowledge to understand market dynamics, evaluate investment opportunities, and make sound financial decisions.'
        },
        {
            image: cardimg2,
            title: 'Practical Learning & Exposure',
            description: 'The club offers a hands-on learning experience through trading simulations, finance newsletters, investment competitions, workshops, guest lectures, and case studies. Members have the chance to work on real-world scenarios, enabling a deeper understanding of finance and investments.'
        },
        {
            image: cardimg3,
            title: 'Specialized Teams for Deep Expertise',
            description: 'Tradophile is structured into various teams—Core, Stock Market, Crypto & Forex, Economics & Corporate Law—allowing members to specialize in their areas of interest. This segmented approach nurtures expertise, ensuring focused learning and comprehensive skill development.'
        },
        {
            image: cardimg4,
            title: 'Professional Networking & Growth',
            description: 'Members benefit from networking opportunities with industry professionals and alumni, fostering connections beyond the classroom. Through collaborative projects and mentorship programs, Tradophile supports career growth and professional development in the finance and investment sectors.'
        },
    ];

  return (
    <>
    <div className='p-12 pb-6 mt-8 font-custom'>
        <h1 className='text-center text-4xl md:text-6xl font-bold py-8 md:py-12 space-x-3'> 
            <span className='text-white tracking-widest'>About</span> 
            <span className='text-cyan-500 tracking-widest'>Us</span>
        </h1>
         {/* LINE   */}
         <hr className='border-t-2 border-white mx-3 md:mx-16' />
    </div>

    <section style={{ backgroundImage: `url(${aboutbg})` }} className='relative pt-10 md:pt-16 w-full h-full bg-cover bg-no-repeat bg-rounded-b-2xl bg-fixed font-custom pb-10 px-2'>
    <div class="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"></div>
    <div class="relative z-10 flex flex-col justify-center items-center space-y-2">

            <div className='mb-4'>
                <h1 className='text-white font-bold font-custom text-center text-3xl sm:text-5xl tracking-widest'>Trailer</h1>
            </div>

            <div className='h-full w-full my-10 flex justify-center'>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl shadow-xl p-3 relative w-full h-0 pb-[60%] sm:pb-[40%] sm:w-[90%] mb-6">

            <iframe className='absolute top-0 left-0 w-full h-full rounded-xl p-3'
            src="https://www.youtube.com/embed/5paIFOWQFz8?si=1rro41N5Z8gxa2JT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                
            </div>
            </div>


        <h1 class="text-white text-base md:text-2xl text-center  md:px-10 text-balance font-custom mb-8"> A vibrant community of finance enthusiasts. Learn from experts, connect with peers, and gain the confidence to achieve your financial goals.</h1>

                {/* Render cards dynamically */}
                {cardData.map((card, index) => (
                    <div key={index} className={`flex flex-col lg:flex-row items-center justify-center mb-16 md:mb-24 px-5 ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                        <div className="w-full lg:w-4/5 py-6">
                            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl shadow-xl p-6 transition-transform transform hover:scale-110 delay-100 duration-500 lg:flex lg:flex-row flex-col gap-5 mx-1 md:mx-8">
                                <img src={card.image} alt={card.title} className="md:w-full md:h-48 w-full h-40  object-cover rounded-lg border-2 border-white mb-1 lg:mb-0" />
                                <div className='flex flex-col gap-3'>
                                    <h2 className="md:text-2xl text-base font-bold text-white mt-2 lg:mt-0">{card.title}</h2>
                                    <p className="text-white text-balance md:text-base text-xs">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        
    </div>

    </section>


     
     
   </>
  )
}

export default About
