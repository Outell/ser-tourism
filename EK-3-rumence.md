# EK-3 — Altıncı Dil: Rumence

> MASTER-PROMPT, EK-1 ve EK-2'ye ektir. Oradaki tüm kurallar geçerli.
>
> Dil kodu: **`ro`** · Bayrak: 🇷🇴 · Kendi adı: **Română**
>
> Font kontrolü yapıldı: Spectral ve Golos Text Rumence destekliyor.
> ș ț ă î â karakterleri sorunsuz.

---

# 1 · NEDEN RUMENCE

Antalya'ya Romanya'dan ciddi charter trafiği var ve rakiplerin
neredeyse hiçbiri Rumence hizmet vermiyor. Lehçe ile birlikte
iki niş dil, ayrışmanın en ucuz yolu.

**Ton profili Lehçe'ye yakın:** fiyat ve kapsam şeffaflığı önemli,
"ne kadarına neler dahil" mantığı öne çıkıyor. Metinler buna göre
uyarlandı — Türkçe'de olmayan "Ce include prețul" tipi bölümler var.

---

# 2 · DİL LİSTESİ

Her yerde `ro` eklenecek:

```ts
export const diller = ['tr', 'en', 'ru', 'de', 'pl', 'ro'] as const;
```

Sıralama: **TR · EN · RU · DE · PL · RO**
Dil seçicide bu sırayla görünür.

**Dil seçici görünümü:**

```
🇹🇷 Türkçe   🇬🇧 English   🇷🇺 Русский
🇩🇪 Deutsch   🇵🇱 Polski   🇷🇴 Română
```

EK-1 §1 kuralı geçerli: bayrak tek başına kullanılmaz, dil adı
kendi dilinde yazılır.

---

# 3 · URL YOLLARI

| Tip | RO |
|---|---|
| Turlar | `tururi` |
| Şehirler | `destinatii` |
| Bölgeler | `din` |
| Hakkımızda | `despre-noi` |
| İptal politikası | `anulare` |
| SSS | `intrebari-frecvente` |
| İletişim | `contact` |
| Pratik bilgiler | `informatii-practice` |
| Ücretsiz yapılacaklar | `gratuit-in-antalya` |
| Gizlilik | `confidentialitate` |
| Plan | `plan` |

Örnek:
```
/ro/tururi/kekova-orasul-scufundat/
/ro/din/kemer/
/ro/informatii-practice/
```

**Bölge yolu `din`** — Rumen misafir "excursii din Kemer" diye arıyor.
EK-1'deki "from / ab / z" mantığının aynısı.

## Slug kuralları

ASCII zorunlu. Rumence karakterler dönüştürülür:

```
ș → s    ț → t    ă → a    î → i    â → a
Ș → s    Ț → t    Ă → a    Î → i    Â → a
```

Örnek: `Kekova, orașul scufundat` → `kekova-orasul-scufundat`

## Tur slug'ları

| Tur | RO slug |
|---|---|
| Pamukkale | `pamukkale-hierapolis` |
| Kapadokya | `cappadocia-2-zile` |
| Rafting | `rafting-canionul-koprulu` |
| Akvaryum | `acvariul-din-antalya` |
| Kekova | `kekova-orasul-scufundat` |
| Şehir turu | `tur-de-oras-antalya` |
| Land of Legends | `land-of-legends` |
| ATV | `safari-cu-atv` |
| Adrasan | `adrasan-suluada` |

---

# 4 · HREFLANG

Her sayfada **7 satır** olacak (6 dil + x-default):

```html
<link rel="alternate" hreflang="tr" href="https://limyra.com/tr/...">
<link rel="alternate" hreflang="en" href="https://limyra.com/en/...">
<link rel="alternate" hreflang="ru" href="https://limyra.com/ru/...">
<link rel="alternate" hreflang="de" href="https://limyra.com/de/...">
<link rel="alternate" hreflang="pl" href="https://limyra.com/pl/...">
<link rel="alternate" hreflang="ro" href="https://limyra.com/ro/...">
<link rel="alternate" hreflang="x-default" href="https://limyra.com/en/...">
```

**Karşılıklılık şart.** RO sayfası diğer 5'i gösteriyorsa, o 5'i de
RO'yu göstermeli. Tek yönlü bağı Google yok sayar.

Sitemap: `/sitemap-ro.xml` eklenir, indekse bağlanır.

---

# 5 · VERİ MODELİ

Çevrilen tüm alanlara `ro` anahtarı eklenir:

```ts
baslik: { tr:'…', en:'…', ru:'…', de:'…', pl:'…', ro:'…' }
```

Etkilenen alanlar (veri-modeli.md'deki **5 DİL** işaretliler):
`baslik` · `ozet` · `aciklama` · `program` · `dahil_olanlar` ·
`dahil_olmayanlar` · `onemli_notlar` · `saglik_uyarisi` ·
`gerekli_esyalar` · `bulusma_noktasi` · `fiyat_notu` · `iptal_metni` ·
`alt_metin` · `slug` · `meta_baslik` · `meta_aciklama`

Ayrıca: kategori adları, bölge adları, şehir adları, destinasyon adları
(`destinasyonlar.ts` içindeki `ad` ve `slug`).

**TEK işaretli alanlar değişmez** — fiyat, süre, min/max kişi,
koordinat, sezon. Onlar dilden bağımsız.

---

# 6 · ARAYÜZ ÇEVİRİLERİ

`ceviri.ts` dosyasındaki tüm anahtarlar Rumence doldurulur.
Sık kullanılanlar:

| Anahtar | RO |
|---|---|
| `kisaltma.saat` | ore |
| `kisaltma.tur` | tururi |
| `kisaltma.gun` | zile |
| `fiyattan_baslayan` | de la |
| `kisi_basi` | de persoană |
| `transfer_dahil` | Preluare de la hotel inclusă |
| `dahil_olanlar` | Inclus în preț |
| `dahil_olmayanlar` | Se plătește separat |
| `onemli_notlar` | Bine de știut |
| `yaninza_alin` | Luați cu dumneavoastră |
| `program` | Program |
| `benzer_turlar` | Excursii similare |
| `wa_buton` | Întreabă pe WhatsApp |
| `ana_sayfa` | Acasă |
| `tum_turlar` | Toate excursiile |
| `devam` | Continuă |
| `geri` | Înapoi |
| `yeniden_basla` | Începe din nou |
| `sonuclari_gor` | Vezi rezultatele |
| `size_uygun` | Potrivit pentru tine |
| `kuzey` | NORD |
| `mesafe.baslik` | Cât de departe de Antalya? |
| `mesafe.altBaslik` | Timpi aproximativi de deplasare cu mașina |
| `mesafe.dipnot` | Preluare de la hotel inclusă · timpii sunt pentru un sens |
| `mesafe.konaklamali` | cu cazare |

Kalan anahtarlar mevcut 5 dildeki karşılıklarından üretilir.

---

# 7 · HERO VE ANA SAYFA

**Slogan:**
> Un singur mesaj e de ajuns.

**Hero başlık:**
> Ce faceți mâine în Antalya?

**Hero alt satır:**
> 30 de excursii, asistență în șase limbi, plata în ziua excursiei.

**Arama kutusu içi:**
> Unde doriți să mergeți?

**Rozet şeridi:**
> Plata în ziua excursiei · Preluare de la hotel inclusă · Anulare gratuită până cu 24 de ore înainte

**Neden biz — 5 madde:**

1. **Plata în ziua excursiei, fără avans**
   Confirmăm rezervarea, iar plata o faceți în ziua excursiei.

2. **Suntem aici zilnic, 08:00–22:00**
   Răspundem mesajului dumneavoastră în aceeași zi.

3. **În limba dumneavoastră**
   Turcă, engleză, rusă, germană, poloneză, română.

4. **Vă preluăm de la hotel**
   Ora de preluare vă este comunicată pe WhatsApp cu o seară înainte.

5. **Anulare gratuită până cu 24 de ore înainte**
   Dacă vremea e rea, excursia se anulează fără costuri.

> **Not:** "Kendi dilinizde" maddesi artık **6 dil** sayıyor.
> Bu değişiklik diğer 5 dilde de yapılmalı — TR, EN, RU, DE, PL
> metinlerinde "beş dil" geçen her yer "altı dil" olacak.

---

# 8 · WHATSAPP MESAJ ŞABLONU

`mesaj_sablonlari.ts` dosyasına `ro` eklenir:

```
Bună ziua, aș dori să fac o rezervare:

Excursie: {tur}
Data: {tarih}
Persoane: {kisi}
Hotel / preluare: {otel}
Nume: {ad}

Observație: {not}

Îmi puteți confirma disponibilitatea și prețul?

—
#ANT-4821 · RO · KEK · 2026-08-14 · 2A+1C
```

Kelimeler:
`adults` → adulți · `children` → copii · `ages` → vârsta

Tarih biçimi: `Intl.DateTimeFormat('ro-RO', {...})`

---

# 9 · DÖVİZ

Varsayılan para birimi eşlemesine eklenir:

```ts
const varsayilanParaBirimi = {
  tr: 'TRY', ru: 'RUB', pl: 'PLN',
  en: 'EUR', de: 'EUR', ro: 'RON'
};
```

Döviz seçicisine **RON** eklenir. Liste: € ₺ $ ₽ zł **lei**

EK-1 §8 kuralı geçerli: fiyat asla € olmadan gösterilmez,
diğer para birimi "yaklaşık" ibaresiyle ikincil konumda durur.

---

# 10 · İÇERİK DOSYALARI

Klasöre eklenen iki dosya:

| Dosya | İçerik |
|---|---|
| `RO-sabit-sayfalar.md` | Hakkımızda, iptal, SSS, iletişim, pratik bilgiler, ücretsiz |
| `RO-turlar.md` | 9 turun tamamı |

İletişim sayfasındaki `[TELEFON]` `[E-POSTA]` `[ŞİRKET UNVANI]`
`[ADRES]` `[VERGİ NO]` `[TÜRSAB NO]` alanları diğer dillerle
**aynı anda** doldurulacak.

`[DOĞRULA]` işaretli satırlar Rumence'de de var — düzeltme
yapılırken **altı dilde birden** düzeltilecek.

---

# 11 · WHATSAPP HAZIR YANITLAR

`whatsapp-hazir-yanitlar.md` dosyasındaki 8 şablonun Rumence
karşılıkları ayrıca hazırlanacak. Bu dosya koda girmiyor,
ekibin telefonuna kuruluyor.

**En kritik olan mesai dışı otomatik yanıt:**

> Bună ziua, am primit mesajul dumneavoastră.
> În acest moment suntem în afara programului de lucru. Vă vom răspunde mâine dimineață începând cu ora 08:00, în ordinea primirii.
> Dacă este ceva urgent, menționați acest lucru și vom trata cu prioritate.

Kalan 7 şablon ayrıca verilecek.

---

# 12 · KONTROL LİSTESİ

- [ ] `ro` dil listesinde, sıralama TR·EN·RU·DE·PL·RO
- [ ] Dil seçicide 🇷🇴 Română görünüyor
- [ ] URL yolları çevrildi (`tururi`, `din`, `destinatii`)
- [ ] Slug'larda ș ț ă î â dönüştürüldü, ASCII kaldı
- [ ] hreflang **7 satır**, bağlar karşılıklı
- [ ] `/sitemap-ro.xml` üretiliyor ve indekste
- [ ] Veri modelindeki tüm çevrilen alanlara `ro` eklendi
- [ ] Arayüz çevirileri tamam, çevrilmemiş anahtar yok
- [ ] Mesafe haritası etiketleri Rumence
- [ ] WhatsApp mesajı Rumence üretiliyor, tarih `ro-RO` biçiminde
- [ ] RON döviz seçicide, varsayılan RO→RON
- [ ] **Tüm dillerde "beş dil" → "altı dil" güncellendi**
- [ ] Planlayıcı ve chatbot Rumence çalışıyor
- [ ] Rumence sayfalarda Spectral ve Golos Text doğru yükleniyor
      (ș ț ă î â kutu olarak görünmüyor)

---

# 13 · ÖNERİ

Rumence metinleri, o dili ana dili olan birine okut.
Gramer için değil — **ton** için. On dakikalık iş.

Antalya'da Rumen misafir ve çalışan bol; otel resepsiyonunda
bulunabilir. Ücretsiz ve en değerli kalite adımı.
