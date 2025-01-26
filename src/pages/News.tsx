import { FC } from 'react';
import { Helmet } from 'react-helmet';
import CyberBackground from '../components/CyberBackground';
import { Link } from 'react-router-dom';

interface NewsArticle {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  image: string;
  category: 'security' | 'industry' | 'privacy';
  readTime: string;
}

const newsArticles: NewsArticle[] = [
  {
    id: 'nordvpn-quantum-resistance',
    title: "NordVPN Implements Post-Quantum Cryptography to Counter Future Cyber Threats",
    date: "March 15, 2024",
    summary: "NordVPN becomes one of the first VPN providers to implement quantum-resistant encryption methods, preparing for the era of quantum computing.",
    content: `NordVPN has announced the implementation of post-quantum cryptography (PQC) across its infrastructure, becoming one of the first VPN providers to prepare for the quantum computing era. This upgrade aims to protect user data against future quantum computer attacks that could potentially break current encryption methods.

    The new quantum-resistant encryption layer adds protection against theoretical attacks from quantum computers, which could potentially crack traditional encryption methods. This implementation includes the use of hybrid key establishment that combines both traditional and post-quantum algorithms.

    "While functional quantum computers capable of breaking current encryption don't exist yet, we believe in staying ahead of potential threats," says Marijus Briedis, CTO at NordVPN. "This upgrade ensures our users' data will remain secure even in the post-quantum era."`,
    image: "/images/news/quantum-computing.jpg",
    category: "security",
    readTime: "4 min read"
  },
  {
    id: 'uk-vpn-regulation',
    title: "UK Government Considers New VPN Regulations Amid Privacy Concerns",
    date: "March 12, 2024",
    summary: "New proposals for VPN regulation in the UK spark debate about privacy and security implications.",
    content: `The UK government is considering new regulations for VPN services operating within the country, raising concerns among privacy advocates and industry leaders. The proposed framework aims to establish standards for VPN providers while ensuring national security interests.

    Key points of the proposed regulations include:
    - Mandatory data retention policies for VPN providers
    - Regular security audits and compliance reports
    - Minimum encryption standards
    - User verification requirements

    Privacy advocates argue these measures could compromise user anonymity and data security. The VPN industry has responded with calls for balanced regulation that protects both national security and individual privacy rights.

    "Any regulation of VPN services must carefully balance security needs with privacy rights," says Jim Killock, Executive Director of the Open Rights Group. "We can't compromise the fundamental privacy protections that VPNs provide."`,
    image: "/images/news/uk-regulation.jpg",
    category: "industry",
    readTime: "5 min read"
  },
  {
    id: 'expressvpn-ram-servers',
    title: "ExpressVPN Expands TrustedServer Technology with New RAM-Only Infrastructure",
    date: "March 8, 2024",
    summary: "ExpressVPN enhances security with expanded RAM-only server network and advanced security features.",
    content: `ExpressVPN has announced a significant expansion of its TrustedServer technology, implementing RAM-only servers across its entire network. This upgrade represents a major step forward in VPN security, as RAM-only servers ensure that no data can be physically stored on the servers.

    The company has also introduced several new security features:
    - Advanced threat protection system
    - Improved network lock kill switch
    - Enhanced split tunneling capabilities
    - New protocol optimizations for better performance

    "Our expanded TrustedServer technology sets a new standard for VPN security," says Peter Membrey, Chief Architect at ExpressVPN. "RAM-only servers provide the highest level of security and privacy by ensuring all data is automatically wiped with every server reboot."

    The upgrade affects all 3,000+ servers across ExpressVPN's global network, making it one of the largest RAM-only VPN infrastructures in the industry.`,
    image: "/images/news/server-technology.jpg",
    category: "privacy",
    readTime: "6 min read"
  }
];

const News: FC = () => {
  return (
    <>
      <Helmet>
        <title>Latest VPN News & Updates | Best VPN UK</title>
        <meta name="description" content="Stay updated with the latest VPN industry news, security updates, and privacy developments in the UK." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative text-white">
        <CyberBackground />
        
        <div className="relative z-10">
          <main className="max-w-6xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text text-center">
              Latest VPN News
            </h1>

            {/* Featured Article */}
            <div className="mb-16">
              <article className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-cyber-blue/50 transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={newsArticles[0].image} 
                      alt={newsArticles[0].title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-1/2">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full bg-cyber-blue/20 text-cyber-blue text-sm">
                        {newsArticles[0].category}
                      </span>
                      <span className="text-gray-400 text-sm">{newsArticles[0].date}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-cyber-blue mb-4">
                      {newsArticles[0].title}
                    </h2>
                    <p className="text-gray-300 mb-6">
                      {newsArticles[0].summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{newsArticles[0].readTime}</span>
                      <Link 
                        to={`/news/${newsArticles[0].id}`}
                        className="text-cyber-blue hover:text-cyber-blue/80 transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Article Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {newsArticles.slice(1).map(article => (
                <article 
                  key={article.id}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-cyber-blue/50 transition-all duration-300"
                >
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full bg-cyber-blue/20 text-cyber-blue text-sm">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-sm">{article.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-cyber-blue mb-4">
                      {article.title}
                    </h2>
                    <p className="text-gray-300 mb-6">
                      {article.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{article.readTime}</span>
                      <Link 
                        to={`/news/${article.id}`}
                        className="text-cyber-blue hover:text-cyber-blue/80 transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 text-center">
              <h2 className="text-2xl font-bold text-cyber-blue mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest VPN news and security updates.
              </p>
              <form className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-700/50 rounded-lg border border-gray-600 focus:outline-none focus:border-cyber-blue"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-cyber-blue text-gray-900 font-semibold rounded-lg hover:bg-cyber-blue/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default News; 