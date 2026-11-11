import { business } from '../data/business';
import { Icon } from './Icon';

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section section--tinted">
      <div className="container">
        <header className="section__head">
          <p className="eyebrow">Como funciona</p>
          <h2>Orçamento rápido, sem sair de casa</h2>
        </header>
        <ol className="steps">
          {business.steps.map((step, i) => (
            <li key={step.title} className="step">
              <span className="step__num">{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="center">
          <a
            className="btn btn--whatsapp btn--lg"
            href={business.whatsappUrl('Olá! Quero enviar fotos do meu estofado para orçamento.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" /> Enviar fotos agora
          </a>
        </div>
      </div>
    </section>
  );
}
