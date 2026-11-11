/**
 * Todas as informações da loja ficam aqui.
 * Para alterar telefone, endereço, horários, serviços etc., edite apenas este arquivo.
 *
 * Fonte: perfil "ANTUNES ESTOFADOS" no Google Maps (consultado em 11/11/2026)
 * e página "Tapeçaria Antunes" no Facebook. Itens marcados com "CONFIRMAR"
 * precisam ser validados com a loja.
 */

export interface DayHours {
  /** 0 = domingo ... 6 = sábado (igual a Date.getDay()) */
  day: number;
  label: string;
  /** null = fechado */
  open: string | null;
  close: string | null;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'sofa' | 'chair' | 'cushion' | 'ruler' | 'car' | 'wagon' | 'store' | 'sun';
}

export interface Testimonial {
  name: string;
  text: string;
}

export interface Faq {
  question: string;
  answer: string;
}

const whatsappNumber = '5515997589870'; // CONFIRMAR se (15) 99758-9870 é WhatsApp

export const business = {
  name: 'Antunes Estofados',
  altName: 'Tapeçaria Antunes',
  tagline: 'Reforma, venda e fabricação de estofados em Porto Feliz',
  city: 'Porto Feliz',
  state: 'SP',

  address: {
    street: 'Rua João Portela Sobrinho, 616',
    district: 'Centro',
    city: 'Porto Feliz',
    state: 'SP',
    zip: '18540-000',
  },
  geo: { lat: -23.2218439, lng: -47.5235755 },
  mapsUrl:
    'https://www.google.com/maps/place/ANTUNES+ESTOFADOS/@-23.2218439,-47.5235755,17z/data=!4m6!3m5!1s0x94c5ffe62a34e80b:0xe26bad7bf54912d6!8m2!3d-23.2218439!4d-47.5235755',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=-23.2218439,-47.5235755&destination_place_id=ANTUNES+ESTOFADOS',
  mapEmbedUrl: 'https://www.google.com/maps?q=-23.2218439,-47.5235755&z=17&output=embed',

  phoneDisplay: '(15) 99758-9870',
  phoneHref: 'tel:+5515997589870',
  whatsappNumber,
  whatsappUrl: (message = 'Olá! Vim pelo site e gostaria de um orçamento.') =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,

  social: {
    facebook: 'https://www.facebook.com/people/Tape%C3%A7aria-Antunes/100057728977009/',
    instagram: '', // CONFIRMAR: preencher com o @ do Instagram, se houver
  },

  rating: { value: 5.0, count: 21, source: 'Google' },

  hours: [
    { day: 1, label: 'Segunda-feira', open: '08:00', close: '17:00' },
    { day: 2, label: 'Terça-feira', open: '08:00', close: '17:00' },
    { day: 3, label: 'Quarta-feira', open: '08:00', close: '17:00' },
    { day: 4, label: 'Quinta-feira', open: '08:00', close: '17:00' },
    { day: 5, label: 'Sexta-feira', open: '08:00', close: '17:00' },
    { day: 6, label: 'Sábado', open: '08:00', close: '12:00' },
    { day: 0, label: 'Domingo', open: null, close: null },
  ] satisfies DayHours[],

  services: [
    {
      id: 'sofas',
      title: 'Reforma de sofás',
      description:
        'Troca de tecido, espuma, molas e percintas. Seu sofá com cara de novo, aproveitando a estrutura que já é boa.',
      icon: 'sofa',
    },
    {
      id: 'venda',
      title: 'Venda de estofados',
      description:
        'Sofás, poltronas e outros estofados novos à venda, com qualidade e preço justo, da loja direto para a sua casa.',
      icon: 'store',
    },
    {
      id: 'area-externa',
      title: 'Capas para área externa',
      description:
        'Revestimento e capas para móveis de área externa, como espreguiçadeiras, cadeiras de piscina e almofadas de varanda, com tecidos resistentes ao sol e à chuva.',
      icon: 'sun',
    },
    {
      id: 'poltronas',
      title: 'Poltronas e cadeiras',
      description:
        'Reestofamento de poltronas, cadeiras de jantar, banquetas e puffs, com acabamento cuidadoso.',
      icon: 'chair',
    },
    {
      id: 'almofadas',
      title: 'Almofadas e assentos',
      description:
        'Confecção de almofadas, assentos e encostos novos, com espuma na densidade certa para o seu uso.',
      icon: 'cushion',
    },
    {
      id: 'sob-medida',
      title: 'Estofados sob medida',
      description:
        'Fabricação de estofados no tamanho e no estilo que você precisa, com escolha de tecidos e cores.',
      icon: 'ruler',
    },
    {
      id: 'autos',
      title: 'Tapeçaria automotiva',
      description: 'Bancos, forrações e revestimentos para carros e utilitários.',
      icon: 'car',
    },
    {
      id: 'charretes',
      title: 'Charretes',
      description: 'Estofamento e tapeçaria para charretes, mantendo a tradição do interior.',
      icon: 'wagon',
    },
  ] satisfies Service[],

  steps: [
    {
      title: 'Mande uma foto',
      text: 'Envie fotos do seu móvel pelo WhatsApp e conte o que você quer mudar.',
    },
    {
      title: 'Receba o orçamento',
      text: 'Avaliamos o serviço, ajudamos na escolha do tecido e passamos o valor e o prazo.',
    },
    {
      title: 'Seu estofado renovado',
      text: 'Fazemos o serviço com capricho e combinamos a retirada ou a entrega.',
    },
  ],

  differentials: [
    'Nota 5,0 no Google',
    'Preço justo e orçamento sem compromisso',
    'Atendimento próximo, do orçamento à entrega',
    'Grande variedade de tecidos',
  ],

  // Trechos de avaliações públicas do Google. CONFIRMAR com a loja antes de publicar.
  testimonials: [
    {
      name: 'Renata M.',
      text: 'Consertou meu sofá e ficou maravilhoso. Ótimo trabalho, rápido e barato, recomendo a todos!',
    },
    {
      name: 'Andressa B.',
      text: 'Ótimo atendimento, desde a venda até a entrega! Valor justo e produto de qualidade!',
    },
    {
      name: 'Thiago F.',
      text: 'Excelente atendimento e ótima qualidade. Estão de parabéns.',
    },
  ] satisfies Testimonial[],

  faqs: [
    {
      question: 'Como faço um orçamento?',
      answer:
        'O jeito mais rápido é mandar fotos do móvel pelo WhatsApp. Se preferir, você também pode visitar a loja no Centro de Porto Feliz.',
    },
    {
      question: 'Vale mais a pena reformar ou comprar um sofá novo?',
      answer:
        'Na maioria dos casos a estrutura do móvel ainda é boa e só o tecido e a espuma estão gastos. Reformar costuma sair mais em conta e deixa o móvel com cara de novo.',
    },
    {
      question: 'Vocês vendem estofados novos?',
      answer:
        'Sim. Além das reformas, vendemos sofás, poltronas e outros estofados. Chame no WhatsApp para ver os modelos disponíveis ou visite a loja.',
    },
    {
      question: 'Fazem capas para móveis de área externa?',
      answer:
        'Sim. Fazemos revestimento e capas sob medida para móveis de área externa, com tecidos próprios para aguentar sol e chuva.',
    },
    {
      question: 'Posso escolher o tecido?',
      answer:
        'Sim. Mostramos as opções de tecidos e cores e ajudamos a escolher o mais adequado para o seu uso, como casa com crianças ou animais.',
    },
    {
      question: 'Vocês buscam e entregam o móvel?',
      answer: 'Consulte pelo WhatsApp a retirada e a entrega para o seu endereço.', // CONFIRMAR
    },
  ] satisfies Faq[],
};

export type Business = typeof business;
