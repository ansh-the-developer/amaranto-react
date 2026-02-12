import './Contact.css';

export default function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          {/* Left Column - Visit Us */}
          <div className="contact-left">
            <h2 className="contact-title">Visit Us.</h2>
            
            <div className="contact-details">
              <div className="contact-group">
                <span className="contact-label">THE BOUTIQUE</span>
                <p className="contact-address">
                  Amaranto Jewelry<br />
                  213 Baekseok-ro, Seobuk-gu<br />
                  Cheonan-si, Chungcheongnam-do<br />
                  South Korea, 31094
                </p>
              </div>
              
              <div className="contact-group">
                <span className="contact-label">DIRECT CONTACT</span>
                <a href="tel:+821043764284" className="contact-phone">
                  +82 10 4376 4284
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Hours */}
          <div className="contact-right">
            <h3 className="hours-title">CONCIERGE HOURS</h3>
            
            <div className="hours-table">
              <div className="hours-row">
                <span className="hours-day">Monday - Saturday</span>
                <span className="hours-time">10:00 - 20:00</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">Sunday</span>
                <span className="hours-time">By Appointment</span>
              </div>
            </div>
            
            <p className="hours-note">
              We recommend booking a private consultation for bridal selections or custom 
              design inquiries to ensure our dedicated attention.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <h3 className="footer-title">AMARANTO</h3>
            <p className="footer-subtitle">BESPOKE JEWELRY GALLERY</p>
          </div>
          <p className="footer-copy">
            © 2026 Amaranto. All Rights Reserved. Cheonan, South Korea.
            Made by Cyber Alliance India
          </p>
        </div>
      </footer>
    </>
  );
}
