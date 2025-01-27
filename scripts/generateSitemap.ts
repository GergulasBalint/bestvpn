import fs from 'fs';
import path from 'path';
import { generateSitemap } from '../src/utils/generateSitemap';

const outputDir = path.join(process.cwd(), 'public');
const outputPath = path.join(outputDir, 'sitemap.xml');

// Generate sitemap XML
const sitemap = generateSitemap();

// Ensure public directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Write sitemap to file
fs.writeFileSync(outputPath, sitemap);

console.log(`Sitemap generated at: ${outputPath}`); 