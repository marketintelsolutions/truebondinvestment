import React from 'react'
import { MdOutlinePeopleAlt } from 'react-icons/md'

const SectionFour = () => {
    return (
        <div className='bg-[#222222] text-white py-20'>
            <div className='flex justify-between gap-20 w-full max-w-max mx-auto items-center'>
                <div className='w-full max-w-[50%]'>
                    <h1 className='text-[38px]'>Careers</h1>
                    <p className='text-base mt-8 font-extralight'>Join Truebond Global Investment and become part of a team dedicated to achieving excellence in the financial industry. We’re always looking for talented individuals who are passionate about finance and investment.</p>
                    <button className='mt-10 p-4 text-black bg-primaryOrange px-10'>Join us</button>
                </div>
                <div className='h-full'>
                    {/* <img src="/images/career.png" alt="career" className='h-[200px]' /> */}
                    <span><MdOutlinePeopleAlt size={300} color='#f48534' /></span>
                </div>
            </div>
        </div>
    )
}

export default SectionFour