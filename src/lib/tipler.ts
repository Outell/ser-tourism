// Veri modeli tipleri — veri-modeli.md ile birebir.
// Operasyon alanları (partner, maliyet_eur, partner_iletisim, ic_notlar)
// kasıtlı olarak yok: onlar Sanity'ye girecek, siteye hiç inmeyecek.

// Sıralama EK-3 §2: TR · EN · RU · DE · PL · RO
export const DILLER = ['tr', 'en', 'ru', 'de', 'pl', 'ro'] as const;
export type Dil = (typeof DILLER)[number];

export type Cevirili = Record<Dil, string>;
export type CeviriliListe = Record<Dil, string[]>;

export interface BookingOption {
  id: string;
  label: Cevirili;
  kod?: string;
  adult_price_eur: number;
  child_price_eur?: number | null;
  infant_price_eur?: number | null;
  adult_age_min?: number | null;
  child_age_min?: number | null;
  child_age_max?: number | null;
  infant_age_min?: number | null;
  infant_age_max?: number | null;
  note?: Cevirili;
}

export interface BookingOptions {
  labels?: {
    experience?: Cevirili;
    option?: Cevirili;
  };
  defaultOptionId?: string;
  options: BookingOption[];
}

export interface Tur {
  id: string;
  kod: string;
  baslik: Cevirili;
  ozet: Cevirili;
  aktif: boolean;
  one_cikan: boolean;

  sure_saat: number | null;
  sure_gun: number | null;
  alinis_saati: string | null;
  donus_saati: string | null;
  gunler: string[];

  fiyat_eur: number;
  adult_price_eur?: number;
  child_price_eur?: number | null;
  adult_age_min?: number | null;
  child_age_min?: number | null;
  child_age_max?: number | null;
  infant_price_eur?: number | null;
  infant_free?: boolean;
  infant_age_min?: number | null;
  infant_age_max?: number | null;
  fiyat_etiketleri?: {
    adult?: Cevirili;
    child?: Cevirili;
    infant?: Cevirili;
  };
  cocuk_indirim_3_6: number;
  cocuk_indirim_7_11: number;
  bebek_ucretsiz_yas: number | null;
  fiyat_notu: Cevirili | null;
  booking_options?: BookingOptions;

  transfer_dahil: boolean;
  transfer_ucreti_eur: number | null;
  kalkis_bolgeleri: string[];
  bulusma_noktasi: Cevirili | null;
  bulusma_koordinat: { lat: number; lng: number } | null;

  min_kisi: number | null;
  max_kisi: number | null;
  min_yas: number | null;
  max_yas: number | null;
  zorluk: 'kolay' | 'orta' | 'zor' | null;
  saglik_uyarisi: Cevirili | null;
  gerekli_esyalar: CeviriliListe | null;

  aciklama: Cevirili;
  program: CeviriliListe;
  dahil_olanlar: CeviriliListe;
  dahil_olmayanlar: CeviriliListe;
  onemli_notlar: CeviriliListe | null;

  sezon: 'tum_yil' | 'sezonluk';
  sezon_baslangic: number | null;
  sezon_bitis: number | null;

  iptal_saat: number;
  iptal_metni: Cevirili | null;
  hava_iptali: boolean;

  kapak: string | null;
  galeri: string[];
  alt_metin: Cevirili | null;
  gorsel_kaynak: 'gecici' | 'operator' | 'kendi_cekimimiz' | null;
  video: string | null;

  kategoriler: string[];
  sehir: string;
  benzer_turlar: string[];

  slug: Cevirili;
  meta_baslik: Cevirili | null;
  meta_aciklama: Cevirili | null;

  // EK-1 alanları
  etiketler: Etiket[];               // planlayıcı eşleştirmesi (TEK — çevrilmez)
  ulasim_suresi_saat: number | null; // mesafe haritası; ulaşım süresi ≠ tur süresi, elle girilir
  haritada_goster: boolean;          // mesafe haritasında düğüm olsun mu
}

export const ETIKETLER = [
  'deniz', 'kultur', 'macera', 'rahatlama',
  'cocuk_dostu', 'tam_gun', 'yarim_gun', 'konaklamali',
] as const;
export type Etiket = (typeof ETIKETLER)[number];

export interface Taksonomi {
  kod: string;
  ad: Cevirili;
  slug: Cevirili;
}

export interface JourneyCoordinate {
  lat: number;
  lng: number;
}

export type JourneyCoordinateStatus = 'demo' | 'verified';

export interface JourneyMapPoint {
  id: string;
  label: Cevirili;
  coordinates: JourneyCoordinate;
  stageIds: string[];
  kind: 'pickup-reference' | 'transfer-demo' | 'adventure-demo' | 'activity-demo' | 'return-demo';
  referencePoint?: boolean;
  coordinateStatus: JourneyCoordinateStatus;
}

export interface JourneyRouteWaypoint {
  coordinates: JourneyCoordinate;
  coordinateStatus: JourneyCoordinateStatus;
}

export interface JourneyMapData {
  coordinateStatus: JourneyCoordinateStatus;
  disclosure: Cevirili;
  pickupReferencePoints: Record<string, JourneyCoordinate>;
  routeWaypoints: JourneyRouteWaypoint[];
  points: JourneyMapPoint[];
  routeLabel: Cevirili;
}

export interface JourneyRange {
  min: number;
  max: number;
}

export interface JourneyPickupZone {
  code: string;
  label: Cevirili;
  coordinates?: JourneyCoordinate;
  estimatedTransferMinutes?: number;
  estimatedDistanceKm?: number;
  availabilityVerified: boolean;
  locationVerified?: boolean;
}

export type JourneyStageType =
  | 'pickup'
  | 'transfer'
  | 'arrival'
  | 'activity'
  | 'meal'
  | 'return';

export type JourneyStageIcon =
  | 'hotel'
  | 'bus'
  | 'buggy'
  | 'raft'
  | 'zipline'
  | 'truck'
  | 'meal';

export interface JourneyStage {
  id: string;
  type: JourneyStageType;
  title: Cevirili;
  description?: Cevirili;
  durationMinutes?: number;
  durationRangeMinutes?: JourneyRange;
  activityDistanceMeters?: JourneyRange;
  distanceKm?: number;
  coordinates?: JourneyCoordinate;
  icon: JourneyStageIcon;
  contentVerified: boolean;
  locationVerified?: boolean;
}

export interface JourneyComparisonMetrics {
  activityCount?: number;
  totalDurationHours?: number;
  transferIncluded?: boolean;
  mealIncluded?: boolean;
  waterActivity?: boolean;
  familyFriendly?: boolean;
  intensity?: 'low' | 'medium' | 'high';
}

export interface TourJourney {
  tourId: string;
  supported: boolean;
  version: 1;
  startMode: 'pickup-zone' | 'hotel-text' | 'fixed-meeting-point';
  mapProvider: 'svg' | 'leaflet-osm';
  pickupZones: JourneyPickupZone[];
  routeStages: JourneyStage[];
  mapData?: JourneyMapData;
  comparisonMetrics?: JourneyComparisonMetrics;
}
