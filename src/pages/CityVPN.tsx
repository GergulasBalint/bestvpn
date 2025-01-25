import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { vpnData } from '../data/vpnData';
import { getCity } from '../data/cityData';
import VPNComparisonTable from '../components/VPNComparisonTable';
import { Link } from 'react-router-dom';
import CityNotFound from '../components/CityNotFound';

const CityVPN: FC = () => {
  const { cityName } = useParams<{ cityName: string }>();
  const cityData = getCity(cities, cityName || '');
  
  if (!cityData) {
    return <CityNotFound searchedCity={cityName || ''} />;
  }

  return (
    <>
      <Helmet>
        <title>Best VPN for {cityData.name} | Local Guide {new Date().getFullYear()}</title>
        <meta name="description" content={`Find the best VPN for ${cityData.name}. Compare speeds, features, and local server performance. Average speeds of ${cityData.internetStats.averageSpeed}.`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute inset-0 bg-[url('/images/cyber-grid.svg')] opacity-20 bg-repeat animate-pulse-slow"
            style={{ backgroundSize: '50px 50px' }}
          ></div>
          
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-cyber-blue/20 to-purple-500/20 rounded-full blur-[150px] animate-pulse-slow"></div>
          <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-purple-500/20 to-cyber-blue/20 rounded-full blur-[150px] animate-pulse-slow delay-700"></div>
          <div className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-t from-green-500/20 to-cyber-blue/20 rounded-full blur-[150px] animate-pulse-slow delay-1000"></div>
          
          <div className="absolute inset-0">
            <div className="absolute w-2 h-2 bg-cyber-blue rounded-full top-1/4 left-1/4 animate-float"></div>
            <div className="absolute w-2 h-2 bg-purple-500 rounded-full top-1/3 right-1/4 animate-float-delayed"></div>
            <div className="absolute w-2 h-2 bg-green-500 rounded-full bottom-1/4 left-1/3 animate-float-slow"></div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-blue/5 to-transparent animate-scan"></div>
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49%,rgba(0,246,255,0.1)_50%,transparent_51%)] bg-[length:50px_50px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_49%,rgba(0,246,255,0.1)_50%,transparent_51%)] bg-[length:50px_50px]"></div>
        </div>

        <div className="relative overflow-x-hidden">
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Hero Section */}
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
                Top VPN Recommendations for {cityData.name}
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Local insights and recommendations for {cityData.region} users
              </p>
            </div>

            {/* Stats Grid - Make it scroll horizontally on mobile */}
            <div className="overflow-x-auto -mx-4 px-4 mb-8">
              <div className="min-w-[640px]">
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-800/50 backdrop-blur-md p-8 rounded-xl border border-gray-700/50 shadow-lg shadow-black/20 relative overflow-hidden group hover:shadow-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="text-4xl font-bold text-cyber-blue mb-2">{cityData.internetStats.averageSpeed}</div>
                    <div className="text-gray-400">Average Speed</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-800/50 backdrop-blur-md p-8 rounded-xl border border-gray-700/50 shadow-lg shadow-black/20 relative overflow-hidden group hover:shadow-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="text-4xl font-bold text-purple-400 mb-2">{cityData.vpnUsage.percentage}%</div>
                    <div className="text-gray-400">VPN Usage</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-800/50 backdrop-blur-md p-8 rounded-xl border border-gray-700/50 shadow-lg shadow-black/20 relative overflow-hidden group hover:shadow-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="text-4xl font-bold text-green-400 mb-2">{cityData.internetStats.mainProviders.length}</div>
                    <div className="text-gray-400">Major ISPs</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-800/50 backdrop-blur-md p-8 rounded-xl border border-gray-700/50 shadow-lg shadow-black/20 relative overflow-hidden group hover:shadow-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="text-4xl font-bold text-yellow-400 mb-2">{cityData.population.toLocaleString()}</div>
                    <div className="text-gray-400">Population</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Cards - Stack on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <Link 
                to="/best-vpns" 
                className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyber-blue/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-cyber-blue/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyber-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyber-blue transition-colors">Best VPNs</h3>
                </div>
                <p className="text-gray-400 mb-4">See our complete rankings and detailed reviews of the top VPN services</p>
                <span className="text-cyber-blue text-sm flex items-center">
                  Learn more 
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <Link 
                to="/compare-features" 
                className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyber-blue/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-500 transition-colors">Compare Features</h3>
                </div>
                <p className="text-gray-400 mb-4">Side-by-side comparison of security features, servers, and capabilities</p>
                <span className="text-purple-500 text-sm flex items-center">
                  Compare now 
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <Link 
                to="/compare-costs" 
                className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyber-blue/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-green-500 transition-colors">Price Comparison</h3>
                </div>
                <p className="text-gray-400 mb-4">Find the best deals and compare subscription plans</p>
                <span className="text-green-500 text-sm flex items-center">
                  View prices 
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* VPN Comparison Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-center mb-6">
                Recommended VPNs for {cityData.name}
              </h2>
              <VPNComparisonTable vpns={vpnData.slice(0, 3)} />
            </section>

            {/* Other sections - Add proper spacing and mobile-first layout */}
            <div className="space-y-8">
              {/* ... other sections ... */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default CityVPN; 