import { Link } from 'react-router-dom';
import { getAllCityNames } from '../data/cityData';

const Home = () => {
  const cities = getAllCityNames();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
          Best VPN UK
        </h1>
        
        <p className="text-xl text-cyber-gray mb-8 max-w-2xl mx-auto">
          Your trusted source for VPN comparisons, reviews, and expert recommendations. 
          We help UK users find the perfect VPN for their needs, with detailed analysis 
          and up-to-date information on the best VPN services available.
        </p>

        <div className="space-y-6">
          <Link 
            to="/best-vpns"
            className="inline-block bg-cyber-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Compare Top VPNs
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-cyber-blue">Expert Reviews</h3>
              <p className="text-cyber-gray">In-depth analysis of the best VPN services for UK users</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-cyber-blue">Price Comparison</h3>
              <p className="text-cyber-gray">Find the best VPN deals and discounts available in the UK</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-cyber-blue">Security Focus</h3>
              <p className="text-cyber-gray">Stay informed about VPN security and privacy features</p>
            </div>
          </div>

          {/* Local VPN Guides */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-cyber-blue">Local VPN Guides</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {cities.map((city) => (
                <Link
                  key={city}
                  to={`/city/${city.toLowerCase()}`}
                  className="bg-white/5 backdrop-blur-sm p-4 rounded-lg hover:bg-white/10 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-cyber-blue">
                    {city}
                  </h3>
                  <p className="text-sm text-cyber-gray">
                    Best VPN for {city}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Home; 