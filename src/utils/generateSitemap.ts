import { getAllCityNames } from '../data/cityData';

export const generateSitemap = () => {
  const baseUrl = 'https://bestvpnuk.com'; // Replace with your actual domain
  const cities = getAllCityNames();
  
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
      ${cities.map(city => `
        <url>
          <loc>${baseUrl}/city/${city.toLowerCase()}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>
      `).join('')}
    </urlset>`;

  return xml;
}; 