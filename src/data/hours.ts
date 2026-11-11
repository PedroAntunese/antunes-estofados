import { business, type DayHours } from './business';

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

const fmt = (hhmm: string) => hhmm.replace(':00', 'h').replace(':', 'h');

export function formatRange(d: DayHours) {
  return d.open && d.close ? `${fmt(d.open)} às ${fmt(d.close)}` : 'Fechado';
}

export interface OpenStatus {
  isOpen: boolean;
  label: string;
}

/** Status de funcionamento no fuso de Porto Feliz (America/Sao_Paulo). */
export function getOpenStatus(now = new Date()): OpenStatus {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Sao_Paulo',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = weekdays.indexOf(get('weekday'));
  const minutes = Number(get('hour')) * 60 + Number(get('minute'));

  const today = business.hours.find((h) => h.day === day);
  if (today?.open && today.close) {
    const open = toMinutes(today.open);
    const close = toMinutes(today.close);
    if (minutes >= open && minutes < close) {
      return { isOpen: true, label: `Aberto agora · fecha às ${fmt(today.close)}` };
    }
    if (minutes < open) {
      return { isOpen: false, label: `Fechado · abre hoje às ${fmt(today.open)}` };
    }
  }

  for (let i = 1; i <= 7; i++) {
    const next = business.hours.find((h) => h.day === (day + i) % 7);
    if (next?.open) {
      const when = i === 1 ? 'amanhã' : next.label.split('-')[0].toLowerCase();
      return { isOpen: false, label: `Fechado · abre ${when} às ${fmt(next.open)}` };
    }
  }
  return { isOpen: false, label: 'Fechado' };
}
