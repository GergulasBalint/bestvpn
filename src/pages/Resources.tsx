import { FC } from 'react';
import { Helmet } from 'react-helmet';
import RelatedLinks from '../components/RelatedLinks';
import CyberBackground from '../components/CyberBackground';

interface SetupGuide {
  title: string;
  steps: string[];
  additionalInfo?: string;
}

interface VPNSetup {
  name: string;
  id: string;
  platforms: {
    [key: string]: SetupGuide;
  };
}

const vpnSetups: VPNSetup[] = [
  {
    name: "NordVPN",
    id: "nordvpn",
    platforms: {
      windows: {
        title: "Windows Setup Guide",
        steps: [
          "Download NordVPN from the official website (nordvpn.com)",
          "Run the installer and follow the installation wizard",
          "Launch NordVPN and click 'Log In'",
          "Enter your NordVPN credentials",
          "Click 'Quick Connect' for the optimal server, or choose a specific country",
          "Enable 'Auto-connect' and 'Kill Switch' in Settings for better security"
        ],
        additionalInfo: "For extra security, enable NordLynx protocol in the settings menu"
      },
      mac: {
        title: "macOS Setup Guide",
        steps: [
          "Download NordVPN from the Mac App Store or nordvpn.com",
          "Open the .pkg file and follow installation prompts",
          "Allow system extensions in Security & Privacy",
          "Launch NordVPN and sign in",
          "Grant permissions when prompted",
          "Use Quick Connect or choose a server"
        ]
      },
      ios: {
        title: "iOS Setup Guide",
        steps: [
          "Download NordVPN from the App Store",
          "Open the app and tap 'Log In'",
          "Enter your credentials",
          "Allow VPN configuration when prompted",
          "Tap 'Quick Connect' or choose a location",
          "Enable 'Auto-connect' for trusted networks"
        ]
      }
    }
  },
  {
    name: "ExpressVPN",
    id: "expressvpn",
    platforms: {
      windows: {
        title: "Windows Setup Guide",
        steps: [
          "Go to expressvpn.com and sign in to your account",
          "Download the Windows installer",
          "Run the installer and follow the setup wizard",
          "Copy your activation code from the website",
          "Paste the activation code when prompted",
          "Select 'Auto-connect' and preferred protocol in settings"
        ]
      },
      mac: {
        title: "macOS Setup Guide",
        steps: [
          "Sign in to your ExpressVPN account",
          "Download the macOS app",
          "Open the .pkg file and follow installation steps",
          "Enter your activation code",
          "Allow system extensions when prompted",
          "Choose your preferred location and connect"
        ]
      }
    }
  },
  {
    name: "Surfshark",
    id: "surfshark",
    platforms: {
      windows: {
        title: "Windows Setup Guide",
        steps: [
          "Visit surfshark.com and download the Windows app",
          "Run the installer",
          "Launch Surfshark and sign in",
          "Choose a server or use Quick Connect",
          "Enable CleanWeb and Kill Switch features",
          "Configure MultiHop for extra security if needed"
        ]
      },
      android: {
        title: "Android Setup Guide",
        steps: [
          "Install Surfshark from Google Play Store",
          "Open the app and log in",
          "Grant VPN permissions",
          "Select a server or use Quick Connect",
          "Enable auto-connect for trusted networks",
          "Configure split tunneling if needed"
        ]
      }
    }
  }
];

const Resources: FC = () => {
  return (
    <>
      <Helmet>
        <title>VPN Setup Guides & Resources - Best VPN UK</title>
        <meta name="description" content="Step-by-step VPN setup tutorials for all major platforms. Easy-to-follow guides for NordVPN, ExpressVPN, Surfshark, and more." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative">
        <CyberBackground />
        <div className="relative">
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text text-center">
              VPN Setup Guides
            </h1>

            <div className="space-y-12">
              {vpnSetups.map((vpn) => (
                <div key={vpn.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                  <h2 className="text-2xl font-bold text-cyber-blue mb-6">{vpn.name} Setup Guides</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(vpn.platforms).map(([platform, guide]) => (
                      <div key={platform} className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
                        <h3 className="text-xl font-semibold text-white mb-4">{guide.title}</h3>
                        <ol className="list-decimal list-inside space-y-3 text-gray-300">
                          {guide.steps.map((step, index) => (
                            <li key={index} className="text-sm">{step}</li>
                          ))}
                        </ol>
                        {guide.additionalInfo && (
                          <p className="mt-4 text-sm text-cyber-blue">{guide.additionalInfo}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-cyber-blue mb-4">More Guides Coming Soon</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  We're working on additional setup guides for:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-400">
                  <li className="flex items-center">
                    <span className="text-cyber-blue mr-2">•</span>
                    CyberGhost VPN
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyber-blue mr-2">•</span>
                    ProtonVPN
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyber-blue mr-2">•</span>
                    Private Internet Access
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyber-blue mr-2">•</span>
                    Linux Setup Guides
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyber-blue mr-2">•</span>
                    Router Configurations
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyber-blue mr-2">•</span>
                    Smart TV Setup
                  </li>
                </ul>
                <p className="text-sm text-gray-400 mt-4">
                  Check back regularly for updates or subscribe to our newsletter to get notified when new guides are available.
                </p>
              </div>
            </div>

            <RelatedLinks currentPath="/resources" />
          </main>
        </div>
      </div>
    </>
  );
};

export default Resources; 