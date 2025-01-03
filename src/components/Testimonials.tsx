import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  comment: string;
  rating: number;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "James Wilson",
    location: "Manchester",
    comment: "Found the perfect VPN for streaming and security. The city-specific recommendations were spot on!",
    rating: 5,
    date: "December 2023"
  },
  {
    id: 2,
    name: "Sarah Thompson",
    location: "London",
    comment: "Really helpful comparison of VPN speeds in my area. Saved me hours of research.",
    rating: 5,
    date: "January 2024"
  },
  {
    id: 3,
    name: "David Mitchell",
    location: "Edinburgh",
    comment: "Great resource for finding a reliable VPN. The price comparisons helped me get the best deal.",
    rating: 4,
    date: "January 2024"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-cyber-blue">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-cyber-blue">{testimonial.name}</h3>
                <p className="text-sm text-cyber-gray">{testimonial.location}</p>
              </div>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
            <p className="text-cyber-gray mb-4">{testimonial.comment}</p>
            <p className="text-sm text-cyber-gray/60">{testimonial.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 