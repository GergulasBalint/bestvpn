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
          <div className="flex items-center gap-4">
            <input 
              id="duration-slider"
              type="range" 
              min="1" 
              max="36" 
              value={duration} 
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyber-blue"
              aria-valuemin={1}
              aria-valuemax={36}
              aria-valuenow={duration}
              aria-label="Select subscription duration in months"
            />
            <span className="min-w-[100px] text-center px-4 py-2 bg-gray-800 rounded-lg text-cyber-blue font-semibold">
              {duration} {duration === 1 ? 'month' : 'months'}
            </span>
          </div>
          <div className="flex justify-between text-sm text-gray-400">
            <span>1 month</span>
            <span>12 months</span>
            <span>36 months</span>
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