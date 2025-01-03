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
  },
  {
    name: "Edinburgh",
    region: "Scotland",
    population: 524930,
    coordinates: {
      lat: 55.9533,
      lng: -3.1883
    },
    internetStats: {
      averageSpeed: "76.3 Mbps",
      mainProviders: ["BT", "Virgin Media", "Sky", "TalkTalk"]
    },
    vpnUsage: {
      percentage: 34,
      popularUses: [
        "Remote work security",
        "Streaming international content",
        "Public WiFi protection",
        "Online privacy"
      ]
    }
  },
  {
    name: "Glasgow",
    region: "Scotland",
    population: 633120,
    coordinates: {
      lat: 55.8642,
      lng: -4.2518
    },
    internetStats: {
      averageSpeed: "74.1 Mbps",
      mainProviders: ["Virgin Media", "BT", "Sky", "TalkTalk"]
    },
    vpnUsage: {
      percentage: 31,
      popularUses: [
        "Streaming services",
        "Online gaming",
        "Public WiFi security",
        "Remote work"
      ]
    }
  },
  {
    name: "Cardiff",
    region: "Wales",
    population: 362756,
    coordinates: {
      lat: 51.4816,
      lng: -3.1791
    },
    internetStats: {
      averageSpeed: "68.9 Mbps",
      mainProviders: ["BT", "Virgin Media", "Sky", "TalkTalk"]
    },
    vpnUsage: {
      percentage: 29,
      popularUses: [
        "Streaming content",
        "Online privacy",
        "Public WiFi security",
        "Remote work access"
      ]
    }
  },
  {
    name: "Belfast",
    region: "Northern Ireland",
    population: 343542,
    coordinates: {
      lat: 54.5973,
      lng: -5.9301
    },
    internetStats: {
      averageSpeed: "65.4 Mbps",
      mainProviders: ["Virgin Media", "BT", "Sky", "EE"]
    },
    vpnUsage: {
      percentage: 28,
      popularUses: [
        "Streaming services",
        "Remote work security",
        "Public WiFi protection",
        "Online privacy"
      ]
    }
  },
  {
    name: "Bristol",
    region: "South West England",
    population: 463405,
    coordinates: {
      lat: 51.4545,
      lng: -2.5879
    },
    internetStats: {
      averageSpeed: "71.8 Mbps",
      mainProviders: ["Virgin Media", "BT", "Sky", "TalkTalk"]
    },
    vpnUsage: {
      percentage: 33,
      popularUses: [
        "Remote work security",
        "Streaming content",
        "Public WiFi protection",
        "Online privacy"
      ]
    }
  },
  {
    name: "Newcastle",
    region: "North East England",
    population: 302820,
    coordinates: {
      lat: 54.9783,
      lng: -1.6178
    },
    internetStats: {
      averageSpeed: "69.2 Mbps",
      mainProviders: ["BT", "Virgin Media", "Sky", "TalkTalk"]
    },
    vpnUsage: {
      percentage: 30,
      popularUses: [
        "Streaming services",
        "Online gaming",
        "Public WiFi security",
        "Remote work"
      ]
    }
  },
  {
    name: "Sheffield",
    region: "Yorkshire and the Humber",
    population: 584853,
    coordinates: {
      lat: 53.3811,
      lng: -1.4701
    },
    internetStats: {
      averageSpeed: "67.5 Mbps",
      mainProviders: ["Virgin Media", "BT", "Sky", "TalkTalk"]
    },
    vpnUsage: {
      percentage: 29,
      popularUses: [
        "Streaming content",
        "Remote work security",
        "Public WiFi protection",
        "Online privacy"
      ]
    }
  },
  {
    name: "Nottingham",
    region: "East Midlands",
    population: 321500,
    coordinates: {
      lat: 52.9548,
      lng: -1.1581
    },
    internetStats: {
      averageSpeed: "70.1 Mbps",
      mainProviders: ["Virgin Media", "BT", "Sky", "TalkTalk"]
    },
    vpnUsage: {
      percentage: 31,
      popularUses: [
        "Online gaming",
        "Streaming services",
        "Public WiFi security",
        "Remote work"
      ]
    }
  }
  // You can continue adding more cities as needed
];

export const getCity = (cityName: string): CityData | undefined => {
  return cities.find(city => 
    city.name.toLowerCase() === cityName.toLowerCase()
  );
};

export const getAllCityNames = (): string[] => {
  return cities.map(city => city.name);
}; 