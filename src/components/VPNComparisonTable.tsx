import React from 'react';
import { VPNTableData } from '../types/vpn';

interface VPNComparisonTableProps {
  vpns: VPNTableData[];
  className?: string;
}

const getVpnLogo = (vpnId: string) => {
  const logoMap: { [key: string]: string } = {
    nordvpn: '/images/vpn/NordVPN.jpg',
    expressvpn: '/images/vpn/ExpressVPN.png',
    surfshark: '/images/vpn/surfshark.jpg',
    cyberghost: '/images/vpn/CyberGhost.jpg',
    protonvpn: '/images/vpn/ProtonVPN.jpg',
    privateinternetaccess: '/images/vpn/PrivateInternetAccessVPN.jpg'
  };
  return logoMap[vpnId];
};

const VPNComparisonTable: React.FC<VPNComparisonTableProps> = ({ vpns, className = '' }) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-700">
        <caption className="sr-only">Comparison of the top 6 VPNs for UK users</caption>
        
        <thead>
          <tr className="bg-gradient-to-r from-gray-900/80 to-gray-800/80">
            <th scope="col" className="px-8 py-6 text-left text-sm font-semibold text-cyber-blue uppercase tracking-wider">
              VPN Provider
            </th>
            <th scope="col" className="px-8 py-6 text-left text-sm font-semibold text-cyber-blue uppercase tracking-wider">
              UK Servers
            </th>
            <th scope="col" className="px-8 py-6 text-left text-sm font-semibold text-cyber-blue uppercase tracking-wider">
              Speed
            </th>
            <th scope="col" className="px-8 py-6 text-left text-sm font-semibold text-cyber-blue uppercase tracking-wider">
              Price (Monthly)
            </th>
            <th scope="col" className="px-8 py-6 text-left text-sm font-semibold text-cyber-blue uppercase tracking-wider">
              Streaming
            </th>
            <th scope="col" className="px-8 py-6 text-left text-sm font-semibold text-cyber-blue uppercase tracking-wider">
              Rating
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-700/50">
          {vpns.map((vpn) => (
            <tr 
              key={vpn.name} 
              className={`hover:bg-gray-800/40 transition-all duration-300 ${
                vpn.id === 'nordvpn' ? 'bg-yellow-400/5 relative' : ''
              }`}
            >
              <td className="px-8 py-6">
                <div className="flex items-center space-x-3">
                  <img 
                    src={getVpnLogo(vpn.id)}
                    alt={`${vpn.name} logo`}
                    className="w-10 h-10 object-contain rounded-full bg-white p-1"
                  />
                  <span className="font-medium text-white">{vpn.name}</span>
                </div>
              </td>
              <td className="px-8 py-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-700/50 text-gray-300">
                  {vpn.ukServers}
                </span>
              </td>
              <td className="px-8 py-6">
                <div className="flex items-center">
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-cyber-blue rounded-full"
                      style={{ 
                        width: `${(parseFloat(vpn.speed) / 100) * 100}%` 
                      }}
                    />
                  </div>
                  <span className="ml-3 text-gray-300">{vpn.speed}</span>
                </div>
              </td>
              <td className="px-8 py-6">
                <span className="text-lg font-semibold text-white">{vpn.price}</span>
                <span className="text-sm text-gray-400 ml-1">/mo</span>
              </td>
              <td className="px-8 py-6">
                <div className="flex flex-wrap gap-2">
                  {vpn.streaming.split(', ').map((service) => (
                    <span 
                      key={service}
                      className="px-2 py-1 text-xs rounded-md bg-gray-700/50 text-gray-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-8 py-6">
                <span className={`
                  px-4 py-2 rounded-full font-semibold text-sm
                  ${vpn.id === 'nordvpn' 
                    ? 'bg-yellow-400/20 text-yellow-400' 
                    : 'bg-green-400/20 text-green-400'
                  }
                `}>
                  {vpn.rating}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VPNComparisonTable; 