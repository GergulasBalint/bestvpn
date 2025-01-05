import { FC, useState, useEffect } from 'react';
import { vpnData } from '../data/vpnData';

interface PriceResult {
  vpnName: string;
  monthlyPrice: number;
  totalPrice: number;
  savings: number;
}

const VPNPriceCalculator: FC = () => {
  const [duration, setDuration] = useState<number>(12);
  const [devices, setDevices] = useState<number>(3);
  const [results, setResults] = useState<PriceResult[]>([]);

  useEffect(() => {
    const calculatePrices = () => {
      return vpnData.map(vpn => {
        const basePrice = parseFloat(vpn.price.replace('£', ''));
        const monthlyPrice = basePrice;
        let totalPrice = monthlyPrice * duration;
        
        // Apply discounts based on subscription length
        if (duration >= 24) {
          totalPrice *= 0.7; // 30% discount for 2+ years
        } else if (duration >= 12) {
          totalPrice *= 0.8; // 20% discount for 1+ year
        }

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
      <div className="space-y-8">
        {/* Duration Slider */}
        <div className="space-y-4">
          <label 
            htmlFor="duration-slider" 
            className="block text-lg font-semibold text-white"
          >
            Subscription Length
          </label>
          <div className="relative flex items-center gap-4">
            <div className="relative flex-1">
              <div className="absolute w-full flex justify-between px-2 -top-6">
                {[1, 12, 24, 36].map((month) => (
                  <div
                    key={month}
                    className={`text-xs ${
                      duration >= month ? 'text-cyber-blue' : 'text-gray-500'
                    }`}
                  >
                    {month}m
                  </div>
                ))}
              </div>
              <div 
                className="absolute h-2 bg-gradient-to-r from-gray-700 to-cyber-blue rounded-full"
                style={{ width: `${(duration / 36) * 100}%` }}
              />
              <input 
                id="duration-slider"
                type="range" 
                min="1" 
                max="36" 
                value={duration} 
                onChange={(e) => setDuration(Number(e.target.value))}
                className="range-slider relative w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer z-10"
                aria-valuemin={1}
                aria-valuemax={36}
                aria-valuenow={duration}
                aria-label="Select subscription duration in months"
              />
            </div>
            <div className="min-w-[120px]">
              <div className="bg-gray-800 rounded-xl p-3 text-center">
                <div className="text-2xl font-bold text-cyber-blue">
                  {duration}
                </div>
                <div className="text-xs text-gray-400">
                  {duration === 1 ? 'month' : 'months'}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-400 px-2">
            <span>Monthly</span>
            <span>1 Year</span>
            <span>2 Years</span>
            <span>3 Years</span>
          </div>
        </div>

        {/* Devices Input */}
        <div className="space-y-4">
          <label 
            htmlFor="devices-input" 
            className="block text-lg font-semibold text-white"
          >
            Number of Devices
          </label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDevices(prev => Math.max(1, prev - 1))}
              className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              aria-label="Decrease number of devices"
            >
              <span className="text-xl">-</span>
            </button>
            <input 
              id="devices-input"
              type="number" 
              min="1" 
              value={devices} 
              onChange={(e) => setDevices(Number(e.target.value))}
              className="w-20 text-center bg-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyber-blue"
              aria-label="Number of devices"
            />
            <button
              onClick={() => setDevices(prev => prev + 1)}
              className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              aria-label="Increase number of devices"
            >
              <span className="text-xl">+</span>
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Cost Comparison</h3>
          <div className="grid gap-4">
            {results.map((result) => (
              <div 
                key={result.vpnName}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyber-blue/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-white">{result.vpnName}</h4>
                    <p className="text-sm text-gray-400">
                      £{(result.totalPrice / duration).toFixed(2)}/month
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-cyber-blue">
                      £{result.totalPrice.toFixed(2)}
                    </p>
                    <p className="text-sm">total for {duration} {duration === 1 ? 'month' : 'months'}</p>
                  </div>
                </div>
                {result.savings > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-700">
                    <p className="text-green-400 flex items-center gap-2">
                      <span className="text-lg">💰</span>
                      Save £{result.savings.toFixed(2)} with this plan
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VPNPriceCalculator; 