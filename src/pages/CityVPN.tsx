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
        title={`Best VPN for ${formattedCityName} - Top VPN Services (${new Date().getFullYear()})`}
        description={`Find the best VPN services for ${formattedCityName}. Compare speeds, features, and prices of top VPN providers for optimal performance in ${formattedCityName}.`}
        keywords={`VPN ${formattedCityName}, best VPN ${formattedCityName}, fastest VPN ${formattedCityName}`}
      />
      <CityVPNGuide city={city} />
    </>
  );
};

export default CityVPN; 