// Ramses Ink Dövme & Piercing — turlar bölümü altında yaşayan ortak sayfa.
// Fiyat/iptal alanı kasıtlı olarak yok (MASTER-PROMPT §11 "boş alan sessizdir");
// tek aksiyon WhatsApp. Yorumlar Google Haritalar'dan alınmış gerçek metinler,
// çevrilmeden orijinal dilinde (İngilizce) tutulur.

const G = '/gorseller/ramses-ink/ramses-ink-';

// İlk 6 görsel hero galerisinde (büyük + şerit), kalan 5'i alttaki
// "stüdyodan çalışmalar" gridinde — tek galeri dizisi, tek ışık kutusu (lightbox).
export const RAMSES_GALERI = [
  G + '01-galeri.webp',
  G + '02-galeri.webp',
  G + '03-galeri.webp',
  G + '04-galeri.webp',
  G + '05-galeri.webp',
  G + '06-galeri.webp',
  G + '07-galeri.webp',
  G + '08-galeri.webp',
  G + '09-galeri.webp',
  G + '10-galeri.webp',
  G + '11-galeri.webp',
];

export const RAMSES_KART_GORSEL = G + '00-kart.webp';
export const RAMSES_LOGO = G + 'logo.webp';

export interface RamsesYorum {
  isim: string;
  metin: string;
}

// Google Haritalar değerlendirmeleri — orijinal İngilizce metin korunur.
export const RAMSES_YORUMLAR: RamsesYorum[] = [
  {
    isim: 'Niermala Bahadoer',
    metin: 'Very happy with my tattoo. Had a good experience. I recommend you to take your tattoo here!',
  },
  {
    isim: 'Marcel D',
    metin: 'Very friendly and professional. Might book a flight to get another tattoo!',
  },
  {
    isim: 'Paul Ansell',
    metin: 'Very professional, good atmosphere and very friendly. I would recommend to anyone visiting the area.',
  },
];

export const RAMSES_PUAN = 5;
export const RAMSES_DEGERLENDIRME_SAYISI = '500+';
