import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(() => localStorage.getItem('activeLink') || 'History');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [language, setLanguage] = useState(() => sessionStorage.getItem('language') || 'en');


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
        localStorage.setItem('activeLink', linkName);
    };


    useEffect(() => {
        sessionStorage.setItem('language', language);
    }, [language]);

    

    const handleChangeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
        sessionStorage.setItem('language', newLanguage);
        window.location.reload();
    };


    return (
        <nav className="backdrop-filter backdrop-blur-lg bg-opacity-60 fixed w-full z-20 top-0 start-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://png.pngtree.com/png-clipart/20231007/ourmid/pngtree-watermelon-drawing-png-image_10026441.png" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap ">PAL</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <label className="swap swap-rotate">
  
                <input type="checkbox" className="theme-controller" value="dark" />
                
                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                
                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                
                </label>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn bg-transparent border-none">{language}</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a onClick={() => handleChangeLanguage('ar')} className="text-center font-bold text-xl block ">ar</a></li>
                            <li><a onClick={() => handleChangeLanguage('en')} className="text-center font-bold text-xl block">en</a></li>
                            <li><a onClick={() => handleChangeLanguage('fr')} className="text-center font-bold text-xl block">fr</a></li>
                        </ul>
                    </div>
                    <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={isMenuOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <a href="#" onClick={() => handleLinkClick('History')} className={`block py-2 px-3 ${activeLink === 'History' ? 'text-red-600' : 'light:text-black dark:text-white'} rounded  md:hover:bg-transparent md:p-0 hover:text-green-500 `}><Link to={"/"}>History</Link></a>
                        </li>
                        <li>
                            <a href="#" onClick={() => handleLinkClick('About')} className={`block py-2 px-3 ${activeLink === 'About' ? 'text-red-600' : 'light:text-black dark:text-white'} rounded  md:hover:bg-transparent md:p-0 hover:text-green-500 `}><Link to={"/atrocities"}>Atrocities</Link></a>
                        </li>
                        <li>
                            <a href="#" onClick={() => handleLinkClick('dtoll')} className={`block py-2 px-3 ${activeLink === 'dtoll' ? 'text-red-600' : 'light:text-black dark:text-white'} rounded  md:hover:bg-transparent md:p-0 hover:text-green-500 `}><Link to={"/dtoll"}>death toll</Link></a>
                        </li>
                        <li>
                            <a href="#" onClick={() => handleLinkClick('Services')} className={`block py-2 px-3 ${activeLink === 'Services' ? 'text-red-600' : 'light:text-black dark:text-white'} rounded  md:hover:bg-transparent md:p-0 hover:text-green-500 `}>Disinformations</a>
                        </li>
                        <li>
                            <a href="#" onClick={() => handleLinkClick('Contact')} className={`block py-2 px-3 ${activeLink === 'Contact' ? 'text-red-600' : 'light:text-black dark:text-white'} rounded  md:hover:bg-transparent md:p-0 hover:text-green-500 `}><Link to={"/contact"}>Contact us</Link></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
