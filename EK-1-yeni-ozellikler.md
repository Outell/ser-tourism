# EK-1 — Yeni Özellikler

> MASTER-PROMPT.md'ye ektir. Oradaki tüm kurallar burada da geçerlidir:
> yasak listesi, palet kuralları, "boş alan sessizdir", performans hedefleri.

---

# ÖNCELİK SIRASI

| | Özellik | Emek | Ne zaman |
|---|---|---|---|
| 1 | Dil seçici + bayrak | çok az | Faz 1 |
| 2 | Hava durumu | az | Faz 1 |
| 3 | Antalya mesafe haritası | orta | Faz 1 |
| 4 | Tatil planlayıcı | orta | Faz 1 |
| 5 | Pratik bilgiler sayfası | az metin | Faz 1 |
| 6 | Ücretsiz yapılacaklar | az metin | Faz 1 |
| 7 | Aylık rehber (12 sayfa) | **ağır metin** | Faz 2 |
| 8 | Hazır tatil planları (3 sayfa) | **ağır metin** | Faz 2 |

7 ve 8 birlikte 75 yeni metin (15 sayfa × 5 dil) demek.
Şablonları Faz 1'de kurulur, sayfalar Faz 2'de doldurulur.
Boş kalan sayfa yayınlanmaz — "boş alan sessizdir" kuralı burada da geçerli.

---

# 1. DİL SEÇİCİ — BAYRAK + AD

Üst barda, açılır liste:

```
🇹🇷 Türkçe    🇬🇧 English    🇷🇺 Русский    🇩🇪 Deutsch    🇵🇱 Polski
```

**Kurallar:**
- Bayrak **tek başına kullanılmaz**, her zaman dil adıyla birlikte.
  Bayrak ülkeyi gösterir, dili değil.
- Dil adı **kendi dilinde** yazılır: "Rusça" değil "Русский".
- Kapalı haldeyken seçili dilin bayrağı + kodu görünür: `🇩🇪 DE`
- Bayraklar Unicode emoji olarak yazılır. Görsel dosya kullanma —
  ek istek, ek yük.
- `aria-label` her seçenekte, ekran okuyucu için.

**Not:** İngilizce için 🇬🇧 seçildi. Rusça için 🇷🇺 kullanılıyor ancak
Rusça konuşan misafirlerin önemli kısmı başka ülkelerden geliyor —
bu yüzden dil adının yanında durması özellikle önemli.

---

# 2. HAVA DURUMU

Ana sayfada, "Neden biz" bloğunun altında, tek satırlık kompakt kutu.

**Veri kaynağı:** Open-Meteo (ücretsiz, API anahtarı gerektirmez)
Antalya koordinatları: `36.8969, 30.7133`

**Gösterilecek:** bugün + 3 gün. İkon, en yüksek/en düşük derece.

**Kurallar:**
- İstek client tarafında, sayfa yüklendikten **sonra** yapılır.
  LCP'yi etkilememeli.
- Yüklenene kadar yer tutucu kutu durur — CLS oluşmaz, `min-height` sabit.
- İstek başarısız olursa **kutu tamamen gizlenir.** Hata mesajı gösterme.
- Derece birimi dile göre: hepsinde °C.
- Kutunun altında tek satır: *"Turlarımızın çoğu her hava koşulunda yapılır.
  İptal gerekirse ücret alınmaz."* → iptal politikası sayfasına bağlanır.

Bu son satır önemli: hava durumu kaygı yaratabilir, hemen yanında
güvence vermek gerekiyor.

---

# 3. ANTALYA MESAFE HARİTASI

Ana sayfada, öne çıkan turların altında.

**Bu bir Google Haritası DEĞİLDİR.** Elle çizilmiş, stilize SVG.
Gerçek harita: para, yavaşlık, çerez izni sorunu. Hiçbiri gerekmiyor.

**Yapı:** Merkezde Antalya. Çevresinde destinasyonlar, aralarında ince
pirinç çizgiler. Her destinasyonda ad + araç süresi.

```
                 Kapadokya
                    8 sa
                     |
   Pamukkale ---- ANTALYA ---- Alanya
      3 sa            |          2 sa
                      |
   Kekova ---------- + ---------- Side
    2,5 sa                        1 sa
```

**Kurallar:**
- Saf SVG, JavaScript yok
- Her düğüm tıklanabilir → o turun sayfasına gider
- Süreler `sure_saat` alanından değil, elle girilir (ulaşım süresi ≠ tur süresi)
- Renk: çizgiler `--pirinc` %40 opaklık, düğümler `--gece`,
  merkez `--murekkep` dolgulu
- Mobilde dikey listeye dönüşür — SVG'yi küçültme, düzeni değiştir
- Destinasyon adları 5 dilde çevrilir
- `role="img"` + `<title>` + `<desc>` erişilebilirlik için

**Neden bu kadar değerli:** misafirin kafasındaki ilk soru "ne kadar uzak".
Rakiplerin hiçbiri bunu net göstermiyor.

---

# 4. TATİL PLANLAYICI

Ana sayfada ayrı bölüm + `/tr/plan/` adresinde kendi sayfası.

## Akış — 3 soru

**Soru 1: Kaç gününüz var?**
`2-3 gün` · `4-5 gün` · `6-7 gün` · `Bir haftadan fazla`

**Soru 2: Kimlerle geldiniz?**
`Çift` · `Çocuklu aile` · `Arkadaş grubu` · `Yalnız`

**Soru 3: Ne tarz seversiniz?** (çoklu seçim)
`Deniz ve tekne` · `Tarih ve kültür` · `Macera ve adrenalin` · `Rahatlama`

## Sonuç

3 tur önerisi, kart olarak. Altında tek buton:

> **Bu planı WhatsApp'tan sor**

Buton, önerilen 3 turu içeren hazır mesaj üretir:

```
Merhaba, planlayıcıdan şu turlar önerildi:

1. Kekova batık şehir tekne turu
2. Pamukkale & Hierapolis
3. Köprülü Kanyon rafting

5 gün kalacağız, 2 yetişkin 1 çocuk.
Uygunluk ve fiyat için bilgi alabilir miyim?

—
#ANT-4821 · TR · PLAN · 5gun · cift
```

**Kurallar:**
- Tamamen client tarafında, sunucu yok
- Eşleştirme mantığı basit puanlama: her turda `etiketler` alanı
  (`deniz`, `kultur`, `macera`, `rahatlama`, `cocuk_dostu`) — seçimlerle
  eşleşen tur puan alır, en yüksek 3 gösterilir
- **Veri modeline yeni alan:** `etiketler` (çoklu seçim, TEK — çevrilmez)
- Sonuç ekranında "yeniden başla" bağlantısı
- Adımlar arası geçişte URL değişmez, `noindex` gerekmez
- Sonuç boşsa (hiç eşleşme yok) en popüler 3 tur gösterilir

---

# 5. PRATİK BİLGİLER SAYFASI

`/tr/pratik-bilgiler/` · `/en/practical-info/` · `/ru/poleznaya-informaciya/` ·
`/de/praktische-infos/` · `/pl/informacje-praktyczne/`

**Bu sayfa satış yapmaz. Güven kurar.**
Hiçbir rakip yapmıyor, çünkü doğrudan para getirmiyor.
Tam da bu yüzden hatırlanıyorsun.

## İçerik başlıkları

| Başlık | Ne yazılacak |
|---|---|
| Para ve ödeme | Hangi para birimi nerede geçer, kart kabul durumu, döviz bozdurma |
| Bahşiş | Restoran, taksi, rehber — ne kadar beklenir |
| Ulaşım | Tramvay, dolmuş, taksi yaklaşık ücretleri, uygulama var mı |
| Sağlık | Eczane bulma, hastane, sigorta durumu |
| **Acil numaralar** | ⚠️ Yayından önce mutlaka doğrula |
| Güneş ve deniz | UV, en sıcak saatler, deniz suyu sıcaklığı |
| Kültür | Cami ziyaretinde kıyafet, selamlama, fotoğraf çekme adabı |
| Alışveriş | Pazarlık kültürü, fiş saklama, KDV iadesi |

> **⚠️ DOĞRULAMA GEREKLİ:** Acil numaralar, taksi tarifeleri ve KDV iadesi
> kuralları değişebilir. Bu sayfanın yayınlanmadan önce güncel resmî
> kaynaklardan doğrulanması zorunludur. Sayfanın altına son güncelleme
> tarihi yazılır.

**Sayfa sonunda:** WhatsApp bağlantısı — *"Başka bir sorunuz mu var? Yazın."*

---

# 6. ÜCRETSİZ YAPILACAKLAR

`/tr/ucretsiz/` · `/en/free-things-to-do/` · vb.

10-12 madde. Her birinde: ad, kısa açıklama, nasıl gidilir, ne kadar sürer.

Örnek maddeler: Kaleiçi yürüyüşü, Düden Şelalesi alt kısmı, Konyaaltı sahili,
Tünektepe manzarası, Karaalioğlu Parkı, Cuma Pazarı, Hıdırlık Kulesi,
Antalya Müzesi bahçesi, Lara sahil yürüyüşü, Mermerli plajı manzarası.

**Kural:** hiçbir maddeye tur satmaya çalışma. Sayfa sonunda tek satır:
*"Şehir dışına çıkmak isterseniz turlarımıza bakın."*

Bu sayfanın işi güven kurmak. Satış baskısı koyarsan işlevini kaybeder.

---

# 7. AYLIK REHBER — FAZ 2

`/tr/aylik/agustos/` · `/en/monthly/august/` · vb.
12 sayfa × 5 dil = 60 sayfa.

**Yarı otomatik:** sayfanın tur listesi `sezon_baslangic`/`sezon_bitis`
alanlarından türetilir. Elle yazılacak tek şey her ay için 3-4 cümlelik giriş.

**Her sayfada:**
- O ayın hava durumu ortalaması (sabit veri, elle girilir)
- Deniz suyu sıcaklığı
- Kalabalık durumu (yoğun / orta / sakin)
- O ay aktif olan turlar (otomatik)
- 2-3 cümlelik tavsiye

**Faz 1'de yapılacak:** şablon kurulur, sayfalar `aktif: false` durur.
**Faz 2'de yapılacak:** 60 giriş metni yazılır, sayfalar açılır.

---

# 8. HAZIR TATİL PLANLARI — FAZ 2

`/tr/planlar/3-gun/` · `/tr/planlar/5-gun/` · `/tr/planlar/7-gun/`
3 sayfa × 5 dil = 15 sayfa.

Gün gün program. Her günde: sabah / öğleden sonra / akşam.
İçinde senin turların ve ücretsiz aktiviteler karışık.

Her sayfanın sonunda planlayıcıdaki gibi **toplu WhatsApp butonu** —
plandaki tüm turları içeren hazır mesaj.

**Faz 1'de:** şablon kurulur.
**Faz 2'de:** içerik yazılır.

---

# VERİ MODELİNE EKLENENLER

| Alan | Tip | Çeviri | Nerede kullanılır |
|---|---|---|---|
| `etiketler` | çoklu seçim | TEK | Planlayıcı eşleştirmesi |
| `ulasim_suresi_saat` | sayı | TEK | Mesafe haritası |
| `haritada_goster` | evet/hayır | TEK | Mesafe haritasında düğüm olsun mu |

`etiketler` seçenekleri: `deniz`, `kultur`, `macera`, `rahatlama`,
`cocuk_dostu`, `tam_gun`, `yarim_gun`, `konaklamali`

---

# GÜNCEL SAYFA SAYISI

| Şablon | Faz 1 | Faz 2 | Toplam |
|---|---|---|---|
| Ana sayfa | 1 | | 1 |
| Liste (turlar, kategori, şehir, bölge) | 19 | | 19 |
| Tur | 30 | | 30 |
| Düz metin | 6 | | 6 |
| **Pratik bilgiler** | **1** | | 1 |
| **Ücretsiz yapılacaklar** | **1** | | 1 |
| **Planlayıcı** | **1** | | 1 |
| **Aylık rehber** | | **12** | 12 |
| **Hazır planlar** | | **3** | 3 |
| **Toplam** | **59** | **15** | **74** |

5 dilde: **370 sayfa.** Hepsi 6 şablondan üretilir.

---

# MENÜ — GÜNCELLENDİ

Menü hâlâ sade kalmalı. Yeni sayfalar menüyü şişirmeyecek:

**Üst menü:** Turlar · Plan yap · 🇹🇷 TR · €

**Footer'da gruplu:**
- *Turlar:* kategoriler, bölgeler, şehirler
- *Antalya rehberi:* pratik bilgiler, ücretsiz yapılacaklar, aylık rehber, hazır planlar
- *Biz:* hakkımızda, iletişim, iptal politikası, SSS, gizlilik

Ana sayfada ayrıca "Antalya rehberi" diye bir blok — 4 karta bağlantı.

---

# PERFORMANS UYARISI

Yeni özellikler hız bütçesini aşmamalı. §12'deki hedefler değişmedi.

- Hava durumu: sayfa yüklendikten sonra, `defer`
- Mesafe haritası: saf SVG, sıfır JS
- Planlayıcı: yalnızca `/plan/` sayfasında yüklenir, ana sayfada
  bölüm görünür ama JS tıklamaya kadar yüklenmez
- Toplam JS bütçesi ana sayfada hâlâ **< 40 KB**

Aşılırsa özellik değil, uygulama biçimi değişir.
