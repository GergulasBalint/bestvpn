import { FC } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngTuple, Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const ServerLocationMap: FC = () => {
  // Fix for default marker icon
  const defaultIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  });

  const serverLocations: { position: LatLngTuple; name: string }[] = [
    { position: [51.505, -0.09], name: 'London' },
    { position: [40.7128, -74.0060], name: 'New York' },
    { position: [35.6762, 139.6503], name: 'Tokyo' },
  ];

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
      <h2 className="text-2xl font-bold text-cyber-blue mb-4">Global Server Network</h2>
      <div className="h-[400px] rounded-xl overflow-hidden relative">
        <MapContainer 
          center={[51.505, -0.09]} 
          zoom={3} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {serverLocations.map(({ position, name }) => (
            <Marker key={name} position={position} icon={defaultIcon}>
              <Popup>{name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default ServerLocationMap; 