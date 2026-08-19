# BURADAN BAŞLA

## 1. Klasörü Claude Desktop'ta aç

Claude Desktop → **Code** sekmesi → bu `limyra` klasörünü seç → erişim izni ver.

## 2. Aşağıdaki komutu kopyala, yapıştır

```
MASTER-PROMPT.md dosyasını oku. Ekindeki diğer dosyalar da referans:
veri-modeli.md, url-semasi.md, tasarim-tokenlari.css,
30-tur-katalogu-fiyatlar.md, marka-isim-slogan.md

Bu şartnameye göre Astro projesini kur.

Önce sadece iskeleti kur:
- Proje yapısı
- 5 dilli yönlendirme ve hreflang
- Tasarım tokenları
- 4 sayfa şablonu (ana sayfa, liste, tur, düz metin)
- WhatsApp form bileşeni

İçerik metinleri henüz yok, yer tutucu kullan.
Görseller gorseller/ klasöründe, hero görseli kök dizinde.
Sanity CMS'i şimdi kurma — veriyi geçici olarak src/data/turlar.json'dan oku.

Adım adım ilerle, her aşamada ne yaptığını anlat.
Şartnamede olmayan bir karar gerekirse bana sor, uydurma.
```

## 3. Bekle

Claude dosyaları okuyup kurmaya başlayacak.
Bazı adımlarda izin isteyecek — onayla.

## 4. Siteyi gör

Kurulum bitince:

```
npm run dev
```

Tarayıcıda `localhost:4321` açılacak. Site orada.

---

# Klasörde ne var

| Dosya | Ne işe yarar |
|---|---|
| `MASTER-PROMPT.md` | **Ana şartname.** Sitenin tam tarifi |
| `veri-modeli.md` | Bir turda hangi alanlar var |
| `url-semasi.md` | 5 dilli adres yapısı ve hreflang |
| `tasarim-tokenlari.css` | Renkler, fontlar, ölçüler |
| `30-tur-katalogu-fiyatlar.md` | Tur listesi ve fiyatlar |
| `marka-isim-slogan.md` | Marka, slogan, "neden biz" maddeleri |
| `gorsel-tedarik-rehberi.md` | Fotoğraf kuralları (referans) |
| `kurulum-rehberi.md` | Bu sürecin uzun anlatımı |
| `hero-antalya-sunset-*.webp` | Ana sayfa fotoğrafı |
| `gorseller/` | 9 turun görselleri, klasörlenmiş |

---

# Görseli hazır olan 9 tur

Pamukkale · Kapadokya · Köprülü Kanyon Rafting · Antalya Akvaryum ·
Kekova · Antalya Şehir Turu · Land of Legends · ATV Safari · Adrasan

Kalan 21 tur katalogda var ama `aktif: false` olarak duracak.

---

# Sonraki adımlar (şimdi değil)

1. İskeleti gör, düzeltmeleri söyle
2. 9 turun metnini 5 dilde yaz
3. Sabit sayfa metinleri (hakkımızda, iptal, SSS, iletişim)
4. Sanity CMS kurulumu
5. Google Sheets lead kaydı
6. Domain, analytics, lansman
