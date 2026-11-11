import { useEffect, useState } from 'react';
import { business } from '../data/business';
import { formatRange, getOpenStatus } from '../data/hours';
import { Icon } from './Icon';

export function Contact() {
  const [status, setStatus] = useState(() => getOpenStatus());
  useEffect(() => {
    const id = window.setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  const { address: a } = business;

  return (
    <section id="contato" className="section">
      <div className="container">
        <header className="section__head">
          <p className="eyebrow">Contato e localização</p>
          <h2>Venha nos visitar ou chame no WhatsApp</h2>
        </header>

        <div className="contact">
          <div className="contact__info">
            <div className="card info">
              <span className="info__icon"><Icon name="pin" /></span>
              <div>
                <h3>Endereço</h3>
                <address>
                  {a.street} – {a.district}
                  <br />
                  {a.city} – {a.state}, CEP {a.zip}
                </address>
                <a
                  className="link-arrow"
                  href={business.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Como chegar <Icon name="arrow" size={18} />
                </a>
              </div>
            </div>

            <div className="card info">
              <span className="info__icon"><Icon name="phone" /></span>
              <div>
                <h3>Telefone e WhatsApp</h3>
                <p>
                  <a className="info__phone" href={business.phoneHref}>
                    {business.phoneDisplay}
                  </a>
                </p>
                <div className="info__actions">
                  <a
                    className="btn btn--whatsapp"
                    href={business.whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="whatsapp" size={20} /> WhatsApp
                  </a>
                  <a className="btn btn--ghost" href={business.phoneHref}>
                    <Icon name="phone" size={20} /> Ligar
                  </a>
                </div>
              </div>
            </div>

            <div className="card info">
              <span className="info__icon"><Icon name="clock" /></span>
              <div>
                <h3>Horário de atendimento</h3>
                <p className={`status ${status.isOpen ? 'status--open' : 'status--closed'}`}>
                  {status.label}
                </p>
                <table className="hours">
                  <tbody>
                    {business.hours.map((h) => (
                      <tr key={h.day}>
                        <th scope="row">{h.label}</th>
                        <td>{formatRange(h)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="contact__map">
            <iframe
              title={`Mapa: ${business.name}, ${a.street}, ${a.city}`}
              src={business.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
