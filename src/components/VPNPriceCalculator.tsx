import React, { useState, useEffect } from 'react';
import { vpnData } from '../data/vpnData';

interface PriceResult {
  vpnName: string;
  monthlyPrice: number;
  totalPrice: number;
  savings: number;
}

const VPNPriceCalculator: React.FC = () => {
  const [duration, setDuration] = useState<number>(12);
  const [devices, setDevices] = useState<number>(3);
  const [results, setResults] = useState<PriceResult[]>([]);

  useEffect(() => {
    const calculatePrices = () => {
      return vpnData.map(vpn => {
        const basePrice = parseFloat(vpn.price.replace('£', ''));
        const monthlyPrice = basePrice;
        const totalPrice = monthlyPrice * duration;
        const regularPrice = basePrice * duration;
        const savings = regularPrice - totalPrice;

        return {
          vpnName: vpn.name,
          monthlyPrice,
          totalPrice,
          savings
        };
      }).sort((a, b) => a.totalPrice - b.totalPrice);
    };

    setResults(calculatePrices());
  }, [duration, devices]);

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
      <h2 className="text-2xl font-bold text-cyber-blue mb-4">VPN Cost Calculator</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-gray-300 mb-2">Subscription Length (months)</label>
          <input 
            type="range" 
            min="1" 
            max="36" 
            value={duration} 
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full accent-cyber-blue"
          />
          <span className="text-cyber-blue">{duration} months</span>
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Number of Devices</label>
          <input 
            type="number" 
            min="1" 
            value={devices} 
            onChange={(e) => setDevices(Number(e.target.value))}
            className="bg-gray-800 rounded px-3 py-2 text-white"
          />
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-cyber-blue mb-4">Cost Comparison</h3>
          <div className="space-y-4">
            {results.map((result) => (
              <div 
                key={result.vpnName}
                className="bg-gray-800/50 p-4 rounded-lg flex justify-between items-center"
              >
                <div>
                  <h4 className="font-semibold text-white">{result.vpnName}</h4>
                  <p className="text-sm text-gray-400">£{result.monthlyPrice.toFixed(2)}/month</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-cyber-blue">
                    £{result.totalPrice.toFixed(2)}
                  </p>
                  {result.savings > 0 && (
                    <p className="text-sm text-green-400">
                      Save £{result.savings.toFixed(2)}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VPNPriceCalculator; 