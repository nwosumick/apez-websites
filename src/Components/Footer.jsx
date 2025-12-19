import React from 'react'
import Logo from '../assets/Logo.png'
import { FiFacebook, FiTwitter, FiInstagram, FiGithub } from "react-icons/fi";
import { motion } from 'framer-motion';
const Footer = () => {
  return (
      <motion.section 
      initial={{opacity: 0, y:200}}
      transition={{duration:1}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
        
      
      className='relative min-h-[500px] lg:w-full max-w-full lg:px-0 px-5 my-0'>
      <div className='flex flex-col justify-center items-center text-center mx-auto 
       lg:py-20 max-w-[250px]'>
        <h1 className='text-2xl font-semibold  font-sans w-[350px]'>Ready to grow your business? Start with Apex, become faster every second</h1>

        <button className='text-white rounded-md bg-[#FB8E0B] mt-10 py-3 px-3'>
            Start Chatting Now   
        </button>
        </div>

        <div className='lg:ml-80 lg:mt-10 justify-center items-center '>
          <img src={Logo} alt="" />

          <ul className='flex flex-row lg:ml-96 lg:-mt-7 gap-10'>
            <li><a href="#About" className='font-sans'>About</a></li>
            <li><a href="#About" className='font-sans'>Features</a></li>
            <li><a href="#About"className='font-sans'>Works</a></li>
            <li><a href="#About"className='font-sans'>Support</a></li>            
          </ul>

            <div className='flex lg:ml-[990px] lg:-mt-7 gap-5'>
               <FiTwitter size={20} strokeWidth={2.5} className='text-orange-500 font-bold'/>
               <FiFacebook strokeWidth={2.5} size={20} className='text-orange-500' />
               <FiInstagram strokeWidth={2.5} size={20} className='text-orange-500' />
               <FiGithub strokeWidth={2.5} size={20} className='text-orange-500' />
            </div>
        </div>

        <div className='pb-5 w-[1200px] mx-auto border-b-2 border-gray-200'>
        </div>
        <div className='font-sans lg:ml-60 lg:mt-7'>
           <p className=' text-gray-400 '>
           © Copy 2025, All Right Reserved 
           </p>
        </div>
        <div className='flex flex-col items-start'>
             <p className='font-sans lg:ml-[1185px] lg:-mt-6'>
              <span className='text-gray-400 '>Privacy Policy</span>
              <span className='text-gray-400 lg:ml-5 '>Terms & Conditions</span>
           </p>
        </div>

      </motion.section>
  )
}

export default Footer