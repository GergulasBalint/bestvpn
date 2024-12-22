import type { NewsCardProps } from '../components/NewsCard';
import axios from 'axios';

interface MediaContent {
  $: {
    url: string;
  };
}

export interface NewsItem {
  title: string[];
  description: string[];
  link: string[];
  'media:content'?: MediaContent[];
  enclosure?: [{
    $: {
      url: string;
    }
  }];
  pubDate: string[];
}

const API_URL = 'https://vpn-news-backend.gergulasb.workers.dev';

// SEO metadata for Best VPN UK news
const SEO_KEYWORDS = ['Best VPN UK', 'VPN News', 'UK VPN Services', 'VPN Reviews'];
const SEO_DESCRIPTION = 'Latest news and updates about the best VPN services in the UK. Stay informed about VPN security, features, and deals.';

export const getVPNNews = async (): Promise<NewsCardProps[]> => {
  try {
    const response = await axios.get(`${API_URL}/api/news`);
    const items = response.data.rss.channel[0].item;
    
    return items.map((item: NewsItem) => {
      const fullLink = Array.isArray(item.link) ? item.link[0] : item.link;
      const fullTitle = Array.isArray(item.title) ? item.title[0] : item.title;
      const fullDescription = Array.isArray(item.description) ? item.description[0] : item.description;
      const pubDate = Array.isArray(item.pubDate) ? item.pubDate[0] : item.pubDate;

      // Try to get image from multiple sources
      const imageUrl = item.enclosure?.[0]?.$.url || 
                      item['media:content']?.[0]?.$.url ||
                      extractImageUrl(fullDescription) ||
                      '';

      return {
        title: optimizeTitle(fullTitle),
        description: optimizeDescription(fullDescription),
        link: fullLink,
        image: imageUrl,
        date: formatDate(pubDate),
        keywords: SEO_KEYWORDS,
        metaDescription: SEO_DESCRIPTION
      };
    });
    
  } catch (error) {
    console.error('Failed to fetch VPN news:', error);
    throw error;
  }
};

const extractImageUrl = (description: string): string => {
  if (!description) return '';
  const imgMatch = description.match(/src="([^"]+)"/);
  if (!imgMatch) return '';
  const url = imgMatch[1];
  // Ensure we get the full-size image
  return url.replace(/t\/[^\/]+\//, 't/pcmag_uk/');
};

const formatDate = (dateStr: string): string => {
  if (!dateStr) return 'Recent';
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
      return 'Recent';
    }
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  } catch {
    return 'Recent';
  }
};

const optimizeTitle = (title: string): string => {
  // If title doesn't contain our main keyword and it's relevant, prepend it
  const mainKeyword = 'Best VPN UK';
  if (title.toLowerCase().includes('vpn') && !title.toLowerCase().includes(mainKeyword.toLowerCase())) {
    return `${mainKeyword}: ${title}`;
  }
  return title;
};

const optimizeDescription = (html: string): string => {
  if (!html) return 'No description available';
  
  // Remove the img tag and any text containing "src=" or "<img"
  const cleanedHtml = html
    .replace(/<img[^>]*>/g, '')
    .split('\n')
    .filter(line => !line.includes('src=') && !line.includes('<img'))
    .join('\n');
  
  // Remove remaining HTML tags
  const div = document.createElement('div');
  div.innerHTML = cleanedHtml;
  const text = div.textContent || div.innerText || '';
  
  // Get first meaningful paragraph
  const paragraphs = text
    .split('\n')
    .map(p => p.trim())
    .filter(p => p.length > 0);
  
  let firstParagraph = paragraphs[0] || 'Latest updates on the Best VPN services in the UK';
  
  // Optimize for SEO if relevant
  if (firstParagraph.toLowerCase().includes('vpn') && 
      !firstParagraph.toLowerCase().includes('best vpn uk')) {
    firstParagraph = `Best VPN UK Update: ${firstParagraph}`;
  }
  
  return firstParagraph.length <= 150 ? firstParagraph : firstParagraph.substring(0, 147) + '...';
};