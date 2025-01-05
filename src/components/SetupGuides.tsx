import { FC } from 'react';

const SetupGuides: FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
      <h2 className="text-2xl font-bold text-cyber-blue mb-4">Setup Guides</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-800/50 p-4 rounded-xl hover:bg-gray-800 transition-colors">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📱</span>
            <div>
              <h3 className="font-semibold text-white">iOS Setup Guide</h3>
              <p className="text-sm text-gray-400">Step-by-step VPN setup for iPhone</p>
            </div>
          </div>
        </div>
        {/* More guides... */}
      </div>
    </div>
  );
}; 