import { Helmet } from 'react-helmet';
import VPNComparisonTable from '../components/VPNComparisonTable';
import VPNDetailSection from '../components/VPNDetailSection';
import { vpnData } from '../data/vpnData';
import { FC } from 'react';
import RelatedLinks from '../components/RelatedLinks';

const BestVPNs: FC = () => {
  return (
    <>
      <Helmet>
        <title>Top 6 VPNs for Privacy in the UK</title>
        <meta name="description" content="Compare the best VPN services for the UK. In-depth analysis of security, speed, and features." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-transparent py-24 mb-12">
          <div className="absolute inset-0 bg-[url('/images/cyber-grid.svg')] opacity-10"></div>
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
                Best VPN Services 2024
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Expert-tested and verified. Compare the top VPN services for security, speed, and streaming.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
                <div className="text-4xl font-bold text-cyber-blue mb-2">256</div>
                <div className="text-gray-400">Bit Encryption</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">5500+</div>
                <div className="text-gray-400">Servers Worldwide</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-gray-400">Average Speed</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-400">Support Available</div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold text-white mb-3">Maximum Security</h3>
                <p className="text-gray-400">
                  Military-grade encryption and advanced security features keep your data safe.
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
                <p className="text-gray-400">
                  Optimized servers ensure minimal speed loss while browsing and streaming.
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
                <div className="text-3xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-white mb-3">Global Access</h3>
                <p className="text-gray-400">
                  Unlock content worldwide with servers in 60+ countries.
                </p>
              </div>
            </div>
          </div>
        </div>

        <main className="max-w-6xl mx-auto px-4 py-12">
          {/* Existing VPN comparison content */}
          <VPNComparisonTable vpns={vpnData} />
          
          {vpnData.map(vpn => (
            <VPNDetailSection key={vpn.id} vpn={vpn} />
          ))}

          <RelatedLinks currentPath="/best-vpns" />
        </main>
      </div>
    </>
  );
};

export default BestVPNs; 