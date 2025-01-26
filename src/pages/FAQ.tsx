import { FC, useState } from 'react';
import { Helmet } from 'react-helmet';
import CyberBackground from '../components/CyberBackground';

interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'privacy' | 'pricing';
}

const FAQ: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const faqs: FAQItem[] = [
    {
      question: "What is a VPN and why do I need one?",
      answer: "A VPN (Virtual Private Network) creates a secure, encrypted connection between your device and the internet. It's essential for protecting your privacy online, accessing geo-restricted content, securing public Wi-Fi connections, and preventing ISPs from tracking your browsing activity.",
      category: "general"
    },
    {
      question: "Will a VPN slow down my internet connection?",
      answer: "While a VPN can slightly reduce your connection speed due to encryption and routing, premium VPN services typically maintain 85-95% of your original speed. The impact is usually minimal and often unnoticeable for regular browsing and streaming.",
      category: "technical"
    },
    {
      question: "Is it legal to use a VPN in the UK?",
      answer: "Yes, using a VPN is completely legal in the UK. However, any illegal activities conducted while using a VPN remain illegal. VPNs are legitimate privacy tools used by individuals and businesses alike.",
      category: "privacy"
    },
    {
      question: "Can I use a VPN on multiple devices?",
      answer: "Most VPN providers offer multi-device support, typically allowing 5-10 simultaneous connections. Some providers like Surfshark offer unlimited device connections under a single subscription.",
      category: "general"
    },
    {
      question: "How much should I expect to pay for a good VPN?",
      answer: "Quality VPN services typically cost between £2-£10 per month when billed annually. While free VPNs exist, they often compromise on security, speed, and privacy. We recommend investing in a reputable paid service for better protection.",
      category: "pricing"
    },
    {
      question: "Will a VPN work with streaming services?",
      answer: "Premium VPNs are designed to work with popular streaming services like Netflix, BBC iPlayer, and Disney+. However, not all VPNs can bypass streaming restrictions effectively. Check our reviews for streaming-optimized recommendations.",
      category: "technical"
    },
    {
      question: "What's the difference between free and paid VPNs?",
      answer: "Free VPNs often have limited servers, slower speeds, data caps, and may sell your data to advertisers. Paid VPNs offer better security, faster speeds, more server locations, reliable streaming access, and proper privacy protection.",
      category: "pricing"
    },
    {
      question: "How do I know if my VPN is working?",
      answer: "You can verify your VPN is working by checking your IP address before and after connection, using DNS leak tests, and ensuring the VPN icon is visible. Many VPNs also include built-in leak protection and connection status indicators.",
      category: "technical"
    },
    {
      question: "Do I need a VPN at home if I have a secure Wi-Fi?",
      answer: "Even with secure home Wi-Fi, a VPN provides additional benefits: preventing ISP tracking, accessing geo-restricted content, protecting against surveillance, and ensuring end-to-end encryption for sensitive online activities.",
      category: "privacy"
    },
    {
      question: "What should I look for in a VPN service?",
      answer: "Key features to consider include: strong encryption (AES-256), a no-logs policy, kill switch functionality, wide server network, fast speeds, reliable streaming access, and good customer support. Price and device limits are also important factors.",
      category: "general"
    }
  ];

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>VPN FAQ - Common Questions Answered | Best VPN UK</title>
        <meta name="description" content="Find answers to frequently asked questions about VPNs, including setup, security, pricing, and technical details." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative text-white">
        <CyberBackground />
        
        <div className="relative z-10">
          <main className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text text-center">
              Frequently Asked Questions
            </h1>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === 'all' 
                    ? 'bg-cyber-blue text-gray-900' 
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                All Questions
              </button>
              {['general', 'technical', 'privacy', 'pricing'].map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full capitalize transition-colors ${
                    selectedCategory === category 
                      ? 'bg-cyber-blue text-gray-900' 
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="space-y-6">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyber-blue/50 transition-colors"
                >
                  <h2 className="text-xl font-semibold text-cyber-blue mb-3">
                    {faq.question}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-gray-700 text-sm text-gray-300 capitalize">
                      {faq.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Still Have Questions Section */}
            <div className="mt-16 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 text-center">
              <h2 className="text-2xl font-bold text-cyber-blue mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-300 mb-6">
                Can't find what you're looking for? Feel free to contact our support team.
              </p>
              <a
                href="mailto:support@bestvpnuk.com"
                className="inline-block px-6 py-3 bg-cyber-blue text-gray-900 font-semibold rounded-lg hover:bg-cyber-blue/90 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default FAQ; 