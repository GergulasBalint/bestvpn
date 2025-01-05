import React, { useState } from 'react';

const VPNPriceCalculator: React.FC = () => {
  const [duration, setDuration] = useState<number>(12);
  const [devices, setDevices] = useState<number>(3);

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
      <h2 className="text-2xl font-bold text-cyber-blue mb-4">VPN Cost Calculator</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-300 mb-2">Subscription Length (months)</label>
          <input 
            type="range" 
            min="1" 
            max="36" 
            value={duration} 
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full"
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
            className="bg-gray-800 rounded px-3 py-2"
          />
        </div>
        {/* Display calculated prices for each VPN */}
      </div>
    </div>
  );
}; 