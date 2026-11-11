import { business } from '../data/business';

export function Faq() {
  return (
    <section className="section section--tinted">
      <div className="container container--narrow">
        <header className="section__head">
          <p className="eyebrow">Dúvidas</p>
          <h2>Perguntas frequentes</h2>
        </header>
        <div className="faq">
          {business.faqs.map((f) => (
            <details key={f.question}>
              <summary>{f.question}</summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
