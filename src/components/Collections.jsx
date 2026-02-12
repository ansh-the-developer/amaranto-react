import './Collections.css';

const collectionItems = [
  {
    id: 1,
    title: "Bridal & Solitaire",
    subtitle: "ENGAGEMENT & WEDDING",
    image: "/assets/collections/c1.webp"
  },
  {
    id: 2,
    title: "The Gold Line",
    subtitle: "DAILY LUXURY",
    image: "/assets/collections/c2.avif"
  },
  {
    id: 3,
    title: "Ocean Baroque",
    subtitle: "NATURAL PEARLS",
    image: "/assets/collections/c3.avif"
  },
  {
    id: 4,
    title: "Heritage Custom",
    subtitle: "ONE-OF-A-KIND",
    image: "/assets/collections/c4.jpg"
  }
];

export default function Collections() {
  return (
    <section id="collections" className="collections-section">
      <div className="collections-container">
        {/* Header */}
        <div className="collections-header">
          <div className="header-left">
            <span className="collections-label">CURATED SERIES</span>
            <h2 className="collections-title">The Collections</h2>
          </div>
          <div className="header-right">
            <p className="collections-description">
              From daily essentials in 18k gold to once-in-a-lifetime 
              high jewelry pieces featuring GIA certified stones.
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
