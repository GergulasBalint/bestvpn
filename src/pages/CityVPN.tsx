import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { vpnData } from '../data/vpnData';
import { getCity } from '../data/cityData';
import NearbyCities from '../components/NearbyCities';
import VPNComparisonTable from '../components/VPNComparisonTable';

const CityVPN: FC = () => {
  const { cityName } = useParams<{ cityName: string }>();
  const cityData = getCity(cityName || '');
  
  if (!cityData) return <div>City not found</div>;

  return (
    <>
      <Helmet>
        <title>Best VPN for {cityData.name} | Local Guide {new Date().getFullYear()}</title>
        <meta name="description" content={`Find the best VPN for ${cityData.name}. Compare speeds, features, and local server performance. Average speeds of ${cityData.internetStats.averageSpeed}.`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        {/* Hero Section with City Stats */}
        <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-transparent py-24">
          <div className="absolute inset-0 bg-[url('/images/cyber-grid.svg')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
                Best VPN for {cityData.name}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Local insights and recommendations for {cityData.region} users
              </p>
            </div>

            {/* City Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
                <div className="text-4xl font-bold text-cyber-blue mb-2">{cityData.internetStats.averageSpeed}</div>
                <div className="text-gray-400">Average Speed</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">{cityData.vpnUsage.percentage}%</div>
                <div className="text-gray-400">VPN Usage</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">{cityData.internetStats.mainProviders.length}</div>
                <div className="text-gray-400">Major ISPs</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">{cityData.population.toLocaleString()}</div>
                <div className="text-gray-400">Population</div>
              </div>
            </div>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Local Insights Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
                <h2 className="text-2xl font-bold text-cyber-blue mb-6">Local VPN Usage Insights</h2>
                <div className="space-y-4">
                  {cityData.vpnUsage.popularUses.map((use, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-cyber-blue/10 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-cyber-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300">{use}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
                <h2 className="text-2xl font-bold text-cyber-blue mb-6">Internet Infrastructure</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Average Speed:</span>
                    <span className="text-cyber-blue font-semibold">{cityData.internetStats.averageSpeed}</span>
                  </div>
                  <div>
                    <p className="text-gray-300 mb-2">Main Providers:</p>
                    <div className="flex flex-wrap gap-2">
                      {cityData.internetStats.mainProviders.map((provider, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
                          {provider}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recommended VPNs Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Top VPN Recommendations for {cityData.name}
            </h2>
            <VPNComparisonTable vpns={vpnData.slice(0, 3)} className="mb-8" />
          </section>

          {/* Local Tips Section */}
          <section className="mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-cyber-blue mb-6">
                Local VPN Tips for {cityData.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Best Practices</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <span className="text-cyber-blue">•</span>
                      <span>Connect to servers in {cityData.region} for optimal speeds</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-cyber-blue">•</span>
                      <span>Use WireGuard protocol for best performance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-cyber-blue">•</span>
                      <span>Enable kill switch for public WiFi protection</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Local Considerations</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <span className="text-cyber-blue">•</span>
                      <span>ISP compatibility with {cityData.internetStats.mainProviders[0]}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-cyber-blue">•</span>
                      <span>Peak usage times in {cityData.name}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-cyber-blue">•</span>
                      <span>Local streaming service access</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Nearby Cities */}
          <NearbyCities currentCity={cityData.name} />
        </main>
      </div>
    </>
  );
};

export default CityVPN; 