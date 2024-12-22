import { useState, useEffect } from 'react';
import { getVPNNews } from '../services/newsService';
import NewsCard from '../components/NewsCard';
import type { NewsCardProps } from '../components/NewsCard';
import { Helmet } from 'react-helmet';

// SEO Constants
const PAGE_TITLE = "Best VPN UK News & Updates";
const PAGE_DESCRIPTION = "Stay updated with the latest VPN news, reviews, and security updates for UK users. Find the best VPN services and deals.";
const PAGE_KEYWORDS = ["Best VPN UK", "VPN News", "UK VPN Reviews", "VPN Security Updates", "VPN Deals UK"];
const SITE_NAME = "Best VPN UK";
const CANONICAL_URL = "https://bestvpn-uk.com/latest";
const SITE_IMAGE = "/og-image.jpg"; // Add your Open Graph image

// Structured Data
const getStructuredData = (newsItems: NewsCardProps[]) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": PAGE_TITLE,
  "description": PAGE_DESCRIPTION,
  "publisher": {
    "@type": "Organization",
    "name": SITE_NAME,
    "logo": {
      "@type": "ImageObject",
      "url": "https://bestvpn-uk.com/logo.png"
    }
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": newsItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "NewsArticle",
        "headline": item.title,
        "description": item.description,
        "image": item.image,
        "datePublished": item.date,
        "url": item.link
      }
    }))
  }
});

const Latest = () => {
  const [news, setNews] = useState<NewsCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getVPNNews();
        const latestNews = data
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 6);
        setNews(latestNews);
        setLoading(false);
      } catch (err) {
        setError('Unable to load the latest VPN news and updates');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <>
        <Helmet>
          <title>{PAGE_TITLE}</title>
          <meta name="description" content={PAGE_DESCRIPTION} />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <div className="flex justify-center items-center min-h-screen" aria-label="Loading latest VPN news">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyber-blue"></div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Helmet>
          <title>{PAGE_TITLE}</title>
          <meta name="description" content={PAGE_DESCRIPTION} />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <div className="text-center text-red-500 py-20" role="alert">
          <h2 className="text-2xl font-bold">{error}</h2>
          <p>Please try refreshing the page to see the latest VPN updates.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <html lang="en-GB" />
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="keywords" content={PAGE_KEYWORDS.join(', ')} />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={SITE_IMAGE} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="en_GB" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={SITE_IMAGE} />
        
        {/* Additional SEO Tags */}
        <meta name="author" content={SITE_NAME} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(getStructuredData(news))}
        </script>
      </Helmet>

      <main itemScope itemType="http://schema.org/WebPage">
        <meta itemProp="name" content={PAGE_TITLE} />
        <meta itemProp="description" content={PAGE_DESCRIPTION} />
        <meta itemProp="keywords" content={PAGE_KEYWORDS.join(', ')} />

        <section className="text-center py-20">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
            Best VPN UK News & Updates
          </h1>
          <p className="text-xl text-cyber-gray max-w-2xl mx-auto">
            Your trusted source for the latest VPN reviews, security updates, and deals in the UK
          </p>
          <div className="mt-4 text-sm text-cyber-gray">
            <time dateTime={new Date().toISOString()}>
              Last Updated: {new Date().toLocaleDateString('en-GB', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </time>
          </div>
        </section>

        <section 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4"
          itemScope 
          itemType="http://schema.org/ItemList"
          aria-label="Latest VPN News Articles"
        >
          {news.map((item, index) => (
            <div 
              key={item.link} 
              itemProp="itemListElement" 
              itemScope 
              itemType="http://schema.org/ListItem"
              className="h-full"
            >
              <meta itemProp="position" content={String(index + 1)} />
              <NewsCard {...item} />
            </div>
          ))}
        </section>

        {news.length === 0 && (
          <p className="text-center text-cyber-gray py-10" role="status">
            No VPN news available at the moment. Please check back later for updates on the best VPN services in the UK.
          </p>
        )}

        <footer className="text-center py-8 text-sm text-cyber-gray">
          <p>Bringing you the latest updates on VPN services in the UK</p>
        </footer>
      </main>
    </>
  );
};

export default Latest; 