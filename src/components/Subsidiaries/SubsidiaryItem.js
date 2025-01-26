import React from 'react'

const SubsidiaryItem = ({ image, heading, text, link, index }) => {
    return (
        <div className={`flex flex-col lg:flex-row justify-between w-full gap-10 md:gap-16 lg:gap-20 ${index % 2 === 0 && 'flex-row-reverse'}`}>
            <img src={`/images/${image}`} alt={heading} className='w-full lg:max-w-[45%] max-h-[600px] rounded-[10px] object-cover' />
            <div className='flex flex-col gap-5 md:gap-10'>
                <h1 className='text-[25px] md:text-[35px] lg:text-[45px] font-bold'>{heading}</h1>
                <p className='text-[18px] md:text-[20px] lg:text-[22px] tracking-[0px] font-inter leading-[40px] font-light'>{text}</p>
                {link && <a target='_blank' href={`https://${link}`} className='px-4 py-2 bg-primaryOrange text-white hover:bg-black text-lg w-fit rounded-[6px]'>Learn more</a>}
            </div>
        </div>
    )
}

export default SubsidiaryItem