import { Link } from 'react-router-dom';
import CitySearch from '../components/CitySearch';
import SEO from '../components/SEO';
import Testimonials from '../components/Testimonials';
import ReviewForm from '../components/ReviewForm';
import EditorChoice from '../components/EditorChoice';

const Home = () => {
  // We'll just use a few popular cities for the featured section
  const popularCities = ["London", "Manchester", "Birmingham", "Edinburgh", "Glasgow"];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <SEO 
        title="Best VPN UK - Compare Top VPN Services for UK Users"
        description="Find the perfect VPN for your needs in the UK. Compare prices, features, and security options. Expert reviews and city-specific recommendations for optimal online privacy."
        keywords="VPN UK, best VPN services, UK VPN comparison, online privacy UK, secure VPN UK"
      />
      
      <section className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
          Best VPN UK
        </h1>
        
        <p className="text-xl text-cyber-gray mb-8 max-w-2xl mx-auto">
          Your trusted source for VPN comparisons, reviews, and expert recommendations. 
          We help UK users find the perfect VPN for their needs, with detailed analysis 
          and up-to-date information on the best VPN services available.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-cyber-blue">Expert Reviews</h3>
            <p className="text-cyber-gray">In-depth analysis of the best VPN services for UK users</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-cyber-blue">Price Comparison</h3>
            <p className="text-cyber-gray">Find the best VPN deals and discounts available in the UK</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-cyber-blue">Security Focus</h3>
            <p className="text-cyber-gray">Stay informed about VPN security and privacy features</p>
          </div>
        </div>

        <div className="mb-16">
          <Link 
            to="/best-vpns"
            className="inline-block bg-cyber-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Compare Top VPNs
          </Link>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-cyber-blue">Why Use a VPN?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyber-blue/50 transition-all duration-300 shadow-lg">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold text-white mb-2">Privacy</h3>
              <p className="text-gray-300">Protect your online activity from tracking</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyber-blue/50 transition-all duration-300 shadow-lg">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold text-white mb-2">Access</h3>
              <p className="text-gray-300">Bypass geo-restrictions on content</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyber-blue/50 transition-all duration-300 shadow-lg">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Security</h3>
              <p className="text-gray-300">Stay safe on public Wi-Fi networks</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyber-blue/50 transition-all duration-300 shadow-lg">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-lg font-semibold text-white mb-2">Savings</h3>
              <p className="text-gray-300">Find better deals on online purchases</p>
            </div>
          </div>
        </section>

        {/* Frequently searched cities section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-cyber-blue">Frequently Searched Cities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {popularCities.map((city) => (
              <Link
                key={city}
                to={`/city/${city.toLowerCase()}`}
                className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-cyber-blue/50 hover:bg-gray-800/70 transition-all duration-300 shadow-lg"
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

        {/* Search section */}
        <div className="mb-12 bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg">
          <h2 className="text-2xl mb-4">Find VPN recommendations for your city</h2>
          <CitySearch />
        </div>

        {/* Testimonials section */}
        <Testimonials />

        {/* Review Form section */}
        <ReviewForm />

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-cyber-blue">VPN Speed Comparison</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyber-blue/50 transition-all duration-300 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">ExpressVPN</h3>
                <span className="text-green-400">94.2 Mbps</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div className="bg-green-400 h-2 rounded-full" style={{ width: '94%' }}></div>
              </div>
              <p className="text-sm text-gray-400">Average UK Download Speed</p>
            </div>

            <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border-2 border-yellow-400/50 hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-400/20">
              <EditorChoice />
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">NordVPN</h3>
                <span className="text-yellow-400">96.8 Mbps</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '97%' }}></div>
              </div>
              <p className="text-sm text-gray-400">Average UK Download Speed</p>
              <div className="absolute inset-0 rounded-xl bg-yellow-400/5 pointer-events-none"></div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyber-blue/50 transition-all duration-300 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Surfshark</h3>
                <span className="text-purple-400">91.8 Mbps</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div className="bg-purple-400 h-2 rounded-full" style={{ width: '91%' }}></div>
              </div>
              <p className="text-sm text-gray-400">Average UK Download Speed</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link 
              to="/compare-features" 
              className="text-cyber-blue hover:underline inline-flex items-center gap-2"
            >
              View Full Speed Test Results 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home; 