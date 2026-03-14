import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import DesignProcess from './components/DesignProcess';
import VibeCoding from './components/VibeCoding';
import SkillsTools from './components/SkillsTools';
import About from './components/About';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <CustomCursor />
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo">Harish<span className="text-gradient">.</span></a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#vibe-coding">Vibe Coding</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <FeaturedWork />
        <DesignProcess />
        <VibeCoding />
        <SkillsTools />
        <About />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
