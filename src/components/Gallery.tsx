import { ImagePlaceholder } from './ImagePlaceholder';

// Quando as fotos estiverem prontas, coloque-as em /public/fotos
// e preencha `src`, por exemplo: src: '/fotos/sofa-antes.jpg'
const items: { label: string; src?: string }[] = [
  { label: 'Sofá: antes' },
  { label: 'Sofá: depois' },
  { label: 'Poltrona reformada' },
  { label: 'Capas para área externa' },
  { label: 'Banco automotivo' },
  { label: 'Almofadas sob medida' },
];

export function Gallery() {
  return (
    <section id="trabalhos" className="section section--tinted">
      <div className="container">
        <header className="section__head">
          <p className="eyebrow">Trabalhos</p>
          <h2>Alguns dos nossos trabalhos</h2>
          <p>Veja o antes e depois de peças que passaram pela nossa oficina.</p>
        </header>
        <ul className="gallery">
          {items.map((it) => (
            <li key={it.label}>
              <ImagePlaceholder label={it.label} src={it.src} ratio="4 / 3" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
