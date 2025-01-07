import { VPNData, VPNTableData } from '../types/vpn';

// Full VPN data for detail pages
export const vpnData: VPNData[] = [
  {
    id: 'nordvpn',
    name: 'NordVPN',
    rating: "4.9",
    isEditorsChoice: true,
    image: '/images/vpn/NordVPN.jpg',
    description: 'Leading VPN service with advanced security features',
    features: ['Kill Switch', 'Double VPN', 'CyberSec'],
    pros: ['Fast speeds', 'Large server network', 'Strong security'],
    cons: ['No free trial', 'Limited protocol options'],
    price: '£2.99',
    link: 'https://nordvpn.com',
    ukServers: '440+',
    speed: '93.21 Mbps',
    streaming: 'Netflix, BBC, Prime',
    ratingClass: 'bg-green-100 text-green-800'
  },
  {
    id: 'expressvpn',
    name: 'ExpressVPN',
    rating: "4.8",
    image: '/images/vpn/ExpressVPN.png',
    description: 'Premium VPN with excellent speeds',
    features: ['Smart Location', 'Split Tunneling', 'TrustedServer'],
    pros: ['Best-in-class encryption', 'Fast servers', 'Great for streaming'],
    cons: ['More expensive', 'Only 5 connections'],
    price: '£5.99',
    link: 'https://expressvpn.com',
    ukServers: '',
    speed: '',
    streaming: '',
    ratingClass: ''
  },
  {
    id: 'surfshark',
    name: 'Surfshark',
    rating: "4.7",
    image: '/images/vpn/surfshark.jpg',
    description: 'Affordable VPN with unlimited connections',
    features: ['CleanWeb', 'Unlimited Devices', 'MultiHop'],
    pros: ['Unlimited devices', 'Affordable', 'Strong privacy'],
    cons: ['Newer provider', 'Variable speeds'],
    price: '£1.99',
    link: 'https://surfshark.com',
    ukServers: '',
    speed: '',
    streaming: '',
    ratingClass: ''
  }
];

// Simplified data for comparison table
export const vpnTableData: VPNTableData[] = [
  {
    id: 'nordvpn',
    name: 'NordVPN',
    ukServers: '440+',
    speed: '93.21 Mbps',
    price: '£2.99',
    streaming: 'Netflix, BBC, Prime',
    rating: '4.9/5',
    ratingClass: 'bg-green-100 text-green-800'
  },
  {
    id: 'expressvpn',
    name: 'ExpressVPN',
    ukServers: '4',
    speed: '89.42 Mbps',
    price: '£5.99',
    streaming: 'Netflix, BBC, Prime',
    rating: '4.8/5',
    ratingClass: 'bg-green-100 text-green-800'
  },
  {
    id: 'surfshark',
    name: 'Surfshark',
    ukServers: '3',
    speed: '88.51 Mbps',
    price: '£1.99',
    streaming: 'Netflix, BBC',
    rating: '4.7/5',
    ratingClass: 'bg-green-100 text-green-800'
  },
  {
    id: 'cyberghost',
    name: 'CyberGhost',
    ukServers: '700+',
    speed: '85.96 Mbps',
    price: '£2.89',
    streaming: 'Netflix, BBC',
    rating: '4.6/5',
    ratingClass: 'bg-green-100 text-green-800'
  },
  {
    id: 'protonvpn',
    name: 'ProtonVPN',
    ukServers: '8',
    speed: '84.18 Mbps',
    price: '£4.99',
    streaming: 'Netflix',
    rating: '4.5/5',
    ratingClass: 'bg-green-100 text-green-800'
  },
  {
    id: 'privateinternetaccess',
    name: 'Private Internet Access',
    ukServers: '2',
    speed: '82.78 Mbps',
    price: '£1.69',
    streaming: 'Netflix',
    rating: '4.4/5',
    ratingClass: 'bg-green-100 text-green-800'
  }
]; 