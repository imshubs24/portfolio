import React from 'react'

const About = () => {
    return (
        <>
            <div id="about" className='h-dvh max-md:h-auto max-md:pb-10 relative bg-[#030610] text-white flex flex-col gap-y-12 max-md:gap-y-6 items-center'>
                <h2 className='mt-36 mb-10 max-md:mb-0 max-md:mt-28 text-5xl select-none'>About Me</h2>
                <div id="about-split" className='w-4/5 flex h-1/2 mt-6 max-md:flex-col'>
                    <div id="about-me" className='w-1/2 p-8 max-md:p-3 flex flex-col items-end gap-y-2 max-md:w-full max-md:items-center'>
                        <div id="about-me-personal-info" className='w-auto flex flex-col items-end text-lg gap-y-2 max-md:w-full'>
                            <h1 className='self-start mb-4 text-2xl underline underline-offset-8'>Personal Info</h1>
                            <h2 className='self-start'>Name: <span>Shubham Lokhande</span></h2>
                            <h2 className='self-start'>Address: <span>Pune, MH, India</span></h2>
                            <h2 className='self-start'>Contact No.: <span className='bg-white'> +91 9921052112 </span></h2>
                            <h2 className='self-start'>Email: <span>slokhande310@gmail.com</span></h2>
                            <h2 className='self-start text-xl'>
                                <a href="" target="_blank" rel="noopener noreferrer" className='cursor-pointer hover:text-slate-400 duration-200 mr-2'>
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a href="" target="_blank" rel="noopener noreferrer" className='cursor-pointer hover:text-slate-400 duration-200 ml-2'>
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            </h2>
                        </div>
                    </div>

                    <div id="split-line" className='w-0.5 h-5/6 max-md:hidden bg-gray-700'></div>

                    <div id='about-info-box' className="w-1/2 p-8 max-md:p-3 flex max-md:w-full max-md:items-center">
                        <div id="info-text" className='xl:w-1/2 max-xl:w-full h-full tracking-wider '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sit asperiores repudiandae molestias dicta temporibus, repellat quia minus voluptas nihil laudantium, officia fuga quos dolores, omnis culpa quibusdam obcaecati qui! Magni amet exercitationem inventore ratione accusamus qui, rem minus eius assumenda, quae, praesentium quaerat suscipit dolorem fuga neque vitae corrupti.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
