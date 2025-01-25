import React, { useState } from 'react';
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
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      if (onCitySelect) onCitySelect(searchTerm);
      navigate(`/city/${searchTerm.toLowerCase().trim()}`);
      setSearchTerm('');
    }
  };

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
        />
      </form>
    </div>
  );
};

export default CityList; 