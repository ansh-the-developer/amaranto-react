import { useTranslation } from 'react-i18next';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const { t } = useTranslation();

  return (
    <a 
      href="https://wa.me/821082724284" 
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Speak with a consultant"
    >
      <span className="whatsapp-text">{t('whatsapp.text')}</span>
      <div className="icon-circle">
        <svg 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="whatsapp-icon"
        >
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
      </div>
    </a>
  );
}
