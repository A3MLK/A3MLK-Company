import React, { useState } from 'react';
import '../styles/Service.css';

const ServiceCard = ({ header, par, num }) => {
  const [coords, setCoords] = useState({ x: '50%', y: '50%' });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCoords({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <a
      className="service-card-v2 tmponhover mb-4"
      onMouseMove={handleMouseMove}
      style={{ '--x': coords.x, '--y': coords.y }}
    >
      <h2 className="service-card-num">
        <span>{num}</span>{header}
      </h2>
      <p className="service-para">{par}</p>
    </a>
  );
};

export default ServiceCard;
