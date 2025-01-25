import { CityData } from './cityData';

// Helper functions for city data manipulation
export function determineRegion(cityName: string): string {
  const regionMap: { [key: string]: string } = {
    'London': 'Greater London',
    'Manchester': 'North West England',
    'Birmingham': 'West Midlands',
    'Leeds': 'Yorkshire and the Humber',
    'Liverpool': 'North West England',
    'Glasgow': 'Scotland',
    'Edinburgh': 'Scotland',
    'Cardiff': 'Wales',
    'Belfast': 'Northern Ireland',
    'Aberdeen': 'Scotland',
    'Newcastle': 'North East England',
    'Sheffield': 'Yorkshire and the Humber',
    'Bristol': 'South West England',
    'Nottingham': 'East Midlands',
    'Cambridge': 'East of England',
    'Oxford': 'South East England',
    'York': 'Yorkshire and the Humber'
  };
  return regionMap[cityName] || 'United Kingdom';
}

export function determineCityPopulation(cityName: string): number {
  const populationMap: { [key: string]: number } = {
    'London': 8982000,
    'Birmingham': 1144919,
    'Leeds': 789194,
    'Glasgow': 633120,
    'Sheffield': 584853,
    'Manchester': 547627,
    'Edinburgh': 524930,
    'Liverpool': 498042,
    'Bristol': 463405,
    'Cardiff': 362756,
    'Belfast': 343542,
    'Newcastle': 302820,
    'Nottingham': 321500,
    'Aberdeen': 198590,
    'Cambridge': 123900,
    'Oxford': 152450
  };
  return populationMap[cityName] || 0;
}

export function determineCityCoordinates(cityName: string): { lat: number; lng: number } {
  const coordinatesMap: { [key: string]: { lat: number; lng: number } } = {
    'London': { lat: 51.5074, lng: -0.1278 },
    'Manchester': { lat: 53.4808, lng: -2.2426 },
    'Birmingham': { lat: 52.4862, lng: -1.8904 },
    'Leeds': { lat: 53.8008, lng: -1.5491 },
    'Liverpool': { lat: 53.4084, lng: -2.9916 },
    'Glasgow': { lat: 55.8642, lng: -4.2518 },
    'Edinburgh': { lat: 55.9533, lng: -3.1883 },
    'Cardiff': { lat: 51.4816, lng: -3.1791 },
    'Belfast': { lat: 54.5973, lng: -5.9301 },
    'Bristol': { lat: 51.4545, lng: -2.5879 },
    'Newcastle': { lat: 54.9783, lng: -1.6178 },
    'Sheffield': { lat: 53.3811, lng: -1.4701 },
    'Nottingham': { lat: 52.9548, lng: -1.1581 },
    'Cambridge': { lat: 52.2053, lng: 0.1218 },
    'Oxford': { lat: 51.7520, lng: -1.2577 }
  };
  return coordinatesMap[cityName] || { lat: 0, lng: 0 };
}

// Helper functions to get city data
export const getCityById = (cities: CityData[], id: string): CityData | undefined => {
  return cities.find(city => city.id === id);
};

export const getCityByName = (cities: CityData[], name: string): CityData | undefined => {
  return cities.find(city => city.name === name);
};

export const getCity = (cities: CityData[], cityName: string): CityData | undefined => {
  const normalizedSearch = cityName.toLowerCase().trim();
  return cities.find(city => 
    city.name.toLowerCase() === normalizedSearch ||
    city.name.toLowerCase().includes(normalizedSearch) ||
    normalizedSearch.includes(city.name.toLowerCase())
  );
};

export const getAllCityNames = (cities: CityData[]): string[] => {
  return cities.map(city => city.name);
};

export const getCitiesByRegion = (cities: CityData[], region: string): CityData[] => {
  return cities.filter(city => city.region === region);
}; 