import React from 'react';

const QuickActions: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 hover:shadow-lg transition-all duration-300 border border-gray-700/50">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative">
          <svg className="w-8 h-8 text-cyber-blue mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <h3 className="text-lg font-semibold text-white mb-2">Speed Test</h3>
          <p className="text-sm text-gray-400">Compare VPN speeds across different servers and locations</p>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 hover:shadow-lg transition-all duration-300 border border-gray-700/50">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative">
          <svg className="w-8 h-8 text-cyber-blue mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <h3 className="text-lg font-semibold text-white mb-2">Security Check</h3>
          <p className="text-sm text-gray-400">Verify your VPN's encryption and security features</p>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 hover:shadow-lg transition-all duration-300 border border-gray-700/50">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative">
          <svg className="w-8 h-8 text-cyber-blue mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-semibold text-white mb-2">Deal Finder</h3>
          <p className="text-sm text-gray-400">Find the latest VPN discounts and special offers</p>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 hover:shadow-lg transition-all duration-300 border border-gray-700/50">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative">
          <svg className="w-8 h-8 text-cyber-blue mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          <h3 className="text-lg font-semibold text-white mb-2">Setup Guide</h3>
          <p className="text-sm text-gray-400">Step-by-step VPN configuration tutorials</p>
        </div>
      </div>
    </div>
  );
};

export default QuickActions; 