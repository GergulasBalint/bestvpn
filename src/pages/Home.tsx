import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import DealAlerts from '../components/DealAlerts';
import SetupGuides from '../components/SetupGuides';
import SpeedTestWidget from '../components/SpeedTestWidget';
import CityList from '../components/CityList';
import CyberBackground from '../components/CyberBackground';

const Home = () => {
  const popularCities = ["London", "Manchester", "Birmingham", "Edinburgh", "Glasgow"];

  const handleCitySelect = (city: string) => {
    // Handle city selection here
    console.log('Selected city:', city);
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <SEO 
        title="Best VPN UK - Compare Top VPN Services"
        description="Find the perfect VPN for your needs in the UK. Compare prices, features, and security options."
        keywords="VPN UK, best VPN services, UK VPN comparison"
      />
      <CyberBackground />
      <div className="relative z-10">
        <div className="relative overflow-hidden py-12 mb-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
                Best VPN UK
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Best VPN UK is your trusted source for VPN comparisons, reviews, and expert recommendations in the UK. 
                Protect your online privacy with confidence.
              </p>
            </div>

            {/* Enhanced Search Box */}
            <div className="mb-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-purple-500/20 blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl border border-gray-700/50 shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-6">Find VPN Services in Your City</h2>
                <CityList onCitySelect={handleCitySelect} />
              </div>
            </div>

            {/* Quick Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-800/50 backdrop-blur-md p-8 rounded-xl border border-gray-700/50 shadow-lg group hover:border-cyber-blue/50 transition-all duration-500">
                <div className="text-4xl font-bold text-cyber-blue mb-2">500+</div>
                <div className="text-gray-400">Servers Worldwide</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-800/50 backdrop-blur-md p-8 rounded-xl border border-gray-700/50 shadow-lg group hover:border-purple-500/50 transition-all duration-500">
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-400">Expert Support</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-800/50 backdrop-blur-md p-8 rounded-xl border border-gray-700/50 shadow-lg group hover:border-green-500/50 transition-all duration-500">
                <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-400">Privacy Guaranteed</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link 
                to="/best-vpns"
                className="px-8 py-4 bg-cyber-blue text-gray-900 font-semibold rounded-xl hover:bg-cyber-blue/90 transition-colors duration-300"
              >
                Compare Top VPNs
              </Link>
              <Link 
                to="/compare-costs"
                className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-white font-semibold rounded-xl border border-cyber-blue/50 hover:border-cyber-blue hover:bg-gray-800/80 transition-all duration-300"
              >
                View Latest Deals
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Cities Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
          Popular City Guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {popularCities.map((city) => (
            <Link
              key={city}
              to={`/city/${city.toLowerCase()}`}
              className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-800/50 backdrop-blur-md p-6 rounded-xl border border-gray-700/50 shadow-lg group hover:border-cyber-blue/50 transition-all duration-500 text-center"
            >
              <h3 className="text-xl font-semibold text-white group-hover:text-cyber-blue transition-colors">
                {city}
              </h3>
              <p className="text-sm text-gray-400 mt-2">VPN Guide</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <SpeedTestWidget />
        <DealAlerts />
        <SetupGuides />
      </section>
    </div>
  );
};

export default Home; 