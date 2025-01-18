import React, { useEffect } from 'react'

const About = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <section className='bg-black text-white flex flex-col justify-center items-center pt-40'>
            <h2 className='text-[30px] uppercase tracking-[2px]'>Truebond </h2>
            <h1 className='text-[70px] tracking-[4px] text-center text-primaryOrange mt-5'>Global Investment <br /> Group</h1>
            <p className='text-[25px] text-center max-w-[800px] mt-10 font-light'>
                Truebond Global Investment is a premier investment firm committed to driving value across the financial spectrum
            </p>
            <div className='relative w-full max-w-[1200px] h-[600px] mx-auto mt-10'>
                <span className='inline-flex absolute top-0 left-0 h-full w-full bg-[#00000082]'></span>
                <img src="/images/aboutbanner.jpg" alt="about banner" className='w-full h-full object-cover' />
            </div>
            <p className='text-[45px] leading-[45px] tracking-[2.5px] max-w-[1200px] text-center mt-10'>
                We manage assets and investments tailored to meet the unique needs of institutions, and corporations.
            </p>

            <p className='mt-10 text-xl max-w-[900px] text-center font-extralight'>
                Operating with integrity and innovation, we strive to create impactful financial strategies
            </p>

            <div className='w-full relative  mt-20  ' style={{ backgroundImage: 'url(/images/earth2.jpg)', backgroundSize: 'cover' }}>
                <div className=' top-0 left-0 bg-[#000000ca] py-20 w-full h-full flex flex-col gap-28'>
                    <div className='w-full max-w-[1000px] mx-auto flex items-center justify-between gap-10 '>
                        <div className='w-full max-w-[50%] flex flex-col gap-4 text-right'>
                            <h3 className='text-[30px]'>To be a trusted leader in global investment solutions, fostering long-term growth for all stakeholders.</h3>
                            <p className='text-[20px] font-extralight'>
                                We specialize in delivering diverse investment solutions designed to grow wealth,
                                optimize asset value, and create lasting financial stability
                            </p>
                        </div>
                        <div className='border-[20px] border-primaryOrange rounded-full h-[400px] w-[400px] flex justify-center items-center'>
                            <p className='text-[40px] text-primaryOrange'>Our Vision</p>
                        </div>
                    </div>

                    <div className='w-full max-w-[1000px] mx-auto flex flex-row-reverse items-center justify-between gap-10 '>
                        <div className='w-full max-w-[50%] flex flex-col gap-4 text-left'>
                            <h3 className='text-[30px]'>Sustainable Wealth Generation</h3>
                            <p className='text-[20px] font-extralight'>Operating with integrity and innovation, we strive to create impactful financial strategies that align with our clients’ goals.</p>
                        </div>
                        <div className='border-[20px] border-primaryOrange rounded-full h-[400px] w-[400px] flex justify-center items-center'>
                            <p className='text-[40px] text-primaryOrange'>Our Mission</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-20 w-full flex flex-col gap-14 items-center bg-primaryGray'>
                <h1 className='text-[60px]'>Our Core Values</h1>
                <div className='flex gap-32'>
                    <div className='flex flex-col gap-5'>
                        <img src="/icons/integrity.png" alt="integrity" className='h-[120px] object-contain' />
                        <p className='text-2xl font-extralight tracking-[2px]'>Integrity</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <img src="/icons/customer.png" alt="integrity" className='h-[120px] object-contain' />
                        <p className='text-2xl font-extralight tracking-[2px]'>Customer-Centricity</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <img src="/icons/innovation.png" alt="integrity" className='h-[120px] object-contain' />
                        <p className='text-2xl font-extralight tracking-[2px]'>Innovation</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <img src="/icons/excellence.png" alt="integrity" className='h-[120px] object-contain' />
                        <p className='text-2xl font-extralight tracking-[2px]'>Excellence</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About