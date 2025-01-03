export interface VPNData {
  id: string;
  name: string;
  rating: number;
  isEditorsChoice?: boolean;
  image: string;
  description: string;
  features: string[];
  pros: string[];
  cons: string[];
  price: string;
  link: string;
}

export interface VPNTableData extends Omit<VPNData, 'rating'> {
  ukServers: string;
  speed: string;
  streaming: string;
  rating: string;
  ratingClass: string;
} 