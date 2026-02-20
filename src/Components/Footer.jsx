import React from 'react'
import Logo from '../assets/Logo.png'
import { FiFacebook, FiTwitter, FiInstagram, FiGithub } from "react-icons/fi";
import { motion } from 'framer-motion';
const Footer = () => {
  return (
      <motion.section 
      initial={{opacity: 0, y:200}}
      transition={{duration:1.5}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
        
      
      className='relative lg:min-h-[500px] min-h-[590px] lg:w-full max-w-full lg:px-0 px-5 my-0'>
      <div className='flex flex-col justify-center items-center text-center mx-auto 
       lg:py-20 py-7 max-w-[250px]'>
        <h1 className='text-2xl font-semibold  font-sans lg:w-[350px]'>Ready to grow your business? Start with Apex, become faster every second</h1>

        <button className='text-white rounded-md bg-[#FB8E0B] mt-10 py-3 px-3'>
            Start Chatting Now   
        </button>
        </div>

        <div className='lg:ml-80 md:ml-44 lg:mt-10 mt-10 justify-center items-center'>
          <div className=''>
          <img src={Logo} alt="" className='lg:ml-0 ml-32'/>

          <ul className='flex flex-row lg:ml-96 ml-10 lg:-mt-7 mt-5 gap-7'>
            <li><a href="#About" className='font-sans'>About</a></li>
            <li><a href="#About" className='font-sans'>Features</a></li>
            <li><a href="#About"className='font-sans'>Works</a></li>
            <li><a href="#About"className='font-sans'>Support</a></li>            
          </ul>

            <div className='flex lg:ml-[990px] ml-24 lg:-mt-7 mt-10 gap-5'>
               <FiTwitter size={20} strokeWidth={2.5} className='text-orange-500 font-bold'/>
               <FiFacebook strokeWidth={2.5} size={20} className='text-orange-500' />
               <FiInstagram strokeWidth={2.5} size={20} className='text-orange-500' />
               <FiGithub strokeWidth={2.5} size={20} className='text-orange-500' />
               </div>
            </div>
        </div>

        <div className='pb-8 lg:w-[1500px] mx-auto border-b-2 border-gray-200'>
        </div>
        <div className='font-sans lg:ml-60 md:ml-60 ml-10 lg:mt-7 mt-5'>
           <p className=' text-gray-400 '>
           © Copy 2025, All Right Reserved 
           </p>
        </div>
        <div className='flex flex-col items-start'>
             <p className='font-sans lg:ml-[1185px] ml-10 lg:-mt-6 mt-2 '>
              <span className='text-gray-400 '>Privacy Policy</span>
              <span className='ml-10'> </span>
              <span className='text-gray-400 lg:ml-5 md:ml-96 '>Terms & Conditions</span>
           </p>
        </div>

      </motion.section>
  )
}

export default Footer