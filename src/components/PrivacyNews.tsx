import { FC } from 'react';

const PrivacyNews: FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
      <h2 className="text-2xl font-bold text-cyber-blue mb-4">Latest Privacy News</h2>
      <div className="space-y-4">
        <article className="bg-gray-800/50 p-4 rounded-xl hover:bg-gray-800 transition-colors">
          <time className="text-xs text-gray-400">March 5, 2024</time>
          <h3 className="font-semibold text-white mt-1">UK Privacy Laws Update</h3>
          <p className="text-sm text-gray-300 mt-2">New regulations affecting VPN services...</p>
        </article>
        {/* More news items... */}
      </div>
    </div>
  );
}; 