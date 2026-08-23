import type { Dil, Tur, Taksonomi, Cevirili } from './tipler';
import { DILLER } from './tipler';
import { SITE } from '../config/marka';
import { KATEGORILER, SEHIRLER, BOLGELER } from '../data/taksonomi';
import turlarVeri from '../data/turlar.json';

export const turlar = turlarVeri as Tur[];
export const aktifTurlar = turlar.filter((t) => t.aktif);

// Yol parçaları dil başına çevrilir (url-semasi.md §2).
export const BOLUMLER: Record<'turlar' | 'sehirler' | 'bolgeler', Cevirili> = {
  turlar: { tr: 'turlar', en: 'tours', ru: 'tury', de: 'touren', pl: 'wycieczki', ro: 'tururi' },
  sehirler: { tr: 'sehirler', en: 'destinations', ru: 'napravleniya', de: 'reiseziele', pl: 'kierunki', ro: 'destinatii' },
  // RO'da "din" — misafir "excursii din Kemer" diye arıyor (EK-3 §3)
  bolgeler: { tr: 'bolgeler', en: 'from', ru: 'iz', de: 'ab', pl: 'z', ro: 'din' },
};

export type MetinSayfaKodu = 'hakkimizda' | 'iptal' | 'sss' | 'iletisim' | 'gizlilik';

// Planlayıcı (EK-1 §4) — "plan" altı dilde de okunaklı, tek slug yeterli
export const PLAN_SLUG: Cevirili = { tr: 'plan', en: 'plan', ru: 'plan', de: 'plan', pl: 'plan', ro: 'plan' };

// Havalimanı transferi — "transfer" altı dilde de aynı okunur, tek slug yeterli
export const TRANSFER_SLUG: Cevirili = { tr: 'transfer', en: 'transfer', ru: 'transfer', de: 'transfer', pl: 'transfer', ro: 'transfer' };

// Rehber sayfaları (EK-1 §5-6). Pratik slug'lar EK-1'de verildi;
// ücretsiz slug'ların TR/EN'i verildi, kalanlar aynı mantıkla türetildi.
export type RehberKodu = 'pratik' | 'ucretsiz';
export const REHBER_SAYFALARI: Record<RehberKodu, Cevirili> = {
  pratik: { tr: 'pratik-bilgiler', en: 'practical-info', ru: 'poleznaya-informaciya', de: 'praktische-infos', pl: 'informacje-praktyczne', ro: 'informatii-practice' },
  ucretsiz: { tr: 'ucretsiz', en: 'free-things-to-do', ru: 'besplatnye-razvlecheniya', de: 'kostenlose-aktivitaeten', pl: 'darmowe-atrakcje', ro: 'gratuit-in-antalya' },
};

export const METIN_SAYFALARI: Record<MetinSayfaKodu, Cevirili> = {
  hakkimizda: { tr: 'hakkimizda', en: 'about', ru: 'o-nas', de: 'ueber-uns', pl: 'o-nas', ro: 'despre-noi' },
  iptal: { tr: 'iptal-politikasi', en: 'cancellation', ru: 'otmena', de: 'stornierung', pl: 'anulowanie', ro: 'anulare' },
  sss: { tr: 'sss', en: 'faq', ru: 'voprosy', de: 'faq', pl: 'faq', ro: 'intrebari-frecvente' },
  iletisim: { tr: 'iletisim', en: 'contact', ru: 'kontakty', de: 'kontakt', pl: 'kontakt', ro: 'contact' },
  gizlilik: { tr: 'gizlilik', en: 'privacy', ru: 'konfidencialnost', de: 'datenschutz', pl: 'prywatnosc', ro: 'confidentialitate' },
};

// ---- URL üreticiler (hepsi / ile biter — url-semasi §3) ----

export const anaUrl = (dil: Dil) => `/${dil}/`;
export const turlarUrl = (dil: Dil) => `/${dil}/${BOLUMLER.turlar[dil]}/`;
export const kategoriUrl = (dil: Dil, k: Taksonomi) => `${turlarUrl(dil)}${k.slug[dil]}/`;
export const turUrl = (dil: Dil, t: Tur) => `${turlarUrl(dil)}${t.slug[dil]}/`;
export const sehirUrl = (dil: Dil, s: Taksonomi) => `/${dil}/${BOLUMLER.sehirler[dil]}/${s.slug[dil]}/`;
export const bolgeUrl = (dil: Dil, b: Taksonomi) => `/${dil}/${BOLUMLER.bolgeler[dil]}/${b.slug[dil]}/`;
export const metinUrl = (dil: Dil, kod: MetinSayfaKodu) => `/${dil}/${METIN_SAYFALARI[kod][dil]}/`;
export const planUrl = (dil: Dil) => `/${dil}/${PLAN_SLUG[dil]}/`;
export const transferUrl = (dil: Dil) => `/${dil}/${TRANSFER_SLUG[dil]}/`;
export const rehberUrl = (dil: Dil, kod: RehberKodu) => `/${dil}/${REHBER_SAYFALARI[kod][dil]}/`;

// Her sayfanın 6 dildeki YOLU (göreli). Dil değiştirici bunu doğrudan kullanır;
// hreflang/canonical/sitemap SITE önekiyle mutlaklaştırır (url-semasi §4).
// Üretici fonksiyondan türetildiği için bağlar her zaman karşılıklıdır.
export function alternatifler(uret: (dil: Dil) => string): Record<Dil, string> {
  return Object.fromEntries(DILLER.map((d) => [d, uret(d)])) as Record<Dil, string>;
}

export const mutlak = (yol: string) => SITE + yol;

// ---- Sezon (MASTER-PROMPT §5.2: sezon dışı tur listede hiç görünmez) ----
// Statik sitede kontrol build anında yapılır; site yeniden derlendikçe tazelenir.

export function sezonda(t: Tur, ay: number = new Date().getMonth() + 1): boolean {
  if (t.sezon === 'tum_yil' || t.sezon_baslangic == null || t.sezon_bitis == null) return true;
  if (t.sezon_baslangic <= t.sezon_bitis) return ay >= t.sezon_baslangic && ay <= t.sezon_bitis;
  return ay >= t.sezon_baslangic || ay <= t.sezon_bitis; // kışa sarkan sezon
}

export const listelenebilirTurlar = (ay?: number) => aktifTurlar.filter((t) => sezonda(t, ay));

// ---- Yardımcı sorgular ----

export const turBul = (id: string) => turlar.find((t) => t.id === id);
export const kategoriBul = (kod: string) => KATEGORILER.find((k) => k.kod === kod);

export const kategorininTurlari = (kod: string, ay?: number) =>
  listelenebilirTurlar(ay).filter((t) => t.kategoriler.includes(kod));
export const sehrinTurlari = (kod: string, ay?: number) =>
  listelenebilirTurlar(ay).filter((t) => t.sehir === kod);
// Bölge listesi elle yazılmaz — kalkis_bolgeleri alanından türetilir (§5.4).
export const bolgeninTurlari = (kod: string, ay?: number) =>
  listelenebilirTurlar(ay).filter((t) => t.kalkis_bolgeleri.includes(kod));

// ---- Sayfa envanteri: [...yol].astro ve sitemap'ler buradan beslenir ----
// 6 dil × (1 ana + 1 tüm turlar + 6 kategori + 4 şehir + 8 bölge + N aktif tur + 5 metin)

export type SayfaTanimi =
  | { sablon: 'ana'; dil: Dil; yol: string; alternatifler: Record<Dil, string> }
  | { sablon: 'liste'; dil: Dil; yol: string; alternatifler: Record<Dil, string>; listeTipi: 'turlar' | 'kategori' | 'sehir' | 'bolge'; anahtar: string | null }
  | { sablon: 'tur'; dil: Dil; yol: string; alternatifler: Record<Dil, string>; turId: string }
  | { sablon: 'metin'; dil: Dil; yol: string; alternatifler: Record<Dil, string>; metinKodu: MetinSayfaKodu }
  | { sablon: 'plan'; dil: Dil; yol: string; alternatifler: Record<Dil, string> }
  | { sablon: 'rehber'; dil: Dil; yol: string; alternatifler: Record<Dil, string>; rehberKodu: RehberKodu }
  | { sablon: 'transfer'; dil: Dil; yol: string; alternatifler: Record<Dil, string> };

export function tumSayfalar(): SayfaTanimi[] {
  const sayfalar: SayfaTanimi[] = [];

  for (const dil of DILLER) {
    sayfalar.push({ sablon: 'ana', dil, yol: anaUrl(dil), alternatifler: alternatifler(anaUrl) });

    sayfalar.push({
      sablon: 'liste', dil, yol: turlarUrl(dil),
      alternatifler: alternatifler(turlarUrl), listeTipi: 'turlar', anahtar: null,
    });

    for (const k of KATEGORILER)
      sayfalar.push({
        sablon: 'liste', dil, yol: kategoriUrl(dil, k),
        alternatifler: alternatifler((d) => kategoriUrl(d, k)), listeTipi: 'kategori', anahtar: k.kod,
      });

    for (const s of SEHIRLER)
      sayfalar.push({
        sablon: 'liste', dil, yol: sehirUrl(dil, s),
        alternatifler: alternatifler((d) => sehirUrl(d, s)), listeTipi: 'sehir', anahtar: s.kod,
      });

    for (const b of BOLGELER)
      sayfalar.push({
        sablon: 'liste', dil, yol: bolgeUrl(dil, b),
        alternatifler: alternatifler((d) => bolgeUrl(d, b)), listeTipi: 'bolge', anahtar: b.kod,
      });

    for (const t of aktifTurlar)
      sayfalar.push({
        sablon: 'tur', dil, yol: turUrl(dil, t),
        alternatifler: alternatifler((d) => turUrl(d, t)), turId: t.id,
      });

    for (const kod of Object.keys(METIN_SAYFALARI) as MetinSayfaKodu[])
      sayfalar.push({
        sablon: 'metin', dil, yol: metinUrl(dil, kod),
        alternatifler: alternatifler((d) => metinUrl(d, kod)), metinKodu: kod,
      });

    sayfalar.push({ sablon: 'plan', dil, yol: planUrl(dil), alternatifler: alternatifler(planUrl) });
    sayfalar.push({ sablon: 'transfer', dil, yol: transferUrl(dil), alternatifler: alternatifler(transferUrl) });

    for (const kod of Object.keys(REHBER_SAYFALARI) as RehberKodu[])
      sayfalar.push({
        sablon: 'rehber', dil, yol: rehberUrl(dil, kod),
        alternatifler: alternatifler((d) => rehberUrl(d, kod)), rehberKodu: kod,
      });
  }

  return sayfalar;
}
