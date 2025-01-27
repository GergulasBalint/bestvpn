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
    title: "NordVPN Introduces Quantum-Resistant Encryption",
    date: "March 12, 2024",
    summary: "NordVPN becomes the first major VPN provider to implement post-quantum cryptography across its network.",
    content: `NordVPN has announced the implementation of post-quantum cryptography (PQC) across its infrastructure, making it the first major VPN provider to prepare for the quantum computing era. This upgrade aims to protect user data against future quantum computer attacks that could potentially break current encryption methods.

The new quantum-resistant encryption layer adds an additional shield against theoretical attacks from quantum computers. The implementation includes a hybrid key establishment that combines both traditional and post-quantum algorithms, ensuring compatibility with existing systems while providing future-proof security.

"While quantum computers capable of breaking current encryption don't exist yet, we believe in staying ahead of potential threats," says Marijus Briedis, CTO at NordVPN. "This upgrade ensures our users' data will remain secure even in the post-quantum era."

The company has also announced plans to open-source their quantum-resistant protocol implementations later this year, contributing to the broader cybersecurity community.`,
    image: "/images/news/quantum-encryption.jpg",
    category: "security",
    readTime: "4 min read"
  },
  {
    id: 'expressvpn-ram-only',
    title: "ExpressVPN Completes Global RAM-Only Server Upgrade",
    date: "March 8, 2024",
    summary: "ExpressVPN announces completion of its network-wide transition to RAM-only servers, enhancing security and privacy.",
    content: `ExpressVPN has completed its comprehensive infrastructure upgrade to RAM-only servers across its entire global network. This significant development means that all server data is now automatically wiped with every reboot, substantially improving security and privacy for users.

The TrustedServer technology, as ExpressVPN calls it, ensures that no data can persist between reboots, eliminating a wide range of potential security risks associated with traditional hard drive-based servers. Each server runs only on volatile memory (RAM), with the entire software stack reinstalled from scratch during every reboot.

"This is a major milestone in our ongoing commitment to user privacy," said Peter Membrey, Chief Architect at ExpressVPN. "With RAM-only servers, we can provide our users with an unprecedented level of security assurance."

The upgrade also includes enhanced automated security auditing and improved server management capabilities, setting a new standard for VPN server security.`,
    image: "/images/news/server-technology.jpg",
    category: "industry",
    readTime: "3 min read"
  },
  {
    id: 'uk-vpn-usage-surge',
    title: "UK VPN Usage Surges 300% Amid Privacy Concerns",
    date: "March 5, 2024",
    summary: "Recent data privacy concerns drive massive increase in VPN adoption across the United Kingdom.",
    content: `Recent research reveals a dramatic 300% increase in VPN usage across the UK in the first quarter of 2024. The surge comes amid growing concerns about online privacy and data collection practices.

The study, conducted by CyberResearch UK, shows that British internet users are increasingly turning to VPNs for everyday browsing, with particular growth among users aged 25-34. The rise is attributed to recent high-profile data breaches and increased awareness of online tracking.

Key findings from the research:
- 47% of UK internet users now regularly use a VPN
- Banking and shopping are the top activities conducted through VPNs
- Mobile VPN usage has grown by 425% year-over-year
- Privacy concerns are cited as the primary reason for VPN adoption

"This unprecedented growth in VPN usage reflects a fundamental shift in how UK citizens view online privacy," says Dr. Sarah Mitchell, lead researcher at CyberResearch UK. "People are taking active steps to protect their digital footprint."`,
    image: "/images/news/vpn-usage-graph.jpg",
    category: "privacy",
    readTime: "5 min read"
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