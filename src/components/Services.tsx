import { business } from '../data/business';
import { Icon } from './Icon';

export function Services() {
  return (
    <section id="servicos" className="section">
      <div className="container">
        <header className="section__head">
          <p className="eyebrow">Serviços</p>
          <h2>O que fazemos</h2>
          <p>
            Do sofá da sala ao banco do carro: trabalho artesanal, materiais de qualidade e
            acabamento caprichado.
          </p>
        </header>
        <ul className="services">
          {business.services.map((s) => (
            <li key={s.id} className="card service">
              <span className="service__icon">
                <Icon name={s.icon} size={28} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
