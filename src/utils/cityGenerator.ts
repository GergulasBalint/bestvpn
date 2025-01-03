import type { CityData } from '../data/cityData';

export const generateCityData = (cityName: string): CityData => {
  return {
    name: cityName,
    region: "United Kingdom", // You could add a region detector if needed
    population: 0, // Could fetch from an API if needed
    coordinates: {
      lat: 0, // Could use a geocoding API to get real coordinates
      lng: 0
    },
    internetStats: {
      averageSpeed: "65-75 Mbps",
      mainProviders: ["BT", "Virgin Media", "Sky", "TalkTalk"]
    },
    vpnUsage: {
      percentage: 30,
      popularUses: [
        "Streaming services",
        "Online privacy",
        "Public WiFi security",
        "Remote work"
      ]
    }
  };
}; 