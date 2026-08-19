# CHANGELOG

Bu dosya, MASTER-PROMPT.md ve EK-1/EK-2/EK-3 şartnamelerinin tamamlanmasından
sonra yapılan oturum bazlı değişiklikleri (düzeltme, iyileştirme, içerik
güncellemesi) tarihli olarak kaydeder. Şartname dosyaları değişmez; burası
"ne değişti, ne zaman, neden" sorusuna cevap verir.

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
