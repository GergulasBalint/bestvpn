import React from 'react';
import CityList from './CityList';

interface CityNotFoundProps {
  searchedCity: string;
}

const CityNotFound: React.FC<CityNotFoundProps> = ({ searchedCity }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">City Not Found</h1>
          <p className="text-gray-400 mb-6">
            Sorry, we couldn't find any information for "{searchedCity}".
          </p>
          <div className="mb-4">
            <p className="text-gray-400 mb-2">Try searching for another city:</p>
            <CityList 
              placeholder="Search for a different city..."
              className="max-w-sm mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityNotFound; 