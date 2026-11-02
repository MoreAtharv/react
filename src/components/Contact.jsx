import React from 'react'
import{motion}from 'framer-motion'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarkedAlt, FaPhone, FaTwitter } from 'react-icons/fa'
const Contact = () => {
  return (
    <motion.div
             initial={{opacity:0, y:50}}
             whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once:false,amount:0.2 }}
              id='contact'
              className='py-20 bg-dark-200'>
                <div className='container mx-auto px-6'>
                    <h2 className='text-3xl font-bold text-center mb-4'>
                        Get In
                        <span className='text-purple'>Touch</span>
                    </h2>
                    <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind 
                        or want to collaborate? let's talk !
                    </p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                    {/*contact form*/}
                    <div>
                        <from className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block text-gray-300 mb2'>
                                    Your Name</label>
                                    <input
                                    className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3
                                    outline-none'
                                    type='text'/>
                            </div>

                            <div>
                                <label htmlFor="email" className='block text-gray-300 mb2'>
                                    Email Address</label>
                                    <input
                                    className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3
                                    outline-none'
                                    type='email'/>
                            </div>


                            <div>
                                <label htmlFor="message" className='block text-gray-300 mb2'>
                                    Your Message</label>
                                    <textarea
                                    className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3
                                    outline-none'
                                    type='message'/>
                            </div>
                            <button type='submit' className='w-full px-6 py-3
                            bg-purple rounded-lg font-medium hover:bg-purple-700 transition 
                            duration-300 cursor-pointer'>Send Massage
                            </button>

                        </from>
                    </div>
                    
                    {/*contact information*/}
                    <div className='space-y-8'>
                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaMapMarkedAlt/>
                            </div>
                            <dailog>
                                <div>
                                    <h3 className='text-lg font-semibold mb-2'>Location</h3>
                                    <p className='text-gray-400'>Mharastra, Pune </p>
                                </div>
                            </dailog>
                        </div>

                   
                     
                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaEnvelope/>
                            </div>
                            <dailog>
                                <div>
                                    <h3 className='text-lg font-semibold mb-2'>Email</h3>
                                    <p className='text-gray-400'>moreatharv78@gmail.com </p>
                                </div>
                            </dailog>
                        </div>

                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaPhone/>
                            </div>
                            <dailog>
                                <div>
                                    <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                                    <p className='text-gray-400'>91-7756055783 </p>
                                </div>
                            </dailog>
                        </div>

                        <div className='pt-4'>
                            <h3 className=' text-lg font-semibold mb-4 ' >Follow Me</h3>
                            <div className='flex space-x-4'>
                                <a href='#' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white
                                transion duration-300'>
                                    <FaGithub/>
                                </a>

                                 <a href='#' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white
                                transion duration-300'>
                                    <FaLinkedin/>
                                </a>

                                 <a href='#' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white
                                transion duration-300'>
                                    <FaTwitter/>
                                </a>

                                 <a href='#' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white
                                transion duration-300'>
                                    <FaInstagram/>
                                </a>
                            </div>
                        </div>

                </div>
                </div>

                </div>

              </motion.div>
              
  )
}

export default Contact
