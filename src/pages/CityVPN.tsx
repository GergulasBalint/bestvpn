import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { vpnData } from '../data/vpnData';

interface SpeedTestLocation {
  city: string;
  country: string;
  download: string;
  upload: string;
  ping: string;
  distance: string;
}

const CityVPN: FC = () => {
  const { cityName } = useParams<{ cityName: string }>();
  
  const speedTestLocations: SpeedTestLocation[] = [
    {
      city: "London",
      country: "UK",
      download: "150 Mbps",
      upload: "50 Mbps",
      ping: "15ms",
      distance: "Local"
    },
    {
      city: "Amsterdam",
      country: "Netherlands",
      download: "140 Mbps",
      upload: "45 Mbps",
      ping: "22ms",
      distance: "358 km"
    },
    {
      city: "Paris",
      country: "France",
      download: "135 Mbps",
      upload: "48 Mbps",
      ping: "25ms",
      distance: "344 km"
    },
    {
      city: "Frankfurt",
      country: "Germany",
      download: "130 Mbps",
      upload: "42 Mbps",
      ping: "28ms",
      distance: "660 km"
    }
  ];

  return (
    <>
      <Helmet>
        <title>VPN Speed Test Locations - {cityName} - Best VPN UK</title>
        <meta name="description" content={`VPN speed test results and server locations near ${cityName}. Find the fastest VPN servers in your area.`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <main className="max-w-5xl mx-auto px-4 py-12">
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
              VPN Speed Test Locations
            </h1>
            <p className="text-xl text-gray-300">
              Server speeds from {cityName}
            </p>
          </header>

          {/* Speed Test Locations */}
          <section className="mb-16">
            <div className="grid gap-4">
              {speedTestLocations.map((location) => (
                <div 
                  key={location.city}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors"
                >
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {location.city}, {location.country}
                      </h3>
                      <p className="text-sm text-gray-400">Distance: {location.distance}</p>
                    </div>
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="text-cyber-blue font-bold">{location.download}</div>
                        <div className="text-xs text-gray-400">Download</div>
                      </div>
                      <div className="text-center">
                        <div className="text-cyber-blue font-bold">{location.upload}</div>
                        <div className="text-xs text-gray-400">Upload</div>
                      </div>
                      <div className="text-center">
                        <div className="text-cyber-blue font-bold">{location.ping}</div>
                        <div className="text-xs text-gray-400">Ping</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* VPN Recommendations */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-cyber-blue mb-6">Best VPNs for {cityName}</h2>
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