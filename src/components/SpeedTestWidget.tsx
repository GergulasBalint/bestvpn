import { FC, useState } from 'react';

const SpeedTestWidget: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSpeedTest = () => {
    setIsLoading(true);
    // Implement speed test logic here
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
      <h2 className="text-2xl font-bold text-cyber-blue mb-4">VPN Speed Test</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-800/50 p-4 rounded-xl text-center">
          <div className="text-3xl font-bold text-cyber-blue">150</div>
          <div className="text-sm text-gray-400">Download Speed (Mbps)</div>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-xl text-center">
          <div className="text-3xl font-bold text-cyber-blue">15</div>
          <div className="text-sm text-gray-400">Upload Speed (Mbps)</div>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-xl text-center">
          <div className="text-3xl font-bold text-cyber-blue">25</div>
          <div className="text-sm text-gray-400">Ping (ms)</div>
        </div>
      </div>
      <button 
        className={`w-full bg-cyber-blue hover:bg-blue-600 text-white py-3 rounded-lg transition-colors ${
          isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={handleSpeedTest}
        disabled={isLoading}
      >
        {isLoading ? 'Testing...' : 'Start Speed Test'}
      </button>
    </div>
  );
};

export default SpeedTestWidget; 