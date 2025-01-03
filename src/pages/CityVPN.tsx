import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getCity } from '../data/cityData';
import { generateCityData } from '../utils/cityGenerator';
import CityVPNGuide from '../components/CityVPNGuide';

const CityVPN: React.FC = () => {
  const { cityName } = useParams<{ cityName: string }>();
  
  if (!cityName) {
    return <Navigate to="/" replace />;
  }

  // First try to get pre-defined city data
  let city = getCity(cityName);

  // If city doesn't exist in our database, generate it
  if (!city) {
    city = generateCityData(cityName);
  }

  return <CityVPNGuide city={city} />;
};

export default CityVPN; 