import { Circle } from 'rc-progress';
import { useEffect, useState, useRef } from 'react';
import { InView } from 'react-intersection-observer';
import skillsData from '../data/skills.json';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const skillsRef = useRef(null);

  useEffect(() => {
    setSkills(skillsData.map(skill => ({ ...skill, animatedPercentage: 0 })));
  }, [skillsData]);
  

  const handleInView = (inView) => {
    if (inView) {
      setTimeout(() => {
        const interval = setInterval(() => {
          setSkills(prevSkills =>
            prevSkills.map(skill => ({
              ...skill,
              animatedPercentage: Math.min(skill.animatedPercentage + 1, skill.percentage),
            }))
          );
  
          // Clear interval when animation is complete
          if (skills.every(skill => skill.animatedPercentage === skill.percentage)) {
            clearInterval(interval);
          }
        }, 15);
      }, 500); // .5 seconds delay
    }
  };
  

  return (
    <InView as="div" onChange={handleInView} ref={skillsRef} triggerOnce>
      <div id='skills' className='h-dvh max-xl:h-auto bg-[#030610] w-full relative text-white'>
        <div id="skills-section" className='flex flex-col h-full gap-y-12 items-center select-none w-full max-md:gap-y-6'>
          <h3 className='text-5xl mt-36 mb-10'>Skills</h3>
          <div id="skills-row" className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-5 md:w-5/6 p-14 max-md:p-4 sm:w-full xl:w-[80%] place-items-center'>
            {skills &&
              skills.map((skill, index) => (
                <div key={skill.name} id={`skills${index + 1}`} className='h-44 w-56 flex justify-center items-center relative'>
                  <Circle
                    percent={skill.animatedPercentage}
                    strokeWidth={3}
                    trailWidth={3}
                    trailColor='#090e20'
                    strokeColor="whitesmoke"
                    className='w-36 h-36'
                  />
                  <div className='absolute top-[55%]'>{skill.animatedPercentage}%</div>
                  <div className='absolute top-[35%] text-lg'>{skill.name}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </InView>
  );
};

export default Skills;
