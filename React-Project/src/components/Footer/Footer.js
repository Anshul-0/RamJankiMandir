import React from 'react';
import './Footer.css';

const Footer = ({ onNavigate }) => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-symbol">🕉</span>
        <div className="footer-name">Shree Ram Janaki Mandir</div>
        <div className="footer-tagline">जय श्री राम — In devotion, in service, in eternity</div>
        <div className="footer-links">
          <a href="#home" onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}>Home</a>
          <a href="#about" onClick={(e) => {
            e.preventDefault();
            onNavigate('about');
          }}>Our Story</a>
          <a href="#members" onClick={(e) => {
            e.preventDefault();
            onNavigate('members');
          }}>Members</a>
          <a href="#photos" onClick={(e) => {
            e.preventDefault();
            onNavigate('photos');
          }}>Photos</a>
          <a href="#contact" onClick={(e) => {
            e.preventDefault();
            onNavigate('contact');
          }}>Contact</a>
        </div>
        <div className="footer-copy">
          Founded by Late Pandit Tilakdhari Upadhyay &nbsp;·&nbsp; Current Owner: Pandit Devendra Upadhyay &nbsp;·&nbsp; All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
