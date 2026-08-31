import type { Cevirili } from '../lib/tipler';
import type { Dil } from '../lib/tipler';

// Sabit sayfa metinleri — icerik/ klasöründen.
// Bölüm sayısı dile göre DEĞİŞİR: örneğin RO "Despre noi"de Türkçe'de olmayan
// "Ce include prețul" bölümü var (içeriğin kendi kararı, hata değil).
// Bu yüzden Cevirili yerine dil → bölüm listesi yapısı kullanılıyor.
//
// [TELEFON] [E-POSTA] [ŞİRKET UNVANI] [ADRES] [VERGİ DAİRESİ / NO]
// [TÜRSAB BELGE NO] alanları altı dilde birden doldurulacak (icerik/OKU.md §1).

export interface SayfaBolum {
  baslik: string;
  metin: string;
}

export type SabitSayfaKodu = 'hakkimizda' | 'iptal' | 'sss' | 'iletisim';

export const SABIT_SAYFALAR: Record<SabitSayfaKodu, Record<Dil, SayfaBolum[]>> = {
  hakkimizda: {
    tr: [
      {
        baslik: 'Antalya\'da yaşıyoruz',
        metin: 'Sattığımız turların kalktığı sokakları her gün görüyoruz.\n\nSER Tourism & Travel, Antalya merkezli küçük bir ekip. Sitede gördüğünüz turların bir kısmını kendimiz düzenliyoruz, bir kısmını birlikte çalıştığımız yerel operatörlerle satıyoruz. Hangi teknenin bakımlı olduğunu, hangi güzergâhın öğlen sıcağında yorucu olduğunu, hangi rehberin işini sevdiğini buradan biliyoruz.\n\nBüyük rezervasyon siteleri gibi çalışmıyoruz. Mesajınız bir çağrı merkezine düşmez. WhatsApp\'tan yazdığınızda, mesajınızı Antalya\'da oturan biri okur ve aynı gün cevap verir.',
      },
      {
        baslik: 'Nasıl çalışıyoruz',
        metin: 'Turu seçersiniz, biz ayarlarız. Siteden turu ve tarihi seçip WhatsApp\'tan gönderirsiniz. Uygunluğu kontrol eder, saatleri netleştirir, otelinizden alınışı planlarız.\n\nÖdeme turda. Önden kapora istemiyoruz. Rezervasyonunuz mesajla onaylanır; ödemeyi tur günü yaparsınız.\n\nAltı dilde. Türkçe, İngilizce, Rusça, Almanca, Lehçe ve Rumence konuşuyoruz. Hangi dilde yazarsanız o dilde cevap alırsınız.',
      },
      {
        baslik: 'Söz verdiklerimiz',
        metin: 'Her gün 08:00–22:00 arasında ulaşılabiliriz ve mesajınıza aynı gün döneriz.\n\nFiyat, süre ve dahil olanlar sayfada ne yazıyorsa odur. Turda sürpriz ek ücret çıkmaz.\n\nBir tur size uygun değilse — yol çok uzunsa, deniz o gün dalgalıysa, program küçük çocuklar için yorucuysa — satmadan önce söyleriz.',
      },
    ],
    en: [
      {
        baslik: 'We live in Antalya',
        metin: 'We see the streets these tours leave from every day.\n\nSER Tourism & Travel is a small team based in Antalya. Some of the tours on this site we run ourselves; others we sell together with local operators we work with. We know which boats are well kept, which routes get exhausting in the midday heat, and which guides love their job.\n\nWe don\'t work like the big booking sites. Your message never lands in a call centre. When you write on WhatsApp, someone sitting in Antalya reads it and replies the same day.',
      },
      {
        baslik: 'How it works',
        metin: 'You pick the tour, we arrange it. Choose a tour and date on the site and send it via WhatsApp. We check availability, confirm the times and plan your hotel pickup.\n\nPay on the day. No deposit, no upfront payment. Your booking is confirmed by message; you pay on the day of the tour.\n\nSix languages. Turkish, English, Russian, German, Polish and Romanian. Write in any of them and you\'ll get an answer in the same language.',
      },
      {
        baslik: 'What we promise',
        metin: 'We\'re available every day from 08:00 to 22:00 and reply the same day.\n\nThe price, duration and inclusions are exactly what the page says. No surprise extras on the day.\n\nIf a tour isn\'t right for you — the drive is long, the sea is rough that day, the programme is tiring for small children — we\'ll tell you before you book.',
      },
    ],
    ru: [
      {
        baslik: 'Мы живём в Анталье',
        metin: 'Улицы, с которых отправляются наши туры, мы видим каждый день.\n\nSER Tourism & Travel — небольшая команда из Антальи. Часть туров на этом сайте мы организуем сами, часть продаём вместе с местными операторами, с которыми работаем. Мы знаем, какие катера в хорошем состоянии, какой маршрут тяжело даётся в полуденную жару и какой гид действительно любит свою работу.\n\nМы работаем не так, как крупные сайты бронирования. Ваше сообщение не попадает в колл-центр. Когда вы пишете в WhatsApp, его читает человек, который живёт в Анталье, — и отвечает в тот же день.',
      },
      {
        baslik: 'Как это работает',
        metin: 'Вы выбираете тур — мы всё организуем. Выберите тур и дату на сайте и отправьте заявку в WhatsApp. Мы проверим наличие мест, уточним время и спланируем трансфер из вашего отеля.\n\nОплата в день тура. Мы не берём предоплату и депозит. Бронирование подтверждается сообщением; платите вы в день тура.\n\nШесть языков. Турецкий, английский, русский, немецкий, польский, румынский. На каком языке напишете — на том и ответим.',
      },
      {
        baslik: 'Что мы обещаем',
        metin: 'Мы на связи каждый день с 08:00 до 22:00 и отвечаем в тот же день.\n\nЦена, длительность и то, что включено, — ровно то, что написано на странице тура. Никаких неожиданных доплат на месте.\n\nЕсли тур вам не подходит — дорога слишком длинная, море в этот день неспокойное, программа утомительна для маленьких детей, — мы скажем об этом до бронирования.',
      },
    ],
    de: [
      {
        baslik: 'Wir leben in Antalya',
        metin: 'SER Tourism & Travel ist ein kleines Team mit Sitz in Antalya. Die Straßen, von denen diese Touren starten, sehen wir jeden Tag. Einen Teil der Touren auf dieser Seite führen wir selbst durch, einen Teil verkaufen wir gemeinsam mit lokalen Veranstaltern, mit denen wir zusammenarbeiten. Wir wissen, welche Boote gut gepflegt sind, welche Strecke in der Mittagshitze anstrengend wird und welcher Guide seine Arbeit liebt.\n\nWir arbeiten nicht wie die großen Buchungsportale. Ihre Nachricht landet in keinem Callcenter. Wenn Sie über WhatsApp schreiben, liest sie jemand, der in Antalya sitzt — und antwortet noch am selben Tag.',
      },
      {
        baslik: 'So funktioniert es',
        metin: 'Sie wählen die Tour, wir organisieren sie. Wählen Sie auf der Seite Tour und Datum und senden Sie die Anfrage per WhatsApp. Wir prüfen die Verfügbarkeit, bestätigen die Uhrzeiten und planen die Abholung von Ihrem Hotel.\n\nBezahlung am Tag der Tour. Keine Anzahlung, keine Vorauskasse. Ihre Buchung wird per Nachricht bestätigt; bezahlt wird am Tag der Tour.\n\nSechs Sprachen. Türkisch, Englisch, Russisch, Deutsch, Polnisch und Rumänisch. In welcher Sprache Sie auch schreiben — Sie erhalten die Antwort in derselben Sprache.',
      },
      {
        baslik: 'Was wir versprechen',
        metin: 'Wir sind täglich von 08:00 bis 22:00 Uhr erreichbar und antworten am selben Tag.\n\nPreis, Dauer und Leistungen entsprechen genau den Angaben auf der Seite. Keine überraschenden Zusatzkosten vor Ort.\n\nWenn eine Tour nicht zu Ihnen passt — die Fahrt zu lang ist, das Meer an dem Tag unruhig, das Programm für kleine Kinder ermüdend —, sagen wir es Ihnen vor der Buchung.',
      },
    ],
    pl: [
      {
        baslik: 'Mieszkamy w Antalyi',
        metin: 'Ulice, z których wyruszają nasze wycieczki, widzimy codziennie.\n\nSER Tourism & Travel to mały zespół z Antalyi. Część wycieczek z tej strony organizujemy sami, część sprzedajemy razem z lokalnymi operatorami, z którymi współpracujemy. Wiemy, które łodzie są zadbane, która trasa męczy w południowym upale i który przewodnik naprawdę lubi swoją pracę.\n\nNie działamy jak wielkie portale rezerwacyjne. Twoja wiadomość nie trafia do call center. Gdy piszesz na WhatsAppie, czyta ją ktoś, kto mieszka w Antalyi — i odpowiada tego samego dnia.',
      },
      {
        baslik: 'Jak to działa',
        metin: 'Wybierasz wycieczkę, my zajmujemy się resztą. Wybierz na stronie wycieczkę i termin, wyślij zgłoszenie przez WhatsApp. Sprawdzimy dostępność, potwierdzimy godziny i zaplanujemy odbiór z hotelu.\n\nPłatność w dniu wycieczki. Bez zaliczki i przedpłaty. Rezerwację potwierdzamy wiadomością; płacisz w dniu wycieczki.\n\nSześć języków. Turecki, angielski, rosyjski, niemiecki, polski i rumuński. W jakim języku napiszesz, w takim dostaniesz odpowiedź.',
      },
      {
        baslik: 'Co obiecujemy',
        metin: 'Jesteśmy dostępni codziennie od 08:00 do 22:00 i odpowiadamy tego samego dnia.\n\nCena, czas trwania i to, co w cenie — dokładnie tak, jak na stronie. Żadnych niespodziewanych dopłat na miejscu.\n\nJeśli wycieczka nie jest dla Ciebie — dojazd jest długi, morze tego dnia niespokojne, program męczący dla małych dzieci — powiemy o tym przed rezerwacją.',
      },
    ],
    ro: [
      {
        baslik: 'Locuim în Antalya',
        metin: 'Străzile din care pleacă excursiile noastre le vedem în fiecare zi.\n\nSER Tourism & Travel este o echipă mică din Antalya. O parte dintre excursiile de pe acest site le organizăm noi, restul le vindem împreună cu operatori locali cu care colaborăm. Care ambarcațiune este bine întreținută, care traseu devine obositor la căldura de la prânz, care ghid își face treaba cu plăcere — știm asta de aici.\n\nNu funcționăm ca marile platforme de rezervări. Mesajul dumneavoastră nu ajunge într-un call center. Când scrieți pe WhatsApp, îl citește cineva care locuiește în Antalya și vă răspunde în aceeași zi.',
      },
      {
        baslik: 'Cum funcționează',
        metin: 'Alegeți excursia, noi ne ocupăm de rest. Alegeți excursia și data pe site și trimiteți prin WhatsApp. Verificăm disponibilitatea, confirmăm orele și planificăm preluarea de la hotel.\n\nPlata se face în ziua excursiei. Nu cerem avans. Rezervarea se confirmă prin mesaj, iar plata o faceți în ziua excursiei.\n\nȘase limbi. Vorbim turcă, engleză, rusă, germană, poloneză și română. În ce limbă scrieți, în aceeași limbă primiți răspuns.',
      },
      {
        baslik: 'Ce include prețul',
        metin: 'Prețul afișat pe site este prețul de persoană de la care încep excursiile noastre. Preluarea de la hotel este inclusă la majoritatea excursiilor — găsiți marcajul pe fiecare pagină.\n\nCe este inclus și ce se plătește separat sunt afișate ca liste distincte la fiecare excursie. La fața locului nu apar costuri suplimentare.\n\nCopiii până în 2 ani beneficiază de gratuitate. Pentru 3–6 ani și 7–11 ani se aplică reduceri, al căror procent este indicat la fiecare excursie.',
      },
      {
        baslik: 'Ce promitem',
        metin: 'Suntem disponibili în fiecare zi între orele 08:00 și 22:00 și răspundem în aceeași zi.\n\nAnulare gratuită: excursiile de o zi până cu 24 de ore înainte, excursiile cu cazare până cu 72 de ore înainte. Este suficient un singur mesaj.\n\nDacă o excursie nu vi se potrivește — drumul este lung, marea este agitată în ziua respectivă, programul este obositor pentru copii mici — vă spunem înainte de rezervare.',
      },
    ],
  },
  iptal: {
    tr: [
      {
        baslik: 'Kısa versiyon',
        metin: 'Tur başlangıcından 24 saat öncesine kadar tek mesajla, ücretsiz iptal edebilirsiniz.\n\nÖnden ödeme almadığımız için iade süreci de yoktur. Haber vermeniz yeterli.',
      },
      {
        baslik: 'Nasıl iptal edilir',
        metin: 'WhatsApp\'tan "iptal etmek istiyorum" yazın. Rezervasyon kodunuzu (#ANT-…) eklerseniz daha hızlı buluruz.\n\nİptaliniz mesajla teyit edilir. Teyit mesajı gelmeden iptal kesinleşmiş sayılmaz.',
      },
      {
        baslik: 'Süreler',
        metin: 'Günübirlik turlar — başlangıçtan 24 saat öncesine kadar ücretsiz.\n\nKonaklamalı turlar (Kapadokya, Pamukkale 2 gün) — 72 saat öncesine kadar ücretsiz. Otel rezervasyonları bu süreden sonra bağlayıcı hale gelir.\n\n24 saatten az kaldıysa — yine de yazın. Çoğu durumda çözüm bulunur; tekne turlarında ve konaklamalı turlarda operatör koşulları geçerli olabilir.',
      },
      {
        baslik: 'Tarih değişikliği',
        metin: 'İptal yerine tarihi değiştirmek isterseniz, seçtiğiniz yeni tarihte yer olduğu sürece ücretsizdir.',
      },
      {
        baslik: 'Hava nedeniyle iptal',
        metin: 'Deniz veya hava koşulları turu güvensiz kılıyorsa turu biz iptal ederiz. Size en geç bir akşam önce haber verilir. Ücret ödemezsiniz; dilerseniz turu başka güne alırız.',
      },
      {
        baslik: 'Gelmeme durumu',
        metin: 'Haber vermeden gelmezseniz sizden ücret talep edilmez — ödeme turda olduğu için zaten ödeme yapmamış olursunuz.\n\nYine de haber vermenizi rica ederiz. Yeriniz başka bir misafire açılabilir ve araç sabah sizi beklemek zorunda kalmaz.',
      },
      {
        baslik: 'Bizim iptal etmemiz',
        metin: 'En az katılımcı sayısına ulaşılamayan turlar iptal edilebilir. Bu durumda en geç bir akşam önce haber verir, alternatif tarih veya benzer bir tur öneririz.\n\n*Sorunuz mu var?* → WhatsApp\'tan yazın [buton]',
      },
    ],
    en: [
      {
        baslik: 'The short version',
        metin: 'You can cancel free of charge with a single message up to 24 hours before the tour starts.\n\nSince we take no upfront payment, there\'s no refund process either. Just let us know.',
      },
      {
        baslik: 'How to cancel',
        metin: 'Write "I\'d like to cancel" on WhatsApp. Adding your booking code (#ANT-…) helps us find it faster.\n\nYour cancellation is confirmed by message. Until you receive that confirmation, it isn\'t final.',
      },
      {
        baslik: 'Deadlines',
        metin: 'Day tours — free up to 24 hours before departure.\n\nOvernight tours (Cappadocia, Pamukkale 2 days) — free up to 72 hours before. After that, hotel bookings become binding.\n\nLess than 24 hours left? Write anyway. In most cases we find a solution; for boat tours and overnight tours the operator\'s terms may apply.',
      },
      {
        baslik: 'Changing the date',
        metin: 'Prefer to change the date instead of cancelling? Free, as long as the new date has availability.',
      },
      {
        baslik: 'Weather cancellations',
        metin: 'If sea or weather conditions make the tour unsafe, we cancel it. You\'ll be informed by the evening before at the latest. You pay nothing; if you like, we move you to another day.',
      },
      {
        baslik: 'No-show',
        metin: 'If you don\'t show up without notice, you won\'t be charged — payment is on the day, so you haven\'t paid anything.\n\nWe\'d still appreciate a message: your seat can go to another guest, and the driver won\'t have to wait in the morning.',
      },
      {
        baslik: 'If we cancel',
        metin: 'Tours that don\'t reach the minimum number of participants may be cancelled. In that case we let you know by the evening before at the latest and suggest an alternative date or a similar tour.\n\n*Questions?* → Write on WhatsApp [button]',
      },
    ],
    ru: [
      {
        baslik: 'Коротко',
        metin: 'Вы можете отменить бронирование бесплатно одним сообщением не позднее чем за 24 часа до начала тура.\n\nПоскольку мы не берём предоплату, процедуры возврата денег просто нет. Достаточно предупредить нас.',
      },
      {
        baslik: 'Как отменить',
        metin: 'Напишите в WhatsApp «хочу отменить». Если добавите код бронирования (#ANT-…), мы найдём его быстрее.\n\nОтмена подтверждается ответным сообщением. Пока вы не получили подтверждение, отмена не считается окончательной.',
      },
      {
        baslik: 'Сроки',
        metin: 'Однодневные туры — бесплатно не позднее чем за 24 часа до начала.\n\nТуры с ночёвкой (Каппадокия, Памуккале на 2 дня) — бесплатно не позднее чем за 72 часа. После этого бронь отеля становится обязательной.\n\nОсталось меньше 24 часов? Всё равно напишите. В большинстве случаев решение находится; для морских туров и туров с ночёвкой могут действовать условия оператора.',
      },
      {
        baslik: 'Перенос даты',
        metin: 'Хотите не отменить, а перенести? Бесплатно — при наличии мест на новую дату.',
      },
      {
        baslik: 'Отмена из-за погоды',
        metin: 'Если море или погода делают тур небезопасным, мы отменяем его сами. Вам сообщат не позднее вечера накануне. Вы ничего не платите; при желании перенесём тур на другой день.',
      },
      {
        baslik: 'Неявка',
        metin: 'Если вы не пришли и не предупредили, платить ничего не нужно — оплата в день тура, значит, вы ещё ничего не платили.\n\nИ всё же просим предупреждать: ваше место может занять другой гость, а машине не придётся ждать вас утром.',
      },
      {
        baslik: 'Отмена с нашей стороны',
        metin: 'Тур может быть отменён, если не набирается минимальное количество участников. В этом случае мы сообщаем не позднее вечера накануне и предлагаем другую дату или похожий тур.\n\n*Остались вопросы?* → Напишите в WhatsApp [кнопка]',
      },
    ],
    de: [
      {
        baslik: 'Kurzfassung',
        metin: 'Sie können bis 24 Stunden vor Tourbeginn mit einer einzigen Nachricht kostenlos stornieren.\n\nDa wir keine Vorauszahlung nehmen, gibt es auch kein Rückerstattungsverfahren. Eine kurze Nachricht genügt.',
      },
      {
        baslik: 'So stornieren Sie',
        metin: 'Schreiben Sie auf WhatsApp „Ich möchte stornieren". Mit Ihrem Buchungscode (#ANT-…) finden wir die Buchung schneller.\n\nDie Stornierung wird per Nachricht bestätigt. Erst mit dieser Bestätigung ist sie verbindlich.',
      },
      {
        baslik: 'Fristen',
        metin: 'Tagestouren — kostenlos bis 24 Stunden vor Abfahrt.\n\nTouren mit Übernachtung (Kappadokien, Pamukkale 2 Tage) — kostenlos bis 72 Stunden vorher. Danach werden die Hotelbuchungen verbindlich.\n\nWeniger als 24 Stunden? Schreiben Sie trotzdem. In den meisten Fällen findet sich eine Lösung; bei Bootstouren und Übernachtungstouren können die Bedingungen des Veranstalters gelten.',
      },
      {
        baslik: 'Terminänderung',
        metin: 'Statt zu stornieren lieber das Datum ändern? Kostenlos, sofern am neuen Termin Plätze frei sind.',
      },
      {
        baslik: 'Wetterbedingte Absage',
        metin: 'Machen See- oder Wetterbedingungen die Tour unsicher, sagen wir sie ab. Sie werden spätestens am Vorabend informiert. Sie zahlen nichts; auf Wunsch verschieben wir die Tour auf einen anderen Tag.',
      },
      {
        baslik: 'Nichterscheinen',
        metin: 'Erscheinen Sie ohne Nachricht nicht, wird Ihnen nichts berechnet — bezahlt wird am Tag der Tour, Sie haben also noch nichts gezahlt.\n\nWir bitten dennoch um eine kurze Nachricht: Ihr Platz kann an einen anderen Gast gehen, und der Fahrer muss morgens nicht auf Sie warten.',
      },
      {
        baslik: 'Absage durch uns',
        metin: 'Touren, die die Mindestteilnehmerzahl nicht erreichen, können abgesagt werden. In diesem Fall informieren wir Sie spätestens am Vorabend und schlagen einen anderen Termin oder eine ähnliche Tour vor.\n\n*Fragen?* → Schreiben Sie uns auf WhatsApp [Button]',
      },
    ],
    pl: [
      {
        baslik: 'W skrócie',
        metin: 'Możesz anulować rezerwację bezpłatnie jedną wiadomością do 24 godzin przed rozpoczęciem wycieczki.\n\nNie pobieramy przedpłat, więc nie ma też procedury zwrotu pieniędzy. Wystarczy dać nam znać.',
      },
      {
        baslik: 'Jak anulować',
        metin: 'Napisz na WhatsAppie „chcę anulować". Jeśli dodasz kod rezerwacji (#ANT-…), znajdziemy ją szybciej.\n\nAnulowanie potwierdzamy wiadomością. Dopóki nie dostaniesz potwierdzenia, anulowanie nie jest ostateczne.',
      },
      {
        baslik: 'Terminy',
        metin: 'Wycieczki jednodniowe — bezpłatnie do 24 godzin przed wyjazdem.\n\nWycieczki z noclegiem (Kapadocja, Pamukkale 2 dni) — bezpłatnie do 72 godzin przed. Po tym terminie rezerwacje hoteli stają się wiążące.\n\nZostało mniej niż 24 godziny? I tak napisz. W większości przypadków znajdziemy rozwiązanie; przy rejsach i wycieczkach z noclegiem mogą obowiązywać warunki operatora.',
      },
      {
        baslik: 'Zmiana terminu',
        metin: 'Wolisz zmienić datę zamiast anulować? Bezpłatnie, o ile w nowym terminie są miejsca.',
      },
      {
        baslik: 'Odwołanie z powodu pogody',
        metin: 'Jeśli morze lub pogoda sprawiają, że wycieczka jest niebezpieczna, odwołujemy ją sami. Poinformujemy Cię najpóźniej wieczorem dzień wcześniej. Nic nie płacisz; na życzenie przeniesiemy wycieczkę na inny dzień.',
      },
      {
        baslik: 'Nieobecność',
        metin: 'Jeśli nie przyjdziesz bez uprzedzenia, nic nie zapłacisz — płatność jest w dniu wycieczki, więc jeszcze nic nie zapłaciłeś.\n\nProsimy jednak o wiadomość: Twoje miejsce może zająć inny gość, a kierowca nie będzie musiał czekać rano.',
      },
      {
        baslik: 'Odwołanie z naszej strony',
        metin: 'Wycieczka może zostać odwołana, jeśli nie zbierze się minimalna liczba uczestników. W takim przypadku informujemy najpóźniej wieczorem dzień wcześniej i proponujemy inny termin lub podobną wycieczkę.\n\n*Masz pytania?* → Napisz na WhatsAppie [przycisk]',
      },
    ],
    ro: [
      {
        baslik: 'Pe scurt',
        metin: 'Puteți anula gratuit, printr-un singur mesaj, cu până la 24 de ore înainte de începerea excursiei.\n\nDeoarece nu percepem plata în avans, nu există nici procedură de rambursare. Este suficient să ne anunțați.',
      },
      {
        baslik: 'Cât costă',
        metin: 'Nimic. Anularea în termenele indicate este complet gratuită — fără avans, fără rețineri, fără taxe de procesare.\n\n| Tipul excursiei | Anulare gratuită până cu | Cost | |---|---|---| | Excursii de o zi | 24 de ore înainte | 0 | | Excursii cu cazare | 72 de ore înainte | 0 | | Schimbarea datei | oricând, dacă sunt locuri | 0 |\n\nExcursiile cu cazare sunt Cappadocia și Pamukkale (2 zile). După expirarea celor 72 de ore, rezervările la hotel devin obligatorii.',
      },
      {
        baslik: 'Cum anulați',
        metin: 'Scrieți pe WhatsApp: „Doresc să anulez". Dacă indicați numărul rezervării (#ANT-…), o găsim mai repede.\n\nAnularea se confirmă printr-un mesaj de răspuns. Până când nu primiți confirmarea, anularea nu este considerată efectuată.',
      },
      {
        baslik: 'Au mai rămas mai puțin de 24 de ore',
        metin: 'Scrieți-ne oricum. În majoritatea cazurilor găsim o soluție. La excursiile pe mare și la cele cu cazare se pot aplica condițiile operatorului.',
      },
      {
        baslik: 'Schimbarea datei',
        metin: 'Dacă preferați să mutați excursia în loc să o anulați, acest lucru este gratuit, atât timp cât există locuri disponibile la noua dată.',
      },
      {
        baslik: 'Anulare din cauza vremii',
        metin: 'Dacă starea mării sau condițiile meteo fac excursia nesigură, o anulăm noi. Vă anunțăm cel târziu în seara precedentă. Nu plătiți nimic; la cerere, mutăm excursia în altă zi.',
      },
      {
        baslik: 'Dacă nu vă prezentați',
        metin: 'Nu vă vom taxa — plata se face în ziua excursiei, deci pur și simplu nu veți fi plătit nimic.\n\nVă rugăm totuși să ne anunțați din timp. Locul dumneavoastră poate reveni altui oaspete, iar vehiculul nu va trebui să aștepte dimineața.',
      },
      {
        baslik: 'Dacă anulăm noi',
        metin: 'Excursiile la care nu se atinge numărul minim de participanți pot fi anulate. În acest caz vă anunțăm cel târziu în seara precedentă și vă propunem o altă dată sau o excursie similară.\n\nNici în această situație nu suportați niciun cost.\n\n*Aveți o întrebare?* → Scrieți-ne pe WhatsApp [buton]',
      },
    ],
  },
  sss: {
    tr: [
      {
        baslik: 'Nasıl rezervasyon yaparım?',
        metin: 'Tur sayfasındaki formu doldurup WhatsApp butonuna basın. Mesajınız hazır yazılmış olarak açılır; göndermeniz yeterli. Uygunluğu kontrol edip aynı gün dönüş yaparız.',
      },
      {
        baslik: 'Kapora ödemem gerekiyor mu?',
        metin: 'Hayır. Önden hiçbir ödeme almıyoruz. Rezervasyonunuz mesajla onaylanır, ödemeyi tur günü yaparsınız.',
      },
      {
        baslik: 'Ödemeyi nasıl yaparım?',
        metin: 'Tur günü, nakit veya duruma göre kartla. Hangi seçeneklerin geçerli olduğu onay mesajınızda yazar. Euro, dolar ve TL kabul edilir.',
      },
      {
        baslik: 'Otelden alıyor musunuz?',
        metin: 'Turların çoğunda evet. Tur sayfasında "otelden alış dahil" rozeti varsa ve oteliniz güzergâhtaysa alınırsınız. Hangi bölgelerden alış yapıldığı her tur sayfasında listelenir.',
      },
      {
        baslik: 'Alınış saatimi nereden öğrenirim?',
        metin: 'Tur gününden bir akşam önce WhatsApp\'tan kesin saat gönderilir. Saat, otelinizin konumuna göre belirlenir.',
      },
      {
        baslik: 'İptal etmek istersem?',
        metin: 'Günübirlik turlarda başlangıçtan 24 saat öncesine kadar, konaklamalı turlarda 72 saat öncesine kadar tek mesajla ücretsiz iptal. Ayrıntılar iptal politikası sayfasında.',
      },
      {
        baslik: 'Hava kötü olursa ne olur?',
        metin: 'Koşullar turu güvensiz kılıyorsa turu biz iptal ederiz ve en geç bir akşam önce haber veririz. Ücret ödemezsiniz; dilerseniz başka güne alınır.',
      },
      {
        baslik: 'Çocuk fiyatları nasıl işliyor?',
        metin: '0–2 yaş ücretsiz. 3–6 yaş ve 7–11 yaş için indirimli fiyat uygulanır; oranlar tura göre değişebilir ve tur sayfasında yazar. 12 yaş ve üzeri yetişkin sayılır.',
      },
      {
        baslik: 'Turlar hangi dilde yapılıyor?',
        metin: 'WhatsApp desteğimiz altı dilde: Türkçe, İngilizce, Rusça, Almanca, Lehçe, Rumence. Tur günündeki rehberlik dili tura göre değişir — rezervasyon sırasında hangi dillerin olduğunu söyleriz.',
      },
      {
        baslik: 'Yanıma ne almalıyım?',
        metin: 'Her turun sayfasında "yanınıza alın" listesi vardır. Genel kural: güneş kremi, şapka, su ve rahat ayakkabı. Tekne turlarında havlu ve mayo.',
      },
      {
        baslik: 'Özel tur ayarlıyor musunuz?',
        metin: 'Çoğu turun size özel versiyonu ayarlanabilir. Tarih ve kişi sayısıyla birlikte yazın, fiyat verelim.',
      },
      {
        baslik: 'Hamileyim veya bir sağlık durumum var. Katılabilir miyim?',
        metin: 'Tura göre değişir. Rafting, ATV, dalış ve yamaç paraşütü gibi turlarda kısıtlar vardır ve tur sayfasında yazar. Emin değilseniz rezervasyondan önce yazın, birlikte bakalım.',
      },
      {
        baslik: 'Tekerlekli sandalye ile katılım mümkün mü?',
        metin: 'Tura göre değişir. Bazı güzergâhlar uygundur, bazıları değildir. Hangi turu düşündüğünüzü yazın, dürüstçe söyleyelim.\n\n*Sorunuz burada yok mu?* → WhatsApp\'tan yazın [buton]',
      },
    ],
    en: [
      {
        baslik: 'How do I book?',
        metin: 'Fill in the form on the tour page and tap the WhatsApp button. Your message opens pre-written; just send it. We check availability and reply the same day.',
      },
      {
        baslik: 'Do I need to pay a deposit?',
        metin: 'No. We take no payment in advance. Your booking is confirmed by message and you pay on the day of the tour.',
      },
      {
        baslik: 'How do I pay?',
        metin: 'On the day of the tour, in cash or — depending on the tour — by card. Your confirmation message will say which options apply. Euros, dollars and lira are accepted.',
      },
      {
        baslik: 'Do you pick up from hotels?',
        metin: 'On most tours, yes. If the tour page shows the "hotel pickup included" badge and your hotel is on the route, you\'ll be picked up. Each tour page lists the pickup areas.',
      },
      {
        baslik: 'When do I find out my pickup time?',
        metin: 'The exact time is sent by WhatsApp the evening before the tour. It depends on your hotel\'s location.',
      },
      {
        baslik: 'What if I want to cancel?',
        metin: 'Day tours: free up to 24 hours before departure. Overnight tours: up to 72 hours. One message is enough — details on the cancellation policy page.',
      },
      {
        baslik: 'What happens in bad weather?',
        metin: 'If conditions make the tour unsafe, we cancel it and tell you by the evening before at the latest. You pay nothing; we can move you to another day.',
      },
      {
        baslik: 'How do children\'s prices work?',
        metin: 'Ages 0–2 free. Ages 3–6 and 7–11 get discounted prices; the rates vary by tour and are shown on each tour page. From age 12, adult price applies.',
      },
      {
        baslik: 'What language are the tours in?',
        metin: 'Our WhatsApp support covers six languages: Turkish, English, Russian, German, Polish and Romanian. The guiding language on the day varies by tour — we\'ll tell you which languages are available when you book.',
      },
      {
        baslik: 'What should I bring?',
        metin: 'Each tour page has a "bring with you" list. As a rule: sunscreen, a hat, water and comfortable shoes. For boat tours, a towel and swimwear.',
      },
      {
        baslik: 'Do you arrange private tours?',
        metin: 'Most tours can be arranged as private. Send us the date and number of people and we\'ll quote a price.',
      },
      {
        baslik: 'I\'m pregnant / have a medical condition. Can I join?',
        metin: 'It depends on the tour. Rafting, ATV, diving and paragliding have restrictions, listed on each tour page. If unsure, write to us before booking and we\'ll look at it together.',
      },
      {
        baslik: 'Is wheelchair access possible?',
        metin: 'It depends on the tour. Some routes are suitable, others aren\'t. Tell us which tour you have in mind and we\'ll give you an honest answer.\n\n*Didn\'t find your question?* → Write on WhatsApp [button]',
      },
    ],
    ru: [
      {
        baslik: 'Как забронировать?',
        metin: 'Заполните форму на странице тура и нажмите кнопку WhatsApp. Сообщение откроется уже готовым — просто отправьте его. Мы проверим наличие мест и ответим в тот же день.',
      },
      {
        baslik: 'Нужна ли предоплата?',
        metin: 'Нет. Мы не берём никаких платежей заранее. Бронирование подтверждается сообщением, а платите вы в день тура.',
      },
      {
        baslik: 'Как проходит оплата?',
        metin: 'В день тура — наличными или, в зависимости от тура, картой. Доступные варианты будут указаны в подтверждении. Принимаются евро, доллары и лиры.',
      },
      {
        baslik: 'Забираете ли вы из отеля?',
        metin: 'На большинстве туров — да. Если на странице тура есть отметка «трансфер из отеля включён» и ваш отель на маршруте, вас заберут. Районы трансфера перечислены на странице каждого тура.',
      },
      {
        baslik: 'Когда я узнаю время трансфера?',
        metin: 'Точное время придёт в WhatsApp вечером накануне тура. Оно зависит от расположения вашего отеля.',
      },
      {
        baslik: 'Если я захочу отменить?',
        metin: 'Однодневные туры — бесплатно за 24 часа до начала, туры с ночёвкой — за 72 часа. Достаточно одного сообщения. Подробности — на странице условий отмены.',
      },
      {
        baslik: 'Что будет в плохую погоду?',
        metin: 'Если условия делают тур небезопасным, мы отменяем его сами и сообщаем не позднее вечера накануне. Вы ничего не платите; можем перенести на другой день.',
      },
      {
        baslik: 'Как считаются детские цены?',
        metin: '0–2 года — бесплатно. Для 3–6 и 7–11 лет действуют скидки; они зависят от тура и указаны на его странице. С 12 лет — взрослая цена.',
      },
      {
        baslik: 'На каком языке проходят туры?',
        metin: 'Наша поддержка в WhatsApp — на шести языках: турецком, английском, русском, немецком и польском. Язык гида в день тура зависит от конкретного тура — при бронировании мы скажем, какие языки доступны.',
      },
      {
        baslik: 'Что взять с собой?',
        metin: 'На странице каждого тура есть список «возьмите с собой». Общее правило: солнцезащитный крем, головной убор, вода и удобная обувь. На морские туры — полотенце и купальник.',
      },
      {
        baslik: 'Организуете ли индивидуальные туры?',
        metin: 'Большинство туров можно провести в индивидуальном формате. Напишите дату и количество человек — назовём цену.',
      },
      {
        baslik: 'Я беременна / у меня есть заболевание. Могу ли я участвовать?',
        metin: 'Зависит от тура. На рафтинге, квадроциклах, дайвинге и параплане есть ограничения — они указаны на страницах туров. Если сомневаетесь, напишите нам до бронирования, разберёмся вместе.',
      },
      {
        baslik: 'Возможно ли участие на инвалидной коляске?',
        metin: 'Зависит от тура. Некоторые маршруты подходят, некоторые — нет. Напишите, какой тур вы рассматриваете, и мы ответим честно.\n\n*Не нашли свой вопрос?* → Напишите в WhatsApp [кнопка]',
      },
    ],
    de: [
      {
        baslik: 'Wie buche ich?',
        metin: 'Füllen Sie das Formular auf der Tourseite aus und tippen Sie auf den WhatsApp-Button. Ihre Nachricht öffnet sich fertig vorgeschrieben — einfach absenden. Wir prüfen die Verfügbarkeit und antworten am selben Tag.',
      },
      {
        baslik: 'Muss ich eine Anzahlung leisten?',
        metin: 'Nein. Wir nehmen keinerlei Vorauszahlung. Ihre Buchung wird per Nachricht bestätigt, bezahlt wird am Tag der Tour.',
      },
      {
        baslik: 'Wie bezahle ich?',
        metin: 'Am Tag der Tour, bar oder — je nach Tour — mit Karte. Welche Optionen gelten, steht in Ihrer Bestätigung. Euro, Dollar und Lira werden akzeptiert.',
      },
      {
        baslik: 'Holen Sie vom Hotel ab?',
        metin: 'Bei den meisten Touren ja. Zeigt die Tourseite das Zeichen „Hotelabholung inklusive" und liegt Ihr Hotel auf der Route, werden Sie abgeholt. Die Abholgebiete sind auf jeder Tourseite aufgeführt.',
      },
      {
        baslik: 'Wann erfahre ich meine Abholzeit?',
        metin: 'Die genaue Uhrzeit erhalten Sie am Vorabend der Tour per WhatsApp. Sie richtet sich nach der Lage Ihres Hotels.',
      },
      {
        baslik: 'Was, wenn ich stornieren möchte?',
        metin: 'Tagestouren: kostenlos bis 24 Stunden vor Abfahrt. Übernachtungstouren: bis 72 Stunden. Eine Nachricht genügt — Details auf der Seite Stornierungsbedingungen.',
      },
      {
        baslik: 'Was passiert bei schlechtem Wetter?',
        metin: 'Machen die Bedingungen die Tour unsicher, sagen wir sie ab und informieren Sie spätestens am Vorabend. Sie zahlen nichts; auf Wunsch verschieben wir auf einen anderen Tag.',
      },
      {
        baslik: 'Wie funktionieren Kinderpreise?',
        metin: '0–2 Jahre kostenlos. Für 3–6 und 7–11 Jahre gelten ermäßigte Preise; sie variieren je nach Tour und stehen auf der jeweiligen Tourseite. Ab 12 Jahren gilt der Erwachsenenpreis.',
      },
      {
        baslik: 'In welcher Sprache finden die Touren statt?',
        metin: 'Unser WhatsApp-Support: Türkisch, Englisch, Russisch, Deutsch, Polnisch, Rumänisch. Die Sprache der Reiseleitung am Tourtag hängt von der Tour ab — bei der Buchung sagen wir Ihnen, welche Sprachen verfügbar sind.',
      },
      {
        baslik: 'Was sollte ich mitbringen?',
        metin: 'Jede Tourseite hat eine Liste „Bitte mitbringen". Grundregel: Sonnencreme, Kopfbedeckung, Wasser, bequeme Schuhe. Bei Bootstouren zusätzlich Handtuch und Badesachen.',
      },
      {
        baslik: 'Organisieren Sie private Touren?',
        metin: 'Die meisten Touren sind auch privat möglich. Schreiben Sie uns Datum und Personenzahl — wir nennen Ihnen den Preis.',
      },
      {
        baslik: 'Ich bin schwanger / habe eine Erkrankung. Kann ich teilnehmen?',
        metin: 'Das hängt von der Tour ab. Rafting, Quad, Tauchen und Paragliding haben Einschränkungen, die auf den Tourseiten stehen. Im Zweifel schreiben Sie uns vor der Buchung — wir klären es gemeinsam.',
      },
      {
        baslik: 'Ist die Teilnahme mit Rollstuhl möglich?',
        metin: 'Je nach Tour. Manche Strecken sind geeignet, andere nicht. Nennen Sie uns die Tour, die Sie im Blick haben — Sie bekommen eine ehrliche Antwort.\n\n*Ihre Frage war nicht dabei?* → Schreiben Sie uns auf WhatsApp [Button]',
      },
    ],
    pl: [
      {
        baslik: 'Jak zarezerwować?',
        metin: 'Wypełnij formularz na stronie wycieczki i kliknij przycisk WhatsApp. Wiadomość otworzy się gotowa — wystarczy ją wysłać. Sprawdzimy dostępność i odpowiemy tego samego dnia.',
      },
      {
        baslik: 'Czy muszę wpłacić zaliczkę?',
        metin: 'Nie. Nie pobieramy żadnych płatności z góry. Rezerwację potwierdzamy wiadomością, a płacisz w dniu wycieczki.',
      },
      {
        baslik: 'Jak zapłacę?',
        metin: 'W dniu wycieczki, gotówką lub — zależnie od wycieczki — kartą. Dostępne opcje będą podane w potwierdzeniu. Przyjmujemy euro, dolary i liry.',
      },
      {
        baslik: 'Czy odbieracie z hotelu?',
        metin: 'Na większości wycieczek tak. Jeśli na stronie wycieczki jest oznaczenie „odbiór z hotelu w cenie", a Twój hotel jest na trasie — odbierzemy Cię. Rejony odbioru są wypisane na stronie każdej wycieczki.',
      },
      {
        baslik: 'Kiedy poznam godzinę odbioru?',
        metin: 'Dokładną godzinę wyślemy na WhatsAppie wieczorem dzień przed wycieczką. Zależy od położenia Twojego hotelu.',
      },
      {
        baslik: 'A jeśli będę chciał anulować?',
        metin: 'Wycieczki jednodniowe: bezpłatnie do 24 godzin przed wyjazdem. Z noclegiem: do 72 godzin. Wystarczy jedna wiadomość — szczegóły na stronie zasad anulowania.',
      },
      {
        baslik: 'Co przy złej pogodzie?',
        metin: 'Jeśli warunki sprawiają, że wycieczka jest niebezpieczna, odwołujemy ją i informujemy najpóźniej wieczorem dzień wcześniej. Nic nie płacisz; możemy przenieść na inny dzień.',
      },
      {
        baslik: 'Jak działają ceny dla dzieci?',
        metin: '0–2 lata bezpłatnie. Dla 3–6 i 7–11 lat obowiązują zniżki; zależą od wycieczki i są podane na jej stronie. Od 12 lat obowiązuje cena dla dorosłych.',
      },
      {
        baslik: 'W jakim języku są wycieczki?',
        metin: 'Nasze wsparcie na WhatsAppie: turecki, angielski, rosyjski, niemiecki, polski i rumuński. Język przewodnika w dniu wycieczki zależy od konkretnej wycieczki — przy rezerwacji powiemy, jakie języki są dostępne.',
      },
      {
        baslik: 'Co zabrać ze sobą?',
        metin: 'Na stronie każdej wycieczki jest lista „zabierz ze sobą". Zasada ogólna: krem z filtrem, nakrycie głowy, woda i wygodne buty. Na rejsy — ręcznik i strój kąpielowy.',
      },
      {
        baslik: 'Organizujecie wycieczki prywatne?',
        metin: 'Większość wycieczek można zorganizować prywatnie. Napisz termin i liczbę osób — podamy cenę.',
      },
      {
        baslik: 'Jestem w ciąży / mam problem zdrowotny. Czy mogę jechać?',
        metin: 'Zależy od wycieczki. Rafting, quady, nurkowanie i paralotnia mają ograniczenia — są podane na stronach wycieczek. W razie wątpliwości napisz przed rezerwacją, sprawdzimy razem.',
      },
      {
        baslik: 'Czy możliwy jest udział na wózku?',
        metin: 'Zależy od wycieczki. Niektóre trasy są dostępne, inne nie. Napisz, którą wycieczkę masz na myśli — odpowiemy szczerze.\n\n*Nie znalazłeś swojego pytania?* → Napisz na WhatsAppie [przycisk]',
      },
    ],
    ro: [
      {
        baslik: 'Cum fac o rezervare?',
        metin: 'Completați formularul de pe pagina excursiei și apăsați butonul WhatsApp. Mesajul se deschide deja scris — nu trebuie decât să îl trimiteți. Verificăm disponibilitatea și răspundem în aceeași zi.',
      },
      {
        baslik: 'Trebuie să plătesc un avans?',
        metin: 'Nu. Nu percepem avans și nici garanție. Rezervarea se confirmă prin mesaj, iar plata se face în ziua excursiei.',
      },
      {
        baslik: 'Cum se face plata?',
        metin: 'În ziua excursiei — numerar sau cu cardul, în funcție de excursie. Opțiunile disponibile sunt indicate în mesajul de confirmare. Acceptăm euro, dolari și lire turcești. Nu adăugăm comisioane și nu percepem taxe de schimb valutar.',
      },
      {
        baslik: 'Preluați de la hotel?',
        metin: 'La majoritatea excursiilor, da. Dacă pe pagina excursiei apare marcajul „preluare de la hotel inclusă", iar hotelul dumneavoastră se află pe traseu, veți fi preluat. Pe fiecare pagină sunt enumerate zonele deservite: Lara, Konyaaltı, Kemer, Belek, Side, Alanya, Manavgat.',
      },
      {
        baslik: 'Când aflu ora de preluare?',
        metin: 'Ora exactă o trimitem pe WhatsApp în seara precedentă. Aceasta depinde de amplasarea hotelului dumneavoastră.',
      },
      {
        baslik: 'Ce se întâmplă dacă trebuie să anulez?',
        metin: 'Excursii de o zi: gratuit până cu 24 de ore înainte. Excursii cu cazare: până cu 72 de ore înainte. Este suficient un singur mesaj, fără rețineri. Detalii pe pagina cu condițiile de anulare.',
      },
      {
        baslik: 'Ce se întâmplă dacă vremea este rea?',
        metin: 'Dacă condițiile fac excursia nesigură, o anulăm și vă anunțăm cel târziu în seara precedentă. Nu plătiți nimic; la cerere mutăm excursia în altă zi.',
      },
      {
        baslik: 'Cum se calculează prețurile pentru copii?',
        metin: 'Copiii până în 2 ani — gratuit. Pentru 3–6 ani și 7–11 ani se aplică reduceri; procentul depinde de excursie și este indicat pe pagina acesteia. De la 12 ani se aplică tariful de adult. Indicați vârsta copiilor la rezervare și calculăm imediat suma exactă.',
      },
      {
        baslik: 'Ce include exact prețul?',
        metin: 'La fiecare excursie avem două liste separate: „inclus în preț" și „se plătește separat". De obicei sunt incluse transportul, preluarea de la hotel și însoțirea; biletele de intrare și băuturile se plătesc adesea separat. La fața locului nu apar costuri neașteptate.',
      },
      {
        baslik: 'În ce limbă se desfășoară excursiile?',
        metin: 'Asistența pe WhatsApp este disponibilă în șase limbi: turcă, engleză, rusă, germană, poloneză și română. Limba de ghidaj în ziua excursiei depinde de excursia respectivă. La rezervare vă spunem imediat ce limbi sunt disponibile la data aleasă.',
      },
      {
        baslik: 'Ce trebuie să iau cu mine?',
        metin: 'Pe pagina fiecărei excursii există o listă „ce să luați cu dumneavoastră". Regula generală: cremă de protecție solară, pălărie, apă și încălțăminte comodă. La excursiile pe mare, prosop și costum de baie. Pentru vizitarea moscheilor, umerii și genunchii acoperiți.',
      },
      {
        baslik: 'Organizați excursii private?',
        metin: 'Majoritatea excursiilor pot fi organizate în regim privat. Scrieți-ne data și numărul de persoane și vă comunicăm prețul.',
      },
      {
        baslik: 'Sunt însărcinată / am o problemă de sănătate. Pot participa?',
        metin: 'Depinde de excursie. Raftingul, ATV-urile, scufundările și parapanta au restricții, indicate pe paginile acestor excursii. Dacă aveți îndoieli, scrieți-ne înainte de rezervare.',
      },
      {
        baslik: 'Este posibilă participarea în scaun cu rotile?',
        metin: 'Depinde de excursie. Unele trasee sunt potrivite, altele nu. Spuneți-ne ce excursie vă interesează și vă răspundem sincer.\n\n*Nu găsiți întrebarea dumneavoastră?* → Scrieți-ne pe WhatsApp [buton]',
      },
    ],
  },
  iletisim: {
    tr: [
      {
        baslik: 'En hızlı yol: WhatsApp',
        metin: 'Sorunuzu yazın, aynı gün cevap alın.',
      },
      {
        baslik: 'Saatler',
        metin: 'Her gün 08:00 – 22:00. 22:00\'den sonra gelen mesajlar sabah 08:00\'de sırayla yanıtlanır.',
      },
      {
        baslik: 'Diller',
        metin: 'Türkçe · English · Русский · Deutsch · Polski Hangi dilde yazarsanız o dilde cevap alırsınız.',
      },
      {
        baslik: 'Telefon',
        metin: '[TELEFON] — WhatsApp ile aynı numara. Aramayı tercih ederseniz aynı saatlerde ulaşabilirsiniz.',
      },
      {
        baslik: 'E-posta',
        metin: '[E-POSTA] — acil olmayan konular için. Dönüş bir iş gününü bulabilir; hızlı cevap için WhatsApp\'ı kullanın.',
      },
      {
        baslik: 'Şirket bilgileri',
        metin: '[ŞİRKET UNVANI] · [ADRES] · [VERGİ] · [TÜRSAB NO]',
      },
    ],
    en: [
      {
        baslik: 'The fastest way: WhatsApp',
        metin: 'Write your question, get an answer the same day.',
      },
      {
        baslik: 'Hours',
        metin: 'Every day, 08:00 – 22:00. Messages received after 22:00 are answered from 08:00 the next morning, in order.',
      },
      {
        baslik: 'Languages',
        metin: 'Türkçe · English · Русский · Deutsch · Polski Write in any of them; you\'ll get a reply in the same language.',
      },
      {
        baslik: 'Phone',
        metin: '[TELEFON] — same number as WhatsApp. If you prefer calling, we\'re available during the same hours.',
      },
      {
        baslik: 'Email',
        metin: '[E-POSTA] — for non-urgent matters. Replies can take up to one business day; for a quick answer, use WhatsApp.',
      },
      {
        baslik: 'Company details',
        metin: '[ŞİRKET UNVANI] · [ADRES] · [VERGİ] · [TÜRSAB NO]',
      },
    ],
    ru: [
      {
        baslik: 'Самый быстрый способ — WhatsApp',
        metin: 'Напишите вопрос — ответим в тот же день.',
      },
      {
        baslik: 'Часы работы',
        metin: 'Ежедневно с 08:00 до 22:00. На сообщения, полученные после 22:00, мы отвечаем с 08:00 следующего утра, по порядку.',
      },
      {
        baslik: 'Языки',
        metin: 'Türkçe · English · Русский · Deutsch · Polski Пишите на любом из них — ответим на том же языке.',
      },
      {
        baslik: 'Телефон',
        metin: '[TELEFON] — тот же номер, что и WhatsApp. Если удобнее позвонить, мы доступны в те же часы.',
      },
      {
        baslik: 'Электронная почта',
        metin: '[E-POSTA] — для несрочных вопросов. Ответ может занять до одного рабочего дня; для быстрого ответа пишите в WhatsApp.',
      },
      {
        baslik: 'Реквизиты компании',
        metin: '[ŞİRKET UNVANI] · [ADRES] · [VERGİ] · [TÜRSAB NO]',
      },
    ],
    de: [
      {
        baslik: 'Der schnellste Weg: WhatsApp',
        metin: 'Schreiben Sie Ihre Frage — Antwort am selben Tag.',
      },
      {
        baslik: 'Erreichbarkeit',
        metin: 'Täglich von 08:00 bis 22:00 Uhr. Nachrichten nach 22:00 Uhr werden ab 08:00 Uhr am nächsten Morgen der Reihe nach beantwortet.',
      },
      {
        baslik: 'Sprachen',
        metin: 'Türkçe · English · Русский · Deutsch · Polski Schreiben Sie in einer dieser Sprachen — Sie erhalten die Antwort in derselben.',
      },
      {
        baslik: 'Telefon',
        metin: '[TELEFON] — dieselbe Nummer wie WhatsApp. Wenn Sie lieber anrufen: zu denselben Zeiten erreichbar.',
      },
      {
        baslik: 'E-Mail',
        metin: '[E-POSTA] — für nicht dringende Anliegen. Die Antwort kann bis zu einem Werktag dauern; schneller geht es per WhatsApp.',
      },
      {
        baslik: 'Firmendaten',
        metin: '[ŞİRKET UNVANI] · [ADRES] · [VERGİ] · [TÜRSAB NO]',
      },
    ],
    pl: [
      {
        baslik: 'Najszybsza droga: WhatsApp',
        metin: 'Napisz pytanie — odpowiemy tego samego dnia.',
      },
      {
        baslik: 'Godziny',
        metin: 'Codziennie od 08:00 do 22:00. Na wiadomości po 22:00 odpowiadamy od 08:00 rano, po kolei.',
      },
      {
        baslik: 'Języki',
        metin: 'Türkçe · English · Русский · Deutsch · Polski Napisz w dowolnym z nich — odpowiemy w tym samym języku.',
      },
      {
        baslik: 'Telefon',
        metin: '[TELEFON] — ten sam numer co WhatsApp. Jeśli wolisz zadzwonić, jesteśmy dostępni w tych samych godzinach.',
      },
      {
        baslik: 'E-mail',
        metin: '[E-POSTA] — do spraw niepilnych. Odpowiedź może zająć do jednego dnia roboczego; szybciej będzie na WhatsAppie.',
      },
      {
        baslik: 'Dane firmy',
        metin: '[ŞİRKET UNVANI] · [ADRES] · [VERGİ] · [TÜRSAB NO]',
      },
    ],
    ro: [
      {
        baslik: 'Cea mai rapidă cale: WhatsApp',
        metin: 'Scrieți întrebarea, primiți răspuns în aceeași zi.',
      },
      {
        baslik: 'Program',
        metin: 'Zilnic, între 08:00 și 22:00 (ora locală, Antalya).\n\nMesajele primite după ora 22:00 sunt procesate în ordine începând cu ora 08:00 a doua zi.',
      },
      {
        baslik: 'Limbi',
        metin: 'Türkçe · English · Русский · Deutsch · Polski · Română\n\nÎn ce limbă scrieți, în aceeași limbă răspundem. Asistență în limba română disponibilă în același interval orar.',
      },
      {
        baslik: 'Telefon',
        metin: '[TELEFON] — același număr ca pe WhatsApp. Dacă preferați să sunați, suntem disponibili în același interval.',
      },
      {
        baslik: 'E-mail',
        metin: '[E-POSTA] — pentru chestiuni care nu sunt urgente. Răspunsul poate dura până la o zi lucrătoare; pentru un răspuns rapid folosiți WhatsApp.',
      },
      {
        baslik: 'Ce este util să menționați',
        metin: 'Ca să vă putem da prețul exact din prima: denumirea excursiei, data dorită, numărul de adulți și copii (cu vârsta) și numele hotelului sau cartierul.',
      },
      {
        baslik: 'Datele firmei',
        metin: '[ŞİRKET UNVANI] [ADRES] [VERGİ DAİRESİ / NO] [TÜRSAB BELGE NO]',
      },
    ],
  },
};
