import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <a href="/" className="logo-text">
              AMARANTO
            </a>
            <span className="logo-subtitle">예물 전문</span>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-menu">
            <a href="#about" className="nav-link">THE BOUTIQUE</a>
            <a href="#collections" className="nav-link">COLLECTIONS</a>
            <a href="#gallery" className="nav-link">GALLERY</a>
            <a href="#contact" className="nav-link">CONTACT</a>
          </div>

          {/* Right Side */}
          <div className="navbar-actions">
            <a href="tel:+821043764284" className="inquire-btn">INQUIRE</a>
            <button 
              className="mobile-toggle" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#about" className="mobile-link" onClick={() => setIsOpen(false)}>THE BOUTIQUE</a>
          <a href="#collections" className="mobile-link" onClick={() => setIsOpen(false)}>COLLECTIONS</a>
          <a href="#gallery" className="mobile-link" onClick={() => setIsOpen(false)}>GALLERY</a>
          <a href="#contact" className="mobile-link" onClick={() => setIsOpen(false)}>CONTACT</a>
        </div>
      )}
    </>
  );
}
