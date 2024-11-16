import React from 'react'

const Banner = () => {
    return (
        <div>
            <div className='relative flex w-full justify-end bg-[#F1F1F1]'>
                <div className='relative w-full max-w-[90%] h-[680px]'>
                    <div className='absolute top-[0] left-[-20px] w-[50%] bg-primaryOrange h-[102%]'></div>
                    <img src="/images/banner.jpg" alt="banner" className='relative  w-full z-10 h-full object-cover' />
                </div>
            </div>
        </div>
    )
}

export default Banner