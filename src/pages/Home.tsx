import { Link } from 'react-router-dom';
import CitySearch from '../components/CitySearch';
import SEO from '../components/SEO';
import Testimonials from '../components/Testimonials';
import ReviewForm from '../components/ReviewForm';

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
          <h2 className="text-3xl font-bold mb-8 text-cyber-blue">Latest VPN News</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyber-blue/50 transition-all duration-300 shadow-lg">
              <time className="text-sm text-gray-400">March 5, 2024</time>
              <h3 className="text-lg font-semibold text-white mt-2">New Privacy Laws Impact VPN Users</h3>
              <p className="text-gray-300 mt-2">Recent changes in UK privacy regulations affect how VPNs operate...</p>
              <Link to="/news" className="text-cyber-blue hover:underline mt-4 inline-block">Read More →</Link>
            </div>
            {/* Add 2 more news cards */}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home; 