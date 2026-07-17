import React from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Services from './Components/service/Service'
import Contact from './Components/Contact/Contact'
import Projects from './Components/Projects/Projects'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'
import Courses from './Components/Courses/Courses'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div>
     <Hero/>
     <Navbar/>
     <Courses/>
     <Services/>
     <Projects/>
     <Blog/>
     <Contact/>
     <Footer/>
    </div>
    
  )
}

export default App
