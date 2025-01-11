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

          {/* Public WiFi Security Map */}
          <section className="mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-cyber-blue mb-6">
                Public WiFi Security Map
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-2 bg-gray-900/50 rounded-xl h-[300px] overflow-hidden">
                  {/* Replace YOUR_API_KEY with actual key from .env */}
                  <iframe
                    title={`Map of ${cityData.name} hotspots`}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&q=${cityData.name},UK&zoom=13`}
                  ></iframe>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-900/50 p-4 rounded-xl">
                    <h3 className="font-semibold text-cyber-blue mb-2">High-Risk Areas</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Shopping Centers</li>
                      <li>• Train Stations</li>
                      <li>• Coffee Shops</li>
                      <li>• Public Libraries</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-xl">
                    <h3 className="font-semibold text-cyber-blue mb-2">Safety Tips</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Always enable VPN before connecting</li>
                      <li>• Use 2-factor authentication</li>
                      <li>• Avoid financial transactions</li>
                      <li>• Keep auto-connect enabled</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Speed Test Results */}
          <section className="mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-cyber-blue mb-6">
                Local Speed Test Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Without VPN</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm text-gray-400 mb-1">
                        <span>Download</span>
                        <span>{parseInt(cityData.internetStats.averageSpeed)} Mbps</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div className="h-2 bg-cyber-blue rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-gray-400 mb-1">
                        <span>Upload</span>
                        <span>{Math.round(parseInt(cityData.internetStats.averageSpeed) * 0.3)} Mbps</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div className="h-2 bg-cyber-blue rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">With VPN (Nearby Server)</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm text-gray-400 mb-1">
                        <span>Download</span>
                        <span>{Math.round(parseInt(cityData.internetStats.averageSpeed) * 0.9)} Mbps</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div className="h-2 bg-purple-500 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-gray-400 mb-1">
                        <span>Upload</span>
                        <span>{Math.round(parseInt(cityData.internetStats.averageSpeed) * 0.25)} Mbps</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div className="h-2 bg-purple-500 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Local Streaming Guide */}
          <section className="mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-cyber-blue mb-6">
                Streaming Guide for {cityData.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-900/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">BBC iPlayer</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>• Requires UK IP address</p>
                    <p>• Best servers: London, Manchester</p>
                    <p>• Minimum speed: 5 Mbps</p>
                  </div>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Netflix UK</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>• Local content available</p>
                    <p>• HD requires 25 Mbps</p>
                    <p>• Use nearby servers for best speed</p>
                  </div>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Sports Streaming</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>• Sky Sports access</p>
                    <p>• BT Sport compatibility</p>
                    <p>• Low latency servers recommended</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-cyber-blue mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Why do I need a VPN in {cityData.name}?
                  </h3>
                  <p className="text-gray-300">
                    With {cityData.vpnUsage.percentage}% of {cityData.name} residents using VPNs, 
                    it's essential for protecting your data on public WiFi, accessing geo-restricted content, 
                    and maintaining privacy from ISPs like {cityData.internetStats.mainProviders[0]}.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Will a VPN slow down my {cityData.internetStats.mainProviders[0]} connection?
                  </h3>
                  <p className="text-gray-300">
                    Using nearby servers, you can maintain up to 90% of your original speed 
                    (around {Math.round(parseInt(cityData.internetStats.averageSpeed) * 0.9)} Mbps). 
                    This is more than enough for streaming and gaming.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Which VPN servers should I use in {cityData.name}?
                  </h3>
                  <p className="text-gray-300">
                    For the best performance, connect to servers in {cityData.region} or nearby regions. 
                    This ensures optimal speeds while maintaining privacy and access to local services.
                  </p>
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