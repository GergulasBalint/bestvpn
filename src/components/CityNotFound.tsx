import { useState } from 'react';
import { Link } from 'react-router-dom';
import CyberBackground from './CyberBackground';

interface CityRequestFormData {
  cityName: string;
  region: string;
  email?: string;
  additionalInfo?: string;
}

const CityNotFound: React.FC<{ searchedCity: string }> = ({ searchedCity }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<CityRequestFormData>({
    cityName: searchedCity,
    region: '',
    email: '',
    additionalInfo: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log('City request submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative text-white">
      <CyberBackground />
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-purple-500 text-transparent bg-clip-text">
            City Not Found
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            We're currently expanding our coverage to include more UK cities.
            "{searchedCity}" is not in our database yet.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Link 
              to="/best-vpns"
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyber-blue/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-cyber-blue mb-2">
                View Best VPNs
              </h3>
              <p className="text-gray-400">
                Check our general VPN recommendations for the UK
              </p>
            </Link>
            
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyber-blue/50 transition-all duration-300 text-left w-full"
            >
              <h3 className="text-xl font-semibold text-cyber-blue mb-2">
                Request City Addition
              </h3>
              <p className="text-gray-400">
                Help us prioritize adding your city
              </p>
            </button>
          </div>
        </div>

        {showForm && !submitted && (
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
            <h2 className="text-2xl font-semibold text-cyber-blue mb-6">
              Request City Addition
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">City Name</label>
                <input
                  type="text"
                  value={formData.cityName}
                  onChange={(e) => setFormData({...formData, cityName: e.target.value})}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Region</label>
                <input
                  type="text"
                  value={formData.region}
                  onChange={(e) => setFormData({...formData, region: e.target.value})}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white"
                  placeholder="e.g., South East England"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email (optional)</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white"
                  placeholder="We'll notify you when your city is added"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Additional Information</label>
                <textarea
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white"
                  rows={4}
                  placeholder="Any specific VPN needs or concerns for your city?"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-cyber-blue text-gray-900 font-semibold py-3 rounded-lg hover:bg-cyber-blue/90 transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        )}

        {submitted && (
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-green-500/50 p-8 text-center">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h2 className="text-2xl font-semibold text-green-500 mb-4">Request Submitted!</h2>
            <p className="text-gray-300">
              Thank you for helping us improve our coverage. We'll review your request and add your city soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CityNotFound; 