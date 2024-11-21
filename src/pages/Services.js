import React, { useEffect } from 'react'
import { services } from '../utils/data'
import ServiceItem from '../components/Services/ServiceItem'

const Services = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <section className='pb-40'>
            <div className='pt-32 pb-40 bg-black'>
                <h1 className='w-full max-w-max mx-auto text-primaryOrange text-[50px]'>Services</h1>
            </div>
            <div className='relative  w-full max-w-max h-[300px] mx-auto'>
                <img src="/images/servicesbanner.jpg" alt="servicesbanner" className='relative z-10 w-full h-full object-cover' />
                <span className='inline-flex absolute h-[110%] w-[30%] bg-primaryOrange -top-[5%] -left-[2%] ' ></span>
            </div>

            <div className='mt-40'>
                <h1 className='text-center text-[40px] max-w-[900px] mx-auto'>We offer an extensive range of services designed to meet the diverse needs of our clients</h1>
                <div className='grid grid-cols-2 gap-20 w-full max-w-[1000px] mt-20 mx-auto'>
                    {
                        services.map((item, index) => <ServiceItem key={index} {...item} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Services