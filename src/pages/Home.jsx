import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectsGrid from "../components/ProjectsGrid";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const [mood, setMood] = useState("dark");

  useEffect(() => {
    const savedMood = localStorage.getItem("mood") || "dark";
    setMood(savedMood);
    document.documentElement.classList.toggle("dark", savedMood === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("mood", mood);
    document.documentElement.classList.toggle("dark", mood === "dark");
  }, [mood]);

  return (
    <div className="bg-sunbleachedSand dark:bg-mistGrey text-coastalTeal dark:text-leafGreen">
      <NavBar />

      <Hero mood={mood} setMood={setMood} />

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

      <Footer mood={mood} />
    </div>
  );
};

export default Home;