import { VPNData, VPNTableData } from '../types/vpn';

type VPNName = "ExpressVPN" | "NordVPN" | "Surfshark" | "CyberGhost" | "ProtonVPN" | "Private Internet Access";

export const vpnData: VPNData[] = [
  {
    id: 'nordvpn',
    name: 'NordVPN',
    rating: 5,
    isEditorsChoice: true,
    image: '/images/vpn/NordVPN.jpg',
    description: "Editor's Choice: NordVPN stands out as the ultimate VPN solution, offering unmatched security features, blazing-fast speeds, and exceptional reliability. With its vast network of servers and cutting-edge technology, it's our top recommendation for users seeking the best VPN experience.",
    features: [
      'Military-grade encryption',
      'No-logs policy verified by independent auditors',
      'NordLynx protocol for maximum speed',
      'Threat Protection feature',
      'Dedicated IP addresses available'
    ],
    pros: [
      'Lightning-fast connection speeds',
      'Advanced security features',
      'Large server network',
      'Excellent for streaming',
      '24/7 customer support'
    ],
    cons: [
      'Premium pricing (but worth the investment)',
      'Some servers can be crowded during peak hours'
    ],
    price: '£2.99/month',
    link: 'https://nordvpn.com'
  },
  {
    id: 'expressvpn',
    name: "ExpressVPN",
    rating: 4.5,
    image: "/images/vpn/ExpressVPN.png",
    description: "ExpressVPN is known for its fast speeds and easy-to-use interface, making it a top pick for UK users who want good performance. It has over 3,000 servers in 94 countries, including many in the UK. This is great for streaming and sharing files. The service uses strong encryption and doesn't keep logs of what you do online, so your activities stay private and secure.",
    features: [
      "TrustedServer technology for better security, which runs servers only on RAM",
      "Works well with Netflix, BBC iPlayer, and other UK streaming services",
      "24/7 live chat support to help you if you have problems",
      "Split tunneling lets you choose which apps use the VPN and which don't",
      "Lightway protocol for faster connections and better reliability"
    ],
    pros: [
      "Fastest VPN speeds",
      "Excellent for streaming",
      "Strong security features"
    ],
    cons: [
      "More expensive than competitors",
      "Limited to 5 devices"
    ],
    price: "£6.67/month (15-month plan)",
    link: "https://expressvpn.com"
  },
  {
    id: 'surfshark',
    name: "Surfshark",
    rating: 4.3,
    image: "/images/vpn/surfshark.jpg",
    description: "Surfshark has become popular because it offers lots of features at a low price, making it great for UK users who want to save money. What's really cool about Surfshark is that you can use it on as many devices as you want with one subscription. This is perfect for families or small businesses who need to protect multiple devices. Surfshark has over 3,200 servers in 100 countries, including several in the UK, so British users can get good coverage and reliable performance.",
    features: [
      "CleanWeb feature blocks ads and malware to keep you safe online",
      "MultiHop servers send your traffic through multiple countries for extra privacy",
      "Camouflage Mode hides that you're using a VPN, useful in places where VPNs are restricted",
      "Whitelister lets you choose which apps use the VPN and which don't",
      "NoBorders mode helps you get around network restrictions in countries with strict internet rules"
    ],
    pros: [
      "Unlimited device connections",
      "Very affordable pricing",
      "Strong security features"
    ],
    cons: [
      "Newer service than competitors",
      "Some servers can be slower"
    ],
    price: "£1.79/month (24-month plan)",
    link: "https://surfshark.com"
  },
  {
    id: 'cyberghost',
    name: "CyberGhost",
    rating: 4.2,
    image: "/images/vpn/CyberGhost.jpg",
    description: "CyberGhost is known for being easy to use and set up, making it great for people in the UK who are new to VPNs. It has special servers for streaming and downloading, which is good for users who want to watch shows from other countries or share files safely. This is really helpful for UK users who want to access streaming services from other regions or keep their downloads private.",
    features: [
      "Over 7,400 servers worldwide, including many in the UK for good local connections",
      "Automatic kill switch and DNS leak protection to keep your data safe if the VPN connection drops",
      "45-day money-back guarantee, giving you plenty of time to try it out",
      "NoSpy servers in Romania for extra privacy and security",
      "One-click connect feature for quick and easy protection, great for VPN beginners"
    ],
    pros: [
      "User-friendly interface",
      "Large server network",
      "Specialized streaming servers",
      "Strong security features",
      "45-day money-back guarantee"
    ],
    cons: [
      "Can be slower on distant servers",
      "Advanced features might be overwhelming for some"
    ],
    price: "£1.99/month (3-year plan)",
    link: "https://cyberghost.com"
  },
  {
    id: 'protonvpn',
    name: "ProtonVPN",
    rating: 4.0,
    image: "/images/vpn/ProtonVPN.jpg",
    description: "ProtonVPN, made by the same people who created ProtonMail (a secure email service), really cares about privacy and security. This makes it a good choice for UK users who want to keep their online activities private. The service is based in Switzerland, which has strong privacy laws, adding to its appeal. ProtonVPN also offers a free version, which is great for UK users who want to try a VPN before paying for one.",
    features: [
      "Secure Core servers that send your traffic through multiple countries for extra privacy",
      "Strong encryption to protect your data",
      "Tor over VPN feature for accessing the Tor network more securely",
      "Clear privacy policy and regular checks by outside experts",
      "NetShield feature for blocking ads and malware"
    ],
    pros: [
      "Strong privacy focus",
      "Based in Switzerland",
      "Free tier available",
      "Open-source apps"
    ],
    cons: [
      "Fewer servers than competitors",
      "Premium plans are expensive"
    ],
    price: "£3.99/month",
    link: "https://protonvpn.com"
  },
  {
    id: 'privateinternetaccess',
    name: "Private Internet Access",
    rating: 4.1,
    image: "/images/vpn/PrivateInternetAccessVPN.jpg",
    description: "Private Internet Access (PIA) stands out because it has one of the biggest networks of servers in the VPN world, with over 35,000 servers in 78 countries. This is really good for UK users because it means you can always find a fast server nearby, which makes your internet connection faster. PIA is serious about privacy and has proven in court that they don't keep logs of what users do online.",
    features: [
      "SOCKS5 proxy included for more options in how you route your internet traffic",
      "PIA MACE blocks ads and malware, making your browsing safer and faster",
      "Open-source apps so you can check the security of the software yourself",
      "Port forwarding feature for advanced users who need special network setups",
      "Option to get a dedicated IP address if you need to keep the same online identity"
    ],
    pros: [
      "Huge server network",
      "Proven no-logs policy",
      "Open-source software",
      "Affordable pricing"
    ],
    cons: [
      "Basic interface",
      "Average speeds"
    ],
    price: "£1.69/month (3-year plan)",
    link: "https://privateinternetaccess.com"
  }
];

const ukServersMap: Record<VPNName, string> = {
  "ExpressVPN": "4 locations",
  "NordVPN": "440+ servers",
  "Surfshark": "3 locations",
  "CyberGhost": "700+ servers",
  "ProtonVPN": "2 locations",
  "Private Internet Access": "Multiple locations"
};

const speedMap: Record<VPNName, string> = {
  "ExpressVPN": "Fast",
  "NordVPN": "Very Fast",
  "Surfshark": "Fast",
  "CyberGhost": "Fast",
  "ProtonVPN": "Fast",
  "Private Internet Access": "Fast"
};

const streamingMap: Record<VPNName, string> = {
  "ExpressVPN": "Excellent",
  "NordVPN": "Very Good",
  "Surfshark": "Good",
  "CyberGhost": "Good",
  "ProtonVPN": "Good",
  "Private Internet Access": "Good"
};

const ratingMap: Record<VPNName, string> = {
  "ExpressVPN": "4.5/5",
  "NordVPN": "4.4/5",
  "Surfshark": "4.3/5",
  "CyberGhost": "4.2/5",
  "ProtonVPN": "4.0/5",
  "Private Internet Access": "4.1/5"
};

const ratingClassMap: Record<VPNName, string> = {
  "ExpressVPN": "bg-green-900/50 text-green-400 border border-green-500/20",
  "NordVPN": "bg-green-900/50 text-green-400 border border-green-500/20",
  "Surfshark": "bg-yellow-900/50 text-yellow-400 border border-yellow-500/20",
  "CyberGhost": "bg-yellow-900/50 text-yellow-400 border border-yellow-500/20",
  "ProtonVPN": "bg-yellow-900/50 text-yellow-400 border border-yellow-500/20",
  "Private Internet Access": "bg-yellow-900/50 text-yellow-400 border border-yellow-500/20"
};

export const vpnTableData: VPNTableData[] = vpnData.map(vpn => ({
  ...vpn,
  ukServers: ukServersMap[vpn.name as VPNName],
  speed: speedMap[vpn.name as VPNName],
  streaming: streamingMap[vpn.name as VPNName],
  rating: ratingMap[vpn.name as VPNName],
  ratingClass: ratingClassMap[vpn.name as VPNName]
}));

export default vpnData; 