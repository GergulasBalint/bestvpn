export interface VPNData {
  id: string;
  name: string;
  ukServers: string;
  speed: string;
  price: string;
  streaming: string;
  rating: string;
  ratingClass: string;
  isEditorsChoice?: boolean;
  image: string;
  description: string;
  features: string[];
  pros: string[];
  cons: string[];
  link: string;
  deviceLimit: string;
  // ... any other properties you need
}

export interface VPNTableData {
  id: string;
  name: string;
  ukServers: string;
  speed: string;
  price: string;
  streaming: string;
  rating: string;
  ratingClass: string;
  deviceLimit: string;
} 