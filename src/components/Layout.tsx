import React, { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CitySearch from './CitySearch';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActivePath = (path: string) => {
    return location.pathname === path ? "text-cyber-blue" : "hover:text-cyber-blue";
  };

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <nav className="bg-cyber-dark/90 backdrop-blur-sm fixed w-full z-50 border-b border-cyber-blue/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2">
                <img 
                  src="/images/vpn/logo.png"
                  alt="Best VPN UK" 
                  className="h-8 w-8"
                  width={32}
                  height={32}
                  loading="eager"
                  decoding="async"
                />
                <span className="text-cyber-blue font-bold text-xl">Best VPN UK</span>
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link 
                  className={`${isActivePath('/')} transition-colors`}
                  to="/"
                >
                  Home
                </Link>
                <Link 
                  className={`${isActivePath('/best-vpns')} transition-colors`}
                  to="/best-vpns"
                >
                  Best VPNs
                </Link>
                <Link 
                  className={`${isActivePath('/compare-features')} transition-colors`}
                  to="/compare-features"
                >
                  Compare Features
                </Link>
                <Link 
                  className={`${isActivePath('/compare-costs')} transition-colors`}
                  to="/compare-costs"
                >
                  Price Comparison
                </Link>
                <Link 
                  className={`${isActivePath('/resources')} transition-colors`}
                  to="/resources"
                >
                  Setup Guides
                </Link>
                <Link 
                  className={`${isActivePath('/about')} transition-colors`}
                  to="/about"
                >
                  About
                </Link>
                <Link 
                  className={`${isActivePath('/faq')} transition-colors`}
                  to="/faq"
                >
                  FAQ
                </Link>
              </div>
            </div>

            <div className="hidden md:block w-72">
              <CitySearch variant="compact" />
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-700">
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/best-vpns" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Best VPNs
              </Link>
              <Link 
                to="/compare-features" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Compare Features
              </Link>
              <Link 
                to="/compare-costs" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Compare Costs
              </Link>
              <Link 
                to="/resources" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Setup Guides
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/faq" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <div className="px-3 py-2">
                <CitySearch variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="pt-16">
        {children}
      </main>

      <footer className="glass-effect mt-auto py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-cyber-gray">
          © {new Date().getFullYear()} VPN News. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout; 