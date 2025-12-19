import { motion } from 'framer-motion'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Ellipse3 from '../assets/Ellipse 3.png'
import Ellipse4 from '../assets/Ellipse 4.png'
import Ellipse5 from '../assets/Ellipse 5.png'
import { FiMinus } from 'react-icons/fi'
import { FaStar, FaRegStar } from 'react-icons/fa'
import image from '../assets/image.svg'
const Hero = () => {
  return (
    <motion.section 
    initial={{opacity: 0,y:100}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, y:0}}
    viewport={{once: true}}
    
    className='w-full pt-24 lg:px-40 md:px-20 px-6 lg:py-40 md:py-32 py-20 grid lg:grid-cols-2 grid-cols-1 gap-10'>
     
      <div className='flex flex-col justify-center items-start'>
        <h1 className='text-left text-4xl md:text-5xl font-bold leading-snug md:leading-tight lg:-mt-20 lg:mx-10 '>Start chatting with <br /> customers, anytime, <br /> anywhere with Apex</h1>
        <p className='text-gray-700 text-left lg:w-[365px] w-[270px] lg:mx-10 mx-0 mt-6'>Great software that allows you to chat from any place at any time without any interruption.</p>
        <button className='flex justify-center items-center gap-2 rounded-md bg-[#FB8E0B] text-white w-48 py-3 px-2 mt-8 lg:mx-9 '>
          
          {/* Mobile Text */}
          <span className='block md:hidden'>Get Started Now</span>

          {/*Desktop text */}
          <span className='hidden md:block'>Start Chatting Now</span>

          <FaArrowRight/>
        </button>

        <div className='flex items-center py-20 flex-wrap md:flex-nowrap'>
          <div className='flex relative'>
           <img src={Ellipse3} alt=""  className='lg:mx-10 w-16 h-16 object-contain'/>
          <img src={Ellipse4} alt=""  className='w-16 h-16  object-contain lg:-ml-16 -ml-6'/>
          <img src={Ellipse5} alt=""  className='w-16 h-16 object-contain lg:-ml-6 -ml-6'/>    
          </div>
        </div>

        <div className='flex flex-col lg:ml-52 ml-40 -mt-36 lg:-mt-36'>
          <p className='text-3xl text-[#12141D] font-semibold font-sans'>
            2,291
          </p>
          <p className='text-gray-500 py-2 font-dm'>
            Happy Customers
          </p>
        </div>

        <div className='flex justify-center items-center'>
          <FiMinus className='rotate-0 lg:rotate-90 lg:ml-[340px] -ml-80 lg:-mt-24 -mt-10' size={80} style={{strokeWidth: 1}}/>
        </div>

        <div className='flex flex-row lg:ml-[410px] ml-10 lg:-mt-[75px]'>
          <p className='text-3xl font-semibold text-[#12141D] lg:-mt-1 -mt-5 lg:ml-1 -ml-10 '>
            4.8/5
          </p>
        </div>

         <div className='flex flex-row items-center text-yellow-400 lg:mt-1 lg:ml-[410px] '>
          <FaStar size={16}/>
          <FaStar size={16}/>
          <FaStar size={16}/>
          <FaStar size={16}/>
          <FaRegStar className='text-gray-400' size={16}/>
          <p className='text-gray-500 lg:ml-3 ml-2 text-md'>
            Rating
          </p>
         </div>
         </div>
         <div className='w- -mt-3'>
           <img src={image} alt="" />
         </div>
       

    </motion.section>
  )
}

export default Hero