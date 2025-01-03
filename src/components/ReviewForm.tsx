import React, { useState } from 'react';

const ReviewForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    rating: 5,
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Review submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      location: '',
      rating: 5,
      comment: ''
    });
    alert('Thank you for your review!');
  };

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-cyber-blue">Leave a Review</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-cyber-blue mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-2 bg-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyber-blue"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-cyber-blue mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-2 bg-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyber-blue"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="location" className="block text-cyber-blue mb-2">City</label>
          <input
            type="text"
            id="location"
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
            className="w-full px-4 py-2 bg-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyber-blue"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-cyber-blue mb-2">Rating</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setFormData({...formData, rating: star})}
                className={`text-2xl ${formData.rating >= star ? 'text-yellow-400' : 'text-gray-400'}`}
              >
                ★
              </button>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="comment" className="block text-cyber-blue mb-2">Your Review</label>
          <textarea
            id="comment"
            value={formData.comment}
            onChange={(e) => setFormData({...formData, comment: e.target.value})}
            className="w-full px-4 py-2 bg-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyber-blue h-32"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-cyber-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
        >
          Submit Review
        </button>
      </form>
    </section>
  );
};

export default ReviewForm; 