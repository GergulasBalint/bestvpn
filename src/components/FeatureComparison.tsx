import React, { useState } from 'react';
import { vpnData } from '../data/vpnData';
import EditorChoice from '../components/EditorChoice';

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
  {
    name: "WireGuard Protocol",
    description: "Modern protocol for faster speeds",
    category: "performance"
  },
  {
    name: "10Gbps Servers",
    description: "High-speed server infrastructure",
    category: "performance"
  },
  {
    name: "Server Network Size",
    description: "Large network of servers worldwide",
    category: "performance"
  },
  {
    name: "Low Latency",
    description: "Optimized for gaming and real-time applications",
    category: "performance"
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
    "Smart DNS",
    "WireGuard Protocol",
    "10Gbps Servers",
    "Server Network Size",
    "Low Latency"
  ],
  'expressvpn': [
    "Kill Switch", 
    "No-logs Policy", 
    "Split Tunneling", 
    "Netflix Support",
    "Smart DNS",
    "WireGuard Protocol",
    "10Gbps Servers",
    "Low Latency"
  ],
  'surfshark': [
    "Kill Switch", 
    "No-logs Policy", 
    "Split Tunneling", 
    "Netflix Support", 
    "Multi-hop", 
    "Unlimited Devices",
    "Ad Blocker",
    "WireGuard Protocol",
    "Server Network Size",
    "Low Latency"
  ],
  'cyberghost': [
    "Kill Switch",
    "No-logs Policy",
    "Split Tunneling",
    "Netflix Support",
    "Ad Blocker",
    "WireGuard Protocol",
    "Server Network Size"
  ],
  'protonvpn': [
    "Kill Switch",
    "No-logs Policy",
    "Split Tunneling",
    "Netflix Support",
    "Multi-hop",
    "WireGuard Protocol",
    "10Gbps Servers"
  ],
  'privateinternetaccess': [
    "Kill Switch",
    "No-logs Policy",
    "Split Tunneling",
    "Netflix Support",
    "Ad Blocker",
    "WireGuard Protocol",
    "Server Network Size"
  ]
};

const FeatureComparison: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredFeatures = selectedCategory === 'all' 
    ? features 
    : features.filter(f => f.category === selectedCategory);

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
      <h2 className="text-2xl font-bold text-cyber-blue mb-6">Feature Comparison</h2>
      
      <div className="mb-8 flex flex-wrap gap-3">
        <button 
          onClick={() => setSelectedCategory('all')}
          className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
            selectedCategory === 'all' 
              ? 'bg-cyber-blue text-white shadow-lg shadow-cyber-blue/20' 
              : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
          }`}
        >
          All Features
        </button>
        {['security', 'performance', 'usability', 'streaming'].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2.5 rounded-lg font-medium capitalize transition-all duration-300 ${
              selectedCategory === category 
                ? 'bg-cyber-blue text-white shadow-lg shadow-cyber-blue/20' 
                : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="relative">
        <div className="overflow-x-auto -mx-8 px-8">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="bg-gray-800/80">
                <th className="text-left py-8 px-6 text-gray-300 font-medium w-1/4 align-bottom">
                  Feature
                </th>
                {vpnData.map(vpn => (
                  <th 
                    key={vpn.id} 
                    className={`text-center py-5 px-6 relative w-[15%] ${
                      vpn.id === 'nordvpn' 
                        ? 'border-x-2 border-t-2 border-yellow-400/50 bg-yellow-400/5' 
                        : ''
                    }`}
                  >
                    {vpn.id === 'nordvpn' && (
                      <img 
                        src="/images/editors-choice-badge.png"
                        alt="Editor's Choice"
                        className="absolute -top-4 -right-4 w-16 h-16"
                      />
                    )}
                    <span className="font-semibold text-white">{vpn.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredFeatures.map((feature, idx) => (
                <tr 
                  key={feature.name} 
                  className={`border-t border-gray-700/50 transition-colors ${
                    idx % 2 === 0 ? 'bg-gray-800/30' : 'bg-gray-800/10'
                  }`}
                >
                  <td className="py-4 px-6">
                    <div className="font-medium text-white">{feature.name}</div>
                    <div className="text-sm text-gray-400 mt-1">{feature.description}</div>
                  </td>
                  {vpnData.map(vpn => (
                    <td 
                      key={vpn.id} 
                      className={`text-center py-4 px-6 ${
                        vpn.id === 'nordvpn' 
                          ? 'border-x-2 border-yellow-400/50 bg-yellow-400/5' 
                          : ''
                      }`}
                    >
                      {vpnFeatures[vpn.id]?.includes(feature.name) ? (
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                          vpn.id === 'nordvpn' 
                            ? 'bg-yellow-400/10 text-yellow-400' 
                            : 'bg-green-400/10 text-green-400'
                        }`}>
                          ✓
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-400/10 text-red-400">
                          ✗
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-800/50 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-800/50 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default FeatureComparison; 