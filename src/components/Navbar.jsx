import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ scrollToSection, refs }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false); // ✅ Close menu when switching back to large screen
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <h1>My Portfolio</h1>

      {/* Hamburger Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
      </div>

      {/* Navbar Links - Slides in & out */}
      <div className={`nav-links ${menuOpen ? "open" : ""} ${isMobile ? "mobile" : ""}`}>
        <button onClick={() => { scrollToSection(refs.homeRef); setMenuOpen(false); }}>Home</button>
        <button onClick={() => { scrollToSection(refs.aboutRef); setMenuOpen(false); }}>About</button>
        <button onClick={() => { scrollToSection(refs.skillsRef); setMenuOpen(false); }}>Skills</button>
        <button onClick={() => { scrollToSection(refs.projectsRef); setMenuOpen(false); }}>Projects</button>
        <button onClick={() => { scrollToSection(refs.contactRef); setMenuOpen(false); }}>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
