import type { Dil } from '../lib/tipler';

// Marka adı TEK yerde tanımlı (MASTER-PROMPT §3). Her yer buradan okur.
export const MARKA = 'SER TOURISM & TRAVEL';

// hreflang ve canonical mutlak URL ister. Domain alınınca burası tek doğru kaynak.
// Şimdilik deneme yayını: ser-tourism.tapsync.cc
export const SITE = 'https://ser-tourism.tapsync.cc';

export const SLOGAN: Record<Dil, string> = {
  tr: 'All for a smile.',
  en: 'All for a smile.',
  ru: 'All for a smile.',
  de: 'All for a smile.',
  pl: 'All for a smile.',
  ro: 'All for a smile.',
};

// Tek numara (§7.4). İleride dil başına ayrılabilsin diye obje olarak duruyor.
// YER TUTUCU — gerçek numara lansmandan önce girilecek. Format: 905321112233
export const WA_NUMBERS: Record<Dil, string> = {
  tr: '905000000000',
  en: '905000000000',
  ru: '905000000000',
  de: '905000000000',
  pl: '905000000000',
  ro: '905000000000',
};

// Ramses Ink Dövme & Piercing — SER TOURISM'ın kendi turlarından ayrı, bağımsız
// bir ortak işletme. Aynı geçici numarayı kullanıyor (iş sahibinin isteği);
// gerçek numara verilince yalnızca burası değişecek, WA_NUMBERS'a dokunulmaz.
export const RAMSES_WA_NUMBERS: Record<Dil, string> = {
  tr: '905000000000',
  en: '905000000000',
  ru: '905000000000',
  de: '905000000000',
  pl: '905000000000',
  ro: '905000000000',
};

// Lead webhook'u (Google Sheets) — henüz kurulmadı (BASLA.md sonraki adım 5).
// Boş bırakılırsa sendBeacon çağrısı sessizce atlanır.
export const LEAD_ENDPOINT = '';

// Çalışma saatleri — "Neden biz" 2. maddeyle bağlı (§9).
export const CALISMA_SAATLERI = '08:00–22:00';

export const SOCIAL_LINKS = {
  instagram: null,
  tiktok: null,
  youtube: null,
  facebook: null,
} satisfies Record<string, string | null>;
