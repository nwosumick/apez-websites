import contant from '../assets/contant.png'
import { motion } from 'framer-motion'
const Feature2 = () => {
  return (
    <motion.section 
     initial={{opacity: 0, x:200}}
     transition={{duration:1.5}}
     whileInView={{opacity:1, x:0}}
     viewport={{once:true}}

    
    
    className='w-full mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center min-h-[800px] md:min-h-[800px] lg:px-60 px-4 gap-10 lg:-mt-64'>
      
      {/* IMAGE — shows first on mobile */}
      <div className='order-1 lg:order-2 md:order-2 flex justify-center '>
        <div className='lg:mt-[300px] -mt-16 lg:-ml-60'>
        <img 
          src={contant} 
          alt="Live conversation feature"
          className='w-full max-w-md object-contain md:mt-10 '
        />
        </div>
      </div>

      {/* TEXT — shows below image on mobile */}
      <div className='order-2 lg:order-1 md:order-1 lg:mt-96 md:mt-2 -mt-40 mx-5 w-full bg-red-500 '>
        <h2 className='text-4xl text-[#1B1C20] font-sans font-semibold lg:w-96 md:w-96 lg:-mt-20 -mt-10 md:mt-28 md:mx-10 '>
          Start selling directly inside conversations
        </h2>

      <p className="font-sans mt-6 max-w-[380px] lg:mx-10 md:mx-10  text-gray-700 line-clamp-3 ">
  There are many variations of passages of Lorem Ipsum available, but the majority have suffered all injected humour or randomised words which don't look even slightly believable. 
</p>


        <button className='rounded-lg bg-[#FB8E0B] mt-8 text-white hover:bg-orange-300 px-5 py-3 lg:mx-10 md:mx-10'>
          Start Chatting Now
        </button>
      </div>

    </motion.section>
  )
}

export default Feature2
