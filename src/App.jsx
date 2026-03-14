import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

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
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open-nav' : ''}`}>
        <div className="container nav-container">
          <a href="#" className={`logo ${mobileMenuOpen ? 'menu-open-logo' : ''}`}>Harish<span className="text-gradient">.</span></a>
          <div className="nav-links desktop-menu">
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#vibe-coding">Vibe Coding</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
            {mobileMenuOpen ? <X size={28} color="#ffffff" /> : <Menu size={28} color="var(--text-main)" />}
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <a href="#work" onClick={() => setMobileMenuOpen(false)}>Work</a>
        <a href="#process" onClick={() => setMobileMenuOpen(false)}>Process</a>
        <a href="#vibe-coding" onClick={() => setMobileMenuOpen(false)}>Vibe Coding</a>
        <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
        <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
      </div>

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
