import React, { useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const Skills = () => {

  return (
    <>
      <div id='skills' className='h-dvh max-lg:h-auto bg-[#030610] relative text-white'>
        <div id="skills-section" className='flex flex-col items-center select-none w-full'>
          <h3 className='text-5xl mt-28 mb-10'>Skills</h3>
          <div id="skills-row" className='grid 2xl:grid-cols-5 gap-y-12 lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-2 md:w-5/6 sm:w-full xl:w-2/3 p-14 place-items-center'>
            <div id="skills1" className='h-44 w-56 relative'>
              <div id="inner-text" className='absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg'>HTML & CSS</div>
              <div className='w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ width: 175 }}>
                <CircularProgressbar value={75} strokeWidth={4}
                  styles={buildStyles({
                    strokeLinecap: 'round',
                    textSize: '16px',
                    pathTransitionDuration: 2,
                    pathColor: `orange`,
                    textColor: 'orange',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })} />
                <div id="inner-value" className='absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>75%</div>
              </div>
            </div>
            <div id="skills2" className='h-44 w-56 relative'>
              <div id="inner-text" className='absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl'>JavaScript</div>
              <div className='w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ width: 175 }}>
                <CircularProgressbar value={66} strokeWidth={4}
                  styles={buildStyles({
                    strokeLinecap: 'round',
                    textSize: '16px',
                    pathTransitionDuration: 2,
                    pathColor: `orange`,
                    textColor: 'orange',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })} />
                <div id="inner-value" className='absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>66%</div>
              </div>
            </div>
            <div id="skills3" className='h-44 w-56 relative'>
              <div id="inner-text" className='absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl'>Java</div>
              <div className='w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ width: 175 }}>
                <CircularProgressbar value={66} strokeWidth={4}
                  styles={buildStyles({
                    strokeLinecap: 'round',
                    textSize: '16px',
                    pathTransitionDuration: 2,
                    pathColor: `orange`,
                    textColor: 'orange',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })} />
                <div id="inner-value" className='absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>66%</div>
              </div>
            </div>
            <div id="skills4" className='h-44 w-56 relative'>
              <div id="inner-text" className='absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl'>Python</div>
              <div className='w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ width: 175 }}>
                <CircularProgressbar value={66} strokeWidth={4}
                  styles={buildStyles({
                    strokeLinecap: 'round',
                    textSize: '16px',
                    pathTransitionDuration: 2,
                    pathColor: `orange`,
                    textColor: 'orange',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })} />
                <div id="inner-value" className='absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>66%</div>
              </div>
            </div>
            <div id="skills5" className='h-44 w-56 relative'>
              <div id="inner-text" className='absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl'>ReactJs</div>
              <div className='w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ width: 175 }}>
                <CircularProgressbar value={66} strokeWidth={4}
                  styles={buildStyles({
                    strokeLinecap: 'round',
                    textSize: '16px',
                    pathTransitionDuration: 2,
                    pathColor: `orange`,
                    textColor: 'orange',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })} />
                <div id="inner-value" className='absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>66%</div>
              </div>
            </div>
            <div id="skills6" className='h-44 w-56 relative'>
              <div id="inner-text" className='absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl'>NodeJs</div>
              <div className='w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ width: 175 }}>
                <CircularProgressbar value={66} strokeWidth={4}
                  styles={buildStyles({
                    strokeLinecap: 'round',
                    textSize: '16px',
                    pathTransitionDuration: 2,
                    pathColor: `orange`,
                    textColor: 'orange',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })} />
                <div id="inner-value" className='absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>66%</div>
              </div>
            </div>
            <div id="skills7" className='h-44 w-56 relative'>
              <div id="inner-text" className='absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl'>MongoDB</div>
              <div className='w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ width: 175 }}>
                <CircularProgressbar value={66} strokeWidth={4}
                  styles={buildStyles({
                    strokeLinecap: 'round',
                    textSize: '16px',
                    pathTransitionDuration: 2,
                    pathColor: `orange`,
                    textColor: 'orange',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })} />
                <div id="inner-value" className='absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>66%</div>
              </div>
            </div>
            <div id="skills8" className='h-44 w-56 relative'>
              <div id="inner-text" className='absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-base'>Tailwind CSS</div>
              <div className='w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ width: 175 }}>
                <CircularProgressbar value={66} strokeWidth={4}
                  styles={buildStyles({
                    strokeLinecap: 'round',
                    textSize: '16px',
                    pathTransitionDuration: 2,
                    pathColor: `orange`,
                    textColor: 'orange',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })} />
                <div id="inner-value" className='absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>66%</div>
              </div>
            </div>
            <div id="skills9" className='h-44 w-56 relative'>
              <div id="inner-text" className='absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl'>BootStrap</div>
              <div className='w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ width: 175 }}>
                <CircularProgressbar value={66} strokeWidth={4}
                  styles={buildStyles({
                    strokeLinecap: 'round',
                    textSize: '16px',
                    pathTransitionDuration: 2,
                    pathColor: `orange`,
                    textColor: 'orange',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })} />
                <div id="inner-value" className='absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>66%</div>
              </div>
            </div>
            <div id="skills10" className='h-44 w-56 relative'>
              <div id="inner-text" className='absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl'>Git</div>
              <div className='w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ width: 175 }}>
                <CircularProgressbar value={66} strokeWidth={4}
                  styles={buildStyles({
                    strokeLinecap: 'round',
                    textSize: '16px',
                    pathTransitionDuration: 2,
                    pathColor: `orange`,
                    textColor: 'orange',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })} />
                <div id="inner-value" className='absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>66%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
