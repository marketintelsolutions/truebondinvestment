import React, { useState, useRef, useEffect } from 'react';
import { products } from '../../utils/data';
import { BsChevronLeft, BsChevronRight, BsPauseFill, BsPlayFill } from 'react-icons/bs';

const SectionThree = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);
    const autoScrollRef = useRef(null);

    const itemWidth = 400 + 40; // card width + gap

    useEffect(() => {
        startAutoScroll();
        return () => clearAutoScroll();
    }, [currentIndex]);

    const startAutoScroll = () => {
        clearAutoScroll();
        if (!isPaused) {
            autoScrollRef.current = setInterval(() => {
                scrollToNext();
            }, 3000); // Scroll every 3 seconds
        }
    };

    const clearAutoScroll = () => {
        if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current);
        }
    };

    const scrollToNext = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const nextIndex = (currentIndex + 1) % products.length;

            if (nextIndex === 0) {
                // Reset to start when reaching the end
                container.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            } else {
                container.scrollTo({
                    left: nextIndex * itemWidth,
                    behavior: 'smooth'
                });
            }
            setCurrentIndex(nextIndex);
        }
    };

    const scrollToPrev = () => {
        if (scrollContainerRef.current) {
            const prevIndex = currentIndex === 0 ? products.length - 1 : currentIndex - 1;
            scrollContainerRef.current.scrollTo({
                left: prevIndex * itemWidth,
                behavior: 'smooth'
            });
            setCurrentIndex(prevIndex);
        }
    };

    const handleManualScroll = () => {
        if (scrollContainerRef.current) {
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const newIndex = Math.round(scrollLeft / itemWidth);
            if (newIndex !== currentIndex) {
                setCurrentIndex(newIndex);
            }
        }
    };

    const togglePause = () => {
        setIsPaused(!isPaused);
        if (isPaused) {
            startAutoScroll();
        } else {
            clearAutoScroll();
        }
    };

    return (
        <div className='bg-[#F1F1F1] pt-[350px] pb-40'>
            <div className='flex justify-between w-full max-w-max mx-auto items-center px-6'>
                <h1 className='text-[38px]'>Our Products and Services</h1>
                <div className='flex items-center gap-4'>
                    {/* <button
                        onClick={togglePause}
                        className='p-4 bg-white rounded-full hover:bg-gray-100 transition-colors'
                    >
                        {isPaused ? <BsPlayFill size={24} /> : <BsPauseFill size={24} />}
                    </button> */}
                    <button
                        onClick={scrollToPrev}
                        className='p-4 bg-white rounded-full hover:bg-gray-100 transition-colors'
                    >
                        <BsChevronLeft size={24} />
                    </button>
                    <button
                        onClick={scrollToNext}
                        className='p-4 bg-white rounded-full hover:bg-gray-100 transition-colors'
                    >
                        <BsChevronRight size={24} />
                    </button>
                    <button className='p-4 bg-primaryOrange border border-primaryOrange hover:bg-white  w-[150px] text-base hover:bg-opacity-90 transition-colors'>
                        See all
                    </button>
                </div>
            </div>

            <div className='relative mt-10 overflow-hidden'>
                <div
                    ref={scrollContainerRef}
                    onScroll={handleManualScroll}
                    className='flex gap-10 overflow-x-hidden scroll-smooth px-6'
                >
                    {products.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundImage: `url(/images/${item.image}.jpg)`,
                                backgroundSize: 'cover'
                            }}
                            className={`min-w-[400px] transform transition-transform duration-500 `}
                        >
                            <div className='h-full w-full p-10 bg-[#0000005b] backdrop-blur-[2px] transition-all duration-300 hover:bg-[#00000080]'>
                                <span><item.icon size={65} color='white' /></span>
                                <h2 className='text-primaryOrange mt-[200px] text-[30px]'>{item.text}</h2>
                                <p className='text-base font-extralight mt-4 text-white'>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Progress indicators */}
                <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
                    {products.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                scrollContainerRef.current?.scrollTo({
                                    left: index * itemWidth,
                                    behavior: 'smooth'
                                });
                                setCurrentIndex(index);
                            }}
                            className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? 'bg-primaryOrange' : 'bg-white'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionThree;