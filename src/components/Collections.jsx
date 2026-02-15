import { useTranslation } from 'react-i18next';
import './Collections.css';

export default function Collections() {
  const { t } = useTranslation();

  // Defined inside component to react to language changes
  const collectionItems = [
    {
      id: 1,
      title: t('collections.items.ring.title', 'Rings'), // 반지
      // subtitle: t('collections.items.bridal.subtitle', 'Bridal Collection'),
      image: "/assets/collections/n1.jpeg"
    },
    {
      id: 2,
      title: t('collections.items.bracelet.title', 'Bracelets'), // 팔찌 (Fixed spelling from 팔지)
      // subtitle: t('collections.items.gold.subtitle', 'Pure Gold'),
      image: "/assets/collections/n2.jpeg"
    },
    {
      id: 3,
      title: t('collections.items.necklace.title', 'Necklaces'), // 목걸이
      // subtitle: t('collections.items.ocean.subtitle', 'Ocean Pearls'),
      image: "/assets/collections/n3.jpeg"
    },
    {
      id: 4,
      title: t('collections.items.earring.title', 'Earrings'), // 귀걸이
      // subtitle: t('collections.items.heritage.subtitle', 'Heritage Design'),
      image: "/assets/collections/n4.jpeg"
    }
  ];

  return (
    <section id="collections" className="collections-section">
      <div className="collections-container">
        {/* Header */}
        <div className="collections-header">
          <div className="header-left">
            <span className="collections-label">{t('collections.label', 'THE COLLECTION')}</span>
            <h2 className="collections-title">{t('collections.title', 'Curated Selection')}</h2>
          </div>
          <div className="header-right">
            <p className="collections-description">
              {t('collections.description', 'Discover our handpicked selection of fine jewelry, crafted with precision and elegance.')}
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
                  loading="lazy" 
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
