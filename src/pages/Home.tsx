import { Link } from 'react-router-dom';
import CitySearch from '../components/CitySearch';
import SEO from '../components/SEO';
const Home = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <SEO 
        title="Best VPN UK - Compare Top VPN Services"
        description="Find the perfect VPN for your needs in the UK. Compare prices, features, and security options."
        keywords="VPN UK, best VPN services, UK VPN comparison"
      />
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 bg-[url('/images/cyber-grid.svg')] opacity-20 bg-repeat animate-pulse-slow"
          style={{ backgroundSize: '50px 50px' }}
        ></div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-cyber-blue/20 to-purple-500/20 rounded-full blur-[150px] animate-pulse-slow"></div>
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-purple-500/20 to-cyber-blue/20 rounded-full blur-[150px] animate-pulse-slow delay-700"></div>
        <div className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-t from-green-500/20 to-cyber-blue/20 rounded-full blur-[150px] animate-pulse-slow delay-1000"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute w-2 h-2 bg-cyber-blue rounded-full top-1/4 left-1/4 animate-float"></div>
          <div className="absolute w-2 h-2 bg-purple-500 rounded-full top-1/3 right-1/4 animate-float-delayed"></div>
          <div className="absolute w-2 h-2 bg-green-500 rounded-full bottom-1/4 left-1/3 animate-float-slow"></div>
        </div>

        {/* Scan Lines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-blue/5 to-transparent animate-scan"></div>

        {/* Cyber Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49%,rgba(0,246,255,0.1)_50%,transparent_51%)] bg-[length:50px_50px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_49%,rgba(0,246,255,0.1)_50%,transparent_51%)] bg-[length:50px_50px]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyber-blue via-purple-500 to-cyber-blue bg-clip-text text-transparent animate-gradient-x">
            Best VPN UK
          </h1>
          
          <p className="text-xl text-cyber-gray mb-12 max-w-2xl mx-auto leading-relaxed">
            Your trusted source for VPN comparisons, reviews, and expert recommendations. 
            Protect your online privacy with confidence.
          </p>

          {/* Enhanced Search Box */}
          <div className="mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-purple-500/20 blur-xl"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl border border-gray-700/50 shadow-lg">
              <h2 className="text-2xl font-semibold text-white mb-6">Find VPN Services in Your City</h2>
              <CitySearch />
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
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
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

      {/* Rest of your content... */}
    </div>
  );
};

export default Home; 