import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { vpnData } from '../data/vpnData';

const cityHotspots: Record<string, string[]> = {
  'london': [
    'Soho Square Gardens',
    'St. Pancras International',
    'Canary Wharf',
    'The British Library',
    'WeWork Locations'
  ],
  'manchester': [
    'Manchester Central Library',
    'Piccadilly Gardens',
    'MediaCityUK',
    'University of Manchester',
    'Northern Quarter Cafes'
  ],
  'birmingham': [
    'Library of Birmingham',
    'Bullring Shopping Centre',
    'Birmingham New Street Station',
    'Brindleyplace',
    'University of Birmingham'
  ],
  'edinburgh': [
    'National Library of Scotland',
    'Edinburgh Waverley Station',
    'University of Edinburgh',
    'Royal Mile Coffee Shops',
    'Scottish Parliament'
  ]
};

const CityVPN: FC = () => {
  const { cityName } = useParams<{ cityName: string }>();
  const normalizedCityName = cityName?.toLowerCase() || '';
  const hotspots = cityHotspots[normalizedCityName] || [];

  return (
    <>
      <Helmet>
        <title>VPN Hotspots in {cityName} - Best VPN UK</title>
        <meta name="description" content={`Find the best VPN hotspots and secure internet locations in ${cityName}. Stay protected while browsing in public spaces.`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <main className="max-w-5xl mx-auto px-4 py-12">
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
              VPN Hotspots in {cityName}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Secure internet locations and recommended VPN usage spots
            </p>
          </header>

          {hotspots.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {hotspots.map((spot) => (
                <div key={spot} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-cyber-blue/20">
                  <h3 className="text-xl font-semibold text-cyber-blue mb-2">{spot}</h3>
                  <p className="text-gray-300">
                    Public WiFi available. We recommend using a VPN for secure browsing.
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-300">
              <p>No hotspots found for {cityName}. Try searching for another city.</p>
            </div>
          )}

          <section className="mt-16">
            <h2 className="text-2xl font-bold text-cyber-blue mb-6">Recommended VPNs for {cityName}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {vpnData.slice(0, 3).map((vpn) => (
                <div key={vpn.id} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-cyber-blue/20">
                  <h3 className="text-xl font-semibold text-white mb-2">{vpn.name}</h3>
                  <p className="text-gray-300 mb-4">{vpn.description}</p>
                  <div className="text-cyber-blue font-bold">{vpn.price}/month</div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default CityVPN; 