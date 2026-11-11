import { business } from '../data/business';
import { Icon } from './Icon';
import { ImagePlaceholder } from './ImagePlaceholder';

export function About() {
  return (
    <section id="sobre" className="section">
      <div className="container about">
        <div className="about__media">
          <ImagePlaceholder label="Foto da oficina ou da equipe" ratio="1 / 1" />
        </div>
        <div className="about__copy">
          <p className="eyebrow">Sobre nós</p>
          <h2>Capricho de tapeçaria no Centro de Porto Feliz</h2>
          <p>
            A {business.name}, também conhecida como {business.altName}, cuida de cada peça como
            se fosse nossa. A maioria dos móveis tem uma estrutura boa que vale a pena manter:
            trocando tecido, espuma e acabamento, eles ganham anos de vida por muito menos do que
            custaria um novo.
          </p>
          <p>
            Se a ideia for trocar de móvel, também vendemos estofados novos. E para quem tem
            varanda, piscina ou jardim, fazemos capas e revestimentos para móveis de área externa.
          </p>
          <ul className="checklist">
            {business.differentials.map((d) => (
              <li key={d}>
                <Icon name="check" size={20} /> {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
