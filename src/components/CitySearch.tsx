import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CitySearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Convert to URL-friendly format and navigate
      const formattedCity = searchTerm.trim()
        .toLowerCase()
        .replace(/\s+/g, '-');
      navigate(`/city/${formattedCity}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter your city..."
          className="w-full px-4 py-2 text-gray-900 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-blue"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-cyber-blue text-white rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default CitySearch; 