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
  ana_sayfa: string;
  tum_turlar: string;
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
  b_one_cikan: string;
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
    dipnot: string;
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
    ana_sayfa: 'Ana sayfa',
    tum_turlar: 'Tüm turlar',
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
    b_one_cikan: 'Öne çıkan turlar',
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
    liste_giris_yt: '[Giriş metni eklenecek — 2-3 cümle]',
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
      baslik: 'Antalya’dan ne kadar uzakta?',
      altBaslik: 'Araçla yaklaşık gidiş süreleri',
      svgBaslik: 'Antalya çevresindeki tur noktaları ve ulaşım süreleri',
      svgAciklama: 'Merkezde Antalya, çevresinde tur noktaları. Her nokta o yerin adını, araçla gidiş süresini ve mevcut tur sayısını gösterir.',
      kuzey: 'KUZEY',
      konaklamali: 'konaklamalı',
      dipnot: 'Yönler gerçek, ölçek değil. Süreler araçla yaklaşıktır.',
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
    ana_sayfa: 'Home',
    tum_turlar: 'All tours',
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
    b_one_cikan: 'Featured tours',
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
    liste_giris_yt: '[Intro text to be added — 2-3 sentences]',
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
      baslik: 'How far from Antalya?',
      altBaslik: 'Approximate driving times',
      svgBaslik: 'Tour destinations around Antalya with driving times',
      svgAciklama: 'Antalya sits at the centre, with tour destinations around it. Each point shows the name, the driving time and how many tours are available.',
      kuzey: 'NORTH',
      konaklamali: 'overnight',
      dipnot: 'Directions are real, the scale is not. Times are approximate by road.',
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
    ana_sayfa: 'Главная',
    tum_turlar: 'Все экскурсии',
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
    b_one_cikan: 'Популярные экскурсии',
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
    liste_giris_yt: '[Вступительный текст будет добавлен]',
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
      baslik: 'Как далеко от Антальи?',
      altBaslik: 'Примерное время в пути на машине',
      svgBaslik: 'Направления вокруг Антальи и время в пути',
      svgAciklama: 'В центре — Анталья, вокруг — направления экскурсий. Каждая точка показывает название, время в пути и число доступных экскурсий.',
      kuzey: 'СЕВЕР',
      konaklamali: 'с ночёвкой',
      dipnot: 'Направления реальные, масштаб — нет. Время в пути приблизительное.',
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
    ana_sayfa: 'Startseite',
    tum_turlar: 'Alle Touren',
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
    b_one_cikan: 'Beliebte Touren',
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
    liste_giris_yt: '[Einleitungstext folgt — 2-3 Sätze]',
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
      baslik: 'Wie weit von Antalya?',
      altBaslik: 'Ungefähre Fahrzeiten',
      svgBaslik: 'Ausflugsziele rund um Antalya mit Fahrzeiten',
      svgAciklama: 'In der Mitte liegt Antalya, darum herum die Ausflugsziele. Jeder Punkt zeigt den Namen, die Fahrzeit und die Zahl der verfügbaren Touren.',
      kuzey: 'NORDEN',
      konaklamali: 'mit Übernachtung',
      dipnot: 'Die Richtungen stimmen, der Maßstab nicht. Fahrzeiten sind Richtwerte.',
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
    ana_sayfa: 'Strona główna',
    tum_turlar: 'Wszystkie wycieczki',
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
    b_one_cikan: 'Polecane wycieczki',
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
    liste_giris_yt: '[Tekst wprowadzający zostanie dodany]',
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
      baslik: 'Jak daleko od Antalyi?',
      altBaslik: 'Orientacyjny czas dojazdu samochodem',
      svgBaslik: 'Kierunki wycieczek wokół Antalyi i czas dojazdu',
      svgAciklama: 'W środku Antalya, wokół niej kierunki wycieczek. Każdy punkt pokazuje nazwę, czas dojazdu i liczbę dostępnych wycieczek.',
      kuzey: 'PÓŁNOC',
      konaklamali: 'z noclegiem',
      dipnot: 'Kierunki są prawdziwe, skala nie. Czasy dojazdu są orientacyjne.',
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
    ana_sayfa: 'Acasă',
    tum_turlar: 'Toate excursiile',
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
    b_one_cikan: 'Excursii recomandate',
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
    liste_giris_yt: '[Textul introductiv va fi adăugat]',
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
      baslik: 'Cât de departe de Antalya?',
      altBaslik: 'Timpi aproximativi de deplasare cu mașina',
      svgBaslik: 'Destinațiile din jurul Antalyei și timpii de deplasare',
      svgAciklama: 'În centru se află Antalya, iar în jur destinațiile excursiilor. Fiecare punct arată denumirea, timpul de deplasare și numărul de excursii disponibile.',
      kuzey: 'NORD',
      konaklamali: 'cu cazare',
      dipnot: 'Direcțiile sunt reale, scara nu. Timpii sunt aproximativi, cu mașina.',
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
