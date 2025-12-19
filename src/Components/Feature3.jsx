import React from 'react'
import Group330 from '../assets/Group 330.png'
import { motion } from 'framer-motion'

const Feature3 = () => {
  return (
    <motion.section 
     initial={{opacity:1, x:-200}}
     transition={{duration:1.5}}
     whileInView={{opacity: 1, x:0}}
     viewport={{once:true}}
    
    className='lg:w-full max-w-full bg-gray-100 py-10 '>
      <div className='mx-auto grid lg:grid-cols-2 grid-cols-1 items-center min-h-[700px] px-4 lg:px-48 gap-10'>
      <div className='lg:mt-0 mt-10'>
        <img src={Group330} alt="" />
      </div>

      <div className='lg:-mt-10 lg:w-0 w-[360px]'>
        <h2 className='text-4xl font-sans font-semibold lg:-ml-5 ml-5 lg:w-96'>
          Get direct orders from our customers
        </h2>

        <p className='font-sans lg:w-[500px] w-[400px] lg:-ml-5 ml-5 lg:mt-10 mt-5'>
          Create custom landing pages with Rareblocks that converts more visitors than any website. With lots of unique blocks easily build a page. There are many variations of passages of available. 
        </p> 

        <div className='flex flex-col lg:mt-16 mt-8 lg:-ml-4 ml-5'>
          <span className='text-4xl font-sans font-bold'>
            4.3K+ 
          </span>

          <div className='flex flex-col lg:-mt-12  lg:ml-28'>
            <p className='font-sans '>website's</p>
            <p className='font-sans'>Powering</p>
          </div> 
        </div>

        <div className='flex lg:flex-row flex-col  lg:ml-60 ml-72 lg:mt-12'>
             <span className='text-4xl font-sans font-bold -mt-[87px]'>
              7M+
             </span>
        </div>

<div className="flex flex-col lg:items-center lg:ml-[340px] ml-72 lg:-mt-[70px] -mt-12">
  <div className="flex space-x-1 lg:ml-10 lg:-mt-5 font-sans">
    <span>Chats</span>
    <span>in</span>
  </div>
  <div className="flex space-x-1 lg:ml-14 font-sans">
    <span>Last</span>
    <span>2022</span>
  </div>
</div>



      </div>

    </div>
    </motion.section>
  )
}

export default Feature3 