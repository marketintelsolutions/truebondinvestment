import React from 'react'

const SectionFive = () => {
    return (
        <div className='py-40 text-black' style={{ backgroundImage: 'url(/images/abstract.jpg)', backgroundSize: 'cover' }}>
            <div className='w-full max-w-max mx-auto'>
                <h2 className='text-[38px]'>Subscribe to Our Newsletter</h2>
                <div className='mt-10 flex'>
                    <input type="text" placeholder='Your email address' className='p-4 w-[500px]' />
                    <button type='button' className='p-4 bg-primaryOrange text-white px-8'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default SectionFive