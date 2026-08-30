# CHANGELOG

Bu dosya, MASTER-PROMPT.md ve EK-1/EK-2/EK-3 şartnamelerinin tamamlanmasından
sonra yapılan oturum bazlı değişiklikleri (düzeltme, iyileştirme, içerik
güncellemesi) tarihli olarak kaydeder. Şartname dosyaları değişmez; burası
"ne değişti, ne zaman, neden" sorusuna cevap verir.

---

## 2026-08-30

### Yeni — Sağlık turizmi galerisine "Saç Ekimi Sonuçları" grubu eklendi
Kullanıcı `D:\Side Hustle\Images\Health` altına, yalnızca ense/saç çizgisi
açısından çekilmiş (yüz göstermeyen) 2 gerçek öncesi/sonrası fotoğrafı koydu.
Sonuç galerisi artık üç gruplu: Saç Ekimi Sonuçları (2) → Diş Tedavisi
Sonuçları (6) → Rinoplasti Sonuçları (4), tek ışık kutusu üçünü de gezebiliyor.
`src/data/saglikTurizmi.ts`, `src/sablonlar/SaglikTurizmi.astro`,
`src/i18n/sozluk.ts` (`saglik_galeri_sac_baslik`), 2 yeni görsel.

### Düzeltme — Sağlık turizmi galerisindeki diş fotoğrafları "sonrası" yarısını kesiyordu
Web'den indirilen diş öncesi/sonrası kompozit fotoğrafları kareydi (1:1); sitedeki
4:3 galeri kutusuna zorlanınca kompozitin alt yarısı ("sonrası") kırpılıyordu.
Kullanıcı `D:\Side Hustle\Images\Health` altına kendi topladığı, tam çözünürlüklü
6 diş + 4 rinoplasti fotoğrafını koydu; bunlar kırpılmadan (`fit:'cover'` yerine
gerçek oranı koruyacak şekilde) yeniden işlendi. Galeri artık iki ayrı başlıklı
gruba ayrıldı: "Diş Tedavisi Sonuçları" (6 görsel) ve "Rinoplasti Sonuçları"
(4 görsel, önceden hiç yoktu) — tek ışık kutusu ikisini de düz bir dizi üzerinden
geziyor. Kategori kartındaki diş fotoğrafı da artık tam kompozit yerine yalnızca
"sonrası" kısmından kırpılan tek, temiz bir gülüş görseli.
`src/data/saglikTurizmi.ts` (`SAGLIK_SONUC_GRUPLARI`), `src/sablonlar/SaglikTurizmi.astro`,
`src/i18n/sozluk.ts` (`saglik_galeri_rinoplasti_baslik`), `gorseller/saglik-turizmi/`
ve `public/gorseller/saglik-turizmi/` (10 yeni görsel, 5 hatalı kırpılmış görsel silindi).

### Yeni — "Sağlık Turizmi" ortak hizmeti eklendi (Ramses Ink ile aynı desen)
Dövme/piercing stüdyosuna ek olarak ikinci bağımsız ortak: anlaşmalı bir sağlık
turizmi kliniği (saç ekimi, diş tedavisi, göz tedavileri, estetik işlemler).
Klinik ismi/logo/konum sitede yok, fiyat/iptal alanı yok (§11 "boş alan
sessizdir"), tek aksiyon WhatsApp — Ramses Ink ile birebir aynı prensip.
Yeni sayfa `turlar/saglik-turizmi/` altında (6 dilde çevrilmiş slug), turlar
listesinde Ramses kartının hemen yanında ikinci kart olarak çıkıyor, ayrıca
kullanıcı isteğiyle ana sayfada da (Transfer önceliğiyle aynı görsel dilde,
daha kısa) bir banner var.

Görseller iş sahibinin onayıyla ortak klinik sitesinden alındı — ancak saç
ekimi galerisindeki kaynak fotoğraflar profesyonel önce/sonra kompozisyonu
değil, gerçek ve tanınabilir hastaların kişisel ortamlarda (banyo, araba, ev)
çektiği selfie'lerdi; klinik izni olsa bile üçüncü bir işletmenin sitesinde
yeniden yayınlamak hasta mahremiyeti açısından uygun görülmedi ve hiçbiri
kullanılmadı. Yalnızca kimliği belli etmeyen, ağız bölgesine kırpılmış diş
tedavisi öncesi/sonrası fotoğrafları (5 adet) ve jenerik/stok kategori
görselleri (göz, estetik) kullanıldı. Yorum bölümü yok — yeni hizmet olduğu
için gerçek referans henüz yok; onun yerine doğrulanabilir genel güven
maddeleri var (lisanslı hekim, çok dilli koordinasyon, konaklama/transfer
dahil, tek WhatsApp hattı).

WhatsApp numarası Ramses ile aynı yöntemle yer tutucu (`905000000000`) —
gerçek numara verilince yalnızca `SAGLIK_WA_NUMBERS` değişecek.

`src/data/saglikTurizmi.ts` (yeni), `src/sablonlar/SaglikTurizmi.astro` (yeni),
`src/components/SaglikTanitimKart.astro` (yeni), `src/config/marka.ts`
(`SAGLIK_WA_NUMBERS`), `src/lib/rotalar.ts` (`SAGLIK_SLUG`, `saglikUrl`,
`'saglik'` sayfa şablonu), `src/i18n/sozluk.ts` (6 dilde `saglik_*` anahtarları),
`src/pages/[...yol].astro`, `src/sablonlar/Liste.astro`,
`src/sablonlar/AnaSayfa.astro`, `gorseller/saglik-turizmi/` (10 görsel).

## 2026-08-27

### Düzeltme — Ana sayfa transfer kartı "yalnızca V-Class" izlenimi veriyordu
Büyük Grup VIP (12 kişilik Mercedes Sprinter) eklendikten sonra hem ana
sayfadaki transfer tanıtım kartı hem de Transfer sayfasının başlık altı
metni, meta açıklaması ve ilk özellik kartı hâlâ yalnızca "Mercedes V-Class"
diyordu; bu da hizmetin 6 kişiyle sınırlı olduğu izlenimi veriyordu. Altı
dilin tamamında bu dört metin "V-Class ve Sprinter" olacak, 6-12 kişilik
grup aralığını açıkça belirtecek şekilde güncellendi.
`src/i18n/sozluk.ts` (`transfer_ozet`, `transfer_h1_alt`,
`transfer_ozellik_1_metin`, `transfer_ana_teaser_metin`)

### Düzeltme — Ana sayfa transfer kartındaki fotoğraf araç dışını gösteriyordu
Kullanıcı geri bildirimi: kart görseli VIP aracın dışını (ön panjur/plaka)
değil, iç mekânını göstermeliydi. Görsel, yıldızlı tavan + deri koltuklar +
TV ekranını gösteren galeri fotoğrafıyla değiştirildi — metnin vaat ettiği
"deri koltuklar, yıldızlı tavan" ile artık görsel de örtüşüyor. Kartın tamamı
zaten tıklanabilir (fotoğraf dahil, Transfer sayfasını açar) ve hover'da
görsel hafifçe büyüyor; bu davranış bir önceki oturumda eklenmişti, değişmedi.
`src/sablonlar/AnaSayfa.astro`

### Düzeltme — Tur detay sayfasında "Seçenek" değişince fiyat özeti güncellenmiyordu
Aksu Dolphin Experience gibi `booking_options`'lı turlarda rezervasyon
panelindeki "Seçenek" açılır menüsünden farklı bir seçenek (ör. "Dolphin
Show — Side transfer dahil" veya "Swimming With Dolphins") seçildiğinde,
formun üstündeki fiyat özeti ("39 €'dan başlayan", ≈ yerel para birimi
tutarı, Yetişkin/Çocuk/Bebek satırları) hep ilk açılan seçeneğin
fiyatlarında donuk kalıyordu — yalnızca WhatsApp mesajı doğru fiyatla
gidiyordu. Kök neden: fiyat özeti (`.fiyat-blok`, `Tur.astro`) sayfa
yüklenirken sunucu tarafında bir kez basılıyor, `WhatsAppForm.astro`'daki
"Seçenek" script'i ise yalnızca kendi formunun içine bakıyordu.
`WhatsAppForm.astro`'nun script'i artık "Seçenek" değişince (ve sayfa
yüklendiğinde) `.fiyat-blok__rakam`, `.fiyat-blok__yaklasik` (`data-eur`)
ve `.fiyat-katmanlari` satırlarını seçilen seçeneğin fiyatlarıyla yeniden
yazıyor; döviz çevirici (`TemelSayfa.astro`) da yeni `data-eur` değerini
anında ≈ tutarına çevirebilsin diye `limyra-fiyat-guncelle` olayını
dinliyor. `src/components/WhatsAppForm.astro`, `src/layouts/TemelSayfa.astro`

### Doğrulama
- `npm run build` — 218 sayfa, hatasız.
- Tarayıcıda canlı `npm run dev` üzerinde test edildi: Aksu Dolphin
  sayfasında "Seçenek"ten "Swimming With Dolphins — Transfer Dahil"
  seçilince özet "159 €'dan başlayan" / "≈ 8.745 ₺" / Yetişkin 159 € /
  Çocuk 159 € (Bebek satırı doğru şekilde kayboluyor) gösterdi;
  "Dolphin Show — Side transfer dahil" seçilince "55 €'dan başlayan" /
  Yetişkin 55 € / Çocuk 35 € / Bebek Ücretsiz doğru şekilde göründü;
  konsolda hata yok.

## 2026-08-26

### Kritik düzeltme — Tur detay sayfasında "Tur" seçici sayfa içeriğini değiştirmiyordu
Rezervasyon panelindeki "Tur" alanından başka bir tur seçildiğinde yalnızca
WhatsApp mesajı için tutulan veri güncelleniyordu; galeri, fiyat bloğu,
program ve diğer tüm içerik hep ilk açılan turda kalıyordu (statik sitede
her tur ayrı bir sayfa olduğu için). Artık seçim değişince gerçekten o
turun sayfasına yönlendiriliyor; doldurulmuş tarih/yetişkin/çocuk/otel/
isim/not alanları sorgu dizesiyle yeni sayfaya taşınıp otomatik geri
yükleniyor, sonra adres çubuğu temizleniyor. `src/components/WhatsAppForm.astro`

### Düzeltme — Ana sayfada Transfer bölümü öne alındı, "Öne çıkan hizmetler" başlığı büyütüldü
- Havalimanı Transferi tanıtım bloğu artık hero'nun hemen altında, "Öne
  çıkan hizmetler"den önce. Kart düzeni Tur.astro'daki galeri-hero desenine
  (görsel + karanlık degrade + üzerine metin) çevrildi; "Özel VIP Transfer"
  rozeti, "…€'dan başlayan" fiyat teaser'ı ve WhatsApp hızlı iletişim
  butonu eklendi. `src/sablonlar/AnaSayfa.astro`
- "Öne çıkan hizmetler" başlığının üstüne küçük bir eyebrow etiketi
  (`b_one_cikan_eyebrow`, altı dilde) eklendi, başlık boyutu büyütüldü.
  `src/sablonlar/AnaSayfa.astro`, `src/i18n/sozluk.ts`
- Kart sırası: Jeep Kaizer artık Jeep Kaizer Night Safari'den önce
  geliyor. `src/sablonlar/AnaSayfa.astro`

### Düzeltme — Transfer sayfası galeri ve bölge fiyat tablosu
- Araç galerisinden otel girişini gösteren fotoğraf kaldırıldı (7 → 6
  görsel). `src/sablonlar/Transfer.astro`
- Doğu bölgesi fiyat tablosundaki yer adları düzeltildi — eskiden
  "X / Y" biçimi aynı ilçenin iki yazılışı sanılıyordu, oysa X'ten Y'ye
  transfer anlamına geliyordu: Kızılağaç → Okurcalar (65€), İncekum →
  Türkler (70€), Mahmutlar → Kargıcak (85€, eskiden yalnız "Kargıcak").
  Konaklı → Alanya Merkez (75€) yeni satır olarak eklendi. Batı
  bölgesinde Çamyuva → Çamyuva Kiriş oldu. `src/data/transferler.ts`

### Yeniden markalama — Ramses Ink sayfası jenerik "Dövme & Piercing Stüdyosu" oldu
İş sahibinin talebiyle, turlar altındaki dövme/piercing tanıtım sayfası ve
kartından "Ramses Ink" marka ismi, logosu ve "Manavgat" konum bilgisi
tamamen kaldırıldı; sayfa artık jenerik bir hizmet olarak sunuluyor.

- **Yeniden adlandırma**: Kart başlığı, sayfa başlığı, `<title>` ve
  JSON-LD `name` alanı altı dilde jenerik isme döndü (tr: "Dövme &
  Piercing Stüdyosu", en: "Tattoo & Piercing Studio", vb.). URL
  `/turlar/ramses-ink-dovme-piercing/` → `/turlar/dovme-piercing-studyosu/`
  (her dilde kendi karşılığıyla). `src/lib/rotalar.ts`, `src/i18n/sozluk.ts`
- **Manavgat referansları kaldırıldı**: sayfa metni, hero alt yazısı, meta
  açıklama ve JSON-LD `address.addressLocality` alanından silindi; adres
  artık yalnızca "Antalya" bölgesini belirtiyor. `src/sablonlar/RamsesInk.astro`
- **"Hakkımızda" bölümü ve logo/slogan kutusu tamamen kaldırıldı** —
  ilgili metin, görsel ve CSS silindi (`RAMSES_LOGO` veri/kullanımı dahil).
  `src/sablonlar/RamsesInk.astro`, `src/data/ramsesInk.ts`
- Rozet artık "Ücretsiz Tasarım" gösteriyor (eskiden marka adını tekrar
  eden "Dövme & Piercing Stüdyosu" rozetiydi) — hem markasız hem daha
  faydalı bir bilgi. `src/components/RamsesTanitimKart.astro`
- İş sahibinin kararıyla **değiştirilmedi**: Google yorumları, 5.0/500+
  puanı (isimli gerçek yorumcularla birlikte olduğu gibi bırakıldı) ve
  WhatsApp numarası (`RAMSES_WA_NUMBERS`, aynı geçici numara).
- Kullanılmayan çeviri anahtarları (`ramses_eyebrow`, `ramses_lokasyon`,
  `ramses_hakkinda_p1/p2`, `ramses_tagline*`) altı dilde temizlendi.
  `src/i18n/sozluk.ts`
- İç klasör/dosya adları (`gorseller/ramses-ink/...`) kasıtlı olarak
  değiştirilmedi — kullanıcıya görünmeyen dahili yol, kapsam dışı.

### Doğrulama
- `npm run build` — 218 sayfa, hatasız (yeni Ramses Ink URL'leri dahil,
  her dilde jenerik slug'la).
- Tarayıcıda canlı `npm run dev` üzerinde test edildi: Aksu Dolphin
  sayfasındayken "Tur" seçiciden Jeep Kaizer seçilince gerçekten Jeep
  Kaizer sayfasına gidip görselin değiştiği ve doldurulan otel/isim/
  yetişkin alanlarının yeni sayfaya taşındığı doğrulandı; Transfer
  sayfasında kaldırılan galeri görseli DOM'da yok, yeni fiyat tablosu
  metinleri doğru; Dövme & Piercing sayfasında "Ramses"/"Manavgat"
  geçmiyor, JSON-LD şeması güncel, kart yeni URL'e doğru bağlanıyor.

---

## 2026-08-25

### Yeni özellik — Ramses Ink Dövme & Piercing sayfası

Turlar bölümünün altına, gerçek bir tur olmayan ilk ortak/hizmet sayfası
eklendi: `/{dil}/{turlar}/ramses-ink-...` (altı dilin tamamında yayında,
her dilde ayrı çevrilmiş slug — `RAMSES_SLUG`, `src/lib/rotalar.ts`).
Havalimanı Transferi sayfasındaki gibi ayrı bir şablon (`Tur.astro`'nun
fiyat/iptal politikası bloklarını miras almıyor); tek aksiyon WhatsApp.

- **Yeni şablon**: `src/sablonlar/RamsesInk.astro` — Tur.astro'nun galeri +
  ışık kutusu (lightbox) desenini birebir kullanıyor (hero: büyük görsel +
  5'li şerit), altında ayrı bir "stüdyodan çalışmalar" gridi aynı ışık
  kutusunu paylaşıyor (tek `[data-galeri]` deseni, tek script). Animasyonlu
  5 yıldız + "500+ Değerlendirme" bloğu, 3 gerçek Google Haritalar yorumu
  (orijinal İngilizce metinleriyle, çevrilmeden), marka sesiyle yazılmış
  "Hakkımızda" bölümü (3. şahıs anlatım — MASTER-PROMPT §15 yasak liste
  gözetilerek: ünlem yok, "muhteşem/eşsiz" gibi kelimeler yok), Ücretsiz
  Tasarım / Ücretsiz Alış / Manavgat, Antalya rozetleri.
- **Fiyat ve iptal politikası bloğu kasıtlı olarak yok** (§11 "boş alan
  sessizdir") — iş sahibinin talebi, tek CTA WhatsApp'a gidiyor.
- **Turlar listesinde kart**: `src/components/RamsesTanitimKart.astro`,
  yalnızca `/turlar/` ana liste sayfasında (kategori/şehir/bölge
  sayfalarında değil) `TurKart.astro` ile aynı `.tur-kart` görsel dilini
  kullanarak son kart olarak görünüyor; fiyat yerine ★ puan gösteriyor.
  Liste filtreleme script'i (kategori/bölge/süre) kartı otomatik gizliyor
  çünkü gerçek bir tur değil. `src/sablonlar/Liste.astro`
- **Yeni veri/config**: `src/data/ramsesInk.ts` (galeri, yorumlar, puan),
  `RAMSES_WA_NUMBERS` `src/config/marka.ts`'te — WA_NUMBERS'tan bağımsız,
  aynı geçici (yer tutucu) numarayı kullanıyor; gerçek numara verilince
  tek satır değişecek.
- Altı dilin tamamı için yeni sözlük anahtarları (`ramses_*`) eklendi —
  Rusça'da yer adları taksonomideki mevcut Kiril çevirisiyle tutarlı
  (Manavgat → Манавгат, Antalya → Анталья). `src/i18n/sozluk.ts`
- Görseller: `D:\Side Hustle\Images\Ramses Tattoo` klasöründen 11 dövme/
  piercing fotoğrafı + logo, site standardına göre işlendi (4:3 kırpma,
  1600×1200 galeri / 1200×900 kart, WebP) — `gorseller/ramses-ink/` ve
  `public/gorseller/ramses-ink/`. Logo şeffaf PNG'den lossless WebP'ye
  çevrildi (beyaz metin içerdiği için yalnızca koyu zeminde kullanılıyor).
- `TattooParlor` + `AggregateRating` + `Review` JSON-LD şeması eklendi
  (sayfada zaten görünen puan/yorum içeriğiyle birebir).

### Doğrulama
- `npm run build` — 212 sayfa (6 dil × yeni Ramses Ink sayfası dahil), hatasız.
- Tarayıcıda test edildi: TR ve RU sayfa metinleri doğru render oluyor,
  konsol hatası yok, tüm görseller 200 dönüyor, galeri/ışık kutusu (hero +
  "stüdyodan çalışmalar" ortak indeks) doğru çalışıyor, WhatsApp linki
  doğru dilde ve doğru mesaj kalıbıyla açılıyor, Turlar listesinde kategori
  filtresi uygulanınca kart doğru şekilde gizleniyor, 375px genişlikte
  yatay taşma yok (ölçüldü: `scrollWidth - clientWidth = 0`).

---

## 2026-08-24

### Yeni özellik — Havalimanı Transfer sayfası

Üst menüde "Turlar"ın yanına yeni bir "Transfer" bağlantısı eklendi;
altı dilin tamamında (`/{dil}/transfer/`) yayında. Sayfa VIP Mercedes
V-Class aracının fotoğraflarını, kısa özellik listesini (konforlu araç,
uçuş takibi, profesyonel şoför, sabit fiyat) ve bölgeye göre fiyat
tablosunu gösteriyor.

- **Fiyat tablosu** iki gruba ayrıldı — Doğu (Kundu 30€ → Kargıcak 70€)
  ve Batı (Konyaaltı/şehir merkezi 25€ → Tekirova 50€). Her satırın
  kendi yuvarlak WhatsApp düğmesi var; tıklanınca güzergah ve fiyat
  önceden doldurulmuş mesajla `wa.me` açılıyor (`TurKart.astro`'daki
  statik link deseniyle aynı mantık — form yok, JS yok).
- Fiyatlar **tek yön, araç başına** (maksimum 6 yolcu) — iş sahibiyle
  doğrulandı.
- Yeni veri dosyası: `src/data/transferler.ts` (`TRANSFER_DOGU`,
  `TRANSFER_BATI`).
- Yeni sayfa şablonu: `src/sablonlar/Transfer.astro`; rota
  `src/lib/rotalar.ts`'e (`TRANSFER_SLUG`, `transferUrl`, `tumSayfalar()`)
  ve dispatch `src/pages/[...yol].astro`'ya eklendi.
- Ana sayfaya, "Antalya Destinasyonları" (mesafe haritası,
  `MesafeHaritasi.astro`) bölümünden hemen önce bir tanıtım kartı
  eklendi. `src/sablonlar/AnaSayfa.astro`
- Menü bağlantısı masaüstü + mobil drawer'da: `src/components/Baslik.astro`
- Altı dilin tamamı için yeni sözlük anahtarları (`nav_transfer`,
  `transfer_*`) eklendi — Rusça yer adları `taksonomi.ts`'teki mevcut
  Kiril çeviri kuralına uydu (`Konyaaltı` → `Коньяалты` vb.).
  `src/i18n/sozluk.ts`
- Araç fotoğrafları optimize edilip WebP'ye çevrildi (hero 2400×1350 /
  1080×1350 mobil, kart 1200×900, galeri 1600×1200, kalite 80) —
  `gorseller/havalimani-transferi/` ve
  `public/gorseller/havalimani-transferi/`.

### Doğrulama
- `npm run build` — 206 sayfa (6 dil × yeni transfer sayfası dahil), hatasız.
- Tarayıcıda test edildi: döviz çevirici (`data-eur`) transfer fiyat
  satırlarında da çalışıyor, WhatsApp linkleri doğru dilde ve doğru
  fiyatla açılıyor, 375px genişlikte yatay taşma yok, masaüstü ve mobil
  menüde "Transfer" bağlantısı görünüyor.

---

## 2026-08-19

### İçerik — tur ismi düzeltmesi
- `Jeep Kaiser` ve `Jeep Kaiser Night Safari` turlarının **görünen** adı, tüm
  dillerde (tr/en/ru/de/pl/ro) `Jeep Kaizer` / `Jeep Kaizer Night Safari`
  olarak güncellendi (başlık, özet, açıklama, program, meta başlık/açıklama,
  görsel alt metinleri — `src/data/turlar.json`).
- Bilinçli olarak **değiştirilmedi**: `id`, `slug`, görsel dosya yolları
  (`/gorseller/jeep-kaiser/...`), `benzer_turlar` referansı ve
  `AnaSayfa.astro`'daki öne çıkan tur id listesi. Mevcut URL'ler ve linkler
  bu sayede bozulmadı.

### Mobil UX — hatalar ve düzeltmeler

1. **Hamburger menü tam ekran açılmıyordu (kritik).**
   Mobilde ☰ menüye basınca panel yalnızca header yüksekliği kadar (64px)
   render oluyor, altındaki sayfa içeriği karartılmadan görünüyordu.
   Kök neden: `.ustbar` header'ındaki `backdrop-filter: blur()`, içine
   gömülü `position: fixed` menü için "containing block" oluşturuyordu
   (bilinen bir CSS tuzağı). Menü artık `<header>` dışına, kardeş element
   olarak taşındı — tam ekran açılıp kapanıyor.
   `src/components/Baslik.astro`

2. **Dokunma hedefleri 44×44px altındaydı.**
   Hamburger buton (38px), tema/dil/sosyal ikonları (38-40px), adet +/-
   butonları (40px), WhatsApp gönder butonu (42px) ve filtre açılır
   menüleri (~37px) parmakla dokunmak için küçüktü. `@media (pointer: coarse)`
   ile yalnızca dokunmatik cihazlarda 44px'e çıkarıldı; masaüstü fare
   kullanıcıları etkilenmedi.
   `src/styles/global.css`

3. **Sohbet asistanı balonu kapatılamıyordu.**
   15 saniye sonra otomatik beliren "Kararsız mı kaldın?" balonunun
   kapatma düğmesi yoktu, sadece tıklayınca sohbeti açıyordu. Sayfanın
   neresinde belirirse (hero rozetleri, galeri altyazısı, footer linkleri)
   içeriğin üstünde kalıcı duruyordu. Ayrı bir × kapatma düğmesi eklendi;
   kapatınca o oturum boyunca tekrar çıkmıyor.
   `src/components/SeyahatAsistani.astro`, `src/styles/global.css`

### İçerik — yazım düzeltmesi
- `Land of Legends Tema Park` turunun açıklamasında yarım kalmış bir kelime
  vardı: *"Gün içinde gösteriler yapılıyor: **parad**, akşam ışık ve su
  gösterisi."* İngilizce karşılığıyla ("a parade, and an evening light and
  water show") doğrulanarak **"geçit töreni"** olarak düzeltildi.
  `src/data/turlar.json`
- Site genelinde Türkçe metinler (sözlük, tur verisi, rehber/sabit sayfa
  içerikleri) satır satır tarandı; ğ/ı/ş/ö/ü/ç kullanımında başka hata
  bulunmadı. Kaynak veri zaten büyük ölçüde doğru yazılmıştı.

### Doğrulama
- `npm run build` — 200 sayfa, hatasız.
- Mobil (375×812) ve masaüstü (1280×800) görünümlerde manuel test edildi.

### Mobil UX — dil seçici ve hava rozeti top-bar'a taşındı
- Mobilde dil seçici artık hamburger menünün arkasında değil, doğrudan
  top-bar'da, hamburger düğmesinin yanında (masaüstündeki gibi bayrak +
  dil kodu rozeti). Aynı seçici hem masaüstü hem mobil için tek örnek;
  drawer menüdeki yinelenen dil seçici kaldırıldı. `src/components/Baslik.astro`
- Hava durumu rozeti (`HavaRozeti.astro`) artık mobilde de top-bar'da
  görünür (önceden `max-width: 767px` altında tamamen gizleniyordu),
  hamburger'in bir yanında kompakt bir rozet olarak. Açılır panel genişliği
  dar ekranlarda `calc(100vw - 32px)` ile sınırlandı, taşma olmuyor.
  `src/components/HavaRozeti.astro`
- 900px altı breakpoint'te artık tüm nav gizlenmiyor; yalnızca Turlar/Plan
  yap linkleri, döviz seçici, Instagram ikonu ve tema düğmesi hamburger
  menüsünde kalıyor. Logo genişliği mobilde 128px'e düşürüldü, 375px
  genişlikte tüm öğeler (logo + dil + hava + hamburger) taşmadan sığıyor
  (doğrulandı: `preview_eval` ile bounding rect ölçümü, sağda 16px boşluk
  kalıyor). `src/styles/global.css`

### Mobil UX — sürücü menüsünde döviz seçici tema düğmesiyle aynı satırda
- Mobil drawer menüsündeki döviz seçici tam genişlik (`width: 100%`)
  render oluyordu; sadece 3 karakterlik bir değer ("€") için gereksiz
  uzun ve boş görünüyordu. `secim--dar` sınıfıyla içeriğine göre
  daralan bir seçiciye çevrildi. `src/components/Baslik.astro`
- `.mobil-menu__araclar` grid yerine flex düzenine geçti: tema düğmesi
  kalan alanı kaplıyor (`flex: 1 1 auto`), döviz seçici içeriğine göre
  sağda oturuyor (~92px), ikisi aynı satırda ve aynı yükseklikte (46px).
  `src/styles/global.css`

### Erişilebilirlik — aydınlık ve koyu tema kontrast/dokunma denetimi

Tarayıcıda canlı DOM üzerinde WCAG luminance/kontrast hesabı yapan bir
denetim betiğiyle (varsayım değil, gerçek ölçüm) ana sayfa, tur detay ve
plan sayfaları hem aydınlık hem koyu temada tarandı.

**Aydınlık tema**
1. **Hero'daki birincil "Turlar" butonu** — beyaz metin pirinç (`--accent`)
   zeminde 3.36:1 veriyordu (WCAG AA 4.5:1 altı), ayrıca kod tabanının
   kendi kuralı olan "pirinç asla buton dolgusu olmaz"a da aykırıydı.
   Koyu dolgu + pirinç kenarlık düzenine çevrildi. `src/styles/global.css`
2. **Küçük/orta boy metinde düz pirinç rengi** — takvimde seçili gün,
   WhatsApp asistanı fiyat/etiketleri, tur kartı fiyatı, mobil sabit CTA
   fiyatı, karakter sayacı uyarısı, "Interactive Journey" bölümlerindeki
   (harita, zaman çizelgesi, konum seçici) küçük etiketler ve Plan sonuç
   kartları — hepsi 20px altında 3.1-3.4:1 civarındaydı. Var olan koyu
   varyanta (`--accent-hover`, 5.6:1) çevrildi; 32px'lik büyük fiyat
   rakamları (3:1 eşiği yeterli) dokunulmadan bırakıldı.
   `src/styles/global.css`, `src/components/JourneyExperience.astro`,
   `src/components/JourneyLiveMap.astro`, `src/components/JourneyLocationPicker.astro`,
   `src/components/JourneyMapPreview.astro`, `src/components/JourneyTimeline.astro`,
   `src/sablonlar/Plan.astro`
3. **Dokunma hedefleri 44×44px altında kalmıştı** — dil seçici, her tur
   kartındaki WhatsApp butonu (en sık tıklanan dönüşüm elemanı) ve konum
   seçici karttaki "Не сейчас"/"Değiştir" butonları var olan
   `@media (pointer: coarse)` düzeltmesine dahil edilmemişti. Asistan
   widget'ındaki iki küçük kapatma düğmesi görsel boyu korunarak görünmez
   `::before` ile 44px'e genişletildi. `src/styles/global.css`,
   `src/components/JourneyLocationPicker.astro`
4. **WhatsApp formu inputları 15px'ti** — iOS Safari'de odaklanınca sayfayı
   otomatik yakınlaştırıyordu. 16px'e çıkarıldı. `src/styles/global.css`

**Koyu tema**
5. **Takvim ay ileri/geri okları görünmüyordu (kritik).** `--murekkep`
   sabit rengi koyu temada uyarlanmıyordu, koyu takvim zemininde ~1.3:1
   kontrastla neredeyse görünmez haldeydi. Hafta günü başlıkları
   (Pzt/Sal/...) da aynı nedenle 3.08:1'deydi. Temaya uyarlanan
   `--text-secondary`/`--text-muted` token'larına çevrildi.
   `src/styles/global.css`
6. **WhatsApp CTA butonu 4.39:1 veriyordu** (AA eşiği 4.5:1'in az altında).
   Koyu temadaki yeşil biraz koyultuldu, hover da (ışık temasındaki gibi)
   koyulaşacak şekilde ayarlandı — şimdi 4.9:1. `src/styles/global.css`
7. **`--duman` (ikincil metin) koyu temada uyarlanmıyordu** — kod
   tabanında bu amaçla zaten var olan `--text-muted` yerine ham marka
   sabiti kullanılan 9 canlı yer bulundu: dil seçici "seçili dil"
   göstergesi, hava durumu widget'ındaki iptal politikası linki, filtre
   etiketleri, "sonuç yok" mesajı, tur meta satırı, rezervasyon paneli alt
   başlığı, fiyat katmanı detay metni, koşullar listesi, breadcrumb
   linkleri, mobil sabit CTA'nın alt etiketi. Hepsi `--text-muted`'a
   çevrildi. `src/styles/global.css`

İkon/glif renkleri ve kenarlıklar dokunulmadı (WCAG 1.4.11 non-text eşiği
3:1, zaten geçiyordu). Doğrulama: her düzeltme sonrası aynı canlı betikle
ana sayfa/tur detay/plan sayfaları yeniden tarandı, `npm run dev` HMR
hatasız derlendi, yatay kaydırma yok.
