import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { MdHomeWork } from 'react-icons/md'

const Footer = () => {
    return (
        <footer className='bg-primaryOrange py-20 text-white'>
            <div className='w-full max-w-max mx-auto flex flex-wrap gap-10 px-6 lg:px-0 justify-between'>
                <div className='h-[200px] flex flex-col justify-between'>
                    <div className='flex items-center gap-3 '>
                        <span><MdHomeWork size={30} /></span>
                        <h1 className='text-[19px]'>Truebond</h1>
                        <p className='text-[14px] font-light tracking-[2px]'>INVESTMENT</p>
                    </div>
                    <p className='text-sm font-extralight'>
                        © 2024 Truebond
                    </p>
                </div>
                <div className='flex flex-wrap gap-10 md:gap-24 lg:gap-40 w-[40%]'>
                    <div className='flex flex-col gap-5'>
                        <p className='text-base  font-roboto'>Home</p>
                        <p className='text-base  font-roboto'>About Us</p>
                        <p className='text-base  font-roboto'>Properties</p>
                        <p className='text-base  font-roboto'>Blog</p>
                        <p className='text-base  font-roboto'>Contact</p>
                    </div>
                    <div className='flex flex-col justify-between h-[200px]'>
                        <p className='text-base font-roboto'>500 Terry Francine Street
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

        </footer>
    )
}

export default Footer