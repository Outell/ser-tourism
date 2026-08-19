# Görsel Tedarik Rehberi — Geçici Fotoğraflar

Amaç: lansmana kadar kullanılacak, yasal, tema renkleriyle uyumlu görseller.
Gerçek fotoğraflar geldiğinde admin panelden tek tek değiştirilecek.

---

## 1. Nereden alınır

| Kaynak | Lisans | Ticari kullanım | Atıf | Not |
|---|---|---|---|---|
| **Unsplash** | Unsplash License | ✅ | Gerekmez | İlk tercih. Türkiye içeriği iyi. |
| **Pexels** | Pexels License | ✅ | Gerekmez | İkinci tercih. Video da var. |
| **Pixabay** | Pixabay License | ✅ | Gerekmez | Kalite daha değişken. |
| **Wikimedia Commons** | CC BY / CC BY-SA | ✅ | **Gerekir** | Niş yerler için tek kaynak. Atıf zorunlu. |
| Google Görseller | ❌ | ❌ | — | **Kullanma.** Telifli. |
| Rakip siteler | ❌ | ❌ | — | **Kullanma.** |

**Wikimedia kullanırsan** fotoğrafın altına küçük punto: `Foto: [isim] / Wikimedia Commons, CC BY-SA 4.0`. Bunu tur sayfasının altına bir "Görsel kaynakları" bloğu olarak topla, her fotoğrafın altına yazma.

---

## 2. Tur bazlı arama terimleri

Unsplash ve Pexels'te **İngilizce** ara, Türkçe sonuç vermiyor.

### Tekne turları
| # | Tur | Arama terimi | Beklenti |
|---|---|---|---|
| 1 | Kekova | `Kekova Turkey`, `Simena castle`, `Lycian coast boat` | ✅ İyi |
| 2 | Demre-Myra | `Myra rock tombs`, `Lycian rock tombs` | ✅ İyi |
| 3 | Kemer Korsan | `pirate ship Mediterranean`, `Kemer Turkey coast` | ⚠️ Orta — jenerik tekne kullan |
| 4 | Suluada | `Suluada`, `Adrasan Turkey`, `turquoise bay Turkey` | ⚠️ Orta |
| 5 | Yeşil Kanyon | `Oymapinar dam`, `green canyon Turkey` | ⚠️ Orta |

### Doğa & macera
| # | Tur | Arama terimi | Beklenti |
|---|---|---|---|
| 6 | Rafting | `whitewater rafting`, `rafting river helmet` | ✅ Bol |
| 7 | Kombo | `zipline forest`, `adventure park` | ✅ Bol |
| 8 | ATV Safari | `atv quad bike offroad`, `quad bike dirt` | ✅ Bol |
| 9 | Jeep Safari | `jeep safari mountain road`, `offroad jeep dust` | ✅ Bol |
| 10 | Yamaç paraşütü | `paragliding tandem`, `paragliding coast` | ✅ Bol |
| 11 | Dalış | `scuba diving mediterranean`, `scuba diver underwater` | ✅ Bol |
| 12 | Sapadere | `canyon walkway`, `narrow canyon river Turkey` | ⚠️ Orta |

### Kültür & günübirlik
| # | Tur | Arama terimi | Beklenti |
|---|---|---|---|
| 13-14 | Pamukkale | `Pamukkale`, `Pamukkale travertine`, `Hierapolis` | ✅ Çok bol |
| 15 | Antalya şehir | `Antalya old town`, `Kaleici Antalya`, `Duden waterfall` | ✅ İyi |
| 16 | Side-Manavgat | `Side ancient theatre Turkey`, `Apollo temple Side` | ✅ İyi |
| 17 | Perge-Aspendos | `Aspendos theatre`, `Perge ancient city` | ✅ İyi |
| 18 | Altınbeşik | `underground cave lake`, `cave boat tour` | ❌ Zayıf → Wikimedia dene |
| 19 | Olympos-Yanartaş | `Chimaera flames Turkey`, `Olympos ruins` | ⚠️ Orta |

### Uzun mesafe
| # | Tur | Arama terimi | Beklenti |
|---|---|---|---|
| 20-21 | Kapadokya | `Cappadocia`, `Cappadocia balloons sunrise`, `Goreme` | ✅ Çok bol |
| 22 | Pamukkale 2 gün | (13 ile aynı, farklı kare seç) | ✅ |
| 23 | Fethiye-Ölüdeniz | `Oludeniz blue lagoon`, `Saklikent gorge` | ✅ İyi |

### Aile & eğlence
| # | Tur | Arama terimi | Beklenti |
|---|---|---|---|
| 24 | Land of Legends | `theme park roller coaster`, `water park slides` | ⚠️ Jenerik kullan — marka görseli telifli |
| 25 | Akvaryum | `aquarium tunnel`, `public aquarium fish` | ✅ Bol |
| 26 | Aqualand | `water park slide`, `dolphin show` | ✅ Bol |
| 27 | Aspendos Arena | `folk dance show stage`, `traditional dance performance` | ⚠️ Jenerik |

### Şehir & konfor
| # | Tur | Arama terimi | Beklenti |
|---|---|---|---|
| 28 | Tahtalı Teleferik | `cable car mountain`, `Tahtali Olympos` | ✅ İyi |
| 29 | Türk hamamı | `turkish hammam`, `hammam marble interior` | ✅ İyi |
| 30 | Transfer | `minivan airport transfer`, `van road Turkey` | ✅ Bol |

**Kural:** her tur için **en az 4, ideali 6** fotoğraf indir. Tur sayfasında galeri olacak.
**İkinci kural:** ilk fotoğrafta mutlaka insan olsun. İnsansız manzara, kartlarda ölü duruyor.

---

## 3. Tutarlılık: fotoğraf işleme reçetesi

Farklı kaynaklardan gelen fotoğrafları birbirine bağlayan şey renk katmanı. Üçü birden uygulanır:

```css
:root{
  --sea:   #0E6E6A;   /* tema teali */
  --ink:   #0F2E2C;
  --sun:   #F2A413;
}

/* Tur kartı görseli */
.tour-card__image{
  position: relative;
  aspect-ratio: 4 / 3;      /* TÜM kartlarda aynı oran — en önemli kural */
  overflow: hidden;
  border-radius: 12px;
}

.tour-card__image img{
  width: 100%; height: 100%;
  object-fit: cover;
  /* 1. Renk normalizasyonu: farklı pozlamaları yakınlaştırır */
  filter: saturate(0.92) contrast(1.06) brightness(0.98);
  transition: transform .4s ease;
}

.tour-card:hover .tour-card__image img{
  transform: scale(1.04);
}

/* 2. Tema rengi katmanı — çok hafif, %8-12 arası */
.tour-card__image::before{
  content:"";
  position:absolute; inset:0; z-index:1;
  background: var(--sea);
  mix-blend-mode: color;
  opacity: .10;
  pointer-events:none;
}

/* 3. Alt gradyan — fiyat ve başlık okunaklı kalsın */
.tour-card__image::after{
  content:"";
  position:absolute; inset:0; z-index:2;
  background: linear-gradient(
    to top,
    rgba(15,46,44,.72) 0%,
    rgba(15,46,44,.15) 42%,
    transparent 70%
  );
  pointer-events:none;
}
```

**Neden bu üçü:**
- `aspect-ratio: 4/3` — tek başına en büyük fark. Farklı boyutta fotoğraflar bile aynı çerçevede düzgün durur.
- `mix-blend-mode: color` + %10 — fotoğrafları detay kaybetmeden tema paletine çeker. %15'i geçme, yapay görünür.
- Alt gradyan — hem metin okunurluğu hem görsel birlik sağlar.

Bu işlemeyle Unsplash'ten indirdiğin karışık fotoğraflar tek seri gibi durur. Gerçek fotoğraflar gelince aynı işleme onlara da uygulanır, tasarım hiç değişmez.

---

## 4. Teknik hazırlık

**Boyut ve format**
- İndirilen dosyayı olduğu gibi koyma. Unsplash orijinalleri 5–8 MB, sayfayı öldürür.
- Hedef: kart görselleri **1200×900**, galeri **1600×1200**
- Format **WebP**. Squoosh.app'te (ücretsiz, tarayıcıda) kalite 80 ile kaydet → ~150 KB
- 30 tur × 6 fotoğraf = 180 dosya. Bir öğleden sonra sürer ama site hızını ikiye katlar.

**Dosya adlandırma** (SEO için önemli)
```
✅ kekova-batik-sehir-tekne-turu-01.webp
❌ IMG_4821.webp
```

**Alt metni** her dilde ayrı yazılacak. CMS'te tur nesnesinin görsel alanında `alt_tr`, `alt_en`, `alt_ru`, `alt_de`, `alt_pl` olsun.

---

## 5. Lansmanda değiştirme planı

CMS'te her görselin yanında bir işaret alanı olsun:

```
gorsel_kaynak:  "gecici"  |  "operator"  |  "kendi_cekimimiz"
```

Böylece panele girdiğinde hangi turların hâlâ geçici fotoğrafla durduğunu tek bakışta görürsün. Hedef: 6 ay içinde tüm "geçici" işaretlerini temizlemek.

Öncelik sırası — en çok satan 8 turun fotoğrafını ilk çek. Diğerleri bekleyebilir.
