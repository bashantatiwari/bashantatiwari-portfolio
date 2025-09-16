import { Routes, Route, Navigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import MainHome from './Pages/MainHome'
import About from './Pages/AboutPage'
import Footer from './Pages/FooterPage'
import Hero from './Pages/Hero'
import NavBar from './Pages/Navbar'
import ProjectsSection from './Pages/ProjectPage'
import Contact from './Pages/ContactPage'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <NavBar />
      <Routes>
        <Route path='/' element={<MainHome></MainHome>}></Route>
        <Route path='/about/' element={<About />}></Route>
        <Route path='/projects/' element={<ProjectsSection />}></Route>
        <Route path='/contact/' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
