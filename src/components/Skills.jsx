import React, { useState } from 'react'
import { Circle } from 'rc-progress';

const Skills = () => {
  return (
    <>
      <div id='skills' className='h-dvh max-xl:h-auto bg-[#030610] w-full relative text-white'>
        <div id="skills-section" className='flex flex-col h-full gap-y-12 items-center select-none w-full'>
          <h3 className='text-5xl mt-36 mb-10'>Skills</h3>
          <div id="skills-row" className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-5 md:w-5/6 p-14 sm:w-full xl:w-[80%] place-items-center'>
            <div id="skills1" className='h-44 w-56 flex justify-center items-center relative'>
              <Circle percent={75} strokeWidth={3} trailWidth={3} trailColor='#090e20' strokeColor="whitesmoke" className='w-36 h-36' />
              <div id="skills-text" className='absolute top-[55%]'>75%</div>
              <div id="skills-text" className='absolute top-[35%] text-lg'>HTML & CSS</div>
            </div>
            <div id="skills2" className='h-44 w-56 flex justify-center items-center relative'>
              <Circle percent={55} strokeWidth={3} trailWidth={3} trailColor='#090e20' strokeColor="whitesmoke" className='w-36 h-36' />
              <div id="skills-text" className='absolute top-[55%]'>55%</div>
              <div id="skills-text" className='absolute top-[35%] text-xl'>JavaScript</div>
            </div>
            <div id="skills3" className='h-44 w-56 flex justify-center items-center relative'>
              <Circle percent={55} strokeWidth={3} trailWidth={3} trailColor='#090e20' strokeColor="whitesmoke" className='w-36 h-36' />
              <div id="skills-text" className='absolute top-[55%]'>55%</div>
              <div id="skills-text" className='absolute top-[35%] text-xl'>Java</div>
            </div>
            <div id="skills4" className='h-44 w-56 flex justify-center items-center relative'>
              <Circle percent={60} strokeWidth={3} trailWidth={3} trailColor='#090e20' strokeColor="whitesmoke" className='w-36 h-36' />
              <div id="skills-text" className='absolute top-[55%]'>60%</div>
              <div id="skills-text" className='absolute top-[35%] text-xl'>React</div>
            </div>
            <div id="skills5" className='h-44 w-56 flex justify-center items-center relative'>
              <Circle percent={60} strokeWidth={3} trailWidth={3} trailColor='#090e20' strokeColor="whitesmoke" className='w-36 h-36' />
              <div id="skills-text" className='absolute top-[55%]'>60%</div>
              <div id="skills-text" className='absolute top-[35%] text-xl'>NodeJs</div>
            </div>
            <div id="skills6" className='h-44 w-56 flex justify-center items-center relative'>
              <Circle percent={55} strokeWidth={3} trailWidth={3} trailColor='#090e20' strokeColor="whitesmoke" className='w-36 h-36' />
              <div id="skills-text" className='absolute top-[55%]'>55%</div>
              <div id="skills-text" className='absolute top-[35%] text-xl'>MongoDB</div>
            </div>
            <div id="skills7" className='h-44 w-56 flex justify-center items-center relative'>
              <Circle percent={65} strokeWidth={3} trailWidth={3} trailColor='#090e20' strokeColor="whitesmoke" className='w-36 h-36' />
              <div id="skills-text" className='absolute top-[55%]'>65%</div>
              <div id="skills-text" className='absolute top-[35%] text-base'>Tailwind CSS</div>
            </div>
            <div id="skills8" className='h-44 w-56 flex justify-center items-center relative'>
              <Circle percent={45} strokeWidth={3} trailWidth={3} trailColor='#090e20' strokeColor="whitesmoke" className='w-36 h-36' />
              <div id="skills-text" className='absolute top-[55%]'>45%</div>
              <div id="skills-text" className='absolute top-[35%] text-lg'>Bootstrap</div>
            </div>
            <div id="skills9" className='h-44 w-56 flex justify-center items-center relative'>
              <Circle percent={60} strokeWidth={3} trailWidth={3} trailColor='#090e20' strokeColor="whitesmoke" className='w-36 h-36' />
              <div id="skills-text" className='absolute top-[55%]'>60%</div>
              <div id="skills-text" className='absolute top-[35%] text-xl'>Git</div>
            </div>
            <div id="skills10" className='h-44 w-56 flex justify-center items-center relative'>
              <Circle percent={20} strokeWidth={3} trailWidth={3} trailColor='#090e20' strokeColor="whitesmoke" className='w-36 h-36' />
              <div id="skills-text" className='absolute top-[55%]'>20%</div>
              <div id="skills-text" className='absolute top-[35%] text-xl'>Python</div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Skills
