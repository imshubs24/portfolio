import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-scroll'

const HomePage = () => {

  const text = useRef(null);

  useEffect(() => {
    const typed = new Typed(text.current, {
      strings: ['Full Stack', 'MERN Stack'],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div id='homepage' className='relative h-dvh flex justify-center text-white flex-col'>
        <div className='z-50 fixed transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-28 text-red-500 select-none animate-pulse'><i className="fa-solid fa-triangle-exclamation"></i><span> Under Construction</span></div>
        <h3 className='font-mono text-4xl lg:mx-40 sm:mx-5 max-sm:mx-2 md:mx-20'>I'm a</h3>
        <h1 className='lg:mx-40 py-6 max-md:text-[3.6rem] md:text-7xl sm:mx-5 max-sm:mx-2 md:mx-20'><span ref={text}></span></h1>
        <h1 className='lg:mx-40 pb-6 max-md:text-6xl md:text-7xl sm:mx-5 max-sm:mx-2 md:mx-20'>Developer</h1>
        <p className='xl:w-2/5 lg:w-3/5 md:w-10/12 sm:w-10/12 lg:text-lg lg:mx-40 md:text-xl sm:mx-5 max-sm:mx-2 md:mx-20'>
          Hi, I'm Shubham, a full-stack developer dedicated to transforming imagination into interactive digital experiences.
        </p>
        <a target='_blank' href='https://drive.google.com/uc?export=download&id=1BNL4H9WzkK-sN7WGa63acQzpB2sYpnH5' className='border border-white self-start lg:mx-40 sm:mx-5 max-sm:mx-2 md:mx-20 text-[1.1rem] p-2 mt-5 bg-white outline-none text-black font-semibold rounded-lg hover:bg-transparent hover:text-white duration-150 ease-linear'>Download Resume</a>
      </div>
      <div id='homepage-down-arrow' className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white">
        <Link to="about" duration={500} smooth={true} className='p-2 flex items-center justify-items-center cursor-pointer text-white transition-all easeduration-200 hover:scale-150 animate-bounce'>
          <i className="fa-solid fa-angle-down"></i>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
