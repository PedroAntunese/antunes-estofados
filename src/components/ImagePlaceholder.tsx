import { Icon } from './Icon';

interface Props {
  label: string;
  ratio?: string;
  src?: string;
}

/** Mostra a imagem se houver `src`; senão, um espaço reservado para a foto. */
export function ImagePlaceholder({ label, ratio = '4 / 3', src }: Props) {
  if (src) {
    return (
      <img className="media" src={src} alt={label} style={{ aspectRatio: ratio }} loading="lazy" />
    );
  }
  return (
    <div className="placeholder" style={{ aspectRatio: ratio }} role="img" aria-label={label}>
      <Icon name="image" size={32} />
      <span>{label}</span>
    </div>
  );
}
