import React from 'react'
import photo from '../assets/photo.png'
import fhoto from '../assets/fhoto.png'
import { motion } from 'framer-motion'

const Feature4 = () => {
  return (
  <motion.section 
   initial={{ opacity: 0, y: 100 }}
   whileInView={{ opacity: 1, y: 0 }}
   transition={{ type: "spring", stiffness: 20 }}

  
  className='relative min-h-[600px] bg-[#FB8E0B] lg:w-full max-w-full lg:px-0 px-5 my-0'>
      <div className=' flex flex-col justify-center items-start text-left mx-auto 
       lg:py-20 max-w-[250px]'>
          <h1 className='text-3xl font-sans font-semibold text-white leading-tight'>
             Our blessed client said about us 😍
          </h1>  
          <div className='bg-white rounded-xl p-6 shadow-md text-center relative w-[450px] lg:-mx-96 h-[180px] lg:mt-16 '>
             <h2 className='text-[#FB8E0B] font-semibold mb-2'>
                "Incredible Experience"
             </h2>
             <p className="text-gray-600 text-sm leading-relaxed">
        We had an incredible experience working with Mixland and were impressed
        they made such a big difference in only three weeks. Our team is so grateful
        for the wonderful improvements they made and their ability to get familiar
        with the concept so quickly.
      </p>
         <div className="w-4 h-4 bg-white absolute bottom-[-8px] left-1/2 -translate-x-1/2 rotate-45"></div>

         
     <div className="flex flex-row items-center lg:mt-8 lg:mx-32 gap-3">
  <img src={photo} className="w-12 h-12" />

  <div className="flex flex-col items-start ">
    <p className="text-white font-bold py-2">
      <span className="text-white">Wade </span>
      <span className="text-white">Warren</span>
    </p>

    <p className="text-sm text-white flex gap-2">
      <span>CEO,</span>
      <span>ABC</span>
      <span>Corporation</span>
    </p>
  </div>
</div>

<div className='bg-white rounded-xl p-6 shadow-md text-center relative lg:w-full w-[580px] mx-auto h-[180px] lg:mx-[600px] lg:-mt-[262px]'>
           <h2 className="text-orange-600 font-semibold mb-2">
              “Dependable, Responsive, Professional”
         </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                Fermin Apps has collaborated with Mixland team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond.
            </p>
            <div className="w-4 h-4 bg-white absolute bottom-[-8px] left-1/2 -translate-x-1/2 rotate-45"></div>

            <div className="flex flex-row items-center lg:mt-8 lg:mx-32 gap-3">
               <img src={fhoto} className="w-12 h-12" />   
            <div className="flex flex-col items-start ">
               <p className="text-white font-bold py-2">
      <span className="text-white mx-1">Esther</span>
      <span className="text-white">Howard</span>
    </p>

    <p className="text-sm text-white flex gap-2">
      <span>CEO,</span>
      <span>ABC</span>
      <span>Corporation</span>
    </p>   

      </div>    
      </div>
       </div>

      




          </div>
      </div>

  </motion.section>
  )
}

export default Feature4