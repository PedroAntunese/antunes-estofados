import { business } from '../data/business';
import { Icon } from './Icon';

export function Testimonials() {
  const score = business.rating.value.toFixed(1).replace('.', ',');
  return (
    <section className="section">
      <div className="container">
        <header className="section__head">
          <p className="eyebrow">Avaliações</p>
          <h2>Quem já reformou, recomenda</h2>
          <p>
            Nota {score} com {business.rating.count} avaliações no {business.rating.source}.
          </p>
        </header>
        <ul className="testimonials">
          {business.testimonials.map((t) => (
            <li key={t.name} className="card testimonial">
              <span className="rating__stars" role="img" aria-label="5 estrelas">
                {Array.from({ length: 5 }, (_, i) => (
                  <Icon key={i} name="star" size={16} />
                ))}
              </span>
              <blockquote>“{t.text}”</blockquote>
              <p className="testimonial__name">{t.name}</p>
            </li>
          ))}
        </ul>
        <div className="center">
          <a className="link-arrow" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">
            Ver todas as avaliações no Google <Icon name="arrow" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
