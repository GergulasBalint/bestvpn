import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getCity } from '../data/cityData';
import { generateCityData } from '../utils/cityGenerator';
import CityVPNGuide from '../components/CityVPNGuide';
import SEO from '../components/SEO';

const CityVPN: React.FC = () => {
  const { cityName } = useParams<{ cityName: string }>();
  
  if (!cityName) {
    return <Navigate to="/" replace />;
  }

  let city = getCity(cityName) || generateCityData(cityName);
  const formattedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
  const currentYear = new Date().getFullYear();

  // Create rich SEO-friendly title variations
  const title = `Best VPN for ${formattedCityName} (${currentYear}) - Top Rated VPN Services`;
  const description = `Find the fastest and most secure VPN services for ${formattedCityName}. ` +
    `Compare features, prices, and performance of top VPN providers. Get exclusive deals and ` +
    `expert recommendations for ${formattedCityName} users.`;
  const keywords = `VPN ${formattedCityName}, best VPN ${formattedCityName}, ` +
    `fastest VPN ${formattedCityName}, secure VPN ${formattedCityName}, ` +
    `${formattedCityName} VPN service, VPN providers ${formattedCityName}`;

  return (
    <>
      <SEO 
        title={title}
        description={description}
        keywords={keywords}
        imageUrl="/images/vpn-city-hero.jpg"
      />
      <div className="city-vpn-content">
        <h1 className="text-4xl font-bold mb-6">
          Best VPN Services for {formattedCityName} ({currentYear})
        </h1>
        <CityVPNGuide city={city} />
      </div>
    </>
  );
};

export default CityVPN; 