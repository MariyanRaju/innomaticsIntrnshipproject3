import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, skillsRef, projectsRef, contactRef }} />
      <section ref={homeRef}><Hero /></section>
      <section ref={aboutRef}><About /></section>
      <section ref={skillsRef}><Skills /></section>
      <section ref={projectsRef}><Projects /></section>
      <section ref={contactRef}><Contact /></section>
      <Footer />
    </div>
  );
};

export default App;
