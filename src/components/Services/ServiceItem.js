import React from 'react'

const ServiceItem = ({ image, heading, text }) => {
    return (
        <div className='shadow-[0px_2px_16px_5px_rgba(0,0,0,0.1)]'>
            <img src={`/images/${image}.jpg`} alt={heading} className='w-full object-cover' />
            <div className='p-10 text-center flex flex-col gap-5'>
                <h2 className='text-xl font-normal'>{heading}</h2>
                <p className='text-lg font-extralight'>{text}</p>
            </div>
        </div>
    )
}

export default ServiceItem