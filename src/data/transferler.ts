import type { Cevirili } from '../lib/tipler';

// Havalimanı transfer fiyat listesi — tek yön, araç başına (max 6 kişi).
// Yer adları özel isim: TR/EN/DE/PL/RO'da aynı yazım, RU'da Kiril çeviri
// (taksonomi.ts'teki BOLGELER/EK_KALKIS_NOKTALARI ile aynı kural).

export interface TransferBolgesi {
  kod: string;
  ad: Cevirili;
  fiyat_eur: number;
}

// Doğu bölgesi — Kundu'dan Kargıcak'a, havalimanına uzaklık arttıkça fiyat artar.
export const TRANSFER_DOGU: TransferBolgesi[] = [
  { kod: 'kundu', ad: { tr: 'Kundu', en: 'Kundu', ru: 'Кунду', de: 'Kundu', pl: 'Kundu', ro: 'Kundu' }, fiyat_eur: 30 },
  { kod: 'belek', ad: { tr: 'Belek', en: 'Belek', ru: 'Белек', de: 'Belek', pl: 'Belek', ro: 'Belek' }, fiyat_eur: 35 },
  { kod: 'bogazkent', ad: { tr: 'Boğazkent', en: 'Boğazkent', ru: 'Богазкент', de: 'Boğazkent', pl: 'Boğazkent', ro: 'Boğazkent' }, fiyat_eur: 40 },
  { kod: 'side-sorgun', ad: { tr: 'Side / Sorgun', en: 'Side / Sorgun', ru: 'Сиде / Соргун', de: 'Side / Sorgun', pl: 'Side / Sorgun', ro: 'Side / Sorgun' }, fiyat_eur: 45 },
  { kod: 'kizilagac', ad: { tr: 'Kızılağaç (K. Ağaç)', en: 'Kızılağaç (K. Ağaç)', ru: 'Кызылагач (K. Ağaç)', de: 'Kızılağaç (K. Ağaç)', pl: 'Kızılağaç (K. Ağaç)', ro: 'Kızılağaç (K. Ağaç)' }, fiyat_eur: 50 },
  { kod: 'incekum-payallar', ad: { tr: 'İncekum / Payallar', en: 'İncekum / Payallar', ru: 'Инджекум / Паяллар', de: 'İncekum / Payallar', pl: 'İncekum / Payallar', ro: 'İncekum / Payallar' }, fiyat_eur: 55 },
  { kod: 'kargicak', ad: { tr: 'Kargıcak', en: 'Kargıcak', ru: 'Каргыджак', de: 'Kargıcak', pl: 'Kargıcak', ro: 'Kargıcak' }, fiyat_eur: 70 },
];

// Batı bölgesi — Konyaaltı/şehir merkezi havalimanına en yakın, sonra Kemer yönü.
export const TRANSFER_BATI: TransferBolgesi[] = [
  { kod: 'konyaalti-merkez', ad: { tr: 'Konyaaltı ve şehir merkezi içi oteller', en: 'Konyaaltı and city-centre hotels', ru: 'Коньяалты и отели в центре города', de: 'Konyaaltı und Hotels im Stadtzentrum', pl: 'Konyaaltı i hotele w centrum miasta', ro: 'Konyaaltı și hoteluri din centrul orașului' }, fiyat_eur: 25 },
  { kod: 'beldibi', ad: { tr: 'Beldibi', en: 'Beldibi', ru: 'Бельдиби', de: 'Beldibi', pl: 'Beldibi', ro: 'Beldibi' }, fiyat_eur: 35 },
  { kod: 'kemer', ad: { tr: 'Kemer', en: 'Kemer', ru: 'Кемер', de: 'Kemer', pl: 'Kemer', ro: 'Kemer' }, fiyat_eur: 40 },
  { kod: 'camyuva', ad: { tr: 'Çamyuva', en: 'Çamyuva', ru: 'Чамьюва', de: 'Çamyuva', pl: 'Çamyuva', ro: 'Çamyuva' }, fiyat_eur: 45 },
  { kod: 'tekirova', ad: { tr: 'Tekirova', en: 'Tekirova', ru: 'Текирова', de: 'Tekirova', pl: 'Tekirova', ro: 'Tekirova' }, fiyat_eur: 50 },
];
