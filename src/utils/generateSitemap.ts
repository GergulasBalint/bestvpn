import { getAllCityNames, cities } from '../data/cityData';

export const generateSitemap = () => {
  const baseUrl = 'https://bestvpnuk.netlify.app'; // Replace with your actual domain
  const cityNames = getAllCityNames(cities);
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${baseUrl}/best-vpns</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      ${cityNames.map(city => `
        <url>
          <loc>${baseUrl}/city/${city.toLowerCase()}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>
      `).join('')}
    </urlset>`;

  return xml;
}; 