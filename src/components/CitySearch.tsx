import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllCityNames } from '../data/cityData';

interface CitySearchProps {
  variant?: 'default' | 'compact';
}

const CitySearch: React.FC<CitySearchProps> = ({ variant = 'default' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/city/${searchTerm.toLowerCase().trim()}`);
      setSearchTerm('');
    }
  };

  const isCompact = variant === 'compact';

  return (
    <form onSubmit={handleSubmit} className={`w-full ${isCompact ? '' : 'max-w-md mx-auto'}`}>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter your city..."
          className={`
            w-full bg-white/5 border border-cyber-blue/30 
            rounded-lg focus:ring-2 focus:ring-cyber-blue 
            focus:border-transparent outline-none
            ${isCompact ? 'py-1.5 px-3 text-sm' : 'py-3 px-4 text-lg'}
          `}
        />
        <button
          type="submit"
          className={`
            absolute right-2 text-cyber-blue hover:text-cyber-blue/80
            ${isCompact ? 'top-1.5' : 'top-3'}
          `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${isCompact ? 'w-4 h-4' : 'w-6 h-6'}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default CitySearch; 