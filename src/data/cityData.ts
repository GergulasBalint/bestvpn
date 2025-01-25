export interface CityData {
  id: string;
  name: string;
  region: string;
  population: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  internetStats: {
    averageSpeed: string;
    mainProviders: string[];
  };
  vpnUsage: {
    percentage: number;
    popularUses: string[];
  };
}

// Helper function to generate realistic internet stats
const generateInternetStats = () => {
  const baseSpeed = 65 + Math.floor(Math.random() * 20);
  const providers = ["BT", "Virgin Media", "Sky", "TalkTalk", "EE", "Vodafone", "Plusnet", "Hyperoptic"];
  const selectedProviders = providers.slice(0, 3 + Math.floor(Math.random() * 2));
  
  return {
    averageSpeed: `${baseSpeed}.${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)} Mbps`,
    mainProviders: selectedProviders
  };
};

// Helper function to generate VPN usage data
const generateVPNUsage = () => {
  const basePercentage = 25 + Math.floor(Math.random() * 15);
  const commonUses = [
    "Streaming international content",
    "Securing public WiFi",
    "Remote work security",
    "Online privacy protection",
    "Access to geo-restricted content",
    "Online gaming",
    "Safe online banking",
    "Business security"
  ];
  
  // Randomly select 4 uses
  const selectedUses = [...commonUses]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
  
  return {
    percentage: basePercentage,
    popularUses: selectedUses
  };
};

// Add more UK cities with their data
export const cities: CityData[] = [
  { id: 'abberton', name: 'Abberton' },
  { id: 'abbeydale', name: 'Abbeydale' },
  { id: 'abbeytown', name: 'Abbeytown' },
  { id: 'abbots-langley', name: 'Abbots Langley' },
  { id: 'abbotsford', name: 'Abbotsford' },
  { id: 'leeds', name: 'Leeds' },
  { id: 'manchester', name: 'Manchester' },
  { id: 'liverpool', name: 'Liverpool' },
  { id: 'birmingham', name: 'Birmingham' },
  { id: 'london', name: 'London' },
  { id: 'edinburgh', name: 'Edinburgh' },
  { id: 'glasgow', name: 'Glasgow' },
  { id: 'cardiff', name: 'Cardiff' },
  { id: 'belfast', name: 'Belfast' },
  { id: 'bristol', name: 'Bristol' },
  { id: 'newcastle', name: 'Newcastle' },
  { id: 'sheffield', name: 'Sheffield' },
  { id: 'nottingham', name: 'Nottingham' },
  { id: 'oxford', name: 'Oxford' },
  { id: 'cambridge', name: 'Cambridge' },
  { id: 'yoxall', name: 'Yoxall' }
].map(city => ({
  ...city,
  id: city.id || city.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
  region: city.name === 'Leeds' ? 'Yorkshire and the Humber' :
          city.name === 'Manchester' ? 'North West England' :
          city.name === 'Liverpool' ? 'North West England' :
          city.name === 'Birmingham' ? 'West Midlands' :
          city.name === 'London' ? 'Greater London' :
          city.name === 'Edinburgh' ? 'Scotland' :
          city.name === 'Glasgow' ? 'Scotland' :
          city.name === 'Cardiff' ? 'Wales' :
          city.name === 'Belfast' ? 'Northern Ireland' :
          city.name === 'Bristol' ? 'South West England' :
          city.name === 'Newcastle' ? 'North East England' :
          city.name === 'Sheffield' ? 'Yorkshire and the Humber' :
          city.name === 'Nottingham' ? 'East Midlands' :
          city.name === 'Oxford' ? 'South East England' :
          city.name === 'Cambridge' ? 'East of England' ? 'South East England' : 'West Midlands' :
          'Unknown',
  population: city.name === 'Leeds' ? 789194 :
              city.name === 'Manchester' ? 547627 :
              city.name === 'Liverpool' ? 498042 :
              city.name === 'Birmingham' ? 1144919 :
              city.name === 'London' ? 8982000 :
              city.name === 'Edinburgh' ? 524930 :
              city.name === 'Glasgow' ? 633120 :
              city.name === 'Cardiff' ? 362756 :
              city.name === 'Belfast' ? 343542 :
              city.name === 'Bristol' ? 463405 :
              city.name === 'Newcastle' ? 302820 :
              city.name === 'Sheffield' ? 584853 :
              city.name === 'Nottingham' ? 321500 :
              city.name === 'Oxford' ? 152450 :
              city.name === 'Cambridge' ? 123900 :
              city.name === 'Yoxall' ? 0 : 0,
  coordinates: city.name === 'Leeds' ? { lat: 53.8008, lng: -1.5491 } :
              city.name === 'Manchester' ? { lat: 53.4808, lng: -2.2426 } :
              city.name === 'Liverpool' ? { lat: 53.4084, lng: -2.9916 } :
              city.name === 'Birmingham' ? { lat: 52.4862, lng: -1.8904 } :
              city.name === 'London' ? { lat: 51.5074, lng: -0.1278 } :
              city.name === 'Edinburgh' ? { lat: 55.9533, lng: -3.1883 } :
              city.name === 'Glasgow' ? { lat: 55.8642, lng: -4.2518 } :
              city.name === 'Cardiff' ? { lat: 51.4816, lng: -3.1791 } :
              city.name === 'Belfast' ? { lat: 54.5973, lng: -5.9301 } :
              city.name === 'Bristol' ? { lat: 51.4545, lng: -2.5879 } :
              city.name === 'Newcastle' ? { lat: 54.9783, lng: -1.6178 } :
              city.name === 'Sheffield' ? { lat: 53.3811, lng: -1.4701 } :
              city.name === 'Nottingham' ? { lat: 52.9548, lng: -1.1581 } :
              city.name === 'Oxford' ? { lat: 51.7520, lng: -1.2577 } :
              city.name === 'Cambridge' ? { lat: 52.2053, lng: 0.1218 } :
              { lat: 0, lng: 0 },
  internetStats: city.name === 'Leeds' ? { averageSpeed: "65.5 Mbps", mainProviders: ["BT", "Virgin Media", "Sky", "TalkTalk"] } :
              city.name === 'Manchester' ? { averageSpeed: "71.2 Mbps", mainProviders: ["Virgin Media", "BT", "Sky", "TalkTalk"] } :
              city.name === 'Liverpool' ? { averageSpeed: "68.7 Mbps", mainProviders: ["Virgin Media", "BT", "Sky", "TalkTalk"] } :
              city.name === 'Birmingham' ? { averageSpeed: "69.8 Mbps", mainProviders: ["BT", "Virgin Media", "Sky", "TalkTalk"] } :
              city.name === 'London' ? { averageSpeed: "78.3 Mbps", mainProviders: ["BT", "Virgin Media", "Sky", "Hyperoptic"] } :
              city.name === 'Edinburgh' ? { averageSpeed: "76.3 Mbps", mainProviders: ["BT", "Virgin Media", "Sky", "TalkTalk"] } :
              city.name === 'Glasgow' ? { averageSpeed: "74.1 Mbps", mainProviders: ["Virgin Media", "BT", "Sky", "TalkTalk"] } :
              city.name === 'Cardiff' ? { averageSpeed: "68.9 Mbps", mainProviders: ["BT", "Virgin Media", "Sky", "TalkTalk"] } :
              city.name === 'Belfast' ? { averageSpeed: "65.4 Mbps", mainProviders: ["Virgin Media", "BT", "Sky", "EE"] } :
              city.name === 'Bristol' ? { averageSpeed: "71.8 Mbps", mainProviders: ["Virgin Media", "BT", "Sky", "TalkTalk"] } :
              city.name === 'Newcastle' ? { averageSpeed: "69.2 Mbps", mainProviders: ["BT", "Virgin Media", "Sky", "TalkTalk"] } :
              city.name === 'Sheffield' ? { averageSpeed: "67.5 Mbps", mainProviders: ["Virgin Media", "BT", "Sky", "TalkTalk"] } :
              city.name === 'Nottingham' ? { averageSpeed: "70.1 Mbps", mainProviders: ["Virgin Media", "BT", "Sky", "TalkTalk"] } :
              city.name === 'Oxford' ? generateInternetStats() :
              city.name === 'Cambridge' ? generateInternetStats() :
              generateInternetStats(),
  vpnUsage: city.name === 'Leeds' ? { percentage: 32, popularUses: [ "Accessing international streaming content", "Securing public WiFi in city center cafes", "Remote work security", "Online shopping privacy" ] } :
          city.name === 'Manchester' ? { percentage: 35, popularUses: [ "Remote work security", "Streaming international sports", "Public WiFi protection", "Online gaming" ] } :
          city.name === 'Liverpool' ? { percentage: 30, popularUses: [ "Streaming sports content", "Online shopping security", "Public WiFi protection", "Remote work" ] } :
          city.name === 'Birmingham' ? { percentage: 33, popularUses: [ "Business security", "Streaming services", "Public WiFi security", "Online privacy" ] } :
          city.name === 'London' ? { percentage: 38, popularUses: [ "International business access", "Remote work security", "Public WiFi protection", "Streaming services" ] } :
          city.name === 'Edinburgh' ? { percentage: 34, popularUses: [ "Remote work security", "Streaming international content", "Public WiFi protection", "Online privacy" ] } :
          city.name === 'Glasgow' ? { percentage: 31, popularUses: [ "Streaming services", "Online gaming", "Public WiFi security", "Remote work" ] } :
          city.name === 'Cardiff' ? { percentage: 29, popularUses: [ "Streaming content", "Online privacy", "Public WiFi security", "Remote work access" ] } :
          city.name === 'Belfast' ? { percentage: 28, popularUses: [ "Streaming services", "Remote work security", "Public WiFi protection", "Online privacy" ] } :
          city.name === 'Bristol' ? { percentage: 33, popularUses: [ "Remote work security", "Streaming content", "Public WiFi protection", "Online privacy" ] } :
          city.name === 'Newcastle' ? { percentage: 30, popularUses: [ "Streaming services", "Online gaming", "Public WiFi security", "Remote work" ] } :
          city.name === 'Sheffield' ? { percentage: 29, popularUses: [ "Streaming content", "Remote work security", "Public WiFi protection", "Online privacy" ] } :
          city.name === 'Nottingham' ? { percentage: 31, popularUses: [ "Online gaming", "Streaming services", "Public WiFi security", "Remote work" ] } :
          city.name === 'Oxford' ? generateVPNUsage() :
          city.name === 'Cambridge' ? generateVPNUsage() :
          generateVPNUsage()
}));

// Helper function to get city by ID
export const getCityById = (id: string): CityData | undefined => {
  return cities.find(city => city.id === id);
};

// Helper function to get city by name
export const getCityByName = (name: string): CityData | undefined => {
  return cities.find(city => city.name === name);
};

// Update the getCity function to be more flexible with matching
export const getCity = (cityName: string): CityData | undefined => {
  const normalizedSearch = cityName.toLowerCase().trim();
  return cities.find(city => 
    city.name.toLowerCase() === normalizedSearch ||
    city.name.toLowerCase().includes(normalizedSearch) ||
    normalizedSearch.includes(city.name.toLowerCase())
  );
};

// Get all city names for autocomplete
export const getAllCityNames = (): string[] => {
  return cities.map(city => city.name);
};

// Get cities by region
export const getCitiesByRegion = (region: string): CityData[] => {
  return cities.filter(city => city.region === region);
};

// Get nearby cities based on coordinates
export const getNearbyCities = (cityName: string, limit: number = 5): CityData[] => {
  const city = getCity(cityName);
  if (!city) return [];

  return cities
    .filter(c => c.name !== city.name)
    .map(c => ({
      ...c,
      distance: calculateDistance(
        city.coordinates.lat,
        city.coordinates.lng,
        c.coordinates.lat,
        c.coordinates.lng
      )
    }))
    .sort((a, b) => (a as any).distance - (b as any).distance)
    .slice(0, limit);
};

// Helper function to calculate distance between coordinates
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
} 