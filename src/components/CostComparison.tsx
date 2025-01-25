import { vpnData } from '../data/vpnData';

const CostComparison: React.FC = () => {
  const [selectedVPN, setSelectedVPN] = useState(vpnData[0]); // Default to first VPN

  return (
    <div>
      {/* VPN Selection */}
      <div className="mb-6">
        <label className="block text-gray-300 mb-2">Select VPN</label>
        <select 
          value={selectedVPN.id}
          onChange={(e) => setSelectedVPN(vpnData.find(vpn => vpn.id === e.target.value) || vpnData[0])}
          className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
        >
          {vpnData.map(vpn => (
            <option key={vpn.id} value={vpn.id}>{vpn.name}</option>
          ))}
        </select>
      </div>

      {/* Device Display (not editable) */}
      <div className="mb-6">
        <label className="block text-gray-300 mb-2">Number of Devices</label>
        <div className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700">
          {selectedVPN.deviceLimit}
        </div>
      </div>

      {/* Rest of your cost comparison UI */}
    </div>
  );
}; 