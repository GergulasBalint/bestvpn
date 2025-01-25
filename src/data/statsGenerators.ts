// Helper functions to generate stats
export const generateInternetStats = () => {
  const baseSpeed = 65 + Math.floor(Math.random() * 20);
  const providers = ["BT", "Virgin Media", "Sky", "TalkTalk", "EE", "Vodafone", "Plusnet", "Hyperoptic"];
  const selectedProviders = providers.slice(0, 3 + Math.floor(Math.random() * 2));
  
  return {
    averageSpeed: `${baseSpeed}.${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)} Mbps`,
    mainProviders: selectedProviders
  };
};

export const generateVPNUsage = () => {
  const basePercentage = 25 + Math.floor(Math.random() * 15);
  const commonUses = [
    "Streaming international content",
    "Securing public WiFi",
    "Remote work security",
    "Online privacy protection",
    "Access to geo-restricted content",
    "Online gaming",
    "Safe online banking",
    "Business security"
  ];
  
  const selectedUses = [...commonUses]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
  
  return {
    percentage: basePercentage,
    popularUses: selectedUses
  };
}; 