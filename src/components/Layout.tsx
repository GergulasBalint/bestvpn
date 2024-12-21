import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-cyber-dark">
      <nav className="glass-effect sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
                BestVPNUK
              </Link>
            </div>
            <div className="flex space-x-8">
              <Link to="/" className="text-cyber-gray hover:text-cyber-blue transition-colors">
                Home
              </Link>
              <Link to="/latest" className="text-cyber-gray hover:text-cyber-blue transition-colors">
                Latest
              </Link>
              <Link to="/about" className="text-cyber-gray hover:text-cyber-blue transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="container mx-auto">
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