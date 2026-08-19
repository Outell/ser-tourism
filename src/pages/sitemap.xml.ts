// Sitemap indeksi: dil başına ayrı sitemap (url-semasi §7)
import type { APIRoute } from 'astro';
import { DILLER } from '../lib/tipler';
import { SITE } from '../config/marka';

export const GET: APIRoute = () => {
  const satirlar = DILLER.map(
    (d) => `  <sitemap><loc>${SITE}/sitemap-${d}.xml</loc></sitemap>`
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${satirlar}
</sitemapindex>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
