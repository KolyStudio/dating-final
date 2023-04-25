import pseudos from './pseudos';
import dayjs from 'dayjs';
const date = dayjs().format('YYYY-MM-DD');
 
 export async function GET() {
  const website = 'https://mapagesecrete.com'

  const data = await fetch(website);
  const body = 
  
  `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
  
  ${pseudos.map((pseudo) =>
    `<url>
      <loc>${website}/${pseudo}</loc>
      <lastmod>${date}T16:11:06+00:00</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>`
    ).join('')}
  </urlset>`.trim()
  
  const headers = {
    'Content-Type': 'application/xml'
  };
  return new Response(String(body), {headers}
  );
 }

