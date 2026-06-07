import React from 'react';
import './Hero.css';

const Hero = ({ onNavigate }) => {
  return (
    <div className="hero">
      <div className="hero-bg"></div>
      
      {/* SVG mandala ring */}
      <svg className="mandala-ring" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="350" cy="350" r="340" stroke="#C8922A" strokeWidth="1" />
        <circle cx="350" cy="350" r="280" stroke="#C8922A" strokeWidth="0.5" strokeDasharray="4 8" />
        <circle cx="350" cy="350" r="220" stroke="#C8922A" strokeWidth="1" />
        <circle cx="350" cy="350" r="160" stroke="#C8922A" strokeWidth="0.5" strokeDasharray="4 8" />
        <circle cx="350" cy="350" r="100" stroke="#C8922A" strokeWidth="1" />
        <line x1="350" y1="10" x2="350" y2="690" stroke="#C8922A" strokeWidth="0.5" />
        <line x1="10" y1="350" x2="690" y2="350" stroke="#C8922A" strokeWidth="0.5" />
        <line x1="100" y1="100" x2="600" y2="600" stroke="#C8922A" strokeWidth="0.5" />
        <line x1="600" y1="100" x2="100" y2="600" stroke="#C8922A" strokeWidth="0.5" />
        <line x1="56" y1="218" x2="644" y2="482" stroke="#C8922A" strokeWidth="0.3" />
        <line x1="644" y1="218" x2="56" y2="482" stroke="#C8922A" strokeWidth="0.3" />
        <line x1="218" y1="56" x2="482" y2="644" stroke="#C8922A" strokeWidth="0.3" />
        <line x1="482" y1="56" x2="218" y2="644" stroke="#C8922A" strokeWidth="0.3" />
      </svg>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">Ancient Temple • Sacred Grounds</div>
          <div className="hero-subtitle">JAI SHREE RAM</div>
          <h1 className="hero-title">
            Shree Ram
            <span> Janaki Mandir</span>
          </h1>
          <p className="hero-description">
            A divine abode of Lord Ram and Mata Janaki, where devotion has been kept alive through generations. Founded by the venerated Late Pandit Tilakdhari Upadhyay, this sacred temple continues to be a beacon of faith, devotion, and community.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => onNavigate('about')}>
              Our Sacred Story
            </button>
            <button className="btn-secondary" onClick={() => onNavigate('contact')}>
              Visit & Pray
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-img-card">
            <img 
              src="/images/Temple_Deity.jpeg" 
              alt="Temple Deity" 
              onError={(e) => e.target.parentElement.style.background = 'rgba(200,146,42,0.1)'} 
            />
          </div>
          <div className="hero-img-card">
            <img 
              src="/images/Temple.jpeg" 
              alt="Temple" 
              onError={(e) => e.target.parentElement.style.background = 'rgba(200,146,42,0.1)'} 
            />
          </div>
          <div className="hero-img-card">
            <img 
              src="/images/Temple_Exterior.jpeg" 
              alt="Temple Exterior" 
              onError={(e) => e.target.parentElement.style.background = 'rgba(200,146,42,0.1)'} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
