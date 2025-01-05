import React from 'react';

interface VPNDetailSectionProps {
  vpn: {
    id: string;
    name: string;
    rating: number;
    isEditorsChoice?: boolean;
    image: string;
    description: string;
    features: string[];
    pros: string[];
    cons: string[];
    price: string;
    link: string;
  };
}

const VPNDetailSection: React.FC<VPNDetailSectionProps> = ({ vpn }) => {
  const isNordVPN = vpn.id === 'nordvpn';
  
  return (
    <div className={`relative bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-8 ${
      isNordVPN ? 'border-4 border-yellow-400/90 shadow-[0_0_25px_rgba(251,191,36,0.5)]' : ''
    }`}>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4 relative">
          {vpn.isEditorsChoice && (
            <img
              src="/images/editors-choice-badge.png"
              alt="Editor's Choice"
              className="absolute -top-6 -right-6 w-32 h-32 z-10 transform rotate-12"
            />
          )}
          <div className={`rounded-lg overflow-hidden ${isNordVPN ? 'bg-white p-4' : ''}`}>
            <img 
              src={vpn.image} 
              alt={`${vpn.name} logo`} 
              className="w-full"
            />
          </div>
          <div className="mt-4 text-center">
            <div className="flex justify-center items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={i < vpn.rating ? "currentColor" : "none"}
                  stroke="currentColor"
                  className={`w-6 h-6 ${i < vpn.rating ? 'text-cyber-blue' : 'text-gray-400'}`}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <p className="text-cyber-blue font-bold">{vpn.price}</p>
          </div>
        </div>

        <div className="md:w-3/4">
          <h3 className="text-2xl font-bold text-cyber-blue mb-4">{vpn.name}</h3>
          <p className="text-cyber-gray mb-6">{vpn.description}</p>
          
          <div className="space-y-8">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed" itemProp="description">
                {vpn.description}
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-cyber-blue">Key Features:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4" itemProp="features">
                {vpn.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-cyber-blue">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-cyber-blue/10 p-6 rounded-xl border border-cyber-blue/20" itemProp="offers" itemScope itemType="http://schema.org/Offer">
              <p className="text-xl font-semibold text-cyber-blue">
                Price: <span itemProp="price" content={vpn.price.replace('£', '')} className="text-white">{vpn.price}</span>
                <meta itemProp="priceCurrency" content="GBP" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VPNDetailSection; 