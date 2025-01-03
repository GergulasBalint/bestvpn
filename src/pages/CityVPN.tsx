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

  return (
    <>
      <SEO 
        title={`Best VPN for ${formattedCityName} - Top VPN Services & Recommendations`}
        description={`Find the best VPN services for ${formattedCityName}. Compare speeds, prices, and features. Get expert recommendations for secure internet access in ${formattedCityName}.`}
        keywords={`VPN ${formattedCityName}, best VPN ${formattedCityName}, ${formattedCityName} VPN service, secure VPN ${formattedCityName}`}
        canonicalUrl={`https://bestvpnuk.com/city/${cityName.toLowerCase()}`}
      />
      <CityVPNGuide city={city} />
    </>
  );
};

export default CityVPN; 