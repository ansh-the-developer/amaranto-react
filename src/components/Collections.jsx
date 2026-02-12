import { useTranslation } from 'react-i18next';
import './Collections.css';

export default function Collections() {
  const { t } = useTranslation();

  // Defined inside component to react to language changes
  const collectionItems = [
    {
      id: 1,
      title: t('collections.items.bridal.title'),
      subtitle: t('collections.items.bridal.subtitle'),
      image: "/assets/collections/c1.webp"
    },
    {
      id: 2,
      title: t('collections.items.gold.title'),
      subtitle: t('collections.items.gold.subtitle'),
      image: "/assets/collections/c2.avif"
    },
    {
      id: 3,
      title: t('collections.items.ocean.title'),
      subtitle: t('collections.items.ocean.subtitle'),
      image: "/assets/collections/c3.avif"
    },
    {
      id: 4,
      title: t('collections.items.heritage.title'),
      subtitle: t('collections.items.heritage.subtitle'),
      image: "/assets/collections/c4.jpg"
    }
  ];

  return (
    <section id="collections" className="collections-section">
      <div className="collections-container">
        {/* Header */}
        <div className="collections-header">
          <div className="header-left">
            <span className="collections-label">{t('collections.label')}</span>
            <h2 className="collections-title">{t('collections.title')}</h2>
          </div>
          <div className="header-right">
            <p className="collections-description">
              {t('collections.description')}
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="collections-grid">
          {collectionItems.map((item) => (
            <div key={item.id} className="collection-card">
              <div className="card-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="card-image" 
                />
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-subtitle">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
