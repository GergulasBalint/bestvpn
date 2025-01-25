import React, { useState } from 'react';
import { vpnData } from '../data/vpnData';

const CostComparison: React.FC = () => {
  const [selectedVPN, setSelectedVPN] = useState(vpnData[0]);
  const [months, setMonths] = useState(12);

  const calculateMonthlyCost = () => {
    const pricePerMonth = parseFloat(selectedVPN.price.replace('£', ''));
    return pricePerMonth;
  };

  const calculateYearlyCost = () => {
    return calculateMonthlyCost() * months;
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-gray-300 mb-2">Select VPN</label>
        <select
          value={selectedVPN.id}
          onChange={(e) => setSelectedVPN(vpnData.find(vpn => vpn.id === e.target.value) || vpnData[0])}
          className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
        >
          {vpnData.map(vpn => (
            <option key={vpn.id} value={vpn.id}>{vpn.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-gray-300 mb-2">Device Limit</label>
        <div className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700">
          {selectedVPN.deviceLimit}
        </div>
      </div>

      <div>
        <label className="block text-gray-300 mb-2">Subscription Length (Months)</label>
        <select
          value={months}
          onChange={(e) => setMonths(parseInt(e.target.value))}
          className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
        >
          <option value={1}>1 Month</option>
          <option value={12}>12 Months</option>
          <option value={24}>24 Months</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
          <h3 className="text-lg font-semibold mb-2">Monthly Cost</h3>
          <p className="text-2xl text-cyber-blue">£{calculateMonthlyCost().toFixed(2)}</p>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
          <h3 className="text-lg font-semibold mb-2">Total Cost ({months} months)</h3>
          <p className="text-2xl text-cyber-blue">£{calculateYearlyCost().toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CostComparison; 