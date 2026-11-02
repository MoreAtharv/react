import React from 'react'
import {motion}from'framer-motion'
import { aboutInfo, assets } from '../assets/assets'
import { div } from 'framer-motion/client'

const About = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='about'
      className='py-20 bg-dark-200'
      >
        <div className='container mx-0 px-6'>

          <h2 className='text-3xl font-bold text-center mb-4'>About
            <span className='text-purple'>Me</span>
          </h2>
          <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion</p>
         {/* image + my journey*/}
         <div className='flex flex-col md:flex-row items-center gap-12'>
          {/*image */}
          <div className='md:w-1/2 rounded-2xl overflow-hidden'>

            <motion.img
            initial={{opacity:0, y:50}}
             whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once:false,amount:0.2 }}
              className='w-full h-full object-cover'
             src={assets.image} alt="profile"/>
          </div>
          {/*text*/}
          <motion.div 
              initial={{opacity:0, y:50}}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once:false,amount:0.2 }}
              className='md:w-1/2'
              >
                <div className='rounded-2xl p-8'>
                <h3 className='text-2x1 font-semibold mb-6'>My Journey</h3>
                <p className=' text-gray-300 mb-6'>I'm an enthusiastic and passionate 
                  aspiring Full-Stack Developer with 
                  a strong foundation in HTML, CSS,
                  JavaScript, React.js, .NET, C#, and
                  SQL. As a fresher, I enjoy developing                    responsive, user-friendly, and visually
                  appealing web applications. I have a
                  keen interest in both front-end and 
                  back-end development and love turning
                  creative ideas into functional digital solutions.
                  I am continuously improving my technical skills
                  and exploring modern technologies.</p>
                <p className=' text-gray-300 mb-12' >Apart from coding, I enjoy learning new
                    technologies, solving problems, and working 
                    on innovative projects. I believe in continuous
                    learning, creativity, and teamwork.
                    I am eager to gain real-world industry 
                    experience, take on new challenges, and contribute
                    my technical knowledge to meaningful projects 
                    while growing as a professional Full-Stack
                    Developer.</p>
                    {/*cards*/}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      {
                        aboutInfo.map((data,index)=>(
                          <div key={index} className='bg-dark-300
                           rounded-2xl p-4 transition-transform
                           duration-300 hover:-translate-y-2
                           cursor-pointer'>
                            <div className='text-purple text-4xl mb-4'>
                                  <data.icon/>
                              </div>
                              <div>
                               <h3 className='text-xl font-semibold
                               mb-3'>{data.title}</h3>
                               <p className='text-gray-400'>{data.description}</p>
                              </div>
                            

                          </div>
                        ))
                      }

                    </div>
                </div>
            
          </motion.div>

         </div>
        </div>
    </motion.div>
  )
}

export default About
