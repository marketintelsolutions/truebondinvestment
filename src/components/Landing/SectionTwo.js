import React from 'react'
import { Link } from 'react-router-dom'
import Counts from './Counts'

const SectionTwo = () => {
    return (
        <section className='bg-[#222222] relative z-20 py-20'>
            <div className='w-full mx-auto max-w-max text-white flex justify-between'>
                <div className='w-full flex flex-col gap-0'>
                    <h2 className='text-base '>WELCOME TO</h2>
                    <h1 className='text-[38px]'>Truebond Investment</h1>
                    <div className='w-full max-w-[80%] mt-5'>
                        <img src="/images/map.jpg" alt="map" className='h-[250px] object-cover' />
                    </div>
                    <div className=' h-full flex flex-col gap-0 translate-y-[90%]'>
                        {/* <h2 className='text-[150px] text-primaryOrange tracking-[8px]'>20+</h2> */}
                        <Counts />
                        <p className='text-black uppercase text-lg'>Years in business</p>
                    </div>
                </div>
                <div className='w-full  max-w-[50%]'>
                    <p className='text-2xl text-[#cccccc]'>
                        Welcome to Truebond Global Investment, where expertise meets opportunity. We <span className='text-primaryOrange'>specialize</span > in delivering diverse investment solutions designed to grow wealth,
                        optimize asset value, and create lasting financial stability.
                    </p>
                    <Link to='/about-us' className='py-4 px-8 bg-primaryOrange rounded-full flex w-fit mt-10 text-[#0a0a08]  hover:bg-black hover:text-white'>Read more</Link>
                    <div className='h-[200px] mt-20 relative  w-full'>
                        <div className='absolute  max-h-[600px] w-full'>
                            <img src="/images/building.jpg" alt="building" className='relative z-10 h-[600px] w-full object-cover' />
                            <div className='h-[150px] w-[108%] bg-primaryOrange absolute left-[-4%] bottom-[-4%]'></div>
                            <div className='absolute top-0 left-0 w-full h-full bg-[#0000002d] z-10'></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionTwo