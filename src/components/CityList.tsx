import React, { useState } from 'react';
import { getAllCityNames } from '../data/cityData';

interface CityListProps {
  onCitySelect?: (city: string) => void;
}

const CityList: React.FC<CityListProps> = ({ onCitySelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isListVisible, setIsListVisible] = useState(false);

  const cities = getAllCityNames().sort();
  
  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search cities..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => setIsListVisible(!isListVisible)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {isListVisible ? 'Hide' : 'Search'}
        </button>
      </div>

      {isListVisible && (
        <div className="absolute z-50 w-full mt-2 bg-white border rounded-lg shadow-lg max-h-96 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
            {filteredCities.map((city) => (
              <button
                key={city}
                onClick={() => {
                  if (onCitySelect) {
                    onCitySelect(city);
                  }
                  setIsListVisible(false);
                }}
                className="text-left px-3 py-2 hover:bg-gray-100 rounded-md transition-colors"
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CityList; 