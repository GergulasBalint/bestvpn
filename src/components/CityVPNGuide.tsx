import React from 'react';
import { Helmet } from 'react-helmet';
import VPNComparisonTable from './VPNComparisonTable';
import type { CityData } from '../data/cityData';

interface CityVPNGuideProps {
  city: CityData;
}

const CityVPNGuide: React.FC<CityVPNGuideProps> = ({ city }) => {
  const pageTitle = `Best VPN for ${city.name} (${new Date().getFullYear()}) - Local Guide`;
  const pageDescription = `Find the best VPN services for ${city.name}. Compare speeds, features, and prices. Local insights for ${city.region} users with average speeds of ${city.internetStats.averageSpeed}.`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`Best VPN ${city.name}, VPN ${city.name}, ${city.name} VPN service, secure internet ${city.name}, ${city.region} VPN`} />
        <link rel="canonical" href={`https://bestvpn-uk.com/city/${city.name.toLowerCase()}`} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://bestvpn-uk.com/city/${city.name.toLowerCase()}`} />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": pageTitle,
            "description": pageDescription,
            "author": {
              "@type": "Organization",
              "name": "Best VPN UK"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Best VPN UK",
              "logo": {
                "@type": "ImageObject",
                "url": "https://bestvpn-uk.com/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <main className="max-w-5xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
              Best VPN for {city.name}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Find the perfect VPN service for {city.name}, with local insights and recommendations 
              tailored to {city.region} users. Compare the top VPN providers with detailed analysis 
              of speeds, features, and pricing.
            </p>
          </header>

          {/* Local Stats Section */}
          <section className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl mb-16 shadow-xl border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-cyber-blue">Local Internet Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-2 text-cyber-blue">Internet Speed</h3>
                <p className="text-gray-300">Average speed: {city.internetStats.averageSpeed}</p>
                <p className="text-sm text-gray-400 mt-2">Main providers: {city.internetStats.mainProviders.join(', ')}</p>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-2 text-cyber-blue">VPN Usage</h3>
                <p className="text-gray-300">{city.vpnUsage.percentage}% of {city.name} residents use VPNs</p>
                <div className="mt-2">
                  <p className="text-sm text-gray-400">Popular uses:</p>
                  <ul className="text-sm text-gray-400 list-disc list-inside">
                    {city.vpnUsage.popularUses.map((use, index) => (
                      <li key={index}>{use}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-2 text-cyber-blue">Local Hotspots</h3>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    title={`Map of ${city.name}`}
                    width="100%"
                    height="200"
                    frameBorder="0"
                    src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${city.name},UK&center=${city.coordinates.lat},${city.coordinates.lng}&zoom=12`}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>

          {/* VPN Recommendations */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Recommended VPNs for {city.name}
            </h2>
            <VPNComparisonTable className="mb-12" />
          </section>

          {/* Local Tips */}
          <section className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl mb-16 shadow-xl border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-cyber-blue">Local VPN Tips for {city.name}</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                When choosing a VPN in {city.name}, consider the following local factors:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Look for VPN servers in {city.region} for optimal speeds</li>
                <li>Consider providers that work well with {city.internetStats.mainProviders[0]} and {city.internetStats.mainProviders[1]}</li>
                <li>Choose VPNs with strong security features for public WiFi protection</li>
                <li>Ensure the VPN supports streaming if you use BBC iPlayer or other UK services</li>
              </ul>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-cyber-blue">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-cyber-blue">
                  Why do I need a VPN in {city.name}?
                </h3>
                <p className="text-gray-300">
                  A VPN provides essential online privacy and security for {city.name} residents, 
                  especially when using public WiFi at locations like {city.name} city centre, 
                  shopping centers, and cafes. It also helps access geo-restricted content and 
                  ensures secure remote working.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-cyber-blue">
                  Which VPN servers should I connect to from {city.name}?
                </h3>
                <p className="text-gray-300">
                  For the best speeds, connect to VPN servers in {city.region} or nearby UK locations. 
                  All recommended VPNs have multiple servers in the region, ensuring stable and fast 
                  connections for {city.name} users.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-cyber-blue">
                  Will a VPN affect my internet speed in {city.name}?
                </h3>
                <p className="text-gray-300">
                  With average speeds of {city.internetStats.averageSpeed} in {city.name}, 
                  a quality VPN should maintain good performance. Our recommended VPNs have been 
                  tested with local ISPs like {city.internetStats.mainProviders.join(', ')} 
                  to ensure minimal speed impact.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default CityVPNGuide; 