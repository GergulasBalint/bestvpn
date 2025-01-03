// Define some city relationships for better internal linking
const cityRelationships: { [key: string]: string[] } = {
  london: ['manchester', 'birmingham', 'bristol', 'cambridge', 'oxford'],
  manchester: ['liverpool', 'leeds', 'sheffield', 'birmingham', 'london'],
  birmingham: ['london', 'manchester', 'bristol', 'nottingham', 'leicester'],
  edinburgh: ['glasgow', 'aberdeen', 'dundee', 'stirling', 'perth'],
  glasgow: ['edinburgh', 'aberdeen', 'dundee', 'stirling', 'perth'],
  liverpool: ['manchester', 'leeds', 'blackpool', 'chester', 'birmingham'],
  leeds: ['manchester', 'york', 'sheffield', 'bradford', 'liverpool'],
  bristol: ['cardiff', 'bath', 'exeter', 'gloucester', 'london'],
  cardiff: ['bristol', 'swansea', 'newport', 'bath', 'exeter'],
  // Add more cities as needed
};

export const getNearbyCities = (cityName: string): string[] => {
  const normalizedCity = cityName.toLowerCase();
  
  // Return related cities if they exist, or default to popular cities
  return cityRelationships[normalizedCity] || [
    'london',
    'manchester',
    'birmingham',
    'edinburgh',
    'glasgow'
  ];
};

export const formatCityName = (city: string): string => {
  return city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
}; 