import { useTranslation } from 'react-i18next';
import './Contact.css';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          
          {/* LEFT COLUMN - INFO */}
          <div className="contact-left">
            <h2 className="contact-title">{t('contact.visit_title', 'Visit Us.')}</h2>
            
            <div className="contact-details">
              
              {/* Address Block */}
              <div className="contact-group">
                <span className="contact-label">{t('contact.boutique_label', 'THE BOUTIQUE')}</span>
                <p className="contact-address">
                  Amaranto Jewelry<br/>
                  213 Ssangyong-daero, Seobuk-gu<br/>
                  Cheonan-si, Chungcheongnam-do<br/>
                  South Korea, 31094
                </p>
              </div>
              
              {/* Phone Block */}
              <div className="contact-group">
                <span className="contact-label">{t('contact.contact_label', 'DIRECT CONTACT')}</span>
                <a href="tel:+821043764284" className="contact-phone">
                  +82 10 4376 4284
                </a>
              </div>

              {/* MAP EMBED - EXACT LOCATION (213 Ssangyong-daero) */}
              <div className="contact-map-wrapper">
                <iframe 
                  title="Amaranto Jewelry Location"
                  className="contact-map"
                  // Updated query to match your provided link: 213 Ssangyong-daero
                  src="https://maps.google.com/maps?q=213+Ssangyong-daero,+Seobuk-gu,+Cheonan-si,+Chungcheongnam-do,+South+Korea&t=&z=18&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN - HOURS */}
          <div className="contact-right">
            <h3 className="hours-title">{t('contact.hours_title', 'CONCIERGE HOURS')}</h3>
            
            <div className="hours-table">
              <div className="hours-row">
                <span className="hours-day">{t('contact.mon_sat', 'Monday - Saturday')}</span>
                <span className="hours-time">10:00 - 20:00</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">{t('contact.sun', 'Sunday')}</span>
                <span className="hours-time">{t('contact.appointment', 'By Appointment')}</span>
              </div>
            </div>
            
            <p className="hours-note">
              {t('contact.note', 'We recommend booking a private consultation for bridal selections or custom design inquiries to ensure our dedicated attention.')}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <h3 className="footer-brand">AMARANTO</h3>
            <p className="footer-subtitle">{t('contact.footer_subtitle', 'TIMELESS ELEGANCE')}</p>
          </div>
          <p className="footer-copy">
            {t('contact.footer_copy', '© 2026 AMARANTO JEWELRY. ALL RIGHTS RESERVED.')}
          </p>
        </div>
      </footer>
    </>
  );
}
