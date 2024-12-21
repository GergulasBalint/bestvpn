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
  const imgMatch = description.match(/src="([^"]+)"/);
  if (!imgMatch) return '';
  const url = imgMatch[1];
  // Ensure we're getting a larger image by removing size constraints if they exist
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

const cleanDescription = (html: string): string => {
  if (!html) return 'No description available';
  
  // Remove HTML tags and decode entities
  const div = document.createElement('div');
  div.innerHTML = html;
  const text = div.textContent || div.innerText || '';
  
  // Get first paragraph and trim it
  const paragraphs = text.split('\n').filter(p => p.trim().length > 0);
  const firstParagraph = paragraphs[0] || '';
  return firstParagraph.substring(0, 150).trim() + (firstParagraph.length > 150 ? '...' : '');
};