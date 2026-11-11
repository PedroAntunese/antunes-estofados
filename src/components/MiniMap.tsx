import { business } from '../data/business';
import { Icon } from './Icon';

/** Cartão compacto com mapa do Google; o cartão inteiro abre o Google Maps. */
export function MiniMap({ className = '' }: { className?: string }) {
  const { address: a } = business;
  return (
    <a
      className={`minimap ${className}`}
      href={business.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir localização da ${business.name} no Google Maps: ${a.street}, ${a.district}, ${a.city}`}
    >
      <div className="minimap__map">
        <iframe
          title={`Mini mapa: ${business.name}`}
          src={business.mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          tabIndex={-1}
          aria-hidden="true"
        />
      </div>
      <div className="minimap__body">
        <span className="minimap__pin">
          <Icon name="pin" size={20} />
        </span>
        <span className="minimap__text">
          <strong>Estamos aqui</strong>
          <span>
            {a.street} – {a.district}, {a.city}
          </span>
        </span>
        <Icon name="arrow" size={18} className="minimap__arrow" />
      </div>
    </a>
  );
}
