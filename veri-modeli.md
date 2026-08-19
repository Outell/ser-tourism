# Veri Modeli — Tur Nesnesi

**Çeviri sütunu:**
`5 DİL` = her dilde ayrı girilir · `TEK` = bir kez girilir, tüm dillerde aynı

---

## 1. Kimlik

| Alan | Tip | Çeviri | Açıklama |
|---|---|---|---|
| `id` | metin | TEK | `kekova-batik-sehir-tekne-turu` |
| `kod` | metin | TEK | `KEK` — WhatsApp mesajındaki kısa kod |
| `baslik` | metin | **5 DİL** | Kartta ve sayfa başlığında görünen ad |
| `ozet` | metin (140 krk) | **5 DİL** | Kart altındaki tek satır |
| `aktif` | evet/hayır | TEK | Hayır ise sitede hiç görünmez |
| `one_cikan` | evet/hayır | TEK | Ana sayfada üstte gösterilir |

## 2. Süre ve zaman

| Alan | Tip | Çeviri | Açıklama |
|---|---|---|---|
| `sure_saat` | sayı | TEK | `12` — site her dilde kendi kelimesini yazar |
| `sure_gun` | sayı | TEK | Sadece konaklamalı turlarda: `2` |
| `alinis_saati` | metin | TEK | `06:30 – 07:30` |
| `donus_saati` | metin | TEK | `19:00 – 20:00` |
| `gunler` | çoklu seçim | TEK | Pzt, Sal, Çar... — turun yapıldığı günler |

## 3. Fiyat

| Alan | Tip | Çeviri | Açıklama |
|---|---|---|---|
| `fiyat_eur` | sayı | TEK | `32` — sitede "32 €'dan başlayan" |
| `cocuk_indirim_3_6` | sayı (%) | TEK | `50` |
| `cocuk_indirim_7_11` | sayı (%) | TEK | `30` |
| `bebek_ucretsiz_yas` | sayı | TEK | `2` |
| `fiyat_notu` | metin | **5 DİL** | "Müze girişleri hariç" gibi |

> **10. ay sonrası için boş dursun:** `fiyat_tam`, `para_birimi`, `kontenjan`, `stok_takibi`.
> Şimdi eklemek 5 dakika, sonra eklemek 2 ay.

## 4. Transfer ve kalkış

| Alan | Tip | Çeviri | Açıklama |
|---|---|---|---|
| `transfer_dahil` | evet/hayır | TEK | Kartta rozet olarak çıkar |
| `transfer_ucreti_eur` | sayı | TEK | Dahil değilse ek ücret |
| `kalkis_bolgeleri` | çoklu seçim | TEK | Lara, Konyaaltı, Kemer, Belek, Side, Alanya, Manavgat, Kundu, Kadriye, Beldibi, Göynük, Avsallar |
| `bulusma_noktasi` | metin | **5 DİL** | Transfer yoksa: tam adres tarifi |
| `bulusma_koordinat` | konum | TEK | Haritada pin — dile bağlı değil |

## 5. Katılım koşulları

| Alan | Tip | Çeviri | Açıklama |
|---|---|---|---|
| `min_kisi` | sayı | TEK | `2` |
| `max_kisi` | sayı | TEK | `40` |
| `min_yas` | sayı | TEK | `4` |
| `max_yas` | sayı | TEK | Paraşüt, dalış gibi turlarda |
| `zorluk` | seçim | TEK | kolay / orta / zor |
| `saglik_uyarisi` | metin | **5 DİL** | "Kalp rahatsızlığı, hamilelik..." |
| `gerekli_esyalar` | liste | **5 DİL** | Mayo, havlu, güneş kremi... |

## 6. İçerik

| Alan | Tip | Çeviri | Açıklama |
|---|---|---|---|
| `aciklama` | uzun metin | **5 DİL** | Tur sayfasının ana metni |
| `program` | liste | **5 DİL** | Saat + durak: `08:00 – Otelden alınış` |
| `dahil_olanlar` | liste | **5 DİL** | Öğle yemeği, rehberlik, sigorta... |
| `dahil_olmayanlar` | liste | **5 DİL** | İçecekler, müze girişi... |
| `onemli_notlar` | liste | **5 DİL** | Havaya bağlı iptal, geç kalma... |

## 7. Sezon

| Alan | Tip | Çeviri | Açıklama |
|---|---|---|---|
| `sezon` | seçim | TEK | tüm yıl / yaz / kış |
| `sezon_baslangic` | ay | TEK | `4` (Nisan) |
| `sezon_bitis` | ay | TEK | `10` (Ekim) |

> Sezon dışındaki tur listede otomatik gizlenir. Kışın kapalı turu göstermek anında güven kaybı.

## 8. İptal politikası

| Alan | Tip | Çeviri | Açıklama |
|---|---|---|---|
| `iptal_saat` | sayı | TEK | `24` — kaç saat öncesine kadar ücretsiz |
| `iptal_metni` | metin | **5 DİL** | Politikanın açık hali |
| `hava_iptali` | evet/hayır | TEK | Hava nedeniyle iptal olabilir mi |

> Bu blok **fiyatın hemen altında**, WhatsApp butonunun üstünde görünür.
> Şikayetlerin tamamı burada toplanıyor, küçük puntoda kalmasın.

## 9. Görseller

| Alan | Tip | Çeviri | Açıklama |
|---|---|---|---|
| `kapak` | görsel | TEK | Kartta görünen, 1200×900 |
| `galeri` | görsel listesi | TEK | 1600×1200, en az 4 adet |
| `alt_metin` | metin | **5 DİL** | Her görsel için ayrı |
| `gorsel_kaynak` | seçim | TEK | gecici / operator / kendi_cekimimiz |
| `video` | dosya | TEK | **Şimdilik boş** — sonra doldurulacak |

## 10. Kategori ve ilişki

| Alan | Tip | Çeviri | Açıklama |
|---|---|---|---|
| `kategoriler` | çoklu seçim | TEK | Bir tur birden fazla kategoride olabilir |
| `sehir` | seçim | TEK | Antalya, Kapadokya, Pamukkale, Fethiye |
| `benzer_turlar` | tur listesi | TEK | Sayfa altında "bunu da beğenebilirsiniz" |

## 11. Operasyon (sitede görünmez)

| Alan | Tip | Çeviri | Açıklama |
|---|---|---|---|
| `partner` | metin | TEK | Hangi operatörden alınıyor |
| `maliyet_eur` | sayı | TEK | Senin alış fiyatın — marj takibi |
| `partner_iletisim` | metin | TEK | Telefon / WhatsApp |
| `ic_notlar` | metin | TEK | Ekip için notlar |

> Bu blok CMS'te var ama siteye hiç çıkmaz. Sadece sen ve ekip görür.

## 12. SEO

| Alan | Tip | Çeviri | Açıklama |
|---|---|---|---|
| `slug` | metin | **5 DİL** | Her dilde ayrı URL parçası |
| `meta_baslik` | metin (60 krk) | **5 DİL** | |
| `meta_aciklama` | metin (155 krk) | **5 DİL** | |

---

## Neden slug her dilde ayrı

```
/tr/turlar/kekova-batik-sehir-tekne-turu
/en/tours/kekova-sunken-city-boat-trip
/ru/tury/kekova-zatonuvshiy-gorod
/de/touren/kekova-versunkene-stadt-bootstour
/pl/wycieczki/kekova-zatopione-miasto
```

Rus misafir Yandex'te Rusça arıyor. URL'de Rusça kelime geçmesi sıralamayı ciddi etkiliyor.
Tek slug kullanırsan 4 dilde bu avantajı kaybedersin.

Sayfaların birbirine `hreflang` ile bağlanması şart — yoksa Google beş sayfayı
birbirinin kopyası sanır ve dördünü sıralamadan düşürür.

---

## Kategoriler

| Kod | Ad |
|---|---|
| `tekne` | Tekne turları |
| `macera` | Doğa ve macera |
| `kultur` | Kültür ve günübirlik |
| `uzun` | Uzun mesafe |
| `aile` | Aile ve eğlence |
| `konfor` | Şehir ve konfor |

Bir tur birden fazla kategoride olabilir. Örnek: Kekova hem `tekne` hem `kultur`.
Tek kategoriye zorlarsan misafir kültür sayfasında Kekova'yı bulamaz.

**Kategori sayfası da bir SEO sayfasıdır** — her kategorinin 5 dilde kendi
başlığı, açıklaması ve slug'ı olacak.
