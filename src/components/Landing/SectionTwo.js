import React from 'react'

const SectionTwo = () => {
    return (
        <div className='bg-[#222222] py-20'>
            <div className='w-full mx-auto max-w-max text-white flex justify-between'>
                <div className='w-full flex flex-col gap-0'>
                    <h2 className='text-base '>WELCOME TO</h2>
                    <h1 className='text-[38px]'>Truebond Investment</h1>
                    <div className='w-full max-w-[80%] mt-5'>
                        <img src="/images/map.jpg" alt="map" className='h-[250px] object-cover' />
                    </div>
                </div>
                <div className='w-full  max-w-[50%]'>
                    <p className='text-2xl text-[#cccccc]'>
                        Welcome to Truebond Global Investment, where expertise meets opportunity. We specialize in delivering diverse investment solutions designed to grow wealth,
                        optimize asset value, and create lasting financial stability.
                    </p>
                    <button className='p-4 bg-primaryOrange mt-10 text-[#0a0a08]'>Read more</button>
                    <div className='h-[200px] mt-20 relative  w-full'>
                        <div className='absolute max-h-[600px] w-full'>
                            <img src="/images/building.jpg" alt="building" className='relative z-10 object-cover' />
                            <div className='h-[150px] w-[108%] bg-primaryOrange absolute left-[-4%] bottom-[-4%]'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo