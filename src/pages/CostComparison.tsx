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
              Calculate and compare the costs of different VPN services based on your needs.
            </p>
          </header>

          <VPNPriceCalculator />
        </main>
      </div>
    </>
  );
};

export default CostComparison; 