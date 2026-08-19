import { journeys } from '../data/journeys';

export const SELECTED_LOCATION_STORAGE_KEY = 'limyra:selected-location';
export const LOCATION_DISMISSED_SESSION_KEY = 'limyra:location-picker-dismissed';

export interface SelectedJourneyLocation {
  type: 'pickup-zone';
  code: string;
}

export function getJourneyForTour(tourId: string) {
  return journeys.find((journey) => journey.tourId === tourId && journey.supported) ?? null;
}

export function isJourneySupported(tourId: string) {
  return !!getJourneyForTour(tourId);
}

export function getJourneyPickupZones(tourId: string) {
  return getJourneyForTour(tourId)?.pickupZones ?? [];
}

export function isPickupZoneSupported(tourId: string, zone: string) {
  return getJourneyPickupZones(tourId).some((pickupZone) => pickupZone.code === zone);
}

export function getJourneyComparisonMetrics(tourId: string) {
  return getJourneyForTour(tourId)?.comparisonMetrics ?? null;
}

export function parseSelectedJourneyLocation(value: string | null): SelectedJourneyLocation | null {
  if (!value) return null;

  try {
    const parsed = JSON.parse(value) as Partial<SelectedJourneyLocation>;
    if (parsed.type !== 'pickup-zone' || typeof parsed.code !== 'string' || !parsed.code.trim()) return null;
    return { type: 'pickup-zone', code: parsed.code };
  } catch {
    return null;
  }
}
