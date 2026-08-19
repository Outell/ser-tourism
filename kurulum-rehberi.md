# Kurulum — Adım Adım

Yazılım bilgisi gerektirmeyen yoldan. Terminal kullanmayacaksın.

---

## Önce: neye ihtiyacın var

| Gereken | Neden | Nereden |
|---|---|---|
| **Claude Pro veya Max aboneliği** | Claude Code ücretsiz planda çalışmıyor | claude.ai |
| **Claude Desktop uygulaması** | Terminal yerine grafik arayüz | aşağıda |
| **Node.js** | Astro'nun siteyi derlemesi için | nodejs.org |
| **Hosting** | Sende zaten var | — |

Toplam kurulum: yaklaşık 20 dakika.

---

## Adım 1 — Claude Desktop'ı kur

Claude Code'un masaüstü sürümü. Terminal komutu yazmadan kullanabiliyorsun.

**Windows:** https://claude.com/download
**macOS:** https://claude.ai/api/desktop/darwin/universal/dmg/latest/redirect

İndir, kur, Claude hesabınla giriş yap.

> Ücretsiz planda çalışmaz. Pro, Max, Team veya Enterprise gerekiyor.

---

## Adım 2 — Node.js kur

Astro'nun siteyi HTML dosyalarına dönüştürmesi için gerekli.
Bir kere kurulur, bir daha dokunmazsın.

1. https://nodejs.org adresine git
2. **LTS** yazan yeşil butona bas (diğerini alma)
3. İndir, kur, hep "İleri" de
4. Bilgisayarı yeniden başlat

---

## Adım 3 — Proje klasörü aç

Masaüstünde `limyra` adında bir klasör oluştur.

İçine şu dosyaları koy:

```
limyra/
├── MASTER-PROMPT.md
├── veri-modeli.md
├── url-semasi.md
├── tasarim-tokenlari.css
├── 30-tur-katalogu-fiyatlar.md
├── marka-isim-slogan.md
└── gorseller/          ← zip'ten çıkardığın klasör
    ├── pamukkale-hierapolis-turu/
    ├── kapadokya-2-gun-turu/
    └── ...
```

Hero fotoğrafını da `gorseller/` içine at:
`hero-antalya-sunset-2400.webp` ve `hero-antalya-sunset-mobil.webp`

---

## Adım 4 — Claude Desktop'ta projeyi aç

1. Claude Desktop'ı aç
2. **Code** sekmesine geç
3. `limyra` klasörünü seç
4. Klasöre erişim izni isteyecek, onayla

Artık Claude senin klasöründeki dosyaları görebiliyor.

---

## Adım 5 — İlk komut

Sohbet kutusuna şunu yaz:

```
MASTER-PROMPT.md dosyasını oku. Ekindeki diğer dosyalar da referans:
veri-modeli.md, url-semasi.md, tasarim-tokenlari.css,
30-tur-katalogu-fiyatlar.md, marka-isim-slogan.md

Bu şartnameye göre Astro + Sanity projesini kur.

Önce sadece iskeleti kur:
- Proje yapısı
- 5 dilli yönlendirme ve hreflang
- Tasarım tokenları
- 4 sayfa şablonu (ana sayfa, liste, tur, düz metin)
- WhatsApp form bileşeni

İçerik metinleri henüz yok, yer tutucu kullan.
Görseller gorseller/ klasöründe.

Adım adım ilerle, her aşamada ne yaptığını anlat.
Şartnamede olmayan bir karar gerekirse bana sor, uydurma.
```

Sonra bekle. Claude dosyaları okuyup kurmaya başlayacak.
Bazı adımlarda "şunu çalıştırayım mı" diye izin isteyecek — onayla.

---

## Adım 6 — Siteyi görmek

Kurulum bitince Claude sana şuna benzer bir komut verecek:

```
npm run dev
```

Çalıştırınca tarayıcında bir adres açılacak (`localhost:4321` gibi).
Site orada, senin bilgisayarında çalışıyor. İnternette değil, sadece sende.

**İlk gördüğünde ne bekle:**
- Renkler ve fontlar doğru
- Hero fotoğrafı yerinde
- Tur kartları duruyor ama içleri yer tutucu metin
- Dil değiştirici çalışıyor
- WhatsApp formu çalışıyor

Metinler henüz yok. O normal — sırası sonra.

---

## Adım 7 — İstediğin düzeltmeler

Beğenmediğin bir şey varsa doğrudan söyle:

```
Hero'daki başlık çok küçük, biraz büyüt.
Tur kartlarının arası çok dar.
Fiyat daha belirgin olsun.
```

Claude düzeltir, tarayıcıda anında görürsün.

---

## Adım 8 — Hosting'e yükleme

Site hazır olunca:

```
npm run build
```

`dist/` diye bir klasör oluşacak. İçindeki her şey saf HTML/CSS/JS.

Onu hosting'ine FTP ile atıyorsun. Bitti.
PHP yok, veritabanı yok, sunucu ayarı yok.

---

## Takılırsan

**"claude komutu bulunamadı"** → Desktop uygulamasını kullanıyorsan bu hatayı
zaten görmezsin. Görüyorsan terminal yolundasın, Desktop'a geç.

**"node bulunamadı"** → Node.js kurulumundan sonra bilgisayarı yeniden başlatmayı unuttun.

**Claude bir şey soruyor, anlamadın** → Soruyu bana kopyala, çevireyim.

**Bir şey bozuldu** → Claude'a "geri al" de. Yaptığı değişiklikleri geri alabiliyor.

---

## Sıra

```
Adım 1-4   →  Kurulum, ~20 dakika
Adım 5-6   →  İskelet çıkıyor, ~1 saat
Adım 7     →  Düzeltmeler, birkaç gün
             ─────────────────────────
             Sonra: 9 turun metni, 5 dil
             Sonra: domain, analytics, lansman
```

---

## Bu aşamada yapmayacakların

Kafanı karıştırmasın diye şimdi girmiyoruz:

- Sanity CMS panelini kurmak (iskelet çıktıktan sonra)
- Google Sheets bağlantısı (lansmandan önce)
- Domain (lansmandan önce)
- Analytics (lansmandan önce)

Önce siteyi gör, sonra bunları tek tek ekleriz.
