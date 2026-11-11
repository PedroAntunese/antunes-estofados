import { useEffect, useState } from 'react';
import { business } from '../data/business';
import { Icon } from './Icon';

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#trabalhos', label: 'Trabalhos' },
  { href: '#contato', label: 'Contato' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#inicio" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__mark" aria-hidden="true">A</span>
          <span className="brand__text">
            <strong>Antunes</strong>
            <small>Estofados · Tapeçaria</small>
          </span>
        </a>

        <nav id="menu" className={`nav ${open ? 'nav--open' : ''}`} aria-label="Principal">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn btn--whatsapp nav__cta"
            href={business.whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" size={20} /> Pedir orçamento
          </a>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  );
}
