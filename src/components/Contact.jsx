import { useTranslation } from "react-i18next";
import "./Contact.css";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <section id="contact" className="contact-wrapper">
        <div className="contact-container">
          {/* Main Headline */}
          <div className="contact-header">
            <h2 className="main-title">
              {t("contact.title", "Let's find your")}
              <span className="italic-accent">
                {" "}
                {t("contact.match", "perfect match.")}
              </span>
            </h2>
          </div>

          <div className="contact-content">
            {/* LEFT CARD (White Box Style) */}
            <div className="info-card">
              <h3 className="card-title">
                {t("contact.visit_title", "Visit Our Gallery")}
              </h3>

              <div className="info-block">
                <span className="info-brand">Amaranto Jewelry</span>
                <p className="info-text">
                  213 Ssangyong-daero, Seobuk-gu
                  <br />
                  Cheonan-si, Chungcheongnam-do
                  <br />
                  South Korea, 31094
                </p>
              </div>

              <div className="hours-block">
                <span className="label-small">
                  {t("contact.hours_label", "HOURS")}
                </span>
                <div className="hours-list">
                  <p>
                    {t("contact.hours_week", "Tue - Sun: 10:00 AM - 10:00 PM")}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SECTION (Contact Details + Map) */}
            <div className="map-section">
              {/* Contact Numbers Row */}
              <div className="details-row">
                <div className="detail-item">
                  <span className="label-small">
                    {t("contact.general_inquiries", "GENERAL INQUIRIES")}
                  </span>
                  <a href="tel:+821043764284" className="phone-large">
                    +82 10 4376 4284
                  </a>
                  <p className="sub-text">
                    {t("contact.store_direct", "Store Direct")}: 041-555-6009
                  </p>
                </div>

                <div className="detail-item">
                  <span className="label-small">
                    {t("contact.private_viewing", "PRIVATE VIEWING")}
                  </span>
                  <p className="desc-text">
                    {t(
                      "contact.private_desc",
                      "We offer private consultations for engagement and custom designs. Please call to schedule an appointment.",
                    )}
                  </p>
                </div>
              </div>

              {/* Map Container */}
              <div className="map-container">
                <iframe
                  title="Amaranto Jewelry Location"
                  className="google-map"
                  src="https://maps.google.com/maps?q=213+Ssangyong-daero,+Seobuk-gu,+Cheonan-si,+Chungcheongnam-do,+South+Korea&t=&z=18&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Kept Intact) */}
      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <h3 className="footer-brand">AMARANTO</h3>
            <p className="footer-subtitle">
              {t("contact.footer_subtitle", "TIMELESS ELEGANCE")}
            </p>
          </div>

          <div className="footer-copy-block">
            <p className="footer-copy">{t("contact.footer_copy")}</p>
            <p className="footer-maker">
              {t("contact.made_by")}{" "}
              <a
                href="https://cyberalliance.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-link"
              >
                CYBER ALLIANCE INDIA
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
