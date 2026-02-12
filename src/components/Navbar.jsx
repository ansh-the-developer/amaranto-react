import { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation(); // Use translation hook

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ko' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <a href="/" className="logo-text">AMARANTO</a>
            <span className="logo-subtitle">예물 전문</span>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-menu">
            <a href="#about" className="nav-link">{t('navbar.boutique')}</a>
            <a href="#collections" className="nav-link">{t('navbar.collections')}</a>
            <a href="#gallery" className="nav-link">{t('navbar.gallery')}</a>
            <a href="#contact" className="nav-link">{t('navbar.contact')}</a>
          </div>

          {/* Right Side */}
          <div className="navbar-actions">
            {/* Language Switcher */}
            <button onClick={toggleLanguage} className="lang-btn">
              {i18n.language === 'en' ? 'KR' : 'EN'}
            </button>

            <a href="tel:+821043764284" className="inquire-btn">{t('navbar.inquire')}</a>
            
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
          <a href="#about" className="mobile-link" onClick={() => setIsOpen(false)}>{t('navbar.boutique')}</a>
          <a href="#collections" className="mobile-link" onClick={() => setIsOpen(false)}>{t('navbar.collections')}</a>
          <a href="#gallery" className="mobile-link" onClick={() => setIsOpen(false)}>{t('navbar.gallery')}</a>
          <a href="#contact" className="mobile-link" onClick={() => setIsOpen(false)}>{t('navbar.contact')}</a>
          <div className="mobile-lang-wrapper">
             <button onClick={toggleLanguage} className="mobile-lang-btn">
               {i18n.language === 'en' ? '한국어' : 'English'}
             </button>
          </div>
        </div>
      )}
    </>
  );
}
