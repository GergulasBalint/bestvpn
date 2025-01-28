import { Helmet } from 'react-helmet';
import { generateWebsiteSchema, generateOrganizationSchema } from '../utils/seoSchema';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl?: string;
  imageUrl?: string;
  schema?: any;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  imageUrl = '/images/default-vpn-hero.jpg',
  schema
}) => {
  const siteUrl = 'https://bestvpn-uk.com';
  const defaultSchema = generateWebsiteSchema();

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl || `${siteUrl}${window.location.pathname}`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${imageUrl}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${imageUrl}`} />

      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            defaultSchema,
            generateOrganizationSchema(),
            schema
          ].filter(Boolean)
        })}
      </script>
    </Helmet>
  );
};

export default SEO; 