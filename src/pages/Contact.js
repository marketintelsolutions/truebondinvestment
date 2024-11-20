import React from 'react'

const Contact = () => {
    return (
        <section>
            <div className='py-20 bg-black'>
                <h1 className='w-full max-w-max mx-auto text-primaryOrange text-[50px]'>Contact</h1>
            </div>
            <div className='h-[400px] relative'>
                <img src="/images/contactbanner.jpg" alt="contactbanner" className='w-full h-full object-cover' />
                <span className='inline-flex absolute top-0 left-0 bg-[#00000094] w-full h-full'></span>
            </div>

            <div className='py-40 w-full max-w-[1100px] mx-auto flex  justify-between'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-[40px]'>Contact Channels</h1>
                    <p className='text-[20px] font-light'>We would love to hear from you</p>
                    <p className='text-[17px] font-extralight mt-12'> Lot 22, Akiogun New Market Road,
                        <br />  Oniru Victoria Island, Lagos</p>
                    <p className='text-[17px] font-extralight mt-8'>Email: <span className='text-primaryOrange'> info@carrierinsurancebrokers.com</span></p>
                </div>

                <div className='w-full max-w-[45%]'>
                    <h2>Send us a mail</h2>
                    <div className='w-full mt-10 flex gap-6'>
                        <div className='w-full flex flex-col gap-4'>
                            <label htmlFor="name" className='text-[12px] font-thin text-gray-400'>Your name</label>
                            <input type="text" id='name' className='focus:outline-none focus:border-black pb-4 border-b border-[#9ca3afb0] text-sm w-full' placeholder='Full name' />
                        </div>
                        <div className='w-full flex flex-col gap-4'>
                            <label htmlFor="email" className='text-[12px] font-thin text-gray-400'>Email Address</label>
                            <input type="email" id='email' className='focus:outline-none focus:border-black pb-4 border-b border-[#9ca3afb0] text-sm w-full' placeholder='Email Address' />
                        </div>
                    </div>
                    <div className='w-full mt-10 flex gap-6'>
                        <div className='w-full flex flex-col gap-4'>
                            <label htmlFor="phone" className='text-[12px] font-thin text-gray-400'>Phone number</label>
                            <input type="number" id='phone' className='focus:outline-none focus:border-black pb-4 border-b border-[#9ca3afb0] text-sm w-full' placeholder='Phone number' />
                        </div>
                        <div className='w-full flex flex-col gap-4'>
                            <label htmlFor="subject" className='text-[12px] font-thin text-gray-400'>Subject</label>
                            <input type="text" id='subject' className='focus:outline-none focus:border-black pb-4 border-b border-[#9ca3afb0] text-sm w-full' placeholder='Subject' />
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-4 mt-10'>
                        <label htmlFor="message" className='text-[12px] font-thin text-gray-400'>Your Message</label>
                        <textarea type="text" id='message' className='h-[120px] resize-none focus:outline-none focus:border-black pb-4 border-b border-[#9ca3afb0] text-sm w-full' placeholder='Enter your message' />
                    </div>
                    <button className='w-full py-4 mt-10 rounded-[4px] bg-primaryOrange border border-primaryOrange text-white hover:bg-white hover:text-primaryOrange'>Send Message</button>
                </div>
            </div>

            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5291.949439359551!2d3.413942828719971!3d6.429309943435859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8acdf16fd5d5%3A0x94a92add6d024f09!2sLSDPC%20Flats%2C%20Victoria%20Island%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1731140942595!5m2!1sen!2sng" height="450" style={{ border: 0, loading: "lazy", width: '100%' }}></iframe>
            </div>
        </section>
    )
}

export default Contact