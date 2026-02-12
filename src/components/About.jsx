import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Text Content */}
        <div className="about-content">
          <span className="about-label">OUR PHILOSOPHY</span>
          <h2 className="about-title">
            The Ornate Art of the<br />
            Jewelry Box.
          </h2>
          <p className="about-description">
            Inspired by our signature ivory-embossed galleries, Amaranto
            offers a serene environment where the brilliance of 24k gold
            and pearls can be appreciated in silence.
          </p>
          
          <div className="about-features">
            <div className="feature-row">
              <span className="feature-line"></span>
              <span className="feature-text">BAROQUE INTERIOR DESIGN</span>
            </div>
            <div className="feature-row">
              <span className="feature-line"></span>
              <span className="feature-text">HAND-SELECTED DIAMONDS</span>
            </div>
            <div className="feature-row">
              <span className="feature-line"></span>
              <span className="feature-text">BESPOKE HERITAGE PIECES</span>
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
