import React from 'react'

const Media = () => {
    return (
        <section className='pb-40'>
            <div className='pt-32 pb-40 bg-black'>
                <h1 className='w-full max-w-max mx-auto text-primaryOrange text-[50px]'>News</h1>
            </div>
            <div className='relative  w-full max-w-max h-[300px] mx-auto'>
                <img src="/images/news.jpg" alt="servicesbanner" className='relative z-10 w-full h-full object-cover' />
                <span className='inline-flex absolute h-[110%] w-[30%] bg-primaryOrange -top-[5%] -left-[2%] ' ></span>
            </div>
        </section>
    )
}

export default Media