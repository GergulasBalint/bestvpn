import { FC, useState } from 'react';

interface SpeedTestResult {
  downloadSpeed: number;
  uploadSpeed: number;
  ping: number;
}

const SpeedTestWidget: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<SpeedTestResult | null>(null);
  const [progress, setProgress] = useState(0);

  // Simulate network conditions based on time of day and random factors
  const simulateNetworkTest = async () => {
    const baseSpeed = 100; // Base speed in Mbps
    const timeOfDay = new Date().getHours();
    
    // Simulate network congestion during peak hours (9AM-5PM)
    const peakHourFactor = (timeOfDay >= 9 && timeOfDay <= 17) ? 0.7 : 1;
    
    // Add some randomness to make it feel realistic
    const randomFactor = 0.85 + (Math.random() * 0.3); // Random between 0.85 and 1.15
    
    const downloadSpeed = Math.round(baseSpeed * peakHourFactor * randomFactor);
    const uploadSpeed = Math.round(downloadSpeed * 0.4 * randomFactor); // Upload typically slower
    const ping = Math.round(15 + (Math.random() * 20)); // Ping between 15-35ms

    return { downloadSpeed, uploadSpeed, ping };
  };

  const runSpeedTest = async () => {
    setIsLoading(true);
    setProgress(0);

    try {
      // Simulate a progressive speed test
      for (let i = 0; i <= 100; i += 5) {
        setProgress(i);
        await new Promise(resolve => setTimeout(resolve, 100)); // Smooth progress
      }

      const results = await simulateNetworkTest();
      setResults(results);
      
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
      <h2 className="text-2xl font-bold text-cyber-blue mb-4">Network Speed Test</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-800/50 p-4 rounded-xl text-center">
          <div className="text-3xl font-bold text-cyber-blue">
            {results ? results.downloadSpeed : '--'}
          </div>
          <div className="text-sm text-gray-400">Download Speed (Mbps)</div>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-xl text-center">
          <div className="text-3xl font-bold text-cyber-blue">
            {results ? results.uploadSpeed : '--'}
          </div>
          <div className="text-sm text-gray-400">Upload Speed (Mbps)</div>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-xl text-center">
          <div className="text-3xl font-bold text-cyber-blue">
            {results ? results.ping : '--'}
          </div>
          <div className="text-sm text-gray-400">Ping (ms)</div>
        </div>
      </div>

      {isLoading && (
        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
          <div 
            className="bg-cyber-blue h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      <button 
        className={`w-full bg-cyber-blue hover:bg-blue-600 text-white py-3 rounded-lg transition-colors ${
          isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={runSpeedTest}
        disabled={isLoading}
      >
        {isLoading ? `Testing... ${progress}%` : 'Start Speed Test'}
      </button>
    </div>
  );
};

export default SpeedTestWidget; 