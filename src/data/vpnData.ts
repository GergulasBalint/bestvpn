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
    ratingClass: 'bg-green-100 text-green-800',
    deviceLimit: '10 devices'
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
    ukServers: '4',
    speed: '89.42 Mbps',
    streaming: 'Netflix, BBC, Prime',
    ratingClass: 'bg-green-100 text-green-800',
    deviceLimit: '8 devices'
  },
  {
    id: 'protonvpn',
    name: 'ProtonVPN',
    rating: "4.7",
    image: '/images/vpn/ProtonVPN.jpg',
    description: 'Secure VPN from the makers of ProtonMail',
    features: ['Secure Core', 'NetShield', 'TOR over VPN'],
    pros: ['Strong privacy focus', 'Open source', 'Swiss jurisdiction'],
    cons: ['Higher price', 'Fewer servers'],
    price: '£4.99',
    link: 'https://protonvpn.com',
    ukServers: '8',
    speed: '88.51 Mbps',
    streaming: 'Netflix, BBC',
    ratingClass: 'bg-green-100 text-green-800',
    deviceLimit: '10 devices'
  },
  {
    id: 'cyberghost',
    name: 'CyberGhost',
    rating: "4.6",
    image: '/images/vpn/CyberGhost.jpg',
    description: 'User-friendly VPN with specialized streaming servers',
    features: ['NoSpy servers', 'Smart Rules', 'Automated HTTPS'],
    pros: ['Large server network', 'Good for streaming', 'Easy to use'],
    cons: ['Peak hour slowdowns', 'Basic features only'],
    price: '£2.89',
    link: 'https://cyberghost.com',
    ukServers: '700+',
    speed: '85.96 Mbps',
    streaming: 'Netflix, BBC',
    ratingClass: 'bg-green-100 text-green-800',
    deviceLimit: '7 devices'
  },
  {
    id: 'privateinternetaccess',
    name: 'Private Internet Access',
    rating: "4.4",
    image: '/images/vpn/PrivateInternetAccessVPN.jpg',
    description: 'Established VPN with proven no-logs policy',
    features: ['MACE ad blocker', 'Port forwarding', 'Split tunneling'],
    pros: ['Affordable', 'Proven privacy', 'Many customization options'],
    cons: ['Basic interface', 'Inconsistent speeds'],
    price: '£1.69',
    link: 'https://privateinternetaccess.com',
    ukServers: '2',
    speed: '82.78 Mbps',
    streaming: 'Netflix',
    ratingClass: 'bg-green-100 text-green-800',
    deviceLimit: '10 devices'
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
    ratingClass: 'bg-green-100 text-green-800',
    deviceLimit: '10 devices'
  },
  {
    id: 'expressvpn',
    name: 'ExpressVPN',
    ukServers: '4',
    speed: '89.42 Mbps',
    price: '£5.99',
    streaming: 'Netflix, BBC, Prime',
    rating: '4.8/5',
    ratingClass: 'bg-green-100 text-green-800',
    deviceLimit: '8 devices'
  },
  {
    id: 'protonvpn',
    name: 'ProtonVPN',
    ukServers: '8',
    speed: '88.51 Mbps',
    price: '£4.99',
    streaming: 'Netflix, BBC',
    rating: '4.7/5',
    ratingClass: 'bg-green-100 text-green-800',
    deviceLimit: '10 devices'
  },
  {
    id: 'cyberghost',
    name: 'CyberGhost',
    ukServers: '700+',
    speed: '85.96 Mbps',
    price: '£2.89',
    streaming: 'Netflix, BBC',
    rating: '4.6/5',
    ratingClass: 'bg-green-100 text-green-800',
    deviceLimit: '7 devices'
  },
  {
    id: 'privateinternetaccess',
    name: 'Private Internet Access',
    ukServers: '2',
    speed: '82.78 Mbps',
    price: '£1.69',
    streaming: 'Netflix',
    rating: '4.4/5',
    ratingClass: 'bg-green-100 text-green-800',
    deviceLimit: '10 devices'
  }
]; 