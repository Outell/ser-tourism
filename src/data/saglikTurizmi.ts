// Sağlık turizmi — turlar bölümü altında yaşayan ortak sayfa, marka ismi/
// logo/konum belirtilmeden jenerik hizmet olarak sunulur (Ramses Ink ile
// aynı desen — bkz. ramsesInk.ts). Fiyat/iptal alanı kasıtlı olarak yok
// (MASTER-PROMPT §11 "boş alan sessizdir"); tek aksiyon WhatsApp.
//
// Galeri yalnızca diş tedavisi öncesi/sonrası görsellerinden oluşuyor:
// saç ekimi galerisindeki kaynak fotoğraflar gerçek, tanınabilir hastaların
// kişisel/mahrem ortamlarda çekilmiş selfie'leriydi (banyo, araba, ev) —
// klinik izni verilmiş olsa bile üçüncü bir işletmenin sitesinde tekrar
// yayınlamak hasta mahremiyeti açısından uygun görülmedi, kullanılmadı.
// Diş görselleri ise yalnızca ağız bölgesini gösteren, kimliği belli etmeyen
// profesyonel klinik fotoğrafları olduğu için kullanıldı.

const G = '/gorseller/saglik-turizmi/saglik-turizmi-';

export const SAGLIK_KART_GORSEL = G + '00-kart.webp';

export const SAGLIK_GALERI = [
  G + '01-galeri.webp',
  G + '02-galeri.webp',
  G + '03-galeri.webp',
  G + '04-galeri.webp',
  G + '05-galeri.webp',
];

export type SaglikKategoriKod = 'sac' | 'dis' | 'goz' | 'estetik';

export interface SaglikKategori {
  kod: SaglikKategoriKod;
  gorsel: string;
}

export const SAGLIK_KATEGORILER: SaglikKategori[] = [
  { kod: 'sac', gorsel: G + 'kat-sac.webp' },
  { kod: 'dis', gorsel: G + 'kat-dis.webp' },
  { kod: 'goz', gorsel: G + 'kat-goz.webp' },
  { kod: 'estetik', gorsel: G + 'kat-estetik.webp' },
];
