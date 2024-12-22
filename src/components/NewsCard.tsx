export interface NewsCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
  date: string;
  keywords?: string[];
  metaDescription?: string;
}

const NewsCard = ({ title, description, link, image, date, keywords, metaDescription }: NewsCardProps) => {
  const fallbackImage = '/default-news-image.jpg';
  const imageUrl = image || fallbackImage;
  
  return (
    <article className="glass-effect rounded-xl overflow-hidden transition-transform hover:scale-105" itemScope itemType="http://schema.org/NewsArticle">
      <a href={link} target="_blank" rel="noopener noreferrer" title={`Read more about ${title}`}>
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={`${title} - Best VPN UK News`}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = fallbackImage;
            }}
            itemProp="image"
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2 text-cyber-blue" itemProp="headline">
            {title}
          </h3>
          <p className="text-cyber-gray mb-4 line-clamp-2" itemProp="description">
            {description}
          </p>
          <div className="flex justify-between items-center">
            <p className="text-sm text-cyber-gray" itemProp="datePublished">
              {new Date(date).toLocaleDateString()}
            </p>
            <span className="text-sm text-cyber-blue hover:underline">
              Read More →
            </span>
          </div>
          {keywords && (
            <meta itemProp="keywords" content={keywords.join(', ')} />
          )}
          {metaDescription && (
            <meta itemProp="abstract" content={metaDescription} />
          )}
        </div>
      </a>
    </article>
  );
};

export default NewsCard; 