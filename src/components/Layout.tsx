import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import CitySearch from './CitySearch';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <nav className="bg-cyber-dark/90 backdrop-blur-sm fixed w-full z-50 border-b border-cyber-blue/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="text-cyber-blue font-bold text-xl">
                Best VPN UK
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link to="/" className="hover:text-cyber-blue transition-colors">
                  Home
                </Link>
                <Link to="/best-vpns" className="hover:text-cyber-blue transition-colors">
                  Best VPNs
                </Link>
                <Link to="/compare-features" className="hover:text-cyber-blue transition-colors">
                  Compare Features
                </Link>
                <Link to="/compare-costs" className="hover:text-cyber-blue transition-colors">
                  Compare Costs
                </Link>
                <Link to="/about" className="hover:text-cyber-blue transition-colors">
                  About
                </Link>
              </div>
            </div>

            <div className="hidden md:block w-72">
              <CitySearch variant="compact" />
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