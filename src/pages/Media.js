import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { navigationLinks } from '../utils/data'
import NewsItem from '../components/News/NewsItem'

const Media = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <section className='pb-40'>
            <div className='pt-32 pb-40 px-6 lg:px-0 bg-black'>
                <h1 className='w-full max-w-max mx-auto text-primaryOrange text-[50px]'>News</h1>
            </div>
            <div className='relative  w-full max-w-max h-[300px] mx-auto'>
                <img src="/images/news.jpg" alt="servicesbanner" className='relative z-10 w-full h-full object-cover' />
                <span className='inline-flex absolute h-[110%] w-[30%] bg-primaryOrange -top-[5%] -left-[2%] ' ></span>
            </div>
            <div className='w-full max-w-max mx-auto flex gap-10'>
                <div className='w-full lg:max-w-[70%] px-6 lg:px-0'>
                    <div className='w-full flex items-center gap-4 pt-10'>
                        <h2 className='text-3xl'>News</h2>
                        <span className='inline-flex w-full bg-primaryOrange h-1'></span>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 '>
                        {
                            Array.from({ length: 6 }, (_, index) => <NewsItem key={index} id={index + 1} />)
                        }

                    </div>
                </div>
                <div className='zr:hidden md:block px-6 bg-black h-full w-full max-w-[30%]'>
                    <h3 className='px-4 bg-primaryOrange text-black py-5 h-fit'>NAVIGATION</h3>
                    <div className='flex flex-col gap-5 mt-10 pb-10 px-4'>
                        {
                            navigationLinks.map((item, index) => <Link to={item.path} className='text-white border-b border-white pb-4 '>{item.label}</Link>)
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Media