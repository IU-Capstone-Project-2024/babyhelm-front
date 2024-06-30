import React from 'react';
import './featureCard.css';

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="feature-card">
        <label>{title}</label>
        <div className="feature-content">
            <div className="feature-image">
                <img src={image} alt={title} />
            </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;