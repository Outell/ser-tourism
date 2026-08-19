// Dil başına sitemap — her URL'de hreflang bloğu tekrarlanır (url-semasi §7)
import type { APIRoute } from 'astro';
import type { Dil } from '../lib/tipler';
import { DILLER } from '../lib/tipler';
import { tumSayfalar, mutlak } from '../lib/rotalar';

export function getStaticPaths() {
  return DILLER.map((dil) => ({ params: { dil } }));
}

export const GET: APIRoute = ({ params }) => {
  const dil = params.dil as Dil;
  const sayfalar = tumSayfalar().filter((s) => s.dil === dil);

  const urller = sayfalar
    .map((s) => {
      const alternatif = DILLER.map(
        (d) => `    <xhtml:link rel="alternate" hreflang="${d}" href="${mutlak(s.alternatifler[d])}"/>`
      ).join('\n');
      return `  <url>
    <loc>${mutlak(s.yol)}</loc>
${alternatif}
    <xhtml:link rel="alternate" hreflang="x-default" href="${mutlak(s.alternatifler.en)}"/>
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urller}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
