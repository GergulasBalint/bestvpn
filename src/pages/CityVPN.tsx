import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { vpnData } from '../data/vpnData';
import { getCity } from '../data/cityData';
import NearbyCities from '../components/NearbyCities';
import VPNComparisonTable from '../components/VPNComparisonTable';
import { Link } from 'react-router-dom';

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

        {/* Quick Navigation Cards */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        </section>

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

          {/* Replace the map section with this Interactive Hotspot Section */}
          <section className="mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-cyber-blue mb-6">
                Public WiFi Security Zones
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-red-500/20 to-red-900/20 p-6 rounded-xl border border-red-500/30">
                  <h3 className="text-xl font-semibold text-red-400 mb-4">High Risk Zones</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <span className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </span>
                      <span className="text-gray-300">Shopping Centers & Malls</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </span>
                      <span className="text-gray-300">Train & Bus Stations</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-900/20 p-6 rounded-xl border border-yellow-500/30">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-4">Medium Risk Zones</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <span className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </span>
                      <span className="text-gray-300">Cafes & Restaurants</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </span>
                      <span className="text-gray-300">Hotels & Hostels</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-500/20 to-green-900/20 p-6 rounded-xl border border-green-500/30">
                  <h3 className="text-xl font-semibold text-green-400 mb-4">Protected with VPN</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </span>
                      <span className="text-gray-300">Encrypted Connection</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </span>
                      <span className="text-gray-300">Safe for Banking</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Security Tips */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-cyber-blue mb-4">Essential Security Steps</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3 text-gray-300">
                      <span className="text-cyber-blue">1.</span>
                      <span>Enable VPN before connecting to any public WiFi</span>
                    </li>
                    <li className="flex items-center space-x-3 text-gray-300">
                      <span className="text-cyber-blue">2.</span>
                      <span>Use 2-factor authentication for sensitive accounts</span>
                    </li>
                    <li className="flex items-center space-x-3 text-gray-300">
                      <span className="text-cyber-blue">3.</span>
                      <span>Keep auto-connect to VPN enabled on your devices</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-cyber-blue mb-4">Additional Protection</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3 text-gray-300">
                      <span className="text-cyber-blue">•</span>
                      <span>Use HTTPS-only mode in your browser</span>
                    </li>
                    <li className="flex items-center space-x-3 text-gray-300">
                      <span className="text-cyber-blue">•</span>
                      <span>Enable firewall on your device</span>
                    </li>
                    <li className="flex items-center space-x-3 text-gray-300">
                      <span className="text-cyber-blue">•</span>
                      <span>Keep your device's software updated</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Add a new VPN Setup Guide section */}
          <section className="mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-cyber-blue mb-6">
                Quick Setup Guide for {cityData.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gray-900/50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-cyber-blue mb-4">1</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Choose Provider</h3>
                  <p className="text-gray-300 text-sm">Select a VPN from our recommended providers above</p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-cyber-blue mb-4">2</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Install App</h3>
                  <p className="text-gray-300 text-sm">Download and install the VPN application</p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-cyber-blue mb-4">3</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Connect</h3>
                  <p className="text-gray-300 text-sm">Select a {cityData.region} server and connect</p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-cyber-blue mb-4">4</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Verify</h3>
                  <p className="text-gray-300 text-sm">Check your connection is secure and working</p>
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