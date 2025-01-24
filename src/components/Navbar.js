import React, { useCallback, useEffect, useState } from 'react'
import { FaFacebookF, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaLinkedinIn, FaPhone, FaAngleDown } from 'react-icons/fa'
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
            {isAtTop && <div className='flex justify-end w-full max-w-max mx-auto '>
                <div className='w-full max-w-[813px] flex gap-20 bg-black py-4 px-14 text-primaryOrange slanted-edge'>
                    <div className='flex gap-2 items-center'>
                        <span><HiOutlineMail size={25} /></span>
                        <p>hello@truebondglobalinvestments.com</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <span><FaPhone size={23} /></span>
                        <p>09062447811</p>
                    </div>
                    <div className='bg-black w-fit max-w-max flex items-center justify-end gap-4  text-primaryOrange'>
                        <a target='_blank' href='https://x.com/TruebondGroup'><FaTwitter /></a>
                        <a target='_blank' href='https://www.instagram.com/truebondglobal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' ><FaInstagram /></a>
                        <a target='_blank' href='https://www.linkedin.com/in/truebond-globalinvestment-13904a347'><FaLinkedin /></a>
                    </div>
                </div>
            </div>}
            <nav className={`flex w-full justify-center bg-white py-4 fixed transition-transform duration-300 z-50 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className='flex relative gap-8 justify-between  w-full max-w-max  items-center bg-primaryBlue text-black '>
                    <div className='flex items-center gap-8 md:w-auto w-full justify-between'>
                        <Link to={'/'} className='flex  items-center gap-3 h-full py-0'>
                            <img src="/images/logo.svg" alt="logo" className='max-w-[250px]' />
                        </Link>
                    </div>
                    <div
                        className={`md:relative absolute bg-black px-6 justify-between text-white  left-0 md:flex-row flex-col max-w-[837px] w-full bg-primaryBlue md:py-4 py-10  items-center gap-14 pr-10 ${isMenu ? 'flex ' : 'md:flex zr:hidden '}`}
                        onMouseLeave={() => setIsDropdown(false)}
                    >
                        {navigationLinks.map((item, index) => {
                            if (item.isDropdown) {
                                return (
                                    <div
                                        key={index}
                                        className='relative px-4 font-semibold flex items-center gap-2 w-[140px]'
                                        onClick={() => setIsDropdown(!isDropdown)}
                                        onMouseEnter={() => setIsDropdown(true)}
                                    >
                                        {item.label} <span><FaAngleDown /></span>
                                        {isDropdown && (
                                            <div
                                                onMouseLeave={() => setIsDropdown(false)}
                                                className='flex flex-col gap-4 absolute z-50 top-[120%] py-4 left-0 bg-black w-full px-4'
                                            >
                                                {item.dropdownItems.map((dropdownItem, dropIndex) => (
                                                    <Link
                                                        key={dropIndex}
                                                        to={dropdownItem.path}
                                                        className={`hover:text-primaryOrange   ${pathname === dropdownItem.path ? 'text-primaryRed' : 'text-white'}`}
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
                                    className={`px-2 hover:text-primaryOrange font-semibold text-lg  ${pathname === item.path ? 'text-primaryOrange' : 'text-white'}`}
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