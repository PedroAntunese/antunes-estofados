import { business } from '../data/business';
import { Icon } from './Icon';

export function Footer() {
  const { address: a, social } = business;
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="footer__brand">{business.name}</p>
          <p>{business.tagline}.</p>
        </div>
        <div>
          <p className="footer__title">Endereço</p>
          <p>
            {a.street} – {a.district}
            <br />
            {a.city} – {a.state}, {a.zip}
          </p>
        </div>
        <div>
          <p className="footer__title">Fale com a gente</p>
          <p>
            <a href={business.phoneHref}>{business.phoneDisplay}</a>
          </p>
          <div className="social">
            <a
              href={business.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <Icon name="whatsapp" />
            </a>
            {social.facebook && (
              <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Icon name="facebook" />
              </a>
            )}
            {social.instagram && (
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Icon name="instagram" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} {business.name} · {business.altName}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
