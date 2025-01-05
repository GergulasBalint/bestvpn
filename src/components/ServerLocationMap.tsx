import { FC } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const ServerLocationMap: FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
      <h2 className="text-2xl font-bold text-cyber-blue mb-4">Global Server Network</h2>
      <div className="h-[400px] rounded-xl overflow-hidden">
        <MapContainer center={[51.505, -0.09]} zoom={3}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {/* Add server location markers */}
        </MapContainer>
      </div>
    </div>
  );
}; 