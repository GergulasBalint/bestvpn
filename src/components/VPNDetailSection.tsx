import React from 'react';

interface VPNDetailSectionProps {
  name: string;
  description: string;
  features: string[];
  price: string;
  image: string;
}

const VPNDetailSection: React.FC<VPNDetailSectionProps> = ({
  name,
  description,
  features,
  price,
  image
}) => {
  const isNordVPN = name === "NordVPN";

  return (
    <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-16" itemScope itemType="http://schema.org/Product">
      <h2 className="text-3xl font-bold mb-6 text-cyber-blue" itemProp="name">{name}</h2>

      <div className="mb-8">
        <div className={`max-w-2xl mx-auto overflow-hidden rounded-xl shadow-lg ${isNordVPN ? 'bg-white' : 'bg-gray-900'}`}>
          <img
            src={image}
            alt={`${name} VPN Interface`}
            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
            itemProp="image"
            loading="lazy"
          />
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-gray-300 text-lg leading-relaxed" itemProp="description">
            {description}
          </p>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 text-cyber-blue">Key Features:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4" itemProp="features">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-cyber-blue">•</span>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-cyber-blue/10 p-6 rounded-xl border border-cyber-blue/20" itemProp="offers" itemScope itemType="http://schema.org/Offer">
          <p className="text-xl font-semibold text-cyber-blue">
            Price: <span itemProp="price" content={price.replace('£', '')} className="text-white">{price}</span>
            <meta itemProp="priceCurrency" content="GBP" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default VPNDetailSection; 