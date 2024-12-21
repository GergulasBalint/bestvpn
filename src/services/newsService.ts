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

export const getVPNNews = async (): Promise<NewsCardProps[]> => {
  try {
    const response = await axios.get(`${API_URL}/api/news`);
    const items = response.data.rss.channel[0].item;
    
    return items.map((item: NewsItem) => {
      const fullLink = Array.isArray(item.link) ? item.link[0] : item.link;
      const fullTitle = Array.isArray(item.title) ? item.title[0] : item.title;
      const fullDescription = Array.isArray(item.description) ? item.description[0] : item.description;
      const pubDate = Array.isArray(item.pubDate) ? item.pubDate[0] : item.pubDate;

      return {
        title: fullTitle,
        description: cleanDescription(fullDescription),
        link: fullLink,
        image: extractImageUrl(fullDescription),
        date: formatDate(pubDate)
      };
    });
    
  } catch (error) {
    console.error('Failed to fetch VPN news:', error);
    throw error;
  }
};

const extractImageUrl = (description: string): string => {
  if (!description) return '';
  const imgMatch = description.match(/<img[^>]+src="([^"]+)"[^>]*>/);
  if (!imgMatch) return '';
  const url = imgMatch[1];
  return url.replace(/\.([0-9]+)\./g, '.640.');
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

const cleanDescription = (html: string): string => {
  if (!html) return 'No description available';
  
  // First remove the image tag completely
  const withoutImg = html.replace(/<img[^>]*>/g, '');
  
  // Remove all HTML tags
  const withoutTags = withoutImg.replace(/<[^>]*>/g, ' ');
  
  // Decode HTML entities
  const div = document.createElement('div');
  div.innerHTML = withoutTags;
  const decoded = div.textContent || div.innerText || '';
  
  // Clean up whitespace and get meaningful content
  const cleaned = decoded
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (cleaned.length <= 150) return cleaned;
  return cleaned.substring(0, 147) + '...';
};