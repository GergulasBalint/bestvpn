import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { vpnData } from '../data/vpnData';

const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  'london': { lat: 51.5074, lng: -0.1278 },
  'manchester': { lat: 53.4808, lng: -2.2426 },
  'birmingham': { lat: 52.4862, lng: -1.8904 },
  'edinburgh': { lat: 55.9533, lng: -3.1883 },
  // Add more cities as needed
};

const CityVPN: FC = () => {
  const { cityName } = useParams<{ cityName: string }>();
  const normalizedCityName = cityName?.toLowerCase() || '';
  const cityCoords = cityCoordinates[normalizedCityName];

  useEffect(() => {
    if (cityCoords) {
      const googleMapScript = document.createElement('script');
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`;
      googleMapScript.async = true;
      googleMapScript.defer = true;
      window.document.body.appendChild(googleMapScript);

      googleMapScript.addEventListener('load', () => {
        const map = new google.maps.Map(document.getElementById('city-map'), {
          center: cityCoords,
          zoom: 13,
          styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            // Add more styles as needed
          ]
        });

        new google.maps.Marker({
          position: cityCoords,
          map,
          title: cityName
        });
      });

      return () => {
        document.body.removeChild(googleMapScript);
      };
    }
  }, [cityName, cityCoords]);

  return (
    <>
      <Helmet>
        <title>VPN in {cityName} - Best VPN UK</title>
        <meta name="description" content={`Find the best VPN services and secure locations in ${cityName}.`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <main className="max-w-5xl mx-auto px-4 py-12">
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
              VPN Services in {cityName}
            </h1>
          </header>

          {/* City Map */}
          <div className="mb-16">
            <div 
              id="city-map" 
              className="w-full h-[400px] rounded-xl overflow-hidden"
              style={{ border: '1px solid rgba(59, 130, 246, 0.2)' }}
            />
          </div>

          {/* VPN Recommendations */}
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