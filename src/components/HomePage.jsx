import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

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

  const scrollToAboutComponent = () => {
    const nextComponent = document.getElementById('about');
    if (nextComponent) {
      nextComponent.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <div id='homepage' className='relative h-dvh flex justify-center text-white flex-col '>
        <h3 className='font-mono text-4xl lg:mx-40 sm:mx-5 max-sm:mx-2 md:mx-20'>I'm a</h3>
        <h1 className='lg:mx-40 py-6 lg:text-3xl xl:text-4xl 2xl:text-5xl sm:mx-5 max-sm:mx-2 md:mx-20' style={{ fontSize: '70px', lineHeight: '1.2' }}> <span ref={text}></span></h1>
        <h1 className='lg:mx-40 pb-6 lg:text-3xl xl:text-4xl 2xl:text-5xl sm:mx-5 max-sm:mx-2 md:mx-20' style={{ fontSize: '60px', lineHeight: '1.2' }}>Developer</h1>
        <p className='xl:w-2/5 lg:w-3/5 lg:text-lg lg:mx-40 md:w-10/12 md:text-xl sm:w-10/12 sm:mx-5 max-sm:mx-2 md:mx-20'>
          Hi, I'm Shubham, a full-stack developer weaving intricate solutions with a knack for Java coding.
        </p>
      </div>
      <div className="next-page-arrow absolute bottom-12 left-1/2 transform -translate-x-1/2 rounded-full text-white border-2  p-4 flex items-center justify-center cursor-pointer
       hover:bg-white hover:text-black transition-all ease-linear duration-200"
        onClick={scrollToAboutComponent}>
        <i className="fa-solid fa-angle-down"></i>
      </div>
    </>
  );
};

export default HomePage;
