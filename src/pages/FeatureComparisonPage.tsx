import { FC } from 'react';
import { Helmet } from 'react-helmet';
import FeatureComparison from '../components/FeatureComparison';
import EditorChoice from '../components/EditorChoice';

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

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border-2 border-yellow-400/50 hover:border-yellow-400 transition-all duration-300">
              <EditorChoice />
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">NordVPN</h3>
              <p className="text-gray-300 text-sm">Best Overall Features</p>
              <div className="mt-2 text-yellow-400 text-2xl font-bold">98%</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">ExpressVPN</h3>
              <p className="text-gray-300 text-sm">Runner-up</p>
              <div className="mt-2 text-blue-400 text-2xl font-bold">95%</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">Surfshark</h3>
              <p className="text-gray-300 text-sm">Best Value</p>
              <div className="mt-2 text-purple-400 text-2xl font-bold">92%</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-green-400 mb-2">ProtonVPN</h3>
              <p className="text-gray-300 text-sm">Best Privacy</p>
              <div className="mt-2 text-green-400 text-2xl font-bold">90%</div>
            </div>
          </div>

          {/* Feature Categories */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-colors">
              <h3 className="text-lg font-semibold text-red-400 mb-2">Security</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Military-grade encryption</li>
                <li>• Kill switch protection</li>
                <li>• No-logs policy</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-colors">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Performance</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• High-speed servers</li>
                <li>• Global network</li>
                <li>• Unlimited bandwidth</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-colors">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Usability</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Easy-to-use apps</li>
                <li>• Multi-device support</li>
                <li>• 24/7 support</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">Streaming</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Netflix access</li>
                <li>• BBC iPlayer</li>
                <li>• Smart DNS</li>
              </ul>
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
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default FeatureComparisonPage; 