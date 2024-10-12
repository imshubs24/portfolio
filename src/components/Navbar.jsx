import React, { useState } from 'react'
import { Link } from 'react-scroll'

const navItems = [
    { id: 'homepage', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
];

const Navbar = () => {

    const [dropdown, setDropdown] = useState(false);

    const handleDropDownMenu = () => {
        setDropdown(!dropdown);
    }

    return (
        <nav className='h-20 w-full text-white flex justify-between fixed border-b border-b-gray-700 z-10 lg:pl-40 select-none md:pl-20 sm:px-5 max-sm:px-2'>
            <div className="flex text-[2rem] items-center cursor-pointer">
                <Link to="homepage" smooth={true} duration={500}>Shubham<span className=''>.</span> </Link>
            </div>
            <div className='flex items-center'>
                <ul className={`flex md:items-center md:justify-center md:h-full lg:text-xl md:text-base ${dropdown ? 'navbar-tablet-css' : 'max-md:hidden'} `}>
                    {navItems.map(item => (
                        <li key={item.id} className='lg:mx-7 md:mx-4 cursor-pointer relative group max-md:w-1/2 max-md:text-center max-md:border max-md:border-black  max-md:text-black max-md:py-2 max-md:bg-white'>
                            <Link to={item.id} smooth={true} duration={500} className='relative md:px-1 w-full h-full block' onClick={() => setDropdown(false)}>
                                {item.label}
                                <span className='absolute bg-white w-0 left-0 -bottom-3 h-1 group-hover:w-full transition-all duration-500 ease'></span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="ham hidden max-md:flex justify-items-center max-md:text-2xl" onClick={handleDropDownMenu}><i className="fa-solid fa-bars"></i></div>
            </div>
        </nav>
    );
};

export default Navbar;