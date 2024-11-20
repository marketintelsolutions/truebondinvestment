import React, { useEffect, useState } from 'react'
import { bannerData } from '../../utils/data'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

const Banner = () => {
    const [currIndex, setCurrIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false);


    useEffect(() => {
        const timer = setInterval(() => {
            handleNext()
        }, 4000)

        return () => clearInterval(timer)
    }, [])

    const handleNext = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrIndex((prev) => (prev + 1) % bannerData.length);
            setTimeout(() => setIsAnimating(false), 500);
        }
    };

    const handlePrev = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrIndex((prev) => (prev - 1 + bannerData.length) % bannerData.length);
            setTimeout(() => setIsAnimating(false), 500);
        }
    };
    return (
        <div>
            <div className='relative flex w-full justify-end bg-[#F1F1F1]'>
                <div className='relative w-full max-w-[90%] h-[680px]' >
                    <div className='absolute top-[0] left-[-20px] w-[50%] bg-primaryOrange h-[102%]'></div>
                    <img src={`/images/${bannerData[currIndex].image}.jpg`} alt="banner" className={`relative  w-full z-10 h-full object-cover ${isAnimating ? 'opacity-40' : 'opacity-100 transition duration-[1s] ease-out'}`} />
                    <div className='absolute h-full z-20 top-0 left-0 w-full flex items-end'>
                        <div className={`${bannerData[currIndex].bgColor} ${bannerData[currIndex].textColor} h-[350px] w-full  p-10 flex flex-col gap-5`}>
                            <h1 className={`uppercase text-[32px] max-w-[600px] ${isAnimating ? 'translate-y-[45px]' : 'translate-y-0 transition duration-[0.5s] ease-out'}`
                            }>{bannerData[currIndex].heading}
                            </h1>
                            <span className={`inline-flex h-1 bg-white rounded-full w-[400px] 
                                ${isAnimating ? 'translate-y-[50px]' : 'translate-y-0 transition duration-[0.5s] ease-out'}`
                            }></span>
                            <p className={`w-full max-w-[700px] text-xl 
                                ${isAnimating ? 'translate-y-[80px]' : 'translate-y-0 transition duration-[0.5s] ease-out '}`
                            }>
                                {bannerData[currIndex].text}

                            </p>
                            <button className={`px-8 py-3 bg-primaryOrange w-fit ${isAnimating ? 'translate-y-[100px]' : 'translate-y-0 transition duration-[0.5s] ease-out '} border border-primaryOrange hover:bg-white`}>Read More</button>
                        </div>
                    </div>
                    <div className='w-full max-w-[75%] absolute bottom-0 left-0 flex justify-end gap-2  text-white z-30'>
                        <button className='p-5 bg-primaryOrange ' onClick={handlePrev}><MdArrowBackIosNew /></button>
                        <button className='p-5 bg-primaryOrange ' onClick={handleNext}> <MdArrowForwardIos /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner