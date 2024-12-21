import type { NewsCardProps } from '../components/NewsCard';

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

interface NewsResponse {
  rss: {
    channel: [{
      item: NewsItem[];
    }];
  };
}

export const getVPNNews = async (): Promise<NewsCardProps[]> => {
  try {
    const response = await fetch('http://localhost:3000/api/news');
    const data: NewsResponse = await response.json();
    
    return data.rss.channel[0].item.map(item => ({
      title: item.title[0],
      description: item.description[0].replace(/<[^>]*>/g, '').split('\n')[0],
      link: item.link[0],
      image: item.enclosure?.[0]?.$.url || '',
      date: item.pubDate[0]
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