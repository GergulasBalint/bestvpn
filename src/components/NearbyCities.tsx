import { Link } from 'react-router-dom';
import { getNearbyCities, formatCityName } from '../utils/cityUtils';

interface NearbyCitiesProps {
  currentCity: string;
}

const NearbyCities: React.FC<NearbyCitiesProps> = ({ currentCity }) => {
  const nearbyCities = getNearbyCities(currentCity);

  return (
    <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-lg">
      <h2 className="text-2xl font-semibold text-cyber-blue mb-4">
        Check VPN Guides for Nearby Cities
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {nearbyCities.map((city) => (
          <Link
            key={city}
            to={`/city/${city.toLowerCase()}`}
            className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
          >
            <h3 className="text-lg font-semibold text-cyber-blue">
              {formatCityName(city)}
            </h3>
            <p className="text-sm text-cyber-gray">
              VPN Guide
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NearbyCities; 