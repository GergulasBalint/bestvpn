import { FC } from 'react';
import { Helmet } from 'react-helmet';
import FeatureComparison from '../components/FeatureComparison';

const FeatureComparisonPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Compare VPN Features - Best VPN UK</title>
        <meta name="description" content="Compare features of top VPN services. See which VPNs offer the security and performance features you need." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <main className="max-w-5xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
              Compare VPN Features
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Find the perfect VPN with all the features you need
            </p>
          </header>

          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-colors">
              <h3 className="text-lg font-semibold text-red-400 mb-2">Security</h3>
              <p className="text-gray-300 text-sm">Encryption, kill switch, and leak protection features</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-colors">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Performance</h3>
              <p className="text-gray-300 text-sm">Speed, server network, and connection reliability</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-colors">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Usability</h3>
              <p className="text-gray-300 text-sm">Apps, device support, and ease of use</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">Streaming</h3>
              <p className="text-gray-300 text-sm">Access to streaming services and smart DNS</p>
            </div>
          </div>

          {/* Feature Comparison Table */}
          <section className="mb-16">
            <FeatureComparison />
          </section>

          {/* Feature Highlights */}
          <section className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-cyber-blue/20">
            <h2 className="text-2xl font-bold text-cyber-blue mb-6">Essential VPN Features Explained</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">🛡️ Security Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Military-grade encryption protects your data</li>
                  <li>• Kill switch prevents data leaks</li>
                  <li>• No-logs policy ensures privacy</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">🚀 Performance Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Large server networks reduce congestion</li>
                  <li>• Modern protocols optimize speed</li>
                  <li>• Split tunneling balances performance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">📱 Usability Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• User-friendly apps for all devices</li>
                  <li>• Auto-connect simplifies protection</li>
                  <li>• Multiple device connections</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">🎬 Streaming Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Unblocks major streaming services</li>
                  <li>• Smart DNS for faster streaming</li>
                  <li>• Optimized streaming servers</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default FeatureComparisonPage; 