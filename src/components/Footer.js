import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { MdHomeWork } from 'react-icons/md'

const Footer = () => {
    return (
        <footer className='w-full  '>
            <div className='bg-black relative z-10 pt-10 pb-20 max-w-[70%] text-white'>
                <div className=' ml-32 max-w-max mx-auto flex flex-col flex-wrap gap-10 px-6 lg:px-0 justify-between'>
                    <div className='h-[100px] flex  justify-end pr-20'>
                        <div className='flex items-center gap-3 '>
                            <span className='text-primaryOrange'><MdHomeWork size={40} /></span>
                            <h1 className='text-[29px]'>Truebond</h1>
                            <p className='text-[24px] font-light tracking-[2px]'>INVESTMENT</p>
                        </div>

                    </div>
                    <h2 className='max-w-[350px] text-4xl tracking-[2px] text-primaryOrange'>Integrity, Customer Focus, Innovation, and Excellence</h2>
                    <div className='flex flex-row mt-20  gap-10 md:gap-24 lg:gap-40 w-[40%]'>
                        <div className='flex flex-col gap-5 text-[#ffffffcb] font-extralight'>
                            <h3 className='min-w-max font-light text-white'>Useful Links</h3>
                            <p className='text-base  font-roboto'>Home</p>
                            <p className='text-base  font-roboto'>About Us</p>
                            <p className='text-base  font-roboto'>Properties</p>
                            <p className='text-base  font-roboto'>Blog</p>
                            <p className='text-base  font-roboto'>Contact</p>
                        </div>
                        <div className='flex flex-col justify-between h-[200px] text-[#ffffffcb] font-extralight'>
                            <h3 className='min-w-max font-light text-white'>Contact Us</h3>
                            <p className='text-base font-roboto mt-5'>500 Terry Francine Street
                                <br />
                                San Francisco, CA 94158
                                <br />
                                info@mysite.com</p>
                            <div className='flex items-center gap-4 h-full pt-6 pb-2  border-b-4 border-transparent '>
                                <span><FaFacebookF size={16} /></span>
                                <span><FaTwitter size={16} /></span>
                                <span><FaInstagram size={16} /></span>
                                <span><FaLinkedinIn size={16} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer