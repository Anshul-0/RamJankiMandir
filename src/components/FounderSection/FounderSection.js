import React from 'react';
import './FounderSection.css';

const FounderSection = () => {
  return (
    <>
      <div className="divider">
        <div className="divider-line"></div>
        <div className="divider-symbol">🪷</div>
        <div className="divider-line"></div>
      </div>

      <div className="founder-section">
        <div className="founder-frame">
          <div className="founder-portrait-placeholder">
            <img 
              src="/images/Founder_Portrait.jpeg" 
              alt="Late Pandit Tilakdhari Upadhyay" 
              onError={(e) => e.target.parentElement.style.background = 'rgba(200,146,42,0.1)'} 
            />
          </div>
          <div className="founder-tag">TEMPLE FOUNDER</div>
        </div>
        <div className="founder-text">
          <div className="section-eyebrow">In Revered Memory</div>
          <h2>Late Pandit Tilakdhari Upadhyay</h2>
          <p>
            The Shree Ram Janaki Mandir stands as a living testament to the profound devotion and vision of its revered founder, Late Pandit Tilakdhari Upadhyay. A man of deep spiritual conviction, he dedicated his life to establishing a place of worship where the divine presence of Lord Ram and Mata Janaki would be enshrined forever.
          </p>
          <p>
            His legacy lives on through the walls of this sacred mandir, in every kirtan that echoes through the halls, and in the hearts of every devotee who seeks blessings here. His spirit of seva (selfless service) continues to guide the temple's mission to this day.
          </p>
        </div>
      </div>

      <div className="section-divider">✦ ✦ ✦</div>
    </>
  );
};

export default FounderSection;
