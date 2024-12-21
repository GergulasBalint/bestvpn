import { useState, useEffect } from 'react';
import { getVPNNews } from '../services/newsService';
import NewsCard from '../components/NewsCard';
import type { NewsCardProps } from '../components/NewsCard';

const Home = () => {
  const [news, setNews] = useState<NewsCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getVPNNews();
        setNews(data);
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
          Stay Informed on VPN Security
        </h1>
        <p className="text-xl text-cyber-gray max-w-2xl mx-auto">
          Your trusted source for the latest news and updates in the world of VPNs and cyber security.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            description={item.description}
            link={item.link}
            image={item.image}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Home; 