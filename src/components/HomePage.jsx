import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-scroll'

const HomePage = () => {

  const text = useRef(null);

  useEffect(() => {
    const typed = new Typed(text.current, {
      strings: ['Full Stack', 'Java'],
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
      <div className='z-50 fixed transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-28 text-red-500 select-none'><i className="fa-solid fa-triangle-exclamation"></i><span> Under Construction</span></div>
        <h3 className='font-mono text-4xl lg:mx-40 sm:mx-5 max-sm:mx-2 md:mx-20'>I'm a</h3>
        <h1 className='lg:mx-40 py-6 lg:text-3xl xl:text-4xl 2xl:text-5xl sm:mx-5 max-sm:mx-2 md:mx-20' style={{ fontSize: '70px', lineHeight: '1.2' }}> <span ref={text}></span></h1>
        <h1 className='lg:mx-40 pb-6 lg:text-3xl xl:text-4xl 2xl:text-5xl sm:mx-5 max-sm:mx-2 md:mx-20' style={{ fontSize: '60px', lineHeight: '1.2' }}>Developer</h1>
        <p className='xl:w-2/5 lg:w-3/5 lg:text-lg lg:mx-40 md:w-10/12 md:text-xl sm:w-10/12 sm:mx-5 max-sm:mx-2 md:mx-20'>
          Hi, I'm Shubham, a full-stack developer weaving intricate solutions with a knack for Java coding.
        </p>
      </div>
      <div id='homepage-down-arrow' className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white">
        <Link to="about" duration={500} smooth={true} className='p-2 flex items-center justify-items-center cursor-pointer text-white transition-all easeduration-200 hover:scale-150'>
          <i className="fa-solid fa-angle-down"></i>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
