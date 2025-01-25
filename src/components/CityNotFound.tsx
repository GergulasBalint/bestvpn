import React, { useState } from 'react';
import CityList from './CityList';
import { Link } from 'react-router-dom';

interface CityNotFoundProps {
  searchedCity: string;
}

const CityNotFound: React.FC<CityNotFoundProps> = ({ searchedCity }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    cityName: searchedCity,
    region: '',
    email: '',
    additionalInfo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log('Form submitted:', formData);
    setShowForm(false);
    alert('Thank you for your submission! We will review and add your city soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">City Not Found</h1>
          <p className="text-gray-400 mb-6">
            Sorry, we couldn't find any information for "{searchedCity}".
          </p>
          
          <div className="mb-8">
            <p className="text-gray-400 mb-2">Try searching for another city:</p>
            <CityList 
              placeholder="Search for a different city..."
              className="max-w-sm mx-auto"
            />
          </div>

          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="text-cyber-blue hover:text-blue-400 underline mb-8"
            >
              Request to add {searchedCity} to our database
            </button>
          ) : (
            <div className="max-w-md mx-auto bg-gray-800/50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Add New City</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">City Name</label>
                  <input
                    type="text"
                    value={formData.cityName}
                    onChange={e => setFormData({...formData, cityName: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Region</label>
                  <input
                    type="text"
                    value={formData.region}
                    onChange={e => setFormData({...formData, region: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Your Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Additional Information</label>
                  <textarea
                    value={formData.additionalInfo}
                    onChange={e => setFormData({...formData, additionalInfo: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white"
                    rows={4}
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-cyber-blue text-white rounded-lg hover:bg-blue-600"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Popular Cities and Links */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <h2 className="text-xl font-semibold mb-4">Popular Cities</h2>
            <div className="grid grid-cols-2 gap-4">
              <Link to="/city/london" className="text-cyber-blue hover:text-blue-400">London</Link>
              <Link to="/city/manchester" className="text-cyber-blue hover:text-blue-400">Manchester</Link>
              <Link to="/city/birmingham" className="text-cyber-blue hover:text-blue-400">Birmingham</Link>
              <Link to="/city/leeds" className="text-cyber-blue hover:text-blue-400">Leeds</Link>
              <Link to="/city/glasgow" className="text-cyber-blue hover:text-blue-400">Glasgow</Link>
              <Link to="/city/edinburgh" className="text-cyber-blue hover:text-blue-400">Edinburgh</Link>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
            <div className="space-y-2">
              <Link to="/best-vpns" className="block text-cyber-blue hover:text-blue-400">
                Best VPN Services
              </Link>
              <Link to="/vpn-speed-test" className="block text-cyber-blue hover:text-blue-400">
                VPN Speed Test Guide
              </Link>
              <Link to="/privacy-guide" className="block text-cyber-blue hover:text-blue-400">
                Privacy Guide
              </Link>
              <Link to="/compare-vpns" className="block text-cyber-blue hover:text-blue-400">
                Compare VPN Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityNotFound; 