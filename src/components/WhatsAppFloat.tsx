import { business } from '../data/business';
import { Icon } from './Icon';

export function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={business.whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
    >
      <Icon name="whatsapp" size={30} />
    </a>
  );
}
