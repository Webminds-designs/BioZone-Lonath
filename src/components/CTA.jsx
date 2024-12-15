import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa"; // Import phone icon
import "../css/CTA.css";

const CTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  let hoverTimeout;

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout); // Clear any existing timeout
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setIsHovered(false);
    }, 2000); // Keep visible for 2 seconds
  };

  return (
    <div
      className="cta-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cta-but">
        <FaPhoneAlt size={24} /> {/* Replace text with phone icon */}
      </div>
      {isHovered && (
        <div className="cta-popup">
          <a href="tel:0777219676" className="phone-number">
            📞 077 721 9676
          </a>
          <a href="tel:0716954387" className="phone-number">
            📞 071 695 4387
          </a>
        </div>
      )}
    </div>
  );
};

export default CTA;
