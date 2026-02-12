import { useTranslation } from 'react-i18next';
import './About.css';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Text Content */}
        <div className="about-content">
          <span className="about-label">{t('about.label')}</span>
          <h2 className="about-title">
            {t('about.title_1')}<br />
            {t('about.title_2')}
          </h2>
          <p className="about-description">
            {t('about.description')}
          </p>
          
          <div className="about-features">
            <div className="feature-row">
              <span className="feature-line"></span>
              <span className="feature-text">{t('about.feature_1')}</span>
            </div>
            <div className="feature-row">
              <span className="feature-line"></span>
              <span className="feature-text">{t('about.feature_2')}</span>
            </div>
            <div className="feature-row">
              <span className="feature-line"></span>
              <span className="feature-text">{t('about.feature_3')}</span>
            </div>
          </div>
        </div>

        {/* Image Content - Exact White Border Frame */}
        <div className="about-image-wrapper">
          <div className="image-frame">
            <img 
              src="/assets/about.webp" 
              alt="Amaranto Interior" 
              className="about-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
