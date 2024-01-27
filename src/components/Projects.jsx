import React from 'react'
import sample from '../assets/sample.jpeg'

const Projects = () => {
  return (
    <div className='h-dvh max-lg:h-auto bg-[#030610] w-full items-center relative text-white' id='projects'>
      <div className=' flex flex-col items-center gap-y-12'>
        <h2 className='mt-36 mb-10 text-5xl select-none'>Projects</h2>
        <div className='h-full w-auto grid lg:grid-cols-3 place-items-center lg: p-14 max-sm:p-4 max-sm:gap-3 max-lg:gap-16 lg:gap-8 md:grid-cols-2 sm:grid-cols-1' id="projects-grid">
          <div id="project1" className='border border-gray-400 hover:bg-slate-700 transition-all duration-300 ease-linear min-h-56 h-auto max-w-60 max-md:w-auto max-md:max-w-96  cursor-pointer'>
            <img className='max-h-f h-auto w-auto' src={sample} />
          </div>
          <div id="project2" className='border border-gray-400 hover:bg-slate-700 transition-all duration-300 ease-linear max-w-60 max-md:w-auto max-md:max-w-96 cursor-pointer'>
            <img className='h-auto w-auto' src={sample} />
          </div>
          <div id="project3" className='border border-gray-400 hover:bg-slate-700 transition-all duration-300 ease-linear max-w-60 max-md:w-auto max-md:max-w-96 cursor-pointer'>
            <img className='h-auto w-auto' src={sample} />
          </div>
          <div id="project4" className='border border-gray-400 hover:bg-slate-700 transition-all duration-300 ease-linear max-w-60 max-md:w-auto max-md:max-w-96 cursor-pointer'>
            <img className='h-auto w-auto' src={sample} />
          </div>
          <div id="project5" className='border border-gray-400 hover:bg-slate-700 transition-all duration-300 ease-linear max-w-60 max-md:w-auto max-md:max-w-96 cursor-pointer'>
            <img className='h-auto w-auto' src={sample} />
          </div>
          <div id="project6" className='border border-gray-400 hover:bg-slate-700 transition-all duration-300 ease-linear max-w-60 max-md:w-auto max-md:max-w-96 cursor-pointer'>
            <img className='h-auto w-auto' src={sample} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
