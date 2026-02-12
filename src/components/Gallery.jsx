import { useTranslation } from 'react-i18next';
import './Gallery.css';

const galleryImages = [
  "/assets/gallery/gallery1.webp",
  "/assets/gallery/gallery2.webp", 
  "/assets/gallery/gallery3.webp"
];

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        {/* Header */}
        <div className="gallery-header">
          <h2 className="gallery-title">{t('gallery.title')}</h2>
          <p className="gallery-subtitle">{t('gallery.subtitle')}</p>
        </div>

        {/* 3-Column Image Grid */}
        <div className="gallery-grid">
          {galleryImages.map((src, index) => (
            <div key={index} className="gallery-item">
              <div className="gallery-image-wrapper">
                <div 
                  className="gallery-image" 
                  style={{backgroundImage: `url(${src})`}}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
