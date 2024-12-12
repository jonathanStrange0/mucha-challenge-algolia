import React from "react";
import "./StarDisplay.css";

const StarDisplay = ({ rating }) => {
  const filledStars = Math.floor(rating); // Number of fully filled stars
  const hasHalfStar = rating % 1 >= 0.5; // Check if there's a half star
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

  return (
    <div className="star-display">
      {/* Render filled stars */}
      {[...Array(filledStars)].map((_, index) => (
        <span key={`filled-${index}`} className="star filled">
          ★
        </span>
      ))}
      {/* Render half star if applicable */}
      {hasHalfStar && (
        <span key="half" className="star half">
          ★
        </span>
      )}
      {/* Render empty stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className="star empty">
          ★
        </span>
      ))}
    </div>
  );
};

export default StarDisplay;
