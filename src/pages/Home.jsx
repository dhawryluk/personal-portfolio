import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectsGrid from "../components/ProjectsGrid";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-sunbleachedSand dark:bg-mistGrey text-coastalTeal dark:text-leafGreen">
      <NavBar />
      <Hero />

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
      <Footer />
    </div>
  );
};

export default Home;
