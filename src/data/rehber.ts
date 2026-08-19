import type { Cevirili } from '../lib/tipler';

// Rehber sayfaları — EK-1 §5-6. Metinler icerik/ klasöründen alındı.
// Bu sayfalar satış yapmaz, güven kurar. Ton: kısa cümle, ünlem yok.
// [DOĞRULA] işaretli satırlar yayından önce resmî kaynaktan doğrulanır.
//
// metin çok paragraflı: \n\n ile ayrılır, şablon <p>'lere böler.

export interface RehberBolum {
  baslik: Cevirili;
  metin: Cevirili;
}

// Pratik bilgiler — 8 bölüm
export const PRATIK_BOLUMLER: RehberBolum[] = [
  {
    baslik: {
      tr: 'Para ve ödeme',
      en: 'Money and payment',
      ru: 'Деньги и оплата',
      de: 'Geld und Bezahlen',
      pl: 'Pieniądze i płatności',
      ro: 'Bani și plăți',
    },
    metin: {
      tr: 'Resmî para birimi Türk Lirası. Turistik bölgelerde euro ve dolar da kabul edilir, ancak para üstü genellikle TL verilir ve kur çoğu zaman aleyhinize olur. TL ile ödemek neredeyse her zaman daha ucuzdur.\n\nKart hemen her yerde geçer. Pazar tezgâhları ve bazı dolmuşlar nakit ister.\n\nDöviz büroları bankalardan daha iyi kur verir. Havalimanındaki kurlar şehirden belirgin şekilde kötüdür — mecbur kalmadıkça orada bozdurmayın.',
      en: 'The official currency is the Turkish lira. Euros and dollars are widely accepted in tourist areas, but change usually comes back in lira and the rate is rarely in your favour. Paying in lira is almost always cheaper.\n\nCards work nearly everywhere. Market stalls and some dolmuş minibuses want cash.\n\nExchange offices give better rates than banks. Airport rates are noticeably worse than in town — avoid them unless you have to.',
      ru: 'Официальная валюта — турецкая лира. В туристических районах принимают евро и доллары, но сдачу обычно дают лирами, и курс редко бывает в вашу пользу. Платить лирами почти всегда дешевле.\n\nКарты принимают практически везде. Наличные нужны на рынках и в некоторых долмушах.\n\nОбменники дают курс лучше, чем банки. В аэропорту курс заметно хуже, чем в городе, — без необходимости там не меняйте.',
      de: 'Die offizielle Währung ist die Türkische Lira. In touristischen Gegenden werden Euro und Dollar akzeptiert, das Wechselgeld kommt jedoch meist in Lira zurück, und der Kurs ist selten zu Ihren Gunsten. In Lira zu zahlen ist fast immer günstiger.\n\nKarten funktionieren nahezu überall. Marktstände und manche Dolmuş verlangen Bargeld.\n\nWechselstuben bieten bessere Kurse als Banken. Die Kurse am Flughafen sind deutlich schlechter als in der Stadt — wenn möglich, dort nicht tauschen.',
      pl: 'Oficjalną walutą jest lira turecka. W rejonach turystycznych przyjmują euro i dolary, ale resztę zwykle dostaniesz w lirach, a kurs rzadko jest korzystny. Płacenie w lirach prawie zawsze wychodzi taniej.\n\nKarty działają niemal wszędzie. Gotówki potrzebujesz na targach i w niektórych dolmuszach.\n\nKantory dają lepszy kurs niż banki. Kursy na lotnisku są wyraźnie gorsze niż w mieście — wymieniaj tam tylko w ostateczności.',
      ro: 'Moneda oficială este lira turcească. În zonele turistice se acceptă euro și dolari, dar restul se dă de obicei în lire, iar cursul rareori este în favoarea dumneavoastră. Plata în lire este aproape întotdeauna mai avantajoasă.\n\nCardurile funcționează aproape peste tot. Numerarul este util în piețe și în unele microbuze.\n\nCasele de schimb oferă un curs mai bun decât băncile. Cursurile din aeroport sunt vizibil mai slabe decât cele din oraș — nu schimbați acolo decât dacă este necesar.\n\nLa casele de schimb autorizate de obicei nu se percepe comision. Dacă vi se menționează un comision, căutați altă casă de schimb.',
    },
  },
  {
    baslik: {
      tr: 'Bahşiş',
      en: 'Tipping',
      ru: 'Чаевые',
      de: 'Trinkgeld',
      pl: 'Napiwki',
      ro: 'Bacșiș',
    },
    metin: {
      tr: 'Zorunlu değil, ama yaygın. Restoranda hesabın %5–10\'u yeterli. Bazı restoranlar servis ücretini hesaba ekler — fişte "servis" satırı varsa ayrıca bahşiş beklenmez.\n\nTakside tutarı yukarı yuvarlamak yeterli. Otelde valiz taşıyana ve oda temizliğine küçük bir bahşiş naziktir.\n\nTur rehberine bahşiş tamamen memnuniyetinize bağlıdır; beklenti değildir.',
      en: 'Not obligatory, but common. In restaurants, 5–10% of the bill is fine. Some places add a service charge — if you see "servis" on the receipt, no extra tip is expected.\n\nIn taxis, rounding up is enough. A small tip for hotel porters and housekeeping is a kind gesture.\n\nTipping tour guides is entirely up to you; it isn\'t expected.',
      ru: 'Не обязательны, но приняты. В ресторане достаточно 5–10% от счёта. Некоторые заведения включают сервисный сбор — если в чеке есть строка «servis», отдельные чаевые не ожидаются.\n\nВ такси достаточно округлить сумму. Небольшие чаевые носильщику и горничной в отеле — приятный жест.\n\nЧаевые гиду — исключительно по вашему желанию; их никто не ждёт.',
      de: 'Nicht verpflichtend, aber üblich. Im Restaurant sind 5–10 % der Rechnung angemessen. Manche Lokale erheben eine Servicegebühr — steht „servis" auf dem Beleg, wird kein zusätzliches Trinkgeld erwartet.\n\nIm Taxi genügt Aufrunden. Ein kleines Trinkgeld für Gepäckträger und Zimmerreinigung im Hotel ist eine nette Geste.\n\nTrinkgeld für Reiseleiter ist allein Ihre Entscheidung; erwartet wird es nicht.',
      pl: 'Nieobowiązkowe, ale przyjęte. W restauracji wystarczy 5–10% rachunku. Niektóre lokale doliczają opłatę za obsługę — jeśli na paragonie jest pozycja „servis", dodatkowy napiwek nie jest oczekiwany.\n\nW taksówce wystarczy zaokrąglić kwotę. Drobny napiwek dla bagażowego i sprzątaczki w hotelu to miły gest.\n\nNapiwek dla przewodnika zależy wyłącznie od Ciebie; nikt go nie oczekuje.',
      ro: 'Nu este obligatoriu, dar este obișnuit.\n\n| Situație | În mod obișnuit | |---|---| | Restaurant | 5–10% din nota de plată | | Pe bon apare „servis" | bacșișul este deja inclus | | Taxi | rotunjire în sus | | Hotel — bagaje, curățenie | o sumă mică | | Ghid | voluntar, fără așteptări |',
    },
  },
  {
    baslik: {
      tr: 'Ulaşım',
      en: 'Getting around',
      ru: 'Транспорт',
      de: 'Unterwegs in der Stadt',
      pl: 'Poruszanie się',
      ro: 'Transport',
    },
    metin: {
      tr: 'Şehir içinde tramvay ve dolmuş en ucuz yol. Tramvay için Antalyakart gerekir; büfelerden ve istasyon otomatlarından alınır. [DOĞRULA: güncel ücret]\n\nTramvay hattı havalimanına da uğrar. [DOĞRULA: hat ve durak]\n\nTaksiler sarıdır ve taksimetre kullanmak zorundadır. Kısa mesafede "pazarlıklı sabit fiyat" öneren sürücüye taksimetreyi açtırın. Güncel tarifeyi merak ediyorsanız bize yazın.',
      en: 'Within the city, the tram and the dolmuş (a shared minibus on a fixed route) are the cheapest options. The tram requires an Antalyakart, sold at kiosks and station machines. [VERIFY: current fare]\n\nThe tram line also serves the airport. [VERIFY: line and stop]\n\nTaxis are yellow and required to use the meter. If a driver offers a "fixed price" for a short ride, ask for the meter. Curious about current rates? Message us.',
      ru: 'По городу дешевле всего трамвай и долмуш — маршрутка по фиксированному маршруту. Для трамвая нужна карта Antalyakart; продаётся в киосках и автоматах на остановках. [ПРОВЕРИТЬ: актуальный тариф]\n\nТрамвайная линия заходит и в аэропорт. [ПРОВЕРИТЬ: линия и остановка]\n\nТакси — жёлтые, обязаны включать счётчик. Если на короткой поездке водитель предлагает «фиксированную цену», просите включить счётчик. Хотите узнать актуальный тариф — напишите нам.',
      de: 'Innerhalb der Stadt sind Straßenbahn und Dolmuş (Sammelminibus auf fester Route) am günstigsten. Für die Straßenbahn braucht man die Antalyakart, erhältlich an Kiosken und Automaten. [PRÜFEN: aktueller Fahrpreis]\n\nDie Straßenbahnlinie bedient auch den Flughafen. [PRÜFEN: Linie und Haltestelle]\n\nTaxis sind gelb und müssen das Taxameter nutzen. Bietet der Fahrer für eine kurze Strecke einen „Festpreis" an, bestehen Sie auf dem Taxameter. Aktuelle Tarife? Schreiben Sie uns.',
      pl: 'Po mieście najtaniej tramwajem i dolmuszem (wspólny minibus na stałej trasie). Do tramwaju potrzebna jest karta Antalyakart, do kupienia w kioskach i automatach. [SPRAWDŹ: aktualna cena]\n\nLinia tramwajowa dojeżdża też na lotnisko. [SPRAWDŹ: linia i przystanek]\n\nTaksówki są żółte i mają obowiązek jeździć na liczniku. Jeśli kierowca proponuje „stałą cenę" za krótki kurs, poproś o licznik. Aktualne stawki? Napisz do nas.',
      ro: 'Tramvaiul și *dolmuș*-ul (microbuz pe traseu fix) sunt cea mai ieftină modalitate de deplasare prin oraș. Pentru tramvai este nevoie de cardul Antalyakart, care se cumpără de la chioșcuri și de la automatele din stații. [DOĞRULA: prețul actual al biletului/cardului]\n\nLinia de tramvai ajunge și la aeroport. [DOĞRULA: linia și stațiile]\n\nTaxiurile sunt galbene și au obligația de a porni aparatul de taxat. Dacă șoferul propune un „preț fix" pentru o cursă scurtă, cereți aparatul de taxat. Dacă doriți tarifele actuale, scrieți-ne.',
    },
  },
  {
    baslik: {
      tr: 'Sağlık',
      en: 'Health',
      ru: 'Здоровье',
      de: 'Gesundheit',
      pl: 'Zdrowie',
      ro: 'Sănătate',
    },
    metin: {
      tr: 'Eczaneler hafta içi ve cumartesi gündüz açıktır. Her gece ve pazar günü bölgede bir nöbetçi eczane açık kalır; kapalı eczanelerin kapısında o günün nöbetçisi yazar. Bulamazsanız resepsiyona veya bize sorun.\n\nÖzel hastaneler yaygındır; çoğunda İngilizce, Rusça ve Almanca konuşan personel bulunur. Seyahat sağlık sigortanız olduğundan emin olun — sigortasız muayene ciddi tutabilir.\n\nİçme suyu olarak şişe su tercih edilir. Marketlerde çok ucuzdur.',
      en: 'Pharmacies are open weekdays and Saturday daytime. Every night and on Sundays, one duty pharmacy stays open in each area; closed pharmacies post that day\'s duty pharmacy on the door. Can\'t find it? Ask your reception or us.\n\nPrivate hospitals are common, and most have staff speaking English, Russian and German. Make sure you have travel health insurance — uninsured visits can get expensive.\n\nBottled water is the preferred drinking water. It\'s very cheap in supermarkets.',
      ru: 'Аптеки работают в будни и в субботу днём. Каждую ночь и по воскресеньям в районе открыта дежурная аптека; на дверях закрытых аптек висит адрес дежурной. Не нашли — спросите на ресепшене или у нас.\n\nЧастные клиники распространены, в большинстве есть персонал, говорящий по-английски, по-русски и по-немецки. Убедитесь, что у вас есть туристическая страховка: приём без неё может обойтись дорого.\n\nДля питья принято покупать бутилированную воду. В супермаркетах она стоит совсем недорого.',
      de: 'Apotheken haben werktags und samstags tagsüber geöffnet. Jede Nacht und sonntags hält eine Notdienst-Apotheke im Viertel offen; geschlossene Apotheken hängen die Adresse des aktuellen Notdienstes an die Tür. Nicht gefunden? Fragen Sie die Rezeption oder uns.\n\nPrivatkliniken sind verbreitet, meist mit englisch-, russisch- und deutschsprachigem Personal. Stellen Sie sicher, dass Sie eine Auslandskrankenversicherung haben — Behandlungen ohne Versicherung können teuer werden.\n\nZum Trinken wird Flaschenwasser bevorzugt. Im Supermarkt kostet es sehr wenig.',
      pl: 'Apteki są otwarte w dni robocze i w soboty w ciągu dnia. Każdej nocy i w niedziele w okolicy dyżuruje apteka nocna; zamknięte apteki wywieszają na drzwiach adres dyżurnej. Nie możesz znaleźć — zapytaj w recepcji albo nas.\n\nPrywatne kliniki są powszechne, w większości personel mówi po angielsku, rosyjsku i niemiecku. Upewnij się, że masz ubezpieczenie podróżne — wizyta bez niego może sporo kosztować.\n\nDo picia wybiera się wodę butelkowaną. W supermarketach jest bardzo tania.',
      ro: 'Farmaciile sunt deschise în zilele lucrătoare și sâmbăta în timpul zilei. Noaptea și duminica, în fiecare cartier este de gardă o farmacie de noapte (nöbetçi eczane); pe ușile farmaciilor închise este afișată farmacia de gardă din ziua respectivă.\n\nClinicile private sunt răspândite, iar personalul vorbește de obicei engleză, rusă și germană. Faceți-vă neapărat o asigurare de sănătate pentru călătorie — fără ea, costurile unei consultații pot fi ridicate.\n\nPentru băut folosiți apă îmbuteliată. În magazine este foarte ieftină.\n\nMulte medicamente se eliberează în Turcia doar pe bază de rețetă. Dacă luați tratament în mod constant, aduceți medicamentele cu dumneavoastră în cantitate suficientă.',
    },
  },
  {
    baslik: {
      tr: 'Acil durum',
      en: 'Emergencies',
      ru: 'Экстренные случаи',
      de: 'Notfälle',
      pl: 'Nagłe wypadki',
      ro: 'Urgențe',
    },
    metin: {
      tr: '112 — tek numara: ambulans, polis, itfaiye, jandarma. [DOĞRULA]\n\nPasaportunuzu kaybederseniz önce polise, sonra konsolosluğunuza başvurun. Pasaportun fotoğrafı telefonunuzda dursun; işleri hızlandırır.',
      en: '112 — the single number for ambulance, police, fire and gendarmerie. [VERIFY]\n\nIf you lose your passport, go to the police first, then your consulate. A photo of your passport on your phone speeds things up.',
      ru: '112 — единый номер: скорая, полиция, пожарные, жандармерия. [ПРОВЕРИТЬ]\n\nЕсли потеряли паспорт: сначала в полицию, затем в консульство своей страны. Фото паспорта в телефоне заметно ускоряет дело.',
      de: '112 — die einheitliche Nummer für Rettungsdienst, Polizei, Feuerwehr und Gendarmerie. [PRÜFEN]\n\nBei Passverlust: zuerst zur Polizei, dann zum Konsulat Ihres Landes. Ein Foto des Passes auf dem Handy beschleunigt die Abläufe.',
      pl: '112 — jeden numer: pogotowie, policja, straż pożarna, żandarmeria. [SPRAWDŹ]\n\nJeśli zgubisz paszport: najpierw policja, potem konsulat Twojego kraju. Zdjęcie paszportu w telefonie znacznie przyspiesza sprawę.',
      ro: '112 — un singur număr: ambulanță, poliție, pompieri, jandarmerie. [DOĞRULA: de verificat înainte de publicare]\n\nÎn caz de pierdere a pașaportului, mergeți întâi la poliție, apoi la consulatul țării dumneavoastră. O fotografie a pașaportului pe telefon accelerează considerabil procedura.',
    },
  },
  {
    baslik: {
      tr: 'Güneş ve deniz',
      en: 'Sun and sea',
      ru: 'Солнце и море',
      de: 'Sonne und Meer',
      pl: 'Słońce i morze',
      ro: 'Soare și mare',
    },
    metin: {
      tr: 'Mayıs–Eylül arası UV çok yüksektir. En sert saatler 12:00–15:00; gölge ve bol su. Güneş kremi marketlerde de satılır; havalimanı ve otel fiyatları yüksektir.\n\nDeniz suyu yaklaşık: Mayıs 21°, Ağustos 29°, Ekim 25°, Ocak 17°. Ekim sonuna kadar rahat girilir.\n\nKlima ile dışarısı arasındaki fark yazın 15 dereceyi bulur — boğaz ağrısının bir numaralı sebebi. Klimayı 24°\'nin altına düşürmemek iyi fikir.',
      en: 'From May to September, UV is very high. The harshest hours are 12:00–15:00 — shade and plenty of water. Sunscreen is sold in local supermarkets too; airport and hotel prices are high.\n\nSea temperature, roughly: May 21°, August 29°, October 25°, January 17°. Comfortable swimming lasts until late October.\n\nThe gap between air conditioning and the outside can reach 15 degrees in summer — the number one cause of sore throats. Keeping the AC no lower than 24° is a good idea.',
      ru: 'С мая по сентябрь УФ-индекс очень высокий. Самые жёсткие часы — с 12:00 до 15:00: тень и побольше воды. Солнцезащитный крем продаётся и в местных супермаркетах; в аэропорту и отелях он заметно дороже.\n\nТемпература моря, примерно: май 21°, август 29°, октябрь 25°, январь 17°. Комфортно купаться можно до конца октября.\n\nРазница между кондиционером и улицей летом достигает 15 градусов — это главная причина больного горла. Не ставьте кондиционер ниже 24°.',
      de: 'Von Mai bis September ist der UV-Index sehr hoch. Die härtesten Stunden: 12:00–15:00 — Schatten und viel Wasser. Sonnencreme gibt es auch in örtlichen Supermärkten; Flughafen- und Hotelpreise sind hoch.\n\nWassertemperaturen, ungefähr: Mai 21°, August 29°, Oktober 25°, Januar 17°. Angenehmes Baden bis Ende Oktober.\n\nDer Unterschied zwischen Klimaanlage und Außenluft erreicht im Sommer bis zu 15 Grad — Hauptursache für Halsschmerzen. Die Klimaanlage nicht unter 24° stellen.',
      pl: 'Od maja do września indeks UV jest bardzo wysoki. Najostrzejsze godziny to 12:00–15:00 — cień i dużo wody. Krem z filtrem kupisz też w lokalnych supermarketach; na lotnisku i w hotelach jest znacznie droższy.\n\nTemperatura morza, w przybliżeniu: maj 21°, sierpień 29°, październik 25°, styczeń 17°. Komfortowo kąpie się do końca października.\n\nRóżnica między klimatyzacją a dworem sięga latem 15 stopni — to główna przyczyna bólu gardła. Nie ustawiaj klimatyzacji poniżej 24°.',
      ro: 'Din mai până în septembrie, radiația UV este foarte ridicată. Cele mai dure ore sunt 12:00–15:00 — umbră și multă apă. Crema de protecție solară se găsește și aici în magazine; în aeroport și în hoteluri prețurile sunt mari.\n\nTemperatura orientativă a mării: mai 21°, august 29°, octombrie 25°, ianuarie 17°. Se poate face baie confortabil până la sfârșitul lunii octombrie.\n\nVara, diferența dintre aerul condiționat și aerul de afară ajunge la 15 grade — este principala cauză a durerilor în gât pe aici. Nu setați aerul condiționat sub 24°.',
    },
  },
  {
    baslik: {
      tr: 'Kültür ve görgü',
      en: 'Culture and etiquette',
      ru: 'Культура и этикет',
      de: 'Kultur und Umgangsformen',
      pl: 'Kultura i zwyczaje',
      ro: 'Cultură și obiceiuri',
    },
    metin: {
      tr: 'Cami ziyaretinde omuzlar ve dizler kapalı olmalı; başörtüsü çoğu camide girişte verilir. Ayakkabılar girişte çıkarılır. Namaz vakitlerinde ziyaret kısa tutulur.\n\nİnsanların fotoğrafını çekmeden önce izin istemek buradaki görgü kuralıdır — özellikle pazar esnafı ve yaşlılar için.\n\nPlajlarda kıyafet tamamen serbesttir. Şehir merkezinde plaj kıyafetiyle dolaşmak ise yadırganır.',
      en: 'When visiting mosques, shoulders and knees should be covered; headscarves for women are provided at the entrance of most mosques. Shoes come off at the door. Keep visits short during prayer times.\n\nAsking before photographing people is the local custom — especially bazaar sellers and the elderly.\n\nOn the beaches, wear whatever you like. Walking around the city centre in beachwear, though, is frowned upon.',
      ru: 'При посещении мечети плечи и колени должны быть закрыты; платки для женщин в большинстве мечетей выдают на входе. Обувь снимают у дверей. Во время намаза визит лучше сделать коротким.\n\nПрежде чем фотографировать людей, здесь принято спрашивать разрешения — особенно у торговцев на базаре и пожилых людей.\n\nНа пляжах полная свобода в одежде. А вот ходить по центру города в пляжной одежде считается неуместным.',
      de: 'Beim Moscheebesuch sollten Schultern und Knie bedeckt sein; Kopftücher für Frauen werden in den meisten Moscheen am Eingang bereitgestellt. Schuhe werden am Eingang ausgezogen. Während der Gebetszeiten den Besuch kurz halten.\n\nMenschen vor dem Fotografieren um Erlaubnis zu bitten, gehört hier zum guten Ton — besonders bei Basarhändlern und älteren Menschen.\n\nAm Strand gilt völlige Freiheit bei der Kleidung. In Badekleidung durch das Stadtzentrum zu laufen, wird dagegen ungern gesehen.',
      pl: 'Przy zwiedzaniu meczetu ramiona i kolana powinny być zakryte; chusty dla kobiet w większości meczetów dostaniesz przy wejściu. Buty zdejmuje się przy drzwiach. W porach modlitwy wizytę lepiej skrócić.\n\nPytanie o zgodę przed zrobieniem komuś zdjęcia to tutejszy dobry zwyczaj — zwłaszcza wobec sprzedawców na bazarze i osób starszych.\n\nNa plażach pełna swoboda stroju. Spacer po centrum w stroju plażowym jest jednak źle widziany.',
      ro: 'La vizitarea moscheilor, umerii și genunchii trebuie să fie acoperiți; baticurile pentru femei se pun de obicei la dispoziție la intrare. Încălțămintea se scoate la ușă. În timpul rugăciunii, vizita se scurtează.\n\nA cere permisiunea înainte de a fotografia oamenii ține de bunele maniere locale — mai ales în cazul negustorilor din piețe și al persoanelor în vârstă.\n\nAntalya este un oraș turistic și pe plaje există libertate deplină în privința ținutei. Plimbarea prin centrul orașului în ținută de plajă este însă privită cu rezervă.',
    },
  },
  {
    baslik: {
      tr: 'Alışveriş',
      en: 'Shopping',
      ru: 'Покупки',
      de: 'Einkaufen',
      pl: 'Zakupy',
      ro: 'Cumpărături',
    },
    metin: {
      tr: 'Pazarda ve çarşıda pazarlık normaldir, hatta beklenir. Marketlerde ve etiketli mağazalarda yapılmaz.\n\nFişlerinizi saklayın. "Tax Free" logolu mağazalardan alışverişte, çıkışta KDV iadesi alınabilir; havalimanında gümrük onayı gerekir. [DOĞRULA: koşullar ve alt limit]\n\nHaftalık semt pazarları hem en ucuz hem en renkli alışveriştir. Hangi gün nerede kurulduğunu sorabilirsiniz.\n\n*Son güncelleme: [TARİH]* *Burada olmayan bir şey mi lazım?* → WhatsApp\'tan sorun [buton]',
      en: 'Bargaining is normal — even expected — at bazaars and markets. In supermarkets and shops with price tags, it isn\'t done.\n\nKeep your receipts. Purchases at shops with the "Tax Free" logo can qualify for a VAT refund when leaving the country; the process requires customs approval at the airport. [VERIFY: conditions and minimum amount]\n\nWeekly neighbourhood markets are the cheapest and most colourful places to shop. Ask us which market is on which day.\n\n*Last updated: [TARİH]* *Need something that isn\'t here?* → Ask on WhatsApp [button]',
      ru: 'На базарах и рынках торговаться нормально и даже ожидаемо. В супермаркетах и магазинах с ценниками не торгуются.\n\nСохраняйте чеки. Покупки в магазинах со знаком «Tax Free» дают право на возврат НДС при выезде из страны; оформление требует отметки таможни в аэропорту. [ПРОВЕРИТЬ: условия и минимальная сумма]\n\nЕженедельные районные рынки — самое дешёвое и самое колоритное место для покупок. Спросите нас, в какой день и где работает рынок.\n\n*Обновлено: [TARİH]* *Не нашли нужного?* → Спросите в WhatsApp [кнопка]',
      de: 'Auf Basaren und Märkten ist Handeln normal, sogar erwartet. In Supermärkten und Geschäften mit Preisschildern wird nicht gehandelt.\n\nBewahren Sie Ihre Belege auf. Einkäufe in Geschäften mit „Tax Free"-Logo berechtigen bei der Ausreise zur Mehrwertsteuer-Rückerstattung; das Verfahren erfordert eine Zollbestätigung am Flughafen. [PRÜFEN: Bedingungen und Mindestbetrag]\n\nDie Wochenmärkte der Stadtviertel sind die günstigste und bunteste Art einzukaufen. Fragen Sie uns, welcher Markt an welchem Tag stattfindet.\n\n*Stand: [TARİH]* *Etwas nicht gefunden?* → Fragen Sie uns auf WhatsApp [Button]',
      pl: 'Na bazarach i targach targowanie się jest normalne, wręcz oczekiwane. W supermarketach i sklepach z metkami się nie targuje.\n\nZachowuj paragony. Zakupy w sklepach z logo „Tax Free" uprawniają do zwrotu VAT przy wyjeździe z kraju; procedura wymaga potwierdzenia celnego na lotnisku. [SPRAWDŹ: warunki i kwota minimalna]\n\nCotygodniowe targi osiedlowe to najtańsze i najbarwniejsze miejsce na zakupy. Zapytaj nas, gdzie i w jaki dzień jest targ.\n\n*Ostatnia aktualizacja: [TARİH]* *Czegoś tu brakuje?* → Zapytaj na WhatsAppie [przycisk]',
      ro: 'În piețe și în bazar, negocierea este normală și chiar așteptată. În supermarketuri și în magazinele cu prețuri afișate nu se negociază.\n\nPăstrați bonurile. Cumpărăturile din magazinele cu sigla „Tax Free" dau dreptul la restituirea TVA la ieșirea din țară; procedura necesită viza vamală la aeroport. [DOĞRULA: condițiile actuale și suma minimă]\n\nPiețele săptămânale de cartier sunt cele mai ieftine și cele mai vii locuri de cumpărături. Întrebați-ne în ce zi este în ce cartier.\n\n*Ultima actualizare: [TARİH]*\n\n*Aveți nevoie de ceva ce nu găsiți aici?* → Întrebați-ne pe WhatsApp [buton]',
    },
  },
];

// Ücretsiz yapılacaklar — 10 madde
export const UCRETSIZ_MADDELER: RehberBolum[] = [
  {
    baslik: {
      tr: 'Kaleiçi sokakları',
      en: 'The streets of Kaleiçi',
      ru: 'Улицы Калеичи',
      de: 'Die Gassen von Kaleiçi',
      pl: 'Uliczki Kaleiçi',
      ro: 'Străduțele din Kaleiçi',
    },
    metin: {
      tr: 'Osmanlı evleri, dar taş sokaklar, begonvil sarkan avlular. Plansız dolaşmak en iyisi — kaybolmak zaten amacın yarısı. Sabah erken saatler hem serin hem sakin.',
      en: 'Ottoman houses, narrow stone lanes, bougainvillea spilling over courtyard walls. Wandering without a plan is the best approach — getting lost is half the point. Early morning is both cooler and quieter.',
      ru: 'Османские дома, узкие каменные переулки, бугенвиллея, свисающая через стены дворов. Лучше всего гулять здесь без плана — заблудиться и есть половина смысла. Раннее утро прохладнее и спокойнее.',
      de: 'Osmanische Häuser, enge Steingassen, Bougainvillea über Hofmauern. Am besten ohne Plan spazieren — sich zu verlaufen ist Teil des Reizes. Früher Morgen ist kühler und ruhiger.\n\nWann: früh morgens oder nach 17 Uhr Wie hin: zu Fuß vom Cumhuriyet-Platz, etwa 5 Minuten',
      pl: 'Osmańskie domy, wąskie kamienne zaułki, bugenwilla przewieszona przez mury dziedzińców. Najlepiej chodzić bez planu — zgubienie się to połowa przyjemności. Wczesny ranek jest chłodniejszy i spokojniejszy.\n\nKoszt: 0 Ile czasu: 1–2 godziny',
      ro: 'Case otomane, ulițe înguste de piatră, bougainvillea revărsată peste zidurile curților. Cel mai bine este să te plimbi fără plan — să te rătăcești face parte din farmec. Dimineața devreme este mai răcoare și mai liniște.\n\nCost: 0 Durată: 1–2 ore',
    },
  },
  {
    baslik: {
      tr: 'Hadrian Kapısı',
      en: 'Hadrian\'s Gate',
      ru: 'Ворота Адриана',
      de: 'Hadrianstor',
      pl: 'Brama Hadriana',
      ro: 'Poarta lui Hadrian',
    },
    metin: {
      tr: 'Roma imparatoru Hadrianus için MS 130\'da dikilen üç kemerli mermer kapı. Kaleiçi\'nin ana girişlerinden biri; içinden geçmek serbest. Kemerlerin altındaki taşlarda antik tekerlek izleri hâlâ görülebilir.',
      en: 'A three-arched marble gate built in 130 AD for the Roman emperor Hadrian. It\'s one of the main entrances to Kaleiçi and you can walk straight through. Look down: ancient cart ruts are still visible in the stones beneath the arches.',
      ru: 'Трёхарочные мраморные ворота, построенные в 130 году н. э. в честь римского императора Адриана. Один из главных входов в Калеичи; пройти через них можно свободно. Посмотрите под ноги: на камнях под арками до сих пор видны колеи от античных повозок.',
      de: 'Ein dreibogiges Marmortor, 130 n. Chr. für Kaiser Hadrian errichtet. Es ist einer der Haupteingänge nach Kaleiçi und frei begehbar. Achten Sie auf den Boden: Unter den Bögen sind noch antike Wagenspuren im Stein zu sehen.\n\nWie hin: an der Atatürk-Straße, Straßenbahnhaltestelle in unmittelbarer Nähe',
      pl: 'Trójłukowa marmurowa brama wzniesiona w 130 r. n.e. dla cesarza Hadriana. To jedno z głównych wejść do Kaleiçi, przejść można swobodnie. Spójrz pod nogi: w kamieniach pod łukami wciąż widać koleiny od antycznych wozów.\n\nKoszt: 0 Ile czasu: 15 minut',
      ro: 'Poartă din marmură cu trei arcade, ridicată în anul 130 d.Hr. pentru împăratul Hadrian. Este una dintre intrările principale în Kaleiçi și se poate trece liber pe sub ea. Priviți în jos: în pietrele de sub arcade se văd încă urmele carelor antice.\n\nCost: 0 Durată: 15 minute',
    },
  },
  {
    baslik: {
      tr: 'Yat Limanı',
      en: 'The old harbour',
      ru: 'Старая гавань',
      de: 'Der alte Hafen',
      pl: 'Stary port',
      ro: 'Portul vechi',
    },
    metin: {
      tr: 'Kaleiçi\'nin altındaki eski Roma limanı. Tekneleri izleyerek çay içmek, falezlerin arasından denize bakmak için. Akşamüstü ışığı fotoğraf için en iyi saattir.',
      en: 'The Roman-era harbour below Kaleiçi. Good for watching the boats over a glass of tea and looking out to sea between the cliffs. Late afternoon light is the best for photographs.',
      ru: 'Римский порт под Калеичи. Хорошее место, чтобы выпить чаю, глядя на лодки, и посмотреть на море между скалами. Свет во второй половине дня — лучший для фотографий.',
      de: 'Der römische Hafen unterhalb von Kaleiçi. Gut für einen Tee mit Blick auf die Boote und aufs Meer zwischen den Felsen. Das Licht am späten Nachmittag ist das beste zum Fotografieren.\n\nWie hin: zu Fuß durch Kaleiçi hinunter, etwa 10 Minuten',
      pl: 'Rzymski port poniżej Kaleiçi. Dobre miejsce, żeby napić się herbaty, patrząc na łodzie, i spojrzeć na morze między skałami. Światło późnym popołudniem jest najlepsze do zdjęć.\n\nKoszt: 0 (herbata osobno, kilka lir) Ile czasu: 1 godzina',
      ro: 'Portul roman de sub Kaleiçi. Un loc bun pentru un ceai privind bărcile și marea printre stânci. Lumina de după-amiază târzie este cea mai potrivită pentru fotografii.\n\nCost: 0 (ceaiul separat, câteva lire) Durată: 1 oră',
    },
  },
  {
    baslik: {
      tr: 'Karaalioğlu Parkı ve Hıdırlık Kulesi',
      en: 'Karaalioğlu Park and Hıdırlık Tower',
      ru: 'Парк Караалиоглу и башня Хыдырлык',
      de: 'Karaalioğlu-Park und Hıdırlık-Turm',
      pl: 'Park Karaalioğlu i wieża Hıdırlık',
      ro: 'Parcul Karaalioğlu și Turnul Hıdırlık',
    },
    metin: {
      tr: 'Falezlerin üstünde geniş bir park; Akdeniz ve Toroslar aynı karede. Parkın ucundaki 2.000 yıllık Hıdırlık Kulesi, şehrin en bilinen gün batımı noktasıdır. Ücretsiz ve her akşam kalabalık — erken gidip yer kapmak gerekir.',
      en: 'A large park on top of the cliffs, with the Mediterranean and the Taurus mountains in the same frame. At the end of the park stands the 2,000-year-old Hıdırlık Tower, the city\'s best-known sunset spot. Free, and busy every evening — go early to get a place.',
      ru: 'Большой парк на вершине скал: Средиземное море и горы Тавр в одном кадре. В конце парка стоит башня Хыдырлык, которой около 2000 лет — самое известное в городе место для встречи заката. Бесплатно и каждый вечер многолюдно; приходите заранее, чтобы занять место.',
      de: 'Ein großer Park auf den Klippen, Mittelmeer und Taurusgebirge im selben Bild. Am Ende des Parks steht der rund 2.000 Jahre alte Hıdırlık-Turm, der bekannteste Sonnenuntergangsplatz der Stadt. Kostenlos und jeden Abend gut besucht — früh kommen lohnt sich.\n\nWann: etwa eine Stunde vor Sonnenuntergang',
      pl: 'Duży park na szczycie klifów: Morze Śródziemne i góry Taurus w jednym kadrze. Na końcu parku stoi licząca około 2000 lat wieża Hıdırlık — najbardziej znane w mieście miejsce na zachód słońca. Bezpłatnie i co wieczór tłoczno; przyjdź wcześniej, żeby zająć miejsce.\n\nKoszt: 0 Ile czasu: 1 godzina, najlepiej przed zachodem',
      ro: 'Parc mare pe faleză: Marea Mediterană și munții Taurus în același cadru. La capătul parcului se află Turnul Hıdırlık, vechi de aproximativ 2.000 de ani — cel mai cunoscut loc din oraș pentru apus. Gratuit și aglomerat în fiecare seară; veniți mai devreme ca să prindeți loc.\n\nCost: 0 Durată: 1 oră, ideal înainte de apus',
    },
  },
  {
    baslik: {
      tr: 'Konyaaltı sahil yürüyüşü',
      en: 'The Konyaaltı seafront walk',
      ru: 'Набережная Коньяалты',
      de: 'Strandpromenade Konyaaltı',
      pl: 'Promenada Konyaaltı',
      ro: 'Promenada Konyaaltı',
    },
    metin: {
      tr: 'Falezlerin dibinden başlayıp kilometrelerce uzanan düzenlenmiş sahil. Yürüyüş ve bisiklet yolları, çimler, plaj. Plaja giriş ücretsizdir; şezlong kiralamak isterseniz ücretlidir.',
      en: 'A landscaped promenade running for kilometres from the foot of the cliffs. Walking and cycling paths, lawns, beach. Access to the beach is free; sunbeds cost extra.',
      ru: 'Благоустроенная набережная, тянущаяся на несколько километров от подножия скал. Пешеходные и велосипедные дорожки, газоны, пляж. Вход на пляж бесплатный; аренда шезлонга оплачивается отдельно.',
      de: 'Eine mehrere Kilometer lange, angelegte Promenade am Fuß der Klippen. Geh- und Radwege, Rasenflächen, Strand. Der Strandzugang ist frei; Liegen kosten extra.\n\nWie hin: Straßenbahn bis Konyaaltı, dann kurzer Fußweg',
      pl: 'Zagospodarowana promenada ciągnąca się kilometrami od podnóża klifów. Ścieżki spacerowe i rowerowe, trawniki, plaża. Wejście na plażę bezpłatne; leżaki płatne osobno.\n\nKoszt: 0 (leżak dodatkowo płatny) Ile czasu: 1–3 godziny',
      ro: 'Promenadă amenajată care se întinde pe kilometri de la baza falezei. Alei pentru plimbare și ciclism, spații verzi, plajă. Accesul pe plajă este gratuit; șezlongurile se plătesc separat.\n\nCost: 0 (șezlongul se plătește separat) Durată: 1–3 ore',
    },
  },
  {
    baslik: {
      tr: 'Düden Şelalesi\'nin denize döküldüğü nokta',
      en: 'Where the Düden waterfall meets the sea',
      ru: 'Место, где водопад Дюден впадает в море',
      de: 'Wo der Düden-Wasserfall ins Meer stürzt',
      pl: 'Miejsce, gdzie wodospad Düden wpada do morza',
      ro: 'Locul în care cascada Düden se varsă în mare',
    },
    metin: {
      tr: 'Lara yolu üzerindeki falezlerden şelale doğrudan denize dökülür. Seyir alanından izlemek ücretsizdir. Işık öğleden sonra şelalenin üstüne gelir — fotoğraf için en iyi zaman.\n\n[DOĞRULA: seyir parkının güncel giriş politikası]',
      en: 'On the cliffs along the Lara road, the waterfall drops straight into the Mediterranean. Watching from the viewing area is free. The light hits the falls in the afternoon — that\'s the best time for photographs.\n\n[DOĞRULA: current entry policy for the viewing park]',
      ru: 'На скалах вдоль дороги на Лару водопад падает прямо в Средиземное море. Смотровая площадка бесплатна. Свет попадает на водопад после полудня — это лучшее время для съёмки.\n\n[DOĞRULA: актуальные правила входа в смотровой парк]',
      de: 'An den Klippen entlang der Lara-Straße fällt der Wasserfall direkt ins Mittelmeer. Der Blick von der Aussichtsfläche ist kostenlos. Nachmittags trifft das Licht den Wasserfall — beste Fotozeit.\n\n[DOĞRULA: aktuelle Zugangsregelung des Aussichtsparks]',
      pl: 'Na klifach przy drodze na Larę wodospad spada wprost do Morza Śródziemnego. Punkt widokowy jest bezpłatny. Popołudniowe światło pada wprost na wodospad — najlepsza pora na zdjęcia.\n\n[DOĞRULA: aktualne zasady wstępu do parku widokowego]',
      ro: 'Pe faleza de pe drumul spre Lara, cascada cade direct în Marea Mediterană. Punctul de observație este gratuit. Lumina de după-amiază cade direct pe cascadă — cel mai bun moment pentru fotografii.\n\n[DOĞRULA: regulile actuale de acces în parcul de observație]',
    },
  },
  {
    baslik: {
      tr: 'Saat Kulesi ve Kale Kapısı çevresi',
      en: 'The Clock Tower and Kale Kapısı',
      ru: 'Часовая башня и Калекапысы',
      de: 'Uhrturm und Kale Kapısı',
      pl: 'Wieża zegarowa i Kale Kapısı',
      ro: 'Turnul cu Ceas și Kale Kapısı',
    },
    metin: {
      tr: 'Cumhuriyet Meydanı\'ndan Kaleiçi\'ne inen tarihi giriş. Saat Kulesi, Yivli Minare silueti ve meydan hareketi bir arada. Nostaljik tramvayın geçişini buradan izlemek şehrin klasik karelerinden biridir.',
      en: 'The historic entrance leading down from Cumhuriyet Square into Kaleiçi. The Clock Tower, the silhouette of the Yivli Minaret and the bustle of the square all in one place. Watching the nostalgic tram pass through is one of the city\'s classic shots.',
      ru: 'Исторический вход, ведущий с площади Джумхуриет вниз, в Калеичи. Часовая башня, силуэт минарета Йивли и оживление площади — всё в одном месте. Проходящий здесь ретро-трамвай — один из классических городских кадров.',
      de: 'Der historische Zugang vom Cumhuriyet-Platz hinunter nach Kaleiçi. Uhrturm, die Silhouette des Yivli-Minaretts und das Treiben auf dem Platz an einem Ort. Die vorbeifahrende Nostalgie-Straßenbahn gehört zu den klassischen Motiven der Stadt.',
      pl: 'Historyczne wejście prowadzące z placu Cumhuriyet w dół, do Kaleiçi. Wieża zegarowa, sylwetka minaretu Yivli i ruch na placu w jednym miejscu. Przejeżdżający tędy zabytkowy tramwaj to jeden z klasycznych kadrów miasta.\n\nKoszt: 0',
      ro: 'Intrarea istorică ce coboară din Piața Cumhuriyet spre Kaleiçi. Turnul cu Ceas, silueta minaretului Yivli și forfota din piață, toate într-un singur loc. Tramvaiul de epocă ce trece pe aici este unul dintre cadrele clasice ale orașului.\n\nCost: 0',
    },
  },
  {
    baslik: {
      tr: 'Semt pazarları',
      en: 'Neighbourhood markets',
      ru: 'Районные рынки',
      de: 'Stadtteilmärkte',
      pl: 'Bazary dzielnicowe',
      ro: 'Piețele de cartier',
    },
    metin: {
      tr: 'Her semtin haftada bir kurulan pazarı vardır: meyve, baharat, zeytin, peynir, tekstil. Turistik değil, gerçek yerel hayat. Tadımlık ikram pazar kültürünün parçasıdır — çekinmeyin. Hangi gün hangi semtte kurulduğunu sorabilirsiniz.',
      en: 'Every district has a weekly market: fruit, spices, olives, cheese, textiles. Not touristy — this is ordinary local life. Being offered a taste is part of market culture, so don\'t hold back. Ask us which day is which neighbourhood.',
      ru: 'В каждом районе раз в неделю работает рынок: фрукты, специи, оливки, сыр, текстиль. Не туристическое место, а обычная местная жизнь. Угощение на пробу — часть рыночной культуры, не стесняйтесь. Спросите нас, в какой день в каком районе.',
      de: 'Jeder Stadtteil hat einen Wochenmarkt: Obst, Gewürze, Oliven, Käse, Textilien. Nicht touristisch, sondern gewöhnliches Alltagsleben. Zum Probieren angeboten zu bekommen, gehört zur Marktkultur. Fragen Sie uns, an welchem Tag welcher Stadtteil dran ist.\n\nWann: je nach Stadtteil, meist vormittags',
      pl: 'Każda dzielnica ma raz w tygodniu swój bazar: owoce, przyprawy, oliwki, sery, tekstylia. Nie jest to miejsce turystyczne, tylko zwyczajne życie lokalne. Poczęstunek na spróbowanie to część kultury bazarowej — nie krępuj się. Zapytaj nas, w który dzień w której dzielnicy.\n\nKoszt: 0 za wejście',
      ro: 'Fiecare cartier are o piață săptămânală: fructe, condimente, măsline, brânzeturi, textile. Nu este un loc turistic, ci viața locală obișnuită. Să ți se ofere ceva de gustat face parte din cultura pieței — nu vă sfiiți. Întrebați-ne în ce zi este în ce cartier.\n\nCost: 0 la intrare',
    },
  },
  {
    baslik: {
      tr: 'Atatürk Parkı falez yürüyüşü',
      en: 'The Atatürk Park cliff walk',
      ru: 'Прогулка по скалам в парке Ататюрка',
      de: 'Klippenweg im Atatürk-Park',
      pl: 'Spacer po klifach w parku Atatürka',
      ro: 'Plimbarea pe faleză în Parcul Atatürk',
    },
    metin: {
      tr: 'Konyaaltı falezlerinin üstünde, denize paralel uzun bir park. Koşucular, çay bahçeleri, manzara terasları. Gün batımında Konyaaltı\'nın tamamı ayaklarınızın altındadır.',
      en: 'A long park on top of the Konyaaltı cliffs, running parallel to the sea. Runners, tea gardens, viewing terraces. At sunset the whole of Konyaaltı lies below you.',
      ru: 'Длинный парк на вершине скал Коньяалты, идущий параллельно морю. Бегуны, чайные сады, смотровые террасы. На закате весь Коньяалты лежит под вами.',
      de: 'Ein langer Park auf den Klippen von Konyaaltı, parallel zum Meer. Läufer, Teegärten, Aussichtsterrassen. Bei Sonnenuntergang liegt ganz Konyaaltı unter Ihnen.',
      pl: 'Długi park na szczycie klifów Konyaaltı, biegnący równolegle do morza. Biegacze, herbaciarnie, tarasy widokowe. O zachodzie słońca całe Konyaaltı leży u Twoich stóp.\n\nKoszt: 0',
      ro: 'Parc lung pe faleza din Konyaaltı, paralel cu marea. Alergători, ceainării, terase panoramice. La apus, întregul Konyaaltı se întinde sub picioarele dumneavoastră.\n\nCost: 0',
    },
  },
  {
    baslik: {
      tr: 'Mermerli\'den liman manzarası',
      en: 'The harbour view from Mermerli',
      ru: 'Вид на гавань с Мермерли',
      de: 'Hafenblick von Mermerli',
      pl: 'Widok na port z Mermerli',
      ro: 'Priveliștea portului de la Mermerli',
    },
    metin: {
      tr: 'Kaleiçi\'nin denize bakan burnundan eski limanın kuşbakışı görünümü. Manzara noktasına ulaşmak ücretsizdir; hemen altındaki küçük plaj işletmeye aittir ve ücretlidir.\n\nŞehir dışına çıkmak isterseniz turlarımıza bakın.',
      en: 'A bird\'s-eye view of the old harbour from the seaward point of Kaleiçi. Reaching the viewpoint is free; the small beach directly below it is privately run and charges admission.\n\nIf you want to head out of the city, take a look at our tours.',
      ru: 'Панорама старого порта с мыса Калеичи, обращённого к морю. Смотровая точка бесплатна; небольшой пляж прямо под ней принадлежит частному заведению и платный.\n\nЕсли захотите выехать за город, посмотрите наши экскурсии.',
      de: 'Die Altstadt-Landzunge bietet den Blick von oben auf den alten Hafen. Der Aussichtspunkt ist kostenlos; der kleine Strand direkt darunter wird privat betrieben und ist kostenpflichtig.\n\nWenn Sie aus der Stadt hinaus möchten, schauen Sie sich unsere Touren an.',
      pl: 'Panorama starego portu z cypla Kaleiçi zwróconego ku morzu. Punkt widokowy jest bezpłatny; niewielka plaża bezpośrednio poniżej należy do prywatnego lokalu i jest płatna.\n\nKoszt: 0 za punkt widokowy\n\nJeśli chcesz wyjechać poza miasto, zajrzyj do naszych wycieczek.',
      ro: 'Panorama portului vechi de pe promontoriul dinspre mare al cartierului Kaleiçi. Punctul de observație este gratuit; mica plajă de dedesubt aparține unui local privat și se plătește.\n\nCost: 0 pentru punctul de observație\n\nDacă doriți să ieșiți din oraș, aruncați o privire asupra excursiilor noastre.',
    },
  },
];
