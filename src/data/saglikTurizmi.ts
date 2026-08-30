// Sağlık turizmi — turlar bölümü altında yaşayan ortak sayfa, marka ismi/
// logo/konum belirtilmeden jenerik hizmet olarak sunulur (Ramses Ink ile
// aynı desen — bkz. ramsesInk.ts). Fiyat/iptal alanı kasıtlı olarak yok
// (MASTER-PROMPT §11 "boş alan sessizdir"); tek aksiyon WhatsApp.
//
// Sonuç galerisi iki gruptan oluşuyor: diş tedavisi ve rinoplasti — ikisi de
// yalnızca kimliği belli etmeyen (ağız/burun bölgesine kırpılmış veya yüz
// çevrilmiş) öncesi/sonrası kompozit fotoğrafları. Saç ekimi galerisi
// kasıtlı olarak yok: o kaynak fotoğraflar gerçek, tanınabilir hastaların
// kişisel/mahrem ortamlarda (banyo, araba, ev) çektiği selfie'lerdi — klinik
// izni verilmiş olsa bile üçüncü bir işletmenin sitesinde tekrar yayınlamak
// hasta mahremiyeti açısından uygun görülmedi.

const G = '/gorseller/saglik-turizmi/saglik-turizmi-';

export const SAGLIK_KART_GORSEL = G + '00-kart.webp';

export type SaglikSonucGrubuKod = 'dis' | 'rinoplasti';

export interface SaglikSonucGrubu {
  kod: SaglikSonucGrubuKod;
  gorseller: string[];
}

// Kompozit fotoğraflar kare/dikey oranlı (önce üstte, sonra altta) —
// 4:3 yatay kutuya zorlamak "sonrası" yarısını kesiyordu, bu yüzden ızgara
// artık 3:4 dikey kutu kullanıyor (SaglikTurizmi.astro .sonuc-grid__ogr).
export const SAGLIK_SONUC_GRUPLARI: SaglikSonucGrubu[] = [
  {
    kod: 'dis',
    gorseller: [
      G + 'dis-01-galeri.webp',
      G + 'dis-02-galeri.webp',
      G + 'dis-03-galeri.webp',
      G + 'dis-04-galeri.webp',
      G + 'dis-05-galeri.webp',
      G + 'dis-06-galeri.webp',
    ],
  },
  {
    kod: 'rinoplasti',
    gorseller: [
      G + 'rino-01-galeri.webp',
      G + 'rino-02-galeri.webp',
      G + 'rino-03-galeri.webp',
      G + 'rino-04-galeri.webp',
    ],
  },
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
