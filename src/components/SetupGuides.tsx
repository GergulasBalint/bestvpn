import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const SetupGuides: FC = () => {
  const navigate = useNavigate();

  const guides = [
    {
      icon: '💻',
      title: 'Windows Setup Guide',
      description: 'Step-by-step VPN setup for Windows 10/11'
    },
    {
      icon: '🍎',
      title: 'macOS Setup Guide',
      description: 'Configure VPN on your Mac'
    },
    {
      icon: '📱',
      title: 'iOS Setup Guide',
      description: 'Step-by-step VPN setup for iPhone'
    },
    {
      icon: '🤖',
      title: 'Android Setup Guide',
      description: 'VPN setup for Android devices'
    }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
      <h2 className="text-2xl font-bold text-cyber-blue mb-4">Setup Guides</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {guides.map((guide) => (
          <button
            key={guide.title}
            onClick={() => navigate('/resources')}
            className="bg-gray-800/50 p-4 rounded-xl hover:bg-gray-800 transition-colors text-left w-full group"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{guide.icon}</span>
              <div>
                <h3 className="font-semibold text-white group-hover:text-cyber-blue transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-400">{guide.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SetupGuides; 