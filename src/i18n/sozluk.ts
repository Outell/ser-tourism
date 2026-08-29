import type { Dil } from '../lib/tipler';

// Arayüz metinleri — 6 dil eşit öncelikli, hiçbiri "ana dil" değil.
// Ton kuralları (marka-isim-slogan.md §6): kısa cümle, ünlem yok, abartı yok.
// {f} / {saat} / {b} kalıpları yerlestir() ile doldurulur.

// Çift gösterim: dilin kendi adı + parantez içinde İngilizcesi.
// İngilizce satırında tekrar olmaması için parantez yok.
export const DIL_ADLARI: Record<Dil, string> = {
  tr: 'Türkçe (Turkish)',
  en: 'English',
  ru: 'Русский (Russian)',
  de: 'Deutsch (German)',
  pl: 'Polski (Polish)',
  ro: 'Română (Romanian)',
};

// Bayrak TEK BAŞINA kullanılmaz — her zaman dil adıyla birlikte (EK-1 §1).
// Unicode emoji; görsel dosya yok. EN için 🇬🇧 tercih edildi.
export const DIL_BAYRAKLARI: Record<Dil, string> = {
  tr: '🇹🇷',
  en: '🇬🇧',
  ru: '🇷🇺',
  de: '🇩🇪',
  pl: '🇵🇱',
  ro: '🇷🇴',
};

// Döviz seçici varsayılanları (MASTER-PROMPT §8): dile göre.
export const VARSAYILAN_PARA: Record<Dil, string> = {
  tr: 'TRY',
  en: 'EUR',
  ru: 'RUB',
  de: 'EUR',
  pl: 'PLN',
  ro: 'RON',
};

export const PARA_SIMGELERI: Record<string, string> = {
  EUR: '€',
  TRY: '₺',
  USD: '$',
  RUB: '₽',
  PLN: 'zł',
  RON: 'lei',
};

export function yerlestir(kalip: string, degerler: Record<string, string | number>): string {
  return kalip.replace(/\{(\w+)\}/g, (_, k) => String(degerler[k] ?? ''));
}

interface Sozluk {
  // Menü ve genel
  nav_turlar: string;
  nav_transfer: string;
  ana_sayfa: string;
  tum_turlar: string;
  tum_hizmetler: string;  // yalnızca ana sayfadaki "Öne çıkan hizmetler" teaser linki
  dil_secici_etiket: string;
  para_secici_etiket: string;
  menu_ac: string;
  menu_kapat: string;
  tema_degistir: string;
  instagram_etiket: string;
  whatsapp_etiket: string;

  // Ana sayfa
  hero_h1: string;
  hero_alt: string;
  hero_arama: string;
  hero_arama_buton: string;
  rozet_odeme: string;
  rozet_transfer: string;
  rozet_iptal: string;
  vitrin_bolum_etiket: string;
  vitrin_rezervasyon_buton: string;
  vitrin_slayt_git: string;
  vitrin_onceki_tur: string;
  vitrin_sonraki_tur: string;
  b_one_cikan: string;
  b_one_cikan_eyebrow: string;
  b_kategoriler: string;
  b_neden: string;
  b_bolgeler: string;
  neden: { baslik: string; metin: string }[];

  // Liste
  filtre_kategori: string;
  filtre_bolge: string;
  filtre_sure: string;
  filtre_fiyat: string;
  tumu: string;
  yarim_gun: string;
  tam_gun: string;
  cok_gunlu: string;
  sonuc_yok: string;
  liste_giris_yt: string;
  bolge_baslik: string;
  sehir_baslik: string;

  // Kart / fiyat
  fiyat_baslayan: string;
  fiyat_kategorileri: string;
  fiyat_yetiskin: string;
  fiyat_cocuk: string;
  fiyat_bebek: string;
  fiyat_ucretsiz: string;
  fiyat_yas_12: string;
  odeme_gunu: string;
  transfer_dahil: string;
  transfer_haric: string;
  saat_kisa: string;
  gun_kisa: string;

  // Tur sayfası
  b_aciklama: string;
  b_program: string;
  b_dahil: string;
  b_dahil_degil: string;
  b_kosullar: string;
  b_bulusma: string;
  b_notlar: string;
  b_benzer: string;
  rezervasyon_baslik: string;
  rezervasyon_alt: string;
  tur_hero_kategori: string;
  tur_hero_ogle: string;
  tur_hero_gunler: string;
  yas_12_notu: string;
  galeri_onceki: string;
  galeri_sonraki: string;
  galeri_kapat: string;
  k_grup: string;
  k_yas: string;
  k_zorluk: string;
  k_esyalar: string;
  k_alinis: string;
  k_donus: string;
  k_kalkis: string;
  zorluk_kolay: string;
  zorluk_orta: string;
  zorluk_zor: string;
  iptal_kalip: string;
  hava_iptali_metni: string;

  // WhatsApp formu
  f_tur: string;
  f_tarih: string;
  f_yetiskin: string;
  f_cocuk: string;
  f_cocuk_yas: string;
  f_cocuk_yas_ipucu: string;
  f_otel: string;
  f_ad: string;
  f_not: string;
  f_buton: string;
  f_onizleme: string;
  f_takvim_ac: string;
  f_ay_onceki: string;
  f_ay_sonraki: string;
  f_kapat: string;
  f_azalt: string;
  f_arttir: string;
  f_zorunlu: string;
  mobil_cta: string;
  m_selamlama: string;
  m_kapanis: string;
  m_tur: string;
  m_tarih: string;
  m_kisi: string;
  m_otel: string;
  m_ad: string;
  m_not: string;
  m_yetiskin: string;
  m_cocuk: string;
  m_yas: string;

  // Hava durumu (EK-1 §2)
  hava_etiket: string;
  hava_guvence: string;
  hava_bugun: string;

  // Mesafe haritası (EK-1 §3) — MesafeHaritasi.astro iç içe yapı bekliyor
  mesafe: {
    baslik: string;
    altBaslik: string;
    svgBaslik: string;
    svgAciklama: string;
    kuzey: string;
    konaklamali: string;
    legendLabel: string;
    aktifEtiket: string;
    destinasyonEtiket: string;
    aktifTurSayisi: string;
    aktifTurYok: string;
    turSec: string;
    dipnot: string;
    kaydirIpucu: string;
  };
  journey: {
    locationBaslik: string;
    locationAlt: string;
    locationLabel: string;
    locationPlaceholder: string;
    locationSave: string;
    locationLater: string;
    locationCurrent: string;
    locationChange: string;
    locationSaved: string;
    previewEyebrow: string;
    previewBaslik: string;
    previewMetin: string;
    previewSelectedLocation: string;
    previewNoLocation: string;
    previewActivities: string;
    previewDuration: string;
    previewTransfer: string;
    previewMeal: string;
    previewNote: string;
    teaserEyebrow: string;
    teaserTitle: string;
    teaserText: string;
    exploreJourney: string;
    closeJourney: string;
    experienceEyebrow: string;
    experienceTitle: string;
    experienceText: string;
    startJourney: string;
    pause: string;
    restart: string;
    startingArea: string;
    noStartingArea: string;
    tourFlow: string;
    activity: string;
    transferIncluded: string;
    lunchIncluded: string;
    waterActivity: string;
    familyFriendly: string;
    activityDistance: string;
    visualFlowNote: string;
    stageOf: string;
    nowShowing: string;
    minutesShort: string;
    hoursShort: string;
    metersShort: string;
    stageDuration: string;
    stageDistance: string;
    flowStart: string;
    flowTransfer: string;
    flowAdventureArea: string;
    flowActivities: string;
    flowReturn: string;
    liveMapLabel: string;
    demoMode: string;
    verifiedMode: string;
    pickupReferencePoint: string;
  };
  kisaltma: {
    saat: string;
    // Halka etiketlerinde "1 saat" için tekil biçim (RO: 1 oră / 3 ore).
    // Kısaltma kullanan dillerde saat ile aynıdır, o yüzden opsiyonel.
    saatTekil?: string;
    // Tur sayısı dile göre çekimlenir (Intl.PluralRules ile seçilir).
    // TR'de sayıdan sonra çoğul eki yok, RU'da kısaltma çekimlenmez → tek biçim.
    turAdet: { one?: string; few?: string; many?: string; other: string };
  };

  // Tatil planlayıcı (EK-1 §4)
  plan_nav: string;
  plan_baslik: string;
  plan_ozet: string;
  plan_soru1: string;
  plan_s1: string[];
  plan_soru2: string;
  plan_s2: string[];
  plan_soru3: string;
  plan_soru3_ipucu: string;
  plan_s3: string[];
  plan_ileri: string;
  plan_geri: string;
  plan_adim: string;
  plan_sonuclari_gor: string;
  plan_rozet: string;
  plan_stil_kisa: string[];
  plan_neden_stil: string;
  plan_neden_aile: string;
  plan_neden_populer: string;
  plan_bos: string;
  plan_sonuc_baslik: string;
  plan_wa_buton: string;
  plan_yeniden: string;
  plan_msj_giris: string;
  plan_msj_kalis: string;
  plan_msj_kapanis: string;

  // Rehber sayfaları (EK-1 §5-6)
  rehber_grup: string;
  rehber_pratik_baslik: string;
  rehber_ucretsiz_baslik: string;
  rehber_guncelleme: string;
  rehber_dogrulama: string;
  rehber_soru_wa: string;
  rehber_ucretsiz_kapanis: string;
  rehber_ulasim: string;
  rehber_sure: string;

  // Havalimanı transferi
  transfer_baslik: string;
  transfer_eyebrow: string;
  transfer_ozet: string;
  transfer_h1_alt: string;
  transfer_cta_wa: string;
  transfer_cta_fiyat: string;
  transfer_ozellik_1_baslik: string;
  transfer_ozellik_1_metin: string;
  transfer_ozellik_2_baslik: string;
  transfer_ozellik_2_metin: string;
  transfer_ozellik_3_baslik: string;
  transfer_ozellik_3_metin: string;
  transfer_ozellik_4_baslik: string;
  transfer_ozellik_4_metin: string;
  transfer_arac_baslik: string;
  transfer_arac_standart_ad: string;
  transfer_arac_standart_aciklama: string;
  transfer_arac_buyuk_ad: string;
  transfer_arac_buyuk_aciklama: string;
  transfer_arac_kapasite: string;
  transfer_fiyat_baslik: string;
  transfer_fiyat_alt: string;
  transfer_dogu_baslik: string;
  transfer_bati_baslik: string;
  transfer_tablo_bolge: string;
  transfer_tablo_fiyat: string;
  transfer_not: string;
  transfer_wa_mesaj_giris: string;
  transfer_wa_mesaj_guzergah: string;
  transfer_wa_mesaj_fiyat: string;
  transfer_wa_mesaj_kapanis: string;
  transfer_galeri_alt: string;
  transfer_ana_teaser_baslik: string;
  transfer_ana_teaser_metin: string;
  transfer_ana_teaser_buton: string;

  // Dövme & Piercing stüdyosu (turlar altında ortak sayfa — fiyat/iptal alanı yok,
  // marka ismi/logo/konum yok — jenerik hizmet tanıtımı)
  ramses_baslik: string;
  ramses_ozet: string;
  ramses_h1_alt: string;
  ramses_badge_tasarim: string;
  ramses_badge_alis: string;
  ramses_puan_metin: string;
  ramses_puan_sr: string;
  ramses_yorumlar_baslik: string;
  ramses_yorum_kaynagi: string;
  ramses_galeri_baslik: string;
  ramses_cta_baslik: string;
  ramses_cta_metin: string;
  ramses_galeri_alt: string;
  ramses_wa_konu: string;

  // Footer
  s_biz: string;
  s_hakkimizda: string;
  s_iptal: string;
  s_sss: string;
  s_iletisim: string;
  s_gizlilik: string;

  // Meta kalıpları
  meta_ana_baslik: string;
  meta_ana_aciklama: string;
  meta_tur_aciklama: string;

  // Yer tutucular (iskelet aşaması — içerik yazılınca silinecek)
  yt_aciklama: string;
  yt_program: string;
  yt_liste: string;
  yt_metin_sayfa: string;
}

export const sozluk: Record<Dil, Sozluk> = {
  tr: {
    nav_turlar: 'Turlar',
    nav_transfer: 'Transfer',
    ana_sayfa: 'Ana sayfa',
    tum_turlar: 'Tüm turlar',
    tum_hizmetler: 'Tüm hizmetler',
    dil_secici_etiket: 'Dil',
    para_secici_etiket: 'Para birimi',
    menu_ac: 'Menüyü aç',
    menu_kapat: 'Menüyü kapat',
    tema_degistir: 'Tema değiştir',
    instagram_etiket: 'Instagram’da aç',
    whatsapp_etiket: 'WhatsApp’ta yaz',

    hero_h1: 'Antalya’da yarın ne yapacaksınız?',
    hero_alt: '30 tur, altı dilde destek, ödeme tur günü.',
    hero_arama: 'Nereye gitmek istiyorsunuz?',
    hero_arama_buton: 'Ara',
    rozet_odeme: 'Ödeme turda',
    rozet_transfer: 'Otel transferi dahil',
    rozet_iptal: '24 saate kadar ücretsiz iptal',
    vitrin_bolum_etiket: 'Öne çıkan turlar',
    vitrin_rezervasyon_buton: 'Rezervasyon Yaptır',
    vitrin_slayt_git: '{n}. slayta git',
    vitrin_onceki_tur: 'Önceki tur',
    vitrin_sonraki_tur: 'Sonraki tur',
    b_one_cikan: 'Öne çıkan hizmetler',
    b_one_cikan_eyebrow: 'Deneyimler',
    b_kategoriler: 'Kategoriler',
    b_neden: 'Neden biz',
    b_bolgeler: 'Nereden kalkıyorsunuz?',
    neden: [
      { baslik: 'Ödeme turda, önden kapora yok', metin: 'Rezervasyonu onaylıyoruz, ödemeyi tur günü yapıyorsunuz.' },
      { baslik: 'Her gün 08:00–22:00 buradayız', metin: 'Mesajınıza aynı gün dönüyoruz.' },
      { baslik: 'Kendi dilinizde', metin: 'Türkçe, İngilizce, Rusça, Almanca, Lehçe, Rumence.' },
      { baslik: 'Otelden alıyoruz', metin: 'Alış saatiniz bir gün önceden WhatsApp’tan bildirilir.' },
      { baslik: '24 saate kadar ücretsiz iptal', metin: 'Hava kötüyse tur iptal, ücret yok.' },
    ],

    filtre_kategori: 'Kategori',
    filtre_bolge: 'Kalkış bölgesi',
    filtre_sure: 'Süre',
    filtre_fiyat: 'Fiyat',
    tumu: 'Tümü',
    yarim_gun: 'Yarım gün',
    tam_gun: 'Tam gün',
    cok_gunlu: 'Çok günlü',
    sonuc_yok: 'Bu filtrelerle tur bulunamadı.',
    liste_giris_yt: 'Antalya ve çevresindeki seçili deneyimleri tek yerde karşılaştırın. Transfer durumu, fiyat ve tur tarzı net görünsün diye katalog sade tutuldu.',
    bolge_baslik: '{b} çıkışlı turlar',
    sehir_baslik: '{b} turları',

    fiyat_baslayan: '{f} €’dan başlayan',
    fiyat_kategorileri: 'Fiyat kategorileri',
    fiyat_yetiskin: 'Yetişkin',
    fiyat_cocuk: 'Çocuk 3–11 yaş',
    fiyat_bebek: 'Çocuk 0–2 yaş',
    fiyat_ucretsiz: 'Ücretsiz',
    fiyat_yas_12: '12+ yaş',
    odeme_gunu: 'Ödeme tur günü',
    transfer_dahil: 'Transfer dahil',
    transfer_haric: 'Transfer dahil değil',
    saat_kisa: 'sa',
    gun_kisa: 'gün',

    b_aciklama: 'Tur hakkında',
    b_program: 'Program',
    b_dahil: 'Dahil olanlar',
    b_dahil_degil: 'Dahil olmayanlar',
    b_kosullar: 'Katılım koşulları',
    b_bulusma: 'Buluşma noktası',
    b_notlar: 'Önemli notlar',
    b_benzer: 'Benzer turlar',
    rezervasyon_baslik: 'Rezervasyon yap',
    rezervasyon_alt: 'Tarih ve kişi bilgilerini girin, WhatsApp’ta hızlıca devam edin.',
    tur_hero_kategori: 'Tur',
    tur_hero_ogle: 'Öğle yemeği dahil',
    tur_hero_gunler: 'Tur günleri',
    yas_12_notu: '12 yaş ve üzeri yetişkin fiyatına tabidir.',
    galeri_onceki: 'Önceki fotoğraf',
    galeri_sonraki: 'Sonraki fotoğraf',
    galeri_kapat: 'Kapat',
    k_grup: 'Grup',
    k_yas: 'Yaş',
    k_zorluk: 'Zorluk',
    k_esyalar: 'Yanınıza alın',
    k_alinis: 'Otelden alınış',
    k_donus: 'Dönüş',
    k_kalkis: 'Kalkış bölgeleri',
    zorluk_kolay: 'kolay',
    zorluk_orta: 'orta',
    zorluk_zor: 'zor',
    iptal_kalip: '{saat} saate kadar ücretsiz iptal',
    hava_iptali_metni: 'Hava koşulları uygun değilse tur iptal edilir, ücret alınmaz.',

    f_tur: 'Tur',
    f_tarih: 'Tarih',
    f_yetiskin: 'Yetişkin',
    f_cocuk: 'Çocuk',
    f_cocuk_yas: 'Çocuk yaşları',
    f_cocuk_yas_ipucu: 'Örn. 5, 9',
    f_otel: 'Otel / bölge',
    f_ad: 'Ad soyad',
    f_not: 'Not',
    f_buton: 'WhatsApp’ta devam et',
    f_onizleme: 'Gönderilecek mesaj',
    f_takvim_ac: 'Takvimi aç',
    f_ay_onceki: 'Önceki ay',
    f_ay_sonraki: 'Sonraki ay',
    f_kapat: 'Kapat',
    f_azalt: 'Azalt',
    f_arttir: 'Arttır',
    f_zorunlu: 'Zorunlu alan',
    mobil_cta: 'WhatsApp’tan sor',
    m_selamlama: 'Merhaba,',
    m_kapanis: 'Teşekkürler.',
    m_tur: 'Tur',
    m_tarih: 'Tarih',
    m_kisi: 'Kişi',
    m_otel: 'Otel',
    m_ad: 'Ad',
    m_not: 'Not',
    m_yetiskin: 'yetişkin',
    m_cocuk: 'çocuk',
    m_yas: 'yaş',

    hava_etiket: 'Antalya’da hava',
    hava_guvence: 'Turlarımızın çoğu her hava koşulunda yapılır. İptal gerekirse ücret alınmaz.',
    hava_bugun: 'Bugün',
    mesafe: {
      baslik: 'Antalya Destinasyonları',
      altBaslik: 'Sizin için seçilmiş 11 keşif noktası',
      svgBaslik: 'Antalya destinasyon keşif haritası',
      svgAciklama: 'Harita, Antalya çevresindeki 11 destinasyon merkezini gösterir. Noktalar pickup, rota veya operasyon koordinatı değildir.',
      kuzey: 'KUZEY',
      konaklamali: 'konaklamalı',
      legendLabel: 'Harita açıklaması',
      aktifEtiket: 'Aktif destinasyon',
      destinasyonEtiket: 'Antalya destinasyonu',
      aktifTurSayisi: '{count} aktif tur',
      aktifTurYok: 'Keşif noktası',
      turSec: 'Tur seç',
      dipnot: 'Koordinatlar destinasyon merkezi referansıdır; pickup veya operasyon noktası değildir.',
      kaydirIpucu: '← Kaydırarak tüm noktaları görün →',
    },
    journey: {
      locationBaslik: 'Antalya’da nerede kalıyorsunuz?',
      locationAlt: 'Size uygun transfer bölgelerini ve ileride kişisel mesafe bilgilerini göstermek için bölgenizi seçin.',
      locationLabel: 'Konaklama bölgesi',
      locationPlaceholder: 'Bölge seçin',
      locationSave: 'Kaydet',
      locationLater: 'Şimdi değil',
      locationCurrent: 'Konumunuz: {location}',
      locationChange: 'Değiştir',
      locationSaved: 'Konum tercihiniz kaydedildi.',
      previewEyebrow: 'Interactive Journey',
      previewBaslik: 'Bu tur için journey hazırlığı aktif',
      previewMetin: 'Doğrulanmış program adımlarını ve seçtiğiniz transfer bölgesini kullanarak journey deneyimini hazırlıyoruz.',
      previewSelectedLocation: 'Seçili bölge: {location}',
      previewNoLocation: 'Bölgenizi ana sayfadaki konum seçiciden kaydedebilirsiniz.',
      previewActivities: '{count} aktivite',
      previewDuration: '{hours} saat toplam program',
      previewTransfer: 'Transfer dahil',
      previewMeal: 'Öğle yemeği dahil',
      previewNote: 'Bu önizleme gerçek GPS takibi değildir.',
      teaserEyebrow: 'Interactive Journey',
      teaserTitle: 'Macera gününüzü keşfedin',
      teaserText: 'Otelden alınıştan aktivite akışına ve dönüş transferine kadar Adventure Combo gününüzü interaktif olarak keşfedin.',
      exploreJourney: 'Yolculuğu Keşfet',
      closeJourney: 'Yolculuğu Kapat',
      experienceEyebrow: 'Interactive Journey',
      experienceTitle: 'Adventure Combo gününü deneyimleyin',
      experienceText: 'Program akışını doğrulanmış etaplarla, kontrollü ve görsel bir sırada keşfedin.',
      startJourney: 'Yolculuğu Başlat',
      pause: 'Duraklat',
      restart: 'Yeniden başlat',
      startingArea: 'Başlangıç bölgeniz: {location}',
      noStartingArea: 'Başlangıç bölgenizi ana sayfadan seçebilirsiniz.',
      tourFlow: 'Tur akışı',
      activity: 'Aktivite',
      transferIncluded: 'Transfer dahil',
      lunchIncluded: 'Öğle yemeği dahil',
      waterActivity: 'Su aktivitesi var',
      familyFriendly: 'Çocuk dostu',
      activityDistance: 'Aktivite mesafesi',
      visualFlowNote: 'Program akışının görsel gösterimidir.',
      stageOf: 'Etap {current} / {total}',
      nowShowing: 'Gösterilen etap',
      minutesShort: 'dk',
      hoursShort: 'sa',
      metersShort: 'm',
      stageDuration: 'Süre',
      stageDistance: 'Aktivite mesafesi',
      flowStart: 'Başlangıç',
      flowTransfer: 'Transfer',
      flowAdventureArea: 'Macera alanı',
      flowActivities: 'Aktiviteler',
      flowReturn: 'Dönüş',
      liveMapLabel: 'Adventure Combo demo canlı haritası',
      demoMode: 'Demo harita',
      verifiedMode: 'Doğrulanmış harita',
      pickupReferencePoint: 'Bölge referans noktası',
    },
    kisaltma: { saat: 'sa', turAdet: { other: 'tur' } },

    plan_nav: 'Plan yap',
    plan_baslik: 'Tatilinizi planlayalım',
    plan_ozet: 'Üç soru, üç öneri. Bir dakikadan kısa sürer.',
    plan_soru1: 'Kaç gününüz var?',
    plan_s1: ['2-3 gün', '4-5 gün', '6-7 gün', 'Bir haftadan fazla'],
    plan_soru2: 'Kimlerle geldiniz?',
    plan_s2: ['Çift', 'Çocuklu aile', 'Arkadaş grubu', 'Yalnız'],
    plan_soru3: 'Ne tarz seversiniz?',
    plan_soru3_ipucu: 'Birden fazla seçebilirsiniz.',
    plan_s3: ['Deniz ve tekne', 'Tarih ve kültür', 'Macera ve adrenalin', 'Rahatlama'],
    plan_ileri: 'Devam',
    plan_geri: 'Geri',
    plan_adim: 'Adım {n} / {t}',
    plan_sonuclari_gor: 'Sonuçları gör',
    plan_rozet: 'Size uygun',
    plan_stil_kisa: ['deniz', 'tarih', 'macera', 'rahatlama'],
    plan_neden_stil: '{g} kalacaksınız ve {s} sevdiğinizi söylediniz.',
    plan_neden_aile: 'Çocuklu ailelere uygun.',
    plan_neden_populer: 'En çok tercih edilen turlarımızdan.',
    plan_bos: 'Seçimlerinize tam uyan tur bulamadık, en çok tercih edilenler bunlar.',
    plan_sonuc_baslik: 'Size önerdiğimiz üç tur',
    plan_wa_buton: 'Bu planı WhatsApp’tan sor',
    plan_yeniden: 'Yeniden başla',
    plan_msj_giris: 'Merhaba, planlayıcıdan şu turlar önerildi:',
    plan_msj_kalis: '{g} kalacağız, {p}.',
    plan_msj_kapanis: 'Uygunluk ve fiyat için bilgi alabilir miyiz?',

    rehber_grup: 'Antalya rehberi',
    rehber_pratik_baslik: 'Pratik bilgiler',
    rehber_ucretsiz_baslik: 'Antalya’da ücretsiz yapılacaklar',
    rehber_guncelleme: 'Son güncelleme',
    rehber_dogrulama: 'Buradaki bilgiler zamanla değişebilir. Sayfa, yayından önce resmî kaynaklardan doğrulanır.',
    rehber_soru_wa: 'Başka bir sorunuz mu var? Yazın.',
    rehber_ucretsiz_kapanis: 'Şehir dışına çıkmak isterseniz turlarımıza bakın.',
    rehber_ulasim: 'Ulaşım',
    rehber_sure: 'Süre',

    transfer_baslik: 'Antalya Havalimanı Transferi',
    transfer_eyebrow: 'Özel VIP Transfer',
    transfer_ozet: 'Antalya Havalimanı ile otelleriniz arasında Mercedes V-Class ve Sprinter VIP araçlarımızla konforlu, güvenli ve sabit fiyatlı özel transfer — 6 ile 12 kişiye kadar gruplara uygun.',
    transfer_h1_alt: 'Uçağınız iner inmez sizi karşılıyor, grubunuzun büyüklüğüne göre V-Class veya Sprinter VIP aracımızla otelinize kadar keyifli ve güvenli bir yolculuk sunuyoruz.',
    transfer_cta_wa: 'WhatsApp’ta Devam Et',
    transfer_cta_fiyat: 'Fiyatları Gör',
    transfer_ozellik_1_baslik: 'Konforlu VIP Araç',
    transfer_ozellik_1_metin: 'Mercedes V-Class ve Sprinter — deri koltuklar, yıldızlı tavan ve özel aydınlatmayla her grup büyüklüğüne premium bir yolculuk.',
    transfer_ozellik_2_baslik: 'Uçuş Takibi',
    transfer_ozellik_2_metin: 'Uçuşunuzu takip ediyoruz; rötar olsa bile karşılamada bekliyoruz.',
    transfer_ozellik_3_baslik: 'Profesyonel Şoför',
    transfer_ozellik_3_metin: 'Güler yüzlü, deneyimli şoförlerimiz sizi karşılar ve bagajınızı taşır.',
    transfer_ozellik_4_baslik: 'Sabit Fiyat',
    transfer_ozellik_4_metin: 'Sürpriz ek ücret yok — araç başına net fiyat, grubunuza uygun araç otomatik belirlenir.',
    transfer_arac_baslik: 'Araç Seçenekleri',
    transfer_arac_standart_ad: 'Standart VIP — Mercedes V-Class',
    transfer_arac_standart_aciklama: 'Küçük ve orta gruplar için deri koltuklu, konforlu VIP araç.',
    transfer_arac_buyuk_ad: 'Büyük Grup VIP — Mercedes Sprinter',
    transfer_arac_buyuk_aciklama: 'Kalabalık gruplar için TV, masa ve premium koltuklarla geniş VIP araç.',
    transfer_arac_kapasite: '{n} kişiye kadar',
    transfer_fiyat_baslik: 'Bölgelere Göre Transfer Fiyatları',
    transfer_fiyat_alt: 'Tüm fiyatlar tek yön ve araç başınadır.',
    transfer_dogu_baslik: 'Doğu Bölgeleri',
    transfer_bati_baslik: 'Batı Bölgeleri',
    transfer_tablo_bolge: 'Bölge',
    transfer_tablo_fiyat: 'Fiyat',
    transfer_not: 'Fiyatlar tek yön, araç başınadır. Listede yer almayan bir bölge için WhatsApp’tan bize ulaşın.',
    transfer_wa_mesaj_giris: 'Merhaba, Antalya Havalimanı transferi hakkında bilgi almak istiyorum.',
    transfer_wa_mesaj_guzergah: 'Güzergah: Antalya Havalimanı ⇄ {b}',
    transfer_wa_mesaj_fiyat: 'Fiyat: {f} (tek yön, araç başına)',
    transfer_wa_mesaj_kapanis: 'Uygunluk ve müsait saatler için bilgi verebilir misiniz?',
    transfer_galeri_alt: 'SER Tourism VIP havalimanı transfer aracı',
    transfer_ana_teaser_baslik: 'Havalimanı Transferi',
    transfer_ana_teaser_metin: 'Antalya Havalimanı ile oteliniz arasında V-Class ve Sprinter VIP araçlarımızla konforlu, sabit fiyatlı özel transfer — 6 ile 12 kişiye kadar gruplara uygun.',
    transfer_ana_teaser_buton: 'Transfer Fiyatlarını Gör',

    ramses_baslik: 'Dövme & Piercing Stüdyosu',
    ramses_ozet: 'Antalya’da dövme ve piercing hizmeti. Tasarım ve otelden alış ücretsiz, randevu WhatsApp üzerinden.',
    ramses_h1_alt: 'Antalya’da deneyimli sanatçılarla dövme ve piercing. Tasarım ücretsiz, otelden alış ücretsiz.',
    ramses_badge_tasarim: 'Ücretsiz Tasarım',
    ramses_badge_alis: 'Ücretsiz Alış',
    ramses_puan_metin: '{n} Değerlendirme',
    ramses_puan_sr: '5 üzerinden 5 yıldız',
    ramses_yorumlar_baslik: 'Google Yorumları',
    ramses_yorum_kaynagi: 'Google Yorumu',
    ramses_galeri_baslik: 'Stüdyodan çalışmalar',
    ramses_cta_baslik: 'Randevu ve detaylar için WhatsApp’tan yazın',
    ramses_cta_metin: 'Tasarım ve otelden alış ücretsizdir.',
    ramses_galeri_alt: 'Dövme ve piercing çalışması',
    ramses_wa_konu: 'Dövme/piercing hakkında bilgi almak istiyorum.',

    s_biz: 'Biz',
    s_hakkimizda: 'Hakkımızda',
    s_iptal: 'İptal politikası',
    s_sss: 'SSS',
    s_iletisim: 'İletişim',
    s_gizlilik: 'Gizlilik',

    meta_ana_baslik: 'Antalya turları — ödeme tur günü',
    meta_ana_aciklama: 'Antalya çıkışlı turlar. Altı dilde destek, otel transferi, ödeme tur günü, 24 saate kadar ücretsiz iptal.',
    meta_tur_aciklama: '{b} — {f} €’dan başlayan. Otel transferi, ödeme tur günü, 24 saate kadar ücretsiz iptal.',

    yt_aciklama: '[Tur açıklaması eklenecek — 6 dilde metinler ayrıca yazılacak]',
    yt_program: '[Program eklenecek]',
    yt_liste: '[Liste tamamlanacak]',
    yt_metin_sayfa: '[Bu sayfanın metni eklenecek]',
  },

  en: {
    nav_turlar: 'Tours',
    nav_transfer: 'Transfer',
    ana_sayfa: 'Home',
    tum_turlar: 'All tours',
    tum_hizmetler: 'All services',
    dil_secici_etiket: 'Language',
    para_secici_etiket: 'Currency',
    menu_ac: 'Open menu',
    menu_kapat: 'Close menu',
    tema_degistir: 'Change theme',
    instagram_etiket: 'Open on Instagram',
    whatsapp_etiket: 'Write on WhatsApp',

    hero_h1: 'What are you doing tomorrow in Antalya?',
    hero_alt: '30 tours, support in six languages, pay on the day.',
    hero_arama: 'Where would you like to go?',
    hero_arama_buton: 'Search',
    rozet_odeme: 'Pay on the day',
    rozet_transfer: 'Hotel transfer included',
    rozet_iptal: 'Free cancellation up to 24 hours',
    vitrin_bolum_etiket: 'Featured tours',
    vitrin_rezervasyon_buton: 'Book Now',
    vitrin_slayt_git: 'Go to slide {n}',
    vitrin_onceki_tur: 'Previous tour',
    vitrin_sonraki_tur: 'Next tour',
    b_one_cikan: 'Featured services',
    b_one_cikan_eyebrow: 'Experiences',
    b_kategoriler: 'Categories',
    b_neden: 'Why us',
    b_bolgeler: 'Where are you staying?',
    neden: [
      { baslik: 'Pay on the day, no deposit', metin: 'We confirm your booking; you pay on the day of the tour.' },
      { baslik: 'Here every day, 08:00–22:00', metin: 'We reply to your message the same day.' },
      { baslik: 'In your language', metin: 'Turkish, English, Russian, German, Polish, Romanian.' },
      { baslik: 'Hotel pickup', metin: 'Your pickup time is sent on WhatsApp the day before.' },
      { baslik: 'Free cancellation up to 24 hours', metin: 'If the weather is bad, the tour is cancelled at no cost.' },
    ],

    filtre_kategori: 'Category',
    filtre_bolge: 'Pickup area',
    filtre_sure: 'Duration',
    filtre_fiyat: 'Price',
    tumu: 'All',
    yarim_gun: 'Half day',
    tam_gun: 'Full day',
    cok_gunlu: 'Multi-day',
    sonuc_yok: 'No tours match these filters.',
    liste_giris_yt: 'Compare selected experiences around Antalya in one clear catalogue. Transfer status, prices and tour styles are kept easy to scan.',
    bolge_baslik: 'Tours from {b}',
    sehir_baslik: '{b} tours',

    fiyat_baslayan: 'from {f} €',
    fiyat_kategorileri: 'Price categories',
    fiyat_yetiskin: 'Adult',
    fiyat_cocuk: 'Children ages 3–11',
    fiyat_bebek: 'Children ages 0–2',
    fiyat_ucretsiz: 'Free',
    fiyat_yas_12: 'Ages 12+',
    odeme_gunu: 'Pay on the day of the tour',
    transfer_dahil: 'Transfer included',
    transfer_haric: 'Without transfer',
    saat_kisa: 'hrs',
    gun_kisa: 'days',

    b_aciklama: 'About this tour',
    b_program: 'Itinerary',
    b_dahil: 'Included',
    b_dahil_degil: 'Not included',
    b_kosullar: 'Good to know',
    b_bulusma: 'Meeting point',
    b_notlar: 'Important notes',
    b_benzer: 'Similar tours',
    rezervasyon_baslik: 'Book this tour',
    rezervasyon_alt: 'Enter your date and guests, then continue quickly in WhatsApp.',
    tur_hero_kategori: 'Tour',
    tur_hero_ogle: 'Lunch included',
    tur_hero_gunler: 'Tour days',
    yas_12_notu: 'Guests aged 12 and over are charged the adult price.',
    galeri_onceki: 'Previous photo',
    galeri_sonraki: 'Next photo',
    galeri_kapat: 'Close',
    k_grup: 'Group size',
    k_yas: 'Age',
    k_zorluk: 'Difficulty',
    k_esyalar: 'What to bring',
    k_alinis: 'Hotel pickup',
    k_donus: 'Return',
    k_kalkis: 'Pickup areas',
    zorluk_kolay: 'easy',
    zorluk_orta: 'moderate',
    zorluk_zor: 'demanding',
    iptal_kalip: 'Free cancellation up to {saat} hours before',
    hava_iptali_metni: 'If the weather is not suitable, the tour is cancelled at no cost.',

    f_tur: 'Tour',
    f_tarih: 'Date',
    f_yetiskin: 'Adults',
    f_cocuk: 'Children',
    f_cocuk_yas: 'Children’s ages',
    f_cocuk_yas_ipucu: 'e.g. 5, 9',
    f_otel: 'Hotel / area',
    f_ad: 'Full name',
    f_not: 'Note',
    f_buton: 'Continue in WhatsApp',
    f_onizleme: 'Your message',
    f_takvim_ac: 'Open calendar',
    f_ay_onceki: 'Previous month',
    f_ay_sonraki: 'Next month',
    f_kapat: 'Close',
    f_azalt: 'Decrease',
    f_arttir: 'Increase',
    f_zorunlu: 'Required field',
    mobil_cta: 'Ask on WhatsApp',
    m_selamlama: 'Hello,',
    m_kapanis: 'Thank you.',
    m_tur: 'Tour',
    m_tarih: 'Date',
    m_kisi: 'Guests',
    m_otel: 'Hotel',
    m_ad: 'Name',
    m_not: 'Note',
    m_yetiskin: 'adults',
    m_cocuk: 'children',
    m_yas: 'ages',

    hava_etiket: 'Weather in Antalya',
    hava_guvence: 'Most of our tours run in all weather. If a tour is cancelled, there is no charge.',
    hava_bugun: 'Today',
    mesafe: {
      baslik: 'Antalya Destinations',
      altBaslik: '11 discovery points selected for you',
      svgBaslik: 'Antalya destination discovery map',
      svgAciklama: 'The map shows 11 destination centres around Antalya. Points are not pickup, route or operation coordinates.',
      kuzey: 'NORTH',
      konaklamali: 'overnight',
      legendLabel: 'Map legend',
      aktifEtiket: 'Active destination',
      destinasyonEtiket: 'Antalya destination',
      aktifTurSayisi: '{count} active tour',
      aktifTurYok: 'Discovery point',
      turSec: 'Choose a tour',
      dipnot: 'Coordinates are destination-centre references, not pickup or operation points.',
      kaydirIpucu: '← Swipe to see every point →',
    },
    journey: {
      locationBaslik: 'Where are you staying in Antalya?',
      locationAlt: 'Choose your area so we can show suitable transfer zones and future personalised distance details.',
      locationLabel: 'Accommodation area',
      locationPlaceholder: 'Choose an area',
      locationSave: 'Save',
      locationLater: 'Not now',
      locationCurrent: 'Your location: {location}',
      locationChange: 'Change',
      locationSaved: 'Your location preference has been saved.',
      previewEyebrow: 'Interactive Journey',
      previewBaslik: 'Journey preparation is active for this tour',
      previewMetin: 'We are preparing the journey experience using verified programme steps and your selected transfer area.',
      previewSelectedLocation: 'Selected area: {location}',
      previewNoLocation: 'You can save your area from the location selector on the home page.',
      previewActivities: '{count} activities',
      previewDuration: '{hours} hours total programme',
      previewTransfer: 'Transfer included',
      previewMeal: 'Lunch included',
      previewNote: 'This preview is not real-time GPS tracking.',
      teaserEyebrow: 'Interactive Journey',
      teaserTitle: 'Explore your adventure day',
      teaserText: 'Discover your Adventure Combo day interactively, from hotel pickup to the activity flow and return transfer.',
      exploreJourney: 'Explore the Journey',
      closeJourney: 'Close Journey',
      experienceEyebrow: 'Interactive Journey',
      experienceTitle: 'Experience the Adventure Combo day',
      experienceText: 'Explore the tour flow through verified stages in a controlled visual sequence.',
      startJourney: 'Experience the Journey',
      pause: 'Pause',
      restart: 'Restart',
      startingArea: 'Your starting area: {location}',
      noStartingArea: 'You can choose your starting area on the home page.',
      tourFlow: 'Tour flow',
      activity: 'Activity',
      transferIncluded: 'Transfer included',
      lunchIncluded: 'Lunch included',
      waterActivity: 'Water activity included',
      familyFriendly: 'Family friendly',
      activityDistance: 'Activity distance',
      visualFlowNote: 'Visual representation of the tour flow.',
      stageOf: 'Stage {current} of {total}',
      nowShowing: 'Now showing',
      minutesShort: 'min',
      hoursShort: 'h',
      metersShort: 'm',
      stageDuration: 'Duration',
      stageDistance: 'Activity distance',
      flowStart: 'Start',
      flowTransfer: 'Transfer',
      flowAdventureArea: 'Adventure area',
      flowActivities: 'Activities',
      flowReturn: 'Return',
      liveMapLabel: 'Adventure Combo demo live map',
      demoMode: 'Demo map',
      verifiedMode: 'Verified map',
      pickupReferencePoint: 'Area reference point',
    },
    kisaltma: { saat: 'hrs', saatTekil: 'hr', turAdet: { one: 'tour', other: 'tours' } },

    plan_nav: 'Plan a trip',
    plan_baslik: 'Plan your holiday',
    plan_ozet: 'Three questions, three suggestions. Takes under a minute.',
    plan_soru1: 'How many days do you have?',
    plan_s1: ['2-3 days', '4-5 days', '6-7 days', 'More than a week'],
    plan_soru2: 'Who are you travelling with?',
    plan_s2: ['Couple', 'Family with kids', 'Group of friends', 'Solo'],
    plan_soru3: 'What do you enjoy?',
    plan_soru3_ipucu: 'Choose as many as you like.',
    plan_s3: ['Sea and boats', 'History and culture', 'Adventure and adrenaline', 'Relaxation'],
    plan_ileri: 'Next',
    plan_geri: 'Back',
    plan_adim: 'Step {n} of {t}',
    plan_sonuclari_gor: 'See results',
    plan_rozet: 'Suits you',
    plan_stil_kisa: ['the sea', 'history', 'adventure', 'relaxing'],
    plan_neden_stil: 'You are staying {g} and said you like {s}.',
    plan_neden_aile: 'Works well for families with children.',
    plan_neden_populer: 'One of our most booked tours.',
    plan_bos: 'We could not find an exact match, so these are the most popular tours.',
    plan_sonuc_baslik: 'Three tours we suggest',
    plan_wa_buton: 'Ask about this plan on WhatsApp',
    plan_yeniden: 'Start over',
    plan_msj_giris: 'Hello, the planner suggested these tours:',
    plan_msj_kalis: 'We are staying {g}, {p}.',
    plan_msj_kapanis: 'Could you tell us about availability and prices?',

    rehber_grup: 'Antalya guide',
    rehber_pratik_baslik: 'Practical information',
    rehber_ucretsiz_baslik: 'Free things to do in Antalya',
    rehber_guncelleme: 'Last updated',
    rehber_dogrulama: 'Details here can change over time. This page is verified against official sources before publication.',
    rehber_soru_wa: 'Another question? Just write.',
    rehber_ucretsiz_kapanis: 'If you would like to go beyond the city, have a look at our tours.',
    rehber_ulasim: 'Getting there',
    rehber_sure: 'Time needed',

    transfer_baslik: 'Antalya Airport Transfer',
    transfer_eyebrow: 'Private VIP Transfer',
    transfer_ozet: 'Comfortable, safe, fixed-price private transfer between Antalya Airport and your hotel in our Mercedes V-Class and Sprinter VIP vehicles — suited to groups of 6 up to 12.',
    transfer_h1_alt: 'We meet you the moment you land and take you to your hotel in comfort and safety in our V-Class or Sprinter VIP vehicle, matched to your group size.',
    transfer_cta_wa: 'Continue on WhatsApp',
    transfer_cta_fiyat: 'See Prices',
    transfer_ozellik_1_baslik: 'Comfortable VIP Vehicle',
    transfer_ozellik_1_metin: 'Mercedes V-Class and Sprinter — leather seats, a starlit ceiling and ambient lighting for a premium ride, whatever your group size.',
    transfer_ozellik_2_baslik: 'Flight Tracking',
    transfer_ozellik_2_metin: 'We track your flight and wait for you at arrivals, even if it’s delayed.',
    transfer_ozellik_3_baslik: 'Professional Driver',
    transfer_ozellik_3_metin: 'Our friendly, experienced drivers meet you and carry your luggage.',
    transfer_ozellik_4_baslik: 'Fixed Price',
    transfer_ozellik_4_metin: 'No surprise fees — one clear price per vehicle, the right vehicle for your group is assigned automatically.',
    transfer_arac_baslik: 'Vehicle Options',
    transfer_arac_standart_ad: 'Standard VIP — Mercedes V-Class',
    transfer_arac_standart_aciklama: 'A comfortable VIP vehicle with leather seats for small and mid-sized groups.',
    transfer_arac_buyuk_ad: 'Large Group VIP — Mercedes Sprinter',
    transfer_arac_buyuk_aciklama: 'A spacious VIP vehicle with a TV, table and premium seats for larger groups.',
    transfer_arac_kapasite: 'Up to {n} people',
    transfer_fiyat_baslik: 'Transfer Prices by Region',
    transfer_fiyat_alt: 'All prices are one-way and per vehicle.',
    transfer_dogu_baslik: 'Eastern Region',
    transfer_bati_baslik: 'Western Region',
    transfer_tablo_bolge: 'Region',
    transfer_tablo_fiyat: 'Price',
    transfer_not: 'Prices are one-way and per vehicle. For a region not listed here, message us on WhatsApp.',
    transfer_wa_mesaj_giris: 'Hello, I’d like information about the Antalya Airport transfer.',
    transfer_wa_mesaj_guzergah: 'Route: Antalya Airport ⇄ {b}',
    transfer_wa_mesaj_fiyat: 'Price: {f} (one-way, per vehicle)',
    transfer_wa_mesaj_kapanis: 'Could you confirm availability and pickup times?',
    transfer_galeri_alt: 'SER Tourism VIP airport transfer vehicle',
    transfer_ana_teaser_baslik: 'Airport Transfer',
    transfer_ana_teaser_metin: 'Comfortable, fixed-price private transfer between Antalya Airport and your hotel in our V-Class and Sprinter VIP vehicles — suited to groups of 6 up to 12.',
    transfer_ana_teaser_buton: 'See Transfer Prices',

    ramses_baslik: 'Tattoo & Piercing Studio',
    ramses_ozet: 'Tattoo and piercing in Antalya. Free design and free hotel pickup, book on WhatsApp.',
    ramses_h1_alt: 'Tattoo and piercing with experienced artists in Antalya. Free design, free hotel pickup.',
    ramses_badge_tasarim: 'Free Design',
    ramses_badge_alis: 'Free Pickup',
    ramses_puan_metin: '{n} Reviews',
    ramses_puan_sr: '5 out of 5 stars',
    ramses_yorumlar_baslik: 'Google Reviews',
    ramses_yorum_kaynagi: 'Google Review',
    ramses_galeri_baslik: 'Work from the studio',
    ramses_cta_baslik: 'Message on WhatsApp for appointments and details',
    ramses_cta_metin: 'Design and hotel pickup are free.',
    ramses_galeri_alt: 'Tattoo and piercing work',
    ramses_wa_konu: 'I would like information about tattoo/piercing.',

    s_biz: 'Company',
    s_hakkimizda: 'About us',
    s_iptal: 'Cancellation policy',
    s_sss: 'FAQ',
    s_iletisim: 'Contact',
    s_gizlilik: 'Privacy',

    meta_ana_baslik: 'Antalya tours — pay on the day',
    meta_ana_aciklama: 'Tours from Antalya. Support in six languages, hotel transfer, pay on the day, free cancellation up to 24 hours.',
    meta_tur_aciklama: '{b} — from {f} €. Hotel transfer, pay on the day, free cancellation up to 24 hours.',

    yt_aciklama: '[Tour description to be added — texts are being written in six languages]',
    yt_program: '[Itinerary to be added]',
    yt_liste: '[List to be completed]',
    yt_metin_sayfa: '[Text for this page to be added]',
  },

  ru: {
    nav_turlar: 'Туры',
    nav_transfer: 'Трансфер',
    ana_sayfa: 'Главная',
    tum_turlar: 'Все экскурсии',
    tum_hizmetler: 'Все услуги',
    dil_secici_etiket: 'Язык',
    para_secici_etiket: 'Валюта',
    menu_ac: 'Открыть меню',
    menu_kapat: 'Закрыть меню',
    tema_degistir: 'Сменить тему',
    instagram_etiket: 'Открыть в Instagram',
    whatsapp_etiket: 'Написать в WhatsApp',

    hero_h1: 'Какие планы на завтра в Анталье?',
    hero_alt: '30 экскурсий, поддержка на шести языках, оплата в день тура.',
    hero_arama: 'Куда вы хотите поехать?',
    hero_arama_buton: 'Найти',
    rozet_odeme: 'Оплата в день тура',
    rozet_transfer: 'Трансфер из отеля включён',
    rozet_iptal: 'Бесплатная отмена за 24 часа',
    vitrin_bolum_etiket: 'Популярные туры',
    vitrin_rezervasyon_buton: 'Забронировать',
    vitrin_slayt_git: 'Перейти к слайду {n}',
    vitrin_onceki_tur: 'Предыдущий тур',
    vitrin_sonraki_tur: 'Следующий тур',
    b_one_cikan: 'Популярные услуги',
    b_one_cikan_eyebrow: 'Впечатления',
    b_kategoriler: 'Категории',
    b_neden: 'Почему мы',
    b_bolgeler: 'Откуда вы выезжаете?',
    neden: [
      { baslik: 'Оплата в день тура, без предоплаты', metin: 'Мы подтверждаем бронь, вы платите в день экскурсии.' },
      { baslik: 'Каждый день с 08:00 до 22:00', metin: 'Отвечаем на сообщение в тот же день.' },
      { baslik: 'На вашем языке', metin: 'Турецкий, английский, русский, немецкий, польский, румынский.' },
      { baslik: 'Забираем из отеля', metin: 'Время выезда сообщаем в WhatsApp за день до тура.' },
      { baslik: 'Бесплатная отмена за 24 часа', metin: 'Если погода плохая, тур отменяется без оплаты.' },
    ],

    filtre_kategori: 'Категория',
    filtre_bolge: 'Район выезда',
    filtre_sure: 'Длительность',
    filtre_fiyat: 'Цена',
    tumu: 'Все',
    yarim_gun: 'Полдня',
    tam_gun: 'Весь день',
    cok_gunlu: 'Несколько дней',
    sonuc_yok: 'По этим фильтрам туров не найдено.',
    liste_giris_yt: 'Сравните избранные экскурсии и развлечения в Анталье и окрестностях в одном каталоге. Статус трансфера, цены и формат тура показаны ясно.',
    bolge_baslik: 'Экскурсии из района {b}',
    sehir_baslik: '{b}: туры и экскурсии',

    fiyat_baslayan: 'от {f} €',
    fiyat_kategorileri: 'Категории цен',
    fiyat_yetiskin: 'Взрослый',
    fiyat_cocuk: 'Дети 3–11 лет',
    fiyat_bebek: 'Дети 0–2 лет',
    fiyat_ucretsiz: 'Бесплатно',
    fiyat_yas_12: '12+ лет',
    odeme_gunu: 'Оплата в день тура',
    transfer_dahil: 'Трансфер включён',
    transfer_haric: 'Без трансфера',
    saat_kisa: 'ч',
    gun_kisa: 'дн.',

    b_aciklama: 'Об экскурсии',
    b_program: 'Программа',
    b_dahil: 'Включено',
    b_dahil_degil: 'Не включено',
    b_kosullar: 'Условия участия',
    b_bulusma: 'Место встречи',
    b_notlar: 'Важная информация',
    b_benzer: 'Похожие экскурсии',
    rezervasyon_baslik: 'Забронировать тур',
    rezervasyon_alt: 'Укажите дату и гостей, затем продолжите в WhatsApp.',
    tur_hero_kategori: 'Тур',
    tur_hero_ogle: 'Обед включён',
    tur_hero_gunler: 'Дни тура',
    yas_12_notu: 'Гости от 12 лет оплачиваются по взрослому тарифу.',
    galeri_onceki: 'Предыдущее фото',
    galeri_sonraki: 'Следующее фото',
    galeri_kapat: 'Закрыть',
    k_grup: 'Группа',
    k_yas: 'Возраст',
    k_zorluk: 'Сложность',
    k_esyalar: 'Что взять с собой',
    k_alinis: 'Выезд из отеля',
    k_donus: 'Возвращение',
    k_kalkis: 'Районы выезда',
    zorluk_kolay: 'лёгкий',
    zorluk_orta: 'средний',
    zorluk_zor: 'сложный',
    iptal_kalip: 'Бесплатная отмена не позднее чем за {saat} ч.',
    hava_iptali_metni: 'При неподходящей погоде тур отменяется без оплаты.',

    f_tur: 'Экскурсия',
    f_tarih: 'Дата',
    f_yetiskin: 'Взрослые',
    f_cocuk: 'Дети',
    f_cocuk_yas: 'Возраст детей',
    f_cocuk_yas_ipucu: 'напр. 5, 9',
    f_otel: 'Отель / район',
    f_ad: 'Имя и фамилия',
    f_not: 'Комментарий',
    f_buton: 'Продолжить в WhatsApp',
    f_onizleme: 'Ваше сообщение',
    f_takvim_ac: 'Открыть календарь',
    f_ay_onceki: 'Предыдущий месяц',
    f_ay_sonraki: 'Следующий месяц',
    f_kapat: 'Закрыть',
    f_azalt: 'Уменьшить',
    f_arttir: 'Увеличить',
    f_zorunlu: 'Обязательное поле',
    mobil_cta: 'Спросить в WhatsApp',
    m_selamlama: 'Здравствуйте,',
    m_kapanis: 'Спасибо.',
    m_tur: 'Экскурсия',
    m_tarih: 'Дата',
    m_kisi: 'Гости',
    m_otel: 'Отель',
    m_ad: 'Имя',
    m_not: 'Комментарий',
    m_yetiskin: 'взросл.',
    m_cocuk: 'дет.',
    m_yas: 'возраст',

    hava_etiket: 'Погода в Анталье',
    hava_guvence: 'Большинство наших экскурсий проходят в любую погоду. Если тур отменяется, вы ничего не платите.',
    hava_bugun: 'Сегодня',
    mesafe: {
      baslik: 'Направления Антальи',
      altBaslik: '11 точек, выбранных для вас',
      svgBaslik: 'Карта направлений Антальи',
      svgAciklama: 'Карта показывает 11 центров направлений вокруг Антальи. Точки не являются местами трансфера, маршрутом или операционными координатами.',
      kuzey: 'СЕВЕР',
      konaklamali: 'с ночёвкой',
      legendLabel: 'Условные обозначения карты',
      aktifEtiket: 'Активное направление',
      destinasyonEtiket: 'Направление Антальи',
      aktifTurSayisi: '{count} актив. тур',
      aktifTurYok: 'Точка для знакомства',
      turSec: 'Выбрать тур',
      dipnot: 'Координаты относятся к центру направления, а не к трансферу или операции.',
      kaydirIpucu: '← Пролистайте, чтобы увидеть все точки →',
    },
    journey: {
      locationBaslik: 'В каком районе Антальи вы остановились?',
      locationAlt: 'Выберите район, чтобы мы показывали подходящие зоны трансфера и позже персональные данные по расстоянию.',
      locationLabel: 'Район проживания',
      locationPlaceholder: 'Выберите район',
      locationSave: 'Сохранить',
      locationLater: 'Не сейчас',
      locationCurrent: 'Ваш район: {location}',
      locationChange: 'Изменить',
      locationSaved: 'Ваш район сохранён.',
      previewEyebrow: 'Interactive Journey',
      previewBaslik: 'Для этого тура подготовлен journey-блок',
      previewMetin: 'Мы готовим маршрутный опыт на основе подтверждённых шагов программы и выбранной зоны трансфера.',
      previewSelectedLocation: 'Выбранный район: {location}',
      previewNoLocation: 'Район можно сохранить в блоке выбора на главной странице.',
      previewActivities: '{count} активности',
      previewDuration: '{hours} часов общая программа',
      previewTransfer: 'Трансфер включён',
      previewMeal: 'Обед включён',
      previewNote: 'Это предварительный просмотр, не GPS-трекинг в реальном времени.',
      teaserEyebrow: 'Interactive Journey',
      teaserTitle: 'Откройте день приключений',
      teaserText: 'Интерактивно изучите день Adventure Combo: от трансфера из отеля до активностей и обратной дороги.',
      exploreJourney: 'Открыть journey',
      closeJourney: 'Закрыть journey',
      experienceEyebrow: 'Interactive Journey',
      experienceTitle: 'Почувствуйте день Adventure Combo',
      experienceText: 'Посмотрите поток тура по подтверждённым этапам в спокойной визуальной последовательности.',
      startJourney: 'Начать journey',
      pause: 'Пауза',
      restart: 'Начать заново',
      startingArea: 'Ваш район старта: {location}',
      noStartingArea: 'Район старта можно выбрать на главной странице.',
      tourFlow: 'Ход тура',
      activity: 'Активность',
      transferIncluded: 'Трансфер включён',
      lunchIncluded: 'Обед включён',
      waterActivity: 'Есть водная активность',
      familyFriendly: 'Подходит для семей',
      activityDistance: 'Длина активности',
      visualFlowNote: 'Визуальное представление программы тура.',
      stageOf: 'Этап {current} из {total}',
      nowShowing: 'Сейчас показан этап',
      minutesShort: 'мин',
      hoursShort: 'ч',
      metersShort: 'м',
      stageDuration: 'Длительность',
      stageDistance: 'Длина активности',
      flowStart: 'Старт',
      flowTransfer: 'Трансфер',
      flowAdventureArea: 'Зона приключений',
      flowActivities: 'Активности',
      flowReturn: 'Возврат',
      liveMapLabel: 'Демо live map Adventure Combo',
      demoMode: 'Демо-карта',
      verifiedMode: 'Проверенная карта',
      pickupReferencePoint: 'Ориентир района',
    },
    kisaltma: { saat: 'ч', turAdet: { other: 'экс.' } },

    plan_nav: 'Подобрать тур',
    plan_baslik: 'Спланируем ваш отдых',
    plan_ozet: 'Три вопроса — три варианта. Меньше минуты.',
    plan_soru1: 'Сколько у вас дней?',
    plan_s1: ['2-3 дня', '4-5 дней', '6-7 дней', 'Больше недели'],
    plan_soru2: 'С кем вы приехали?',
    plan_s2: ['Пара', 'Семья с детьми', 'Компания друзей', 'Один'],
    plan_soru3: 'Что вам нравится?',
    plan_soru3_ipucu: 'Можно выбрать несколько.',
    plan_s3: ['Море и лодки', 'История и культура', 'Приключения и адреналин', 'Отдых и релакс'],
    plan_ileri: 'Далее',
    plan_geri: 'Назад',
    plan_adim: 'Шаг {n} из {t}',
    plan_sonuclari_gor: 'Показать результаты',
    plan_rozet: 'Вам подойдёт',
    plan_stil_kisa: ['море', 'историю', 'приключения', 'отдых'],
    plan_neden_stil: 'Вы здесь на {g} и любите {s}.',
    plan_neden_aile: 'Подходит для семей с детьми.',
    plan_neden_populer: 'Одна из самых популярных экскурсий.',
    plan_bos: 'Точного совпадения не нашлось, вот самые популярные экскурсии.',
    plan_sonuc_baslik: 'Три экскурсии для вас',
    plan_wa_buton: 'Спросить об этом плане в WhatsApp',
    plan_yeniden: 'Начать заново',
    plan_msj_giris: 'Здравствуйте, планировщик подобрал эти экскурсии:',
    plan_msj_kalis: 'Мы здесь на {g}, {p}.',
    plan_msj_kapanis: 'Подскажите, пожалуйста, наличие мест и цены.',

    rehber_grup: 'Гид по Анталье',
    rehber_pratik_baslik: 'Полезная информация',
    rehber_ucretsiz_baslik: 'Бесплатные развлечения в Анталье',
    rehber_guncelleme: 'Обновлено',
    rehber_dogrulama: 'Информация со временем может меняться. Перед публикацией страница сверяется с официальными источниками.',
    rehber_soru_wa: 'Остались вопросы? Напишите нам.',
    rehber_ucretsiz_kapanis: 'Если захотите выбраться за город, посмотрите наши экскурсии.',
    rehber_ulasim: 'Как добраться',
    rehber_sure: 'Сколько времени',

    transfer_baslik: 'Трансфер из аэропорта Анталии',
    transfer_eyebrow: 'Индивидуальный VIP-трансфер',
    transfer_ozet: 'Комфортный, безопасный трансфер по фиксированной цене между аэропортом Анталии и вашим отелем на VIP-автомобилях Mercedes V-Class и Sprinter — подходит для групп от 6 до 12 человек.',
    transfer_h1_alt: 'Мы встречаем вас сразу после посадки и с комфортом и безопасностью довозим до отеля на VIP-автомобиле V-Class или Sprinter, который подбирается по размеру вашей группы.',
    transfer_cta_wa: 'Продолжить в WhatsApp',
    transfer_cta_fiyat: 'Смотреть цены',
    transfer_ozellik_1_baslik: 'Комфортный VIP-автомобиль',
    transfer_ozellik_1_metin: 'Mercedes V-Class и Sprinter — кожаные сиденья, звёздный потолок и мягкая подсветка для поездки премиум-класса при любом размере группы.',
    transfer_ozellik_2_baslik: 'Отслеживание рейса',
    transfer_ozellik_2_metin: 'Мы отслеживаем ваш рейс и ждём вас на встрече, даже если он задержится.',
    transfer_ozellik_3_baslik: 'Профессиональный водитель',
    transfer_ozellik_3_metin: 'Наши приветливые и опытные водители встречают вас и помогают с багажом.',
    transfer_ozellik_4_baslik: 'Фиксированная цена',
    transfer_ozellik_4_metin: 'Никаких скрытых доплат — понятная цена за автомобиль, подходящий автомобиль подбирается по размеру группы.',
    transfer_arac_baslik: 'Варианты автомобилей',
    transfer_arac_standart_ad: 'Стандарт VIP — Mercedes V-Class',
    transfer_arac_standart_aciklama: 'Комфортный VIP-автомобиль с кожаными сиденьями для небольших и средних групп.',
    transfer_arac_buyuk_ad: 'VIP для больших групп — Mercedes Sprinter',
    transfer_arac_buyuk_aciklama: 'Просторный VIP-автомобиль с телевизором, столиком и премиальными сиденьями для больших групп.',
    transfer_arac_kapasite: 'До {n} человек',
    transfer_fiyat_baslik: 'Цены на трансфер по районам',
    transfer_fiyat_alt: 'Все цены указаны в одну сторону, за автомобиль.',
    transfer_dogu_baslik: 'Восточное направление',
    transfer_bati_baslik: 'Западное направление',
    transfer_tablo_bolge: 'Район',
    transfer_tablo_fiyat: 'Цена',
    transfer_not: 'Цены указаны в одну сторону, за автомобиль. Если вашего района нет в списке, напишите нам в WhatsApp.',
    transfer_wa_mesaj_giris: 'Здравствуйте, хочу узнать о трансфере из аэропорта Анталии.',
    transfer_wa_mesaj_guzergah: 'Маршрут: аэропорт Анталии ⇄ {b}',
    transfer_wa_mesaj_fiyat: 'Цена: {f} (в одну сторону, за автомобиль)',
    transfer_wa_mesaj_kapanis: 'Подскажите, пожалуйста, о наличии и времени подачи машины?',
    transfer_galeri_alt: 'VIP-автомобиль трансфера SER Tourism',
    transfer_ana_teaser_baslik: 'Трансфер из аэропорта',
    transfer_ana_teaser_metin: 'Комфортный трансфер по фиксированной цене между аэропортом Анталии и вашим отелем на VIP-автомобилях V-Class и Sprinter — подходит для групп от 6 до 12 человек.',
    transfer_ana_teaser_buton: 'Смотреть цены на трансфер',

    ramses_baslik: 'Студия тату и пирсинга',
    ramses_ozet: 'Тату и пирсинг в Анталье. Бесплатный дизайн и бесплатный трансфер из отеля, запись через WhatsApp.',
    ramses_h1_alt: 'Тату и пирсинг у опытных мастеров в Анталье. Бесплатный дизайн, бесплатный трансфер из отеля.',
    ramses_badge_tasarim: 'Бесплатный дизайн',
    ramses_badge_alis: 'Бесплатный трансфер',
    ramses_puan_metin: '{n} отзывов',
    ramses_puan_sr: '5 из 5 звёзд',
    ramses_yorumlar_baslik: 'Отзывы Google',
    ramses_yorum_kaynagi: 'Отзыв Google',
    ramses_galeri_baslik: 'Работы студии',
    ramses_cta_baslik: 'Напишите в WhatsApp, чтобы записаться и узнать детали',
    ramses_cta_metin: 'Дизайн и трансфер из отеля бесплатны.',
    ramses_galeri_alt: 'Работа студии — тату и пирсинг',
    ramses_wa_konu: 'Хотел(а) бы узнать подробнее о тату/пирсинге.',

    s_biz: 'Компания',
    s_hakkimizda: 'О нас',
    s_iptal: 'Условия отмены',
    s_sss: 'Вопросы и ответы',
    s_iletisim: 'Контакты',
    s_gizlilik: 'Конфиденциальность',

    meta_ana_baslik: 'Экскурсии в Анталье — оплата в день тура',
    meta_ana_aciklama: 'Экскурсии из Антальи. Поддержка на шести языках, трансфер из отеля, оплата в день тура, бесплатная отмена за 24 часа.',
    meta_tur_aciklama: '{b} — от {f} €. Трансфер из отеля, оплата в день тура, бесплатная отмена за 24 часа.',

    yt_aciklama: '[Описание тура будет добавлено — тексты готовятся на шести языках]',
    yt_program: '[Программа будет добавлена]',
    yt_liste: '[Список будет дополнен]',
    yt_metin_sayfa: '[Текст этой страницы будет добавлен]',
  },

  de: {
    nav_turlar: 'Touren',
    nav_transfer: 'Transfer',
    ana_sayfa: 'Startseite',
    tum_turlar: 'Alle Touren',
    tum_hizmetler: 'Alle Angebote',
    dil_secici_etiket: 'Sprache',
    para_secici_etiket: 'Währung',
    menu_ac: 'Menü öffnen',
    menu_kapat: 'Menü schließen',
    tema_degistir: 'Theme wechseln',
    instagram_etiket: 'Auf Instagram öffnen',
    whatsapp_etiket: 'Auf WhatsApp schreiben',

    hero_h1: 'Was machen Sie morgen in Antalya?',
    hero_alt: '30 Touren, Betreuung in sechs Sprachen, Zahlung am Tag der Tour.',
    hero_arama: 'Wohin möchten Sie?',
    hero_arama_buton: 'Suchen',
    rozet_odeme: 'Zahlung am Tag der Tour',
    rozet_transfer: 'Hoteltransfer inklusive',
    rozet_iptal: 'Kostenlose Stornierung bis 24 Stunden vorher',
    vitrin_bolum_etiket: 'Beliebte Touren',
    vitrin_rezervasyon_buton: 'Jetzt buchen',
    vitrin_slayt_git: 'Zu Folie {n}',
    vitrin_onceki_tur: 'Vorherige Tour',
    vitrin_sonraki_tur: 'Nächste Tour',
    b_one_cikan: 'Beliebte Angebote',
    b_one_cikan_eyebrow: 'Erlebnisse',
    b_kategoriler: 'Kategorien',
    b_neden: 'Warum wir',
    b_bolgeler: 'Von wo starten Sie?',
    neden: [
      { baslik: 'Zahlung am Tag der Tour, keine Anzahlung', metin: 'Wir bestätigen die Buchung, Sie zahlen am Tag der Tour.' },
      { baslik: 'Täglich von 08:00 bis 22:00 erreichbar', metin: 'Wir antworten noch am selben Tag.' },
      { baslik: 'In Ihrer Sprache', metin: 'Türkisch, Englisch, Russisch, Deutsch, Polnisch, Rumänisch.' },
      { baslik: 'Abholung vom Hotel', metin: 'Ihre Abholzeit erhalten Sie am Vortag per WhatsApp.' },
      { baslik: 'Kostenlose Stornierung bis 24 Stunden vorher', metin: 'Bei schlechtem Wetter wird die Tour kostenlos storniert.' },
    ],

    filtre_kategori: 'Kategorie',
    filtre_bolge: 'Abfahrtsregion',
    filtre_sure: 'Dauer',
    filtre_fiyat: 'Preis',
    tumu: 'Alle',
    yarim_gun: 'Halbtags',
    tam_gun: 'Ganztags',
    cok_gunlu: 'Mehrtägig',
    sonuc_yok: 'Keine Touren für diese Auswahl.',
    liste_giris_yt: 'Vergleichen Sie ausgewählte Erlebnisse rund um Antalya in einem übersichtlichen Katalog. Transferstatus, Preise und Tourart sind klar erkennbar.',
    bolge_baslik: 'Ausflüge ab {b}',
    sehir_baslik: '{b}-Touren',

    fiyat_baslayan: 'ab {f} €',
    fiyat_kategorileri: 'Preiskategorien',
    fiyat_yetiskin: 'Erwachsene',
    fiyat_cocuk: 'Kinder (3–11 Jahre)',
    fiyat_bebek: 'Kinder 0–2 Jahre',
    fiyat_ucretsiz: 'Kostenlos',
    fiyat_yas_12: 'ab 12 Jahren',
    odeme_gunu: 'Zahlung am Tag der Tour',
    transfer_dahil: 'Transfer inklusive',
    transfer_haric: 'Ohne Transfer',
    saat_kisa: 'Std.',
    gun_kisa: 'Tage',

    b_aciklama: 'Über die Tour',
    b_program: 'Programm',
    b_dahil: 'Inklusive',
    b_dahil_degil: 'Nicht inklusive',
    b_kosullar: 'Teilnahmebedingungen',
    b_bulusma: 'Treffpunkt',
    b_notlar: 'Wichtige Hinweise',
    b_benzer: 'Ähnliche Touren',
    rezervasyon_baslik: 'Tour buchen',
    rezervasyon_alt: 'Datum und Personen eingeben, dann schnell in WhatsApp fortfahren.',
    tur_hero_kategori: 'Tour',
    tur_hero_ogle: 'Mittagessen inklusive',
    tur_hero_gunler: 'Tourtage',
    yas_12_notu: 'Gäste ab 12 Jahren zahlen den Erwachsenenpreis.',
    galeri_onceki: 'Vorheriges Foto',
    galeri_sonraki: 'Nächstes Foto',
    galeri_kapat: 'Schließen',
    k_grup: 'Gruppengröße',
    k_yas: 'Alter',
    k_zorluk: 'Schwierigkeit',
    k_esyalar: 'Bitte mitbringen',
    k_alinis: 'Abholung vom Hotel',
    k_donus: 'Rückkehr',
    k_kalkis: 'Abfahrtsregionen',
    zorluk_kolay: 'leicht',
    zorluk_orta: 'mittel',
    zorluk_zor: 'anspruchsvoll',
    iptal_kalip: 'Kostenlose Stornierung bis {saat} Stunden vorher',
    hava_iptali_metni: 'Bei ungeeignetem Wetter wird die Tour kostenlos storniert.',

    f_tur: 'Tour',
    f_tarih: 'Datum',
    f_yetiskin: 'Erwachsene',
    f_cocuk: 'Kinder',
    f_cocuk_yas: 'Alter der Kinder',
    f_cocuk_yas_ipucu: 'z. B. 5, 9',
    f_otel: 'Hotel / Region',
    f_ad: 'Vor- und Nachname',
    f_not: 'Anmerkung',
    f_buton: 'In WhatsApp fortfahren',
    f_onizleme: 'Ihre Nachricht',
    f_takvim_ac: 'Kalender öffnen',
    f_ay_onceki: 'Voriger Monat',
    f_ay_sonraki: 'Nächster Monat',
    f_kapat: 'Schließen',
    f_azalt: 'Verringern',
    f_arttir: 'Erhöhen',
    f_zorunlu: 'Pflichtfeld',
    mobil_cta: 'Auf WhatsApp fragen',
    m_selamlama: 'Guten Tag,',
    m_kapanis: 'Danke.',
    m_tur: 'Tour',
    m_tarih: 'Datum',
    m_kisi: 'Personen',
    m_otel: 'Hotel',
    m_ad: 'Name',
    m_not: 'Anmerkung',
    m_yetiskin: 'Erwachsene',
    m_cocuk: 'Kinder',
    m_yas: 'Alter',

    hava_etiket: 'Wetter in Antalya',
    hava_guvence: 'Die meisten unserer Touren finden bei jedem Wetter statt. Bei einer Absage zahlen Sie nichts.',
    hava_bugun: 'Heute',
    mesafe: {
      baslik: 'Antalya-Destinationen',
      altBaslik: '11 Entdeckungspunkte für Sie',
      svgBaslik: 'Entdeckungskarte der Antalya-Destinationen',
      svgAciklama: 'Die Karte zeigt 11 Destinationszentren rund um Antalya. Die Punkte sind keine Abhol-, Routen- oder Betriebskoordinaten.',
      kuzey: 'NORDEN',
      konaklamali: 'mit Übernachtung',
      legendLabel: 'Kartenlegende',
      aktifEtiket: 'Aktive Destination',
      destinasyonEtiket: 'Antalya-Destination',
      aktifTurSayisi: '{count} aktive Tour',
      aktifTurYok: 'Entdeckungspunkt',
      turSec: 'Tour wählen',
      dipnot: 'Koordinaten beziehen sich auf das Destinationszentrum, nicht auf Abholung oder Betrieb.',
      kaydirIpucu: '← Wischen Sie, um alle Punkte zu sehen →',
    },
    journey: {
      locationBaslik: 'Wo übernachten Sie in Antalya?',
      locationAlt: 'Wählen Sie Ihre Region, damit wir passende Transferzonen und später persönliche Entfernungsdetails anzeigen können.',
      locationLabel: 'Urlaubsregion',
      locationPlaceholder: 'Region wählen',
      locationSave: 'Speichern',
      locationLater: 'Nicht jetzt',
      locationCurrent: 'Ihre Region: {location}',
      locationChange: 'Ändern',
      locationSaved: 'Ihre Region wurde gespeichert.',
      previewEyebrow: 'Interactive Journey',
      previewBaslik: 'Journey-Vorbereitung für diese Tour ist aktiv',
      previewMetin: 'Wir bereiten das Journey-Erlebnis mit bestätigten Programmschritten und Ihrer gewählten Transferregion vor.',
      previewSelectedLocation: 'Gewählte Region: {location}',
      previewNoLocation: 'Sie können Ihre Region über die Auswahl auf der Startseite speichern.',
      previewActivities: '{count} Aktivitäten',
      previewDuration: '{hours} Stunden Gesamtprogramm',
      previewTransfer: 'Transfer inklusive',
      previewMeal: 'Mittagessen inklusive',
      previewNote: 'Diese Vorschau ist kein GPS-Tracking in Echtzeit.',
      teaserEyebrow: 'Interactive Journey',
      teaserTitle: 'Entdecken Sie Ihren Abenteuertag',
      teaserText: 'Erleben Sie Ihren Adventure Combo-Tag interaktiv, vom Hoteltransfer über die Aktivitäten bis zur Rückfahrt.',
      exploreJourney: 'Journey entdecken',
      closeJourney: 'Journey schließen',
      experienceEyebrow: 'Interactive Journey',
      experienceTitle: 'Erleben Sie den Adventure Combo-Tag',
      experienceText: 'Entdecken Sie den Tourablauf anhand bestätigter Etappen in einer ruhigen visuellen Sequenz.',
      startJourney: 'Journey erleben',
      pause: 'Pausieren',
      restart: 'Neu starten',
      startingArea: 'Ihre Startregion: {location}',
      noStartingArea: 'Sie können Ihre Startregion auf der Startseite auswählen.',
      tourFlow: 'Tourablauf',
      activity: 'Aktivität',
      transferIncluded: 'Transfer inklusive',
      lunchIncluded: 'Mittagessen inklusive',
      waterActivity: 'Wasseraktivität enthalten',
      familyFriendly: 'Familienfreundlich',
      activityDistance: 'Aktivitätsdistanz',
      visualFlowNote: 'Visuelle Darstellung des Tourablaufs.',
      stageOf: 'Etappe {current} von {total}',
      nowShowing: 'Aktuelle Etappe',
      minutesShort: 'Min.',
      hoursShort: 'Std.',
      metersShort: 'm',
      stageDuration: 'Dauer',
      stageDistance: 'Aktivitätsdistanz',
      flowStart: 'Start',
      flowTransfer: 'Transfer',
      flowAdventureArea: 'Abenteuerbereich',
      flowActivities: 'Aktivitäten',
      flowReturn: 'Rückfahrt',
      liveMapLabel: 'Adventure Combo Demo-Live-Karte',
      demoMode: 'Demo-Karte',
      verifiedMode: 'Verifizierte Karte',
      pickupReferencePoint: 'Referenzpunkt der Region',
    },
    kisaltma: { saat: 'Std.', turAdet: { one: 'Tour', other: 'Touren' } },

    plan_nav: 'Urlaub planen',
    plan_baslik: 'Planen wir Ihren Urlaub',
    plan_ozet: 'Drei Fragen, drei Vorschläge. Dauert keine Minute.',
    plan_soru1: 'Wie viele Tage haben Sie?',
    plan_s1: ['2-3 Tage', '4-5 Tage', '6-7 Tage', 'Mehr als eine Woche'],
    plan_soru2: 'Mit wem reisen Sie?',
    plan_s2: ['Paar', 'Familie mit Kindern', 'Freundesgruppe', 'Allein'],
    plan_soru3: 'Was mögen Sie?',
    plan_soru3_ipucu: 'Mehrfachauswahl möglich.',
    plan_s3: ['Meer und Boote', 'Geschichte und Kultur', 'Abenteuer und Adrenalin', 'Entspannung'],
    plan_ileri: 'Weiter',
    plan_geri: 'Zurück',
    plan_adim: 'Schritt {n} von {t}',
    plan_sonuclari_gor: 'Ergebnisse ansehen',
    plan_rozet: 'Passt zu Ihnen',
    plan_stil_kisa: ['das Meer', 'Geschichte', 'Abenteuer', 'Entspannung'],
    plan_neden_stil: 'Sie bleiben {g} und mögen {s}.',
    plan_neden_aile: 'Gut geeignet für Familien mit Kindern.',
    plan_neden_populer: 'Eine unserer meistgebuchten Touren.',
    plan_bos: 'Keine genaue Übereinstimmung gefunden, das sind die beliebtesten Touren.',
    plan_sonuc_baslik: 'Drei Touren für Sie',
    plan_wa_buton: 'Diesen Plan auf WhatsApp anfragen',
    plan_yeniden: 'Von vorn beginnen',
    plan_msj_giris: 'Guten Tag, der Planer hat diese Touren vorgeschlagen:',
    plan_msj_kalis: 'Wir bleiben {g}, {p}.',
    plan_msj_kapanis: 'Können Sie uns Verfügbarkeit und Preise nennen?',

    rehber_grup: 'Antalya-Guide',
    rehber_pratik_baslik: 'Praktische Infos',
    rehber_ucretsiz_baslik: 'Kostenlos in Antalya',
    rehber_guncelleme: 'Zuletzt aktualisiert',
    rehber_dogrulama: 'Angaben können sich ändern. Diese Seite wird vor Veröffentlichung anhand offizieller Quellen geprüft.',
    rehber_soru_wa: 'Noch eine Frage? Schreiben Sie uns.',
    rehber_ucretsiz_kapanis: 'Wenn Sie die Stadt verlassen möchten, sehen Sie sich unsere Touren an.',
    rehber_ulasim: 'Anfahrt',
    rehber_sure: 'Zeitbedarf',

    transfer_baslik: 'Flughafentransfer Antalya',
    transfer_eyebrow: 'Privater VIP-Transfer',
    transfer_ozet: 'Komfortabler, sicherer Privattransfer zum Festpreis zwischen dem Flughafen Antalya und Ihrem Hotel in unseren Mercedes V-Class und Sprinter VIP-Fahrzeugen — geeignet für Gruppen von 6 bis 12 Personen.',
    transfer_h1_alt: 'Wir empfangen Sie direkt nach der Landung und bringen Sie komfortabel und sicher mit unserem V-Class oder Sprinter VIP-Fahrzeug, passend zu Ihrer Gruppengröße, zu Ihrem Hotel.',
    transfer_cta_wa: 'Weiter auf WhatsApp',
    transfer_cta_fiyat: 'Preise ansehen',
    transfer_ozellik_1_baslik: 'Komfortables VIP-Fahrzeug',
    transfer_ozellik_1_metin: 'Mercedes V-Class und Sprinter — Ledersitze, Sternenhimmel-Dach und stimmungsvolle Beleuchtung für eine Fahrt der Extraklasse, ganz gleich wie groß Ihre Gruppe ist.',
    transfer_ozellik_2_baslik: 'Flugüberwachung',
    transfer_ozellik_2_metin: 'Wir verfolgen Ihren Flug und warten am Ankunftsbereich, selbst bei Verspätung.',
    transfer_ozellik_3_baslik: 'Professioneller Fahrer',
    transfer_ozellik_3_metin: 'Unsere freundlichen, erfahrenen Fahrer empfangen Sie und tragen Ihr Gepäck.',
    transfer_ozellik_4_baslik: 'Festpreis',
    transfer_ozellik_4_metin: 'Keine versteckten Kosten — ein klarer Preis pro Fahrzeug, das passende Fahrzeug wird automatisch nach Gruppengröße gewählt.',
    transfer_arac_baslik: 'Fahrzeugoptionen',
    transfer_arac_standart_ad: 'Standard VIP — Mercedes V-Class',
    transfer_arac_standart_aciklama: 'Ein komfortables VIP-Fahrzeug mit Ledersitzen für kleine und mittlere Gruppen.',
    transfer_arac_buyuk_ad: 'Gruppen-VIP — Mercedes Sprinter',
    transfer_arac_buyuk_aciklama: 'Ein geräumiges VIP-Fahrzeug mit TV, Tisch und Premiumsitzen für größere Gruppen.',
    transfer_arac_kapasite: 'Bis zu {n} Personen',
    transfer_fiyat_baslik: 'Transferpreise nach Region',
    transfer_fiyat_alt: 'Alle Preise gelten für eine einfache Fahrt, pro Fahrzeug.',
    transfer_dogu_baslik: 'Östliche Region',
    transfer_bati_baslik: 'Westliche Region',
    transfer_tablo_bolge: 'Region',
    transfer_tablo_fiyat: 'Preis',
    transfer_not: 'Preise gelten für eine einfache Fahrt, pro Fahrzeug. Für eine hier nicht gelistete Region schreiben Sie uns auf WhatsApp.',
    transfer_wa_mesaj_giris: 'Hallo, ich möchte Informationen zum Flughafentransfer Antalya.',
    transfer_wa_mesaj_guzergah: 'Strecke: Flughafen Antalya ⇄ {b}',
    transfer_wa_mesaj_fiyat: 'Preis: {f} (einfache Fahrt, pro Fahrzeug)',
    transfer_wa_mesaj_kapanis: 'Können Sie mir Verfügbarkeit und Abholzeiten nennen?',
    transfer_galeri_alt: 'SER Tourism VIP-Flughafentransferfahrzeug',
    transfer_ana_teaser_baslik: 'Flughafentransfer',
    transfer_ana_teaser_metin: 'Komfortabler Privattransfer zum Festpreis zwischen dem Flughafen Antalya und Ihrem Hotel in unseren V-Class und Sprinter VIP-Fahrzeugen — geeignet für Gruppen von 6 bis 12 Personen.',
    transfer_ana_teaser_buton: 'Transferpreise ansehen',

    ramses_baslik: 'Tattoo- & Piercingstudio',
    ramses_ozet: 'Tattoo und Piercing in Antalya. Kostenlose Designberatung und kostenlose Hotelabholung, Termin über WhatsApp.',
    ramses_h1_alt: 'Tattoo und Piercing bei erfahrenen Künstlern in Antalya. Kostenlose Designberatung, kostenlose Hotelabholung.',
    ramses_badge_tasarim: 'Kostenloses Design',
    ramses_badge_alis: 'Kostenlose Abholung',
    ramses_puan_metin: '{n} Bewertungen',
    ramses_puan_sr: '5 von 5 Sternen',
    ramses_yorumlar_baslik: 'Google-Bewertungen',
    ramses_yorum_kaynagi: 'Google-Bewertung',
    ramses_galeri_baslik: 'Arbeiten aus dem Studio',
    ramses_cta_baslik: 'Für Termine und Details auf WhatsApp schreiben',
    ramses_cta_metin: 'Design und Hotelabholung sind kostenlos.',
    ramses_galeri_alt: 'Tattoo- und Piercingarbeit',
    ramses_wa_konu: 'Ich hätte gerne Informationen zu Tattoo/Piercing.',

    s_biz: 'Unternehmen',
    s_hakkimizda: 'Über uns',
    s_iptal: 'Stornierungsbedingungen',
    s_sss: 'FAQ',
    s_iletisim: 'Kontakt',
    s_gizlilik: 'Datenschutz',

    meta_ana_baslik: 'Touren in Antalya — Zahlung am Tag der Tour',
    meta_ana_aciklama: 'Touren ab Antalya. Betreuung in sechs Sprachen, Hoteltransfer, Zahlung am Tag der Tour, kostenlose Stornierung bis 24 Stunden vorher.',
    meta_tur_aciklama: '{b} — ab {f} €. Hoteltransfer, Zahlung am Tag der Tour, kostenlose Stornierung bis 24 Stunden.',

    yt_aciklama: '[Tourbeschreibung folgt — Texte werden in sechs Sprachen erstellt]',
    yt_program: '[Programm folgt]',
    yt_liste: '[Liste wird vervollständigt]',
    yt_metin_sayfa: '[Text dieser Seite folgt]',
  },

  pl: {
    nav_turlar: 'Wycieczki',
    nav_transfer: 'Transfer',
    ana_sayfa: 'Strona główna',
    tum_turlar: 'Wszystkie wycieczki',
    tum_hizmetler: 'Wszystkie usługi',
    dil_secici_etiket: 'Język',
    para_secici_etiket: 'Waluta',
    menu_ac: 'Otwórz menu',
    menu_kapat: 'Zamknij menu',
    tema_degistir: 'Zmień motyw',
    instagram_etiket: 'Otwórz na Instagramie',
    whatsapp_etiket: 'Napisz na WhatsAppie',

    hero_h1: 'Jakie plany na jutro w Antalyi?',
    hero_alt: '30 wycieczek, obsługa w sześciu językach, płatność w dniu wycieczki.',
    hero_arama: 'Dokąd chcesz pojechać?',
    hero_arama_buton: 'Szukaj',
    rozet_odeme: 'Płatność w dniu wycieczki',
    rozet_transfer: 'Transfer z hotelu w cenie',
    rozet_iptal: 'Bezpłatne odwołanie do 24 godzin',
    vitrin_bolum_etiket: 'Polecane wycieczki',
    vitrin_rezervasyon_buton: 'Zarezerwuj teraz',
    vitrin_slayt_git: 'Przejdź do slajdu {n}',
    vitrin_onceki_tur: 'Poprzednia wycieczka',
    vitrin_sonraki_tur: 'Następna wycieczka',
    b_one_cikan: 'Polecane usługi',
    b_one_cikan_eyebrow: 'Doświadczenia',
    b_kategoriler: 'Kategorie',
    b_neden: 'Dlaczego my',
    b_bolgeler: 'Skąd wyruszasz?',
    neden: [
      { baslik: 'Płatność w dniu wycieczki, bez zaliczki', metin: 'Potwierdzamy rezerwację, płacisz w dniu wycieczki.' },
      { baslik: 'Codziennie od 08:00 do 22:00', metin: 'Odpowiadamy tego samego dnia.' },
      { baslik: 'W Twoim języku', metin: 'Turecki, angielski, rosyjski, niemiecki, polski, rumuński.' },
      { baslik: 'Odbiór z hotelu', metin: 'Godzinę odbioru wysyłamy na WhatsApp dzień wcześniej.' },
      { baslik: 'Bezpłatne odwołanie do 24 godzin', metin: 'Przy złej pogodzie wycieczka jest odwoływana bez opłat.' },
    ],

    filtre_kategori: 'Kategoria',
    filtre_bolge: 'Rejon odbioru',
    filtre_sure: 'Czas trwania',
    filtre_fiyat: 'Cena',
    tumu: 'Wszystkie',
    yarim_gun: 'Pół dnia',
    tam_gun: 'Cały dzień',
    cok_gunlu: 'Kilkudniowe',
    sonuc_yok: 'Brak wycieczek dla tych filtrów.',
    liste_giris_yt: 'Porównaj wybrane atrakcje w Antalyi i okolicy w jednym przejrzystym katalogu. Transfer, ceny i charakter wycieczki są łatwe do sprawdzenia.',
    bolge_baslik: 'Wycieczki z rejonu {b}',
    sehir_baslik: '{b}: wycieczki',

    fiyat_baslayan: 'od {f} €',
    fiyat_kategorileri: 'Kategorie cenowe',
    fiyat_yetiskin: 'Dorosły',
    fiyat_cocuk: 'Dzieci 3–11 lat',
    fiyat_bebek: 'Dzieci 0–2 lata',
    fiyat_ucretsiz: 'Bezpłatnie',
    fiyat_yas_12: '12+ lat',
    odeme_gunu: 'Płatność w dniu wycieczki',
    transfer_dahil: 'Transfer w cenie',
    transfer_haric: 'Bez transferu',
    saat_kisa: 'godz.',
    gun_kisa: 'dni',

    b_aciklama: 'O wycieczce',
    b_program: 'Program',
    b_dahil: 'W cenie',
    b_dahil_degil: 'Poza ceną',
    b_kosullar: 'Warunki uczestnictwa',
    b_bulusma: 'Miejsce zbiórki',
    b_notlar: 'Ważne informacje',
    b_benzer: 'Podobne wycieczki',
    rezervasyon_baslik: 'Zarezerwuj wycieczkę',
    rezervasyon_alt: 'Podaj datę i liczbę osób, a następnie kontynuuj w WhatsApp.',
    tur_hero_kategori: 'Wycieczka',
    tur_hero_ogle: 'Lunch w cenie',
    tur_hero_gunler: 'Dni wycieczki',
    yas_12_notu: 'Osoby od 12 lat obowiązuje cena dla dorosłych.',
    galeri_onceki: 'Poprzednie zdjęcie',
    galeri_sonraki: 'Następne zdjęcie',
    galeri_kapat: 'Zamknij',
    k_grup: 'Wielkość grupy',
    k_yas: 'Wiek',
    k_zorluk: 'Poziom trudności',
    k_esyalar: 'Co zabrać',
    k_alinis: 'Odbiór z hotelu',
    k_donus: 'Powrót',
    k_kalkis: 'Rejony odbioru',
    zorluk_kolay: 'łatwy',
    zorluk_orta: 'średni',
    zorluk_zor: 'wymagający',
    iptal_kalip: 'Bezpłatne odwołanie do {saat} godzin przed wycieczką',
    hava_iptali_metni: 'Przy nieodpowiedniej pogodzie wycieczka jest odwoływana bez opłat.',

    f_tur: 'Wycieczka',
    f_tarih: 'Data',
    f_yetiskin: 'Dorośli',
    f_cocuk: 'Dzieci',
    f_cocuk_yas: 'Wiek dzieci',
    f_cocuk_yas_ipucu: 'np. 5, 9',
    f_otel: 'Hotel / rejon',
    f_ad: 'Imię i nazwisko',
    f_not: 'Uwagi',
    f_buton: 'Kontynuuj w WhatsApp',
    f_onizleme: 'Twoja wiadomość',
    f_takvim_ac: 'Otwórz kalendarz',
    f_ay_onceki: 'Poprzedni miesiąc',
    f_ay_sonraki: 'Następny miesiąc',
    f_kapat: 'Zamknij',
    f_azalt: 'Zmniejsz',
    f_arttir: 'Zwiększ',
    f_zorunlu: 'Pole wymagane',
    mobil_cta: 'Zapytaj na WhatsApp',
    m_selamlama: 'Dzień dobry,',
    m_kapanis: 'Dziękuję.',
    m_tur: 'Wycieczka',
    m_tarih: 'Data',
    m_kisi: 'Osoby',
    m_otel: 'Hotel',
    m_ad: 'Imię',
    m_not: 'Uwagi',
    m_yetiskin: 'dorosłych',
    m_cocuk: 'dzieci',
    m_yas: 'wiek',

    hava_etiket: 'Pogoda w Antalyi',
    hava_guvence: 'Większość naszych wycieczek odbywa się w każdą pogodę. W razie odwołania nie płacisz nic.',
    hava_bugun: 'Dziś',
    mesafe: {
      baslik: 'Destynacje Antalyi',
      altBaslik: '11 punktów odkrywania wybranych dla Ciebie',
      svgBaslik: 'Mapa destynacji Antalyi',
      svgAciklama: 'Mapa pokazuje 11 centrów destynacji wokół Antalyi. Punkty nie są miejscami odbioru, trasą ani koordynatami operacyjnymi.',
      kuzey: 'PÓŁNOC',
      konaklamali: 'z noclegiem',
      legendLabel: 'Legenda mapy',
      aktifEtiket: 'Aktywna destynacja',
      destinasyonEtiket: 'Destynacja Antalyi',
      aktifTurSayisi: '{count} aktywna wycieczka',
      aktifTurYok: 'Punkt odkrywania',
      turSec: 'Wybierz wycieczkę',
      dipnot: 'Koordynaty odnoszą się do centrum destynacji, nie do odbioru ani operacji.',
      kaydirIpucu: '← Przesuń, aby zobaczyć wszystkie punkty →',
    },
    journey: {
      locationBaslik: 'W którym rejonie Antalyi mieszkasz?',
      locationAlt: 'Wybierz rejon, abyśmy mogli pokazać właściwe strefy transferu i w przyszłości spersonalizowane informacje o odległości.',
      locationLabel: 'Rejon zakwaterowania',
      locationPlaceholder: 'Wybierz rejon',
      locationSave: 'Zapisz',
      locationLater: 'Nie teraz',
      locationCurrent: 'Twój rejon: {location}',
      locationChange: 'Zmień',
      locationSaved: 'Twój rejon został zapisany.',
      previewEyebrow: 'Interactive Journey',
      previewBaslik: 'Przygotowanie journey jest aktywne dla tej wycieczki',
      previewMetin: 'Przygotowujemy doświadczenie journey na podstawie potwierdzonych etapów programu i wybranego rejonu transferu.',
      previewSelectedLocation: 'Wybrany rejon: {location}',
      previewNoLocation: 'Możesz zapisać swój rejon w wyborze lokalizacji na stronie głównej.',
      previewActivities: '{count} aktywności',
      previewDuration: '{hours} godzin programu',
      previewTransfer: 'Transfer w cenie',
      previewMeal: 'Lunch w cenie',
      previewNote: 'Ten podgląd nie jest śledzeniem GPS w czasie rzeczywistym.',
      teaserEyebrow: 'Interactive Journey',
      teaserTitle: 'Odkryj dzień przygody',
      teaserText: 'Poznaj interaktywnie dzień Adventure Combo: od odbioru z hotelu przez aktywności aż po transfer powrotny.',
      exploreJourney: 'Odkryj journey',
      closeJourney: 'Zamknij journey',
      experienceEyebrow: 'Interactive Journey',
      experienceTitle: 'Poczuj dzień Adventure Combo',
      experienceText: 'Poznaj przebieg wycieczki przez potwierdzone etapy w spokojnej wizualnej sekwencji.',
      startJourney: 'Rozpocznij journey',
      pause: 'Pauza',
      restart: 'Uruchom ponownie',
      startingArea: 'Twój rejon startu: {location}',
      noStartingArea: 'Rejon startu możesz wybrać na stronie głównej.',
      tourFlow: 'Przebieg wycieczki',
      activity: 'Aktywność',
      transferIncluded: 'Transfer w cenie',
      lunchIncluded: 'Lunch w cenie',
      waterActivity: 'Aktywność wodna',
      familyFriendly: 'Dobre dla rodzin',
      activityDistance: 'Długość aktywności',
      visualFlowNote: 'Wizualne przedstawienie przebiegu wycieczki.',
      stageOf: 'Etap {current} z {total}',
      nowShowing: 'Aktualny etap',
      minutesShort: 'min',
      hoursShort: 'godz.',
      metersShort: 'm',
      stageDuration: 'Czas trwania',
      stageDistance: 'Długość aktywności',
      flowStart: 'Start',
      flowTransfer: 'Transfer',
      flowAdventureArea: 'Strefa przygody',
      flowActivities: 'Aktywności',
      flowReturn: 'Powrót',
      liveMapLabel: 'Demo mapa live Adventure Combo',
      demoMode: 'Mapa demo',
      verifiedMode: 'Mapa zweryfikowana',
      pickupReferencePoint: 'Punkt referencyjny regionu',
    },
    kisaltma: {
      saat: 'godz.',
      turAdet: { one: 'wycieczka', few: 'wycieczki', many: 'wycieczek', other: 'wycieczki' },
    },

    plan_nav: 'Zaplanuj wyjazd',
    plan_baslik: 'Zaplanujmy Twój urlop',
    plan_ozet: 'Trzy pytania, trzy propozycje. Zajmie mniej niż minutę.',
    plan_soru1: 'Ile masz dni?',
    plan_s1: ['2-3 dni', '4-5 dni', '6-7 dni', 'Ponad tydzień'],
    plan_soru2: 'Z kim przyjechaliście?',
    plan_s2: ['Para', 'Rodzina z dziećmi', 'Grupa znajomych', 'Solo'],
    plan_soru3: 'Co lubisz?',
    plan_soru3_ipucu: 'Możesz wybrać kilka.',
    plan_s3: ['Morze i rejsy', 'Historia i kultura', 'Przygoda i adrenalina', 'Relaks'],
    plan_ileri: 'Dalej',
    plan_geri: 'Wstecz',
    plan_adim: 'Krok {n} z {t}',
    plan_sonuclari_gor: 'Zobacz wyniki',
    plan_rozet: 'Pasuje do Ciebie',
    plan_stil_kisa: ['morze', 'historię', 'przygodę', 'relaks'],
    plan_neden_stil: 'Zostajesz {g} i lubisz {s}.',
    plan_neden_aile: 'Dobre dla rodzin z dziećmi.',
    plan_neden_populer: 'Jedna z najczęściej wybieranych wycieczek.',
    plan_bos: 'Nie znaleźliśmy dokładnego dopasowania, oto najpopularniejsze wycieczki.',
    plan_sonuc_baslik: 'Trzy wycieczki dla Ciebie',
    plan_wa_buton: 'Zapytaj o ten plan na WhatsApp',
    plan_yeniden: 'Zacznij od nowa',
    plan_msj_giris: 'Dzień dobry, planer zaproponował te wycieczki:',
    plan_msj_kalis: 'Zostajemy {g}, {p}.',
    plan_msj_kapanis: 'Czy możemy prosić o dostępność i ceny?',

    rehber_grup: 'Przewodnik po Antalyi',
    rehber_pratik_baslik: 'Informacje praktyczne',
    rehber_ucretsiz_baslik: 'Za darmo w Antalyi',
    rehber_guncelleme: 'Ostatnia aktualizacja',
    rehber_dogrulama: 'Informacje mogą się zmieniać. Strona jest weryfikowana w oficjalnych źródłach przed publikacją.',
    rehber_soru_wa: 'Masz jeszcze pytanie? Napisz.',
    rehber_ucretsiz_kapanis: 'Jeśli chcesz wybrać się poza miasto, zobacz nasze wycieczki.',
    rehber_ulasim: 'Dojazd',
    rehber_sure: 'Ile czasu',

    transfer_baslik: 'Transfer z lotniska Antalya',
    transfer_eyebrow: 'Prywatny transfer VIP',
    transfer_ozet: 'Komfortowy, bezpieczny transfer prywatny w stałej cenie między lotniskiem Antalya a Twoim hotelem, luksusowymi pojazdami Mercedes V-Class i Sprinter — dla grup od 6 do 12 osób.',
    transfer_h1_alt: 'Witamy Cię zaraz po lądowaniu i wygodnie, bezpiecznie dowozimy do hotelu naszym luksusowym pojazdem V-Class lub Sprinter, dobranym do wielkości Twojej grupy.',
    transfer_cta_wa: 'Kontynuuj na WhatsApp',
    transfer_cta_fiyat: 'Zobacz ceny',
    transfer_ozellik_1_baslik: 'Komfortowy pojazd VIP',
    transfer_ozellik_1_metin: 'Mercedes V-Class i Sprinter — skórzane fotele, gwiaździsty sufit i nastrojowe oświetlenie dla podróży w klasie premium, niezależnie od wielkości grupy.',
    transfer_ozellik_2_baslik: 'Śledzenie lotu',
    transfer_ozellik_2_metin: 'Śledzimy Twój lot i czekamy na hali przylotów, nawet jeśli się opóźni.',
    transfer_ozellik_3_baslik: 'Profesjonalny kierowca',
    transfer_ozellik_3_metin: 'Nasi uprzejmi, doświadczeni kierowcy witają Cię i pomagają z bagażem.',
    transfer_ozellik_4_baslik: 'Stała cena',
    transfer_ozellik_4_metin: 'Żadnych ukrytych opłat — jasna cena za pojazd, odpowiedni pojazd dobierany jest automatycznie do wielkości grupy.',
    transfer_arac_baslik: 'Opcje pojazdów',
    transfer_arac_standart_ad: 'Standard VIP — Mercedes V-Class',
    transfer_arac_standart_aciklama: 'Komfortowy pojazd VIP ze skórzanymi fotelami dla małych i średnich grup.',
    transfer_arac_buyuk_ad: 'VIP dla dużych grup — Mercedes Sprinter',
    transfer_arac_buyuk_aciklama: 'Przestronny pojazd VIP z telewizorem, stolikiem i fotelami premium dla większych grup.',
    transfer_arac_kapasite: 'Do {n} osób',
    transfer_fiyat_baslik: 'Ceny transferu według regionu',
    transfer_fiyat_alt: 'Wszystkie ceny dotyczą przejazdu w jedną stronę, za pojazd.',
    transfer_dogu_baslik: 'Region wschodni',
    transfer_bati_baslik: 'Region zachodni',
    transfer_tablo_bolge: 'Region',
    transfer_tablo_fiyat: 'Cena',
    transfer_not: 'Ceny dotyczą przejazdu w jedną stronę, za pojazd. Jeśli Twojego regionu nie ma na liście, napisz do nas na WhatsApp.',
    transfer_wa_mesaj_giris: 'Dzień dobry, chciał(a)bym uzyskać informacje o transferze z lotniska Antalya.',
    transfer_wa_mesaj_guzergah: 'Trasa: Lotnisko Antalya ⇄ {b}',
    transfer_wa_mesaj_fiyat: 'Cena: {f} (w jedną stronę, za pojazd)',
    transfer_wa_mesaj_kapanis: 'Czy mogą Państwo potwierdzić dostępność i godzinę odbioru?',
    transfer_galeri_alt: 'Pojazd VIP transferu lotniskowego SER Tourism',
    transfer_ana_teaser_baslik: 'Transfer z lotniska',
    transfer_ana_teaser_metin: 'Komfortowy transfer prywatny w stałej cenie między lotniskiem Antalya a Twoim hotelem, luksusowymi pojazdami V-Class i Sprinter — dla grup od 6 do 12 osób.',
    transfer_ana_teaser_buton: 'Zobacz ceny transferu',

    ramses_baslik: 'Studio tatuażu i piercingu',
    ramses_ozet: 'Tatuaż i piercing w Antalyi. Bezpłatny projekt i bezpłatny odbiór z hotelu, termin przez WhatsApp.',
    ramses_h1_alt: 'Tatuaż i piercing u doświadczonych artystów w Antalyi. Bezpłatny projekt, bezpłatny odbiór z hotelu.',
    ramses_badge_tasarim: 'Bezpłatny projekt',
    ramses_badge_alis: 'Bezpłatny odbiór',
    ramses_puan_metin: '{n} opinii',
    ramses_puan_sr: '5 na 5 gwiazdek',
    ramses_yorumlar_baslik: 'Opinie z Google',
    ramses_yorum_kaynagi: 'Opinia z Google',
    ramses_galeri_baslik: 'Prace ze studia',
    ramses_cta_baslik: 'Napisz na WhatsApp, aby umówić termin i poznać szczegóły',
    ramses_cta_metin: 'Projekt i odbiór z hotelu są bezpłatne.',
    ramses_galeri_alt: 'Praca studia — tatuaż i piercing',
    ramses_wa_konu: 'Chciałbym/Chciałabym dowiedzieć się więcej o tatuażu/piercingu.',

    s_biz: 'Firma',
    s_hakkimizda: 'O nas',
    s_iptal: 'Zasady anulowania',
    s_sss: 'FAQ',
    s_iletisim: 'Kontakt',
    s_gizlilik: 'Prywatność',

    meta_ana_baslik: 'Wycieczki w Antalyi — płatność w dniu wycieczki',
    meta_ana_aciklama: 'Wycieczki z Antalyi. Obsługa w sześciu językach, transfer z hotelu, płatność w dniu wycieczki, bezpłatne odwołanie do 24 godzin.',
    meta_tur_aciklama: '{b} — od {f} €. Transfer z hotelu, płatność w dniu wycieczki, bezpłatne odwołanie do 24 godzin.',

    yt_aciklama: '[Opis wycieczki zostanie dodany — teksty powstają w sześciu językach]',
    yt_program: '[Program zostanie dodany]',
    yt_liste: '[Lista zostanie uzupełniona]',
    yt_metin_sayfa: '[Tekst tej strony zostanie dodany]',
  },

  // Rumence (EK-3). §6-§8'de verilen karşılıklar aynen alındı,
  // kalan anahtarlar mevcut dillerdeki karşılıklarından üretildi.
  ro: {
    nav_turlar: 'Excursii',
    nav_transfer: 'Transfer',
    ana_sayfa: 'Acasă',
    tum_turlar: 'Toate excursiile',
    tum_hizmetler: 'Toate serviciile',
    dil_secici_etiket: 'Limbă',
    para_secici_etiket: 'Monedă',
    menu_ac: 'Deschide meniul',
    menu_kapat: 'Închide meniul',
    tema_degistir: 'Schimbă tema',
    instagram_etiket: 'Deschide pe Instagram',
    whatsapp_etiket: 'Scrie pe WhatsApp',

    hero_h1: 'Ce faceți mâine în Antalya?',
    hero_alt: '30 de excursii, asistență în șase limbi, plata în ziua excursiei.',
    hero_arama: 'Unde doriți să mergeți?',
    hero_arama_buton: 'Caută',
    rozet_odeme: 'Plata în ziua excursiei',
    rozet_transfer: 'Preluare de la hotel inclusă',
    rozet_iptal: 'Anulare gratuită până cu 24 de ore înainte',
    vitrin_bolum_etiket: 'Excursii recomandate',
    vitrin_rezervasyon_buton: 'Rezervă acum',
    vitrin_slayt_git: 'Mergi la slide-ul {n}',
    vitrin_onceki_tur: 'Excursia anterioară',
    vitrin_sonraki_tur: 'Excursia următoare',
    b_one_cikan: 'Servicii recomandate',
    b_one_cikan_eyebrow: 'Experiențe',
    b_kategoriler: 'Categorii',
    b_neden: 'De ce noi',
    b_bolgeler: 'De unde plecați?',
    neden: [
      { baslik: 'Plata în ziua excursiei, fără avans', metin: 'Confirmăm rezervarea, iar plata o faceți în ziua excursiei.' },
      { baslik: 'Suntem aici zilnic, 08:00–22:00', metin: 'Răspundem mesajului dumneavoastră în aceeași zi.' },
      { baslik: 'În limba dumneavoastră', metin: 'Turcă, engleză, rusă, germană, poloneză, română.' },
      { baslik: 'Vă preluăm de la hotel', metin: 'Ora de preluare vă este comunicată pe WhatsApp cu o seară înainte.' },
      { baslik: 'Anulare gratuită până cu 24 de ore înainte', metin: 'Dacă vremea e rea, excursia se anulează fără costuri.' },
    ],

    filtre_kategori: 'Categorie',
    filtre_bolge: 'Zonă de preluare',
    filtre_sure: 'Durată',
    filtre_fiyat: 'Preț',
    tumu: 'Toate',
    yarim_gun: 'O jumătate de zi',
    tam_gun: 'O zi întreagă',
    cok_gunlu: 'Mai multe zile',
    sonuc_yok: 'Nicio excursie nu corespunde acestor filtre.',
    liste_giris_yt: 'Comparați experiențele selectate din Antalya și împrejurimi într-un catalog clar. Transferul, prețurile și tipul excursiei sunt ușor de urmărit.',
    bolge_baslik: 'Excursii din {b}',
    sehir_baslik: '{b}: excursii',

    fiyat_baslayan: 'de la {f} €',
    fiyat_kategorileri: 'Categorii de preț',
    fiyat_yetiskin: 'Adult',
    fiyat_cocuk: 'Copii 3–11 ani',
    fiyat_bebek: 'Copii 0–2 ani',
    fiyat_ucretsiz: 'Gratuit',
    fiyat_yas_12: '12+ ani',
    odeme_gunu: 'Plata în ziua excursiei',
    transfer_dahil: 'Preluare de la hotel inclusă',
    transfer_haric: 'Fără transfer',
    saat_kisa: 'ore',
    gun_kisa: 'zile',

    b_aciklama: 'Despre excursie',
    b_program: 'Program',
    b_dahil: 'Inclus în preț',
    b_dahil_degil: 'Se plătește separat',
    b_kosullar: 'Condiții de participare',
    b_bulusma: 'Loc de întâlnire',
    b_notlar: 'Bine de știut',
    b_benzer: 'Excursii similare',
    rezervasyon_baslik: 'Rezervă excursia',
    rezervasyon_alt: 'Introduceți data și numărul de persoane, apoi continuați rapid pe WhatsApp.',
    tur_hero_kategori: 'Excursie',
    tur_hero_ogle: 'Prânz inclus',
    tur_hero_gunler: 'Zile de desfășurare',
    yas_12_notu: 'Persoanele de 12 ani și peste plătesc tariful de adult.',
    galeri_onceki: 'Fotografia anterioară',
    galeri_sonraki: 'Fotografia următoare',
    galeri_kapat: 'Închide',
    k_grup: 'Grup',
    k_yas: 'Vârstă',
    k_zorluk: 'Dificultate',
    k_esyalar: 'Luați cu dumneavoastră',
    k_alinis: 'Preluare de la hotel',
    k_donus: 'Întoarcere',
    k_kalkis: 'Zone de preluare',
    zorluk_kolay: 'ușor',
    zorluk_orta: 'mediu',
    zorluk_zor: 'solicitant',
    iptal_kalip: 'Anulare gratuită până cu {saat} de ore înainte',
    hava_iptali_metni: 'Dacă vremea nu permite, excursia se anulează fără costuri.',

    f_tur: 'Excursie',
    f_tarih: 'Data',
    f_yetiskin: 'Adulți',
    f_cocuk: 'Copii',
    f_cocuk_yas: 'Vârsta copiilor',
    f_cocuk_yas_ipucu: 'de ex. 5, 9',
    f_otel: 'Hotel / zonă',
    f_ad: 'Nume și prenume',
    f_not: 'Observație',
    f_buton: 'Continuă pe WhatsApp',
    f_onizleme: 'Mesajul dumneavoastră',
    f_takvim_ac: 'Deschide calendarul',
    f_ay_onceki: 'Luna precedentă',
    f_ay_sonraki: 'Luna următoare',
    f_kapat: 'Închide',
    f_azalt: 'Scade',
    f_arttir: 'Crește',
    f_zorunlu: 'Câmp obligatoriu',
    mobil_cta: 'Întreabă pe WhatsApp',
    m_selamlama: 'Bună ziua,',
    m_kapanis: 'Vă mulțumesc.',
    m_tur: 'Excursie',
    m_tarih: 'Data',
    m_kisi: 'Persoane',
    m_otel: 'Hotel',
    m_ad: 'Nume',
    m_not: 'Observație',
    m_yetiskin: 'adulți',
    m_cocuk: 'copii',
    m_yas: 'vârsta',

    hava_etiket: 'Vremea în Antalya',
    hava_guvence: 'Majoritatea excursiilor noastre se desfășoară pe orice vreme. Dacă se anulează, nu plătiți nimic.',
    hava_bugun: 'Astăzi',

    mesafe: {
      baslik: 'Destinațiile Antalyei',
      altBaslik: '11 puncte de explorare selectate pentru dumneavoastră',
      svgBaslik: 'Hartă de explorare a destinațiilor din Antalya',
      svgAciklama: 'Harta arată 11 centre de destinație din jurul Antalyei. Punctele nu sunt coordonate de preluare, traseu sau operare.',
      kuzey: 'NORD',
      konaklamali: 'cu cazare',
      legendLabel: 'Legendă hartă',
      aktifEtiket: 'Destinație activă',
      destinasyonEtiket: 'Destinație Antalya',
      aktifTurSayisi: '{count} tur activ',
      aktifTurYok: 'Punct de explorare',
      turSec: 'Alege turul',
      dipnot: 'Coordonatele sunt referințe ale centrului destinației, nu puncte de preluare sau operare.',
      kaydirIpucu: '← Glisați pentru a vedea toate punctele →',
    },
    journey: {
      locationBaslik: 'În ce zonă din Antalya sunteți cazat?',
      locationAlt: 'Alegeți zona pentru a afișa transferurile potrivite și, pe viitor, detalii personalizate despre distanță.',
      locationLabel: 'Zona de cazare',
      locationPlaceholder: 'Alegeți zona',
      locationSave: 'Salvează',
      locationLater: 'Nu acum',
      locationCurrent: 'Zona dumneavoastră: {location}',
      locationChange: 'Schimbă',
      locationSaved: 'Zona dumneavoastră a fost salvată.',
      previewEyebrow: 'Interactive Journey',
      previewBaslik: 'Pregătirea journey este activă pentru această excursie',
      previewMetin: 'Pregătim experiența journey folosind etapele confirmate ale programului și zona de transfer selectată.',
      previewSelectedLocation: 'Zona selectată: {location}',
      previewNoLocation: 'Puteți salva zona din selectorul de pe pagina principală.',
      previewActivities: '{count} activități',
      previewDuration: '{hours} ore program total',
      previewTransfer: 'Transfer inclus',
      previewMeal: 'Prânz inclus',
      previewNote: 'Această previzualizare nu este urmărire GPS în timp real.',
      teaserEyebrow: 'Interactive Journey',
      teaserTitle: 'Descoperiți ziua de aventură',
      teaserText: 'Explorați interactiv ziua Adventure Combo, de la preluarea de la hotel la activități și transferul de întoarcere.',
      exploreJourney: 'Explorează journey',
      closeJourney: 'Închide journey',
      experienceEyebrow: 'Interactive Journey',
      experienceTitle: 'Experimentați ziua Adventure Combo',
      experienceText: 'Descoperiți fluxul excursiei prin etape confirmate, într-o secvență vizuală controlată.',
      startJourney: 'Începe journey',
      pause: 'Pauză',
      restart: 'Repornește',
      startingArea: 'Zona de plecare: {location}',
      noStartingArea: 'Puteți alege zona de plecare de pe pagina principală.',
      tourFlow: 'Fluxul excursiei',
      activity: 'Activitate',
      transferIncluded: 'Transfer inclus',
      lunchIncluded: 'Prânz inclus',
      waterActivity: 'Activitate pe apă',
      familyFriendly: 'Potrivit pentru familii',
      activityDistance: 'Distanța activității',
      visualFlowNote: 'Reprezentare vizuală a fluxului excursiei.',
      stageOf: 'Etapa {current} din {total}',
      nowShowing: 'Etapa afișată',
      minutesShort: 'min',
      hoursShort: 'ore',
      metersShort: 'm',
      stageDuration: 'Durată',
      stageDistance: 'Distanța activității',
      flowStart: 'Start',
      flowTransfer: 'Transfer',
      flowAdventureArea: 'Zona de aventură',
      flowActivities: 'Activități',
      flowReturn: 'Întoarcere',
      liveMapLabel: 'Hartă live demo Adventure Combo',
      demoMode: 'Hartă demo',
      verifiedMode: 'Hartă verificată',
      pickupReferencePoint: 'Punct de referință al zonei',
    },
    kisaltma: {
      saat: 'ore',
      saatTekil: 'oră',
      // RO çokluk: 1 excursie · 2-19 excursii · 20+ de excursii
      turAdet: { one: 'excursie', few: 'excursii', other: 'de excursii' },
    },

    plan_nav: 'Planifică',
    plan_baslik: 'Să vă planificăm vacanța',
    plan_ozet: 'Trei întrebări, trei propuneri. Durează mai puțin de un minut.',
    plan_soru1: 'Câte zile aveți?',
    plan_s1: ['2-3 zile', '4-5 zile', '6-7 zile', 'Mai mult de o săptămână'],
    plan_soru2: 'Cu cine ați venit?',
    plan_s2: ['Cuplu', 'Familie cu copii', 'Grup de prieteni', 'Singur'],
    plan_soru3: 'Ce vă place?',
    plan_soru3_ipucu: 'Puteți alege mai multe.',
    plan_s3: ['Mare și barci', 'Istorie și cultură', 'Aventură și adrenalină', 'Relaxare'],
    plan_ileri: 'Continuă',
    plan_geri: 'Înapoi',
    plan_adim: 'Pasul {n} din {t}',
    plan_sonuclari_gor: 'Vezi rezultatele',
    plan_rozet: 'Potrivit pentru tine',
    plan_stil_kisa: ['marea', 'istoria', 'aventura', 'relaxarea'],
    plan_neden_stil: 'Rămâneți {g} și ați spus că vă place {s}.',
    plan_neden_aile: 'Potrivit pentru familii cu copii.',
    plan_neden_populer: 'Una dintre cele mai alese excursii ale noastre.',
    plan_bos: 'Nu am găsit o potrivire exactă, acestea sunt cele mai alese excursii.',
    plan_sonuc_baslik: 'Trei excursii pentru dumneavoastră',
    plan_wa_buton: 'Întreabă despre acest plan pe WhatsApp',
    plan_yeniden: 'Începe din nou',
    plan_msj_giris: 'Bună ziua, planificatorul mi-a propus aceste excursii:',
    plan_msj_kalis: 'Rămânem {g}, {p}.',
    plan_msj_kapanis: 'Îmi puteți confirma disponibilitatea și prețul?',

    rehber_grup: 'Ghid Antalya',
    rehber_pratik_baslik: 'Informații practice',
    rehber_ucretsiz_baslik: 'Ce poți vedea gratuit în Antalya',
    rehber_guncelleme: 'Ultima actualizare',
    rehber_dogrulama: 'Informațiile se pot schimba în timp. Pagina este verificată din surse oficiale înainte de publicare.',
    rehber_soru_wa: 'Mai aveți o întrebare? Scrieți-ne.',
    rehber_ucretsiz_kapanis: 'Dacă doriți să ieșiți din oraș, aruncați o privire asupra excursiilor noastre.',
    rehber_ulasim: 'Cum ajungeți',
    rehber_sure: 'Durată',

    transfer_baslik: 'Transfer aeroport Antalya',
    transfer_eyebrow: 'Transfer privat VIP',
    transfer_ozet: 'Transfer privat confortabil și sigur, la preț fix, între Aeroportul Antalya și hotelul dumneavoastră, cu vehiculele noastre VIP Mercedes V-Class și Sprinter — potrivite pentru grupuri de la 6 la 12 persoane.',
    transfer_h1_alt: 'Vă întâmpinăm imediat după aterizare și vă ducem confortabil și în siguranță la hotel cu vehiculul nostru VIP V-Class sau Sprinter, ales în funcție de mărimea grupului dumneavoastră.',
    transfer_cta_wa: 'Continuă pe WhatsApp',
    transfer_cta_fiyat: 'Vezi prețurile',
    transfer_ozellik_1_baslik: 'Vehicul VIP confortabil',
    transfer_ozellik_1_metin: 'Mercedes V-Class și Sprinter — scaune din piele, plafon înstelat și iluminare ambientală pentru o călătorie premium, indiferent de mărimea grupului.',
    transfer_ozellik_2_baslik: 'Urmărirea zborului',
    transfer_ozellik_2_metin: 'Vă urmărim zborul și vă așteptăm la sosiri, chiar dacă întârzie.',
    transfer_ozellik_3_baslik: 'Șofer profesionist',
    transfer_ozellik_3_metin: 'Șoferii noștri amabili și experimentați vă întâmpină și vă preiau bagajele.',
    transfer_ozellik_4_baslik: 'Preț fix',
    transfer_ozellik_4_metin: 'Fără costuri ascunse — un preț clar per vehicul, vehiculul potrivit este ales automat în funcție de mărimea grupului.',
    transfer_arac_baslik: 'Opțiuni de vehicule',
    transfer_arac_standart_ad: 'Standard VIP — Mercedes V-Class',
    transfer_arac_standart_aciklama: 'Un vehicul VIP confortabil, cu scaune din piele, pentru grupuri mici și medii.',
    transfer_arac_buyuk_ad: 'VIP pentru grupuri mari — Mercedes Sprinter',
    transfer_arac_buyuk_aciklama: 'Un vehicul VIP spațios cu televizor, măsuță și scaune premium pentru grupuri mai mari.',
    transfer_arac_kapasite: 'Până la {n} persoane',
    transfer_fiyat_baslik: 'Prețuri transfer pe regiuni',
    transfer_fiyat_alt: 'Toate prețurile sunt pentru o cursă simplă, per vehicul.',
    transfer_dogu_baslik: 'Regiunea de est',
    transfer_bati_baslik: 'Regiunea de vest',
    transfer_tablo_bolge: 'Regiune',
    transfer_tablo_fiyat: 'Preț',
    transfer_not: 'Prețurile sunt pentru o cursă simplă, per vehicul. Pentru o regiune care nu apare în listă, scrieți-ne pe WhatsApp.',
    transfer_wa_mesaj_giris: 'Bună ziua, aș dori informații despre transferul de la Aeroportul Antalya.',
    transfer_wa_mesaj_guzergah: 'Traseu: Aeroportul Antalya ⇄ {b}',
    transfer_wa_mesaj_fiyat: 'Preț: {f} (cursă simplă, per vehicul)',
    transfer_wa_mesaj_kapanis: 'Îmi puteți confirma disponibilitatea și ora de preluare?',
    transfer_galeri_alt: 'Vehicul VIP de transfer aeroport SER Tourism',
    transfer_ana_teaser_baslik: 'Transfer aeroport',
    transfer_ana_teaser_metin: 'Transfer privat confortabil, la preț fix, între Aeroportul Antalya și hotelul dumneavoastră, cu vehiculele noastre VIP V-Class și Sprinter — potrivite pentru grupuri de la 6 la 12 persoane.',
    transfer_ana_teaser_buton: 'Vezi prețurile transferului',

    ramses_baslik: 'Studio de tatuaje și piercing',
    ramses_ozet: 'Tatuaje și piercing în Antalya. Design gratuit și preluare gratuită de la hotel, programare pe WhatsApp.',
    ramses_h1_alt: 'Tatuaje și piercing cu artiști experimentați în Antalya. Design gratuit, preluare gratuită de la hotel.',
    ramses_badge_tasarim: 'Design gratuit',
    ramses_badge_alis: 'Preluare gratuită',
    ramses_puan_metin: '{n} recenzii',
    ramses_puan_sr: '5 din 5 stele',
    ramses_yorumlar_baslik: 'Recenzii Google',
    ramses_yorum_kaynagi: 'Recenzie Google',
    ramses_galeri_baslik: 'Lucrări din studio',
    ramses_cta_baslik: 'Scrieți pe WhatsApp pentru programare și detalii',
    ramses_cta_metin: 'Designul și preluarea de la hotel sunt gratuite.',
    ramses_galeri_alt: 'Lucrare — tatuaj și piercing',
    ramses_wa_konu: 'Aș dori informații despre tatuaje/piercing.',

    s_biz: 'Compania',
    s_hakkimizda: 'Despre noi',
    s_iptal: 'Condiții de anulare',
    s_sss: 'Întrebări frecvente',
    s_iletisim: 'Contact',
    s_gizlilik: 'Confidențialitate',

    meta_ana_baslik: 'Excursii în Antalya — plata în ziua excursiei',
    meta_ana_aciklama: 'Excursii din Antalya. Asistență în șase limbi, preluare de la hotel, plata în ziua excursiei, anulare gratuită până cu 24 de ore înainte.',
    meta_tur_aciklama: '{b} — de la {f} €. Preluare de la hotel, plata în ziua excursiei, anulare gratuită până cu 24 de ore.',

    yt_aciklama: '[Descrierea excursiei va fi adăugată — textele se redactează în șase limbi]',
    yt_program: '[Programul va fi adăugat]',
    yt_liste: '[Lista va fi completată]',
    yt_metin_sayfa: '[Textul acestei pagini va fi adăugat]',
  },
};
