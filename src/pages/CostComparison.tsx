import { FC } from 'react';
import { Helmet } from 'react-helmet';
import VPNPriceCalculator from '../components/VPNPriceCalculator';

const CostComparison: FC = () => {
  return (
    <>
      <Helmet>
        <title>Compare VPN Costs - Best VPN UK</title>
        <meta name="description" content="Compare VPN costs and find the best value for your needs. Calculate total costs based on subscription length and number of devices." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <main className="max-w-5xl mx-auto px-4 py-12">
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
              Compare VPN Costs
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Find the most cost-effective VPN solution for your needs
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyber-blue/20">
              <h3 className="text-lg font-semibold text-cyber-blue mb-2">Long-term Savings</h3>
              <p className="text-gray-300">Compare how much you can save with longer subscription periods</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyber-blue/20">
              <h3 className="text-lg font-semibold text-cyber-blue mb-2">Multi-device Plans</h3>
              <p className="text-gray-300">Calculate costs based on the number of devices you need to protect</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyber-blue/20">
              <h3 className="text-lg font-semibold text-cyber-blue mb-2">Best Value</h3>
              <p className="text-gray-300">Find the most cost-effective VPN for your specific requirements</p>
            </div>
          </div>

          <section className="mb-16">
            <VPNPriceCalculator />
          </section>

          <section className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-cyber-blue/20">
            <h2 className="text-2xl font-bold text-cyber-blue mb-6">Money-Saving Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">🎯 Best Time to Buy</h3>
                <p className="text-gray-300">Look for special deals during Black Friday and Cyber Monday for the biggest discounts.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">💡 Subscription Length</h3>
                <p className="text-gray-300">Longer subscriptions typically offer better value, with discounts up to 80% off.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">👥 Family Plans</h3>
                <p className="text-gray-300">Some VPNs offer family plans that can protect multiple devices at a better price.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">🔄 Money-back Guarantee</h3>
                <p className="text-gray-300">All recommended VPNs offer 30-day money-back guarantees for risk-free testing.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default CostComparison; 