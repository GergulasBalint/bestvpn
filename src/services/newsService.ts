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
    
    return items.map((item: NewsItem) => ({
      title: item.title[0],
      description: cleanDescription(item.description[0]),
      link: item.link[0],
      image: item.enclosure?.[0]?.$.url || '',
      date: new Date(item.pubDate[0]).toLocaleDateString()
    }));
    
  } catch (error) {
    console.error('Failed to fetch VPN news:', error);
    throw error;
  }
};

export const formatNewsItem = (item: NewsItem) => {
  return {
    title: item.title[0],
    description: cleanDescription(item.description[0]),
    link: item.link[0],
    imageUrl: item['media:content']?.[0]?.$.url || '',
    pubDate: new Date(item.pubDate[0]).toLocaleDateString()
  };
};

const cleanDescription = (html: string) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  const text = div.textContent || '';
  return text.split('\n')[0].substring(0, 150) + '...';
};