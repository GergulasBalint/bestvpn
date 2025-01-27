import { Helmet } from 'react-helmet';
import VPNComparisonTable from '../components/VPNComparisonTable';
import VPNDetailSection from '../components/VPNDetailSection';
import { vpnData } from '../data/vpnData';
import { FC } from 'react';
import RelatedLinks from '../components/RelatedLinks';
import CyberBackground from '../components/CyberBackground';

const BestVPNs: FC = () => {
  return (
    <>
      <Helmet>
        <title>Top 6 VPNs for Privacy in the UK</title>
        <meta name="description" content="Compare the top 6 VPN services for the UK in 2024. Expert reviews, speed tests, and security analysis. Find the best VPN for streaming, privacy, and value." />
        <meta name="keywords" content="best vpn UK, vpn comparison, nordvpn, expressvpn, secure vpn, streaming vpn, fastest vpn UK" />
        <meta property="og:title" content="Top 6 VPNs for Privacy in the UK - Best VPN UK" />
        <meta property="og:description" content="Compare the top 6 VPN services for the UK in 2024. Expert reviews, speed tests, and security analysis." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bestvpnuk.netlify.app/best-vpns" />
        <meta property="og:image" content="https://bestvpnuk.netlify.app/images/vpn/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://bestvpnuk.netlify.app/best-vpns" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Top 6 VPNs for Privacy in the UK",
            "description": "Compare the top 6 VPN services for the UK in 2024. Expert reviews, speed tests, and security analysis.",
            "datePublished": "2024-03-19",
            "dateModified": "2024-03-19",
            "publisher": {
              "@type": "Organization",
              "name": "Best VPN UK",
              "logo": {
                "@type": "ImageObject",
                "url": "https://bestvpnuk.netlify.app/images/vpn/logo.webp"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative text-white">
        <CyberBackground />
        <div className="relative z-10">
          {/* Hero Section */}
          <div className="relative overflow-hidden py-12 mb-6">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
                  Best VPN Services
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Expert-tested and verified. Compare the top VPN services for security, speed, and streaming.
                </p>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
                  <div className="text-4xl font-bold text-cyber-blue mb-2">256</div>
                  <div className="text-gray-400">Bit Encryption</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">5500+</div>
                  <div className="text-gray-400">Servers Worldwide</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
                  <div className="text-gray-400">Average Speed</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                  <div className="text-gray-400">Support Available</div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
                  <div className="text-3xl mb-4">🛡️</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Maximum Security</h3>
                  <p className="text-gray-400">
                    Military-grade encryption and advanced security features keep your data safe.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
                  <p className="text-gray-400">
                    Optimized servers ensure minimal speed loss while browsing and streaming.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
                  <div className="text-3xl mb-4">🌍</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Global Access</h3>
                  <p className="text-gray-400">
                    Unlock content worldwide with servers in 60+ countries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <main className="max-w-6xl mx-auto px-4 py-4">
            {/* Existing VPN comparison content */}
            <VPNComparisonTable vpns={vpnData} />
            
            {vpnData.map(vpn => (
              <VPNDetailSection key={vpn.id} vpn={vpn} />
            ))}

            <RelatedLinks currentPath="/best-vpns" />
          </main>
        </div>
      </div>
    </>
  );
};

export default BestVPNs; 