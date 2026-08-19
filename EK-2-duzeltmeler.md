# EK-2 — Düzeltmeler ve İyileştirmeler

> MASTER-PROMPT.md ve EK-1'e ektir. Oradaki tüm kurallar geçerli:
> yasak listesi, palet kuralları, performans hedefleri, erişilebilirlik.
>
> Sıra: **A → B → C.** Biri bitmeden diğerine geçme, her biri bitince göster.

---

# A · MESAFE HARİTASI

## A1. Önce üç hata

**Etiket çakışması.** Sol altta "8 SA" ve "3 SA" halka etiketleri
Kekova'nın yazısıyla üst üste biniyor, ikisi de okunmuyor.

Çözüm: halka etiketleri baseline'ın **altına**, deniz şeridinin içine alınsın.
Düğüm etiketleriyle asla çakışmasın. Gerekirse halka etiketleri sadece
sol kenarda tek sütun hâlinde dursun.

**Tur sayıları yanlış.** Side "4 tur", Alanya "3 tur" gösteriyor.
Aktif tur sayısı 9 ve bu dağılım yanlış.

Sayım şu olmalı: `turlar.filter(t => t.aktif && t.sehir === destinasyon.id).length`
Aktif olmayan turlar sayılmaz. Sayı 0 ise destinasyon haritada hiç görünmez.

**Yazım hatası.** "ölçek degil" → "ölçek **değil**"
Tüm dillerde dipnot metni kontrol edilsin.

## A2. Tam genişlik

Harita bölümü sayfa kenarlarına kadar uzansın.

- Bölüm `width: 100%`, iç boşluk yok
- Deniz şeridi (gradyan + dalga çizgileri) **soldan sağa tam kenara** gitsin
- SVG içeriği ortada kalsın, `max-width: 900px`
- Deniz katmanı SVG'nin dışına taşabilir — ayrı bir katman olarak kurulsun
- Yükseklik `clamp(420px, 46vw, 560px)`

Şu anki hâlinde deniz ortada bir dikdörtgen gibi duruyor; kenarlara
uzanınca kıyı hissi doğru veriliyor.

## A3. Hover — çizgi ve düğüm birlikte

Üstüne gelindiğinde:

```css
.mesafe__dugum:hover .mesafe__cizgi{
  stroke: var(--pirinc);
  stroke-opacity: 1;
  stroke-width: 1.8;
}
.mesafe__dugum:hover .mesafe__nokta{ r: 7.5; fill: var(--pirinc); }
.mesafe__dugum:hover .mesafe__ad{ fill: var(--pirinc-koyu); }
.mesafe__dugum:hover .mesafe__hale{ opacity: .18; }
```

Yeni öge: her düğümün altına görünmez bir `.mesafe__hale` dairesi
(`r=14`, `fill: var(--pirinc)`, `opacity: 0`). Hover'da %18'e çıkıyor.
Nokta büyürken etrafında yumuşak bir ışık oluşuyor.

Geçiş süresi **180 ms**, `ease-out`. Daha uzunu yavaş hissettirir.

**Diğerleri sönümlensin.** Bir düğümün üstündeyken kalan tüm düğümler
`opacity: .45`'e insin. Seçilen öne çıksın.

```css
.mesafe__svg:has(.mesafe__dugum:hover) .mesafe__dugum:not(:hover){
  opacity: .45;
}
```

## A4. Tıklama geçişi

Tıklandığında sayfa hemen değişmesin — 220 ms'lik kısa bir onay:
nokta bir kez hafifçe büyüyüp normale dönsün, sonra yönlendirme olsun.

```css
.mesafe__dugum:active .mesafe__nokta{ r: 9; }
```

Ölçek animasyonu için `transform` değil `r` kullanılsın — SVG'de
`transform: scale()` düğümü merkezden kaydırır.

## A5. Sayfa açılışında çizgiler çizilsin

Bölüm görünür olduğunda, bağlantı çizgileri merkezden dışa doğru
bir kez çizilsin. Tek seferlik, tekrarlamaz.

```css
.mesafe__cizgi{
  stroke-dasharray: var(--uzunluk);
  stroke-dashoffset: var(--uzunluk);
  animation: cizgiCiz .7s ease-out forwards;
}
@keyframes cizgiCiz{ to{ stroke-dashoffset: 0; } }
```

Her çizginin uzunluğu `getTotalLength()` ile hesaplanıp CSS değişkeni
olarak yazılsın. Düğümler çizgiler bittikten sonra 80 ms arayla belirsin.

`IntersectionObserver` ile tetiklensin — sayfa açılır açılmaz değil,
bölüm ekrana girdiğinde.

## A6. Mobil

`hover` mobilde yok. 720 px altında zaten listeye dönüşüyor, o kalsın.
Liste öğelerine dokunulduğunda kısa bir arka plan geri bildirimi verilsin.

## A7. Erişilebilirlik

`prefers-reduced-motion: reduce` → çizgi çizilme animasyonu ve tüm
geçişler kapansın, harita doğrudan son hâliyle görünsün.

Klavye ile `Tab`'landığında hover ile aynı görsel durum oluşsun.

---

# B · HAVA DURUMU — ÜST BAR ROZETİ

Konum: üst barda, **dil seçicinin solunda**.

## B1. Neden hareketli değil

Üst bar her sayfada görünür. Orada sürekli dönen/kayan bir öge,
kullanıcı ne okursa okusun göz ucuyla takip edilir ve rahatsız eder.
MASTER-PROMPT §15 yasak listesinde "sürekli hareket eden öge" zaten var.

Bunun yerine: **sabit rozet + istendiğinde açılan panel.**
Hareket var ama kullanıcı istediğinde.

## B2. Kapalı hâli

```
☀ 31°   🇹🇷 TR ▾   ₺ ▾
```

- İkon + derece. Başka bir şey yok.
- Yüksekliği dil seçiciyle aynı, hizalı
- İkon `--pirinc`, derece `--kagit` (üst bar koyu)
- Sayfa yüklendikten sonra **bir kez** yumuşakça belirir
  (`opacity 0→1`, 300 ms) — sonra hiç hareket etmez

## B3. Açık hâli

Tıklandığında altında panel açılır. 200 ms, yukarıdan aşağı yumuşak açılım.

```
┌─────────────────────────────┐
│  Antalya                    │
│  ☀  31°                     │
│  Bugün 33° / 24°            │
│                             │
│  Sal   ☀   34° / 25°        │
│  Çar   ⛅  32° / 24°        │
│  Per   🌧  27° / 21°        │
│                             │
│  Turlarımızın çoğu her hava │
│  koşulunda yapılır. İptal   │
│  gerekirse ücret alınmaz.   │
└─────────────────────────────┘
```

Son satır iptal politikası sayfasına bağlanır. Hava durumu kaygı
yaratabilir — güvence hemen yanında dursun.

Kapanma: dışarı tıklama, `Esc`, veya rozete tekrar tıklama.

## B4. Veri

Open-Meteo. API anahtarı gerekmez.

```
https://api.open-meteo.com/v1/forecast
  ?latitude=36.8969&longitude=30.7133
  &current=temperature_2m,weather_code
  &daily=temperature_2m_max,temperature_2m_min,weather_code
  &timezone=Europe/Istanbul&forecast_days=4
```

- İstek sayfa yüklendikten **sonra** (`defer`). LCP'yi etkilemesin.
- Sonuç `sessionStorage`'a yazılsın, aynı oturumda tekrar istenmesin.
- **İstek başarısız olursa rozet hiç görünmez.** Hata mesajı gösterme.
- Yüklenene kadar rozet yok — yer tutucu da yok, CLS oluşmasın.

`weather_code` → ikon eşlemesi ve gün adları 5 dilde çevrilir.
`Intl.DateTimeFormat` ile kısa gün adı alınsın.

## B5. Mobil

Üst barda yer yok. 768 px altında rozet gizlenir; hava durumu
yalnızca ana sayfada, hero'nun altındaki mevcut kutuda görünür.

---

# C · TATİLİNİZİ PLANLAYALIM

Şu anki hâli çok çıplak: düz radyo düğmeleri, ayrı "Devam" butonu.

## C1. İlke

**Soru adımları sakin, sonuç ekranı zengin.**

Kullanıcı üç soruyu 30 saniyede geçsin istiyoruz. Adımlarda süsleme
onu yavaşlatır. Ödül sonuç ekranında verilir.

**Video yok.** Bir karar akışında video kullanıcıyı durdurur,
dikkatini dağıtır ve sayfayı ağırlaştırır.

## C2. İlerleme göstergesi

Başlığın altında, ince ve sade:

```
1 / 3  ▬▬▬▬▬▬▬░░░░░░░░░░░░░░
```

Dolan kısım `--pirinc`, boş kısım `--cizgi`. Geçiş 250 ms.

## C3. Seçenek kartları

Radyo düğmesi yerine ikonlu kartlar. Izgara: masaüstü 2 sütun, mobil 1.

**Soru 1 — Kaç gününüz var?**
| Seçenek | İkon |
|---|---|
| 2-3 gün | takvim, birkaç gün işaretli |
| 4-5 gün | takvim, hafta |
| 6-7 gün | takvim, tam hafta |
| Bir haftadan fazla | takvim, çift ok |

**Soru 2 — Kimlerle geldiniz?**
| Seçenek | İkon |
|---|---|
| Çift | iki figür |
| Çocuklu aile | iki büyük bir küçük figür |
| Arkadaş grubu | üç figür |
| Yalnız | tek figür |

**Soru 3 — Ne tarz seversiniz?** (çoklu seçim)
| Seçenek | İkon |
|---|---|
| Deniz ve tekne | dalga |
| Tarih ve kültür | sütun |
| Macera ve adrenalin | dağ |
| Rahatlama | yaprak |

**İkon kuralları:** sadece çizgi (outline), dolgu yok, 1.5 px kalınlık,
28×28 px, rengi `--murekkep`, seçiliyken `--pirinc`.
SVG olarak gömülür, ikon kütüphanesi yüklenmez.

**Kart hâlleri:**

| Durum | Görünüm |
|---|---|
| Normal | `--beyaz` zemin, `--cizgi` kenarlık |
| Hover | kenarlık `--cizgi-koyu`, 1 px yukarı kayar |
| Seçili | kenarlık `--pirinc` 2 px, ikon `--pirinc`, hafif pirinç gölge |

Geçişler 160 ms.

## C4. Otomatik ilerleme

**Tek seçimli sorularda** (1 ve 2): karta tıklandığı an kart seçili
görünümüne geçsin, **280 ms sonra** bir sonraki soruya geçilsin.
Ayrı "Devam" butonu yok.

Gecikme önemli: kullanıcı seçiminin kaydedildiğini görmeli.
Anında geçerse "ne oldu" hissi doğar.

**Çok seçimli soruda** (3): otomatik geçiş yok. "Sonuçları gör" butonu kalır.

**Geri** bağlantısı her adımda bulunsun, önceki cevap korunsun.

## C5. Adım geçişi

Çıkan adım sola kayarak solsun, gelen adım sağdan gelsin.
220 ms, `ease-out`. Yükseklik farkı varsa yumuşak geçsin, sayfa zıplamasın.

`prefers-reduced-motion` → geçiş yok, adımlar doğrudan değişsin.

## C6. Sonuç ekranı — asıl şov burada

Üç tur kartı. Ama liste sayfasındaki kartın aynısı değil:

- **Görsel daha büyük**, 16:9
- Üstte pirinç rozet: **"Size uygun"**
- Kartın altında **neden önerildiği** tek satır:
  *"5 gününüz var ve deniz sevdiğinizi söylediniz."*
- Fiyat, süre, kalkış bölgesi

Kartlar sırayla belirsin — 80 ms arayla, aşağıdan yukarı 12 px kayarak.

**Altında tek büyük WhatsApp butonu:**

> **Bu planı WhatsApp'tan sor**

Üç turu birden içeren hazır mesaj üretir (EK-1 §4'teki şablon).

Yanında ikincil bağlantı: *"Yeniden başla"*

## C7. Sonuç boşsa

Hiçbir tur eşleşmezse: en popüler 3 tur gösterilsin, üstüne tek satır:
*"Seçimlerinize tam uyan tur bulamadık, en çok tercih edilenler bunlar."*

Boş ekran gösterilmez.

## C8. Erişilebilirlik

- Kartlar `role="radio"` / `role="checkbox"`, ok tuşlarıyla gezilebilir
- Adım değişince odak yeni sorunun başlığına gitsin
- İlerleme göstergesi `aria-valuenow` ile okunabilir olsun
- Her ikonun yanında görünür metin var — ikon tek başına anlam taşımıyor

---

# PERFORMANS

Bu üç iş hız bütçesini aşmamalı. MASTER-PROMPT §12 hedefleri değişmedi.

| Öge | Kural |
|---|---|
| Harita | Saf SVG + CSS. `getTotalLength()` için ~15 satır JS, o kadar |
| Hava durumu | Sayfa yüklendikten sonra, tek istek, oturumda önbelleklenir |
| Planlayıcı | JS yalnızca `/plan/` sayfasında yüklenir |
| İkonlar | Gömülü SVG. İkon kütüphanesi **yüklenmez** |
| Ana sayfa JS | Hâlâ **< 40 KB** |

Aşılırsa özellik değil, uygulama biçimi değişir.

---

# ÖZET — kabul kriterleri

- [ ] Halka etiketleri düğüm yazılarıyla çakışmıyor
- [ ] Tur sayıları doğru (aktif turlardan sayılıyor)
- [ ] "değil" yazım hatası düzeltildi
- [ ] Harita tam genişlik, deniz kenarlara uzanıyor
- [ ] Hover'da çizgi + düğüm birlikte parlıyor, diğerleri sönüyor
- [ ] Açılışta çizgiler bir kez çiziliyor
- [ ] Hava rozeti üst barda, dil seçicinin solunda, sabit
- [ ] Rozete tıklayınca 4 günlük panel açılıyor
- [ ] Veri gelmezse rozet hiç görünmüyor
- [ ] Planlayıcıda ikonlu kartlar var
- [ ] Tek seçimli sorularda otomatik ilerleme çalışıyor
- [ ] İlerleme göstergesi var
- [ ] Sonuç ekranında "neden önerildi" satırı var
- [ ] `prefers-reduced-motion` tüm animasyonları kapatıyor
- [ ] Ana sayfa JS bütçesi aşılmadı
