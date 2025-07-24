import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectsGrid from "../components/ProjectsGrid";
import Contact from "../components/Contact";


const Home = () => {
  return (
    <>
      <NavBar />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <ProjectsGrid />
      </section>

      <section id="skills">
        <Skills />
      </section>
          <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;