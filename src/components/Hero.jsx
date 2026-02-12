import './Hero.css';

export default function Hero() {
  return (
    <header className="hero-section">
      {/* Background Image - Using <img> with exact properties */}
      <div className="hero-bg-wrapper">
        <img 
          src="/assets/gallery/gallery3.webp"  // ← Fixed quotes
          alt="Amaranto Jewelry Store" 
          className="hero-bg-image"
        />
      </div>
      
      {/* Texture Overlay */}
      <div className="hero-texture"></div>
      
      {/* Content */}
      <div className="hero-content">
        <p className="hero-subtitle">CHEONAN · BESPOKE · FINE JEWELRY</p>
        <h1 className="hero-title">
          Classic<br />
          <span className="hero-title-italic">Reimagined.</span>
        </h1>
        <p className="hero-description">
          Where the ornate beauty of European Baroque meets modern Korean<br />
          craftsmanship. Discover your legacy in our private Cheonan-si sanctuary.
        </p>
        <div className="hero-buttons">
          <a href="#collections" className="btn-primary">EXPLORE COLLECTIONS</a>
          <a href="#contact" className="btn-secondary">BOOK A VIEWING</a>
        </div>
      </div>
    </header>
  );
}
