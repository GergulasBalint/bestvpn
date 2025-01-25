import { CityData } from '../data/cityData';

export const generateCityData = (name: string): CityData => {
  return {
    id: name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    name,
    region: 'Unknown',
    population: 0,
    coordinates: {
      lat: 0,
      lng: 0
    },
    internetStats: {
      averageSpeed: '65.5 Mbps',
      mainProviders: ['BT', 'Virgin Media', 'Sky']
    },
    vpnUsage: {
      percentage: 30,
      popularUses: [
        'Streaming international content',
        'Securing public WiFi',
        'Remote work security',
        'Online privacy protection'
      ]
    }
  };
}; 