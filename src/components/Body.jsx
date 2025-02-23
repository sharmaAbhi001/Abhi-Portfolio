
import Navbar from "./Navbar"
import Hero from "./Hero"
import Projects from "./Projects"
import Contact from "./Contact";


const Body = () =>{  


return (
  <>
  <Navbar/>
  <div  data-scroll-container>
    <section id="home" data-scroll-section>
      <Hero />
    </section>
    <section id="projects" data-scroll-section>
      <Projects />
    </section>
    <section id="contact" data-scroll-section>
      <Contact />
    </section>
  </div>
  </>
)
}

export default Body
