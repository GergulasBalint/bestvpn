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

  const measureConnectionSpeed = async () => {
    // Test with multiple file sizes
    const testFiles = [
      'https://your-server.com/test-1mb.bin',
      'https://your-server.com/test-5mb.bin',
      'https://your-server.com/test-10mb.bin'
    ];
    
    const results = await Promise.all(
      testFiles.map(async (url) => {
        // Multiple samples per file
        const samples = [];
        for(let i = 0; i < 3; i++) {
          const speed = await measureSingleDownload(url);
          samples.push(speed);
        }
        // Return average speed
        return samples.reduce((a, b) => a + b) / samples.length;
      })
    );

    // Return median of all results
    return results.sort((a, b) => a - b)[Math.floor(results.length / 2)];
  };

  const measureSingleDownload = async (url: string) => {
    const startTime = performance.now();
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const endTime = performance.now();
      
      const durationInSeconds = (endTime - startTime) / 1000;
      const bitsLoaded = blob.size * 8;
      const speedBps = (bitsLoaded / durationInSeconds);
      const speedMbps = speedBps / (1024 * 1024);

      return Math.round(speedMbps * 100) / 100;
    } catch (error) {
      console.error('Speed test error:', error);
      return 0;
    }
  };

  const measurePing = async () => {
    const startTime = performance.now();
    try {
      await fetch('https://www.google.com/favicon.ico', { mode: 'no-cors' });
      const endTime = performance.now();
      return Math.round(endTime - startTime);
    } catch (error) {
      console.error('Ping test error:', error);
      return 0;
    }
  };

  const measureUploadSpeed = async () => {
    const data = new Blob([new ArrayBuffer(5 * 1024 * 1024)]); // 5MB test file
    const startTime = performance.now();
    
    try {
      await fetch('https://your-speed-test-server.com/upload', {
        method: 'POST',
        body: data
      });
      const endTime = performance.now();
      
      const durationInSeconds = (endTime - startTime) / 1000;
      const bitsUploaded = data.size * 8;
      return (bitsUploaded / durationInSeconds) / (1024 * 1024); // Mbps
    } catch (error) {
      console.error('Upload test failed:', error);
      return 0;
    }
  };

  const runSpeedTest = async () => {
    setIsLoading(true);
    setProgress(0);

    try {
      // Measure ping
      setProgress(20);
      const ping = await measurePing();
      
      // Measure download speed
      setProgress(40);
      const downloadSpeed = await measureConnectionSpeed();
      
      // Measure upload speed
      setProgress(80);
      const uploadSpeed = await measureUploadSpeed();

      setResults({
        downloadSpeed,
        uploadSpeed: Math.round(uploadSpeed * 100) / 100,
        ping
      });
      
      setProgress(100);
    } catch (error) {
      console.error('Speed test failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
      <h2 className="text-2xl font-bold text-cyber-blue mb-4">VPN Speed Test</h2>
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