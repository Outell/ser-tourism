// @ts-check
import { defineConfig } from 'astro/config';

// Statik çıktı — paylaşımlı hosting'e FTP ile atılabilir (MASTER-PROMPT §2).
// Sondaki / zorunlu: /tr/turlar/x/ → tr/turlar/x/index.html (url-semasi §3).
export default defineConfig({
  // Deneme yayını: ser-tourism.tapsync.cc alt domaininde. Gerçek domain
  // (limyra.com) alınınca burası ve src/config/marka.ts SITE değeri güncellenecek.
  site: 'https://ser-tourism.tapsync.cc',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  // Dev sunucusu IPv4+IPv6 dinlesin (yalnızca ::1 kalırsa tarayıcı 127.0.0.1'e bağlanamıyor)
  server: {
    host: true,
    port: 4321,
  },
});
