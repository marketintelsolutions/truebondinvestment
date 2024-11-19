import React, { useState } from 'react'
import { FaFacebookF, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { IoMenu } from 'react-icons/io5';
import { MdHomeWork } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

const navigationLinks = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About Us' },
    // {
    //     label: 'Properties',
    //     isDropdown: true,
    //     dropdownItems: [
    //         { path: '/all-properties', label: 'All' },
    //         { path: '/buy', label: 'Buy' },
    //         { path: '/rent', label: 'Rent' }
    //     ]
    // },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
];

const Navbar = () => {
    const [isDropdown, setIsDropdown] = useState(false)
    const [isMenu, setIsMenu] = useState(false)

    const { pathname } = useLocation()
    return (
        <div>
            <div className='flex justify-end w-full max-w-max mx-auto'>
                <div className='bg-black w-fit max-w-max px-20 flex items-center justify-end gap-4 p-4 text-primaryOrange'>
                    <span><FaFacebook /></span>
                    <span><FaTwitter /></span>
                    <span><FaInstagram /></span>
                    <span><FaLinkedin /></span>
                </div>
            </div>
            <nav className='flex relative gap-8 justify-between  w-full max-w-max mx-auto items-center bg-primaryBlue text-black bg-white'>
                <div className='flex items-center gap-8 md:w-auto w-full justify-between'>
                    <div className='flex  items-center gap-3 h-full py-10'>
                        <span><MdHomeWork size={30} /></span>
                        <h1 className='text-[19px]'>Truebond</h1>
                        <p className='text-[14px] font-light tracking-[2px]'>INVESTMENT</p>
                    </div>

                </div>
                <div className={`md:relative absolute top-[100%] left-0 md:flex-row flex-col md:w-auto w-full bg-primaryBlue md:py-0 py-10  items-center gap-5 pr-10 ${isMenu ? 'flex' : 'md:flex zr:hidden'}`}>
                    {navigationLinks.map((item, index) => {
                        if (item.isDropdown) {
                            return (
                                <div
                                    key={index}
                                    className='relative px-4'
                                    onClick={() => setIsDropdown(!isDropdown)}
                                    onMouseEnter={() => setIsDropdown(true)}
                                >
                                    {item.label}
                                    {isDropdown && (
                                        <div
                                            onMouseLeave={() => setIsDropdown(false)}
                                            className='flex flex-col gap-2 absolute top-[150%] py-2 left-0 bg-primaryBlue w-full px-4'
                                        >
                                            {item.dropdownItems.map((dropdownItem, dropIndex) => (
                                                <Link
                                                    key={dropIndex}
                                                    to={dropdownItem.path}
                                                    className={`hover:text-primaryRed ${pathname === dropdownItem.path ? 'text-primaryRed' : 'text-black'}`}
                                                >
                                                    {dropdownItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        }
                        return (
                            <Link
                                key={index}
                                to={item.path}
                                className={`px-2 ${pathname === item.path ? 'text-primaryOrange' : 'text-black'}`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
                <span className={`pl-2 pr-6 pt-6 pb-2 cursor-pointer zr:inline-flex md:hidden`} onClick={() => setIsMenu(!isMenu)}><IoMenu size={30} /></span>
            </nav>
        </div>
    )
}

export default Navbar