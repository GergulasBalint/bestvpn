import React, { useState } from 'react';

const VPNPriceCalculator: React.FC = () => {
  const [months, setMonths] = useState<number>(1);
  const [devices, setDevices] = useState<number>(1);
  const [basePrice, setBasePrice] = useState<number>(5.99);

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

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
      <h2 className="text-2xl font-bold text-cyber-blue mb-6">Calculate Your VPN Savings</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        <div>
          <label className="block text-gray-300 mb-2">Base Monthly Price (£)</label>
          <input
            type="number"
            min="1"
            max="15"
            step="0.01"
            value={basePrice}
            onChange={(e) => setBasePrice(parseFloat(e.target.value) || 5.99)}
            className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyber-blue"
          />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>

      <div className="mt-6 text-sm text-gray-400">
        * Prices are estimates based on average market rates. Actual VPN prices may vary.
      </div>
    </div>
  );
};

export default VPNPriceCalculator; 