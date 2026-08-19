import type { Taksonomi } from '../lib/tipler';

// 6 kategori (veri-modeli.md). Slug'lar dil başına ayrı — SEO gereği.
// tekne satırı url-semasi.md'deki örnekten; kalanlar aynı mantıkla türetildi.
export const KATEGORILER: Taksonomi[] = [
  {
    kod: 'tekne',
    ad: { tr: 'Tekne turları', en: 'Boat tours', ru: 'Морские прогулки', de: 'Bootstouren', pl: 'Rejsy', ro: 'Excursii cu barca' },
    slug: { tr: 'tekne', en: 'boat', ru: 'morskie', de: 'boot', pl: 'rejsy', ro: 'cu-barca' },
  },
  {
    kod: 'macera',
    ad: { tr: 'Doğa ve macera', en: 'Nature and adventure', ru: 'Природа и приключения', de: 'Natur und Abenteuer', pl: 'Przygoda i natura', ro: 'Natură și aventură' },
    slug: { tr: 'macera', en: 'adventure', ru: 'priklyucheniya', de: 'abenteuer', pl: 'przygoda', ro: 'aventura' },
  },
  {
    kod: 'kultur',
    ad: { tr: 'Kültür ve günübirlik', en: 'Culture and day trips', ru: 'Культура и однодневные туры', de: 'Kultur und Tagesausflüge', pl: 'Kultura i wycieczki jednodniowe', ro: 'Cultură și excursii de o zi' },
    slug: { tr: 'kultur', en: 'culture', ru: 'kultura', de: 'kultur', pl: 'kultura', ro: 'cultura' },
  },
  {
    kod: 'uzun',
    ad: { tr: 'Uzun mesafe', en: 'Multi-day and long distance', ru: 'Дальние поездки', de: 'Mehrtägige Touren', pl: 'Wycieczki wielodniowe', ro: 'Excursii de mai multe zile' },
    slug: { tr: 'uzun-mesafe', en: 'multi-day', ru: 'dalnie', de: 'mehrtaegig', pl: 'wielodniowe', ro: 'mai-multe-zile' },
  },
  {
    kod: 'aile',
    ad: { tr: 'Aile ve eğlence', en: 'Family and fun', ru: 'Семейный отдых', de: 'Familie und Freizeit', pl: 'Dla rodzin', ro: 'Familie și distracție' },
    slug: { tr: 'aile', en: 'family', ru: 'semeynye', de: 'familie', pl: 'rodzinne', ro: 'familie' },
  },
  {
    kod: 'konfor',
    ad: { tr: 'Şehir ve konfor', en: 'City and comfort', ru: 'Город и комфорт', de: 'Stadt und Komfort', pl: 'Miasto i komfort', ro: 'Oraș și confort' },
    slug: { tr: 'konfor', en: 'comfort', ru: 'komfort', de: 'komfort', pl: 'komfort', ro: 'confort' },
  },
];

// 4 şehir (veri-modeli.md `sehir` alanı).
export const SEHIRLER: Taksonomi[] = [
  {
    kod: 'antalya',
    ad: { tr: 'Antalya', en: 'Antalya', ru: 'Анталья', de: 'Antalya', pl: 'Antalya', ro: 'Antalya' },
    slug: { tr: 'antalya', en: 'antalya', ru: 'antalya', de: 'antalya', pl: 'antalya', ro: 'antalya' },
  },
  {
    kod: 'kapadokya',
    ad: { tr: 'Kapadokya', en: 'Cappadocia', ru: 'Каппадокия', de: 'Kappadokien', pl: 'Kapadocja', ro: 'Cappadocia' },
    slug: { tr: 'kapadokya', en: 'cappadocia', ru: 'kappadokiya', de: 'kappadokien', pl: 'kapadocja', ro: 'cappadocia' },
  },
  {
    kod: 'pamukkale',
    ad: { tr: 'Pamukkale', en: 'Pamukkale', ru: 'Памуккале', de: 'Pamukkale', pl: 'Pamukkale', ro: 'Pamukkale' },
    slug: { tr: 'pamukkale', en: 'pamukkale', ru: 'pamukkale', de: 'pamukkale', pl: 'pamukkale', ro: 'pamukkale' },
  },
  {
    kod: 'fethiye',
    ad: { tr: 'Fethiye', en: 'Fethiye', ru: 'Фетхие', de: 'Fethiye', pl: 'Fethiye', ro: 'Fethiye' },
    slug: { tr: 'fethiye', en: 'fethiye', ru: 'fetkhie', de: 'fethiye', pl: 'fethiye', ro: 'fethiye' },
  },
];

// 8 bölge SAYFASI (MASTER-PROMPT §5: "8 bölge").
// VARSAYIM: veri modelindeki 12 kalkış noktasından 8 ana bölge sayfa aldı;
// Kadriye, Beldibi, Göynük, Avsallar alt bölge sayılıp sayfasız bırakıldı
// (kalkış seçeneği olarak duruyorlar). Değiştirmek = bu listeye ekleme yapmak.
export const BOLGELER: Taksonomi[] = [
  {
    kod: 'lara',
    ad: { tr: 'Lara', en: 'Lara', ru: 'Лара', de: 'Lara', pl: 'Lara', ro: 'Lara' },
    slug: { tr: 'lara', en: 'lara', ru: 'lara', de: 'lara', pl: 'lara', ro: 'lara' },
  },
  {
    kod: 'konyaalti',
    ad: { tr: 'Konyaaltı', en: 'Konyaaltı', ru: 'Коньяалты', de: 'Konyaaltı', pl: 'Konyaaltı', ro: 'Konyaaltı' },
    slug: { tr: 'konyaalti', en: 'konyaalti', ru: 'konyaalty', de: 'konyaalti', pl: 'konyaalti', ro: 'konyaalti' },
  },
  {
    kod: 'kemer',
    ad: { tr: 'Kemer', en: 'Kemer', ru: 'Кемер', de: 'Kemer', pl: 'Kemer', ro: 'Kemer' },
    slug: { tr: 'kemer', en: 'kemer', ru: 'kemer', de: 'kemer', pl: 'kemer', ro: 'kemer' },
  },
  {
    kod: 'belek',
    ad: { tr: 'Belek', en: 'Belek', ru: 'Белек', de: 'Belek', pl: 'Belek', ro: 'Belek' },
    slug: { tr: 'belek', en: 'belek', ru: 'belek', de: 'belek', pl: 'belek', ro: 'belek' },
  },
  {
    kod: 'side',
    ad: { tr: 'Side', en: 'Side', ru: 'Сиде', de: 'Side', pl: 'Side', ro: 'Side' },
    slug: { tr: 'side', en: 'side', ru: 'side', de: 'side', pl: 'side', ro: 'side' },
  },
  {
    kod: 'alanya',
    ad: { tr: 'Alanya', en: 'Alanya', ru: 'Аланья', de: 'Alanya', pl: 'Alanya', ro: 'Alanya' },
    slug: { tr: 'alanya', en: 'alanya', ru: 'alanya', de: 'alanya', pl: 'alanya', ro: 'alanya' },
  },
  {
    kod: 'manavgat',
    ad: { tr: 'Manavgat', en: 'Manavgat', ru: 'Манавгат', de: 'Manavgat', pl: 'Manavgat', ro: 'Manavgat' },
    slug: { tr: 'manavgat', en: 'manavgat', ru: 'manavgat', de: 'manavgat', pl: 'manavgat', ro: 'manavgat' },
  },
  {
    kod: 'kundu',
    ad: { tr: 'Kundu', en: 'Kundu', ru: 'Кунду', de: 'Kundu', pl: 'Kundu', ro: 'Kundu' },
    slug: { tr: 'kundu', en: 'kundu', ru: 'kundu', de: 'kundu', pl: 'kundu', ro: 'kundu' },
  },
];

// Sayfası olmayan ek kalkış noktaları — filtrede ve tur verisinde kullanılır.
export const EK_KALKIS_NOKTALARI: Taksonomi[] = [
  {
    kod: 'kadriye',
    ad: { tr: 'Kadriye', en: 'Kadriye', ru: 'Кадрие', de: 'Kadriye', pl: 'Kadriye', ro: 'Kadriye' },
    slug: { tr: 'kadriye', en: 'kadriye', ru: 'kadrie', de: 'kadriye', pl: 'kadriye', ro: 'kadriye' },
  },
  {
    kod: 'beldibi',
    ad: { tr: 'Beldibi', en: 'Beldibi', ru: 'Бельдиби', de: 'Beldibi', pl: 'Beldibi', ro: 'Beldibi' },
    slug: { tr: 'beldibi', en: 'beldibi', ru: 'beldibi', de: 'beldibi', pl: 'beldibi', ro: 'beldibi' },
  },
  {
    kod: 'goynuk',
    ad: { tr: 'Göynük', en: 'Göynük', ru: 'Гёйнюк', de: 'Göynük', pl: 'Göynük', ro: 'Göynük' },
    slug: { tr: 'goynuk', en: 'goynuk', ru: 'goynyuk', de: 'goynuk', pl: 'goynuk', ro: 'goynuk' },
  },
  {
    kod: 'avsallar',
    ad: { tr: 'Avsallar', en: 'Avsallar', ru: 'Авсаллар', de: 'Avsallar', pl: 'Avsallar', ro: 'Avsallar' },
    slug: { tr: 'avsallar', en: 'avsallar', ru: 'avsallar', de: 'avsallar', pl: 'avsallar', ro: 'avsallar' },
  },
];

// Tüm kalkış noktaları (8 sayfalı bölge + 4 sayfasız nokta) — filtre listesi
export const TUM_KALKIS_NOKTALARI: Taksonomi[] = [...BOLGELER, ...EK_KALKIS_NOKTALARI];
