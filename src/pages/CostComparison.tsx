import React from 'react';
import { Helmet } from 'react-helmet';
import VPNComparisonTable from '../components/VPNComparisonTable';
import { vpnTableData } from '../data/vpnData';
import VPNPriceCalculator from '../components/VPNPriceCalculator';
import QuickActions from '../components/QuickActions';
import VPNDeals from '../components/VPNDeals';
import RelatedLinks from '../components/RelatedLinks';
import CyberBackground from '../components/CyberBackground';

const CostComparison: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Best VPN UK Price Comparison</title>
        <meta name="description" content="Compare VPN costs and features to find the best value for your needs. Updated pricing and detailed analysis." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative text-white">
        <CyberBackground />
        <div className="relative z-10 py-12">
          {/* Hero Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
                Best VPN UK Price Comparison
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find the perfect balance of features and affordability with our comprehensive VPN comparison
              </p>
            </div>

            {/* Price Range Indicator */}
            <div className="mt-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-lg bg-gray-700/30">
                  <div className="text-lg font-semibold text-cyber-blue mb-2">Budget Friendly</div>
                  <div className="text-3xl font-bold text-white mb-2">£1.69 - £2.99</div>
                  <div className="text-sm text-gray-400">Perfect for cost-conscious users</div>
                </div>
                <div className="text-center p-6 rounded-lg bg-gray-700/30">
                  <div className="text-lg font-semibold text-cyber-blue mb-2">Mid Range</div>
                  <div className="text-3xl font-bold text-white mb-2">£3.00 - £4.99</div>
                  <div className="text-sm text-gray-400">Balance of features and cost</div>
                </div>
                <div className="text-center p-6 rounded-lg bg-gray-700/30">
                  <div className="text-lg font-semibold text-cyber-blue mb-2">Premium</div>
                  <div className="text-3xl font-bold text-white mb-2">£5.00+</div>
                  <div className="text-sm text-gray-400">Maximum features and support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <VPNPriceCalculator />
          </div>

          {/* Add the deals section here */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <VPNDeals />
          </div>

          {/* Main Comparison Table */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <QuickActions />
            <VPNComparisonTable vpns={vpnTableData} className="mb-12" />
          </div>

          {/* Additional Information */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <h2 className="text-2xl font-bold text-cyber-blue mb-4">
                  Understanding VPN Pricing
                </h2>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-cyber-blue mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Longer subscriptions offer better value</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-cyber-blue mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Premium features justify higher costs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-cyber-blue mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Money-back guarantees protect your investment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <h2 className="text-2xl font-bold text-cyber-blue mb-4">
                  Value Considerations
                </h2>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-cyber-blue mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Server network size and locations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-cyber-blue mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Connection speed and reliability</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-cyber-blue mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Customer support quality</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 mb-16">
              <h2 className="text-2xl font-bold text-cyber-blue mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Why do VPN prices vary so much?</h3>
                  <p className="text-gray-300">Prices reflect differences in server networks, features, support quality, and business models.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Are expensive VPNs better?</h3>
                  <p className="text-gray-300">Not necessarily. The best VPN depends on your specific needs and usage patterns.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Should I choose the cheapest option?</h3>
                  <p className="text-gray-300">Consider the balance of features, reliability, and support alongside price.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <RelatedLinks currentPath="/compare-costs" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CostComparison; 