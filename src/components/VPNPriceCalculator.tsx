import React, { useState } from 'react';
import { vpnTableData } from '../data/vpnData';

const VPNPriceCalculator: React.FC = () => {
  const [months, setMonths] = useState<number>(1);
  const [devices, setDevices] = useState<number>(1);
  const [selectedVpnId, setSelectedVpnId] = useState<string>('nordvpn');

  const selectedVpn = vpnTableData.find(vpn => vpn.id === selectedVpnId);
  const basePrice = selectedVpn ? parseFloat(selectedVpn.price.replace('£', '')) : 0;

  const calculateMonthlyPrice = () => {
    let discount = 0;
    if (months >= 24) discount = 0.80;  // 80% off for 2+ years
    else if (months >= 12) discount = 0.60;  // 60% off for 1+ year
    else if (months >= 6) discount = 0.40;  // 40% off for 6+ months
    
    const discountedPrice = basePrice * (1 - discount);
    const totalPerMonth = discountedPrice * devices;
    return totalPerMonth.toFixed(2);
  };

  const calculateTotalPrice = () => {
    return (parseFloat(calculateMonthlyPrice()) * months).toFixed(2);
  };

  const calculateSavings = () => {
    const regularPrice = basePrice * months * devices;
    const discountedTotal = parseFloat(calculateTotalPrice());
    return (regularPrice - discountedTotal).toFixed(2);
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
      <h2 className="text-2xl font-bold text-cyber-blue mb-6">Calculate Your VPN Savings</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <label className="block text-gray-300 mb-2">Select VPN Provider</label>
          <div className="relative">
            <select
              value={selectedVpnId}
              onChange={(e) => setSelectedVpnId(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white 
                focus:outline-none focus:border-cyber-blue appearance-none cursor-pointer
                hover:bg-gray-600/50 transition-colors duration-200"
            >
              {vpnTableData.map(vpn => (
                <option 
                  key={vpn.id} 
                  value={vpn.id}
                  className="bg-gray-800 hover:bg-gray-700 py-2"
                >
                  {vpn.name} - {vpn.price}/mo
                </option>
              ))}
            </select>
            {/* Custom dropdown arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Subscription Length (Months)</label>
          <input
            type="number"
            min="1"
            max="36"
            value={months}
            onChange={(e) => setMonths(parseInt(e.target.value) || 1)}
            className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyber-blue"
          />
          <div className="mt-2 flex justify-between text-sm text-gray-400">
            <span>Min: 1</span>
            <span>Max: 36</span>
          </div>
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Number of Devices</label>
          <input
            type="number"
            min="1"
            max="10"
            value={devices}
            onChange={(e) => setDevices(parseInt(e.target.value) || 1)}
            className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyber-blue"
          />
          <div className="mt-2 flex justify-between text-sm text-gray-400">
            <span>Min: 1</span>
            <span>Max: 10</span>
          </div>
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