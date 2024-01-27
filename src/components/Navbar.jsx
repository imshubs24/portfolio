import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='h-20 w-full text-white flex justify-between fixed border-b border-b-gray-700 z-10 lg:pl-40 select-none md:pl-20 sm:px-5 max-sm:px-2'>
                <div className="logo flex text-[2rem] items-center cursor-pointer">
                    <a href="#">Shubham</a>
                </div>
                <div className='flex items-center'>
                    <ul className='flex items-center justify-center h-full font-medium max-md:hidden text-xl md:text-base'>

                        <li className='lg:mx-7 max-md:ml-7 sm:mx-4 max-md:mx-4 cursor-pointer relative group'>
                            <a href="#" className='relative md:px-1' onClick={() => handleClick}>Home
                                <span className={`absolute bg-white w-0 left-0 -bottom-3 h-1 group-hover:w-full transition-all duration-500 ease `}></span>
                            </a>
                        </li>
                        <li className='lg:mx-7 max-md:ml-7 sm:mx-4 max-md:mx-4 cursor-pointer relative group'>
                            <a href="#about" className='relative md:px-1'>About
                                <span className='absolute bg-white w-0 left-0 -bottom-3 h-1 group-hover:w-full transition-all duration-500 ease'></span>
                            </a>
                        </li>
                        <li className='lg:mx-7 max-md:ml-7 sm:mx-4 max-md:mx-4 cursor-pointer relative group'>
                            <a href="#projects" className='relative md:px-1'>Projects
                                <span className='absolute bg-white w-0 left-0 -bottom-3 h-1 group-hover:w-full transition-all duration-500 ease'></span>
                            </a>
                        </li>
                        <li className='lg:mx-7 max-md:ml-7 sm:mx-4 max-md:mx-4 cursor-pointer relative group'>
                            <a href="#skills" className='relative md:px-1'>Skills
                                <span className='absolute bg-white w-0 left-0 -bottom-3 h-1 group-hover:w-full transition-all duration-500 ease'></span>
                            </a>
                        </li>
                        <li className='lg:mx-7 max-md:ml-7 sm:mx-4 max-md:mx-4 cursor-pointer relative group'>
                            <a href="#contact" className='relative md:px-1'>Contact
                                <span className='absolute bg-white w-0 left-0 -bottom-3 h-1 group-hover:w-full transition-all duration-500 ease'></span>
                            </a>
                        </li>
                    </ul>
                    <div className="ham hidden max-md:flex justify-items-center max-md:text-2xl"><i className="fa-solid fa-bars"></i></div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
