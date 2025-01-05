import { FC } from 'react';

const DealAlerts: FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
      <h2 className="text-2xl font-bold text-cyber-blue mb-4">VPN Deal Alerts</h2>
      <div className="space-y-4">
        <div className="bg-gray-800/50 p-4 rounded-xl border border-green-500/20">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🔥</span>
            <div>
              <h3 className="font-semibold text-white">Flash Sale: NordVPN</h3>
              <p className="text-sm text-gray-400">68% off 2-year plan + 3 months free</p>
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">Ends in 2 days</div>
        </div>
        {/* More deals... */}
      </div>
    </div>
  );
};

export default DealAlerts; 