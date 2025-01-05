interface Review {
  vpnId: string;
  rating: number;
  comment: string;
  userName: string;
  date: string;
}

const UserReviews: React.FC<{ vpnId: string }> = ({ vpnId }) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-cyber-blue mb-4">User Reviews</h3>
      {/* Display user reviews */}
      <button className="bg-cyber-blue text-white px-4 py-2 rounded">
        Write a Review
      </button>
    </div>
  );
}; 