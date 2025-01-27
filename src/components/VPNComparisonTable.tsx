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
    <div className={`overflow-x-auto -mx-4 px-4 ${className}`}>
      <div className="min-w-[600px] mb-4">
        <table className="w-full bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-700">
          <thead>
            <tr className="bg-gradient-to-r from-gray-900/80 to-gray-800/80">
              <th scope="col" className="px-4 py-4 text-left text-sm font-semibold text-cyber-blue uppercase tracking-wider w-1/3">
                VPN Provider
              </th>
              <th scope="col" className="px-4 py-4 text-center text-sm font-semibold text-cyber-blue uppercase tracking-wider">
                UK Servers
              </th>
              <th scope="col" className="px-4 py-4 text-center text-sm font-semibold text-cyber-blue uppercase tracking-wider">
                Speed
              </th>
              <th scope="col" className="px-4 py-4 text-center text-sm font-semibold text-cyber-blue uppercase tracking-wider">
                Price/mo
              </th>
              <th scope="col" className="px-4 py-4 text-center text-sm font-semibold text-cyber-blue uppercase tracking-wider">
                Streaming
              </th>
              <th scope="col" className="px-4 py-4 text-center text-sm font-semibold text-cyber-blue uppercase tracking-wider">
                Devices
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {vpns.map((vpn) => (
              <tr 
                key={vpn.id} 
                className={`hover:bg-gray-800/50 transition-colors relative ${
                  vpn.id === 'nordvpn' ? 'border-4 border-yellow-400/90 shadow-[0_0_25px_rgba(251,191,36,0.5)]' : ''
                }`}
              >
                <td className="px-4 py-4 whitespace-nowrap relative">
                  {vpn.id === 'nordvpn' && (
                    <div className="absolute -top-4 -right-4 z-10">
                      <img 
                        src="/images/editors-choice-badge.png" 
                        alt="Editor's Choice"
                        className="w-16 h-16"
                      />
                    </div>
                  )}
                  <div className="flex items-center space-x-3">
                    <img 
                      src={getVpnLogo(vpn.id)} 
                      alt={vpn.name}
                      className="w-12 h-12 object-contain"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-medium text-white">{vpn.name}</div>
                      <div className="text-sm text-cyber-blue">{vpn.price}/mo</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-center text-white">
                  {vpn.ukServers}
                </td>
                <td className="px-4 py-4">
                  <div className="flex flex-col items-center">
                    <div className="text-cyber-blue font-medium">{vpn.speed}</div>
                    <div className="w-24 bg-gray-700 rounded-full h-2 mt-1">
                      <div 
                        className="bg-cyber-blue h-2 rounded-full" 
                        style={{ 
                          width: `${(parseFloat(vpn.speed) / 100) * 100}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-center text-white">
                  {vpn.price}
                </td>
                <td className="px-4 py-4 text-center text-white">
                  {vpn.streaming}
                </td>
                <td className="px-4 py-4 text-center text-white">
                  {vpn.deviceLimit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VPNComparisonTable; 