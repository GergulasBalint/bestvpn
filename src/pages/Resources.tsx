import { FC } from 'react';
import { Helmet } from 'react-helmet';
import SpeedTestWidget from '../components/SpeedTestWidget';
import ServerLocationMap from '../components/ServerLocationMap';
import DealAlerts from '../components/DealAlerts';
import PrivacyNews from '../components/PrivacyNews';
import SetupGuides from '../components/SetupGuides';

const Resources: FC = () => {
  return (
    <>
      <Helmet>
        <title>VPN Resources - Best VPN UK</title>
        <meta name="description" content="VPN resources including speed tests, server locations, deals, privacy news, and setup guides." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <main className="max-w-5xl mx-auto px-4 py-12">
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
              VPN Resources
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Everything you need to get the most out of your VPN
            </p>
          </header>

          <div className="space-y-12">
            <section>
              <SpeedTestWidget />
            </section>

            <section>
              <ServerLocationMap />
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <section>
                <DealAlerts />
              </section>
              <section>
                <PrivacyNews />
              </section>
            </div>

            <section>
              <SetupGuides />
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Resources; 