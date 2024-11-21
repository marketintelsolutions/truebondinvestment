import React, { useCallback, useEffect, useState } from 'react'
import { FaFacebookF, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaLinkedinIn, FaPhone } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { IoMenu } from 'react-icons/io5';
import { MdHomeWork } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import { navigationLinks } from '../utils/data';



const Navbar = () => {
    const [isDropdown, setIsDropdown] = useState(false);
    const [isMenu, setIsMenu] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);

    const { pathname } = useLocation();

    const controlNavbar = useCallback(() => {
        if (typeof window !== 'undefined') {
            const currentScrollY = window.scrollY;

            // Check if at top
            setIsAtTop(currentScrollY < 10);

            // Only update if scroll difference is significant
            if (Math.abs(currentScrollY - lastScrollY) > 10) {
                setShow(currentScrollY < lastScrollY || currentScrollY < 10);
                setLastScrollY(currentScrollY);
            }
        }
    }, [lastScrollY]);

    useEffect(() => {
        let timeoutId;

        const debounceScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => controlNavbar(), 10);
        };

        window.addEventListener('scroll', debounceScroll);
        controlNavbar(); // Initial check

        return () => {
            window.removeEventListener('scroll', debounceScroll);
            clearTimeout(timeoutId);
        };
    }, [controlNavbar]);

    return (
        <div className={`w-full `}>
            {isAtTop && <div className='flex justify-end w-full pr-20 '>
                <div className='w-fit max-w-max flex gap-20 bg-black py-4 px-20 text-primaryOrange'>
                    <div className='flex gap-2 items-center'>
                        <span><HiOutlineMail size={25} /></span>
                        <p>info@carrierinsurancebrokers.com</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <span><FaPhone size={23} /></span>
                        <p>09062447811</p>
                    </div>
                    <div className='bg-black w-fit max-w-max flex items-center justify-end gap-4  text-primaryOrange'>
                        <span><FaFacebook /></span>
                        <span><FaTwitter /></span>
                        <span><FaInstagram /></span>
                        <span><FaLinkedin /></span>
                    </div>
                </div>
            </div>}
            <nav className={`flex w-full justify-end fixed transition-transform duration-300 bg-white z-50 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className='flex  mr-14 relative gap-8 justify-between  w-full max-w-max  items-center bg-primaryBlue text-black bg-white'>
                    <div className='flex items-center gap-8 md:w-auto w-full justify-between'>
                        <Link to={'/'} className='flex  items-center gap-3 h-full py-10'>
                            <span><MdHomeWork size={30} /></span>
                            <h1 className='text-[19px]'>Truebond</h1>
                            <p className='text-[14px] font-light tracking-[2px]'>INVESTMENT</p>
                        </Link>

                    </div>
                    <div className={`md:relative absolute   left-0 md:flex-row flex-col md:w-auto w-full bg-primaryBlue md:py-0 py-10  items-center gap-5 pr-10 ${isMenu ? 'flex ' : 'md:flex zr:hidden '}`}>
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
                </div>
            </nav>
        </div>
    )
}

export default Navbar