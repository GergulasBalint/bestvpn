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
            
            {/* Rest of your About page content */}
            
            <RelatedLinks currentPath="/about" />
          </main>
        </div>
      </div>
    </>
  );
};

export default About; 