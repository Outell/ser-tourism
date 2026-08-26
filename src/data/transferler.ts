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
  { kod: 'kundu', ad: { tr: 'Kundu', en: 'Kundu', ru: 'Кунду', de: 'Kundu', pl: 'Kundu', ro: 'Kundu' }, fiyat_eur: 45 },
  { kod: 'belek', ad: { tr: 'Belek', en: 'Belek', ru: 'Белек', de: 'Belek', pl: 'Belek', ro: 'Belek' }, fiyat_eur: 50 },
  { kod: 'bogazkent', ad: { tr: 'Boğazkent', en: 'Boğazkent', ru: 'Богазкент', de: 'Boğazkent', pl: 'Boğazkent', ro: 'Boğazkent' }, fiyat_eur: 55 },
  { kod: 'side-sorgun', ad: { tr: 'Side / Sorgun', en: 'Side / Sorgun', ru: 'Сиде / Соргун', de: 'Side / Sorgun', pl: 'Side / Sorgun', ro: 'Side / Sorgun' }, fiyat_eur: 60 },
  { kod: 'kizilagac-okurcalar', ad: { tr: 'Kızılağaç / Okurcalar', en: 'Kızılağaç / Okurcalar', ru: 'Кызылагач / Окурджалар', de: 'Kızılağaç / Okurcalar', pl: 'Kızılağaç / Okurcalar', ro: 'Kızılağaç / Okurcalar' }, fiyat_eur: 65 },
  { kod: 'incekum-turkler', ad: { tr: 'İncekum / Türkler', en: 'İncekum / Türkler', ru: 'Инджекум / Тюрклер', de: 'İncekum / Türkler', pl: 'İncekum / Türkler', ro: 'İncekum / Türkler' }, fiyat_eur: 70 },
  { kod: 'konakli-alanya-merkez', ad: { tr: 'Konaklı / Alanya Merkez', en: 'Konaklı / Alanya Merkez', ru: 'Конаклы / центр Аланьи', de: 'Konaklı / Alanya Merkez', pl: 'Konaklı / Alanya Merkez', ro: 'Konaklı / Alanya Merkez' }, fiyat_eur: 75 },
  { kod: 'mahmutlar-kargicak', ad: { tr: 'Mahmutlar / Kargıcak', en: 'Mahmutlar / Kargıcak', ru: 'Махмутлар / Каргыджак', de: 'Mahmutlar / Kargıcak', pl: 'Mahmutlar / Kargıcak', ro: 'Mahmutlar / Kargıcak' }, fiyat_eur: 85 },
];

// Batı bölgesi — Konyaaltı/şehir merkezi havalimanına en yakın, sonra Kemer yönü.
export const TRANSFER_BATI: TransferBolgesi[] = [
  { kod: 'konyaalti-merkez', ad: { tr: 'Konyaaltı ve şehir merkezi içi oteller', en: 'Konyaaltı and city-centre hotels', ru: 'Коньяалты и отели в центре города', de: 'Konyaaltı und Hotels im Stadtzentrum', pl: 'Konyaaltı i hotele w centrum miasta', ro: 'Konyaaltı și hoteluri din centrul orașului' }, fiyat_eur: 40 },
  { kod: 'beldibi', ad: { tr: 'Beldibi', en: 'Beldibi', ru: 'Бельдиби', de: 'Beldibi', pl: 'Beldibi', ro: 'Beldibi' }, fiyat_eur: 50 },
  { kod: 'kemer', ad: { tr: 'Kemer', en: 'Kemer', ru: 'Кемер', de: 'Kemer', pl: 'Kemer', ro: 'Kemer' }, fiyat_eur: 55 },
  { kod: 'camyuva-kiris', ad: { tr: 'Çamyuva Kiriş', en: 'Çamyuva Kiriş', ru: 'Чамьюва Кириш', de: 'Çamyuva Kiriş', pl: 'Çamyuva Kiriş', ro: 'Çamyuva Kiriş' }, fiyat_eur: 60 },
  { kod: 'tekirova', ad: { tr: 'Tekirova', en: 'Tekirova', ru: 'Текирова', de: 'Tekirova', pl: 'Tekirova', ro: 'Tekirova' }, fiyat_eur: 65 },
];
