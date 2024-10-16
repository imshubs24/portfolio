import React, { useEffect, useState } from 'react';
import sample from '../assets/sample.jpg';

const projectData = [
  { id: 'project1', url: 'https://weewoo-rebrand.netlify.app/', name: 'WeeWoo Food App', imgSrc: sample, details: `Engineered "WeeWoo," a Food App using the MERN stack. Prioritized Backend with simple design` },
  { id: 'project2', url: 'https://github.com/slokhande310/samachar-news', name: 'Samachar News', imgSrc: sample, details: `A fully responsive design, Integrated wtih Free News API to dynamically fetch and display real-time news,` },
  { id: 'project3', url: 'https://github.com/slokhande310/TaskManagementBackend', name: 'Task Management API', imgSrc: sample, details: `Built with Node.js, it features user authentication, allowing sign-up and log-in, and supports CRUD operations` },
  { id: 'project4', url: 'https://quiz-app-slokhande.netlify.app/', name: 'Quiz App', imgSrc: sample, details: `Beginner Friendly Quiz App using HTML, CSS and Vanilla JavaScript` },
  { id: 'project5', url: 'https://massivelylandingpage.netlify.app/', name: 'Massively Landing Page', imgSrc: sample, details: `Created a Fully Responsive Landing Page using HTML & CSS only` },
  { id: 'project6', url: 'https://github.com/slokhande310/To-Do-List', name: 'To-Do List App', imgSrc: sample, details: `Developed a To-do list web application using the MERN stack as an assignment for a company` },
];

const Projects = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Call once to set the initial state
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='min-h-dvh h-auto bg-[#030610] w-full relative text-white' id='projects'>
      <div className='flex flex-col items-center gap-y-12 max-md:gap-y-6'>
        <h2 className='mt-36 mb-10 max-md:mb-0 max-md:mt-28 text-5xl select-none'>Projects</h2>
        <div className={`h-full w-auto grid lg:grid-cols-3 place-items-center p-14 max-sm:p-4 max-sm:gap-3 max-lg:gap-16 lg:gap-8 md:grid-cols-2 sm:grid-cols-1`} id='projects-grid'>
          {projectData.map((project) => (
            <div
              key={project.id}
              className={`relative min-h-60 min-w-60 max-w-60 max-md:w-[80%] max-md:place-items-center max-md:max-w-96 group select-none md:hover:shadow-gray-400 md:hover:shadow-md transition-all ease-linear duration-100 bg-no-repeat bg-left bg-cover`}
              style={{ backgroundImage: isMobile ? 'none' : `url(${project.imgSrc})` }}
            >
              <div className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:hover:bg-white max-md:bg-white transition-all duration-200 ease-linear flex flex-col justify-start items-center text-black p-5">
                <h3 className='text-xl font-bold mb-3'>{project.name}</h3>
                <p className='text-center text-sm'>{project.details}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className='absolute bottom-5'><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
