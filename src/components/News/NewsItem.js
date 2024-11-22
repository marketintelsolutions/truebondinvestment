import React from 'react'
import { Link } from 'react-router-dom'

const NewsItem = ({ id }) => {
    return (
        <Link to={`/media/${id}`} className='relative h-full'>
            <img src='/images/award.jpg' alt='award' className='w-full h-full ' />
            <div className='w-full h-full absolute top-0 left-0 bg-[#00000069] p-10  flex flex-col gap-5 justify-end'>
                <p className='text-primaryOrange bg-white px-2 py-1 w-fit text-[12px]'>11 months ago</p>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </div>
        </Link>
    )
}

export default NewsItem