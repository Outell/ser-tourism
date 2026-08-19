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
