import { useState, useEffect } from 'react';
import { getVPNNews } from '../services/newsService';
import NewsCard from '../components/NewsCard';
import type { NewsCardProps } from '../components/NewsCard';

const Latest = () => {
  const [news, setNews] = useState<NewsCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getVPNNews();
        // Sort by date and take the latest 6 items
        const latestNews = data
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 6);
        setNews(latestNews);
        setLoading(false);
      } catch (err) {
        setError('Failed to load news');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyber-blue"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-20">
        <h2 className="text-2xl font-bold">{error}</h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
          Latest VPN News
        </h1>
        <p className="text-xl text-cyber-gray max-w-2xl mx-auto">
          Stay up to date with the most recent developments
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <NewsCard
            key={index}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Latest; 