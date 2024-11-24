import React from 'react'

const SubsidiaryItem = ({ image, heading, text, link, index }) => {
    return (
        <div className={`flex justify-between w-full gap-20 ${index % 2 === 0 && 'flex-row-reverse'}`}>
            <img src={`/images/${image}`} alt={heading} className='w-full max-w-[45%] max-h-[600px] rounded-[10px] object-cover' />
            <div className='flex flex-col gap-10'>
                <h1 className='text-[45px] font-bold'>{heading}</h1>
                <p className='text-[22px] tracking-[0px] font-inter leading-[40px] font-light'>{text}</p>
                {link && <a target='_blank' href={`https://${link}`} className='px-4 py-2 bg-primaryOrange text-white hover:bg-black text-lg w-fit rounded-[6px]'>Learn more</a>}
            </div>
        </div>
    )
}

export default SubsidiaryItem