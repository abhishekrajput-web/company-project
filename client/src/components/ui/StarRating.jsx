import React from 'react';

const StarRating = ({ value }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const starValue = i + 1;
    if (starValue <= value) {
      return <i key={i} className="fas fa-star text-yellow-400"></i>;
    } else if (starValue === Math.ceil(value) && !Number.isInteger(value)) {
      return <i key={i} className="fas fa-star-half-alt text-yellow-400"></i>;
    } else {
      return <i key={i} className="far fa-star text-gray-400"></i>;
    }
  });
  return <div className="flex items-center space-x-1">{stars}</div>;
};

export default StarRating;