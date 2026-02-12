import { useTranslation } from 'react-i18next';
import './Hero.css';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <header className="hero-section">
      {/* Background Image - Using <img> with exact properties */}
      <div className="hero-bg-wrapper">
        <img 
          src="/assets/gallery/gallery3.webp" 
          alt="Amaranto Jewelry Store" 
          className="hero-bg-image"
        />
      </div>
      
      {/* Texture Overlay */}
      <div className="hero-texture"></div>
      
      {/* Content */}
      <div className="hero-content">
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
        <h1 className="hero-title">
          {t('hero.title_1')}<br />
          <span className="hero-title-italic">{t('hero.title_2')}</span>
        </h1>
        <p className="hero-description">
          {t('hero.description')}
        </p>
        <div className="hero-buttons">
          <a href="#collections" className="btn-primary">{t('hero.explore')}</a>
          <a href="#contact" className="btn-secondary">{t('hero.book')}</a>
        </div>
      </div>
    </header>
  );
}
