import About from '../Pages/AboutPage'
import Footer from '../Pages/FooterPage'
import Hero from '../Pages/Hero'
import NavBar from '../Pages/Navbar'
import ProjectsSection from '../Pages/ProjectPage'
import Contact from '../Pages/ContactPage'

const MainHome = () => {
  return (
    <main>
      <section id='hero'>
        <Hero />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='projects'>
        <ProjectsSection />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </main>
  )
}

export default MainHome
