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
      return {
        title: item.title[0],
        description: cleanDescription(item.description[0]),
        link: fullLink,
        image: extractImageUrl(item.description[0]) || '',
        date: formatDate(item.pubDate[0])
      };
    });
    
  } catch (error) {
    console.error('Failed to fetch VPN news:', error);
    throw error;
  }
};

const extractImageUrl = (description: string): string | null => {
  const imgMatch = description.match(/src="([^"]+)"/);
  return imgMatch ? imgMatch[1] : null;
};

const formatDate = (dateStr: string) => {
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
      return 'Recent';
    }
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch {
    return 'Recent';
  }
};

const cleanDescription = (html: string) => {
  if (!html) return 'No description available';
  
  // Remove HTML tags and decode entities
  const div = document.createElement('div');
  div.innerHTML = html;
  const text = div.textContent || div.innerText || '';
  
  // Get first paragraph and trim it
  const firstParagraph = text.split('\n').find(p => p.trim().length > 0) || '';
  return firstParagraph.substring(0, 150).trim() + '...';
};