import React, { useEffect } from 'react'
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5'
import { LuPhone } from 'react-icons/lu'

const Contact = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <section>
            <div className='pt-32 pb-40 bg-black'>
                <h1 className='w-full max-w-max mx-auto text-primaryOrange text-[50px]'>Contact</h1>
            </div>
            <div className='h-[400px] relative'>
                <img src="/images/contact.jpg" alt="contactbanner" className='w-full h-full object-cover' />
                <span className='inline-flex absolute top-0 left-0 bg-[#00000094] w-full h-full'></span>
            </div>

            <div className='py-40 w-full max-w-[1100px] mx-auto flex  justify-between'>
                <div className='flex flex-col gap-4 shadow-[0px_0px_15px_5px_rgba(0,0,0,0.1)] p-10 h-fit rounded-[10px]'>
                    <h1 className='text-[40px]'>Contact Channels</h1>
                    <p className='text-[20px] font-light'>We would love to hear from you</p>
                    <p className='text-[17px] font-extralight mt-12 flex gap-4'>
                        <span className='text-primaryOrange'><IoLocationOutline size={50} /></span>
                        <span>
                            PLot 22, Akiogun New Market Road,
                            <br />  Oniru Victoria Island, Lagos
                        </span>
                    </p>
                    <p className='text-[17px] font-extralight mt-8 flex gap-4 items-center'>
                        <span className='text-primaryOrange'><IoMailOutline size={50} /></span>
                        <span className='text-black'>hello@truebondglobalinvestments.com</span>
                    </p>
                    <p className='text-[17px] font-extralight mt-8 flex gap-4'>
                        <span className='text-primaryOrange'><LuPhone size={50} /></span>
                        <span className='text-black'> 09062447811,  07074521822, 09062979783,<br /> 09131038886, 09062979787</span>
                    </p>
                </div>

                <form className='w-full max-w-[50%] flex flex-col gap-10 p-10 rounded-[10px] bg-white shadow-[0px_0px_15px_5px_rgba(0,0,0,0.1)]'>
                    <h2>Send us a mail</h2>
                    <div className='w-full flex flex-col gap-4'>
                        <label htmlFor="name" className='text-[15px] font-semibold text-gray-400'>Your name</label>
                        <input type="text" id='name' className='focus:outline-none  focus:border-black pb-4 rounded-full px-4 py-5 bg-[rgba(194,196,200,0.48)]  text-base w-full' />
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        <label htmlFor="email" className='text-[15px] font-semibold text-gray-400'>Email Address</label>
                        <input type="email" id='email' className='focus:outline-none focus:border-black pb-4 rounded-full px-4 py-5 bg-[rgba(194,196,200,0.48)]  text-sm w-full' />
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        <label htmlFor="phone" className='text-[15px] font-semibold text-gray-400'>Phone number</label>
                        <input type="number" id='phone' className='focus:outline-none focus:border-black pb-4 rounded-full px-4 py-5 bg-[rgba(194,196,200,0.48)] text-sm w-full' />
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        <label htmlFor="subject" className='text-[15px] font-semibold text-gray-400'>Subject</label>
                        <input type="text" id='subject' className='focus:outline-none focus:border-black pb-4 rounded-full px-4 py-5 bg-[rgba(194,196,200,0.48)] text-sm w-full' />
                    </div>
                    <div className='w-full flex flex-col gap-4 mt-0'>
                        <label htmlFor="message" className='text-[15px] font-semibold text-gray-400'>Your Message</label>
                        <textarea type="text" id='message' className='h-[120px] resize-none focus:outline-none focus:border-black pb-4 rounded-[10px] px-4 py-5 bg-[rgba(194,196,200,0.48)]  text-sm w-full' />
                    </div>
                    <button type='button' className='w-full py-4 mt-10 rounded-full bg-primaryOrange  text-white hover:bg-black hover:text-white '>Send Message</button>
                </form>
            </div>

            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7489422254266!2d3.452132680637935!3d6.426292876971863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf508f117bcad%3A0xb4bb382611a28ced!2s22%20Akiogun%20Rd%2C%20Maroko%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1732228086997!5m2!1sen!2sng" width="600" height="450" style={{ border: 0, loading: "lazy", width: '100%' }}></iframe>
            </div>
        </section>
    )
}

export default Contact