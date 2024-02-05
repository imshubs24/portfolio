import './App.css'
import About from './components/About'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {

  return (
    <>
      {/* Background Image */}
      <div className="container max-w-full">
        <div className={`background-img h-dvh w-full bg-[url('./assets/bg-image.jpg')] contrast-150 bg-no-repeat bg-cover bg-center absolute -z-10`}></div>
        <div className="background-img-tint h-dvh w-full absolute -z-10 bg-gray-950 opacity-90 "></div>

        {/* Navbar */}

        <Navbar />

        {/* Home Page Content */}

        <HomePage />

        {/* About Page */}

        <About />

        {/* Projects */}

        <Projects />

        {/* Skills */}

        <Skills />

        {/* Contact */}

        <Contact />
      </div>
    </>
  )
}

export default App
