# LIMYRA — Master Prompt

> Bu belge sitenin tam şartnamesidir. Claude Code'a bütün olarak verilir.
> Burada yazmayan bir şey yapılmaz; burada yazan bir şey atlanmaz.
> Belirsizlik varsa uydurma — sor.

---

# 1. PROJE

Antalya merkezli bir gezi (excursion) satış sitesi. Beş dilli.

**İş modeli:** Site rezervasyon almaz, ödeme almaz. Misafir turu seçer, formu doldurur,
WhatsApp'a tek dokunuşla kendi dilinde hazır yazılmış mesajla geçer. Kalan süreci
iki kişilik ekip WhatsApp üzerinden yürütür. Ödeme tur günü, yerinde yapılır.

**Birincil kitle (%70):** Zaten Antalya'da, otelde, "yarın ne yapsak" diyen turist.
Mobilde, 4G'de, aceleci. Site hızı bu yüzden en kritik teknik gereksinim.

**İkincil kitle (%30):** Tatilini önceden planlayan kişi.

**Diller:** TR, EN, RU, DE, PL — eşit öncelikli. Hiçbiri "ana dil" değil.

**Ekip kapasitesi:** 2 kişi, 08:00–22:00. Bu kısıt tasarım kararlarını belirler —
formda 6 alan var çünkü niteliksiz talep seli ekibi boğar.

---

# 2. TEKNİK

| | |
|---|---|
| Framework | **Astro** (statik çıktı, `output: 'static'`) |
| CMS | **Sanity** |
| Dağıtım | Statik dosyalar — paylaşımlı hosting'e FTP ile atılabilmeli |
| CSS | Sade CSS, tokenlar `:root` altında. Tailwind kullanma |
| JS | Minimum. Framework yok. Sadece gereken yerde vanilla |
| Görsel | WebP, `loading="lazy"`, `width`/`height` her zaman belirtilir |

**Node/build dışında runtime bağımlılığı olmayacak.** Site derlendikten sonra
saf HTML/CSS/JS olarak çalışmalı.

---

# 3. MARKA

**Ad:** LIMYRA
Kodda tek yerde tanımlanır (`src/config/marka.ts`), her yerde oradan okunur.
Sabit yazılmaz — sonradan değiştirilebilmeli.

**Slogan:**
| TR | Tek mesaj yeter. |
| EN | One message away. |
| RU | Одно сообщение — и всё. |
| DE | Eine Nachricht genügt. |
| PL | Wystarczy jedna wiadomość. |

**Konumlandırma:**
> Antalya'da yaşayan, beş dilde konuşan, mesaja hızla dönen bir ekip.
> Ödeme turda, iptal 24 saate kadar ücretsiz.

En ucuz olmak iddiası yok. **Erişilebilirlik ve güven** üzerine kurulu.

**Logo:** Amblem yok. Sadece kelime markası — Spectral 500, harf aralığı `.14em`.

---

# 4. TASARIM SİSTEMİ

## 4.1 Renk

```css
:root{
  --gece:        #16122B;   /* başlık, footer, ana metin */
  --murekkep:    #322A52;   /* ikon, hover, ikincil koyu yüzey */
  --pirinc:      #B8813F;   /* fiyat, rozet, ince ayraç */
  --pirinc-koyu: #8A5F28;
  --yesil:       #0F7A3C;   /* SADECE WhatsApp butonu */
  --yesil-hover: #0D6B34;
  --kagit:       #F7F3EC;   /* sayfa arka planı */
  --beyaz:       #FFFFFF;   /* kart yüzeyi */
  --duman:       #6E6680;   /* ikincil metin */
  --cizgi:       rgba(22,18,43,.10);
  --cizgi-koyu:  rgba(22,18,43,.18);
}
```

**Kurallar — istisnasız:**
1. Pirinç **asla buton olmaz**, asla küçük metin olmaz. Kontrastı 3.04.
   Yalnızca: fiyat rakamı, rozet çerçevesi, ince ayraç çizgisi.
2. Yeşil **yalnızca WhatsApp butonunda**. Sayfada başka hiçbir yerde yeşil yok.
   Amaç: kullanıcı yeşili "tıklanacak yer" olarak öğrensin.
3. Sayfa arka planı `--kagit`, kart `--beyaz`. Saf beyaz sayfa kullanma.
4. Metin iki seviye: ana `--gece`, ikincil `--duman`. Ara ton yok.
5. Hiçbir yerde elle hex yazılmaz. Her renk `var()` ile okunur.

## 4.2 Tipografi

```css
--font-baslik: 'Spectral', Georgia, serif;
--font-govde:  'Golos Text', system-ui, sans-serif;
```

Google Fonts'tan yüklenir. **Yalnızca 400 ve 500 ağırlık.** 700 kullanma —
lüks tipografide kalın yazı ucuz durur.

**Spectral yalnızca:** h1, h2, h3, fiyat rakamı, marka adı.
**Golos Text:** gövde metni, buton, etiket, form, menü, footer — diğer her şey.

`font-display: swap`. Fontlar için `<link rel="preconnect">`.

## 4.3 Ölçü

```css
--r-kart: 12px;  --r-buton: 8px;  --r-rozet: 999px;
```

Boşluk ölçeği: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 px. Ara değer kullanma.

## 4.4 Görsel işleme

Tüm tur kartlarında **`aspect-ratio: 4/3` zorunlu.** İstisna yok.
Karışık kaynaklı fotoğrafları birleştiren tek kural budur.

```css
.tur-kart__gorsel img{
  object-fit: cover;
  filter: saturate(.92) contrast(1.06);
}
.tur-kart__gorsel::before{           /* tema rengi katmanı */
  content:""; position:absolute; inset:0; z-index:1;
  background: var(--murekkep);
  mix-blend-mode: color;
  opacity: .10;                       /* %15'i geçme */
}
```

Kart görseli 1200×900, galeri 1600×1200, hero 2400×1350. Hepsi WebP.

## 4.5 Hero

Tek fotoğraf. **Video yok** (alan hazır, boş).

```css
.hero::after{
  background: linear-gradient(100deg,
    rgba(22,18,43,.66) 0%, rgba(22,18,43,.36) 44%, rgba(22,18,43,0) 74%);
}
```

Soldan karartma — metin okunur, sağdaki gün batımı bozulmaz.
Mobilde gradyan alttan yukarı çevrilir.

Hero içeriği **sol-orta** bölgede. Fotoğrafın ortası parlak, metin oraya gelmez.

---

# 5. SAYFA ENVANTERİ

56 sayfa, 4 şablon. Her sayfa 5 dilde üretilir → 280 sayfa.

| Şablon | Sayfa | Adet |
|---|---|---|
| `AnaSayfa` | Ana sayfa | 1 |
| `Liste` | Tüm turlar, 6 kategori, 4 şehir, 8 bölge | 19 |
| `Tur` | Tur detay | 30 |
| `Metin` | Hakkımızda, iptal politikası, SSS, iletişim, gizlilik, 404 | 6 |

## 5.1 Ana sayfa

Sırayla:
1. **Hero** — fotoğraf, h1, alt satır, arama kutusu
2. **Rozet şeridi** — Ödeme turda · Otel transferi dahil · 24 saate kadar ücretsiz iptal
3. **Öne çıkan turlar** — `one_cikan: true` olanlar, 6 kart
4. **Kategoriler** — 6 kart
5. **Neden biz** — 5 madde, ikonlu (bkz. §9)
6. **Nereden kalkıyorsunuz?** — 8 bölge, metin bağlantı listesi
7. **Footer**

Hero metinleri:
- h1: *Antalya'da yarın ne yapacaksınız?*
- alt: *30 tur, beş dilde destek, ödeme tur günü.*
- arama kutusu içi: *Nereye gitmek istiyorsunuz?*

## 5.2 Liste şablonu

Başlık + 2-3 cümlelik giriş metni + filtreler + kart grid.

Filtreler: kategori, kalkış bölgesi, süre (yarım gün / tam gün / çok günlü), fiyat aralığı.
Filtreler URL'ye yansır (`?bolge=kemer`) ama `noindex` ile işaretlenir.

**Sezon dışı turlar listede hiç görünmez.** `sezon_baslangic`/`sezon_bitis` kontrol edilir.

## 5.3 Tur şablonu

Sırayla:
1. Galeri (ilk görsel büyük)
2. h1 + özet + süre + kalkış bölgeleri
3. **Fiyat bloğu** — `32 €'dan başlayan` (pirinç) + *Ödeme tur günü*
4. **İptal politikası** — açık, kesin tarihli. WhatsApp butonunun hemen üstünde
5. **WhatsApp formu** (bkz. §7) — masaüstünde sağda yapışkan, mobilde alta sabit
6. Açıklama
7. Program (saat + durak)
8. Dahil olanlar / olmayanlar — iki sütun
9. Katılım koşulları — min/max kişi, yaş, zorluk, sağlık uyarısı, gerekli eşyalar
10. Buluşma noktası + harita
11. Önemli notlar
12. Benzer turlar — 3 kart

**İptal politikası küçük puntoda kalmaz.** Sektördeki şikayetlerin tamamı burada
toplanıyor. Kesin tarih yazılır: *"20 Ağustos 09:00'a kadar ücretsiz iptal"* —
"24 saat önce" belirsiz kalır.

## 5.4 Bölge şablonu

`/de/ab/belek/` gibi. Yol parçası "from / ab / z" olarak çevrilir —
misafir "Ausflüge ab Belek" diye arıyor.

İçerik: 3-4 cümlelik giriş + o bölgeden kalkan turların listesi (otomatik) +
bölgeye özel notlar (alış saatleri vb.).

Liste **elle yazılmaz** — `kalkis_bolgeleri` alanından türetilir.

## 5.5 Menü

Yalnızca: **Turlar** · dil seçici · döviz seçici.

Güven sayfaları (hakkımızda, iptal, SSS, iletişim, gizlilik) yalnızca footer'da.
Menü sadeliği dönüşümü doğrudan etkiler.

---

# 6. URL VE HREFLANG

## 6.1 Yapı

Dil kodu her zaman ilk klasör, **Türkçe dahil**. Kök dilsiz kalmaz.

```
/tr/turlar/kekova-batik-sehir-tekne-turu/
/en/tours/kekova-sunken-city-boat-trip/
/ru/tury/kekova-zatonuvshiy-gorod/
/de/touren/kekova-versunkene-stadt/
/pl/wycieczki/kekova-zatopione-miasto/
```

Yol parçaları da çevrilir:

| Tip | TR | EN | RU | DE | PL |
|---|---|---|---|---|---|
| Turlar | `turlar` | `tours` | `tury` | `touren` | `wycieczki` |
| Şehirler | `sehirler` | `destinations` | `napravleniya` | `reiseziele` | `kierunki` |
| Bölgeler | `bolgeler` | `from` | `iz` | `ab` | `z` |

## 6.2 Slug kuralları

- **Yalnızca ASCII.** `ğ→g ü→u ş→s ı→i ö→o ç→c ł→l ż→z ę→e ą→a ś→s ć→c ń→n`
- **Kiril transliterasyonlu:** `Кекова → kekova`. Kiril URL WhatsApp'ta bozuluyor.
- Küçük harf, tire ayraç, sonda `/`, maks. 60 karakter
- Tarih, sayı, ID yok

## 6.3 hreflang

Her sayfanın `<head>`'inde **6 satır** + canonical:

```html
<link rel="alternate" hreflang="tr" href="https://limyra.com/tr/...">
<link rel="alternate" hreflang="en" href="https://limyra.com/en/...">
<link rel="alternate" hreflang="ru" href="https://limyra.com/ru/...">
<link rel="alternate" hreflang="de" href="https://limyra.com/de/...">
<link rel="alternate" hreflang="pl" href="https://limyra.com/pl/...">
<link rel="alternate" hreflang="x-default" href="https://limyra.com/en/...">
<link rel="canonical" href="[bu sayfanın tam URL'si]">
```

**Kurallar:**
- Bağlar karşılıklı olmak zorunda. Tek yönlü bağı Google yok sayar.
- Tam URL. Göreli yol kabul edilmez.
- Ülke kodu ekleme (`en-GB` değil, `en`).
- Çevirisi olmayan sayfa hreflang'de listelenmez.

**Bu blok kurulmazsa Google beş sayfayı birbirinin kopyası sanar ve dördünü düşürür.**

## 6.4 Dil değiştirici

Misafir Rusça Kekova sayfasındayken Almanca'ya basarsa **Almanca Kekova sayfasına**
gider. Ana sayfaya atmak yasak — dönüşümü öldürür.

Çeviri yoksa: o dilde en yakın kategori sayfası + üstte küçük not.

## 6.5 Yönlendirme

| Nereden | Nereye | Kod |
|---|---|---|
| `limyra.com` | tarayıcı diline göre, yoksa `/en/` | 302 |
| `www.` | çıplak domain | 301 |
| `http://` | `https://` | 301 |
| Sondaki `/` eksik | `/` ekli | 301 |
| Silinen tur | ilgili kategori | 301 (404 değil) |

## 6.6 Sitemap ve robots

Dil başına ayrı sitemap + indeks. Sitemap içinde hreflang tekrarlanır.

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /*?ref=
Sitemap: https://limyra.com/sitemap.xml
```

---

# 7. WHATSAPP AKIŞI — EN KRİTİK BÖLÜM

## 7.1 Form

Tur sayfasında, **6 alan**:

| Alan | Tip | Zorunlu |
|---|---|---|
| Tur | otomatik dolu, değiştirilebilir | ✓ |
| Tarih | tarih seçici, bugünden önce seçilemez | ✓ |
| Yetişkin | sayı, min 1 | ✓ |
| Çocuk | sayı, min 0 | |
| Çocuk yaşları | metin (çocuk > 0 ise görünür) | |
| Otel / bölge | metin | ✓ |
| Ad soyad | metin | ✓ |
| Not | metin alanı, `maxlength="300"` | |

**Telefon ve e-posta SORULMAZ.** WhatsApp zaten numarayı veriyor,
ekstra alan dönüşümü düşürür.

Formun yanında **canlı önizleme**: gönderilecek mesaj olduğu gibi gösterilir.
Misafir ne göndereceğini görür — güven unsuru.

## 7.2 Mesaj üretimi

```
https://wa.me/{NUMARA}?text={encodeURIComponent(mesaj)}
```

Numara formatı: `905321112233` — `+` yok, boşluk yok, parantez yok.

**Mesaj misafirin seçtiği dilde üretilir.** Tarih o dilin biçiminde yazılır
(`Intl.DateTimeFormat`).

Şablon:
```
{selamlama}

{Tur}: {tur adı}
{Tarih}: {14 Ağustos 2026, Cuma}
{Kişi}: {2 yetişkin, 1 çocuk (yaş: 7)}
{Otel}: {Lara — Delphin Imperial}
{Ad}: {John Smith}

{Not}: {…}

{kapanış}

—
#ANT-4821 · EN · KEK · 2026-08-14 · 2A+1C
```

**Son satır dilden bağımsız, sabit formatlıdır.** Ekip 5 dil bilmiyor —
Lehçe mesaj gelse bile bu satırdan turu, tarihi, kişi sayısını okuyabilmeli.
Bu satır isteğe bağlı değil.

Referans kodu (`ANT-4821`) sayfa yüklendiğinde üretilir, form boyunca sabit kalır.

## 7.3 Lead kaydı — atlanamaz

Butona basıldığı **anda**, WhatsApp açılmadan önce, form verisi kaydedilir:

```js
navigator.sendBeacon('/api/lead', JSON.stringify({...}));
window.open(waLink, '_blank', 'noopener');
```

Misafirlerin bir kısmı WhatsApp açılınca "gönder"e basmadan vazgeçer.
Kayıt yapılmazsa o talepler görünmeden kaybolur.

Hedef: Google Sheets (webhook). CRM değil — 2 kişilik ekip CRM kullanmaz.

Aynı anda analytics olayı: `wa_click` (dil, tur, referans kodu).

## 7.4 Numara yönlendirme

**Tek numara.** Dil başına ayrı numara yok — 2 kişiyle 5 hat yönetilmez.
Yapı yine de `WA_NUMBERS` objesiyle kurulur ki ileride ayrılabilsin.

## 7.5 Yapışkan CTA

- Masaüstü: form sağda yapışkan panel
- Mobil: alta sabit çubuk — fiyat + "WhatsApp'tan sor" butonu
- Liste sayfalarında her kartta küçük WhatsApp butonu (tur adı önceden dolu)

---

# 8. DÖVİZ SEÇİCİ

Fiyatlar veri modelinde **yalnızca € olarak** tutulur.

Üst barda seçici: **€ ₺ $ ₽ zł**

- Kur günde bir kez alınır (`frankfurter.app` veya benzeri ücretsiz kaynak),
  build sırasında JSON'a yazılır. Client tarafında API çağrısı yapılmaz.
- € dışındaki para birimlerinde **"yaklaşık"** ibaresi görünür: `≈ 1.760 ₺`
- Seçim `localStorage` yerine URL parametresi veya çerezde tutulmaz —
  basit bir `sessionStorage` yeterli. Sayfa yenilenince korunur.
- Varsayılan: dile göre. TR→₺, RU→₽, PL→zł, EN/DE→€

**Fiyat asla € olmadan gösterilmez.** Diğer para birimi her zaman € ile birlikte,
ikincil konumda durur. Gerçek fiyat €, gerisi bilgi amaçlı.

---

# 9. NEDEN BİZ — 5 MADDE

Ana sayfada hero'nun altında, ikonlu blok:

1. **Ödeme turda, önden kapora yok**
   Rezervasyonu onaylıyoruz, ödemeyi tur günü yapıyorsunuz.
2. **Her gün 08:00–22:00 buradayız**
   Mesajınıza aynı gün dönüyoruz.
3. **Kendi dilinizde**
   Türkçe, İngilizce, Rusça, Almanca, Lehçe.
4. **Otelden alıyoruz**
   Alış saatiniz bir gün önceden WhatsApp'tan bildirilir.
5. **24 saate kadar ücretsiz iptal**
   Hava kötüyse tur iptal, ücret yok.

> Dakika bazlı taahhüt ("15 dakikada cevap") **yazılmaz** — 2 kişilik ekip
> her zaman tutamaz. Tutulamayan söz, hiç söz vermemekten kötüdür.
>
> **Bağlı gereksinim:** 22:00–08:00 arası WhatsApp Business otomatik karşılama
> mesajı aktif olmalı, 5 dilde: *"Talebiniz alındı, sabah 08:00'de dönüş yapacağız."*
> Bu kurulmazsa saat vaadi tutulmamış olur ve madde tersine çalışır.
> Lansman kontrol listesinde yer alır.

---

# 10. CHATBOT — KALIP CEVAPLI

**AI yok.** Önceden tanımlı soru-cevap ağacı.

Amaç: kolay soruları bot cevaplasın, gerçek talep WhatsApp'a gitsin.
İki kişilik ekibi korur.

## Yapı

Sağ altta küçük düğme. Açılınca 4-6 hazır soru butonu:

- Otelden alıyor musunuz?
- Ödeme nasıl yapılıyor?
- İptal edebilir miyim?
- Çocuk fiyatı var mı?
- Hava kötü olursa ne olur?
- Turlar hangi dilde?

Her cevabın sonunda: **"Başka bir şey sormak isterseniz WhatsApp'tan yazın"** butonu.

## Kurallar

- Serbest metin girişi **yok**. Sadece butonlar.
- Cevaplar CMS'te tutulur, 5 dilde. Kodda sabit yazılmaz.
- WhatsApp butonuyla çakışmaz — mobilde chatbot düğmesi, alt CTA çubuğunun üstünde durur.
- Sayfa açılır açılmaz kendiliğinden açılmaz. Kullanıcı tıklarsa açılır.
- Kapatıldıysa o oturumda tekrar açılmaz.

---

# 11. "BOŞ ALAN SESSİZDİR" KURALI

Veri modelinde alan olması, sitede iz olması anlamına gelmez.

Bir alan boşsa: **hiçbir şey gösterilmez.** Ne yer tutucu, ne "yakında",
ne gri buton, ne açıklama.

Şu an boş duran ve **kesinlikle görünmeyecek** alanlar:

| Alan | Ne zaman dolacak |
|---|---|
| `fiyat_tam`, `kontenjan`, `stok_takibi` | 10. ay, online ödeme geldiğinde |
| `hero_video`, `video` | Drone çekimi yapıldığında |
| `google_place_id` | Google yorumları çekildiğinde |

Sitede **asla** görünmeyecekler:
- "Online ödeme yakında"
- Gri/pasif "Rezervasyon yap" butonu
- "Şimdilik sadece WhatsApp" gibi özür ifadeleri
- Kredi kartı ikonları

Ödemenin olmaması eksiklik değil, **satış argümanıdır**: *Ödeme tur günü.*

---

# 12. PERFORMANS

Birincil kitle mobilde ve 4G'de. Hız pazarlık konusu değil.

| Ölçüt | Hedef |
|---|---|
| LCP (mobil, 4G) | < 2.0 sn |
| CLS | < 0.05 |
| INP | < 200 ms |
| Toplam JS (ana sayfa) | < 40 KB |
| Hero görseli | < 250 KB |
| Kart görseli | < 180 KB |

**Yöntem:**
- Hero görseli `fetchpriority="high"`, geri kalan hepsi `loading="lazy"`
- Her `<img>` üzerinde `width` ve `height` — CLS'i sıfırlar
- Font `preconnect` + `display: swap`
- Üçüncü taraf script yalnızca: GA4, Clarity, Meta Pixel. Başka hiçbiri.
- Analytics scriptleri `defer`

---

# 13. SEO

- Her sayfada benzersiz `<title>` (≤60 krk) ve `<meta description>` (≤155 krk), 5 dilde
- Tur sayfalarında `Product` + `Offer` şeması (JSON-LD), fiyat `lowPrice` olarak
- Kategori/bölge sayfalarında `BreadcrumbList`
- SSS sayfasında `FAQPage`
- Her görselde `alt` metni, 5 dilde ayrı
- Başlık hiyerarşisi bozulmaz: sayfada tek `h1`
- `?ref=` parametreli sayfalar `noindex`

**Yandex:** Rus trafiğinin çoğu Yandex'ten gelecek. Yandex Webmaster kaydı
ve bölge hedefi (Rusya) lansman kontrol listesinde.

---

# 14. ERİŞİLEBİLİRLİK

- Kontrast oranları doğrulandı, değiştirilmez
- Her etkileşimli öğede görünür `:focus-visible` — `outline: 3px solid var(--pirinc)`
- Form etiketleri gerçek `<label>`, placeholder etiket yerine geçmez
- `prefers-reduced-motion: reduce` → tüm geçiş ve animasyonlar kapanır
- Klavyeyle tüm akış tamamlanabilir
- Dil seçicide her dil kendi adıyla yazılır: Türkçe / English / Русский / Deutsch / Polski

---

# 15. YASAK LİSTESİ

Bunların hiçbiri sitede olmayacak:

**Tasarım**
- Ana sayfa slider / karusel
- Otomatik açılan popup
- Giriş interstitial'ı (Google mobilde cezalandırıyor)
- Sayfa boyunca ikiden fazla yazı tipi
- Gülümseyen stok turist fotoğrafı

**Metin**
- Ünlem işareti — bir tane bile
- "Unutulmaz", "eşsiz", "muhteşem", "büyüleyici"
- "Türkiye'nin en iyisi" gibi kanıtlanamaz iddialar
  (Almanya ve Polonya'da reklam mevzuatı açısından da sorunlu)
- Büyük harfle bağırmak

**Karanlık kalıplar**
- "Son 3 yer kaldı!"
- "12 kişi bu turu görüntülüyor"
- Geri sayım sayacı
- Sahte indirim / üstü çizili fiyat

**Teknik**
- `localStorage`/`sessionStorage` dışında tarayıcı depolama
- Gereksiz üçüncü taraf script
- Kiril veya Türkçe karakterli URL

---

# 16. FAZLAR

## Faz 1 — Şimdi
9 tur (görseli olanlar), 5 dil, WhatsApp akışı, döviz seçici, chatbot,
tüm sayfa şablonları, hreflang, sitemap.

Görseli olan turlar: Pamukkale, Kapadokya, Rafting, Akvaryum, Kekova,
Antalya şehir turu, Land of Legends, ATV safari, Adrasan.

Kalan 21 tur CMS'te taslak olarak durur, `aktif: false`.

## Faz 2 — Lansman
Domain, GA4 + Clarity + Pixel, Yandex Webmaster, WhatsApp Business hazır yanıtları,
gerçek partner fiyatları, operatör görselleri.

## Faz 3 — 3. ay
Blog, Google yorumları, kalan 21 tur, kendi fotoğraf çekimleri, hero videosu.

## Faz 4 — 10. ay
Online ödeme (iyzico/PayTR + Stripe), kontenjan takibi, otel referans paneli.

---

# 17. KABUL KRİTERLERİ

Teslimden önce hepsi doğrulanır:

- [ ] Beş dilde tüm sayfalar üretiliyor, hiçbiri çevrilmemiş metin göstermiyor
- [ ] Her sayfada 6 hreflang + canonical var, bağlar karşılıklı
- [ ] Dil değiştirici aynı sayfanın çevirisine gidiyor
- [ ] WhatsApp mesajı seçilen dilde üretiliyor, referans kod satırı var
- [ ] Lead kaydı WhatsApp açılmadan önce gönderiliyor
- [ ] Sezon dışı tur listede görünmüyor
- [ ] Boş alanlar hiçbir iz bırakmıyor
- [ ] Mobil LCP < 2.0 sn
- [ ] Pirinç renk hiçbir butonda kullanılmamış
- [ ] Yeşil yalnızca WhatsApp butonunda
- [ ] Tüm kart görselleri 4:3
- [ ] `prefers-reduced-motion` çalışıyor
- [ ] Klavyeyle form doldurulup gönderilebiliyor
- [ ] Yasak listesindeki hiçbir öğe yok

---

# 18. BELİRSİZLİK

Bu belgede yazmayan bir karar gerekirse: **uydurma.**
Sor, ya da varsayımını açıkça belirterek en sade çözümü seç.

Özellikle şunlar bu belgede kasıtlı olarak yok ve eklenmeyecek:
blog, yorum sistemi, üyelik, sepet, favoriler, karşılaştırma, bülten.
