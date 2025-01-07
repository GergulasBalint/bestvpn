import React from 'react';
import { VPNTableData } from '../types/vpn';

interface VPNComparisonTableProps {
  vpns: VPNTableData[];
  className?: string;
}

const VPNComparisonTable: React.FC<VPNComparisonTableProps> = ({ vpns, className = '' }) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-700" itemScope itemType="http://schema.org/Table">
        <caption className="sr-only">Comparison of the top 6 VPNs for UK users</caption>
        <thead className="bg-gray-900/50">
          <tr>
            <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-cyber-blue uppercase tracking-wider">VPN Provider</th>
            <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-cyber-blue uppercase tracking-wider">UK Servers</th>
            <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-cyber-blue uppercase tracking-wider">Speed</th>
            <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-cyber-blue uppercase tracking-wider">Price (Monthly)</th>
            <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-cyber-blue uppercase tracking-wider">Streaming</th>
            <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-cyber-blue uppercase tracking-wider">Overall Rating</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {vpns.map((vpn) => (
            <tr key={vpn.name} className="hover:bg-gray-700/30 transition-colors duration-150" itemScope itemType="http://schema.org/Product">
              <td className="px-6 py-4 whitespace-nowrap font-medium text-white" itemProp="name">{vpn.name}</td>
              <td className="px-6 py-4 text-gray-300" itemProp="additionalProperty">{vpn.ukServers}</td>
              <td className="px-6 py-4 text-gray-300" itemProp="additionalProperty">{vpn.speed}</td>
              <td className="px-6 py-4 text-gray-300" itemProp="price">{vpn.price}</td>
              <td className="px-6 py-4 text-gray-300" itemProp="additionalProperty">{vpn.streaming}</td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${vpn.ratingClass}`} itemProp="aggregateRating">
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