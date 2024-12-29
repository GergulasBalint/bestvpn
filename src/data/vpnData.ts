import { VPNData, VPNTableData } from '../types/vpn';

type VPNName = "ExpressVPN" | "NordVPN" | "Surfshark" | "CyberGhost" | "ProtonVPN" | "Private Internet Access";

export const vpnData: VPNData[] = [
  {
    name: "ExpressVPN",
    description: "ExpressVPN is known for its fast speeds and easy-to-use interface, making it a top pick for UK users who want good performance. It has over 3,000 servers in 94 countries, including many in the UK. This is great for streaming and sharing files. The service uses strong encryption and doesn't keep logs of what you do online, so your activities stay private and secure.",
    features: [
      "TrustedServer technology for better security, which runs servers only on RAM",
      "Works well with Netflix, BBC iPlayer, and other UK streaming services",
      "24/7 live chat support to help you if you have problems",
      "Split tunneling lets you choose which apps use the VPN and which don't",
      "Lightway protocol for faster connections and better reliability"
    ],
    price: "£6.67/month (15-month plan)",
    image: "/images/vpn/ExpressVPN.png"
  },
  {
    name: "NordVPN",
    description: "NordVPN is a top choice for UK users who really care about security. It offers lots of advanced features to protect your privacy and data. With over 5,400 servers worldwide, including many fast ones in the UK, NordVPN makes sure you can always find a good connection. It has cool features like double VPN and Onion over VPN, which give extra layers of protection for people who want to be super anonymous online.",
    features: [
      "CyberSec feature blocks ads and malware, making your browsing safer and smoother",
      "You can get a dedicated IP address if you need to keep the same online identity",
      "Automatic kill switch stops data leaks if the VPN connection drops",
      "NordLynx protocol based on WireGuard for great speeds and security",
      "Multi-factor authentication to keep your account extra safe"
    ],
    price: "£2.89/month (2-year plan)",
    image: "/images/vpn/NordVPN.jpg"
  },
  {
    name: "Surfshark",
    description: "Surfshark has become popular because it offers lots of features at a low price, making it great for UK users who want to save money. What's really cool about Surfshark is that you can use it on as many devices as you want with one subscription. This is perfect for families or small businesses who need to protect multiple devices. Surfshark has over 3,200 servers in 100 countries, including several in the UK, so British users can get good coverage and reliable performance.",
    features: [
      "CleanWeb feature blocks ads and malware to keep you safe online",
      "MultiHop servers send your traffic through multiple countries for extra privacy",
      "Camouflage Mode hides that you're using a VPN, useful in places where VPNs are restricted",
      "Whitelister lets you choose which apps use the VPN and which don't",
      "NoBorders mode helps you get around network restrictions in countries with strict internet rules"
    ],
    price: "£1.79/month (24-month plan)",
    image: "/images/vpn/surfshark.jpg"
  },
  {
    name: "CyberGhost",
    description: "CyberGhost is known for being easy to use and set up, making it great for people in the UK who are new to VPNs. It has special servers for streaming and downloading, which is good for users who want to watch shows from other countries or share files safely. This is really helpful for UK users who want to access streaming services from other regions or keep their downloads private.",
    features: [
      "Over 7,400 servers worldwide, including many in the UK for good local connections",
      "Automatic kill switch and DNS leak protection to keep your data safe if the VPN connection drops",
      "45-day money-back guarantee, giving you plenty of time to try it out",
      "NoSpy servers in Romania for extra privacy and security",
      "One-click connect feature for quick and easy protection, great for VPN beginners"
    ],
    price: "£1.99/month (3-year plan)",
    image: "/images/vpn/CyberGhost.jpg"
  },
  {
    name: "ProtonVPN",
    description: "ProtonVPN, made by the same people who created ProtonMail (a secure email service), really cares about privacy and security. This makes it a good choice for UK users who want to keep their online activities private. The service is based in Switzerland, which has strong privacy laws, adding to its appeal. ProtonVPN also offers a free version, which is great for UK users who want to try a VPN before paying for one.",
    features: [
      "Secure Core servers that send your traffic through multiple countries for extra privacy",
      "Strong encryption to protect your data",
      "Tor over VPN feature for accessing the Tor network more securely",
      "Clear privacy policy and regular checks by outside experts",
      "NetShield feature for blocking ads and malware"
    ],
    price: "£3.99/month",
    image: "/images/vpn/ProtonVPN.jpg"
  },
  {
    name: "Private Internet Access",
    description: "Private Internet Access (PIA) stands out because it has one of the biggest networks of servers in the VPN world, with over 35,000 servers in 78 countries. This is really good for UK users because it means you can always find a fast server nearby, which makes your internet connection faster. PIA is serious about privacy and has proven in court that they don't keep logs of what users do online.",
    features: [
      "SOCKS5 proxy included for more options in how you route your internet traffic",
      "PIA MACE blocks ads and malware, making your browsing safer and faster",
      "Open-source apps so you can check the security of the software yourself",
      "Port forwarding feature for advanced users who need special network setups",
      "Option to get a dedicated IP address if you need to keep the same online identity"
    ],
    price: "£1.69/month (3-year plan)",
    image: "/images/vpn/PrivateInternetAccessVPN.jpg"
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