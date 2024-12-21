export interface NewsCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
  date: string;
}

const NewsCard = ({ title, description, link, image, date }: NewsCardProps) => {
  const fallbackImage = '/default-news-image.jpg'; // Add a default image to your public folder
  const imageUrl = image || fallbackImage;
  
  return (
    <div className="glass-effect rounded-xl overflow-hidden transition-transform hover:scale-105">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = fallbackImage;
            }}
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2 text-cyber-blue">
            {title}
          </h3>
          <p className="text-cyber-gray mb-4 line-clamp-2">
            {description.replace(/<[^>]*>/g, '')} {/* Remove HTML tags */}
          </p>
          <p className="text-sm text-cyber-gray">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </a>
    </div>
  );
};

export default NewsCard; 