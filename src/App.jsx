import './App.css'
import About from './components/About'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import bgImage from './assets/bg-image.jpg'
import Projects from './components/Projects'

function App() {

  return (
    <>
      {/* Background Image */}
      <div className="container max-w-full">
        <div className={`background-img h-dvh w-full bg-[url(${bgImage})] contrast-150 bg-no-repeat bg-cover bg-center absolute -z-10`}></div>
        <div className="background-img-tint h-dvh w-full absolute -z-10 bg-gray-950 opacity-90 "></div>

        {/* Navbar */}

        <Navbar />

        {/* Home Page Content */}

        <HomePage />

        {/* About Page */}

        <About />

        {/* Projects */}

        <Projects />
      </div>
    </>
  )
}

export default App
