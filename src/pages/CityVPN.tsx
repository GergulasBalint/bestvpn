import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getCity } from '../data/cityData';
import CityVPNGuide from '../components/CityVPNGuide';

const CityVPN: React.FC = () => {
  const { cityName } = useParams<{ cityName: string }>();
  
  if (!cityName) {
    return <Navigate to="/" replace />;
  }

  const city = getCity(cityName);

  if (!city) {
    return <Navigate to="/" replace />;
  }

  return <CityVPNGuide city={city} />;
};

export default CityVPN; 