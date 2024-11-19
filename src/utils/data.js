import { FaCoins } from 'react-icons/fa'
import { ImHammer2 } from 'react-icons/im'
import { IoMdPeople } from 'react-icons/io'
import { TbBuildingEstate, TbMoneybag } from 'react-icons/tb'

export const bannerData = [
    {
        image: 'banner',
        heading: 'your trusted partner in comprehensive insurance solutions',
        text: 'We’re dedicated to protecting what matters most to you, from your health and assets to your business and future',
        bgColor: 'bg-[#0000006c]',
        textColor: 'text-[#fff]'
    },
    {
        image: 'banner2',
        heading: 'Discover a full range of insurance products ',
        text: 'Our mission is to empower individuals and businesses with secure, accessible, and personalized insurance coverage',
        bgColor: 'bg-[rgba(244,132,52,0.25)]',
        textColor: 'text-[#000]'
    },
    {
        image: 'banner3',
        heading: 'leader in insurance solutions for over 29 years',
        text: 'Our experienced team of professionals works to tailor policies that meet the unique needs of each client',
        bgColor: 'bg-[rgba(256,256,256,0.85)]',
        textColor: 'text-[#000]'
    },
]

export const products = [
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