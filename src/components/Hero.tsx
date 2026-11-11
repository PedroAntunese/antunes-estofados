import { business } from '../data/business';
import { Icon } from './Icon';
import { ImagePlaceholder } from './ImagePlaceholder';
import { MiniMap } from './MiniMap';

export function Hero() {
  const { rating } = business;
  return (
    <section id="inicio" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">
            <Icon name="pin" size={16} /> {business.address.district}, {business.city} –{' '}
            {business.state}
          </p>
          <h1>
            Seu estofado com <em>cara de novo</em>, sem precisar trocar o móvel.
          </h1>
          <p className="lead">
            Reforma, venda e fabricação de sofás, poltronas, cadeiras e almofadas. Também fazemos
            capas para móveis de área externa e tapeçaria para carros e charretes. Mande uma foto
            e receba seu orçamento.
          </p>
          <div className="hero__actions">
            <a
              className="btn btn--whatsapp btn--lg"
              href={business.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" /> Orçamento pelo WhatsApp
            </a>
            <a className="btn btn--ghost btn--lg" href="#servicos">
              Ver serviços
            </a>
          </div>
          <a className="rating" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">
            <span className="rating__stars" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => (
                <Icon key={i} name="star" size={18} />
              ))}
            </span>
            <span>
              <strong>{rating.value.toFixed(1).replace('.', ',')}</strong> no {rating.source} ·{' '}
              {rating.count} avaliações
            </span>
          </a>
        </div>
        <div className="hero__media">
          <ImagePlaceholder label="Foto principal: sofá reformado" ratio="4 / 5" />
          <MiniMap className="hero__minimap" />
        </div>
      </div>
    </section>
  );
}
