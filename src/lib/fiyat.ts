import type { Dil } from './tipler';

const LOCALE: Record<Dil, string> = {
  tr: 'tr-TR',
  en: 'en-GB',
  ru: 'ru-RU',
  de: 'de-DE',
  pl: 'pl-PL',
  ro: 'ro-RO',
};

export function euroTutar(deger: number, dil: Dil): string {
  return new Intl.NumberFormat(LOCALE[dil], {
    minimumFractionDigits: Number.isInteger(deger) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(deger);
}
