import React from 'react'
import { FaCoins } from 'react-icons/fa'
import { ImHammer2 } from 'react-icons/im'
import { IoMdPeople } from 'react-icons/io'
import { TbBuildingEstate, TbMoneybag } from 'react-icons/tb'

const products = [
    {
        image: 'wealth',
        text: 'Wealth Management',
        icon: FaCoins,
        desc: 'Personalized solutions to grow and protect individual and family wealth.'
    },
    {
        image: 'asset',
        text: 'Asset Management',
        icon: TbMoneybag,
        desc: 'Comprehensive asset solutions for institutions and private clients.'
    },
    {
        image: 'estate',
        text: 'Real Estate Investment',
        icon: TbBuildingEstate,
        desc: 'Investment opportunities in prime real estate for diversified portfolios.'
    },
    {
        image: 'equity',
        text: 'Private Equity',
        icon: ImHammer2,
        desc: 'Access to high-potential, private-market investment opportunities.'
    },
    {
        image: 'advisory',
        text: 'Advisory Services',
        icon: IoMdPeople,
        desc: 'In-depth market insights and consulting for informed decision-making.'
    },
]

const SectionThree = () => {
    return (
        <div className='bg-[#F1F1F1] pt-[350px] pb-40'>
            <div className='flex justify-between w-full max-w-max mx-auto items-center'>
                <h1 className='text-[38px]'>Our Products and Services</h1>
                <button className='p-4 bg-primaryOrange w-[150px] text-base'>See all</button>
            </div>
            <div className='relative w-full overflow-x-scroll'>
                <div className='flex px-6 w-full gap-10  mt-10'>
                    {
                        products.map((item, index) => {
                            const { image, text, icon: Icon, desc } = item
                            return <div key={index} style={{ backgroundImage: `url(/images/${image}.jpg)`, backgroundSize: 'cover' }} className='min-w-[400px] '>
                                <div className='h-full w-full p-10 bg-[#0000005b]'>
                                    <span><Icon size={65} color='white' /></span>
                                    <h2 className='text-primaryOrange mt-[200px] text-[30px]'>{text}</h2>
                                    <p className='text-base font-extralight mt-4 text-white'>{desc}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SectionThree