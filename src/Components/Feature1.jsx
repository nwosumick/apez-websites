import image from '../assets/image.png'
import { motion } from 'framer-motion'

const Feature1 = () => {
  return (
   <motion.section 
   initial={{opacity:0, x:-100}}
   transition={{duration: 1.5}}
   whileInView={{opacity: 1, x:0}}
   viewport={{once:true}}
   className='bg-gray-100 w-full min-h-[670px] mt-24 lg:-mt-64 px-4 lg:px-48 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 overflow-x-hidden'>
      <div className=' lg:mt-0 mt-5 w-full'>
          <img src={image} alt="" className='w-full max-w-full object-contain' />  
      </div>
      
      <div className='lg:mt-[150px] lg:ml-32 -mt-16 '>
      <h2 className='text-4xl font-semibold font-sans lg:w-96 lg:-mt-52  ' >
         Meet your customers, with live video chat   
      </h2>
      
      <p className='lg:mt-10 lg:w-[440px] mt-5'>High-quality live video that keeps communication clear and smooth, helping you connect with customers instantly.</p>

      <p className='lg:w-[400px] lg:mt-6 mt-5'>Get paychecks up to two days early. Get a $20 bonus when you receive qualifying direct deposits</p>
      </div>

   </motion.section>
  )
}

export default Feature1