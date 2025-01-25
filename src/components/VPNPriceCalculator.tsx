import React, { useState } from 'react';
import { vpnTableData } from '../data/vpnData';

const VPNPriceCalculator: React.FC = () => {
  const [months, setMonths] = useState<number>(1);
  const [selectedVpnId, setSelectedVpnId] = useState<string>('nordvpn');

  const selectedVpn = vpnTableData.find(vpn => vpn.id === selectedVpnId);
  const basePrice = selectedVpn ? parseFloat(selectedVpn.price.replace('£', '')) : 0;

  const calculateMonthlyPrice = () => {
    let discount = 0;
    if (months >= 24) discount = 0.80;  // 80% off for 2+ years
    else if (months >= 12) discount = 0.60;  // 60% off for 1+ year
    else if (months >= 6) discount = 0.40;  // 40% off for 6+ months
    
    const discountedPrice = basePrice * (1 - discount);
    return discountedPrice.toFixed(2);
  };

  const calculateTotalPrice = () => {
    return (parseFloat(calculateMonthlyPrice()) * months).toFixed(2);
  };

  const calculateSavings = () => {
    const regularPrice = basePrice * months;
    const discountedTotal = parseFloat(calculateTotalPrice());
    return (regularPrice - discountedTotal).toFixed(2);
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
      <h2 className="text-2xl font-bold text-cyber-blue mb-6">Calculate Your VPN Savings</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <label className="block text-gray-300 mb-2">Select VPN Provider</label>
          <select
            value={selectedVpnId}
            onChange={(e) => setSelectedVpnId(e.target.value)}
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white"
          >
            {vpnTableData.map(vpn => (
              <option key={vpn.id} value={vpn.id}>
                {vpn.name} - {vpn.price}/mo
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Number of Devices</label>
          <div className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white">
            {selectedVpn?.deviceLimit}
          </div>
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Subscription Length (Months)</label>
          <select
            value={months}
            onChange={(e) => setMonths(parseInt(e.target.value))}
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white"
          >
            <option value={1}>1 Month</option>
            <option value={12}>12 Months</option>
            <option value={24}>24 Months</option>
          </select>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-700/30 p-6 rounded-lg">
          <div className="text-lg text-cyber-blue mb-2">Monthly Cost</div>
          <div className="text-3xl font-bold text-white">£{calculateMonthlyPrice()}</div>
          <div className="text-sm text-gray-400">per month</div>
        </div>
        
        <div className="bg-gray-700/30 p-6 rounded-lg">
          <div className="text-lg text-cyber-blue mb-2">Total Cost</div>
          <div className="text-3xl font-bold text-white">£{calculateTotalPrice()}</div>
          <div className="text-sm text-gray-400">for {months} months</div>
        </div>

        <div className="bg-gray-700/30 p-6 rounded-lg">
          <div className="text-lg text-cyber-blue mb-2">Total Savings</div>
          <div className="text-3xl font-bold text-green-400">£{calculateSavings()}</div>
          <div className="text-sm text-gray-400">compared to monthly plan</div>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-400">
        * Prices are estimates based on standard rates. Special offers may provide additional savings.
      </div>
    </div>
  );
};

export default VPNPriceCalculator; 