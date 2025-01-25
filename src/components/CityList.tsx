import React, { useState, useRef, useEffect } from 'react';
import { getAllCityNames, cities } from '../data/cityData';
import { useNavigate } from 'react-router-dom';

interface CityListProps {
  onCitySelect?: (city: string) => void;
  className?: string;
  placeholder?: string;
}

const CityList: React.FC<CityListProps> = ({ 
  onCitySelect, 
  className = '',
  placeholder = 'Search cities...'
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  const cityNames = getAllCityNames(cities).sort();
  
  const filteredCities = cityNames.filter(city =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 10); // Limit to 10 results

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/city/${searchTerm.toLowerCase()}`);
    }
  };

  const handleCityClick = (city: string) => {
    if (onCitySelect) {
      onCitySelect(city);
    }
    navigate(`/city/${city.toLowerCase()}`);
    setShowDropdown(false);
    setSearchTerm('');
  };

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
          placeholder={placeholder}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
        />
      </form>

      {showDropdown && searchTerm && (
        <div className="absolute z-50 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-96 overflow-y-auto">
          {filteredCities.length > 0 ? (
            <div className="py-1">
              {filteredCities.map((city) => (
                <button
                  key={city}
                  onClick={() => handleCityClick(city)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900"
                >
                  {city}
                </button>
              ))}
            </div>
          ) : (
            <div className="px-4 py-2 text-gray-500">No cities found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CityList; 