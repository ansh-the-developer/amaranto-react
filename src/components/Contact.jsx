import { useTranslation } from 'react-i18next';
import './Contact.css';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          {/* Left Column - Visit Us */}
          <div className="contact-left">
            <h2 className="contact-title">{t('contact.visit_title')}</h2>
            
            <div className="contact-details">
              <div className="contact-group">
                <span className="contact-label">{t('contact.boutique_label')}</span>
                <p className="contact-address" style={{whiteSpace: 'pre-line'}}>
                  {t('contact.address')}
                </p>
              </div>
              
              <div className="contact-group">
                <span className="contact-label">{t('contact.contact_label')}</span>
                <a href="tel:+821043764284" className="contact-phone">
                  +82 10 4376 4284
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Hours */}
          <div className="contact-right">
            <h3 className="hours-title">{t('contact.hours_title')}</h3>
            
            <div className="hours-table">
              <div className="hours-row">
                <span className="hours-day">{t('contact.mon_sat')}</span>
                <span className="hours-time">10:00 - 20:00</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">{t('contact.sun')}</span>
                <span className="hours-time">{t('contact.appointment')}</span>
              </div>
            </div>
            
            <p className="hours-note">
              {t('contact.note')}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <h3 className="footer-title">AMARANTO</h3>
            <p className="footer-subtitle">{t('contact.footer_subtitle')}</p>
          </div>
          <p className="footer-copy" style={{whiteSpace: 'pre-line'}}>
            {t('contact.footer_copy')}
          </p>
        </div>
      </footer>
    </>
  );
}
