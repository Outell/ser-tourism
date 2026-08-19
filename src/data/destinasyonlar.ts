// src/data/destinasyonlar.ts
//
// Mesafe haritasındaki düğümler.
//
// x / y  : SVG içindeki konum (viewBox 700x452, merkez 350,390)
//          Gerçek yön doğru, gerçek mesafe değildir.
// saga   : etiket düğümün sağında mı yazılsın

import type { Dil } from '../lib/tipler';

export interface Destinasyon {
  id: string;
  ad: Record<Dil, string>;
  sure: number;
  konaklamali: boolean;
  haritadaGoster: boolean;
  x: number;
  y: number;
  saga: boolean;
}

export const destinasyonlar: Destinasyon[] = [
  {
    id: 'kas',
    ad: { tr: 'Kaş', en: 'Kaş', ru: 'Каш', de: 'Kaş', pl: 'Kaş', ro: 'Kaş' },
    sure: 3.5, konaklamali: false, haritadaGoster: true,
    x: 86, y: 340, saga: true,
  },
  {
    id: 'demre',
    ad: { tr: 'Demre', en: 'Demre', ru: 'Демре', de: 'Demre', pl: 'Demre', ro: 'Demre' },
    sure: 2.5, konaklamali: false, haritadaGoster: true,
    x: 150, y: 316, saga: true,
  },
  {
    id: 'kumluca',
    ad: { tr: 'Kumluca', en: 'Kumluca', ru: 'Кумлуджа', de: 'Kumluca', pl: 'Kumluca', ro: 'Kumluca' },
    sure: 1.8, konaklamali: false, haritadaGoster: true,
    x: 220, y: 292, saga: false,
  },
  {
    id: 'kemer',
    ad: { tr: 'Kemer', en: 'Kemer', ru: 'Кемер', de: 'Kemer', pl: 'Kemer', ro: 'Kemer' },
    sure: 1, konaklamali: false, haritadaGoster: true,
    x: 282, y: 256, saga: false,
  },
  {
    id: 'konyaalti',
    ad: { tr: 'Konyaaltı', en: 'Konyaaltı', ru: 'Коньяалты', de: 'Konyaaltı', pl: 'Konyaaltı', ro: 'Konyaaltı' },
    sure: 0.3, konaklamali: false, haritadaGoster: true,
    x: 344, y: 236, saga: false,
  },
  {
    id: 'muratpasa',
    ad: { tr: 'Muratpaşa', en: 'Muratpaşa', ru: 'Муратпаша', de: 'Muratpaşa', pl: 'Muratpaşa', ro: 'Muratpaşa' },
    sure: 0.2, konaklamali: false, haritadaGoster: true,
    x: 386, y: 250, saga: true,
  },
  {
    id: 'aksu',
    ad: { tr: 'Aksu', en: 'Aksu', ru: 'Аксу', de: 'Aksu', pl: 'Aksu', ro: 'Aksu' },
    sure: 0.4, konaklamali: false, haritadaGoster: true,
    x: 430, y: 274, saga: true,
  },
  {
    id: 'serik',
    ad: { tr: 'Serik', en: 'Serik', ru: 'Серик', de: 'Serik', pl: 'Serik', ro: 'Serik' },
    sure: 0.8, konaklamali: false, haritadaGoster: true,
    x: 486, y: 306, saga: true,
  },
  {
    id: 'manavgat',
    ad: { tr: 'Manavgat', en: 'Manavgat', ru: 'Манавгат', de: 'Manavgat', pl: 'Manavgat', ro: 'Manavgat' },
    sure: 1.2, konaklamali: false, haritadaGoster: true,
    x: 560, y: 336, saga: false,
  },
  {
    id: 'alanya',
    ad: { tr: 'Alanya', en: 'Alanya', ru: 'Аланья', de: 'Alanya', pl: 'Alanya', ro: 'Alanya' },
    sure: 2, konaklamali: false, haritadaGoster: true,
    x: 632, y: 368, saga: false,
  },
];
