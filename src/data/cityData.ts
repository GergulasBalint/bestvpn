export interface CityData {
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

export const cities: CityData[] = [
  {
    name: "Leeds",
    region: "Yorkshire and the Humber",
    population: 789194,
    coordinates: {
      lat: 53.8008,
      lng: -1.5491
    },
    internetStats: {
      averageSpeed: "65.5 Mbps",
      mainProviders: ["BT", "Virgin Media", "Sky", "TalkTalk"]
    },
    vpnUsage: {
      percentage: 32,
      popularUses: [
        "Accessing international streaming content",
        "Securing public WiFi in city center cafes",
        "Remote work security",
        "Online shopping privacy"
      ]
    }
  },
  {
    name: "Manchester",
    region: "North West England",
    population: 547627,
    coordinates: {
      lat: 53.4808,
      lng: -2.2426
    },
    internetStats: {
      averageSpeed: "71.2 Mbps",
      mainProviders: ["Virgin Media", "BT", "Sky", "TalkTalk"]
    },
    vpnUsage: {
      percentage: 35,
      popularUses: [
        "Remote work security",
        "Streaming international sports",
        "Public WiFi protection",
        "Online gaming"
      ]
    }
  },
  {
    name: "Liverpool",
    region: "North West England",
    population: 498042,
    coordinates: {
      lat: 53.4084,
      lng: -2.9916
    },
    internetStats: {
      averageSpeed: "68.7 Mbps",
      mainProviders: ["Virgin Media", "BT", "Sky", "TalkTalk"]
    },
    vpnUsage: {
      percentage: 30,
      popularUses: [
        "Streaming sports content",
        "Online shopping security",
        "Public WiFi protection",
        "Remote work"
      ]
    }
  },
  {
    name: "Birmingham",
    region: "West Midlands",
    population: 1144919,
    coordinates: {
      lat: 52.4862,
      lng: -1.8904
    },
    internetStats: {
      averageSpeed: "69.8 Mbps",
      mainProviders: ["BT", "Virgin Media", "Sky", "TalkTalk"]
    },
    vpnUsage: {
      percentage: 33,
      popularUses: [
        "Business security",
        "Streaming services",
        "Public WiFi security",
        "Online privacy"
      ]
    }
  },
  {
    name: "London",
    region: "Greater London",
    population: 8982000,
    coordinates: {
      lat: 51.5074,
      lng: -0.1278
    },
    internetStats: {
      averageSpeed: "78.3 Mbps",
      mainProviders: ["BT", "Virgin Media", "Sky", "Hyperoptic"]
    },
    vpnUsage: {
      percentage: 38,
      popularUses: [
        "International business access",
        "Remote work security",
        "Public WiFi protection",
        "Streaming services"
      ]
    }
  }
  // Add more cities as needed
];

export const getCity = (cityName: string): CityData | undefined => {
  return cities.find(city => 
    city.name.toLowerCase() === cityName.toLowerCase()
  );
};

export const getAllCityNames = (): string[] => {
  return cities.map(city => city.name);
}; 