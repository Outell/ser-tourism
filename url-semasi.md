# URL Şeması — 5 Dil

Sonradan değiştirmesi en pahalı karar. Bir kez kurulur, dokunulmaz.

---

## 1. Temel yapı

Dil kodu her zaman ilk klasör. İstisna yok, Türkçe dahil.

```
/tr/...
/en/...
/ru/...
/de/...
/pl/...
```

**Türkçe'yi köke koymuyoruz.** `/` yerine `/tr/`.
Sebep: kök dilsiz kalırsa Google hangi dilin varsayılan olduğunu karıştırır ve
`hreflang` zinciri kırılır. Beş dil eşit seviyede dursun.

`limyra.com` adresine giren kişi tarayıcı diline göre yönlendirilir,
bulunamazsa `/en/` açılır.

---

## 2. Sayfa tiplerinin yolları

Klasör adları da çevrilir. Rus misafir Yandex'te Rusça arıyor, URL'de Rusça
kelime geçmesi sıralamayı doğrudan etkiliyor.

| Sayfa | TR | EN | RU | DE | PL |
|---|---|---|---|---|---|
| Ana | `/tr/` | `/en/` | `/ru/` | `/de/` | `/pl/` |
| Tüm turlar | `/tr/turlar/` | `/en/tours/` | `/ru/tury/` | `/de/touren/` | `/pl/wycieczki/` |
| Kategori | `/tr/turlar/tekne/` | `/en/tours/boat/` | `/ru/tury/morskie/` | `/de/touren/boot/` | `/pl/wycieczki/rejsy/` |
| Tur | `/tr/turlar/kekova-batik-sehir-tekne-turu/` | `/en/tours/kekova-sunken-city-boat-trip/` | `/ru/tury/kekova-zatonuvshiy-gorod/` | `/de/touren/kekova-versunkene-stadt/` | `/pl/wycieczki/kekova-zatopione-miasto/` |
| Şehir | `/tr/sehirler/kapadokya/` | `/en/destinations/cappadocia/` | `/ru/napravleniya/kappadokiya/` | `/de/reiseziele/kappadokien/` | `/pl/kierunki/kapadocja/` |
| Bölge | `/tr/bolgeler/kemer/` | `/en/from/kemer/` | `/ru/iz/kemer/` | `/de/ab/kemer/` | `/pl/z/kemer/` |
| Hakkımızda | `/tr/hakkimizda/` | `/en/about/` | `/ru/o-nas/` | `/de/ueber-uns/` | `/pl/o-nas/` |
| İptal | `/tr/iptal-politikasi/` | `/en/cancellation/` | `/ru/otmena/` | `/de/stornierung/` | `/pl/anulowanie/` |
| SSS | `/tr/sss/` | `/en/faq/` | `/ru/voprosy/` | `/de/faq/` | `/pl/faq/` |
| İletişim | `/tr/iletisim/` | `/en/contact/` | `/ru/kontakty/` | `/de/kontakt/` | `/pl/kontakt/` |
| Gizlilik | `/tr/gizlilik/` | `/en/privacy/` | `/ru/konfidencialnost/` | `/de/datenschutz/` | `/pl/prywatnosc/` |

**Bölge sayfası yolu bilinçli olarak "from / ab / z".**
Misafir "Ausflüge ab Belek" diye arıyor, "Regionen Belek" diye değil.

---

## 3. Slug kuralları

**Sadece ASCII.** Türkçe ve Lehçe karakterler dönüştürülür:

```
ğ→g  ü→u  ş→s  ı→i  ö→o  ç→c  İ→i
ł→l  ż→z  ę→e  ą→a  ś→s  ć→c  ń→n
```

**Kiril harf çevirisi (transliterasyon):**
```
Кекова → kekova        Каппадокия → kappadokiya
Памуккале → pamukkale  затонувший → zatonuvshiy
```

Ruslar Kiril URL'yi kopyalayıp yapıştırdığında adres bozuk `%D0%9A%D0%B5`
diline dönüşüyor, WhatsApp'ta paylaşılamıyor. Latin harfle yaz.

**Diğer kurallar:**
- Küçük harf, kelime arası tire
- Sonda tire yok, çift tire yok
- Sonunda `/` var (tutarlı olsun, ikisi birden olmasın)
- Maksimum 60 karakter
- Tarih, sayı, ID yok

---

## 4. hreflang — en kritik kısım

Her sayfanın `<head>` bölümünde **altı satır** olacak.
Beş dil + `x-default`. Sayfa kendini de listeler.

```html
<link rel="alternate" hreflang="tr" href="https://limyra.com/tr/turlar/kekova-batik-sehir-tekne-turu/">
<link rel="alternate" hreflang="en" href="https://limyra.com/en/tours/kekova-sunken-city-boat-trip/">
<link rel="alternate" hreflang="ru" href="https://limyra.com/ru/tury/kekova-zatonuvshiy-gorod/">
<link rel="alternate" hreflang="de" href="https://limyra.com/de/touren/kekova-versunkene-stadt/">
<link rel="alternate" hreflang="pl" href="https://limyra.com/pl/wycieczki/kekova-zatopione-miasto/">
<link rel="alternate" hreflang="x-default" href="https://limyra.com/en/tours/kekova-sunken-city-boat-trip/">
```

**Ayrıca her sayfada kendi canonical'ı:**
```html
<link rel="canonical" href="https://limyra.com/tr/turlar/kekova-batik-sehir-tekne-turu/">
```

### Neden bu kadar önemli

`hreflang` yoksa Google beş sayfayı **birbirinin kopyası** sanır.
Birini seçer, dördünü sıralamadan düşürür. Beş dilde çalışıp tek dilde
görünürsün — yani emeğin %80'i çöp olur.

### Kırılma noktaları

- **Karşılıklı olmak zorunda.** TR sayfası RU'yu gösteriyorsa, RU sayfası da TR'yi göstermeli. Tek yönlü bağ Google tarafından yok sayılır.
- **Tam URL yaz.** `/en/tours/...` değil, `https://limyra.com/en/tours/...`
- **Dil kodu doğru olsun.** `tr`, `en`, `ru`, `de`, `pl`. Ülke kodu ekleme (`en-GB` gibi) — dil hedefliyorsun, ülke değil.
- **Çevirisi olmayan sayfayı listeleme.** Bir tur sadece 3 dilde yayındaysa hreflang'de 3 satır olur.

---

## 5. Dil değiştirici davranışı

Misafir Rusça Kekova sayfasındayken Almanca'ya basarsa:

```
✅ /de/touren/kekova-versunkene-stadt/     → aynı turun Almancası
❌ /de/                                     → ana sayfaya atmak
```

Ana sayfaya atmak en sık yapılan hata ve dönüşümü öldürüyor.
Misafir aradığını kaybediyor, geri dönmüyor.

**O sayfanın çevirisi yoksa:** o dilde en yakın kategori sayfasına gönder,
üstte küçük bir not düş: "Bu tur şu an Almanca olarak mevcut değil."

---

## 6. Yönlendirmeler

| Nereden | Nereye | Kod |
|---|---|---|
| `limyra.com` | tarayıcı diline göre, yoksa `/en/` | 302 |
| `www.limyra.com` | `limyra.com` | 301 |
| `http://` | `https://` | 301 |
| Sondaki `/` eksikse | `/` ekli hali | 301 |
| Silinen tur | ilgili kategori sayfası | 301 |

**Silinen tur için 404 verme, 301 ver.** Kategoriye yönlendir.
Otelin dağıttığı eski broşürdeki link ölü kalmasın.

---

## 7. Sitemap

Her dil için ayrı sitemap, hepsi bir indeksten bağlanır:

```
/sitemap.xml            → indeks
/sitemap-tr.xml
/sitemap-en.xml
/sitemap-ru.xml
/sitemap-de.xml
/sitemap-pl.xml
```

Sitemap içinde de hreflang tekrarlanır. Astro bunu otomatik üretiyor.

---

## 8. Robots

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /*?ref=

Sitemap: https://limyra.com/sitemap.xml
```

`?ref=delphin` gibi otel takip parametreleri indekslenmesin — yoksa Google
aynı sayfayı defalarca farklı sanır.

---

## 9. Yandex için ek not

Rus trafiği Google'dan çok Yandex'ten gelecek.
Yandex `hreflang`'i destekliyor ama ayrıca **Yandex Webmaster'a** kayıt olup
bölge hedefini Rusya seçmek gerekiyor. Google Search Console'un Yandex karşılığı.
Bu adım atlanırsa Rusça sayfalar Yandex'te çok geç indekslenir.

---

## Özet kontrol listesi

- [ ] Türkçe dahil her dil kendi klasöründe
- [ ] Klasör adları da çevrildi
- [ ] Slug'lar ASCII, kiril transliterasyonlu
- [ ] Her sayfada 6 satır hreflang + canonical
- [ ] hreflang bağları karşılıklı
- [ ] Dil değiştirici aynı sayfaya gidiyor
- [ ] Dil başına sitemap
- [ ] `?ref=` parametreleri indekslenmiyor
- [ ] Yandex Webmaster kaydı
