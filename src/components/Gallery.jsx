import './Gallery.css';

const galleryImages = [
  "/assets/gallery/gallery1.webp",
  "/assets/gallery/gallery2.webp", 
  "/assets/gallery/gallery3.webp"
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        {/* Header */}
        <div className="gallery-header">
          <h2 className="gallery-title">The Gallery</h2>
          <p className="gallery-subtitle">A Glimpse of Elegance</p>
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
