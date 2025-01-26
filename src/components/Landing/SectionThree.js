import React, { useState, useRef, useEffect } from 'react';
import { products } from '../../utils/data';
import { BsChevronLeft, BsChevronRight, BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import NewsItem from '../News/NewsItem';

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
        <section className='bg-[#F1F1F1] pt-[450px] pb-40 px-6 lg:px-0 '>
            <div className='flex flex-wrap gap-10 justify-between w-full max-w-max mx-auto items-center '>
                <h1 className='text-[24px] md:text-[30px] lg:text-[38px]'>Our Products and Services</h1>
                <div className='items-center gap-4'>
                    <button
                        onClick={scrollToPrev}
                        className='zr:hidden lg:flex p-4 bg-white rounded-full hover:bg-gray-100 transition-colors'
                    >
                        <BsChevronLeft size={24} />
                    </button>
                    <button
                        onClick={scrollToNext}
                        className='zr:hidden lg:flex p-4 bg-white rounded-full hover:bg-gray-100 transition-colors'
                    >
                        <BsChevronRight size={24} />
                    </button>
                    <Link to={'/services'} className='p-4 rounded-full text-center bg-primaryOrange hover:bg-black hover:text-white  
                w-[150px] text-base hover:bg-opacity-90 transition-colors'>
                        See all business
                    </Link>
                </div>
            </div>

            <div className='relative mt-10 overflow-hidden'>
                <div
                    ref={scrollContainerRef}
                    onScroll={handleManualScroll}
                    className='flex gap-10 overflow-x-hidden overflow-y-hidden scroll-smooth px-6'
                >
                    {products.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundImage: `url(/images/${item.image}.jpg)`,
                                backgroundSize: 'cover'
                            }}
                            className={`min-w-[400px] transform transition-transform duration-500 ${index === currentIndex ? 'scale-105' : 'scale-100'
                                }`}
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

            <div className='flex flex-wrap justify-between w-full max-w-max mx-auto mt-40 items-center '>
                <h1 className='text-[38px]'>In The News</h1>
                <div className='flex items-center gap-4'>


                    <Link to={'/media'} className='p-4 rounded-full text-center bg-primaryOrange hover:bg-black hover:text-white  w-[150px] text-base hover:bg-opacity-90 transition-colors'>
                        More news
                    </Link>
                </div>
            </div>

            <div className='w-full max-w-max mx-auto mt-20'>
                <div className='flex flex-wrap lg:flex-nowrap gap-10 h-full '>
                    <div className='relative w-full h-full lg:max-w-[70%]'>
                        <img src='/images/award.jpg' alt='award' className='w-full h-full max-h-[550px] object-cover' />
                        <div className='w-full h-full absolute top-0 left-0 bg-[#00000069] p-10 pb-20 flex flex-col gap-10 justify-end'>
                            <p className='text-primaryOrange bg-white px-2 py-1 w-fit text-[12px]'>11 months ago</p>
                            <p className='text-white'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium mollitia magnam deserunt impedit. </p>
                        </div>
                    </div>
                    <div className='flex flex-wrap lg:flex-nowrap gap-[30px] flex-col w-full h-full max-h-[550px] lg:max-w-[30%]'>
                        <NewsItem />
                        <NewsItem />
                    </div>
                </div>
                <div className='zr:hidden md:flex  flex-wrap lg:flex-nowrap gap-10 mt-10'>
                    <div className='w-full flex gap-10 flex-wrap lg:flex-nowrap lg:max-w-[70%]'>
                        <NewsItem />
                        <NewsItem />
                    </div>
                    <div className='w-full lg:max-w-[30%]'>
                        <NewsItem />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default SectionThree;