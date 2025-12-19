import contant from '../assets/contant.png'
import { motion } from 'framer-motion'
const Feature2 = () => {
  return (
    <motion.section 
     initial={{opacity: 0, x:200}}
     transition={{duration:1.5}}
     whileInView={{opacity:1, x:0}}
     viewport={{once:true}}

    
    
    className='w-full mx-auto grid lg:grid-cols-2 grid-cols-1 items-center  min-h-[700px] lg:px-60 px-4 gap-10 lg:-mt-64'>
      
      {/* IMAGE — shows first on mobile */}
      <div className='order-1 lg:order-2 flex justify-center lg:mt-96 -mt-18 lg:-ml-60'>
        <img 
          src={contant} 
          alt="Live conversation feature"
          className='w-full max-w-md object-contain lg:-mt-0 -mt-8'
        />
      </div>

      {/* TEXT — shows below image on mobile */}
      <div className='order-2 lg:order-1 lg:mt-96 -mt-20'>
        <h2 className='text-4xl text-[#1B1C20] font-sans font-semibold lg:w-96 -mt-10 '>
          Start selling directly inside conversations
        </h2>

        <p className='font-sans mt-6 lg:w-[470px] w-[320px] text-gray-700'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered all injected humour or randomised words which don't look even slightly believable. 
        </p>

        <button className='rounded-lg bg-[#FB8E0B] mt-8 text-white hover:bg-orange-300 px-5 py-3'>
          Start Chatting Now
        </button>
      </div>

    </motion.section>
  )
}

export default Feature2
