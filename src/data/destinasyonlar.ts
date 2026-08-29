// src/data/destinasyonlar.ts
//
// Mesafe haritasındaki düğümler.
//
// x / y  : SVG içindeki konum (viewBox 700x452, merkez 350,390)
//          Gerçek yön doğru, gerçek mesafe değildir.

import type { Dil } from '../lib/tipler';

export interface Destinasyon {
  id: string;
  ad: Record<Dil, string>;
  sure: number;
  konaklamali: boolean;
  haritadaGoster: boolean;
  x: number;
  y: number;
}

// x / y aşağıda `sure` (saat) değerine göre hesaplanır: merkezden uzaklık
// r = 78.40 + 48.29*√saat formülüyle 8 saatlik halkaya (r=215) oturacak
// şekilde ölçeklenir; böylece halka etiketleri (1 sa / 3 sa / 8 sa) ile
// noktaların merkeze uzaklığı gerçekten tutarlı olur — örn. Alanya (2 sa)
// artık Kaş'tan (3,5 sa) daha yakın görünür, eskiden tam tersiydi. Açılar,
// her düğümün gerçek etiket genişliğine göre (uzun isimler daha çok yer
// alır) yarım daireye normalize edilerek hesaplanır ki etiketler çakışmasın.
// Etiket metni MesafeHaritasi.astro içinde bu x/y'den (merkez, düğüm) ışını
// boyunca dışa doğru itilerek ortalanır — bkz. ETIKET_ITME orada.
export const destinasyonlar: Destinasyon[] = [
  {
    id: 'kas',
    ad: { tr: 'Kaş', en: 'Kaş', ru: 'Каш', de: 'Kaş', pl: 'Kaş', ro: 'Kaş' },
    sure: 3.5, konaklamali: false, haritadaGoster: true,
    x: 183, y: 364,
  },
  {
    id: 'demre',
    ad: { tr: 'Demre', en: 'Demre', ru: 'Демре', de: 'Demre', pl: 'Demre', ro: 'Demre' },
    sure: 2.5, konaklamali: false, haritadaGoster: true,
    x: 203, y: 341,
  },
  {
    id: 'kumluca',
    ad: { tr: 'Kumluca', en: 'Kumluca', ru: 'Кумлуджа', de: 'Kumluca', pl: 'Kumluca', ro: 'Kumluca' },
    sure: 1.8, konaklamali: false, haritadaGoster: true,
    x: 229, y: 314,
  },
  {
    id: 'kemer',
    ad: { tr: 'Kemer', en: 'Kemer', ru: 'Кемер', de: 'Kemer', pl: 'Kemer', ro: 'Kemer' },
    sure: 1, konaklamali: false, haritadaGoster: true,
    x: 263, y: 298,
  },
  {
    id: 'konyaalti',
    ad: { tr: 'Konyaaltı', en: 'Konyaaltı', ru: 'Коньяалты', de: 'Konyaaltı', pl: 'Konyaaltı', ro: 'Konyaaltı' },
    sure: 0.3, konaklamali: false, haritadaGoster: true,
    x: 304, y: 296,
  },
  {
    id: 'muratpasa',
    ad: { tr: 'Muratpaşa', en: 'Muratpaşa', ru: 'Муратпаша', de: 'Muratpaşa', pl: 'Muratpaşa', ro: 'Muratpaşa' },
    sure: 0.2, konaklamali: false, haritadaGoster: true,
    x: 344, y: 290,
  },
  {
    id: 'havalimani',
    ad: { tr: 'Havalimanı', en: 'Airport', ru: 'Аэропорт', de: 'Flughafen', pl: 'Lotnisko', ro: 'Aeroport' },
    sure: 0.3, konaklamali: false, haritadaGoster: true,
    x: 387, y: 292,
  },
  {
    id: 'aksu',
    ad: { tr: 'Aksu', en: 'Aksu', ru: 'Аксу', de: 'Aksu', pl: 'Aksu', ro: 'Aksu' },
    sure: 0.4, konaklamali: false, haritadaGoster: true,
    x: 418, y: 305,
  },
  {
    id: 'serik',
    ad: { tr: 'Serik', en: 'Serik', ru: 'Серик', de: 'Serik', pl: 'Serik', ro: 'Serik' },
    sure: 0.8, konaklamali: false, haritadaGoster: true,
    x: 444, y: 312,
  },
  {
    id: 'manavgat',
    ad: { tr: 'Manavgat', en: 'Manavgat', ru: 'Манавгат', de: 'Manavgat', pl: 'Manavgat', ro: 'Manavgat' },
    sure: 1.2, konaklamali: false, haritadaGoster: true,
    x: 469, y: 336,
  },
  {
    id: 'alanya',
    ad: { tr: 'Alanya', en: 'Alanya', ru: 'Аланья', de: 'Alanya', pl: 'Alanya', ro: 'Alanya' },
    sure: 2, konaklamali: false, haritadaGoster: true,
    x: 495, y: 367,
  },
];
