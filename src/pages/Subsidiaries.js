import React from 'react'
import { subsidiaries } from '../utils/data'
import SubsidiaryItem from '../components/Subsidiaries/SubsidiaryItem'

const Subsidiaries = () => {
    return (
        <section>
            <div className='pt-32 pb-40 bg-black'>
                <h1 className='w-full max-w-max mx-auto text-primaryOrange text-[50px]'>Subsidiaries</h1>
            </div>
            <div className='relative  w-full max-w-max h-[300px] mx-auto'>
                <img src="/images/subsidiarybanner.jpg" alt="subsidiarybanner" className='relative z-10 w-full h-full object-cover' />
                <span className='inline-flex absolute h-[110%] w-[30%] bg-primaryOrange -top-[5%] -left-[2%] ' ></span>
                <span className='z-20 inline-flex absolute top-0 left-0 w-full h-full bg-[#00000038]'></span>
            </div>

            <div className='w-full max-w-max mx-auto py-40 flex flex-col gap-40'>
                {
                    subsidiaries.map((item, index) => <SubsidiaryItem key={index} index={index} {...item} />)
                }
            </div>
        </section>
    )
}

export default Subsidiaries