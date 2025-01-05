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
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
              Compare VPN Features
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Compare the features of different VPN services to find the one that best suits your needs.
            </p>
          </header>

          <FeatureComparison />
        </main>
      </div>
    </>
  );
};

export default FeatureComparisonPage; 