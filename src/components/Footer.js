import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { MdHomeWork } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='w-full  '>
            <div className='bg-black relative z-10 pt-10 pb-10  text-white'>
                <div className='w-full  max-w-max mx-auto flex flex-col flex-wrap gap-10 px-6 lg:px-0 justify-center'>
                    <div className='h-[100px] flex  justify-end '>
                        <div className='flex items-center gap-3 '>
                            <h1 className='text-[29px] text-primaryOrange font-semibold'>Truebond</h1>
                            <p className='text-[29px] font-light tracking-[2px]'>INVESTMENT</p>
                        </div>

                    </div>
                    <h2 className='max-w-[450px] text-4xl tracking-[2px] text-primaryOrange'>Integrity, Customer Focus, Innovation, and Excellence</h2>
                    <div className='flex flex-row mt-20 justify-between w-full  gap-10 md:gap-24 lg:gap-40 '>
                        <div className='flex flex-col gap-5 text-[#ffffffcb] font-extralight'>
                            <h3 className='min-w-max font-light text-white'>Useful Links</h3>
                            <Link to={'/'} className='text-base  font-roboto'>Home</Link>
                            <Link to={'/about-us'} className='text-base  font-roboto'>About Us</Link>
                            <Link to={'/services'} className='text-base  font-roboto'>Services</Link>
                            <Link to={'/subsidiaries'} className='text-base  font-roboto'>Subsidiaries</Link>
                            <Link to={'/contact'} className='text-base  font-roboto'>Contact</Link>
                        </div>
                        <div className='flex flex-col gap-5 text-[#ffffffcb] font-extralight'>
                            <h3 className='min-w-max font-light text-white'>Services</h3>
                            <Link to={'/services'} className='text-base  font-roboto'>Investment & trading</Link>
                            <Link to={'/services'} className='text-base  font-roboto'>Contracting & Construction</Link>
                            <Link to={'/services'} className='text-base  font-roboto'>Manufacturing & Retail</Link>
                            <Link to={'/services'} className='text-base  font-roboto'>Oil, Gas & Minerals</Link>
                            <Link to={'/services'} className='text-base  font-roboto'>Logistics & Transportation</Link>
                        </div>
                        <div className='flex flex-col gap-5 text-[#ffffffcb] font-extralight'>
                            <h3 className='min-w-max font-light text-white'>Subsidiaries</h3>
                            <Link to={'/subsidiaries'} className='text-base  font-roboto'>Carrier Insurance Brokers</Link>
                            <Link to={'/subsidiaries'} className='text-base  font-roboto'>TrueBond Properties and Leisure</Link>
                            <Link to={'/subsidiaries'} className='text-base  font-roboto'>TrueBond Private Equity</Link>
                            <Link to={'/subsidiaries'} className='text-base  font-roboto'>Chris & Christene Limited</Link>
                            <Link to={'/subsidiaries'} className='text-base  font-roboto'>Chris and Christene Foundation</Link>
                            <Link to={'/subsidiaries'} className='text-base  font-roboto'>Book House Limited</Link>
                        </div>
                        <div className='flex flex-col justify-between h-[200px] text-[#ffffffcb] font-extralight'>
                            <h3 className='min-w-max font-light text-white'>Contact Us</h3>
                            <p className='text-base font-roboto mt-5'>PLot 22, Akiogun New Market Road,
                                <br />
                                Oniru Victoria Island, Lagos
                                <br /><br />
                                hello@truebondglobalinvestments.com</p>
                            <div className='flex items-center gap-4 h-full pt-6 pb-2  border-b-4 border-transparent '>
                                <span><FaFacebookF size={16} /></span>
                                <span><FaTwitter size={16} /></span>
                                <span><FaInstagram size={16} /></span>
                                <span><FaLinkedinIn size={16} /></span>
                            </div>
                        </div>
                    </div>
                    <div className='pt-4 border-t'>
                        <p>&copy;. {new Date().getFullYear()} Truebond Global Investment Group. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer