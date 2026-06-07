import React from 'react';
import Hero from '../components/Hero/Hero';
import FounderSection from '../components/FounderSection/FounderSection';
import Stats from '../components/Stats/Stats';
import './HomePage.css';

const HomePage = ({ onNavigate }) => {
  return (
    <section id="page-home" className="page-home">
      <Hero onNavigate={onNavigate} />
      <FounderSection />
      <Stats />
    </section>
  );
};

export default HomePage;
