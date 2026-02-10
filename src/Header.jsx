import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      // Menentukan apakah user sudah scroll lebih dari 20px
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-header ${isScrolled ? 'nav-scrolled' : ''}`}>
  <div className="container header-content">
    <div className="logo">
      <Link to="/" onClick={closeMenu}>
        <img src="/Logo-Trifilosofi.png" alt="Trifilosofi" className="partner-logo-tli brand-primary" />
      </Link>
    </div>

    {/* Navigasi Utama */}
    <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
      <a href="/#ethos" onClick={closeMenu}>The Ethos</a>
      <a href="/#experiences" onClick={closeMenu}>The Business</a> 
      <Link to="/Gallery" onClick={closeMenu}>The Gallery</Link>
      <Link to="/GrowthWithUs" onClick={closeMenu}>The Growth</Link>
      {/* <a href="/GrowthWithUs" onClick={closeMenu}>The Growth</a> */}
      <a href="#contact" className="btn-contact">Get In Touch</a>
    </nav>

    <div className="header-actions">
      
      <div className={`burger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className={`bar ${isScrolled ? 'bar-dark' : 'bar-light'}`}></div>
        <div className={`bar ${isScrolled ? 'bar-dark' : 'bar-light'}`}></div>
        <div className={`bar ${isScrolled ? 'bar-dark' : 'bar-light'}`}></div>
      </div>
    </div>
  </div>
</header>
);
}