import React, { useState } from 'react';
import { vpnData } from '../data/vpnData';

interface Feature {
  name: string;
  description: string;
  category: 'security' | 'performance' | 'usability' | 'streaming';
}

const features: Feature[] = [
  {
    name: "Kill Switch",
    description: "Automatically cuts internet if VPN drops",
    category: "security"
  },
  {
    name: "No-logs Policy",
    description: "Provider doesn't store user activity data",
    category: "security"
  },
  {
    name: "Split Tunneling",
    description: "Choose which apps use VPN",
    category: "usability"
  },
  {
    name: "Netflix Support",
    description: "Works with Netflix and other streaming services",
    category: "streaming"
  },
  {
    name: "Multi-hop",
    description: "Routes through multiple servers",
    category: "security"
  },
  {
    name: "Unlimited Devices",
    description: "No limit on connected devices",
    category: "usability"
  },
  {
    name: "Ad Blocker",
    description: "Blocks ads and malicious websites",
    category: "security"
  },
  {
    name: "Smart DNS",
    description: "Optimized for streaming services",
    category: "streaming"
  },
];

const vpnFeatures: Record<string, string[]> = {
  'nordvpn': [
    "Kill Switch",
    "No-logs Policy",
    "Split Tunneling",
    "Netflix Support",
    "Multi-hop",
    "Ad Blocker",
    "Smart DNS"
  ],
  'expressvpn': ["Kill Switch", "No-logs Policy", "Split Tunneling", "Netflix Support"],
  'surfshark': ["Kill Switch", "No-logs Policy", "Split Tunneling", "Netflix Support", "Multi-hop", "Unlimited Devices"],
  // Add features for other VPNs
};

const FeatureComparison: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredFeatures = selectedCategory === 'all' 
    ? features 
    : features.filter(f => f.category === selectedCategory);

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
      <h2 className="text-2xl font-bold text-cyber-blue mb-4">Feature Comparison</h2>
      
      <div className="mb-6 flex gap-2">
        <button 
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded ${
            selectedCategory === 'all' ? 'bg-cyber-blue text-white' : 'bg-gray-800 text-gray-300'
          }`}
        >
          All
        </button>
        {['security', 'performance', 'usability', 'streaming'].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded capitalize ${
              selectedCategory === category ? 'bg-cyber-blue text-white' : 'bg-gray-800 text-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-4 px-4">Feature</th>
              {vpnData.map(vpn => (
                <th key={vpn.id} className="text-center py-4 px-4">{vpn.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredFeatures.map(feature => (
              <tr key={feature.name} className="border-b border-gray-800">
                <td className="py-4 px-4">
                  <div className="font-semibold text-white">{feature.name}</div>
                  <div className="text-sm text-gray-400">{feature.description}</div>
                </td>
                {vpnData.map(vpn => (
                  <td key={vpn.id} className="text-center py-4 px-4">
                    {vpnFeatures[vpn.id]?.includes(feature.name) ? (
                      <span className="text-green-400">✓</span>
                    ) : (
                      <span className="text-red-400">✗</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeatureComparison; 