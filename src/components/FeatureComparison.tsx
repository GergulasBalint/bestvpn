import React, { useState } from 'react';
import { vpnData } from '../data/vpnData';

interface Feature {
  name: string;
  description: string;
  category: 'security' | 'performance' | 'usability' | 'streaming' | 'privacy' | 'business';
}

const features: Feature[] = [
  {
    name: "Kill Switch",
    description: "Automatically cuts internet if VPN drops",
    category: "security"
  },
  {
    name: "Double VPN",
    description: "Routes traffic through two VPN servers for extra security",
    category: "security"
  },
  {
    name: "DNS Leak Protection",
    description: "Prevents DNS requests from revealing your location",
    category: "security"
  },
  {
    name: "AES-256 Encryption",
    description: "Military-grade encryption for all traffic",
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
  {
    name: "Server Network Size",
    description: "Number of servers and locations available",
    category: "performance"
  },
  {
    name: "WireGuard Support",
    description: "Modern, fast VPN protocol for better speeds",
    category: "performance"
  },
  {
    name: "Split Tunneling",
    description: "Choose which apps use VPN connection",
    category: "performance"
  },
  {
    name: "P2P Optimized",
    description: "Servers optimized for peer-to-peer sharing",
    category: "performance"
  },
  {
    name: "Netflix Support",
    description: "Reliably unblocks Netflix in different regions",
    category: "streaming"
  },
  {
    name: "BBC iPlayer Access",
    description: "Watch BBC iPlayer from anywhere",
    category: "streaming"
  },
  {
    name: "Smart DNS",
    description: "Stream without speed loss on smart TVs",
    category: "streaming"
  },
  {
    name: "Multi-Platform Support",
    description: "Apps for all major streaming devices",
    category: "streaming"
  },
  {
    name: "24/7 Live Chat",
    description: "Round-the-clock customer support",
    category: "usability"
  },
  {
    name: "No-Logs Policy",
    description: "Verified no-logs policy for privacy",
    category: "usability"
  },
  {
    name: "Unlimited Devices",
    description: "Connect as many devices as you want",
    category: "usability"
  },
  {
    name: "Ad Blocker",
    description: "Built-in ad and malware blocking",
    category: "usability"
  },
  {
    name: "Anonymous Payment",
    description: "Pay with crypto or gift cards",
    category: "privacy"
  },
  {
    name: "RAM-Only Servers",
    description: "No data stored on physical drives",
    category: "privacy"
  },
  {
    name: "Warrant Canary",
    description: "Transparency about government requests",
    category: "privacy"
  },
  {
    name: "Onion Over VPN",
    description: "Route traffic through Tor network",
    category: "privacy"
  },
  {
    name: "Privacy Audit",
    description: "Independent security audits",
    category: "privacy"
  },
  {
    name: "Dedicated IP",
    description: "Static IP address for business use",
    category: "business"
  },
  {
    name: "Team Management",
    description: "Central dashboard for team accounts",
    category: "business"
  },
  {
    name: "API Access",
    description: "Programmatic VPN management",
    category: "business"
  },
  {
    name: "Priority Support",
    description: "Dedicated business support line",
    category: "business"
  },
  {
    name: "GDPR Compliance",
    description: "Meets EU data protection standards",
    category: "business"
  }
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
    "Low Latency",
    "Anonymous Payment",
    "RAM-Only Servers",
    "Warrant Canary",
    "Onion Over VPN",
    "Privacy Audit",
    "Dedicated IP",
    "Team Management",
    "API Access",
    "Priority Support",
    "GDPR Compliance"
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
        {['security', 'performance', 'usability', 'streaming', 'privacy', 'business'].map(category => (
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
                <th className="text-left py-5 px-6 text-gray-300 font-medium w-1/4">
                  Feature
                </th>
                {vpnData.map(vpn => (
                  <th 
                    key={vpn.id} 
                    className={`text-center pt-16 pb-5 px-6 relative w-[15%] ${
                      vpn.id === 'nordvpn' 
                        ? 'border-x-2 border-t-2 border-yellow-400/50 bg-yellow-400/5' 
                        : ''
                    }`}
                  >
                    {vpn.id === 'nordvpn' && (
                      <img 
                        src="/images/editors-choice-badge.png"
                        alt="Editor's Choice"
                        className="absolute top-0 -right-3 w-16 h-16"
                      />
                    )}
                    <span className="font-semibold text-white">{vpn.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredFeatures.map((feature) => (
                <tr 
                  key={feature.name} 
                  className={`border-b border-gray-700/30 hover:bg-gray-800/40 transition-all duration-300`}
                >
                  <td className="py-6 px-8">
                    <div className="font-medium text-white text-lg mb-1">{feature.name}</div>
                    <div className="text-sm text-gray-400">{feature.description}</div>
                  </td>
                  {vpnData.map(vpn => (
                    <td 
                      key={vpn.id} 
                      className={`text-center py-6 px-8 ${
                        vpn.id === 'nordvpn' 
                          ? 'border-x-2 border-yellow-400/50 bg-yellow-400/5' 
                          : ''
                      }`}
                    >
                      {vpnFeatures[vpn.id]?.includes(feature.name) ? (
                        <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${
                          vpn.id === 'nordvpn' 
                            ? 'bg-yellow-400/10 text-yellow-400' 
                            : 'bg-green-400/10 text-green-400'
                        }`}>
                          <svg 
                            className="w-6 h-6" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path 
                              fillRule="evenodd" 
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-400/10 text-red-400">
                          <svg 
                            className="w-6 h-6" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path 
                              fillRule="evenodd" 
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                              clipRule="evenodd"
                            />
                          </svg>
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