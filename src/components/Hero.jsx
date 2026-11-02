
import React from 'react'
import { motion } from 'framer-motion'
import {assets} from '../assets/assets'
const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='home'
      className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
    >

      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
        {/*left side*/}
        <div className='md:w-1/2 md:mb-0'>

          <h1 className='text-4xl md:text-6xl font-bold text-white'>
            Hi, I'm <span className='text-purple-500'>Atharv More</span>
          </h1>
          <h2 className='text-2xl md:text-4xl font-semibold mb-6 
          typewriters'>Full Stack Developer</h2>

          <p className='text-gray-300 text-lg mt-2'>
            I'm a passionate developer who loves building
            beautiful and interactive websites.
          </p>
          <div className='flex space-x-8 mt-5'>
            <a href="#projects" className='px-8 py-3 bg-purple-500 rounded-2xl font-medium hover:bg-purple-700 transition duration-300' >View Work</a>
            <a href="#contact" className='px-8 py-3 border border-purple rounded-2xl  font-medium hover:bg-purple-700 transition duration-300'>Contact Me</a>
          </div>
        </div>
           
            {/*right side */}
           <div className='md:w-1/2 flex justify-center'>
           <div className='relative w-64 h-64 md:w-80 md:h-80'>
            <div className='absolute inset-0 rounded-full 
            bg-gradient-to-r from-purple
             to-pink  opacity-70'>
                <motion.img
                animate={{y:[0,-20,0]}}
                transition={{
                  duration:4,
                  repeat:Infinity,
                  repeatType:"loop",
                  ease:"easeInOut"
                }} 
                className='relative rounded-full w-64 h-64 md:w-80
                md:h-80 object-cover z-10 '
                src={assets.image}alt="profile"/>
            </div>
           </div>
           </div>
      </div>
  
    </motion.div>
  )
}

export default Hero
