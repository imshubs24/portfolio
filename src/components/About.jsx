import React from 'react'

const About = () => {
    return (
        <>
            <div id="about" className='h-dvh max-md:h-dvh max-sm:h-auto max-md:pb-10 relative bg-[#030610] text-white flex flex-col gap-y-12 max-md:gap-y-6 items-center'>
                <h2 className='mt-36 mb-10 max-md:mb-0 max-md:mt-28 text-5xl select-none'>About Me</h2>
                <div id="about-split" className='w-4/5 flex h-1/2 max-md:h-auto max-md:gap-y-6 mt-6 max-md:flex-col'>
                    <div id="about-me" className='w-1/2 p-8 max-md:p-3 flex flex-col items-end gap-y-2 max-md:w-full max-md:items-center'>
                        <div id="about-me-personal-info" className='w-auto flex flex-col items-end text-lg gap-y-2 max-md:w-full'>
                            <h1 className='self-start mb-4 text-2xl underline underline-offset-8'>Personal Info</h1>
                            <h2 className='self-start'>Name: <span>Shubham Lokhande</span></h2>
                            <h2 className='self-start'>Address: <span>Pune, MH, India</span></h2>
                            <h2 className='self-start'>Email: <span>slokhande310@gmail.com</span></h2>
                            <h2 className='self-start text-xl'>
                                <a href="https://bit.ly/48XWihC" target="_blank" rel="noopener noreferrer" className='cursor-pointer hover:text-slate-400 duration-200 mr-2'>
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a href="https://bit.ly/491pJ2q" target="_blank" rel="noopener noreferrer" className='cursor-pointer hover:text-slate-400 duration-200 ml-2'>
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            </h2>
                        </div>
                    </div>

                    <div id="split-line" className='w-0.5 h-5/6 max-md:hidden bg-gray-700'></div>

                    <div id='about-info-box' className="w-1/2 p-8 max-md:p-3 flex max-md:w-full max-md:items-center">
                        <div id="info-text" className='xl:w-1/2 max-xl:w-full h-full tracking-wider'>
                            Hi there!👋🏻 I'm Shubham, I'm a <span className='font-bold underline underline-offset-4'>Web developer</span> and <span className='font-bold underline underline-offset-4'>Java developer</span>.<br></br> Through personal projects, I've delved into crafting web experiences with passion and dedication.<br></br> Embracing the learning curve in Java. Diving deep into DSA puzzles, paving the way for a future of innovative coding endeavors.<br></br> Eager to bring a touch of creativity to collaborative projects. Let's code with heart!❤️
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
