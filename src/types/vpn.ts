export interface VPNData {
  name: string;
  description: string;
  features: string[];
  price: string;
  image: string;
}

export interface VPNTableData extends VPNData {
  ukServers: string;
  speed: string;
  streaming: string;
  rating: string;
  ratingClass: string;
} 