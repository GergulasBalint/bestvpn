import { FC } from 'react';
import { Helmet } from 'react-helmet';
import RelatedLinks from '../components/RelatedLinks';
import CyberBackground from '../components/CyberBackground';

const About: FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Best VPN UK</title>
        <meta name="description" content="Learn about our mission to help UK users find the perfect VPN service. Independent reviews and expert analysis." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative text-white">
        <CyberBackground />
        <div className="relative z-10">
          <main className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text text-center">
              About Best VPN UK
            </h1>
            
            <div className="space-y-8 text-cyber-gray">
              <section className="glass-effect p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                <h2 className="text-2xl font-semibold mb-4 text-cyber-blue">Our Mission</h2>
                <p className="leading-relaxed">
                  At BestVPNUK, we're dedicated to bringing you the most comprehensive and up-to-date news about virtual private networks, 
                  with a special focus on the UK market. In today's interconnected world, staying informed about your digital security 
                  isn't just an option—it's a necessity.
                </p>
              </section>

              <section className="glass-effect p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                <h2 className="text-2xl font-semibold mb-4 text-cyber-blue">What We Cover</h2>
                <ul className="list-disc list-inside space-y-3">
                  <li>Latest developments in VPN technology</li>
                  <li>UK-specific privacy laws and regulations</li>
                  <li>Best VPN services for UK users</li>
                  <li>Security breaches affecting UK citizens</li>
                  <li>Tips for maintaining your digital privacy</li>
                  <li>Expert reviews and service comparisons</li>
                </ul>
              </section>

              <section className="glass-effect p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                <h2 className="text-2xl font-semibold mb-4 text-cyber-blue">Why Trust Us</h2>
                <p className="leading-relaxed mb-4">
                  Our team consists of UK-based cybersecurity experts, tech journalists, and industry veterans who understand the unique needs 
                  of British internet users. We maintain strict editorial standards and are committed to delivering accurate, unbiased, and 
                  timely information.
                </p>
                <p className="leading-relaxed">
                  Unlike many other review sites, we don't just relay information—we test every service thoroughly, verify claims, and present 
                  our findings in a way that helps you make informed decisions about your digital privacy. Our commitment to transparency means 
                  we always disclose our testing methods and update our reviews regularly.
                </p>
              </section>

              <section className="glass-effect p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                <h2 className="text-2xl font-semibold mb-4 text-cyber-blue">Stay Connected</h2>
                <p className="leading-relaxed mb-4">
                  The world of digital privacy and security is constantly evolving, especially in the UK's dynamic regulatory environment. 
                  By following BestVPNUK, you'll stay ahead of the curve and be better equipped to protect your digital presence. Subscribe 
                  to our newsletter for weekly updates, expert insights, and exclusive content.
                </p>
                <p className="leading-relaxed">
                  Have a tip or want to contribute? We're always looking to collaborate with UK-based experts in the field. Reach out to us at
                  <a href="mailto:contact@bestvpnuk.com" className="text-cyber-blue hover:underline ml-1">
                    contact@bestvpnuk.com
                  </a>
                </p>
              </section>
            </div>

            <RelatedLinks currentPath="/about" />
          </main>
        </div>
      </div>
    </>
  );
};

export default About; 