import React from 'react';
import { vpnTableData } from '../data/vpnData';

const VPNDeals: React.FC = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
        Limited Time VPN Deals
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {vpnTableData.slice(0, 3).map((vpn) => (
          <div 
            key={vpn.id}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyber-blue/50 transition-all duration-300"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 via-purple-500/10 to-cyber-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
            
            {/* Content */}
            <div className="relative p-6">
              {/* VPN Logo and Name */}
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={`/images/vpn/${vpn.id}.jpg`}
                  alt={`${vpn.name} logo`}
                  className="w-12 h-12 rounded-full bg-white p-1"
                />
                <h3 className="text-xl font-bold text-white">{vpn.name}</h3>
              </div>

              {/* Deal Badge */}
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-400/20 text-green-400 text-sm font-semibold">
                  Save 80%
                </span>
              </div>

              {/* Price Display */}
              <div className="text-center mb-6">
                <div className="text-gray-400 line-through mb-1">£9.99/mo</div>
                <div className="text-3xl font-bold text-cyber-blue">
                  {vpn.price}
                  <span className="text-lg text-gray-400">/mo</span>
                </div>
                <div className="text-sm text-gray-400 mt-1">2-year plan</div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-cyber-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {vpn.ukServers} UK Servers
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-cyber-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Speed: {vpn.speed}
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-cyber-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {vpn.streaming}
                </li>
              </ul>

              {/* CTA Button */}
              <button className="w-full py-3 px-4 bg-cyber-blue hover:bg-cyber-blue/90 text-gray-900 font-semibold rounded-lg transition-colors duration-200">
                Get This Deal
              </button>

              {/* Timer */}
              <div className="text-center mt-4 text-sm text-gray-400">
                Offer ends in: 2d 15h 30m
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VPNDeals; 