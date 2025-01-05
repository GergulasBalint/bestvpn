import { Helmet } from 'react-helmet';
import VPNComparisonTable from '../components/VPNComparisonTable';
import VPNDetailSection from '../components/VPNDetailSection';
import { vpnData } from '../data/vpnData';
import VPNPriceCalculator from '../components/VPNPriceCalculator';
import FeatureComparison from '../components/FeatureComparison';

// SEO Constants
const PAGE_TITLE = "Top 6 VPNs for Privacy in the UK";
const PAGE_DESCRIPTION = "Compare the top 6 VPNs for UK users. In-depth analysis of ExpressVPN, NordVPN, Surfshark, CyberGhost, ProtonVPN, and Private Internet Access. Find the best VPN for your needs.";
const PAGE_KEYWORDS = ["Best VPN UK", "VPN Comparison", "ExpressVPN UK", "NordVPN UK", "Surfshark", "CyberGhost", "ProtonVPN", "Private Internet Access"];
const SITE_NAME = "Best VPN UK";
const CANONICAL_URL = "https://bestvpn-uk.com/best-vpns";
const SITE_IMAGE = "/og-image.jpg";

// Structured Data
const getStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Top 6 VPNs for Privacy in the UK",
  "description": PAGE_DESCRIPTION,
  "image": SITE_IMAGE,
  "author": {
    "@type": "Organization",
    "name": SITE_NAME
  },
  "publisher": {
    "@type": "Organization",
    "name": SITE_NAME,
    "logo": {
      "@type": "ImageObject",
      "url": "https://bestvpn-uk.com/logo.png"
    }
  },
  "datePublished": "2025-01-03",
  "dateModified": "2025-01-03",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": CANONICAL_URL
  }
});

const BestVPNs = () => {
  return (
    <>
      <Helmet>
        <html lang="en-GB" />
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="keywords" content={PAGE_KEYWORDS.join(', ')} />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={SITE_IMAGE} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="en_GB" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={SITE_IMAGE} />
        
        <script type="application/ld+json">
          {JSON.stringify(getStructuredData())}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <main className="max-w-5xl mx-auto px-4 py-12" itemScope itemType="http://schema.org/Article">
          <article>
            {/* Hero Section */}
            <header className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
                Top 6 VPNs for Privacy in the UK
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Top 6 VPNs for Privacy in the UK. Protecting your online privacy is really important these days. 
                If you're in the UK, using a Virtual Private Network (VPN) is a good way to keep your internet 
                activities safe and private.
              </p>
            </header>

            {/* Key Takeaways */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl mb-16 shadow-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-cyber-blue">Key Takeaways</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start space-x-2">
                  <span className="text-cyber-blue">•</span>
                  <span>ExpressVPN offers the best speeds for streaming and browsing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyber-blue">•</span>
                  <span>NordVPN provides advanced security features for privacy-conscious users</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyber-blue">•</span>
                  <span>Surfshark is the most budget-friendly option with unlimited device connections</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyber-blue">•</span>
                  <span>CyberGhost is ideal for beginners with its user-friendly interface</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyber-blue">•</span>
                  <span>ProtonVPN focuses on privacy and offers a free tier</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyber-blue">•</span>
                  <span>Private Internet Access boasts the largest server network</span>
                </li>
              </ul>
            </div>

            {/* Comparison Table */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">VPN Comparison</h2>
              <VPNComparisonTable className="mb-12" />
            </section>

            {/* Compare VPN Costs */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Compare VPN Costs</h2>
              <VPNPriceCalculator />
            </section>

            {/* Feature Comparison */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Feature Comparison</h2>
              <FeatureComparison />
            </section>

            {/* VPN Details */}
            <div className="space-y-20">
              {vpnData.map((vpn) => (
                <VPNDetailSection
                  key={vpn.id}
                  vpn={vpn}
                />
              ))}
            </div>

            {/* Conclusion */}
            <section className="mt-20 bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-cyber-blue">Conclusion: Choosing the Best VPN for Your Needs</h2>
              <div className="space-y-4 text-gray-300">
                <p>When picking a VPN in the UK, think about what you need most. If you want speed, especially for streaming or gaming, ExpressVPN or NordVPN might be best. They're fast and good at getting around blocks on streaming sites.</p>
                <p>If you don't want to spend much, Surfshark is a great deal and lets you use it on as many devices as you want. CyberGhost is easy to use, so it's good if you're new to VPNs.</p>
                <p>If privacy is your top concern, ProtonVPN might be the best choice. It's based in Switzerland, which has strong privacy laws. Private Internet Access has lots of servers, which is good if you want flexibility in choosing where to connect.</p>
                <p>All these VPNs use strong encryption, don't keep logs of what you do, and work well in the UK. They'll protect your online activities, help you access content that might be blocked, and give you more control over your internet use.</p>
              </div>
            </section>

            {/* Footer */}
            <footer className="mt-12 text-sm text-gray-400 border-t border-gray-700 pt-8">
              <p>Author: Best VPN UK Editorial Team</p>
            </footer>
          </article>
        </main>
      </div>
    </>
  );
};

export default BestVPNs; 