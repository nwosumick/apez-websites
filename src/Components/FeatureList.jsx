import { motion } from 'framer-motion'
import icon from '../assets/icon.png'
import icon1 from '../assets/icon (1).png'
import icon2 from '../assets/icon (2).png'


const FeatureList = () => {
  return (
    <motion.section 
    initial={{opacity:0, x:200}}
    transition={{duration:1}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true}}
    className='relative min-h-[500px] lg:px-0 px-5 -my-10'>
      <div className='text-center'>
        <p className='flex text-2xl font-bold lg:w-[500px] w-[346px] lg:ml-[700px] ml-5 md:mx-52 '>
            Features for a better experience
        </p>
      </div>
        
        <div className='flex lg:flex-row flex-col items-center lg:items-center justify-start -ml-0 lg:ml-52 mt-10'>
          <img src={icon} alt="" width={60}/>
          <h2 className='text-xl font-semibold lg:ml-6 lg:-mt-9 mt-3'>
            Video messaging
           </h2>
           <p className='text-[#3F3F46] lg:mt-16 mt-3 lg:-ml-[170px] ml-5 w-[270px]'>
             The software is very easy for you to manage.You can use as you wish.
          </p>        

          <img src={icon1} alt="" className='lg:ml-40 lg:-mt-2 mt-10' width={60} />
          <h2 className='text-xl font-semibold lg:ml-6 lg:-mt-9 mt-3'>
            Save your time
           </h2>
           <p className='text-[#3F3F46] lg:mt-16 mt-3 lg:-ml-[143px] ml-5 w-[270px]'>
             The software is very easy for you to manage.You can use as you wish.
          </p>     

          <img src={icon2} alt="" className='lg:ml-40 lg:-mt-2 mt-10' width={60} />
          <h2 className='text-xl font-semibold lg:ml-6 lg:-mt-9 mt-3'>
            Keep safe & private
           </h2>
           <p className='text-[#3F3F46] lg:mt-16 mt-3 lg:-ml-[190px] ml-5 w-[270px]'>
             The software is very easy for you to manage.You can use as you wish.
          </p>     
        </div>
    </motion.section>
  )
}

export default FeatureList