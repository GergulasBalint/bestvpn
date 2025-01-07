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
  // ... other VPNs
]; 